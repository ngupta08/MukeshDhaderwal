'use client'

import Image from 'next/image'
import { Calendar, Stethoscope, Award, Clock, ArrowRight, Star, Phone } from 'lucide-react'

export default function Hero() {
  const phoneNumber = '919509046236'
  const message = encodeURIComponent('Hello, I would like to book an appointment with Dr. Mukesh Chand Daderwal.')
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`
  const telUrl = `tel:+${phoneNumber}`

  const trustStats = [
    { icon: Stethoscope, value: 'Ex Asst. Professor', label: 'SMS Medical College', color: 'from-teal-500 to-cyan-500' },
    { icon: Star, value: '4.9 / 5', label: '400+ Reviews', color: 'from-cyan-500 to-teal-500', rating: true },
    { icon: Clock, value: '11+ Years', label: 'Experience', color: 'from-emerald-500 to-green-500' },
  ]

  return (
    <section className="relative min-h-[88vh] md:min-h-[85vh] flex items-center pt-24 pb-16 md:pb-24 overflow-hidden">
      {/* Full Background Image */}
      <div className="absolute inset-0 z-0 w-full h-full">
        <Image
          src="/sadness_mukesh_happy.png"
          alt="Dr. Mukesh Chand Daderwal"
          fill
          priority
          className="object-cover object-[center_15%]"
        />
        {/* Lighter overlay on mobile (text card provides readability), darker on desktop */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/20 via-teal-900/15 to-cyan-900/20 md:from-slate-900/60 md:via-teal-900/45 md:to-cyan-900/55" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-black/10 md:from-black/40 md:to-black/20" />
      </div>

      {/* Soft, calming background effects */}
      <div className="absolute inset-0 overflow-hidden z-[1] pointer-events-none">
        <div className="absolute top-20 right-20 w-[600px] h-[600px] bg-teal-200/20 rounded-full mix-blend-overlay filter blur-3xl animate-pulse" />
        <div className="absolute bottom-20 left-20 w-[500px] h-[500px] bg-cyan-200/20 rounded-full mix-blend-overlay filter blur-3xl animate-pulse animation-delay-2000" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          {/* Text content */}
          <div className="lg:col-span-7">
            {/* On mobile, card is darker so it's readable without heavy background overlay */}
            <div className="bg-slate-900/55 backdrop-blur-sm lg:bg-transparent lg:backdrop-blur-none rounded-3xl border border-white/15 lg:border-none p-6 sm:p-8 lg:p-0 shadow-2xl lg:shadow-none">
              {/* Trust Badge */}
              <div className="inline-flex items-center gap-3 px-5 py-3 bg-gradient-to-r from-teal-600/95 to-cyan-600/95 backdrop-blur-sm rounded-xl shadow-xl border border-white/20 mb-6">
                <div>
                  <div className="text-white font-bold text-sm sm:text-base drop-shadow-lg">Dr. Mukesh Chand Daderwal</div>
                  <div className="flex items-center gap-2 mt-0.5">
                    <Award className="w-3.5 h-3.5 text-white drop-shadow-md" />
                    <span className="text-white font-medium text-xs drop-shadow-md">MD Psychiatry, NIMHANS</span>
                  </div>
                </div>
              </div>

              {/* Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-white leading-tight drop-shadow-2xl mb-5">
                We Take Care
                <span
                  className="block text-transparent bg-clip-text bg-gradient-to-r from-teal-200 via-cyan-200 to-emerald-200 mt-1 drop-shadow-xl"
                  style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.5)' }}
                >
                  of Your Mental Health
                </span>
              </h1>

              {/* Subtitle */}
              <p
                className="text-base sm:text-lg lg:text-xl text-white/95 mb-8 leading-relaxed max-w-2xl font-medium drop-shadow-xl"
                style={{ textShadow: '1px 1px 4px rgba(0,0,0,0.7)' }}
              >
                Expert, compassionate care for the whole family — psychiatry, psychotherapy, and
                a dedicated Child Development Centre — all under one roof in Jaipur.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-7 py-4 text-base shadow-xl hover:shadow-2xl transition-all flex items-center justify-center gap-2 bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-700 hover:to-cyan-700 text-white font-bold rounded-xl"
                >
                  <Calendar className="w-5 h-5" />
                  Book an Appointment
                  <ArrowRight className="w-4 h-4" />
                </a>
                <a
                  href={telUrl}
                  className="px-7 py-4 text-base shadow-xl hover:shadow-2xl transition-all flex items-center justify-center gap-2 bg-white/90 hover:bg-white text-teal-700 font-bold rounded-xl border-2 border-white/60"
                >
                  <Phone className="w-5 h-5" />
                  Call Now
                </a>
              </div>
            </div>
          </div>

          {/* Trust Indicator Cards */}
          <div className="lg:col-span-5">
            <div className="grid grid-cols-3 lg:grid-cols-1 gap-3">
              {trustStats.map((stat) => {
                const Icon = stat.icon
                return (
                  <div
                    key={stat.label}
                    className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg p-3 lg:p-4 border-2 border-white/60 hover:scale-105 transition-transform lg:max-w-[280px] lg:mx-auto lg:w-full"
                  >
                    <div className="flex flex-col lg:flex-row items-center text-center lg:text-left gap-2 lg:gap-3">
                      {stat.rating ? (
                        <div className="flex items-center gap-0.5 flex-shrink-0">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-3 h-3 lg:w-4 lg:h-4 text-yellow-500 fill-yellow-500" />
                          ))}
                        </div>
                      ) : (
                        <div
                          className={`w-9 h-9 lg:w-12 lg:h-12 bg-gradient-to-br ${stat.color} rounded-full flex items-center justify-center shadow-md flex-shrink-0`}
                        >
                          <Icon className="w-4 h-4 lg:w-6 lg:h-6 text-white" />
                        </div>
                      )}
                      <div className="min-w-0">
                        <div className="text-gray-900 font-bold text-xs sm:text-sm lg:text-lg leading-tight">{stat.value}</div>
                        <div className="text-gray-600 text-[10px] sm:text-xs lg:text-sm font-medium leading-tight">{stat.label}</div>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
