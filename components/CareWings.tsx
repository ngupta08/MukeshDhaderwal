'use client'

import { ArrowRight, Brain, HeartHandshake, MessageCircle, Stethoscope } from 'lucide-react'

export default function CareWings() {
  const phoneNumber = '919509046236'

  const psychMessage = encodeURIComponent(
    'Hello, I would like to book an appointment with Dr. Mukesh Chand Daderwal (Psychiatry).'
  )
  const therapyMessage = encodeURIComponent(
    'Hello, I would like to book a counselling / psychotherapy session with Dr. Priyanka Sheoran (Psychotherapy Wing).'
  )

  const psychUrl = `https://wa.me/${phoneNumber}?text=${psychMessage}`
  const therapyUrl = `https://wa.me/${phoneNumber}?text=${therapyMessage}`

  return (
    <section
      id="care"
      className="relative py-14 md:py-20 bg-gradient-to-b from-white via-gray-50 to-white overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-80 h-80 bg-teal-200/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-cyan-200/20 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 md:mb-10">
          <p className="text-sm font-semibold text-teal-700">
            Mano Unnati Psychiatric Hospital — Two dedicated wings
          </p>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-gray-900 mt-2">
            Choose the care you need
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mt-2 text-sm md:text-base">
            Psychiatry for diagnosis & medical treatment, and psychotherapy for counselling, skills, and long-term emotional healing.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 md:gap-7">
          {/* Psychiatry */}
          <div className="group relative rounded-3xl border border-gray-100 bg-white/90 backdrop-blur-md shadow-xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-teal-600/10 via-transparent to-cyan-600/10 opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative p-6 md:p-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-teal-600 to-cyan-600 flex items-center justify-center shadow-lg">
                  <Stethoscope className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <p className="text-xs font-semibold uppercase tracking-wider text-teal-700 mb-1">
                    Psychiatry Wing
                  </p>
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900">
                    Dr. Mukesh Chand Daderwal
                  </h3>
                  <p className="text-sm text-gray-600 mt-1">
                    Diagnosis, medication management, and comprehensive psychiatric care.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 mt-5 text-sm">
                <div className="rounded-2xl bg-gray-50 border border-gray-100 p-4">
                  <div className="flex items-center gap-2 font-semibold text-gray-900">
                    <Brain className="w-4 h-4 text-teal-600" />
                    Evidence-based care
                  </div>
                  <p className="text-xs text-gray-600 mt-1">
                    Anxiety, depression, mood disorders, sleep, addiction & more.
                  </p>
                </div>
                <div className="rounded-2xl bg-gray-50 border border-gray-100 p-4">
                  <div className="flex items-center gap-2 font-semibold text-gray-900">
                    <MessageCircle className="w-4 h-4 text-teal-600" />
                    Follow-ups & support
                  </div>
                  <p className="text-xs text-gray-600 mt-1">
                    Structured plans with regular reviews and guidance.
                  </p>
                </div>
              </div>

              <div className="mt-6">
                <a
                  href={psychUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-full items-center justify-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-teal-600 to-cyan-600 text-white font-semibold shadow-md hover:shadow-lg hover:from-teal-700 hover:to-cyan-700 transition-all"
                >
                  Book Psychiatry Appointment
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Psychotherapy */}
          <div className="group relative rounded-3xl border border-gray-100 bg-white/90 backdrop-blur-md shadow-xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-600/10 via-transparent to-emerald-600/10 opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative p-6 md:p-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-cyan-600 to-emerald-600 flex items-center justify-center shadow-lg">
                  <HeartHandshake className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <p className="text-xs font-semibold uppercase tracking-wider text-cyan-700 mb-1">
                    Psychotherapy Wing
                  </p>
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900">
                    Dr Priyanka Sheoran
                  </h3>
                  <p className="text-sm text-gray-600 mt-1">
                    PhD (Psychology) · Psychotherapist — counselling & psychotherapy support.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 mt-5 text-sm">
                <div className="rounded-2xl bg-gray-50 border border-gray-100 p-4">
                  <div className="flex items-center gap-2 font-semibold text-gray-900">
                    <MessageCircle className="w-4 h-4 text-cyan-600" />
                    Talk therapy
                  </div>
                  <p className="text-xs text-gray-600 mt-1">
                    Stress, relationships, self-esteem, grief, overthinking & burnout.
                  </p>
                </div>
                <div className="rounded-2xl bg-gray-50 border border-gray-100 p-4">
                  <div className="flex items-center gap-2 font-semibold text-gray-900">
                    <Brain className="w-4 h-4 text-cyan-600" />
                    Skills & tools
                  </div>
                  <p className="text-xs text-gray-600 mt-1">
                    Practical coping strategies you can apply between sessions.
                  </p>
                </div>
              </div>

              <div className="mt-6">
                <a
                  href={therapyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-full items-center justify-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-cyan-600 to-emerald-600 text-white font-semibold shadow-md hover:shadow-lg hover:from-cyan-700 hover:to-emerald-700 transition-all"
                >
                  Book Psychotherapy Session
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}


