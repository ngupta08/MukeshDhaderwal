'use client'

import Image from 'next/image'
import { 
  Brain, 
  Baby,
  Users,
  Cigarette,
  Stethoscope,
  Activity,
  Heart,
  Moon,
  Zap,
  ArrowRight,
  Calendar
} from 'lucide-react'

interface Specialization {
  id: string
  title: string
  description: string
  icon: React.ElementType
  gradient: string
  borderColor: string
  imagePath?: string
  backgroundImage?: string
}

const specializations: Specialization[] = [
  {
    id: 'child-psychiatry',
    title: 'Child Psychiatry',
    description: 'Specialized mental health care for children and adolescents, addressing developmental, emotional, and behavioral challenges with age-appropriate treatments.',
    icon: Baby,
    gradient: 'from-pink-500 to-rose-500',
    borderColor: 'border-pink-300/80',
    backgroundImage: 'https://res.cloudinary.com/dd0e4iwau/image/upload/v1766732293/child_psychaitry_wvbzrj.jpg'
  },
  {
    id: 'geriatric-psychiatry',
    title: 'Geriatric Psychiatry',
    description: 'Comprehensive mental health care for older adults, addressing age-related psychiatric conditions, dementia, and cognitive disorders with specialized expertise.',
    icon: Users,
    gradient: 'from-purple-500 to-indigo-500',
    borderColor: 'border-purple-300/80',
    backgroundImage: 'https://res.cloudinary.com/dd0e4iwau/image/upload/v1766732293/Geriatric_Psychiatry_bdnyue.jpg'
  },
  {
    id: 'de-addiction',
    title: 'De Addiction',
    description: 'Expert treatment for substance use disorders including tobacco, alcohol, and drug addiction with comprehensive detox and rehabilitation programs.',
    icon: Cigarette,
    gradient: 'from-red-500 to-orange-500',
    borderColor: 'border-red-300/80',
    backgroundImage: 'https://res.cloudinary.com/dd0e4iwau/image/upload/v1766732294/de_addiction_ptusig.jpg'
  },
  {
    id: 'clinical-liaison-psychiatry',
    title: 'Clinical Liaison Psychiatry',
    description: 'Integrated psychiatric care for patients with medical conditions, providing consultation-liaison services to bridge mental and physical health.',
    icon: Stethoscope,
    gradient: 'from-teal-500 to-cyan-500',
    borderColor: 'border-teal-300/80',
    backgroundImage: 'https://res.cloudinary.com/dd0e4iwau/image/upload/v1766732293/clinical_liaison_haliwi.jpg'
  },
  {
    id: 'neurology',
    title: 'Neurology',
    description: 'Expert diagnosis and treatment of neurological disorders, brain conditions, and neurological aspects of psychiatric illnesses with advanced neuroimaging.',
    icon: Brain,
    gradient: 'from-violet-500 to-purple-500',
    borderColor: 'border-violet-300/80',
    backgroundImage: 'https://res.cloudinary.com/dd0e4iwau/image/upload/v1766732294/neurology_mglc97.jpg'
  },
  {
    id: 'sexual-disorders',
    title: 'Sexual Disorders',
    description: 'Comprehensive evaluation and treatment of sexual dysfunctions, disorders, and related psychological concerns with sensitivity and evidence-based approaches.',
    icon: Heart,
    gradient: 'from-rose-500 to-pink-500',
    borderColor: 'border-rose-300/80',
    backgroundImage: 'https://res.cloudinary.com/dd0e4iwau/image/upload/v1766732294/sexual_disorder_m7ni5g.jpg'
  },
  {
    id: 'sleep-disorders',
    title: 'Sleep Disorders',
    description: 'Specialized treatment for insomnia, sleep apnea, circadian rhythm disorders, and other sleep-related conditions affecting mental and physical health.',
    icon: Moon,
    gradient: 'from-blue-500 to-indigo-500',
    borderColor: 'border-blue-300/80',
    backgroundImage: 'https://res.cloudinary.com/dd0e4iwau/image/upload/v1766732294/sleep_disorder_w2btca.jpg'
  },
  {
    id: 'brain-stimulation',
    title: 'Brain Stimulation',
    description: 'Advanced brain stimulation therapies including TMS, ECT, and other neuromodulation techniques for treatment-resistant psychiatric conditions.',
    icon: Zap,
    gradient: 'from-amber-500 to-yellow-500',
    borderColor: 'border-amber-300/80',
    backgroundImage: 'https://res.cloudinary.com/dd0e4iwau/image/upload/v1766732293/brain_stimulation_oy38jq.jpg'
  }
]

