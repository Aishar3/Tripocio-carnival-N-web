'use client'

import { useState } from 'react'
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react'

const testimonials = [
  {
    name: 'Priya Sharma',
    location: 'Indore, MP',
    tour: 'Kerala Backwaters Package',
    rating: 5,
    text: 'TripOcio turned our anniversary into the most magical experience of our lives. The houseboat, the spice trails, the Ayurvedic spa — every detail was perfect. The team was available 24/7 and handled everything flawlessly.',
    initials: 'PS',
  },
  {
    name: 'Rahul & Neha Gupta',
    location: 'Indore, MP',
    tour: 'Bali Honeymoon Package',
    rating: 5,
    text: 'We cannot thank TripOcio enough for our dream Bali honeymoon. The private villa, the candlelit dinner on the beach, the Nusa Penida trip — we could not have asked for more. Will definitely book with them again!',
    initials: 'RG',
  },
  {
    name: 'Amit Joshi',
    location: 'Ujjain, MP',
    tour: 'Char Dham Yatra',
    rating: 5,
    text: 'The Char Dham journey with TripOcio was a spiritually transformative experience. Our dedicated priest guide added so much depth to each temple visit. The logistics were seamless despite the challenging terrain.',
    initials: 'AJ',
  },
  {
    name: 'Sunita Verma',
    location: 'Bhopal, MP',
    tour: 'Rajasthan Heritage Tour',
    rating: 5,
    text: 'Absolutely loved every moment of the Rajasthan tour! The heritage hotels, the camel safari, the food — everything exceeded our expectations. TripOcio clearly has deep expertise in this region.',
    initials: 'SV',
  },
  {
    name: 'Vikram Mehta',
    location: 'Indore, MP',
    tour: 'Dubai Luxury Escape',
    rating: 5,
    text: 'The Dubai package was worth every rupee. Burj Khalifa at sunset, desert safari, and the dhow cruise — all perfectly timed and organized. The team even got us a room upgrade at the hotel!',
    initials: 'VM',
  },
]

export default function Testimonials() {
  const [current, setCurrent] = useState(0)

  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length)
  const next = () => setCurrent((c) => (c + 1) % testimonials.length)

  const visible = [
    testimonials[(current) % testimonials.length],
    testimonials[(current + 1) % testimonials.length],
    testimonials[(current + 2) % testimonials.length],
  ]

  return (
    <section className="py-20 bg-secondary/40">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <p className="text-xs uppercase tracking-[0.2em] text-accent font-sans mb-2">Real Experiences</p>
          <h2 className="font-serif text-4xl md:text-5xl font-semibold text-foreground text-balance">
            What Our Travelers <em>Say</em>
          </h2>
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {visible.map((t, i) => (
            <div
              key={`${t.name}-${i}`}
              className={`bg-card rounded-2xl p-7 border border-border flex flex-col gap-4 transition-all duration-300 ${i === 0 ? 'shadow-lg scale-[1.02]' : 'opacity-80'}`}
            >
              <Quote size={24} className="text-accent/30" />
              <p className="text-sm text-foreground leading-relaxed flex-1">{t.text}</p>
              <div className="flex items-center gap-1 mt-2">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} size={14} fill="#B8973A" className="text-gold" />
                ))}
              </div>
              <div className="flex items-center gap-3 pt-3 border-t border-border">
                <div className="w-10 h-10 rounded-full bg-forest text-white flex items-center justify-center text-sm font-serif font-semibold">
                  {t.initials}
                </div>
                <div>
                  <p className="font-semibold text-sm text-foreground">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.location} &bull; {t.tour}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Controls */}
        <div className="flex items-center justify-center gap-4 mt-8">
          <button
            onClick={prev}
            aria-label="Previous testimonial"
            className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:border-accent hover:text-accent transition-colors"
          >
            <ChevronLeft size={18} />
          </button>
          <div className="flex gap-1.5">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                aria-label={`Testimonial ${i + 1}`}
                className={`h-1.5 rounded-full transition-all duration-300 ${i === current ? 'w-6 bg-accent' : 'w-1.5 bg-border'}`}
              />
            ))}
          </div>
          <button
            onClick={next}
            aria-label="Next testimonial"
            className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:border-accent hover:text-accent transition-colors"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </section>
  )
}
