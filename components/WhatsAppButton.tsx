'use client'

import { MessageCircle } from 'lucide-react'

export default function WhatsAppButton() {
  const phoneNumber = '919509046236'
  const message = encodeURIComponent('Hello, I would like to book an appointment with Dr. Mukesh Dhaderwal.')
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#20BA5A] text-white rounded-full p-4 shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-110 group"
      aria-label="Contact us on WhatsApp"
    >
      <MessageCircle className="w-6 h-6 md:w-7 md:h-7" />
      <span className="absolute -top-2 -right-2 bg-white text-[#25D366] text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center animate-pulse">
        <span className="absolute inline-flex rounded-full h-3 w-3 bg-white opacity-75 animate-ping"></span>
      </span>
    </a>
  )
}

