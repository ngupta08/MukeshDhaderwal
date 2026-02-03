'use client'

import Image from 'next/image'
import { HeartHandshake, MessageCircle, Brain, Sparkles } from 'lucide-react'

export default function Psychotherapy() {
  const phoneNumber = '919509046236'
  const message = encodeURIComponent(
    'Hello, I would like to book a psychotherapy / counselling session with Dr. Priyanka Sheoran.'
  )
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`

  return (
    <section
      id="psychotherapy"
      className="relative py-16 md:py-24 lg:py-28 bg-gradient-to-b from-white via-teal-50/30 to-white overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-16 -right-10 w-72 h-72 bg-teal-200/30 rounded-full mix-blend-overlay blur-3xl" />
        <div className="absolute -bottom-20 -left-10 w-80 h-80 bg-cyan-200/30 rounded-full mix-blend-overlay blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage:
              'radial-gradient(circle, rgba(0,0,0,0.12) 1px, transparent 1px)',
            backgroundSize: '46px 46px',
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-10 md:mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-teal-100 to-cyan-100 border border-teal-200/60 text-teal-700 text-xs sm:text-sm font-semibold mb-4 shadow-sm">
            <HeartHandshake className="w-4 h-4" />
            <span>Psychotherapy & Counselling</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-3">
            Healing Through
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-teal-600 via-cyan-600 to-emerald-600 mt-1">
              Psychotherapy & Talk Therapy
            </span>
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Evidence-based, compassionate psychotherapy for emotional, behavioural, and relationship
            challenges – in a safe, non-judgmental space.
          </p>
        </div>

        {/* Main content card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          {/* Left: Big photo */}
          <div className="lg:col-span-5">
            <div className="relative h-full rounded-3xl bg-white/90 backdrop-blur-md shadow-xl border border-teal-100 overflow-hidden">
              {/* Accent strip */}
              <div className="absolute -top-10 -right-10 w-28 h-28 bg-gradient-to-br from-teal-500 to-cyan-500 opacity-70 rounded-3xl rotate-12" />
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-emerald-400 to-teal-500 opacity-60 rounded-3xl -translate-x-6 translate-y-6" />

              {/* Big photo header */}
              <div className="relative z-10">
                <div className="relative h-[420px] sm:h-[520px] lg:h-[640px] w-full overflow-hidden">
                  <Image
                    src="/priyanka.jpeg"
                    alt="Dr Priyanka Sheoran"
                    fill
                    className="object-cover object-[50%_20%]"
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    priority={false}
                  />
                  {/* Readability overlays */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/15 to-transparent" />
                  <div className="absolute inset-0 bg-gradient-to-br from-teal-600/10 to-cyan-600/10" />

                  <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6">
                    <p className="text-[11px] sm:text-xs uppercase tracking-[0.22em] text-white/90 font-semibold mb-1 drop-shadow">
                      Psychotherapy Wing
                    </p>
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight drop-shadow">
                      Dr Priyanka Sheoran
                    </h3>
                    <p className="text-sm sm:text-base text-white/90 font-semibold drop-shadow">
                      PhD (Psychology) · Psychotherapist
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Key info + CTA (moved from below photo) */}
          <div className="lg:col-span-7">
            <div className="h-full rounded-3xl bg-white/95 backdrop-blur-md shadow-xl border border-gray-100 p-6 sm:p-7 md:p-8 flex flex-col justify-between">
              <div className="space-y-5 md:space-y-6">
                <div>
                  <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-2">
                    Psychotherapy, with clarity and comfort
                  </h3>
                  <p className="text-sm md:text-base text-gray-600">
                    Sessions are structured yet flexible — focused on helping you gain clarity,
                    develop healthier coping skills, and feel emotionally supported.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5 text-sm md:text-base">
                  <div className="rounded-2xl bg-teal-50 border border-teal-100 p-4 flex items-start gap-3">
                    <div className="mt-0.5">
                      <Brain className="w-5 h-5 text-teal-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">15+ Years Experience</p>
                      <p className="text-xs md:text-sm text-gray-600 mt-1">
                        Counselling & psychotherapy for individuals, couples, and families.
                      </p>
                    </div>
                  </div>

                  <div className="rounded-2xl bg-cyan-50 border border-cyan-100 p-4 flex items-start gap-3">
                    <div className="mt-0.5">
                      <MessageCircle className="w-5 h-5 text-cyan-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Safe, Non‑Judgmental Space</p>
                      <p className="text-xs md:text-sm text-gray-600 mt-1">
                        Confidential conversations focused on your pace and comfort.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="rounded-2xl bg-gradient-to-r from-teal-600 to-cyan-600 text-white p-5 flex items-start gap-3 shadow-lg">
                  <Sparkles className="w-5 h-5 mt-0.5 text-teal-100" />
                  <div>
                    <p className="font-semibold text-sm md:text-base">When is psychotherapy helpful?</p>
                    <p className="text-xs md:text-sm text-teal-50 mt-1 leading-relaxed">
                      Persistent stress, anxiety, low mood, relationship difficulties, trauma,
                      overthinking, burnout, or when you simply feel overwhelmed and want to
                      understand yourself better.
                    </p>
                  </div>
                </div>

                <div className="pt-1">
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex w-full items-center justify-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-teal-600 to-cyan-600 text-white text-sm md:text-base font-semibold shadow-md hover:shadow-lg hover:from-teal-700 hover:to-cyan-700 transition-all duration-200"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Book a Psychotherapy Session on WhatsApp</span>
                  </a>
                  <p className="mt-2 text-[11px] md:text-xs text-gray-500 text-center">
                    No obligation. Share your concern briefly — we&apos;ll guide you on next steps.
                  </p>
                </div>
              </div>

              <p className="mt-6 text-xs md:text-sm text-gray-500">
                Psychotherapy can be taken alone or along with psychiatric care from Dr. Mukesh
                Chand Daderwal, depending on your needs. Together, we aim for holistic mental health
                support.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}


