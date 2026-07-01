'use client'

import { useState, useRef, useEffect } from 'react'
import Image from 'next/image'
import { Menu, X, Phone, ChevronDown, Stethoscope, HeartHandshake, Sparkles } from 'lucide-react'
import { Button } from './ui'

const serviceLinks = [
  { label: 'Psychiatry', href: '/#specializations', icon: Stethoscope },
  { label: 'Psychotherapy', href: '/#psychotherapy', icon: HeartHandshake },
  { label: 'Child Development Centre', href: '/#child-development-centre', icon: Sparkles },
]

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'Visit Us', href: '/#visit-us' },
  { label: 'Gallery', href: '/#gallery' },
  { label: 'Blog', href: '/blog' },
  { label: 'FAQ', href: '/#faq' },
]

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false)
  const servicesRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (servicesRef.current && !servicesRef.current.contains(event.target as Node)) {
        setServicesOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/" className="flex items-center gap-3">
              <Image
                src="/logo.svg"
                alt="Mano Unnati Neuropsychiatry and De-addiction Care"
                width={48}
                height={48}
                className="object-contain"
              />
              <div className="flex flex-col">
                <span className="text-lg font-bold text-gray-900">Mano Unnati</span>
                <span className="text-xs text-gray-600">Psychiatry · Psychotherapy · Child Development</span>
              </div>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-7">
            <a href="/" className="text-gray-700 hover:text-teal-600 transition-colors font-medium">
              Home
            </a>

            {/* Services Dropdown */}
            <div className="relative" ref={servicesRef}>
              <button
                onClick={() => setServicesOpen((v) => !v)}
                className="flex items-center gap-1 text-gray-700 hover:text-teal-600 transition-colors font-medium focus:outline-none"
                aria-expanded={servicesOpen}
              >
                Services
                <ChevronDown className={`w-4 h-4 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
              </button>
              {servicesOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-72 bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden py-2 animate-fade-in-up">
                  {serviceLinks.map((service) => {
                    const Icon = service.icon
                    return (
                      <a
                        key={service.label}
                        href={service.href}
                        onClick={() => setServicesOpen(false)}
                        className="flex items-center gap-3 px-4 py-3 hover:bg-teal-50 transition-colors"
                      >
                        <span className="w-9 h-9 rounded-lg bg-gradient-to-br from-teal-500 to-cyan-500 flex items-center justify-center flex-shrink-0">
                          <Icon className="w-4.5 h-4.5 text-white" />
                        </span>
                        <span className="text-sm font-semibold text-gray-800">{service.label}</span>
                      </a>
                    )
                  })}
                </div>
              )}
            </div>

            {navItems.slice(1).map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-gray-700 hover:text-teal-600 transition-colors font-medium"
              >
                {item.label}
              </a>
            ))}
            <a href="tel:+919509046236">
              <Button variant="primary" className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                095090 46236
              </Button>
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col gap-1">
              <a
                href="/"
                className="text-gray-700 hover:text-teal-600 transition-colors font-medium py-2.5 px-2 rounded-lg hover:bg-teal-50"
                onClick={() => setIsOpen(false)}
              >
                Home
              </a>

              {/* Mobile Services accordion */}
              <button
                onClick={() => setMobileServicesOpen((v) => !v)}
                className="flex items-center justify-between text-gray-700 hover:text-teal-600 transition-colors font-medium py-2.5 px-2 rounded-lg hover:bg-teal-50"
              >
                Services
                <ChevronDown className={`w-4 h-4 transition-transform ${mobileServicesOpen ? 'rotate-180' : ''}`} />
              </button>
              {mobileServicesOpen && (
                <div className="ml-2 flex flex-col gap-1 mb-1">
                  {serviceLinks.map((service) => {
                    const Icon = service.icon
                    return (
                      <a
                        key={service.label}
                        href={service.href}
                        className="flex items-center gap-2.5 text-gray-600 hover:text-teal-600 transition-colors text-sm py-2 px-2 rounded-lg hover:bg-teal-50"
                        onClick={() => {
                          setIsOpen(false)
                          setMobileServicesOpen(false)
                        }}
                      >
                        <Icon className="w-4 h-4 text-teal-600" />
                        {service.label}
                      </a>
                    )
                  })}
                </div>
              )}

              {navItems.slice(1).map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-gray-700 hover:text-teal-600 transition-colors font-medium py-2.5 px-2 rounded-lg hover:bg-teal-50"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <a href="tel:+919509046236" className="w-full mt-2">
                <Button variant="primary" className="w-full flex items-center justify-center gap-2">
                  <Phone className="w-4 h-4" />
                  095090 46236
                </Button>
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
