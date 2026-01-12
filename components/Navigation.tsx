'use client'

import { useState } from 'react'
import { usePathname } from 'next/navigation'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import { Menu, X, Phone } from 'lucide-react'
import { Button } from './ui'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()
  const router = useRouter()

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '#services' },
    { label: 'Self-Assessment', href: '/self-assessment' },
    { label: 'Blog', href: '/blog' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Contact', href: '#contact' },
  ]

  const handleNavClick = (href: string, e: React.MouseEvent<HTMLAnchorElement>) => {
    // If it's a hash link
    if (href.startsWith('#')) {
      e.preventDefault()
      
      // If we're not on the home page, navigate to home first
      if (pathname !== '/') {
        router.push('/')
        // Close mobile menu
        setIsOpen(false)
        // Wait for navigation, then scroll
        setTimeout(() => {
          const element = document.querySelector(href)
          if (element) {
            // Account for fixed navbar height
            const yOffset = -80
            const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset
            window.scrollTo({ top: y, behavior: 'smooth' })
          }
        }, 300)
      } else {
        // We're on home page, just scroll
        const element = document.querySelector(href)
        if (element) {
          // Account for fixed navbar height
          const yOffset = -80
          const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset
          window.scrollTo({ top: y, behavior: 'smooth' })
        }
        // Close mobile menu
        setIsOpen(false)
      }
      return
    }
    // For non-hash links, just close the menu
    setIsOpen(false)
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/" className="flex items-center gap-2 sm:gap-3">
              <Image 
                src="/logo.svg" 
                alt="Mano Unnati Neuropsychiatry and De-addiction Care" 
                width={40}
                height={40}
                className="object-contain w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12"
              />
              <div className="flex flex-col">
                <span className="text-sm sm:text-base md:text-lg font-bold text-gray-900 leading-tight">Mano Unnati</span>
                <span className="text-[10px] sm:text-xs text-gray-600 leading-tight hidden sm:block">Neuropsychiatry & De-addiction Care</span>
                <span className="text-[10px] text-gray-600 leading-tight sm:hidden">Neuropsychiatry</span>
              </div>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleNavClick(item.href, e)}
                className="text-sm lg:text-base text-gray-700 hover:text-blue-600 transition-colors font-medium whitespace-nowrap"
              >
                {item.label}
              </a>
            ))}
            <a href="tel:+919509046236" className="hidden lg:block">
              <Button variant="primary" className="flex items-center gap-2 text-sm lg:text-base">
                <Phone className="w-4 h-4" />
                095090 46236
              </Button>
            </a>
            <a href="tel:+919509046236" className="lg:hidden">
              <Button variant="primary" className="flex items-center gap-1.5 px-3 py-1.5 text-xs">
                <Phone className="w-3.5 h-3.5" />
                <span className="hidden xl:inline">095090 46236</span>
                <span className="xl:hidden">Call</span>
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
          <div className="md:hidden pb-4 border-t border-gray-200 mt-2 pt-4">
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-base text-gray-700 hover:text-blue-600 hover:bg-gray-50 transition-colors font-medium py-3 px-3 rounded-lg active:bg-gray-100"
                  onClick={(e) => handleNavClick(item.href, e)}
                >
                  {item.label}
                </a>
              ))}
              <a 
                href="tel:+919509046236" 
                className="w-full mt-2"
                onClick={() => setIsOpen(false)}
              >
                <Button variant="primary" className="w-full flex items-center justify-center gap-2 py-3">
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

