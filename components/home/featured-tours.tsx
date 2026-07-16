import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Clock, Star, MapPin } from 'lucide-react'
import { getFeaturedTours } from '@/lib/tours-data'

export default function FeaturedTours() {
  const tours = getFeaturedTours().slice(0, 6)

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-accent font-sans mb-2">Handpicked Journeys</p>
            <h2 className="font-serif text-4xl md:text-5xl font-semibold text-foreground text-balance">
              Featured <em>Packages</em>
            </h2>
          </div>
          <Link
            href="/tours"
            className="inline-flex items-center gap-2 text-sm font-medium text-accent hover:gap-3 transition-all"
          >
            View All Packages <ArrowRight size={16} />
          </Link>
        </div>

        {/* Tours grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tours.map((tour) => (
            <Link
              key={tour.id}
              href={`/tours/${tour.slug}`}
              className="tour-card group bg-card rounded-2xl overflow-hidden border border-border hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={tour.image}
                  alt={tour.title}
                  fill
                  className="tour-card-img object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                {/* Category badge */}
                <div className="absolute top-3 left-3">
                  <span className="bg-white/90 backdrop-blur-sm text-foreground text-xs font-medium px-3 py-1 rounded-full capitalize">
                    {tour.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <div className="flex items-center gap-1 text-xs text-muted-foreground mb-2">
                  <MapPin size={12} />
                  <span>{tour.destination}, {tour.country}</span>
                </div>
                <h3 className="font-serif text-lg font-semibold text-foreground mb-3 leading-snug text-balance">
                  {tour.title}
                </h3>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {tour.tags.slice(0, 3).map((tag) => (
                    <span key={tag} className="text-xs bg-muted text-muted-foreground px-2 py-0.5 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-3 border-t border-border">
                  <div className="flex items-center gap-3">
                    <div className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Clock size={12} />
                      <span>{tour.duration}</span>
                    </div>
                    <div className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Star size={12} fill="#B8973A" className="text-gold" />
                      <span>{tour.rating} ({tour.reviewCount})</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-[10px] text-muted-foreground">Starting from</p>
                    <p className="font-serif text-lg font-semibold text-accent">{tour.priceLabel}</p>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
