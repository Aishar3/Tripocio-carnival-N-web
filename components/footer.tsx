import Link from 'next/link'
import { Phone, Mail, MapPin, Share2, Camera, Play } from 'lucide-react'

const quickLinks = [
  { label: 'All Packages', href: '/tours' },
  { label: 'India Tours', href: '/tours?filter=india' },
  { label: 'International', href: '/tours?filter=international' },
  { label: 'Pilgrimages', href: '/tours?filter=pilgrimage' },
  { label: 'Visa Services', href: '/visa' },
  { label: 'Franchise Opportunity', href: '/contact#franchise' },
]

const companyLinks = [
  { label: 'About TripOcio', href: '/about' },
  { label: 'Our Team', href: '/about#team' },
  { label: 'MetaSkyDubai', href: '/about#metaskydubai' },
  { label: 'TripTrek Pilgrimage', href: '/about#triptrek' },
  { label: 'Contact Us', href: '/contact' },
  { label: 'Privacy Policy', href: '#' },
]

export default function Footer() {
  return (
    <footer className="bg-forest text-forest-foreground">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Brand */}
        <div className="lg:col-span-1">
          <div className="mb-4">
            <span className="font-serif text-3xl font-semibold text-white">TripOcio</span>
            <p className="text-xs uppercase tracking-[0.2em] text-white/50 mt-0.5">Craft Your Journey</p>
          </div>
          <p className="text-sm text-white/70 leading-relaxed mb-6">
            Indore&apos;s most trusted travel agency since 2009. We craft unforgettable journeys — from Himalayan pilgrimages to Dubai skylines and beyond.
          </p>
          <div className="flex items-center gap-3">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook"
              className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent transition-colors">
              <Share2 size={14} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram"
              className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent transition-colors">
              <Camera size={14} />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube"
              className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent transition-colors">
              <Play size={14} />
            </a>
          </div>
        </div>

        {/* Quick links */}
        <div>
          <h4 className="font-serif text-lg text-white mb-4">Our Packages</h4>
          <ul className="flex flex-col gap-2">
            {quickLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-sm text-white/70 hover:text-white transition-colors">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Company */}
        <div>
          <h4 className="font-serif text-lg text-white mb-4">Company</h4>
          <ul className="flex flex-col gap-2">
            {companyLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-sm text-white/70 hover:text-white transition-colors">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-serif text-lg text-white mb-4">Get in Touch</h4>
          <div className="flex flex-col gap-3">
            <a href="tel:+917312345678" className="flex items-start gap-3 text-sm text-white/70 hover:text-white transition-colors group">
              <Phone size={15} className="mt-0.5 shrink-0 group-hover:text-accent" />
              +91 731 234 5678
            </a>
            <a href="mailto:hello@tripocio.com" className="flex items-start gap-3 text-sm text-white/70 hover:text-white transition-colors group">
              <Mail size={15} className="mt-0.5 shrink-0 group-hover:text-accent" />
              hello@tripocio.com
            </a>
            <div className="flex items-start gap-3 text-sm text-white/70">
              <MapPin size={15} className="mt-0.5 shrink-0 text-accent" />
              <span>MG Road, Indore, Madhya Pradesh 452001</span>
            </div>
          </div>
          <div className="mt-6 p-4 bg-white/10 rounded-lg">
            <p className="text-xs text-white/60 mb-1">IATA Accredited Agency</p>
            <p className="text-sm font-medium text-white">Reg. No. IATA/MP/2009/001</p>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row items-center justify-between gap-2 text-xs text-white/50">
          <p>&copy; {new Date().getFullYear()} TripOcio Travel Pvt. Ltd. All rights reserved.</p>
          <p>Designed with passion for travel &mdash; Indore, India</p>
        </div>
      </div>
    </footer>
  )
}
