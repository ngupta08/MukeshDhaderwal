'use client'

import { useState } from 'react'
import Image from 'next/image'
import {
  Brain,
  Activity,
  BookOpen,
  MessageCircle,
  Puzzle,
  HeartHandshake,
  Dna,
  GraduationCap,
  ChevronDown,
  ArrowRight,
  Sparkles,
  Award,
  Calendar,
  Users,
} from 'lucide-react'

const phoneNumber = '919509046236'

const services = [
  {
    id: 'psychological-evaluation',
    title: 'Psychological Evaluation',
    description: "Comprehensive assessments to understand your child's strengths and challenges.",
    icon: Brain,
  },
  {
    id: 'physiotherapy',
    title: 'Physiotherapy',
    description: 'Improving movement, strength, coordination and overall physical development.',
    icon: Activity,
  },
  {
    id: 'special-education',
    title: 'Special Education',
    description: 'Individualized learning programs to help children learn, grow and thrive.',
    icon: BookOpen,
  },
  {
    id: 'speech-therapy',
    title: 'Speech Therapy',
    description: 'Supporting communication skills for better expression and understanding.',
    icon: MessageCircle,
  },
  {
    id: 'occupational-therapy',
    title: 'Occupational Therapy',
    description: 'Enhancing daily life skills, sensory processing and independence.',
    icon: Puzzle,
  },
  {
    id: 'behaviour-therapy',
    title: 'Behaviour Therapy',
    description: 'Supporting emotional regulation, positive behaviour and social skills development.',
    icon: HeartHandshake,
  },
]

const conditionCategories = [
  {
    id: 'neurodevelopmental',
    title: 'Neurodevelopmental Disorders',
    icon: Brain,
    items: [
      'Autism Spectrum Disorder (ASD)',
      'Attention Deficit Hyperactivity Disorder (ADHD)',
      'Global Developmental Delay (GDD)',
      'Intellectual Disability (ID)',
      'Learning Disorders (Dyslexia, Dysgraphia, Dyscalculia)',
      'Developmental Coordination Disorder (DCD)',
      'Specific Developmental Disorders',
    ],
  },
  {
    id: 'speech-language',
    title: 'Speech & Language Disorders',
    icon: MessageCircle,
    items: [
      'Speech Delay',
      'Language Delay',
      'Stammering (Stuttering)',
      'Articulation Disorders',
      'Communication Disorders',
      'Social Communication Difficulties',
    ],
  },
  {
    id: 'behavioral-emotional',
    title: 'Behavioral & Emotional Concerns',
    icon: HeartHandshake,
    items: [
      'Oppositional Defiant Disorder (ODD)',
      'Conduct Problems',
      'Anxiety Disorders',
      'Emotional Regulation Difficulties',
      'School Refusal',
      'Adjustment Problems',
    ],
  },
  {
    id: 'motor-physical',
    title: 'Motor & Physical Development Disorders',
    icon: Activity,
    items: [
      'Cerebral Palsy',
      'Developmental Motor Delays',
      'Hypotonia (Low Muscle Tone)',
      'Coordination and Balance Difficulties',
      'Neuromuscular Conditions requiring rehabilitation',
    ],
  },
  {
    id: 'sensory-ot',
    title: 'Sensory & Occupational Therapy Needs',
    icon: Puzzle,
    items: [
      'Sensory Processing Disorder',
      'Sensory Integration Difficulties',
      'Fine Motor Skill Delays',
      'Handwriting Difficulties',
      'Self-Care and Activities of Daily Living (ADL) Challenges',
    ],
  },
  {
    id: 'academic',
    title: 'Academic & School-Related Issues',
    icon: GraduationCap,
    items: [
      'Poor Academic Performance',
      'Learning Difficulties',
      'Attention and Concentration Problems',
      'School Readiness Concerns',
    ],
  },
  {
    id: 'genetic-neurological',
    title: 'Genetic & Neurological Conditions',
    icon: Dna,
    items: [
      'Down Syndrome',
      'Fragile X Syndrome',
      'Other Genetic Syndromes affecting development',
      'Children with epilepsy-related developmental concerns',
    ],
  },
]

