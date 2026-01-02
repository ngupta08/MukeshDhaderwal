import { sql } from './db'
import { BlogPost, BlogPostInput } from '@/types/blog'

// Initialize database table (run this once)
export async function initBlogTable() {
  try {
    await sql`
      CREATE TABLE IF NOT EXISTS blog_posts (
        id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
        title VARCHAR(255) NOT NULL,
        slug VARCHAR(255) UNIQUE NOT NULL,
        excerpt TEXT,
        content TEXT NOT NULL,
        cover_image VARCHAR(500),
        pdf_url VARCHAR(500),
        author VARCHAR(100) NOT NULL,
        published BOOLEAN DEFAULT false,
        published_at TIMESTAMP,
        created_at TIMESTAMP DEFAULT NOW(),
        updated_at TIMESTAMP DEFAULT NOW(),
        tags TEXT[],
        category VARCHAR(100)
      )
    `
    
    // Add pdf_url column if it doesn't exist (for existing tables)
    try {
      await sql`
        ALTER TABLE blog_posts 
        ADD COLUMN IF NOT EXISTS pdf_url VARCHAR(500)
      `
    } catch (alterError) {
      // Column might already exist, ignore error
      console.log('PDF URL column already exists or error adding it:', alterError)
    }
    
    console.log('Blog table initialized successfully')
  } catch (error) {
    console.error('Error initializing blog table:', error)
    throw error
  }
}

// Get all published blog posts
export async function getPublishedBlogPosts(): Promise<BlogPost[]> {
  try {
    if (!sql) return []
    const posts = await sql`
      SELECT 
        id,
        title,
        slug,
        excerpt,
        content,
        cover_image as "coverImage",
        author,
        published,
        published_at as "publishedAt",
        created_at as "createdAt",
        updated_at as "updatedAt",
        tags,
        category
      FROM blog_posts
      WHERE published = true
      ORDER BY published_at DESC NULLS LAST, created_at DESC
    `
    return posts.map((post: any) => ({
      id: post.id,
      title: post.title,
      slug: post.slug,
      excerpt: post.excerpt,
      content: post.content,
      coverImage: post.coverImage,
      author: post.author,
      published: post.published,
      publishedAt: post.publishedAt ? new Date(post.publishedAt) : null,
      createdAt: new Date(post.createdAt),
      updatedAt: new Date(post.updatedAt),
      tags: post.tags || [],
      category: post.category || undefined,
    }))
  } catch (error) {
    console.error('Error fetching blog posts:', error)
    // Return empty array if table doesn't exist yet
    return []
  }
}

// Get all blog posts (including unpublished - for admin)
export async function getAllBlogPosts(): Promise<BlogPost[]> {
  try {
    if (!sql) return []
    const posts = await sql`
      SELECT 
        id,
        title,
        slug,
        excerpt,
        content,
        cover_image as "coverImage",
        author,
        published,
        published_at as "publishedAt",
        created_at as "createdAt",
        updated_at as "updatedAt",
        tags,
        category
      FROM blog_posts
      ORDER BY created_at DESC
    `
    return posts.map((post: any) => ({
      id: post.id,
      title: post.title,
      slug: post.slug,
      excerpt: post.excerpt,
      content: post.content,
      coverImage: post.coverImage,
      author: post.author,
      published: post.published,
      publishedAt: post.publishedAt ? new Date(post.publishedAt) : null,
      createdAt: new Date(post.createdAt),
      updatedAt: new Date(post.updatedAt),
      tags: post.tags || [],
      category: post.category || undefined,
    }))
  } catch (error) {
    console.error('Error fetching all blog posts:', error)
    return []
  }
}

// Get blog post by slug (published only)
export async function getBlogPostBySlug(slug: string): Promise<BlogPost | null> {
  try {
    if (!sql) return null
    const [post] = await sql`
      SELECT 
        id,
        title,
        slug,
        excerpt,
        content,
        cover_image as "coverImage",
        author,
        published,
        published_at as "publishedAt",
        created_at as "createdAt",
        updated_at as "updatedAt",
        tags,
        category
      FROM blog_posts
      WHERE slug = ${slug} AND published = true
      LIMIT 1
    `
    
    if (!post) return null

    return {
      id: post.id,
      title: post.title,
      slug: post.slug,
      excerpt: post.excerpt,
      content: post.content,
      coverImage: post.coverImage,
      author: post.author,
      published: post.published,
      publishedAt: post.publishedAt ? new Date(post.publishedAt) : null,
      createdAt: new Date(post.createdAt),
      updatedAt: new Date(post.updatedAt),
      tags: post.tags || [],
      category: post.category || undefined,
    }
  } catch (error) {
    console.error('Error fetching blog post:', error)
    return null
  }
}

