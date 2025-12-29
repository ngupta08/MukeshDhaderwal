'use client'

import Image from 'next/image'
import { Button } from './ui'
import { Phone, Calendar, Shield, Heart, Stethoscope, Award, Clock, CheckCircle2, ArrowRight, Brain, Users, Sparkles, Star, ChevronDown, Globe, TrendingUp, MessageCircle, PlayCircle } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Full Background Image */}
      <div 
        className="absolute inset-0 z-0 w-full h-full"
        style={{
          backgroundImage: 'url(/sadness_mukesh_happy.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          minHeight: '100vh',
        }}
      >
        {/* Gradient Overlay for readability - lighter on mobile */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/40 via-teal-900/30 to-cyan-900/40 md:from-slate-900/50 md:via-teal-900/40 md:to-cyan-900/50"></div>
        {/* Additional overlay for better text contrast - lighter on mobile */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/20 md:from-black/20 md:to-black/30"></div>
      </div>

      {/* Soft, calming background effects */}
      <div className="absolute inset-0 overflow-hidden z-[1]">
        {/* Large soft orbs - matching logo colors */}
        <div className="absolute top-20 right-20 w-[600px] h-[600px] bg-teal-200/20 rounded-full mix-blend-overlay filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-[500px] h-[500px] bg-cyan-200/20 rounded-full mix-blend-overlay filter blur-3xl animate-pulse animation-delay-2000"></div>
        
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.3) 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 lg:py-20">
        {/* Mobile Layout */}
        <div className="lg:hidden">
          <div className="flex flex-col items-center text-center">
            {/* Trust Badge with Doctor Name and NIMHANS - Mobile */}
            <div className="w-full max-w-sm mb-6">
              <div className="relative px-5 py-3 bg-gradient-to-r from-teal-600/95 to-cyan-600/95 backdrop-blur-sm rounded-xl shadow-2xl border border-white/20 flex items-center gap-3">
                <div className="flex-1">
                  <div className="text-white font-bold text-base mb-1 drop-shadow-lg">Dr. Mukesh Dhaderwal</div>
                  <div className="flex items-center gap-2">
                    <Award className="w-3.5 h-3.5 text-white drop-shadow-md" />
                    <span className="text-white font-medium text-xs drop-shadow-md">MD Psychiatry NIMHANS</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Main Headline - Mobile */}
            <h1 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight drop-shadow-2xl px-2 mb-36 md:mb-48">
              We Take Care
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-teal-200 via-cyan-200 to-emerald-200 mt-1 drop-shadow-xl" style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.5)' }}>
                of Your Mental Health
              </span>
            </h1>

            {/* Trust Cards - Mobile (Stacked) */}
            <div className="w-full max-w-sm space-y-3 px-4 mb-8">
              {/* Ex Neuro Psychiatrist Card - Mobile */}
              <div className="w-full bg-white/70 backdrop-blur-sm rounded-xl shadow-lg p-3 border-2 border-teal-300/80">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-full flex items-center justify-center shadow-md flex-shrink-0">
                    <Stethoscope className="w-5 h-5 text-white" />
                  </div>
                  <div className="text-left flex-1">
                    <div className="text-gray-900 font-bold text-xs">Ex Neuro Psychiatrist</div>
                    <div className="text-teal-600 font-semibold text-[10px]">@ SMS Medical College</div>
                  </div>
                </div>
              </div>

              {/* 4.9 Star Rating Card - Mobile */}
              <div className="w-full bg-white/70 backdrop-blur-sm rounded-xl shadow-lg p-3 border-2 border-cyan-300/80">
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-0.5 flex-shrink-0">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 text-yellow-500 fill-yellow-500" />
                    ))}
                  </div>
                  <div className="text-left flex-1">
                    <div className="text-gray-900 font-bold text-lg">4.9</div>
                    <div className="text-gray-600 text-[10px] font-medium">400+ Reviews</div>
                  </div>
                </div>
              </div>

              {/* 11+ Years Experience Card - Mobile */}
              <div className="w-full bg-white/70 backdrop-blur-sm rounded-xl shadow-lg p-3 border-2 border-emerald-300/80">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-green-500 rounded-full flex items-center justify-center shadow-md flex-shrink-0">
                    <Clock className="w-5 h-5 text-white" />
                  </div>
                  <div className="text-left flex-1">
                    <div className="text-gray-900 font-bold text-lg">11+</div>
                    <div className="text-gray-600 text-xs font-semibold">Years Experience</div>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Buttons - Mobile - Positioned below doctor's face */}
            <div className="flex flex-col w-full max-w-sm gap-3 px-4 mt-8">
              <Button 
                variant="primary" 
                className="w-full px-6 py-3 text-base shadow-xl hover:shadow-2xl transition-all flex items-center justify-center gap-2 bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-700 hover:to-cyan-700 text-white font-bold rounded-xl"
              >
                <Calendar className="w-5 h-5" />
                Book an Appointment
                <ArrowRight className="w-4 h-4" />
              </Button>
              <Button 
                variant="outline" 
                className="w-full px-6 py-3 text-base border-2 border-teal-600 text-teal-600 hover:bg-teal-50 flex items-center justify-center gap-2 bg-white rounded-xl font-semibold shadow-lg"
              >
                <Phone className="w-4 h-4" />
                Call Now
              </Button>
            </div>
          </div>
        </div>

        {/* Tablet Layout (md to lg) */}
        <div className="hidden md:grid md:grid-cols-2 lg:hidden gap-6 items-center">
          {/* Left Column - Tablet */}
          <div className="text-center md:text-left">
            {/* Trust Badge with Doctor Name and NIMHANS - Tablet */}
            <div className="mb-6">
              <div className="relative px-5 py-3 bg-gradient-to-r from-teal-600/95 to-cyan-600/95 backdrop-blur-sm rounded-xl shadow-2xl border border-white/20 inline-flex items-center gap-3">
                <div>
                  <div className="text-white font-bold text-base mb-1 drop-shadow-lg">Dr. Mukesh Dhaderwal</div>
                  <div className="flex items-center gap-2">
                    <Award className="w-3.5 h-3.5 text-white drop-shadow-md" />
                    <span className="text-white font-medium text-xs drop-shadow-md">MD Psychiatry NIMHANS</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Main Headline - Tablet */}
            <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-36 leading-tight drop-shadow-2xl">
              We Take Care
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-teal-200 via-cyan-200 to-emerald-200 mt-1 drop-shadow-xl" style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.5)' }}>
                of Your Mental Health
              </span>
            </h1>
          </div>

          {/* Right Column - Tablet Trust Cards */}
          <div className="flex flex-col gap-3">
            {/* Ex Neuro Psychiatrist Card - Tablet */}
            <div className="bg-white/70 backdrop-blur-sm rounded-xl shadow-lg p-4 border-2 border-teal-300/80">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-full flex items-center justify-center shadow-md flex-shrink-0">
                  <Stethoscope className="w-6 h-6 text-white" />
                </div>
                <div className="text-left flex-1">
                  <div className="text-gray-900 font-bold text-sm">Ex Neuro Psychiatrist</div>
                  <div className="text-teal-600 font-semibold text-xs">@ SMS Medical College</div>
                </div>
              </div>
            </div>

            {/* 4.9 Star Rating Card - Tablet */}
            <div className="bg-white/70 backdrop-blur-sm rounded-xl shadow-lg p-4 border-2 border-cyan-300/80">
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-0.5 flex-shrink-0">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                  ))}
                </div>
                <div className="text-left flex-1">
                  <div className="text-gray-900 font-bold text-xl">4.9</div>
                  <div className="text-gray-600 text-xs font-medium">400+ Reviews</div>
                </div>
              </div>
            </div>

            {/* 11+ Years Experience Card - Tablet */}
            <div className="bg-white/70 backdrop-blur-sm rounded-xl shadow-lg p-4 border-2 border-emerald-300/80">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-green-500 rounded-full flex items-center justify-center shadow-md flex-shrink-0">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <div className="text-left flex-1">
                  <div className="text-gray-900 font-bold text-xl">11+</div>
                  <div className="text-gray-600 text-sm font-semibold">Years Experience</div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Buttons - Tablet - Positioned below doctor's face */}
          <div className="col-span-2 flex flex-col sm:flex-row gap-3 justify-center mt-8">
            <Button 
              variant="primary" 
              className="px-6 py-3 text-base shadow-xl hover:shadow-2xl transition-all flex items-center justify-center gap-2 bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-700 hover:to-cyan-700 text-white font-bold rounded-xl"
            >
              <Calendar className="w-5 h-5" />
              Book Appointment
              <ArrowRight className="w-4 h-4" />
            </Button>
            <Button 
              variant="outline" 
              className="px-6 py-3 text-base border-2 border-teal-600 text-teal-600 hover:bg-teal-50 flex items-center justify-center gap-2 bg-white rounded-xl font-semibold shadow-lg"
            >
              <Phone className="w-4 h-4" />
              Call Now
            </Button>
          </div>
        </div>

        {/* Desktop Layout (lg and above) */}
        <div className="hidden lg:grid lg:grid-cols-12 gap-8 items-center">
          {/* Left Column - Main Content (7 columns) */}
          <div className="lg:col-span-7 text-center lg:text-left">
            {/* Trust Badge with Doctor Name and NIMHANS */}
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-3 mb-8">
              <div className="relative px-6 py-4 bg-gradient-to-r from-teal-600/95 to-cyan-600/95 backdrop-blur-sm rounded-xl shadow-2xl border border-white/20 flex items-center gap-4">
                <div className="flex-1">
                  <div className="text-white font-bold text-lg mb-1 drop-shadow-lg">Dr. Mukesh Dhaderwal</div>
                  <div className="flex items-center gap-2">
                    <Award className="w-4 h-4 text-white drop-shadow-md" />
                    <span className="text-white font-medium text-sm drop-shadow-md">MD Psychiatry NIMHANS</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Main Headline - Patient-focused */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-36 leading-tight drop-shadow-2xl">
              We Take Care
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-teal-200 via-cyan-200 to-emerald-200 mt-2 drop-shadow-xl" style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.5)' }}>
                of Your Mental Health
              </span>
            </h1>
            
            {/* Subtitle - More reassuring and patient-focused */}
            <p className="text-xl md:text-2xl text-white mb-10 leading-relaxed max-w-2xl mx-auto lg:mx-0 font-medium drop-shadow-xl" style={{ textShadow: '1px 1px 4px rgba(0,0,0,0.7)' }}>
              Expert psychiatric care with compassion. NIMHANS-trained psychiatrist providing personalized treatment for anxiety, depression, mood disorders, and more.
            </p>

          </div>

          {/* Right Column - Trust Indicators (5 columns) */}
          <div className="lg:col-span-5 relative">
            <div className="relative h-full min-h-[500px] flex flex-col items-center justify-center gap-3">
              {/* Ex Neuro Psychiatrist @ SMS Hospital Card */}
              <div className="w-full max-w-[280px] bg-white/70 backdrop-blur-sm rounded-xl shadow-lg p-3 border-2 border-teal-300/80 hover:scale-105 transition-transform relative overflow-hidden">
                {/* Geometric Pattern Background */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-0 right-0 w-20 h-20 bg-teal-500 transform rotate-45 translate-x-8 -translate-y-8"></div>
                  <div className="absolute bottom-0 left-0 w-16 h-16 bg-cyan-500 transform -rotate-45 -translate-x-6 translate-y-6"></div>
                  <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <polygon points="0,0 30,0 0,30" fill="currentColor" className="text-teal-400" />
                    <polygon points="100,100 70,100 100,70" fill="currentColor" className="text-cyan-400" />
                  </svg>
                </div>
                <div className="relative z-10 flex flex-col items-center text-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-full flex items-center justify-center mb-3 shadow-md">
                    <Stethoscope className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-gray-900 font-bold text-sm mb-1">Ex Neuro Psychiatrist</div>
                  <div className="text-teal-600 font-semibold text-xs">@ SMS Medical College</div>
                </div>
              </div>

              {/* 4.9 Star Rating Card */}
              <div className="w-full max-w-[280px] bg-white/70 backdrop-blur-sm rounded-xl shadow-lg p-3 border-2 border-cyan-300/80 hover:scale-105 transition-transform relative overflow-hidden">
                {/* Geometric Pattern Background */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-1/2 left-0 w-full h-1 bg-cyan-500 transform -skew-y-12"></div>
                  <div className="absolute top-1/2 left-0 w-full h-1 bg-teal-500 transform skew-y-12"></div>
                  <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <circle cx="50" cy="50" r="30" fill="none" stroke="currentColor" strokeWidth="1" className="text-cyan-400" />
                    <polygon points="50,20 60,40 80,40 65,55 70,75 50,65 30,75 35,55 20,40 40,40" fill="currentColor" className="text-cyan-300" />
                  </svg>
                </div>
                <div className="relative z-10 flex flex-col items-center text-center">
                  <div className="flex items-center gap-0.5 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                    ))}
                  </div>
                  <div className="text-gray-900 font-bold text-2xl mb-1">4.9</div>
                  <div className="text-gray-600 text-xs font-medium">400+ Reviews</div>
                </div>
              </div>

              {/* 11+ Years Experience Card */}
              <div className="w-full max-w-[280px] bg-white/70 backdrop-blur-sm rounded-xl shadow-lg p-3 border-2 border-emerald-300/80 hover:scale-105 transition-transform relative overflow-hidden">
                {/* Geometric Pattern Background */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-0 left-0 w-24 h-24 bg-emerald-500 transform rotate-12"></div>
                  <div className="absolute bottom-0 right-0 w-20 h-20 bg-green-500 transform -rotate-12"></div>
                  <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <rect x="10" y="10" width="20" height="20" transform="rotate(45 20 20)" fill="currentColor" className="text-emerald-400" />
                    <rect x="70" y="70" width="20" height="20" transform="rotate(45 80 80)" fill="currentColor" className="text-green-400" />
                    <line x1="0" y1="50" x2="100" y2="50" stroke="currentColor" strokeWidth="1" className="text-emerald-300" />
                    <line x1="50" y1="0" x2="50" y2="100" stroke="currentColor" strokeWidth="1" className="text-green-300" />
                  </svg>
                </div>
                <div className="relative z-10 flex flex-col items-center text-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-green-500 rounded-full flex items-center justify-center mb-3 shadow-md">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-gray-900 font-bold text-2xl mb-1">11+</div>
                  <div className="text-gray-600 text-sm font-semibold">Years Experience</div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Buttons - Desktop - Positioned below doctor's face */}
          <div className="lg:col-span-12 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mt-8 mb-12">
            <Button 
              variant="primary" 
              className="px-8 py-4 text-lg shadow-xl hover:shadow-2xl transition-all flex items-center justify-center gap-3 bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-700 hover:to-cyan-700 text-white font-bold rounded-xl"
            >
              <Calendar className="w-6 h-6" />
              Book an Appointment
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button 
              variant="outline" 
              className="px-8 py-4 text-lg border-2 border-teal-600 text-teal-600 hover:bg-teal-50 flex items-center justify-center gap-3 bg-white rounded-xl font-semibold shadow-lg"
            >
              <Phone className="w-5 h-5" />
              Call Now
            </Button>
          </div>
        </div>

        {/* Services Section - Bottom Strip */}
        <div className="relative z-10 mt-16 lg:mt-20">
          <div className="bg-white/90 backdrop-blur-md rounded-2xl shadow-2xl p-6 lg:p-8 border-2 border-white/50">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
              {/* Service 1 - Consultation */}
              <div className="flex flex-col items-center text-center group cursor-pointer">
                <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-full flex items-center justify-center mb-3 shadow-lg group-hover:scale-110 transition-transform">
                  <Stethoscope className="w-8 h-8 text-white" />
                </div>
                <div className="text-gray-900 font-semibold text-sm lg:text-base">Expert Consultation</div>
              </div>

              {/* Service 2 - 24/7 Support */}
              <div className="flex flex-col items-center text-center group cursor-pointer">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-teal-500 rounded-full flex items-center justify-center mb-3 shadow-lg group-hover:scale-110 transition-transform">
                  <Clock className="w-8 h-8 text-white" />
                </div>
                <div className="text-gray-900 font-semibold text-sm lg:text-base">24/7 Support</div>
              </div>

              {/* Service 3 - Emergency Care */}
              <div className="flex flex-col items-center text-center group cursor-pointer">
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-full flex items-center justify-center mb-3 shadow-lg group-hover:scale-110 transition-transform">
                  <Heart className="w-8 h-8 text-white" />
                </div>
                <div className="text-gray-900 font-semibold text-sm lg:text-base">Emergency Care</div>
              </div>

              {/* Service 4 - Follow-up */}
              <div className="flex flex-col items-center text-center group cursor-pointer">
                <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-emerald-500 rounded-full flex items-center justify-center mb-3 shadow-lg group-hover:scale-110 transition-transform">
                  <CheckCircle2 className="w-8 h-8 text-white" />
                </div>
                <div className="text-gray-900 font-semibold text-sm lg:text-base">Regular Follow-up</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