const team = [
  {
    id: 'sakshi-sharma',
    name: 'Dr. Sakshi Sharma (PT)',
    role: 'Consultant Physiotherapist',
    image: '/mndc/sakshi-sharma.jpg',
    badges: ['Pediatric Neuro Rehab'],
    expertise: [
      'Pediatric Neuro Rehabilitation',
      'Developmental Delay',
      'Gross & Fine Motor Skills Training',
      'NDT',
      'Gait Training',
      'Balance & Coordination Training',
      'Sensory-Motor Integration',
      'Functional & Occupational Rehabilitation',
    ],
    focus: ['Rehabilitation', 'Functional Training', 'Parent Guidance'],
  },
  {
    id: 'kavita-sharma',
    name: 'Kavita Sharma',
    role: 'Psychologist & Special Educator (RCI Licensed)',
    image: '/mndc/kavita-sharma.jpg',
    badges: ['RCI Licensed'],
    expertise: [
      'Autism (ASD)',
      'ADHD',
      'Learning Disabilities (Dyslexia, Dysgraphia, Dyscalculia)',
      'Intellectual Disability',
      'Early Intervention',
      'Behaviour Modification',
      'Academic Remediation',
      'Social & Life Skills Training',
      'Parent Counselling',
      'School Readiness Program',
    ],
    focus: ['Intervention', 'Counselling', 'Parent Guidance'],
  },
  {
    id: 'deepak-singh',
    name: 'Deepak Singh (SLP)',
    role: 'Speech-Language Pathologist · 5 Years Experience',
    image: '/mndc/deepak-singh.jpg',
    badges: ['5+ Years Experience'],
    expertise: ['ASD', 'ADHD', 'APD', 'Speech & Neurological Disorders'],
    focus: [],
  },
]