// Get blog post by slug (any status - for admin)
export async function getBlogPostBySlugAdmin(slug: string): Promise<BlogPost | null> {
  try {
    if (!sql) return null
    const [post] = await sql`
      SELECT 
        id,
        title,
        slug,
        excerpt,
        content,
        cover_image as "coverImage",
        author,
        published,
        published_at as "publishedAt",
        created_at as "createdAt",
        updated_at as "updatedAt",
        tags,
        category
      FROM blog_posts
      WHERE slug = ${slug}
      LIMIT 1
    `
    
    if (!post) return null

    return {
      id: post.id,
      title: post.title,
      slug: post.slug,
      excerpt: post.excerpt,
      content: post.content,
      coverImage: post.coverImage,
      author: post.author,
      published: post.published,
      publishedAt: post.publishedAt ? new Date(post.publishedAt) : null,
      createdAt: new Date(post.createdAt),
      updatedAt: new Date(post.updatedAt),
      tags: post.tags || [],
      category: post.category || undefined,
    }
  } catch (error) {
    console.error('Error fetching blog post:', error)
    return null
  }
}

// Create blog post
export async function createBlogPost(data: BlogPostInput): Promise<BlogPost> {
  try {
    if (!sql) throw new Error('Database not configured')
    const [post] = await sql`
      INSERT INTO blog_posts (
        title,
        slug,
        excerpt,
        content,
        cover_image,
        author,
        published,
        published_at,
        tags,
        category
      )
      VALUES (
        ${data.title},
        ${data.slug},
        ${data.excerpt},
        ${data.content},
        ${data.coverImage},
        ${data.author},
        ${data.published ?? false},
        ${data.published ? new Date() : null},
        ${data.tags || []},
        ${data.category || null}
      )
      RETURNING 
        id,
        title,
        slug,
        excerpt,
        content,
        cover_image as "coverImage",
        author,
        published,
        published_at as "publishedAt",
        created_at as "createdAt",
        updated_at as "updatedAt",
        tags,
        category
    `
    
    return {
      id: post.id,
      title: post.title,
      slug: post.slug,
      excerpt: post.excerpt,
      content: post.content,
      coverImage: post.coverImage,
      author: post.author,
      published: post.published,
      publishedAt: post.publishedAt ? new Date(post.publishedAt) : null,
      createdAt: new Date(post.createdAt),
      updatedAt: new Date(post.updatedAt),
      tags: post.tags || [],
      category: post.category || undefined,
    }
  } catch (error) {
    console.error('Error creating blog post:', error)
    throw error
  }
}

// Update blog post
export async function updateBlogPost(id: string, data: Partial<BlogPostInput>): Promise<BlogPost | null> {
  try {
    if (!sql) throw new Error('Database not configured')
    // First get the existing post
    const [existing] = await sql`
      SELECT * FROM blog_posts WHERE id = ${id}
    `
    
    if (!existing) return null

    // Merge with existing data
    const updateData = {
      title: data.title ?? existing.title,
      slug: data.slug ?? existing.slug,
      excerpt: data.excerpt ?? existing.excerpt,
      content: data.content ?? existing.content,
      cover_image: data.coverImage ?? existing.cover_image,
      author: data.author ?? existing.author,
      published: data.published !== undefined ? data.published : existing.published,
      published_at: data.published !== undefined 
        ? (data.published ? new Date() : null)
        : existing.published_at,
      tags: data.tags ?? existing.tags,
      category: data.category ?? existing.category,
      updated_at: new Date(),
    }

    const [post] = await sql`
      UPDATE blog_posts
      SET 
        title = ${updateData.title},
        slug = ${updateData.slug},
        excerpt = ${updateData.excerpt},
        content = ${updateData.content},
        cover_image = ${updateData.cover_image},
        author = ${updateData.author},
        published = ${updateData.published},
        published_at = ${updateData.published_at},
        tags = ${updateData.tags},
        category = ${updateData.category},
        updated_at = ${updateData.updated_at}
      WHERE id = ${id}
      RETURNING 
        id,
        title,
        slug,
        excerpt,
        content,
        cover_image as "coverImage",
        author,
        published,
        published_at as "publishedAt",
        created_at as "createdAt",
        updated_at as "updatedAt",
        tags,
        category
    `
    
    if (!post) return null

    return {
      id: post.id,
      title: post.title,
      slug: post.slug,
      excerpt: post.excerpt,
      content: post.content,
      coverImage: post.coverImage,
      author: post.author,
      published: post.published,
      publishedAt: post.publishedAt ? new Date(post.publishedAt) : null,
      createdAt: new Date(post.createdAt),
      updatedAt: new Date(post.updatedAt),
      tags: post.tags || [],
      category: post.category || undefined,
    }
  } catch (error) {
    console.error('Error updating blog post:', error)
    throw error
  }
}

// Delete blog post
export async function deleteBlogPost(id: string): Promise<boolean> {
  try {
    if (!sql) return false
    await sql`DELETE FROM blog_posts WHERE id = ${id}`
    return true
  } catch (error) {
    console.error('Error deleting blog post:', error)
    return false
  }
}
