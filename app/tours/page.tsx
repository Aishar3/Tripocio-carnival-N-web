'use client'

import { useState, useMemo } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Search, SlidersHorizontal, Clock, Star, MapPin, X } from 'lucide-react'
import { tours, type Tour } from '@/lib/tours-data'

const categories = [
  { id: 'all', label: 'All Packages' },
  { id: 'india', label: 'India' },
  { id: 'international', label: 'International' },
  { id: 'pilgrimage', label: 'Pilgrimage' },
  { id: 'honeymoon', label: 'Honeymoon' },
  { id: 'adventure', label: 'Adventure' },
]

const sortOptions = [
  { value: 'featured', label: 'Featured' },
  { value: 'price-asc', label: 'Price: Low to High' },
  { value: 'price-desc', label: 'Price: High to Low' },
  { value: 'rating', label: 'Best Rated' },
]

export default function ToursPage() {
  const [search, setSearch] = useState('')
  const [activeCategory, setActiveCategory] = useState('all')
  const [sort, setSort] = useState('featured')
  const [showFilters, setShowFilters] = useState(false)

  const filtered = useMemo(() => {
    let result = [...tours]

    if (activeCategory !== 'all') {
      result = result.filter((t) => t.category === activeCategory)
    }

    if (search.trim()) {
      const q = search.toLowerCase()
      result = result.filter(
        (t) =>
          t.title.toLowerCase().includes(q) ||
          t.destination.toLowerCase().includes(q) ||
          t.tags.some((tag) => tag.toLowerCase().includes(q))
      )
    }

    if (sort === 'price-asc') result.sort((a, b) => a.price - b.price)
    else if (sort === 'price-desc') result.sort((a, b) => b.price - a.price)
    else if (sort === 'rating') result.sort((a, b) => b.rating - a.rating)
    else result.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0))

    return result
  }, [search, activeCategory, sort])

  return (
    <>
      {/* Page hero */}
      <section className="relative pt-32 pb-16 bg-forest overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <Image src="/images/hero-bg.png" alt="" fill className="object-cover" sizes="100vw" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <p className="text-xs uppercase tracking-[0.2em] text-white/50 font-sans mb-2">Explore Our Collection</p>
          <h1 className="font-serif text-5xl md:text-6xl font-semibold text-white mb-4 text-balance">
            Tours & Packages
          </h1>
          <p className="text-white/70 max-w-xl mx-auto text-base leading-relaxed">
            From sacred pilgrimages to sun-soaked beaches, choose from 200+ curated packages across India and the world.
          </p>
        </div>
      </section>

      {/* Filters bar */}
      <section className="sticky top-[73px] z-40 bg-background border-b border-border shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-3 flex flex-col md:flex-row gap-3 items-start md:items-center">
          {/* Search */}
          <div className="relative flex-1 max-w-sm">
            <Search size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search destination or tour..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-9 pr-4 py-2 text-sm border border-border rounded-full bg-muted/50 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/30 transition-colors"
            />
            {search && (
              <button
                onClick={() => setSearch('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                aria-label="Clear search"
              >
                <X size={13} />
              </button>
            )}
          </div>

          {/* Category tabs */}
          <div className="flex items-center gap-1.5 flex-wrap">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all duration-200 ${
                  activeCategory === cat.id
                    ? 'bg-forest text-white'
                    : 'bg-muted text-muted-foreground hover:bg-secondary hover:text-foreground'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Sort */}
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            className="ml-auto text-xs border border-border rounded-full px-4 py-2 bg-background focus:outline-none focus:border-accent cursor-pointer"
            aria-label="Sort tours"
          >
            {sortOptions.map((opt) => (
              <option key={opt.value} value={opt.value}>{opt.label}</option>
            ))}
          </select>
        </div>
      </section>

      {/* Results */}
      <section className="py-12 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-sm text-muted-foreground mb-6">
            Showing <strong className="text-foreground">{filtered.length}</strong> packages
            {activeCategory !== 'all' && ` in ${categories.find((c) => c.id === activeCategory)?.label}`}
          </p>

          {filtered.length === 0 ? (
            <div className="text-center py-20">
              <p className="font-serif text-2xl text-foreground mb-2">No packages found</p>
              <p className="text-muted-foreground text-sm">Try adjusting your search or filter.</p>
              <button
                onClick={() => { setSearch(''); setActiveCategory('all') }}
                className="mt-4 text-sm text-accent hover:underline"
              >
                Clear all filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
              {filtered.map((tour) => (
                <TourCard key={tour.id} tour={tour} />
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  )
}

function TourCard({ tour }: { tour: Tour }) {
  return (
    <Link
      href={`/tours/${tour.slug}`}
      className="tour-card group bg-card rounded-2xl overflow-hidden border border-border hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col"
    >
      <div className="relative h-48 overflow-hidden">
        <Image
          src={tour.image}
          alt={tour.title}
          fill
          className="tour-card-img object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
        />
        <div className="absolute top-3 left-3">
          <span className="bg-white/90 text-foreground text-xs font-medium px-3 py-1 rounded-full capitalize">
            {tour.category}
          </span>
        </div>
        {tour.featured && (
          <div className="absolute top-3 right-3">
            <span className="bg-accent text-white text-xs font-medium px-2 py-1 rounded-full">Featured</span>
          </div>
        )}
      </div>

      <div className="p-4 flex flex-col flex-1">
        <div className="flex items-center gap-1 text-xs text-muted-foreground mb-1.5">
          <MapPin size={11} />
          <span>{tour.destination}</span>
        </div>
        <h3 className="font-serif text-base font-semibold text-foreground mb-2 leading-snug flex-1">
          {tour.title}
        </h3>
        <div className="flex flex-wrap gap-1 mb-3">
          {tour.tags.slice(0, 2).map((tag) => (
            <span key={tag} className="text-xs bg-muted text-muted-foreground px-2 py-0.5 rounded-full">
              {tag}
            </span>
          ))}
        </div>
        <div className="flex items-center justify-between pt-3 border-t border-border mt-auto">
          <div className="flex flex-col gap-0.5">
            <div className="flex items-center gap-1 text-xs text-muted-foreground">
              <Clock size={11} />
              <span>{tour.duration}</span>
            </div>
            <div className="flex items-center gap-1 text-xs text-muted-foreground">
              <Star size={11} fill="#B8973A" className="text-gold" />
              <span>{tour.rating} ({tour.reviewCount})</span>
            </div>
          </div>
          <div className="text-right">
            <p className="text-[10px] text-muted-foreground">From</p>
            <p className="font-serif text-base font-semibold text-accent">{tour.priceLabel}</p>
          </div>
        </div>
      </div>
    </Link>
  )
}
