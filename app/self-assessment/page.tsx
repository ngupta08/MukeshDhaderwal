import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'
import PHQ9Questionnaire from '@/components/PHQ9Questionnaire'

export const metadata = {
  title: 'Self-Assessment - PHQ-9 | Mano Unnati Neuropsychiatry',
  description: 'Take the PHQ-9 (Patient Health Questionnaire-9) self-assessment to evaluate your mental health. Professional psychiatric care available.',
}

export default function SelfAssessmentPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-white">
      <Navigation />
      <div className="pt-16 sm:pt-20 pb-8 sm:pb-12 md:pb-16">
        <PHQ9Questionnaire />
      </div>
      <Footer />
      <WhatsAppButton />
    </main>
  )
}
