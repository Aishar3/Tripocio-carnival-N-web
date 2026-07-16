'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Star } from 'lucide-react'

const slides = [
  {
    image: '/images/hero-bg.png',
    headline: 'Discover',
    highlight: 'Incredible India',
    sub: 'From the deserts of Rajasthan to the backwaters of Kerala',
    cta: { label: 'Explore India Tours', href: '/tours?filter=india' },
  },
  {
    image: '/images/tour-dubai.png',
    headline: 'Experience',
    highlight: 'Dubai in Luxury',
    sub: 'Skyline adventures, desert safaris & world-class experiences',
    cta: { label: 'View Dubai Packages', href: '/tours?filter=international' },
  },
  {
    image: '/images/tour-kedarnath.png',
    headline: 'Seek',
    highlight: 'Sacred Pilgrimages',
    sub: 'Char Dham, Vaishno Devi, Tirupati — crafted with devotion',
    cta: { label: 'Pilgrimage Packages', href: '/tours?filter=pilgrimage' },
  },
]

export default function HeroSection() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const slide = slides[current]

  return (
    <section className="relative h-screen min-h-[600px] flex items-center overflow-hidden">
      {/* Background image */}
      {slides.map((s, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-1000 ${i === current ? 'opacity-100' : 'opacity-0'}`}
        >
          <Image
            src={s.image}
            alt={s.highlight}
            fill
            className="object-cover"
            priority={i === 0}
            sizes="100vw"
          />
        </div>
      ))}

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/40 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8 w-full">
        <div className="max-w-2xl">
          {/* Trust badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white text-xs px-4 py-2 rounded-full mb-6">
            <Star size={12} fill="currentColor" className="text-yellow-400" />
            <span>Trusted by 10,000+ happy travelers — Indore&apos;s #1 Travel Agency</span>
          </div>

          <p className="text-white/70 font-sans text-lg md:text-xl mb-2 tracking-wide transition-all duration-700">
            {slide.headline}
          </p>
          <h1 className="font-serif text-5xl md:text-7xl font-semibold text-white leading-tight text-balance mb-4 transition-all duration-700">
            {slide.highlight}
          </h1>
          <p className="text-white/80 text-base md:text-lg leading-relaxed mb-8 max-w-lg transition-all duration-700">
            {slide.sub}
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href={slide.cta.href}
              className="inline-flex items-center justify-center gap-2 bg-accent text-white font-medium px-7 py-4 rounded-full hover:bg-accent/90 transition-all hover:gap-3 text-sm"
            >
              {slide.cta.label}
              <ArrowRight size={16} />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm border border-white/30 text-white font-medium px-7 py-4 rounded-full hover:bg-white/20 transition-all text-sm"
            >
              Plan a Custom Trip
            </Link>
          </div>
        </div>
      </div>

      {/* Slide indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            aria-label={`Slide ${i + 1}`}
            className={`h-1 rounded-full transition-all duration-300 ${i === current ? 'w-8 bg-white' : 'w-2 bg-white/40'}`}
          />
        ))}
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-8 right-8 z-10 hidden md:flex flex-col items-center gap-2">
        <span className="text-white/50 text-xs tracking-widest uppercase" style={{ writingMode: 'vertical-lr' }}>
          Scroll
        </span>
        <div className="w-px h-12 bg-white/30" />
      </div>
    </section>
  )
}