export default function Specializations() {
  const phoneNumber = '919509046236'
  const message = encodeURIComponent('Hello, I would like to schedule a consultation with Dr. Mukesh Chand Daderwal.')
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`

  return (
    <section id="services" className="relative py-16 md:py-24 lg:py-32 bg-gradient-to-b from-gray-50 via-white to-gray-50 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Soft gradient orbs */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-teal-200/20 rounded-full mix-blend-overlay filter blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-200/20 rounded-full mix-blend-overlay filter blur-3xl"></div>
        
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: 'radial-gradient(circle, rgba(0,0,0,0.1) 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16 lg:mb-20">
          <div className="inline-block mb-4">
            <span className="px-4 py-2 bg-gradient-to-r from-teal-100 to-cyan-100 text-teal-700 rounded-full text-sm font-semibold">
              Our Specializations
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4">
            Expert Care Across
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-teal-600 via-cyan-600 to-emerald-600 mt-2">
              All Mental Health Areas
            </span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            NIMHANS-trained expertise in comprehensive psychiatric care. Experience compassionate, evidence-based treatment 
            tailored to your unique needs across all age groups and mental health conditions.
          </p>
        </div>

        {/* Specializations Grid - Horizontal scroll on mobile, grid on larger screens */}
        <div className="sm:grid sm:grid-cols-2 lg:grid-cols-4 sm:gap-6 md:gap-8">
          {/* Mobile: Horizontal scrollable container */}
          <div className="flex sm:hidden gap-4 overflow-x-auto pb-4 -mx-4 px-4 snap-x snap-mandatory scrollbar-hide">
            {specializations.map((spec, index) => {
              const Icon = spec.icon
              return (
                <div
                  key={spec.id}
                  className="group relative rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 ease-in-out overflow-hidden border-2 border-gray-100 hover:border-opacity-100 min-h-[400px] w-[85vw] flex-shrink-0 snap-center animate-fade-in-up"
                  style={{
                    animationDelay: `${index * 100}ms`,
                    animationFillMode: 'both'
                  }}
                >
                  {/* Background Image */}
                  {spec.backgroundImage ? (
                    <div className="absolute inset-0">
                      <Image
                        src={spec.backgroundImage}
                        alt={spec.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                        sizes="(max-width: 768px) 85vw, (max-width: 1200px) 50vw, 25vw"
                      />
                      {/* Dark overlay for text readability */}
                      <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/60 to-black/70 group-hover:from-black/60 group-hover:via-black/50 group-hover:to-black/60 transition-all duration-300"></div>
                    </div>
                  ) : (
                    <div className="absolute inset-0 bg-slate-800"></div>
                  )}
                  
                  {/* Card Content */}
                  <div className="relative p-6 md:p-8 h-full flex flex-col z-10">
                    {/* Icon */}
                    <div className={`mb-4 w-14 h-14 md:w-16 md:h-16 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:bg-white/30 transition-all duration-300`}>
                      <Icon className="w-7 h-7 md:w-8 md:h-8 text-white" />
                    </div>

                    {/* Title */}
                    <h3 className="text-xl md:text-2xl font-bold text-white mb-3 drop-shadow-lg group-hover:text-teal-200 transition-colors duration-300">
                      {spec.title}
                    </h3>

                    {/* Description */}
                    <p className="text-white/90 text-sm md:text-base leading-relaxed flex-grow mb-4 drop-shadow-md">
                      {spec.description}
                    </p>

                    {/* Learn More Link */}
                    <div className="flex items-center text-sm font-semibold text-white group-hover:text-teal-200 transition-colors">
                      <span>Learn more</span>
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </div>

                    {/* Decorative corner element */}
                    <div className="absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-bl-full transform translate-x-10 -translate-y-10 group-hover:opacity-20 transition-opacity"></div>
                  </div>

                  {/* Hover border effect */}
                  <div className={`absolute inset-0 border-2 border-white/50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-20`}></div>
                </div>
              )
            })}
          </div>

          {/* Desktop: Grid layout */}
          {specializations.map((spec, index) => {
            const Icon = spec.icon
            return (
              <div
                key={spec.id}
                className="hidden sm:block group relative rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 ease-in-out overflow-hidden border-2 border-gray-100 hover:border-opacity-100 min-h-[400px] animate-fade-in-up"
                style={{
                  animationDelay: `${index * 100}ms`,
                  animationFillMode: 'both'
                }}
              >
                {/* Background Image */}
                {spec.backgroundImage ? (
                  <div className="absolute inset-0">
                    <Image
                      src={spec.backgroundImage}
                      alt={spec.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    />
                    {/* Dark overlay for text readability */}
                    <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/60 to-black/70 group-hover:from-black/60 group-hover:via-black/50 group-hover:to-black/60 transition-all duration-300"></div>
                  </div>
                ) : (
                  <div className="absolute inset-0 bg-slate-800"></div>
                )}
                
                {/* Card Content */}
                <div className="relative p-6 md:p-8 h-full flex flex-col z-10">
                  {/* Icon */}
                  <div className={`mb-4 w-14 h-14 md:w-16 md:h-16 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:bg-white/30 transition-all duration-300`}>
                    <Icon className="w-7 h-7 md:w-8 md:h-8 text-white" />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-3 drop-shadow-lg group-hover:text-teal-200 transition-colors duration-300">
                    {spec.title}
                  </h3>

                  {/* Description */}
                  <p className="text-white/90 text-sm md:text-base leading-relaxed flex-grow mb-4 drop-shadow-md">
                    {spec.description}
                  </p>

                  {/* Learn More Link */}
                  <div className="flex items-center text-sm font-semibold text-white group-hover:text-teal-200 transition-colors">
                    <span>Learn more</span>
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>

                  {/* Decorative corner element */}
                  <div className="absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-bl-full transform translate-x-10 -translate-y-10 group-hover:opacity-20 transition-opacity"></div>
                </div>

                {/* Hover border effect */}
                <div className={`absolute inset-0 border-2 border-white/50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-20`}></div>
              </div>
            )
          })}
        </div>

        {/* Call to Action */}
        <div className="mt-12 md:mt-16 text-center">
          <p className="text-gray-600 mb-6 text-lg">
            Not sure which specialization fits your needs?
          </p>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-700 hover:to-cyan-700 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            <Calendar className="w-5 h-5" />
            <span>Schedule a Consultation</span>
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  )
}
