# Blog Setup Guide

This blog system uses NeonDB (PostgreSQL) for data storage and Cloudinary for cover image storage.

## Prerequisites

1. **NeonDB Account**: Sign up at [neon.tech](https://neon.tech)
2. **Cloudinary Account**: Sign up at [cloudinary.com](https://cloudinary.com)

## Environment Variables

Create a `.env.local` file in the root directory with the following variables:

```env
# NeonDB Database Connection
DATABASE_URL=postgresql://username:password@hostname.neon.tech/dbname?sslmode=require

# Cloudinary Configuration
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```

## Setup Steps

1. **Install Dependencies** (already done):
   ```bash
   npm install @neondatabase/serverless cloudinary
   ```

2. **Initialize Database Table**:
   Visit `http://localhost:3000/api/blog/init` in your browser or use curl:
   ```bash
   curl http://localhost:3000/api/blog/init
   ```
   This will create the `blog_posts` table in your NeonDB database.

3. **Create Your First Blog Post**:
   You can use the API to create posts:
   ```bash
   curl -X POST http://localhost:3000/api/blog \
     -H "Content-Type: application/json" \
     -d '{
       "title": "Your First Blog Post",
       "slug": "your-first-blog-post",
       "excerpt": "A brief description of your post",
       "content": "<p>Your blog post content in HTML format</p>",
       "coverImage": "https://res.cloudinary.com/your-cloud/image/upload/example.jpg",
       "author": "Dr. Mukesh Dhaderwal",
       "published": true,
       "category": "Mental Health",
       "tags": ["wellness", "psychiatry"]
     }'
   ```

## Blog Features

- ✅ Full CRUD operations via API
- ✅ Cover images stored in Cloudinary
- ✅ Blog listing page at `/blog`
- ✅ Individual blog post pages at `/blog/[slug]`
- ✅ Responsive design
- ✅ SEO-friendly URLs
- ✅ Category and tags support
- ✅ Published/unpublished status

## API Endpoints

- `GET /api/blog` - Get all published blog posts
- `GET /api/blog?all=true` - Get all posts (including unpublished)
- `POST /api/blog` - Create a new blog post
- `GET /api/blog/[slug]` - Get a specific blog post
- `PUT /api/blog/[slug]` - Update a blog post
- `DELETE /api/blog/[slug]` - Delete a blog post
- `GET /api/blog/init` - Initialize database table

## Uploading Images to Cloudinary

You can upload images to Cloudinary using:
1. Cloudinary Dashboard
2. Cloudinary API
3. The upload utility in `lib/cloudinary.ts`

The cover image URL should be a full Cloudinary URL like:
`https://res.cloudinary.com/your-cloud-name/image/upload/v1234567890/your-image.jpg`

## Blog Post Structure

```typescript
{
  title: string          // Post title
  slug: string          // URL-friendly version (e.g., "my-blog-post")
  excerpt: string        // Short description
  content: string       // Full HTML content
  coverImage: string    // Cloudinary URL
  author: string        // Author name
  published: boolean    // Publication status
  category?: string     // Optional category
  tags?: string[]       // Optional tags array
}
```

