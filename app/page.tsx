import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import Specializations from '@/components/Specializations'
import ClinicPhotos from '@/components/ClinicPhotos'
import Gallery from '@/components/Gallery'
import YouTubeVideos from '@/components/YouTubeVideos'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <Specializations />
      <ClinicPhotos />
      <Gallery />
      <YouTubeVideos />
      <Footer />
      <WhatsAppButton />
    </main>
  )
}

