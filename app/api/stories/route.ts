import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const { firstName, location, category, title, whatHappened, whatTheyDid, outcome, contactEmail } = body

    if (!whatHappened || whatHappened.length < 50) {
      return NextResponse.json({ error: 'Please provide more detail about what happened' }, { status: 400 })
    }

    // Log submission for now — connect to Supabase or email later
    console.log('Story submission:', {
      firstName,
      location,
      category,
      title,
      whatHappened: whatHappened.slice(0, 100) + '...',
      whatTheyDid:
        typeof whatTheyDid === 'string' && whatTheyDid.length > 0
          ? whatTheyDid.slice(0, 100) + '...'
          : whatTheyDid,
      outcome,
      contactEmail,
      submittedAt: new Date().toISOString(),
    })

    return NextResponse.json({ success: true })
  } catch {
    return NextResponse.json({ error: 'Something went wrong' }, { status: 500 })
  }
}
