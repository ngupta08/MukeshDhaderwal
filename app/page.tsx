import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import ChooseYourCare from '@/components/ChooseYourCare'
import Specializations from '@/components/Specializations'
import Psychotherapy from '@/components/Psychotherapy'
import ChildDevelopmentCentre from '@/components/ChildDevelopmentCentre'
import ClinicPhotos from '@/components/ClinicPhotos'
import Gallery from '@/components/Gallery'
import YouTubeVideos from '@/components/YouTubeVideos'
import FAQ from '@/components/FAQ'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'
import Blog from '@/components/Blog'
import { getPublishedBlogPosts } from '@/lib/blog'

export const revalidate = 60

export default async function Home() {
  let recentPosts: any[] = []
  try {
    const blogPosts = await getPublishedBlogPosts()
    recentPosts = blogPosts.slice(0, 3) // Show only 3 recent posts on homepage
  } catch (error) {
    // Blog table might not be initialized yet
    console.warn('Blog not available:', error)
  }

  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <ChooseYourCare />
      <Specializations />
      <Psychotherapy />
      <ChildDevelopmentCentre />
      <ClinicPhotos />
      <Gallery />
      <YouTubeVideos />
      {recentPosts.length > 0 && <Blog posts={recentPosts} />}
      <FAQ />
      <Footer />
      <WhatsAppButton />
    </main>
  )
}

