'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'

const categories = [
  {
    id: 'india',
    label: 'India',
    destinations: [
      { name: 'Rajasthan', image: '/images/tour-rajasthan.png', packages: 18 },
      { name: 'Kerala', image: '/images/tour-kerala.png', packages: 12 },
      { name: 'Goa', image: '/images/tour-goa.png', packages: 9 },
      { name: 'Manali', image: '/images/tour-manali.png', packages: 8 },
    ],
  },
  {
    id: 'international',
    label: 'International',
    destinations: [
      { name: 'Dubai', image: '/images/tour-dubai.png', packages: 15 },
      { name: 'Bali', image: '/images/tour-bali.png', packages: 11 },
      { name: 'Thailand', image: '/images/tour-bali.png', packages: 10 },
      { name: 'Europe', image: '/images/tour-rajasthan.png', packages: 8 },
    ],
  },
  {
    id: 'pilgrimage',
    label: 'Pilgrimage',
    destinations: [
      { name: 'Char Dham', image: '/images/tour-kedarnath.png', packages: 6 },
      { name: 'Vaishno Devi', image: '/images/tour-manali.png', packages: 5 },
      { name: 'Tirupati', image: '/images/tour-kedarnath.png', packages: 4 },
      { name: 'Shirdi', image: '/images/tour-rajasthan.png', packages: 5 },
    ],
  },
  {
    id: 'honeymoon',
    label: 'Honeymoon',
    destinations: [
      { name: 'Bali', image: '/images/tour-bali.png', packages: 8 },
      { name: 'Kerala', image: '/images/tour-kerala.png', packages: 7 },
      { name: 'Maldives', image: '/images/tour-dubai.png', packages: 6 },
      { name: 'Shimla', image: '/images/tour-manali.png', packages: 5 },
    ],
  },
]

export default function DestinationCategories() {
  const [active, setActive] = useState('india')
  const current = categories.find((c) => c.id === active)!

  return (
    <section className="py-20 bg-muted">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-10">
          <p className="text-xs uppercase tracking-[0.2em] text-accent font-sans mb-2">Explore by Theme</p>
          <h2 className="font-serif text-4xl md:text-5xl font-semibold text-foreground text-balance">
            Where Would You <em>Like to Go?</em>
          </h2>
        </div>

        {/* Tabs */}
        <div className="flex items-center justify-center gap-2 flex-wrap mb-10">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActive(cat.id)}
              className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-200 ${
                active === cat.id
                  ? 'bg-forest text-white shadow-sm'
                  : 'bg-background text-foreground border border-border hover:border-forest hover:text-forest'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Destination grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {current.destinations.map((dest, i) => (
            <Link
              key={dest.name}
              href={`/tours?filter=${active}`}
              className={`group relative rounded-2xl overflow-hidden ${i === 0 ? 'md:row-span-2 h-72 md:h-auto' : 'h-40'} hover:shadow-xl transition-shadow duration-300`}
            >
              <Image
                src={dest.image}
                alt={dest.name}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
              <div className="absolute bottom-3 left-3">
                <p className="text-white font-serif text-lg font-semibold">{dest.name}</p>
                <p className="text-white/70 text-xs">{dest.packages} packages</p>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-8 text-center">
          <Link
            href={`/tours?filter=${active}`}
            className="inline-flex items-center gap-2 text-sm font-medium text-accent hover:gap-3 transition-all"
          >
            See all {current.label} packages <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  )
}
