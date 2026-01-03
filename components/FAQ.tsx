'use client'

import { useState } from 'react'
import { ChevronDown, HelpCircle } from 'lucide-react'

interface FAQItem {
  id: string
  question: string
  answer: string
}

const faqData: FAQItem[] = [
  {
    id: '1',
    question: 'What conditions do you treat?',
    answer: 'We provide comprehensive psychiatric care for a wide range of mental health conditions including anxiety disorders, depression, bipolar disorder, schizophrenia, OCD, PTSD, ADHD, substance use disorders, and other mood and personality disorders. We also offer counseling and therapy services.'
  },
  {
    id: '2',
    question: 'How do I book an appointment?',
    answer: 'You can book an appointment by clicking the "Book an Appointment" button on our website, which will connect you directly to WhatsApp. Alternatively, you can call us at 095090 46236 during clinic hours (9AM - 12PM, 5PM - 8PM, Monday to Saturday).'
  },
  {
    id: '3',
    question: 'What are your consultation fees?',
    answer: 'Consultation fees may vary depending on the type of consultation and treatment required. Please contact us directly via phone or WhatsApp to get detailed information about our fee structure and payment options.'
  },
  {
    id: '4',
    question: 'Do you provide online consultations?',
    answer: 'Yes, we offer both in-person and online consultations. Please discuss your preference when booking your appointment. Online consultations are conducted via secure video platforms to ensure your privacy and convenience.'
  },
  {
    id: '5',
    question: 'How long is a typical consultation?',
    answer: 'The duration of a consultation typically ranges from 30 to 60 minutes, depending on whether it\'s an initial assessment or a follow-up visit. Initial consultations may take longer as we need to understand your complete medical history and current concerns.'
  },
  {
    id: '6',
    question: 'Is my information kept confidential?',
    answer: 'Absolutely. Patient confidentiality is of utmost importance to us. All your medical information, consultations, and records are kept strictly confidential in accordance with medical ethics and legal requirements. We follow all privacy regulations to protect your personal health information.'
  },
  {
    id: '7',
    question: 'What should I bring to my first appointment?',
    answer: 'For your first appointment, please bring: (1) A valid ID proof, (2) Any previous medical records or prescriptions related to your condition, (3) A list of current medications you are taking, (4) Insurance card (if applicable), and (5) A family member or friend if you feel more comfortable (optional).'
  },
  {
    id: '8',
    question: 'Do you accept insurance?',
    answer: 'Please contact us directly to inquire about insurance acceptance and coverage. We can provide you with detailed information about which insurance plans we accept and help you understand your coverage options.'
  },
  {
    id: '9',
    question: 'What is the difference between a psychiatrist and a psychologist?',
    answer: 'A psychiatrist is a medical doctor (MD) who can diagnose mental health conditions, prescribe medications, and provide both medication management and therapy. A psychologist typically provides therapy and psychological testing but cannot prescribe medications. Dr. Mukesh Dhaderwal is a psychiatrist with MD in Psychiatry from NIMHANS, providing comprehensive psychiatric care including medication management and therapy.'
  },
  {
    id: '10',
    question: 'How do I know if I need psychiatric help?',
    answer: 'If you\'re experiencing persistent feelings of sadness, anxiety, mood swings, difficulty concentrating, changes in sleep or appetite, thoughts of self-harm, or if your mental health is affecting your daily life, work, or relationships, it may be time to seek professional help. We\'re here to help - don\'t hesitate to reach out for a consultation.'
  }
]

export default function FAQ() {
  const [openItems, setOpenItems] = useState<Set<string>>(new Set())

  const toggleItem = (id: string) => {
    const newOpenItems = new Set(openItems)
    if (newOpenItems.has(id)) {
      newOpenItems.delete(id)
    } else {
      newOpenItems.add(id)
    }
    setOpenItems(newOpenItems)
  }

  return (
    <section id="faq" className="relative py-16 md:py-24 lg:py-32 bg-gradient-to-b from-white via-gray-50 to-white overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Soft gradient orbs */}
        <div className="absolute top-20 right-20 w-96 h-96 bg-teal-200/20 rounded-full mix-blend-overlay filter blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-cyan-200/20 rounded-full mix-blend-overlay filter blur-3xl"></div>
        
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: 'radial-gradient(circle, rgba(0,0,0,0.1) 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center justify-center gap-2 mb-4">
            <HelpCircle className="w-5 h-5 text-teal-600" />
            <span className="px-4 py-2 bg-gradient-to-r from-teal-100 to-cyan-100 text-teal-700 rounded-full text-sm font-semibold">
              Frequently Asked Questions
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4">
            Got Questions?
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-teal-600 via-cyan-600 to-emerald-600 mt-2">
              We&apos;ve Got Answers
            </span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Find answers to common questions about our services, appointments, and mental health care
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqData.map((item, index) => {
            const isOpen = openItems.has(item.id)
            return (
              <div
                key={item.id}
                className="group bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden"
                style={{
                  animationDelay: `${index * 50}ms`,
                }}
              >
                {/* Question Button */}
                <button
                  onClick={() => toggleItem(item.id)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 rounded-xl"
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${item.id}`}
                >
                  <h3 className="text-lg md:text-xl font-semibold text-gray-900 pr-8 group-hover:text-teal-600 transition-colors">
                    {item.question}
                  </h3>
                  <div className="flex-shrink-0">
                    <ChevronDown
                      className={`w-6 h-6 text-teal-600 transition-transform duration-300 ${
                        isOpen ? 'transform rotate-180' : ''
                      }`}
                    />
                  </div>
                </button>

                {/* Answer Content */}
                <div
                  id={`faq-answer-${item.id}`}
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    isOpen ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="px-6 pb-5">
                    <div className="pt-2 border-t border-gray-100">
                      <p className="text-gray-600 leading-relaxed text-base md:text-lg">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* CTA Section */}
        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">
            Still have questions? We&apos;re here to help!
          </p>
          <a
            href="https://wa.me/919509046236?text=Hello, I have a question about your services."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-700 hover:to-cyan-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Contact Us on WhatsApp
            <ChevronDown className="w-4 h-4 rotate-[-90deg]" />
          </a>
        </div>
      </div>
    </section>
  )
}

