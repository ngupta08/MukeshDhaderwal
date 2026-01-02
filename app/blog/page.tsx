import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'
import Blog from '@/components/Blog'
import { getPublishedBlogPosts } from '@/lib/blog'

export const revalidate = 60 // Revalidate every 60 seconds

export default async function BlogPage() {
  let posts: any[] = []
  try {
    posts = await getPublishedBlogPosts()
  } catch (error) {
    // Blog table might not be initialized yet
    console.warn('Blog not available:', error)
  }

  return (
    <main className="min-h-screen">
      <Navigation />
      <Blog posts={posts} />
      <Footer />
      <WhatsAppButton />
    </main>
  )
}

