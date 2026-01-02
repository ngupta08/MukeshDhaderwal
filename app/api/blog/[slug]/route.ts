import { NextRequest, NextResponse } from 'next/server'
import { getBlogPostBySlug, getBlogPostBySlugAdmin, updateBlogPost, deleteBlogPost } from '@/lib/blog'
import { BlogPostInput } from '@/types/blog'

// GET - Fetch blog post by slug
export async function GET(
  request: NextRequest,
  { params }: { params: { slug: string } }
) {
  try {
    const post = await getBlogPostBySlug(params.slug)
    
    if (!post) {
      return NextResponse.json(
        { error: 'Blog post not found' },
        { status: 404 }
      )
    }

    return NextResponse.json({ post }, { status: 200 })
  } catch (error) {
    console.error('Error fetching blog post:', error)
    return NextResponse.json(
      { error: 'Failed to fetch blog post' },
      { status: 500 }
    )
  }
}

// PUT - Update blog post
export async function PUT(
  request: NextRequest,
  { params }: { params: { slug: string } }
) {
  try {
    const body: Partial<BlogPostInput> = await request.json()
    // Use admin function to get unpublished posts too
    const post = await getBlogPostBySlugAdmin(params.slug)
    
    if (!post) {
      return NextResponse.json(
        { error: 'Blog post not found' },
        { status: 404 }
      )
    }

    const updatedPost = await updateBlogPost(post.id, body)
    
    return NextResponse.json({ post: updatedPost }, { status: 200 })
  } catch (error: any) {
    console.error('Error updating blog post:', error)
    return NextResponse.json(
      { error: error.message || 'Failed to update blog post' },
      { status: 500 }
    )
  }
}

// DELETE - Delete blog post
export async function DELETE(
  request: NextRequest,
  { params }: { params: { slug: string } }
) {
  try {
    // Use admin function to get unpublished posts too
    const post = await getBlogPostBySlugAdmin(params.slug)
    
    if (!post) {
      return NextResponse.json(
        { error: 'Blog post not found' },
        { status: 404 }
      )
    }

    const success = await deleteBlogPost(post.id)
    
    if (!success) {
      return NextResponse.json(
        { error: 'Failed to delete blog post' },
        { status: 500 }
      )
    }

    return NextResponse.json({ message: 'Blog post deleted successfully' }, { status: 200 })
  } catch (error) {
    console.error('Error deleting blog post:', error)
    return NextResponse.json(
      { error: 'Failed to delete blog post' },
      { status: 500 }
    )
  }
}

