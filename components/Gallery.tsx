'use client'

import Image from 'next/image'
import { MapPin, Users, ExternalLink } from 'lucide-react'
import { galleryEvents, getEventImageUrl, getGalleryStatistics } from '@/data/gallery'

export default function Gallery() {
  const { totalWorkshops, totalAttendance, avgAttendance } = getGalleryStatistics()

  return (
    <section id="gallery" className="relative py-16 md:py-24 lg:py-32 bg-gray-50 overflow-hidden">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: 'radial-gradient(circle, rgba(0,0,0,0.1) 1px, transparent 1px)',
        backgroundSize: '30px 30px'
      }}></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-block mb-4">
            <span className="px-4 py-2 bg-gradient-to-r from-teal-100 to-cyan-100 text-teal-700 rounded-full text-sm font-semibold">
              Community Outreach
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 via-cyan-600 to-emerald-600">
              Outreach
            </span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Hands-on workshops and awareness programs at top colleges and institutions across India
          </p>
        </div>

        {/* Statistics */}
        <div className="flex flex-row sm:grid sm:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mb-12 md:mb-16 justify-center sm:justify-normal">
          <div className="text-center flex-1 sm:flex-none">
            <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-1 sm:mb-2">
              6+
            </div>
            <div className="text-gray-600 text-xs sm:text-base md:text-lg">Workshops</div>
          </div>
          <div className="text-center flex-1 sm:flex-none">
            <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-1 sm:mb-2">
              705+
            </div>
            <div className="text-gray-600 text-xs sm:text-base md:text-lg">Students Trained</div>
          </div>
          <div className="text-center flex-1 sm:flex-none">
            <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-1 sm:mb-2">
              118
            </div>
            <div className="text-gray-600 text-xs sm:text-base md:text-lg">Avg. Attendance</div>
          </div>
        </div>

        {/* Gallery Grid - Horizontal scroll on mobile, grid on larger screens */}
        <div className="sm:grid sm:grid-cols-2 lg:grid-cols-4 sm:gap-6 md:gap-8 mb-12">
          {/* Mobile: Horizontal scrollable container */}
          <div className="flex sm:hidden gap-4 overflow-x-auto pb-4 -mx-4 px-4 snap-x snap-mandatory scrollbar-hide">
            {galleryEvents.map((event) => (
              <div
                key={event.id}
                className="group relative bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 w-[85vw] flex-shrink-0 snap-center"
              >
                {/* Image Container */}
                <div className="relative w-full h-48 md:h-56 overflow-hidden bg-gray-200">
                  <Image
                    src={getEventImageUrl(event)}
                    alt={event.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                    sizes="85vw"
                    unoptimized={getEventImageUrl(event).startsWith('http')}
                  />

                  {/* Date Badge */}
                  <div className="absolute top-3 right-3 bg-gray-800/80 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-semibold">
                    {event.date}
                  </div>

                  {/* LinkedIn "in View" Button */}
                  {event.linkedInUrl && (
                    <a
                      href={event.linkedInUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="absolute top-3 left-3 bg-blue-600 hover:bg-blue-700 text-white px-3 py-1.5 rounded-full text-xs font-semibold flex items-center gap-1.5 transition-colors shadow-lg"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <ExternalLink className="w-3 h-3" />
                      in View
                    </a>
                  )}
                </div>

                {/* Card Content */}
                <div className="p-5">
                  <h3 className="text-lg font-bold text-gray-900 mb-3 line-clamp-2">
                    {event.title}
                  </h3>
                  
                  <div className="space-y-2">
                    {/* Location */}
                    <div className="flex items-center gap-2 text-gray-600 text-sm">
                      <MapPin className="w-4 h-4 text-gray-400 flex-shrink-0" />
                      <span>{event.location}</span>
                    </div>

                    {/* Attendance */}
                    <div className="flex items-center gap-2 text-gray-600 text-sm">
                      <Users className="w-4 h-4 text-gray-400 flex-shrink-0" />
                      <span>{event.attendance} Attendance</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Desktop: Grid layout */}
          {galleryEvents.map((event) => (
            <div
              key={event.id}
              className="hidden sm:block group relative bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              {/* Image Container */}
              <div className="relative w-full h-48 md:h-56 overflow-hidden bg-gray-200">
                <Image
                  src={getEventImageUrl(event)}
                  alt={event.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  unoptimized={getEventImageUrl(event).startsWith('http')}
                />

                {/* Date Badge */}
                <div className="absolute top-3 right-3 bg-gray-800/80 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-semibold">
                  {event.date}
                </div>

                {/* LinkedIn "in View" Button */}
                {event.linkedInUrl && (
                  <a
                    href={event.linkedInUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute top-3 left-3 bg-blue-600 hover:bg-blue-700 text-white px-3 py-1.5 rounded-full text-xs font-semibold flex items-center gap-1.5 transition-colors shadow-lg"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <ExternalLink className="w-3 h-3" />
                    in View
                  </a>
                )}
              </div>

              {/* Card Content */}
              <div className="p-5">
                <h3 className="text-lg font-bold text-gray-900 mb-3 line-clamp-2">
                  {event.title}
                </h3>
                
                <div className="space-y-2">
                  {/* Location */}
                  <div className="flex items-center gap-2 text-gray-600 text-sm">
                    <MapPin className="w-4 h-4 text-gray-400 flex-shrink-0" />
                    <span>{event.location}</span>
                  </div>

                  {/* Attendance */}
                  <div className="flex items-center gap-2 text-gray-600 text-sm">
                    <Users className="w-4 h-4 text-gray-400 flex-shrink-0" />
                    <span>{event.attendance} Attendance</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <button className="inline-flex items-center gap-2 px-8 py-3 bg-white border-2 border-teal-500 text-gray-900 font-semibold rounded-xl hover:bg-teal-50 transition-all duration-300 shadow-md hover:shadow-lg">
            <span>View All 6 Workshops</span>
            <ExternalLink className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  )
}

