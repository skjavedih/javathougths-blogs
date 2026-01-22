import { NextRequest, NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'

const VIEW_COUNTS_PATH = path.join(process.cwd(), 'data', 'analytics', 'view-counts.json')

// Helper function to read view counts
function readViewCounts(): Record<string, number> {
    try {
        if (!fs.existsSync(VIEW_COUNTS_PATH)) {
            return {}
        }
        const data = fs.readFileSync(VIEW_COUNTS_PATH, 'utf-8')
        return JSON.parse(data)
    } catch (error) {
        console.error('Error reading view counts:', error)
        return {}
    }
}

// Helper function to write view counts
function writeViewCounts(counts: Record<string, number>): void {
    try {
        const dir = path.dirname(VIEW_COUNTS_PATH)
        if (!fs.existsSync(dir)) {
            fs.mkdirSync(dir, { recursive: true })
        }
        fs.writeFileSync(VIEW_COUNTS_PATH, JSON.stringify(counts, null, 2), 'utf-8')
    } catch (error) {
        console.error('Error writing view counts:', error)
    }
}

// GET: Fetch view count for a slug
export async function GET(
    request: NextRequest,
    { params }: { params: Promise<{ slug: string }> }
) {
    const { slug } = await params
    const counts = readViewCounts()
    const count = counts[slug] || 0

    return NextResponse.json({ slug, count })
}

// POST: Increment view count for a slug
export async function POST(
    request: NextRequest,
    { params }: { params: Promise<{ slug: string }> }
) {
    const { slug } = await params
    const counts = readViewCounts()

    // Increment the count
    counts[slug] = (counts[slug] || 0) + 1

    // Write back to file
    writeViewCounts(counts)

    return NextResponse.json({ slug, count: counts[slug] })
}
