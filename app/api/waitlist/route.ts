import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  try {
    const { email, state } = await req.json()

    if (!email || !email.includes('@')) {
      return NextResponse.json({ error: 'Valid email required' }, { status: 400 })
    }

    // Log to console for now — replace with Resend/Mailchimp when API key is ready
    console.log('Waitlist signup:', { email, state, timestamp: new Date().toISOString() })

    // TODO: Replace with actual Resend integration:
    // await resend.contacts.create({ email, audienceId: process.env.RESEND_AUDIENCE_ID })

    return NextResponse.json({ success: true })
  } catch {
    return NextResponse.json({ error: 'Something went wrong' }, { status: 500 })
  }
}
