import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'

const brands = [
  {
    name: 'MetaSkyDubai',
    tagline: 'Your Dubai Specialist',
    description:
      'Dedicated Dubai travel arm of TripOcio — visa assistance, luxury hotel bookings, desert safaris, and business travel for UAE. Serving 2,000+ clients annually.',
    image: '/images/tour-dubai.png',
    href: '/tours?filter=international',
    badge: 'Dubai Specialist',
  },
  {
    name: 'TripTrek Pilgrimage',
    tagline: 'Sacred Journeys, Crafted with Devotion',
    description:
      'Our pilgrimage division — Char Dham, Vaishno Devi, Tirupati, Shirdi, Kashi, and custom yatras handled with dedicated pandits, special puja arrangements, and senior-friendly logistics.',
    image: '/images/tour-kedarnath.png',
    href: '/tours?filter=pilgrimage',
    badge: 'Spiritual Tours',
  },
]

export default function SubBrands() {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <p className="text-xs uppercase tracking-[0.2em] text-accent font-sans mb-2">Our Family of Brands</p>
          <h2 className="font-serif text-4xl md:text-5xl font-semibold text-foreground text-balance">
            Specialized <em>Expertise</em>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {brands.map((brand) => (
            <div key={brand.name} className="group relative rounded-2xl overflow-hidden h-80 cursor-pointer">
              <Image
                src={brand.image}
                alt={brand.name}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
              <div className="absolute inset-0 p-7 flex flex-col justify-end">
                <span className="inline-block bg-accent text-white text-xs px-3 py-1 rounded-full mb-3 self-start">
                  {brand.badge}
                </span>
                <h3 className="font-serif text-3xl font-semibold text-white mb-1">{brand.name}</h3>
                <p className="text-white/70 text-sm mb-3 italic">{brand.tagline}</p>
                <p className="text-white/60 text-xs leading-relaxed mb-4 max-w-sm">{brand.description}</p>
                <Link
                  href={brand.href}
                  className="inline-flex items-center gap-2 text-white text-sm font-medium hover:gap-3 transition-all"
                >
                  Explore Packages <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
