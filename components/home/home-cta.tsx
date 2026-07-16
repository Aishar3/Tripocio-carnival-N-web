import Link from 'next/link'
import Image from 'next/image'
import { MessageCircle, Phone } from 'lucide-react'

export default function HomeCTA() {
  const waMessage = encodeURIComponent("Hello TripOcio! I'd like to plan a customized trip. Could you help me?")

  return (
    <section className="relative py-24 overflow-hidden">
      <Image
        src="/images/tour-bali.png"
        alt="Plan your trip with TripOcio"
        fill
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-forest/85" />
      <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
        <p className="text-xs uppercase tracking-[0.2em] text-white/50 font-sans mb-3">Ready to Travel?</p>
        <h2 className="font-serif text-4xl md:text-6xl font-semibold text-white mb-5 text-balance">
          Your Dream Trip is <em>One Click Away</em>
        </h2>
        <p className="text-white/70 text-base leading-relaxed mb-10 max-w-xl mx-auto">
          Share your dream destination and we&apos;ll craft a fully personalized itinerary — no generic packages, only experiences made for you.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 bg-accent text-white font-medium px-8 py-4 rounded-full hover:bg-accent/90 transition-colors text-sm"
          >
            Plan My Custom Trip
          </Link>
          <a
            href={`https://wa.me/917312345678?text=${waMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-[#25D366] text-white font-medium px-8 py-4 rounded-full hover:bg-[#20b858] transition-colors text-sm"
          >
            <MessageCircle size={16} />
            Chat on WhatsApp
          </a>
          <a
            href="tel:+917312345678"
            className="inline-flex items-center justify-center gap-2 bg-white/10 border border-white/30 text-white font-medium px-8 py-4 rounded-full hover:bg-white/20 transition-colors text-sm"
          >
            <Phone size={16} />
            Call Us Now
          </a>
        </div>
      </div>
    </section>
  )
}
