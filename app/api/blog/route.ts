import { NextRequest, NextResponse } from 'next/server'
import { getAllBlogPosts, createBlogPost, initBlogTable } from '@/lib/blog'
import { BlogPostInput } from '@/types/blog'

// GET - Fetch all blog posts
export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams
    const includeUnpublished = searchParams.get('all') === 'true'

    const posts = includeUnpublished 
      ? await getAllBlogPosts()
      : await getAllBlogPosts().then(posts => posts.filter(p => p.published))

    return NextResponse.json({ posts }, { status: 200 })
  } catch (error) {
    console.error('Error fetching blog posts:', error)
    return NextResponse.json(
      { error: 'Failed to fetch blog posts' },
      { status: 500 }
    )
  }
}

// POST - Create new blog post
export async function POST(request: NextRequest) {
  try {
    const body: BlogPostInput = await request.json()
    
    // Validate required fields
    if (!body.title || !body.slug || !body.content || !body.author) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    const post = await createBlogPost(body)
    
    return NextResponse.json({ post }, { status: 201 })
  } catch (error: any) {
    console.error('Error creating blog post:', error)
    return NextResponse.json(
      { error: error.message || 'Failed to create blog post' },
      { status: 500 }
    )
  }
}

