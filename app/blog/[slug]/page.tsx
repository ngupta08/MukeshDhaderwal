import Image from 'next/image'
import Link from 'next/link'
import { Calendar, User, ArrowLeft } from 'lucide-react'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'
import { getBlogPostBySlug, getPublishedBlogPosts } from '@/lib/blog'
import { notFound } from 'next/navigation'

export const revalidate = 60

interface BlogPostPageProps {
  params: {
    slug: string
  }
}

export async function generateStaticParams() {
  try {
    const posts = await getPublishedBlogPosts()
    return posts.map((post) => ({
      slug: post.slug,
    }))
  } catch (error) {
    // Return empty array if table doesn't exist yet
    console.warn('Blog table not initialized yet:', error)
    return []
  }
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const post = await getBlogPostBySlug(params.slug)

  if (!post) {
    notFound()
  }

  return (
    <main className="min-h-screen">
      <Navigation />
      <article className="min-h-screen bg-white">
      {/* Header with cover image */}
      <div className="relative w-full flex items-center justify-center bg-gray-100 pt-16 md:pt-20 lg:pt-24 pb-8">
        {post.coverImage ? (
          <div className="relative w-full max-w-6xl mx-auto px-4">
            <Image
              src={post.coverImage}
              alt={post.title}
              width={1200}
              height={800}
              className="w-full h-auto object-contain rounded-lg shadow-lg"
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1200px"
            />
          </div>
        ) : (
          <div className="w-full h-64 md:h-96 lg:h-[500px] bg-gradient-to-br from-teal-500 to-cyan-500" />
        )}
        
        {/* Back button */}
        <div className="absolute top-4 left-4 z-10">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 px-4 py-2 bg-white/90 backdrop-blur-sm text-gray-900 rounded-lg hover:bg-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Blog</span>
          </Link>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Meta Information */}
        <div className="mb-8">
          {post.category && (
            <span className="inline-block px-3 py-1 bg-teal-100 text-teal-700 rounded-full text-sm font-semibold mb-4">
              {post.category}
            </span>
          )}
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            {post.title}
          </h1>

          <div className="flex flex-wrap items-center gap-6 text-gray-600">
            <div className="flex items-center gap-2">
              <User className="w-5 h-5 text-teal-600" />
              <span className="font-medium">{post.author}</span>
            </div>
            {post.publishedAt && (
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5 text-teal-600" />
                <span>{new Date(post.publishedAt).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}</span>
              </div>
            )}
          </div>
        </div>

        {/* Excerpt */}
        {post.excerpt && (
          <div className="mb-8 p-6 bg-teal-50 border-l-4 border-teal-500 rounded-r-lg">
            <p className="text-lg text-gray-700 italic">{post.excerpt}</p>
          </div>
        )}

        {/* Tags */}
        {post.tags && post.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-8">
            {post.tags.map((tag, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
              >
                #{tag}
              </span>
            ))}
          </div>
        )}

        {/* Article Content - From NeonDB */}
        <div className="prose prose-lg max-w-none mb-12">
          <div dangerouslySetInnerHTML={{ __html: post.content }} />
        </div>

        {/* Back to Blog */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-teal-600 hover:text-teal-700 font-semibold"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Back to all articles</span>
          </Link>
        </div>
      </div>
    </article>
    <Footer />
    <WhatsAppButton />
    </main>
  )
}

