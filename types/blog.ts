export interface BlogPost {
  id: string
  title: string
  slug: string
  excerpt: string
  content: string // Stores blog content text/HTML in NeonDB
  coverImage: string // Cloudinary URL
  author: string
  published: boolean
  publishedAt: Date | null
  createdAt: Date
  updatedAt: Date
  tags?: string[]
  category?: string
}

export interface BlogPostInput {
  title: string
  slug: string
  excerpt: string
  content: string // Blog content text/HTML
  coverImage: string // Cloudinary URL
  author: string
  published?: boolean
  tags?: string[]
  category?: string
}

