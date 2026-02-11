import { NextResponse } from 'next/server'

// In-memory download counts (resets on server restart).
// For persistent tracking, replace with a database (e.g., Vercel KV, Redis, or MongoDB).
const downloadCounts: Record<string, number> = {}

export async function POST(request: Request) {
  try {
    const { slug } = await request.json()

    if (!slug || typeof slug !== 'string') {
      return NextResponse.json({ error: 'Invalid slug' }, { status: 400 })
    }

    downloadCounts[slug] = (downloadCounts[slug] || 0) + 1

    return NextResponse.json({
      slug,
      count: downloadCounts[slug],
    })
  } catch {
    return NextResponse.json({ error: 'Failed to track download' }, { status: 500 })
  }
}

export async function GET() {
  return NextResponse.json(downloadCounts)
}
