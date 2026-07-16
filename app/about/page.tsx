import Image from 'next/image'
import Link from 'next/link'
import { Award, Shield, Star, Users, ArrowRight } from 'lucide-react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Us — TripOcio Travel Agency Indore',
  description: 'Learn about TripOcio — Indore\'s trusted travel agency since 2009. Meet our team, discover our story, and explore our family of travel brands.',
}

const milestones = [
  { year: '2009', title: 'Founded in Indore', desc: 'TripOcio started as a small travel desk with a big dream — to craft unforgettable journeys for every Indian family.' },
  { year: '2012', title: 'IATA Accreditation', desc: 'Achieved IATA accreditation, cementing our position as a trusted and government-recognized travel agency.' },
  { year: '2015', title: 'Launched TripTrek Pilgrimage', desc: 'Dedicated pilgrimage division launched to serve the growing demand for spiritually immersive journeys.' },
  { year: '2018', title: 'MetaSkyDubai Division', desc: 'Opened our Dubai-specialist arm, becoming Indore\'s go-to agency for UAE travel and visa services.' },
  { year: '2021', title: '10,000 Travelers Milestone', desc: 'Celebrated serving 10,000 happy travelers — a testament to trust, care, and relentless dedication.' },
  { year: '2024', title: 'Franchise Network', desc: 'Expanded the TripOcio franchise network across Madhya Pradesh, empowering local entrepreneurs.' },
]

const team = [
  { name: 'Rajesh Tripathi', role: 'Founder & CEO', initials: 'RT', bio: '15+ years in travel. Rajesh started TripOcio with a mission to make quality travel accessible to every family in Central India.' },
  { name: 'Priya Sharma', role: 'Head of Operations', initials: 'PS', bio: 'Manages 200+ annual itineraries with flawless precision. Priya is the backbone of every trip that leaves Indore.' },
  { name: 'Arjun Mehta', role: 'International Tours Lead', initials: 'AM', bio: 'Dubai specialist and UAE visa expert. Arjun leads the MetaSkyDubai division with deep expertise in Gulf travel.' },
  { name: 'Sunita Verma', role: 'Pilgrimage Specialist', initials: 'SV', bio: 'Certified yatra guide and devout traveler. Sunita curates every pilgrimage with spiritual authenticity and care for elderly travelers.' },
]

