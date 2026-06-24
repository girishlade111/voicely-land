import { NextRequest, NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabase";
import { resend } from "@/lib/resend";

/*
  Supabase table schema:
  CREATE TABLE waitlist_emails (
    id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
    email TEXT UNIQUE NOT NULL,
    source TEXT DEFAULT 'landing_page',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT now()
  );
*/

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email } = body;

    if (!email || typeof email !== "string") {
      return NextResponse.json(
        { success: false, message: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim())) {
      return NextResponse.json(
        { success: false, message: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    const normalizedEmail = email.trim().toLowerCase();

    const { data: existing } = await supabaseAdmin
      .from("waitlist_emails")
      .select("id")
      .eq("email", normalizedEmail)
      .maybeSingle();

    if (existing) {
      return NextResponse.json(
        { success: false, message: "You're already on the list!" },
        { status: 409 }
      );
    }

    const { error: insertError } = await supabaseAdmin
      .from("waitlist_emails")
      .insert({ email: normalizedEmail, source: "landing_page" });

    if (insertError) {
      console.error("Supabase insert error:", insertError);
      return NextResponse.json(
        { success: false, message: "Something went wrong. Please try again." },
        { status: 500 }
      );
    }

    try {
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