export default function ChildDevelopmentCentre() {
  const [openCategories, setOpenCategories] = useState<Set<string>>(new Set(['neurodevelopmental']))

  const toggleCategory = (id: string) => {
    const next = new Set(openCategories)
    if (next.has(id)) {
      next.delete(id)
    } else {
      next.add(id)
    }
    setOpenCategories(next)
  }

  const enquiryUrl = (name?: string) => {
    const message = encodeURIComponent(
      name
        ? `Hello, I would like to book a consultation with ${name} at ManoUnnati Child Development Centre.`
        : 'Hello, I would like to know more about ManoUnnati Child Development Centre (MNDC) services for my child.'
    )
    return `https://wa.me/${phoneNumber}?text=${message}`
  }

  return (
    <section
      id="child-development-centre"
      className="relative py-16 md:py-24 lg:py-32 bg-gradient-to-b from-emerald-50/40 via-white to-white overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-0 w-96 h-96 bg-emerald-200/25 rounded-full mix-blend-overlay filter blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-200/25 rounded-full mix-blend-overlay filter blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(0,0,0,0.1) 1px, transparent 1px)',
            backgroundSize: '50px 50px',
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-emerald-100 to-blue-100 border border-emerald-200/60 text-emerald-700 text-xs sm:text-sm font-semibold mb-4 shadow-sm">
            <Sparkles className="w-4 h-4" />
            <span>ManoUnnati Child Development Centre (MNDC)</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4">
            Nurturing Potential.
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-teal-600 to-blue-600 mt-2">
              Empowering Every Child&apos;s Future
            </span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            A holistic, multidisciplinary approach to understand, support and empower every child to reach
            their fullest potential — offering Psychological Evaluation, Physiotherapy, Occupational Therapy,
            Special Education, and Speech Therapy under one roof.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-5 mb-14 md:mb-20">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <div
                key={service.id}
                className="group bg-white rounded-2xl border border-gray-100 shadow-md hover:shadow-xl transition-all duration-300 p-4 md:p-5 text-center animate-fade-in-up"
                style={{ animationDelay: `${index * 80}ms`, animationFillMode: 'both' }}
              >
                <div className="mx-auto mb-3 w-12 h-12 md:w-14 md:h-14 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-6 h-6 md:w-7 md:h-7 text-white" />
                </div>
                <h3 className="text-sm md:text-base font-bold text-gray-900 mb-1">{service.title}</h3>
                <p className="text-xs md:text-sm text-gray-600 leading-relaxed">{service.description}</p>
              </div>
            )
          })}
        </div>

        {/* Conditions we support */}
        <div className="mb-14 md:mb-20">
          <div className="text-center mb-8 md:mb-10">
            <h3 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-3">
              Every Child is Unique.
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-blue-600"> Every Child Can Grow.</span>
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We support children across a wide range of developmental, behavioural, and learning needs.
              Tap a category to explore what we help with.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
            {conditionCategories.map((category) => {
              const Icon = category.icon
              const isOpen = openCategories.has(category.id)
              return (
                <div
                  key={category.id}
                  className="bg-white rounded-2xl border border-gray-100 shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden"
                >
                  <button
                    onClick={() => toggleCategory(category.id)}
                    className="w-full flex items-center justify-between gap-3 p-5 text-left focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 rounded-2xl"
                    aria-expanded={isOpen}
                    aria-controls={`category-${category.id}`}
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500 to-blue-500 flex items-center justify-center shadow-sm flex-shrink-0">
                        <Icon className="w-5 h-5 text-white" />
                      </div>
                      <h4 className="text-sm md:text-base font-bold text-gray-900">{category.title}</h4>
                    </div>
                    <ChevronDown
                      className={`w-5 h-5 text-emerald-600 flex-shrink-0 transition-transform duration-300 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  <div
                    id={`category-${category.id}`}
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                      isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <div className="px-5 pb-5">
                      <div className="pt-1 border-t border-gray-100 flex flex-wrap gap-2 mt-3">
                        {category.items.map((item) => (
                          <span
                            key={item}
                            className="inline-flex items-center px-3 py-1.5 rounded-full bg-emerald-50 border border-emerald-100 text-xs md:text-sm text-gray-700"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Team section */}
        <div>
          <div className="text-center mb-8 md:mb-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-emerald-100 to-blue-100 border border-emerald-200/60 text-emerald-700 text-xs sm:text-sm font-semibold mb-4 shadow-sm">
              <Users className="w-4 h-4" />
              <span>Meet Our Team</span>
            </div>
            <h3 className="text-2xl md:text-3xl font-extrabold text-gray-900">
              Experienced &amp; Compassionate Specialists
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-7">
            {team.map((member) => (
              <div
                key={member.id}
                className="group bg-white rounded-3xl border border-gray-100 shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden flex flex-col"
              >
                <div className="relative h-64 md:h-72 w-full overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/5 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h4 className="text-lg md:text-xl font-bold text-white drop-shadow">{member.name}</h4>
                    <p className="text-xs md:text-sm text-white/90 drop-shadow">{member.role}</p>
                  </div>
                </div>

                <div className="p-5 flex flex-col flex-grow">
                  {member.badges.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-3">
                      {member.badges.map((badge) => (
                        <span
                          key={badge}
                          className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-gradient-to-r from-emerald-600 to-teal-600 text-white text-[11px] font-semibold"
                        >
                          <Award className="w-3 h-3" />
                          {badge}
                        </span>
                      ))}
                    </div>
                  )}

                  <p className="text-xs font-semibold uppercase tracking-wide text-gray-500 mb-2">
                    Areas of Expertise
                  </p>
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {member.expertise.map((skill) => (
                      <span
                        key={skill}
                        className="inline-flex items-center px-2.5 py-1 rounded-full bg-gray-100 text-[11px] md:text-xs text-gray-700"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  {member.focus.length > 0 && (
                    <p className="text-xs md:text-sm text-gray-600 mb-4">
                      <span className="font-semibold text-gray-800">Focus: </span>
                      {member.focus.join(' • ')}
                    </p>
                  )}

                  <div className="mt-auto pt-2">
                    <a
                      href={enquiryUrl(member.name)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex w-full items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 text-white text-sm font-semibold shadow-md hover:shadow-lg hover:from-emerald-700 hover:to-teal-700 transition-all"
                    >
                      Book with {member.name.split(' (')[0]}
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-14 md:mt-16 text-center">
          <div className="inline-flex flex-col items-center gap-4 bg-gradient-to-r from-emerald-600 via-teal-600 to-blue-600 text-white rounded-3xl px-6 sm:px-10 py-8 shadow-xl max-w-3xl">
            <p className="text-lg md:text-xl font-bold">Early Support. Better Outcomes. Brighter Futures.</p>
            <p className="text-emerald-50 text-sm md:text-base max-w-xl">
              Together, let&apos;s build a future full of abilities and possibilities for your child.
            </p>
            <a
              href={enquiryUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-emerald-700 font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              <Calendar className="w-5 h-5" />
              <span>Book a Developmental Assessment</span>
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
