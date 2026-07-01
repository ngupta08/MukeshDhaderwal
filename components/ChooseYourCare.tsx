'use client'

import { Stethoscope, HeartHandshake, Sparkles, ArrowRight, Brain, MessageCircle } from 'lucide-react'

const phoneNumber = '919509046236'

const wings = [
  {
    id: 'psychiatry',
    href: '#specializations',
    label: 'Psychiatry Wing',
    name: 'Dr. Mukesh Chand Daderwal',
    role: 'MD Psychiatry, NIMHANS',
    description: 'Diagnosis & medical treatment for anxiety, depression, mood disorders, addiction & more.',
    icon: Stethoscope,
    gradient: 'from-teal-600 to-cyan-600',
    message: 'Hello, I would like to book an appointment with Dr. Mukesh Chand Daderwal (Psychiatry).',
  },
  {
    id: 'psychotherapy',
    href: '#psychotherapy',
    label: 'Psychotherapy Wing',
    name: 'Dr Priyanka Sheoran',
    role: 'PhD (Psychology), Psychotherapist',
    description: 'Counselling & talk therapy for stress, relationships, self-esteem, grief & burnout.',
    icon: HeartHandshake,
    gradient: 'from-cyan-600 to-emerald-600',
    message: 'Hello, I would like to book a counselling / psychotherapy session with Dr. Priyanka Sheoran.',
  },
  {
    id: 'child-development',
    href: '#child-development-centre',
    label: 'Child Development Centre',
    name: 'ManoUnnati (MNDC)',
    role: 'Psychological, Speech, OT & Physio Team',
    description: 'Evaluation & therapy for developmental delays, ASD, ADHD, speech & learning difficulties.',
    icon: Sparkles,
    gradient: 'from-emerald-600 to-teal-600',
    message: 'Hello, I would like to know more about ManoUnnati Child Development Centre (MNDC) services for my child.',
  },
]

export default function ChooseYourCare() {
  return (
    <section
      id="choose-care"
      className="relative -mt-10 md:-mt-16 lg:-mt-20 z-20 pb-14 md:pb-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-6 md:mb-8">
          <p className="text-white/90 md:text-gray-500 text-sm font-semibold uppercase tracking-wider drop-shadow">
            Three dedicated wings, one caring team
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6">
          {wings.map((wing) => {
            const Icon = wing.icon
            const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(wing.message)}`
            return (
              <div
                key={wing.id}
                className="group relative rounded-3xl bg-white shadow-xl hover:shadow-2xl border border-gray-100 overflow-hidden transition-all duration-300"
              >
                <a href={wing.href} className="block p-6 md:p-7">
                  <div
                    className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${wing.gradient} flex items-center justify-center shadow-lg mb-4 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <p className="text-xs font-bold uppercase tracking-wide text-teal-700 mb-1">{wing.label}</p>
                  <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-1">{wing.name}</h3>
                  <p className="text-xs md:text-sm text-gray-500 font-medium mb-3">{wing.role}</p>
                  <p className="text-sm text-gray-600 leading-relaxed mb-4 min-h-[3.5rem]">{wing.description}</p>
                  <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-teal-700 group-hover:gap-2.5 transition-all">
                    Explore
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </a>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center justify-center gap-2 px-4 py-3 text-white text-sm font-semibold bg-gradient-to-r ${wing.gradient} hover:brightness-110 transition-all`}
                >
                  <MessageCircle className="w-4 h-4" />
                  Book on WhatsApp
                </a>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
