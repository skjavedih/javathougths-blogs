import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  const { email } = await req.json()

  if (!email) {
    return NextResponse.json({ error: 'Email is required' }, { status: 400 })
  }

  const API_KEY = process.env.MAILERLITE_API_KEY

  if (!API_KEY) {
    console.error('MAILERLITE_API_KEY is missing')
    return NextResponse.json({ error: 'Server configuration error' }, { status: 500 })
  }

  try {
    const response = await fetch('https://connect.mailerlite.com/api/subscribers', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${API_KEY}`,
      },
      body: JSON.stringify({
        email,
        groups: process.env.MAILERLITE_GROUP_ID ? [process.env.MAILERLITE_GROUP_ID] : [],
      }),
    })

    if (!response.ok) {
      const errorData = await response.json()
      console.error('MailerLite Error:', errorData)
      return NextResponse.json(
        { error: errorData.message || 'Failed to subscribe' },
        { status: response.status }
      )
    }

    return NextResponse.json({ message: 'Success' }, { status: 201 })
  } catch (error) {
    console.error('Subscription Error:', error)
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  }
}
