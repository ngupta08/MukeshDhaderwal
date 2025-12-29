'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Menu, X, Phone } from 'lucide-react'
import { Button } from './ui'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Contact', href: '#contact' },
  ]

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
                <span className="text-xs text-gray-600">Neuropsychiatry & De-addiction Care</span>
              </div>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
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
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-gray-700 hover:text-blue-600 transition-colors font-medium py-2"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <a href="tel:+919509046236" className="w-full">
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

