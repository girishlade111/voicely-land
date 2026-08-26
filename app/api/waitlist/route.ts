import { NextRequest, NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabase";
import { getResend } from "@/lib/resend";
import { isValidEmail } from "@/lib/validation";
import { checkRateLimit } from "@/lib/rate-limit";

/*
  Supabase table schema:
  CREATE TABLE waitlist_emails (
    id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
    email TEXT UNIQUE NOT NULL,
    source TEXT DEFAULT 'landing_page',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT now()
  );
*/

const MAX_EMAIL_LENGTH = 254;

function isDuplicateEmailError(error: { code?: string; message?: string }): boolean {
  return error.code === "23505" || (error.message?.includes("duplicate key") ?? false);
}

function getClientIp(request: NextRequest): string {
  const forwarded = request.headers.get("x-forwarded-for");
  if (forwarded) {
    return forwarded.split(",")[0].trim();
  }
  return request.headers.get("x-real-ip") ?? "unknown";
}

export async function POST(request: NextRequest) {
  try {
    if (!checkRateLimit(`waitlist:${getClientIp(request)}`)) {
      return NextResponse.json(
        { success: false, message: "Too many requests. Please try again later." },
        { status: 429, headers: { "Retry-After": "60" } }
      );
    }

    const body = await request.json().catch(() => null);
    const rawEmail = typeof body?.email === "string" ? body.email.trim() : "";

    if (!rawEmail || rawEmail.length > MAX_EMAIL_LENGTH || !isValidEmail(rawEmail)) {
      return NextResponse.json(
        { success: false, message: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    const normalizedEmail = rawEmail.toLowerCase();
    const admin = supabaseAdmin;

    if (!admin) {
      console.error("Supabase admin client not initialized - missing env vars");
      return NextResponse.json(
        { success: false, message: "Something went wrong. Please try again." },
        { status: 500 }
      );
    }

    const { error: insertError } = await admin
      .from("waitlist_emails")
      .insert({ email: normalizedEmail, source: "landing_page" });

    if (insertError) {
      if (isDuplicateEmailError(insertError)) {
        return NextResponse.json(
          { success: false, message: "You're already on the list!" },
          { status: 409 }
        );
      }
      console.error("Supabase insert error:", insertError);
      return NextResponse.json(
        { success: false, message: "Something went wrong. Please try again." },
        { status: 500 }
      );
    }

    try {
      const resend = await getResend();
      if (resend) {
        await resend.emails.send({
          from: "Voicely Team <hello@voicely.app>",
          to: normalizedEmail,
          subject: "You're on the Voicely waitlist 🎙️",
          html: `
            <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 480px; margin: 0 auto; padding: 32px 24px;">
              <h1 style="font-size: 24px; font-weight: 700; color: #09090b; margin-bottom: 16px;">
                You're on the list! 🎉
              </h1>
              <p style="font-size: 16px; line-height: 1.6; color: #52525b; margin-bottom: 24px;">
                Thanks for joining the Voicely waitlist. You're now confirmed and will be among the
                first to know when we launch.
              </p>
              <p style="font-size: 16px; line-height: 1.6; color: #52525b; margin-bottom: 24px;">
                As a waitlist member, you'll get <strong style="color: #09090b;">priority access</strong>
                and <strong style="color: #09090b;">exclusive launch pricing</strong> 🎁
              </p>
              <div style="background: #f4f4f5; border-radius: 12px; padding: 20px; margin-bottom: 24px;">
                <p style="font-size: 14px; color: #52525b; margin: 0;">
                  <strong style="color: #09090b;">What happens next?</strong><br/>
                  We'll notify you the moment early access opens. No spam, no data sharing —
                  just one email when we're ready for you.
                </p>
              </div>
              <p style="font-size: 14px; color: #a1a1aa; border-top: 1px solid #e4e4e7; padding-top: 16px;">
                Voicely — Speak. It Types. Anywhere.
              </p>
            </div>
          `,
        });
      }
    } catch (emailError) {
      console.error("Resend email error:", emailError);
    }

    return NextResponse.json(
      { success: true, message: "You're on the list!" },
      { status: 200 }
    );
  } catch {
    return NextResponse.json(
      { success: false, message: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
