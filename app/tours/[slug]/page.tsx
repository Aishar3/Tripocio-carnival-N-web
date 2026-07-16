import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Clock, MapPin, Star, Users, Check, X, ChevronRight, ArrowLeft } from 'lucide-react'
import { getTourBySlug, tours } from '@/lib/tours-data'
import BookingForm from '@/components/tours/booking-form'
import ItineraryAccordion from '@/components/tours/itinerary-accordion'
import type { Metadata } from 'next'

type Props = { params: Promise<{ slug: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const tour = getTourBySlug(slug)
  if (!tour) return { title: 'Tour Not Found' }
  return {
    title: `${tour.title} — TripOcio`,
    description: tour.description,
  }
}

export function generateStaticParams() {
  return tours.map((t) => ({ slug: t.slug }))
}

export default async function TourDetailPage({ params }: Props) {
  const { slug } = await params
  const tour = getTourBySlug(slug)
  if (!tour) notFound()

  return (
    <>
      {/* Hero */}
      <section className="relative pt-20 h-[60vh] min-h-[480px] flex items-end overflow-hidden">
        <Image
          src={tour.image}
          alt={tour.title}
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/10" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 pb-12 w-full">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-white/60 text-xs mb-4">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight size={12} />
            <Link href="/tours" className="hover:text-white transition-colors">Tours</Link>
            <ChevronRight size={12} />
            <span className="text-white/90 truncate max-w-[200px]">{tour.title}</span>
          </nav>

          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 mb-3 flex-wrap">
                <span className="bg-accent text-white text-xs px-3 py-1 rounded-full capitalize">{tour.category}</span>
                {tour.tags.map((tag) => (
                  <span key={tag} className="bg-white/20 text-white text-xs px-3 py-1 rounded-full">{tag}</span>
                ))}
              </div>
              <h1 className="font-serif text-4xl md:text-5xl font-semibold text-white text-balance">{tour.title}</h1>
              <div className="flex items-center gap-4 mt-3 text-white/70 text-sm">
                <span className="flex items-center gap-1.5"><MapPin size={14} /> {tour.destination}, {tour.country}</span>
                <span className="flex items-center gap-1.5"><Clock size={14} /> {tour.duration}</span>
                <span className="flex items-center gap-1.5"><Star size={14} fill="#B8973A" className="text-yellow-400" /> {tour.rating} ({tour.reviewCount} reviews)</span>
              </div>
            </div>
            <div className="text-right">
              <p className="text-white/60 text-xs">Starting from</p>
              <p className="font-serif text-4xl font-semibold text-white">{tour.priceLabel}</p>
              <p className="text-white/50 text-xs">per person</p>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 bg-background">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-3 gap-10">
          {/* Left: main content */}
          <div className="lg:col-span-2 flex flex-col gap-10">
            {/* Back */}
            <Link href="/tours" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors self-start">
              <ArrowLeft size={15} /> Back to All Tours
            </Link>

            {/* Overview */}
            <div>
              <h2 className="font-serif text-2xl font-semibold text-foreground mb-3">Overview</h2>
              <p className="text-muted-foreground leading-relaxed">{tour.description}</p>
            </div>

            {/* Highlights */}
            <div>
              <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">Tour Highlights</h2>
              <div className="grid sm:grid-cols-2 gap-2">
                {tour.highlights.map((h) => (
                  <div key={h} className="flex items-start gap-2.5 p-3 bg-muted rounded-lg">
                    <Check size={16} className="text-forest mt-0.5 shrink-0" />
                    <span className="text-sm text-foreground">{h}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Itinerary */}
            <div>
              <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">Day-by-Day Itinerary</h2>
              <ItineraryAccordion itinerary={tour.itinerary} />
            </div>

            {/* Inclusions / Exclusions */}
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <h3 className="font-serif text-xl font-semibold text-foreground mb-3">What&apos;s Included</h3>
                <ul className="flex flex-col gap-2">
                  {tour.inclusions.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-foreground">
                      <Check size={15} className="text-forest mt-0.5 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="font-serif text-xl font-semibold text-foreground mb-3">What&apos;s Not Included</h3>
                <ul className="flex flex-col gap-2">
                  {tour.exclusions.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <X size={15} className="text-destructive mt-0.5 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Right: sticky booking form */}
          <div className="lg:col-span-1">
            <div className="sticky top-28">
              <BookingForm tour={tour} />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
