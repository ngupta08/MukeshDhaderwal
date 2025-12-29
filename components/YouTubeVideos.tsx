'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Play, Clock, Calendar, X, ExternalLink } from 'lucide-react'
import { youtubeVideos, getYouTubeEmbedUrl, getYouTubeThumbnailUrl } from '@/data/youtubeVideos'

export default function YouTubeVideos() {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null)
  const [hoveredVideo, setHoveredVideo] = useState<string | null>(null)

  const openVideo = (videoId: string) => {
    setSelectedVideo(videoId)
  }

  const closeVideo = () => {
    setSelectedVideo(null)
  }

  return (
    <>
      <section className="relative py-16 md:py-24 lg:py-32 bg-gradient-to-br from-white via-teal-50/30 to-cyan-50/20 overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Animated gradient orbs */}
          <div className="absolute top-20 right-20 w-96 h-96 bg-red-200/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-red-300/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
          
          {/* Subtle grid pattern */}
          <div className="absolute inset-0 opacity-[0.02]" style={{
            backgroundImage: 'radial-gradient(circle, rgba(0,0,0,0.1) 1px, transparent 1px)',
            backgroundSize: '40px 40px'
          }}></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12 md:mb-16">
            <div className="inline-flex items-center gap-2 mb-6">
              <div className="h-px w-12 bg-gradient-to-r from-transparent to-red-500"></div>
              <span className="px-4 py-2 bg-gradient-to-r from-red-100 via-orange-100 to-red-100 text-red-700 rounded-full text-sm font-bold shadow-sm">
                Video Library
              </span>
              <div className="h-px w-12 bg-gradient-to-l from-transparent to-orange-500"></div>
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-4">
              <span className="block">Educational</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-orange-600 to-red-600 mt-2">
                Video Content
              </span>
            </h2>
            
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Explore our collection of informative videos on mental health, wellness, and psychiatric care. 
              Learn from expert insights and evidence-based information.
            </p>
          </div>

          {/* Video Grid - Horizontal scroll on mobile, grid on larger screens */}
          <div className="sm:grid sm:grid-cols-2 lg:grid-cols-3 sm:gap-6 md:gap-8">
            {/* Mobile: Horizontal scrollable container */}
            <div className="flex sm:hidden gap-4 overflow-x-auto pb-4 -mx-4 px-4 snap-x snap-mandatory scrollbar-hide">
              {youtubeVideos.map((video) => {
                const thumbnailUrl = video.thumbnailUrl || getYouTubeThumbnailUrl(video.videoId)
                const isHovered = hoveredVideo === video.id
                
                return (
                  <div
                    key={video.id}
                    className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer w-[85vw] flex-shrink-0 snap-center"
                    onMouseEnter={() => setHoveredVideo(video.id)}
                    onMouseLeave={() => setHoveredVideo(null)}
                    onClick={() => openVideo(video.videoId)}
                  >
                    {/* Thumbnail Container */}
                    <div className="relative w-full h-48 md:h-56 overflow-hidden bg-gray-900">
                      <Image
                        src={thumbnailUrl}
                        alt={video.title}
                        fill
                        className={`object-cover transition-transform duration-300 ${
                          isHovered ? 'scale-110' : 'scale-100'
                        }`}
                        sizes="85vw"
                      />
                      
                      {/* Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                      
                      {/* Play Button */}
                      <div className={`absolute inset-0 flex items-center justify-center transition-all duration-300 ${
                        isHovered ? 'scale-110 opacity-100' : 'scale-100 opacity-90'
                      }`}>
                        <div className="w-16 h-16 md:w-20 md:h-20 bg-red-600 rounded-full flex items-center justify-center shadow-2xl group-hover:bg-red-700 transition-colors">
                          <Play className="w-8 h-8 md:w-10 md:h-10 text-white ml-1" fill="white" />
                        </div>
                      </div>

                      {/* Duration Badge */}
                      {video.duration && (
                        <div className="absolute bottom-3 right-3 bg-black/80 backdrop-blur-sm text-white px-2 py-1 rounded text-xs font-semibold flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {video.duration}
                        </div>
                      )}

                      {/* Category Badge */}
                      {video.category && (
                        <div className="absolute top-3 left-3 bg-red-600/90 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-semibold">
                          {video.category}
                        </div>
                      )}
                    </div>

                    {/* Video Info */}
                    <div className="p-5">
                      <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-red-600 transition-colors">
                        {video.title}
                      </h3>
                      
                      <p className="text-gray-600 text-sm md:text-base mb-4 line-clamp-2">
                        {video.description}
                      </p>

                      {/* Meta Information */}
                      {video.date && (
                        <div className="flex items-center gap-1 text-xs md:text-sm text-gray-500">
                          <Calendar className="w-4 h-4" />
                          <span>{video.date}</span>
                        </div>
                      )}
                    </div>

                    {/* Hover Effect Border */}
                    <div className="absolute inset-0 border-2 border-red-500 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                  </div>
                )
              })}
            </div>

            {/* Desktop: Grid layout */}
            {youtubeVideos.map((video) => {
              const thumbnailUrl = video.thumbnailUrl || getYouTubeThumbnailUrl(video.videoId)
              const isHovered = hoveredVideo === video.id
              
              return (
                <div
                  key={video.id}
                  className="hidden sm:block group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
                  onMouseEnter={() => setHoveredVideo(video.id)}
                  onMouseLeave={() => setHoveredVideo(null)}
                  onClick={() => openVideo(video.videoId)}
                >
                  {/* Thumbnail Container */}
                  <div className="relative w-full h-48 md:h-56 overflow-hidden bg-gray-900">
                    <Image
                      src={thumbnailUrl}
                      alt={video.title}
                      fill
                      className={`object-cover transition-transform duration-300 ${
                        isHovered ? 'scale-110' : 'scale-100'
                      }`}
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                    
                    {/* Play Button */}
                    <div className={`absolute inset-0 flex items-center justify-center transition-all duration-300 ${
                      isHovered ? 'scale-110 opacity-100' : 'scale-100 opacity-90'
                    }`}>
                      <div className="w-16 h-16 md:w-20 md:h-20 bg-red-600 rounded-full flex items-center justify-center shadow-2xl group-hover:bg-red-700 transition-colors">
                        <Play className="w-8 h-8 md:w-10 md:h-10 text-white ml-1" fill="white" />
                      </div>
                    </div>

                    {/* Duration Badge */}
                    {video.duration && (
                      <div className="absolute bottom-3 right-3 bg-black/80 backdrop-blur-sm text-white px-2 py-1 rounded text-xs font-semibold flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {video.duration}
                      </div>
                    )}

                    {/* Category Badge */}
                    {video.category && (
                      <div className="absolute top-3 left-3 bg-red-600/90 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-semibold">
                        {video.category}
                      </div>
                    )}
                  </div>

                  {/* Video Info */}
                  <div className="p-5">
                    <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-red-600 transition-colors">
                      {video.title}
                    </h3>
                    
                    <p className="text-gray-600 text-sm md:text-base mb-4 line-clamp-2">
                      {video.description}
                    </p>

                    {/* Meta Information */}
                    {video.date && (
                      <div className="flex items-center gap-1 text-xs md:text-sm text-gray-500">
                        <Calendar className="w-4 h-4" />
                        <span>{video.date}</span>
                      </div>
                    )}
                  </div>

                  {/* Hover Effect Border */}
                  <div className="absolute inset-0 border-2 border-red-500 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                </div>
              )
            })}
          </div>

          {/* View More Button */}
          <div className="mt-12 md:mt-16 text-center">
            <a
              href="https://www.youtube.com/@yourchannel" // Replace with actual YouTube channel URL
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              <span>View All Videos</span>
              <ExternalLink className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      {/* Video Modal */}
      {selectedVideo && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
          onClick={closeVideo}
        >
          <div 
            className="relative w-full max-w-4xl bg-white rounded-2xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={closeVideo}
              className="absolute top-4 right-4 z-10 w-10 h-10 bg-black/70 hover:bg-black/90 rounded-full flex items-center justify-center text-white transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Video Embed */}
            <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
              <iframe
                src={getYouTubeEmbedUrl(selectedVideo) + '?autoplay=1'}
                className="absolute top-0 left-0 w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="YouTube video player"
              />
            </div>
          </div>
        </div>
      )}
    </>
  )
}

