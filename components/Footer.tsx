'use client'

import Image from 'next/image'
import { MapPin, Mail, Phone, Facebook, Instagram, Linkedin, Youtube } from 'lucide-react'

export default function Footer() {
  return (
    <footer id="about" className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-teal-500 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-500 rounded-full filter blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {/* About Us Section */}
          <div className="lg:col-span-1">
            <h3 className="text-xl font-bold mb-4 text-teal-400">About Us</h3>
            <div className="mb-4">
              <Image
                src="/logo.svg"
                alt="Mano Unnati Psychiatric Hospital"
                width={60}
                height={60}
                className="object-contain mb-3"
              />
            </div>
            <p className="text-gray-300 text-sm leading-relaxed mb-4">
              Mano Unnati is a psychiatric hospital led by Dr. Mukesh Chand Daderwal (MD Psychiatry, NIMHANS),
              providing comprehensive diagnosis and medical treatment. We also have a dedicated Psychotherapy Wing
              headed by Dr Priyanka Sheoran (PhD Psychology) for counselling and psychotherapy support.
            </p>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-gray-300 text-sm">
                <Instagram className="w-4 h-4 text-teal-400 flex-shrink-0" />
                <a 
                  href="https://www.instagram.com/ek_doctor/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-teal-400 transition-colors"
                >
                  @ek_doctor
                </a>
              </div>
              <div className="flex items-center gap-2 text-gray-300 text-sm">
                <Facebook className="w-4 h-4 text-teal-400 flex-shrink-0" />
                <a 
                  href="https://www.facebook.com/mthequentin" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-teal-400 transition-colors"
                >
                  Facebook
                </a>
              </div>
            </div>
          </div>

          {/* Our Services Section */}
          <div className="lg:col-span-1">
            <h3 className="text-xl font-bold mb-4 text-teal-400">Our Services</h3>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li className="hover:text-teal-400 transition-colors cursor-pointer">
                <span className="inline-block w-2 h-2 bg-teal-400 rounded-full mr-2"></span>
                Anxiety Treatments
              </li>
              <li className="hover:text-teal-400 transition-colors cursor-pointer">
                <span className="inline-block w-2 h-2 bg-teal-400 rounded-full mr-2"></span>
                Depression
              </li>
              <li className="hover:text-teal-400 transition-colors cursor-pointer">
                <span className="inline-block w-2 h-2 bg-teal-400 rounded-full mr-2"></span>
                Schizophrenia
              </li>
              <li className="hover:text-teal-400 transition-colors cursor-pointer">
                <span className="inline-block w-2 h-2 bg-teal-400 rounded-full mr-2"></span>
                De Addiction
              </li>
              <li className="hover:text-teal-400 transition-colors cursor-pointer">
                <span className="inline-block w-2 h-2 bg-teal-400 rounded-full mr-2"></span>
                Obsessive Compulsive Disorder (OCD)
              </li>
              <li className="hover:text-teal-400 transition-colors cursor-pointer">
                <span className="inline-block w-2 h-2 bg-teal-400 rounded-full mr-2"></span>
                Child & Adolescence Psychiatric Disorder
              </li>
              <li className="hover:text-teal-400 transition-colors cursor-pointer">
                <span className="inline-block w-2 h-2 bg-teal-400 rounded-full mr-2"></span>
                Counselling & Psychotherapy
              </li>
            </ul>
          </div>

          {/* Other Services Section */}
          <div className="lg:col-span-1">
            <h3 className="text-xl font-bold mb-4 text-teal-400">Other Services</h3>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li className="hover:text-teal-400 transition-colors cursor-pointer">
                <span className="inline-block w-2 h-2 bg-cyan-400 rounded-full mr-2"></span>
                Mood Disorder
              </li>
              <li className="hover:text-teal-400 transition-colors cursor-pointer">
                <span className="inline-block w-2 h-2 bg-cyan-400 rounded-full mr-2"></span>
                Old Age Psychiatric Disorder
              </li>
              <li className="hover:text-teal-400 transition-colors cursor-pointer">
                <span className="inline-block w-2 h-2 bg-cyan-400 rounded-full mr-2"></span>
                Other Treatments
              </li>
              <li className="hover:text-teal-400 transition-colors cursor-pointer">
                <span className="inline-block w-2 h-2 bg-cyan-400 rounded-full mr-2"></span>
                Psychotherapy Wing
              </li>
              <li className="hover:text-teal-400 transition-colors cursor-pointer">
                <span className="inline-block w-2 h-2 bg-cyan-400 rounded-full mr-2"></span>
                Psychosexual Disorder
              </li>
              <li className="hover:text-teal-400 transition-colors cursor-pointer">
                <span className="inline-block w-2 h-2 bg-cyan-400 rounded-full mr-2"></span>
                Sleep Disorder
              </li>
            </ul>
          </div>

          {/* Contact Us Section */}
          <div className="lg:col-span-1">
            <h3 className="text-xl font-bold mb-4 text-teal-400">Contact Us</h3>
            <div className="space-y-4 text-gray-300 text-sm">
              {/* Address */}
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-teal-400 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="leading-relaxed">
                    Vaidh Ji ka Chouraha, 316, Pratapnagar Extension Vaidh Ji ka Chauaraha, 282, Vaidhji ka Chouraha, Pratap Nagar Vistar, Murlipura Scheme, Murlipura, Jaipur, Rajasthan 302039
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-teal-400 flex-shrink-0" />
                <a 
                  href="mailto:psychiatriccare4u@gmail.com" 
                  className="hover:text-teal-400 transition-colors"
                >
                  psychiatriccare4u@gmail.com
                </a>
              </div>

              {/* Phone */}
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-teal-400 flex-shrink-0" />
                  <a 
                    href="tel:+919509046236" 
                    className="hover:text-teal-400 transition-colors"
                  >
                  095090 46236
                  </a>
              </div>

              {/* Social Media */}
              <div className="flex items-center gap-4 pt-2">
                <a
                  href="https://www.facebook.com/mthequentin"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-slate-700 hover:bg-teal-600 rounded-full flex items-center justify-center transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                  href="https://www.instagram.com/ek_doctor/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-slate-700 hover:bg-teal-600 rounded-full flex items-center justify-center transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="https://www.linkedin.com/in/dr-mukesh-chand-daderwal-902b39210"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-slate-700 hover:bg-teal-600 rounded-full flex items-center justify-center transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="https://www.youtube.com/@Daderwalmukesh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-slate-700 hover:bg-teal-600 rounded-full flex items-center justify-center transition-colors"
                  aria-label="YouTube"
                >
                  <Youtube className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-slate-700">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
            <p>
              © {new Date().getFullYear()} Mano Unnati Neuropsychiatry & De-addiction Care. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="hover:text-teal-400 transition-colors">Privacy Policy</a>
              <span>|</span>
              <a href="#" className="hover:text-teal-400 transition-colors">Terms of Service</a>
            </div>
          </div>
          {/* Made by attribution - subtle and professional */}
          <div className="mt-6 text-center">
            <p className="text-xs text-gray-500">
              Made with ❤️ by{' '}
              <a 
                href="https://www.dataplayconsulting.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-teal-400 transition-colors font-medium"
              >
                DataPlay Consulting
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

