import { NextResponse } from 'next/server'
import { initBlogTable } from '@/lib/blog'

// Initialize blog table (run once to set up database)
export async function GET() {
  try {
    await initBlogTable()
    return NextResponse.json(
      { message: 'Blog table initialized successfully' },
      { status: 200 }
    )
  } catch (error: any) {
    console.error('Error initializing blog table:', error)
    return NextResponse.json(
      { error: error.message || 'Failed to initialize blog table' },
      { status: 500 }
    )
  }
}

