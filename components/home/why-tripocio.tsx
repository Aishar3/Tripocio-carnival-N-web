import { Shield, HeartHandshake, Map, CreditCard, Headphones, Award } from 'lucide-react'

const features = [
  {
    icon: Shield,
    title: 'IATA Accredited',
    description: 'Government-recognized travel agency with full IATA accreditation and ISO certification.',
  },
  {
    icon: HeartHandshake,
    title: 'Personalized Service',
    description: 'Every trip is custom-crafted to your preferences, budget, and travel style.',
  },
  {
    icon: Map,
    title: 'Expert Local Guides',
    description: 'Our certified guides bring destinations to life with deep local knowledge.',
  },
  {
    icon: CreditCard,
    title: 'Best Price Guarantee',
    description: 'We match any competitor price. Transparent pricing, zero hidden charges.',
  },
  {
    icon: Headphones,
    title: '24/7 Trip Support',
    description: 'Our team is available around the clock during your journey — just a call away.',
  },
  {
    icon: Award,
    title: '15+ Years of Excellence',
    description: 'Since 2009, we have been crafting memories for over 10,000 happy families.',
  },
]

export default function WhyTripocio() {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left text */}
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-accent font-sans mb-2">Why Choose Us</p>
            <h2 className="font-serif text-4xl md:text-5xl font-semibold text-foreground leading-tight mb-6 text-balance">
              Travel Smarter, <br /><em>Experience More</em>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              At TripOcio, we don&apos;t just sell tour packages — we engineer experiences. Every itinerary is thoughtfully designed, every stay is hand-picked, and every moment on your trip is our responsibility.
            </p>
            <div className="flex items-center gap-6">
              <div className="text-center">
                <p className="font-serif text-4xl font-semibold text-accent">10K+</p>
                <p className="text-xs text-muted-foreground uppercase tracking-wider mt-1">Travelers</p>
              </div>
              <div className="w-px h-12 bg-border" />
              <div className="text-center">
                <p className="font-serif text-4xl font-semibold text-accent">200+</p>
                <p className="text-xs text-muted-foreground uppercase tracking-wider mt-1">Packages</p>
              </div>
              <div className="w-px h-12 bg-border" />
              <div className="text-center">
                <p className="font-serif text-4xl font-semibold text-accent">4.9★</p>
                <p className="text-xs text-muted-foreground uppercase tracking-wider mt-1">Rating</p>
              </div>
            </div>
          </div>

          {/* Right features */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {features.map((feature) => {
              const Icon = feature.icon
              return (
                <div
                  key={feature.title}
                  className="group p-5 rounded-xl border border-border bg-card hover:border-accent/30 hover:shadow-md transition-all duration-200"
                >
                  <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center mb-3 group-hover:bg-accent group-hover:text-white transition-all duration-200">
                    <Icon size={18} />
                  </div>
                  <h3 className="font-serif text-base font-semibold text-foreground mb-1">{feature.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{feature.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