const awards = [
  { title: 'Best Travel Agency MP', year: '2023', body: 'TAAI Madhya Pradesh Chapter' },
  { title: 'Excellence in Pilgrimage Tourism', year: '2022', body: 'India Tourism Board' },
  { title: 'Top Travel Startup Indore', year: '2019', body: 'Indore Business Summit' },
  { title: 'IATA Accredited Member', year: '2012', body: 'International Air Transport Association' },
]

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-forest overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <Image src="/images/about-team.png" alt="" fill className="object-cover" sizes="100vw" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <p className="text-xs uppercase tracking-[0.2em] text-white/50 mb-2">Our Story</p>
          <h1 className="font-serif text-5xl md:text-6xl font-semibold text-white mb-4 text-balance">
            About TripOcio
          </h1>
          <p className="text-white/70 max-w-xl mx-auto text-base leading-relaxed">
            15 years, 10,000+ travelers, one unwavering purpose — crafting journeys that become memories for a lifetime.
          </p>
        </div>
      </section>

      {/* Story section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-14 items-center">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-accent mb-2">Who We Are</p>
            <h2 className="font-serif text-4xl font-semibold text-foreground mb-6 text-balance leading-tight">
              Indore&apos;s Most Trusted <em>Travel Family</em>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              TripOcio was born in 2009 from a simple belief — that every family deserves a perfectly crafted journey, regardless of budget or destination. What started as a small travel desk in Indore has grown into Madhya Pradesh&apos;s most trusted travel agency.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              We are IATA accredited, government recognized, and — most importantly — trusted by over 10,000 happy travelers who keep coming back to us for every new adventure. From Char Dham yatras to Bali honeymoons, from Dubai city breaks to custom destination weddings, we handle every detail with the care it deserves.
            </p>
            <div className="flex items-center gap-6">
              {[{ n: '10K+', l: 'Travelers' }, { n: '200+', l: 'Packages' }, { n: '15+', l: 'Years' }, { n: '4.9', l: 'Rating' }].map((stat) => (
                <div key={stat.l} className="text-center">
                  <p className="font-serif text-3xl font-semibold text-accent">{stat.n}</p>
                  <p className="text-xs text-muted-foreground uppercase tracking-widest mt-0.5">{stat.l}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative h-[420px] rounded-2xl overflow-hidden">
            <Image src="/images/about-team.png" alt="TripOcio team" fill className="object-cover" sizes="50vw" />
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-xs uppercase tracking-[0.2em] text-accent mb-2">Our Journey</p>
            <h2 className="font-serif text-4xl font-semibold text-foreground text-balance">15 Years of <em>Milestones</em></h2>
          </div>
          <div className="relative">
            <div className="hidden md:block absolute left-1/2 -translate-x-px top-0 bottom-0 w-px bg-border" />
            <div className="flex flex-col gap-8">
              {milestones.map((m, i) => (
                <div key={m.year} className={`flex gap-6 md:gap-0 items-start ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  <div className={`flex-1 ${i % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                    <div className={`inline-block bg-card border border-border rounded-xl p-5 ${i % 2 === 0 ? 'md:ml-auto' : ''} max-w-sm`}>
                      <p className="text-xs font-medium text-accent mb-1">{m.year}</p>
                      <h3 className="font-serif text-lg font-semibold text-foreground mb-1">{m.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{m.desc}</p>
                    </div>
                  </div>
                  <div className="hidden md:flex w-8 h-8 rounded-full bg-forest border-4 border-muted items-center justify-center shrink-0 z-10 mt-4">
                    <div className="w-2 h-2 rounded-full bg-white" />
                  </div>
                  <div className="flex-1" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section id="team" className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-xs uppercase tracking-[0.2em] text-accent mb-2">The People Behind</p>
            <h2 className="font-serif text-4xl font-semibold text-foreground text-balance">Meet Our <em>Team</em></h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member) => (
              <div key={member.name} className="bg-card border border-border rounded-2xl p-6 text-center hover:shadow-md transition-shadow">
                <div className="w-16 h-16 rounded-full bg-forest text-white font-serif text-xl font-semibold flex items-center justify-center mx-auto mb-4">
                  {member.initials}
                </div>
                <h3 className="font-serif text-lg font-semibold text-foreground">{member.name}</h3>
                <p className="text-xs text-accent uppercase tracking-wider mb-3">{member.role}</p>
                <p className="text-xs text-muted-foreground leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards */}
      <section className="py-20 bg-secondary/40">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-xs uppercase tracking-[0.2em] text-accent mb-2">Recognition</p>
            <h2 className="font-serif text-4xl font-semibold text-foreground text-balance">Awards & <em>Accreditations</em></h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {awards.map((award) => (
              <div key={award.title} className="bg-card border border-border rounded-xl p-5 flex flex-col gap-3">
                <Award size={28} className="text-gold" />
                <div>
                  <p className="text-xs text-muted-foreground">{award.year}</p>
                  <h3 className="font-serif text-base font-semibold text-foreground mt-0.5">{award.title}</h3>
                  <p className="text-xs text-muted-foreground mt-1">{award.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sub-brands */}
      <section className="py-20 bg-forest text-forest-foreground">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-xs uppercase tracking-[0.2em] text-white/50 mb-2">Our Family of Brands</p>
            <h2 className="font-serif text-4xl font-semibold text-white text-balance">Specialized <em>Divisions</em></h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { id: 'tripocio', name: 'TripOcio', desc: 'The flagship brand — covering all domestic and international leisure tours, group travel, honeymoon packages, and corporate travel.', href: '/tours' },
              { id: 'metaskydubai', name: 'MetaSkyDubai', desc: 'Indore\'s dedicated Dubai specialist — UAE visa assistance, luxury hotel bookings, desert safaris, and business travel packages.', href: '/tours?filter=international' },
              { id: 'triptrek', name: 'TripTrek Pilgrimage', desc: 'Sacred journeys handled with devotion — Char Dham, Vaishno Devi, Tirupati, Shirdi, and custom yatras with dedicated pandits.', href: '/tours?filter=pilgrimage' },
            ].map((brand) => (
              <div key={brand.id} className="bg-white/10 border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-colors">
                <h3 className="font-serif text-2xl font-semibold text-white mb-2">{brand.name}</h3>
                <p className="text-white/70 text-sm leading-relaxed mb-4">{brand.desc}</p>
                <Link href={brand.href} className="inline-flex items-center gap-2 text-white text-sm font-medium hover:gap-3 transition-all">
                  Explore <ArrowRight size={14} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
