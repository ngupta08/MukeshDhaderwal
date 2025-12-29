'use client'

import Image from 'next/image'
import { MapPin, Clock, Phone } from 'lucide-react'
import { clinicPhotos, getClinicPhotoUrl } from '@/data/clinicPhotos'

export default function ClinicPhotos() {
  // Get the first available clinic image for background, or use a default
  const backgroundImage = clinicPhotos.length > 0 && clinicPhotos[0] 
    ? getClinicPhotoUrl(clinicPhotos[0]) 
    : null

  return (
    <section className="relative py-16 md:py-24 lg:py-32 overflow-hidden">
      {/* Background Image */}
      {backgroundImage && backgroundImage !== '/clinic/placeholder.jpg' && (
        <div className="absolute inset-0 z-0">
          {backgroundImage.startsWith('http') ? (
            <img
              src={backgroundImage}
              alt="Clinic"
              className="w-full h-full object-cover"
            />
          ) : (
            <Image
              src={backgroundImage}
              alt="Clinic"
              fill
              className="object-cover"
              sizes="100vw"
              priority={false}
            />
          )}
          {/* Dark overlay for readability */}
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900/70 via-teal-900/60 to-cyan-900/70"></div>
          {/* Additional subtle overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/30"></div>
        </div>
      )}

      {/* Fallback background if no image */}
      {(!backgroundImage || backgroundImage === '/clinic/placeholder.jpg') && (
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-teal-50/30 to-cyan-50/30"></div>
      )}

      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 opacity-[0.03] z-[1]" style={{
        backgroundImage: 'radial-gradient(circle, rgba(0,0,0,0.1) 1px, transparent 1px)',
        backgroundSize: '40px 40px'
      }}></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 drop-shadow-lg">
            Visit Us
          </h2>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto drop-shadow-md">
            Conveniently located at Vaidh Ji ka Chouraha, Pratap Nagar Extension, Murlipura, Jaipur. We&apos;re here to provide expert psychiatric care in a professional setting.
          </p>
        </div>

        {/* Clinic Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 md:mb-16">
          {/* Location Card */}
          <div className="group relative rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 border-2 border-white/20 backdrop-blur-sm bg-gradient-to-br from-teal-600/90 to-cyan-600/90">
            <div className="relative p-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border-2 border-white/30">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-white mb-1 drop-shadow-md">Location</h3>
                  <p className="text-sm text-white/90 drop-shadow-sm">316, Pratapnagar Extension, Vaidh Ji ka Chouraha, Pratap Nagar Vistar, Murlipura Scheme, Murlipura, Jaipur, Rajasthan 302039</p>
                </div>
              </div>
            </div>
          </div>

          {/* Timings Card */}
          <div className="group relative rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 border-2 border-white/20 backdrop-blur-sm bg-gradient-to-br from-cyan-600/90 to-teal-600/90">
            <div className="relative p-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border-2 border-white/30">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-white mb-1 drop-shadow-md">Timings</h3>
                  <p className="text-sm text-white/90 drop-shadow-sm">9AM - 12PM, 5PM - 8 PM</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Card */}
          <div className="group relative rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 border-2 border-white/20 backdrop-blur-sm bg-gradient-to-br from-emerald-600/90 to-teal-600/90">
            <div className="relative p-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border-2 border-white/30">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-white mb-1 drop-shadow-md">Contact</h3>
                  <p className="text-sm text-white/90 drop-shadow-sm">095090 46236</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12 md:mt-16">
          <p className="text-white/90 mb-6 text-lg drop-shadow-md">
            Experience compassionate care in a comfortable environment
          </p>
          <a
            href="tel:+919509046236"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white/90 backdrop-blur-sm text-teal-700 font-semibold rounded-xl hover:bg-white transition-all duration-300 shadow-xl hover:shadow-2xl border-2 border-white/50"
          >
            <Phone className="w-5 h-5" />
            Book Your Visit
          </a>
        </div>
      </div>
    </section>
  )
}

