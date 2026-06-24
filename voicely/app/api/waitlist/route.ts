import { supabase } from '@/lib/supabase'
import { resend } from '@/lib/resend'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { email } = body

    if (!email || !email.includes('@')) {
      return NextResponse.json(
        { success: false, message: 'Please provide a valid email address' },
        { status: 400 }
      )
    }

    const { data: existingEmail, error: existingError } = await supabase
      .from('waitlist_emails')
      .select('*')
      .eq('email', email)
      .single()

    if (existingEmail) {
      return NextResponse.json(
        { success: false, message: "You're already on the list!" },
        { status: 409 }
      )
    }

    const { data, error } = await supabase
      .from('waitlist_emails')
      .insert([{ email, source: 'landing_page' }]) as { data: any; error: any }

    if (error) {
      console.error('Supabase insert error:', error)
      return NextResponse.json(
        { success: false, message: 'Failed to join waitlist' },
        { status: 500 }
      )
    }

    try {
      await resend.emails.send({
        from: 'Voicely Team <hello@voicely.app>',
        to: email,
        subject: 'You\'re on the Voicely waitlist 🎙️',
        html: `
          <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 40px; background-color: #ffffff; border-radius: 12px; box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);">
            <div style="text-align: center; margin-bottom: 32px;">
              <h1 style="color: #4F46E5; font-size: 28px; margin-bottom: 8px;">Welcome to Voicely! 🎙️</h1>
              <p style="color: #6B7280; font-size: 16px;">You&apos;re officially on the waitlist.</p>
            </div>
            
            <div style="background-color: #F9FAFB; border-radius: 8px; padding: 24px; margin-bottom: 32px;">
              <h2 style="color: #1F2937; font-size: 20px; margin-bottom: 16px;">What&apos;s Next?</h2>
              <ul style="color: #4B5563; font-size: 16px; line-height: 1.6; margin: 0; padding-left: 20px;">
                <li style="margin-bottom: 8px;">You&apos;ll be notified the moment Voicely launches</li>
                <li style="margin-bottom: 8px;">Early waitlist users get exclusive launch pricing</li>
                <li style="margin-bottom: 8px;">Get first access to Hindi, Marathi & English voice typing</li>
                <li style="margin-bottom: 8px;">Help shape the future of voice technology</li>
              </ul>
            </div>
            
            <div style="text-align: center; margin-top: 32px;">
              <p style="color: #9CA3AF; font-size: 14px;">Need help? Just reply to this email</p>
            </div>
          </div>
        `,
      })
    } catch (emailError) {
      console.error('Resend error:', emailError)
    }

    return NextResponse.json(
      { success: true, message: "You're on the list!" },
      { status: 200 }
    )
  } catch (error) {
    console.error('Waitlist API error:', error)
    return NextResponse.json(
      { success: false, message: 'Internal server error' },
      { status: 500 }
    )
  }
}
