'use client'

import { useState } from 'react'
import Image from 'next/image'
import {
  Phone, Mail, MapPin, Clock, MessageCircle,
  Send, Check, TrendingUp, Users, Globe, Briefcase,
  ChevronRight
} from 'lucide-react'
import type { Metadata } from 'next'

const contactInfo = [
  {
    icon: Phone,
    label: 'Call Us',
    primary: '+91 731 234 5678',
    secondary: '+91 98765 43210 (WhatsApp)',
    href: 'tel:+917312345678',
  },
  {
    icon: Mail,
    label: 'Email Us',
    primary: 'hello@tripocio.com',
    secondary: 'bookings@tripocio.com',
    href: 'mailto:hello@tripocio.com',
  },
  {
    icon: MapPin,
    label: 'Visit Us',
    primary: '42, MG Road, Palasia',
    secondary: 'Indore, Madhya Pradesh 452001',
    href: 'https://maps.google.com',
  },
  {
    icon: Clock,
    label: 'Office Hours',
    primary: 'Mon – Sat: 9:30 AM – 7:00 PM',
    secondary: 'Sunday: 10:00 AM – 3:00 PM',
    href: null,
  },
]

const franchiseBenefits = [
  { icon: TrendingUp, title: 'Proven Business Model', desc: 'Leverage 15+ years of TripOcio\'s operational expertise, systems, and brand reputation from day one.' },
  { icon: Users, title: 'Full Training & Support', desc: 'Complete onboarding, sales training, booking platform access, and ongoing operational support from HQ.' },
  { icon: Globe, title: 'Exclusive Territory Rights', desc: 'Get protected territory rights in your city or district — no competition from other TripOcio franchisees.' },
  { icon: Briefcase, title: 'Low Investment, High Returns', desc: 'Start with an investment as low as ₹3 Lakh. Our franchise partners average 25–40% margins on every package sold.' },
]

const franchiseFaq = [
  { q: 'What is the minimum investment required?', a: 'The TripOcio franchise starts at ₹3 Lakhs for a home-based model and ₹8–12 Lakhs for a full retail outlet setup.' },
  { q: 'Do I need prior travel experience?', a: 'No prior experience is needed. TripOcio provides complete training covering bookings, sales, visa processing, and customer service.' },
  { q: 'How long does it take to break even?', a: 'Most franchise partners break even within 6–10 months. With active marketing, several partners have broken even in under 4 months.' },
  { q: 'What support does TripOcio provide?', a: 'We provide booking system access, supplier contracts, marketing materials, branding kit, dedicated franchise manager, and 24/7 helpdesk.' },
]

export default function ContactPage() {
  const [contactForm, setContactForm] = useState({ name: '', phone: '', email: '', subject: '', message: '' })
  const [contactSent, setContactSent] = useState(false)
  const [franchiseForm, setFranchiseForm] = useState({ name: '', phone: '', email: '', city: '', investment: '', experience: '' })
  const [franchiseSent, setFranchiseSent] = useState(false)
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  function handleContactSubmit(e: React.FormEvent) {
    e.preventDefault()
    setContactSent(true)
  }

  function handleFranchiseSubmit(e: React.FormEvent) {
    e.preventDefault()
    setFranchiseSent(true)
  }

  const waContactMsg = encodeURIComponent("Hello TripOcio! I'd like to get in touch with your team. Please help me.")
  const waFranchiseMsg = encodeURIComponent("Hello TripOcio! I'm interested in the franchise opportunity. Could you share more details?")

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-forest overflow-hidden">
        <div className="absolute inset-0 opacity-15">
          <Image src="/images/hero-bg.png" alt="" fill className="object-cover" sizes="100vw" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <p className="text-xs uppercase tracking-[0.2em] text-white/50 mb-2">We&apos;re Here to Help</p>
          <h1 className="font-serif text-5xl md:text-6xl font-semibold text-white mb-4 text-balance">
            Contact Us
          </h1>
          <p className="text-white/70 max-w-xl mx-auto text-base leading-relaxed">
            Talk to our travel experts, plan your next trip, or enquire about franchise opportunities. We respond within 2 hours.
          </p>
        </div>
      </section>

      {/* Contact info cards */}
      <section className="py-12 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {contactInfo.map((item) => {
              const Icon = item.icon
              const content = (
                <div className="bg-card border border-border rounded-xl p-5 hover:shadow-md hover:border-accent/30 transition-all group">
                  <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center mb-4 group-hover:bg-accent/10 transition-colors">
                    <Icon size={18} className="text-accent" />
                  </div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">{item.label}</p>
                  <p className="font-serif text-base font-semibold text-foreground">{item.primary}</p>
                  <p className="text-xs text-muted-foreground mt-1">{item.secondary}</p>
                </div>
              )
              return item.href ? (
                <a key={item.label} href={item.href} target={item.href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer">
                  {content}
                </a>
              ) : (
                <div key={item.label}>{content}</div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Main contact section: form + map */}
      <section className="py-12 bg-muted">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-10">
          {/* Contact form */}
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-accent mb-2">Send a Message</p>
            <h2 className="font-serif text-3xl font-semibold text-foreground mb-6">
              Plan Your <em>Next Trip</em>
            </h2>

            {contactSent ? (
              <div className="bg-card border border-border rounded-2xl p-8 text-center">
                <div className="w-14 h-14 rounded-full bg-forest/10 flex items-center justify-center mx-auto mb-4">
                  <Send size={24} className="text-forest" />
                </div>
                <h3 className="font-serif text-xl font-semibold text-foreground mb-2">Message Received!</h3>
                <p className="text-sm text-muted-foreground mb-5 leading-relaxed">
                  Thank you, {contactForm.name}! Our travel expert will reach out to you within 2 hours on your phone/email.
                </p>
                <a
                  href={`https://wa.me/917312345678?text=${waContactMsg}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-[#25D366] text-white px-6 py-3 rounded-full text-sm font-medium w-full"
                >
                  <MessageCircle size={16} /> Chat on WhatsApp Instead
                </a>
              </div>
            ) : (
              <form onSubmit={handleContactSubmit} className="bg-card border border-border rounded-2xl p-6 flex flex-col gap-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="cname" className="text-xs text-muted-foreground block mb-1">Full Name *</label>
                    <input id="cname" type="text" required value={contactForm.name}
                      onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                      placeholder="Your full name"
                      className="w-full px-4 py-3 text-sm border border-border rounded-xl bg-background focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/30 transition-colors" />
                  </div>
                  <div>
                    <label htmlFor="cphone" className="text-xs text-muted-foreground block mb-1">Phone Number *</label>
                    <input id="cphone" type="tel" required value={contactForm.phone}
                      onChange={(e) => setContactForm({ ...contactForm, phone: e.target.value })}
                      placeholder="+91 98765 43210"
                      className="w-full px-4 py-3 text-sm border border-border rounded-xl bg-background focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/30 transition-colors" />
                  </div>
                </div>
                <div>
                  <label htmlFor="cemail" className="text-xs text-muted-foreground block mb-1">Email Address</label>
                  <input id="cemail" type="email" value={contactForm.email}
                    onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                    placeholder="you@example.com"
                    className="w-full px-4 py-3 text-sm border border-border rounded-xl bg-background focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/30 transition-colors" />
                </div>
                <div>
                  <label htmlFor="csubject" className="text-xs text-muted-foreground block mb-1">Subject *</label>
                  <select id="csubject" required value={contactForm.subject}
                    onChange={(e) => setContactForm({ ...contactForm, subject: e.target.value })}
                    className="w-full px-4 py-3 text-sm border border-border rounded-xl bg-background focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/30 transition-colors">
                    <option value="">Select a topic</option>
                    <option>Plan a New Trip</option>
                    <option>Customise an Existing Package</option>
                    <option>Group / Corporate Travel</option>
                    <option>Visa Assistance</option>
                    <option>Destination Wedding</option>
                    <option>Franchise Enquiry</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="cmessage" className="text-xs text-muted-foreground block mb-1">Message</label>
                  <textarea id="cmessage" rows={4} value={contactForm.message}
                    onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                    placeholder="Tell us about your dream trip — destination, dates, number of travelers, budget..."
                    className="w-full px-4 py-3 text-sm border border-border rounded-xl bg-background resize-none focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/30 transition-colors" />
                </div>
                <button type="submit"
                  className="w-full bg-accent text-white font-medium py-3.5 rounded-full text-sm hover:bg-accent/90 transition-colors">
                  Send Message
                </button>
                <a href={`https://wa.me/917312345678?text=${waContactMsg}`}
                  target="_blank" rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-[#25D366] text-white py-3 rounded-full text-sm font-medium hover:bg-[#20b858] transition-colors">
                  <MessageCircle size={16} /> Or Chat on WhatsApp
                </a>
              </form>
            )}
          </div>

          {/* Map + quick info */}
          <div className="flex flex-col gap-6">
            {/* Map embed */}
            <div className="rounded-2xl overflow-hidden border border-border h-72 bg-muted relative">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3679.866!2d75.8574!3d22.7196!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fd0b0b0b0b0b%3A0x0!2sMG+Road%2C+Palasia%2C+Indore%2C+Madhya+Pradesh!5e0!3m2!1sen!2sin!4v1234567890"
                className="w-full h-full border-0"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="TripOcio Office Location"
              />
            </div>

            {/* Business hours */}
            <div className="bg-card border border-border rounded-xl p-5">
              <h3 className="font-serif text-lg font-semibold text-foreground mb-4">Office Hours</h3>
              <div className="flex flex-col gap-2">
                {[
                  { day: 'Monday – Friday', hours: '9:30 AM – 7:00 PM', active: true },
                  { day: 'Saturday', hours: '9:30 AM – 6:00 PM', active: true },
                  { day: 'Sunday', hours: '10:00 AM – 3:00 PM', active: false },
                ].map((row) => (
                  <div key={row.day} className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">{row.day}</span>
                    <span className={`font-medium ${row.active ? 'text-foreground' : 'text-muted-foreground'}`}>
                      {row.hours}
                    </span>
                  </div>
                ))}
              </div>
              <div className="mt-4 pt-4 border-t border-border flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <p className="text-xs text-muted-foreground">WhatsApp support available 24/7</p>
              </div>
            </div>

            {/* Quick connect */}
            <div className="grid grid-cols-2 gap-3">
              <a href="tel:+917312345678"
                className="flex flex-col items-center justify-center gap-2 bg-forest text-white rounded-xl py-5 hover:bg-forest/90 transition-colors group">
                <Phone size={20} />
                <span className="text-sm font-medium">Call Now</span>
                <span className="text-xs text-white/60">+91 731 234 5678</span>
              </a>
              <a href={`https://wa.me/917312345678?text=${waContactMsg}`}
                target="_blank" rel="noopener noreferrer"
                className="flex flex-col items-center justify-center gap-2 bg-[#25D366] text-white rounded-xl py-5 hover:bg-[#20b858] transition-colors">
                <MessageCircle size={20} />
                <span className="text-sm font-medium">WhatsApp</span>
                <span className="text-xs text-white/80">Chat Instantly</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Franchise section */}
      <section id="franchise" className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="text-xs uppercase tracking-[0.2em] text-accent mb-2">Business Opportunity</p>
            <h2 className="font-serif text-4xl md:text-5xl font-semibold text-foreground text-balance">
              Own a <em>TripOcio</em> Franchise
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto mt-3 text-sm leading-relaxed">
              Join India&apos;s fastest-growing travel franchise network. Run your own travel business backed by TripOcio&apos;s brand, technology, and 15 years of expertise.
            </p>
          </div>

          {/* Benefits grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
            {franchiseBenefits.map((b) => {
              const Icon = b.icon
              return (
                <div key={b.title} className="bg-muted border border-border rounded-xl p-6">
                  <div className="w-10 h-10 rounded-full bg-forest/10 flex items-center justify-center mb-4">
                    <Icon size={18} className="text-forest" />
                  </div>
                  <h3 className="font-serif text-base font-semibold text-foreground mb-2">{b.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{b.desc}</p>
                </div>
              )
            })}
          </div>

          {/* Franchise form + FAQ */}
          <div className="grid lg:grid-cols-2 gap-10">
            {/* Franchise enquiry form */}
            <div>
              <h3 className="font-serif text-2xl font-semibold text-foreground mb-6">Apply for Franchise</h3>

              {franchiseSent ? (
                <div className="bg-card border border-border rounded-2xl p-8 text-center">
                  <div className="w-14 h-14 rounded-full bg-forest/10 flex items-center justify-center mx-auto mb-4">
                    <Check size={24} className="text-forest" />
                  </div>
                  <h4 className="font-serif text-xl font-semibold text-foreground mb-2">Application Received!</h4>
                  <p className="text-sm text-muted-foreground mb-5 leading-relaxed">
                    Thank you, {franchiseForm.name}! Our franchise team will contact you within 24 hours with a detailed presentation and ROI breakdown.
                  </p>
                  <a
                    href={`https://wa.me/917312345678?text=${waFranchiseMsg}`}
                    target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 bg-[#25D366] text-white px-6 py-3 rounded-full text-sm font-medium w-full"
                  >
                    <MessageCircle size={16} /> Discuss on WhatsApp
                  </a>
                </div>
              ) : (
                <form onSubmit={handleFranchiseSubmit} className="bg-card border border-border rounded-2xl p-6 flex flex-col gap-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="fname" className="text-xs text-muted-foreground block mb-1">Full Name *</label>
                      <input id="fname" type="text" required value={franchiseForm.name}
                        onChange={(e) => setFranchiseForm({ ...franchiseForm, name: e.target.value })}
                        placeholder="Your name"
                        className="w-full px-4 py-3 text-sm border border-border rounded-xl bg-background focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/30 transition-colors" />
                    </div>
                    <div>
                      <label htmlFor="fphone" className="text-xs text-muted-foreground block mb-1">Phone Number *</label>
                      <input id="fphone" type="tel" required value={franchiseForm.phone}
                        onChange={(e) => setFranchiseForm({ ...franchiseForm, phone: e.target.value })}
                        placeholder="+91 98765 43210"
                        className="w-full px-4 py-3 text-sm border border-border rounded-xl bg-background focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/30 transition-colors" />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="femail" className="text-xs text-muted-foreground block mb-1">Email Address *</label>
                    <input id="femail" type="email" required value={franchiseForm.email}
                      onChange={(e) => setFranchiseForm({ ...franchiseForm, email: e.target.value })}
                      placeholder="you@example.com"
                      className="w-full px-4 py-3 text-sm border border-border rounded-xl bg-background focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/30 transition-colors" />
                  </div>
                  <div>
                    <label htmlFor="fcity" className="text-xs text-muted-foreground block mb-1">Your City *</label>
                    <input id="fcity" type="text" required value={franchiseForm.city}
                      onChange={(e) => setFranchiseForm({ ...franchiseForm, city: e.target.value })}
                      placeholder="e.g. Bhopal, Ujjain, Raipur"
                      className="w-full px-4 py-3 text-sm border border-border rounded-xl bg-background focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/30 transition-colors" />
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="finvestment" className="text-xs text-muted-foreground block mb-1">Investment Capacity *</label>
                      <select id="finvestment" required value={franchiseForm.investment}
                        onChange={(e) => setFranchiseForm({ ...franchiseForm, investment: e.target.value })}
                        className="w-full px-4 py-3 text-sm border border-border rounded-xl bg-background focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/30 transition-colors">
                        <option value="">Select range</option>
                        <option>₹2 – 5 Lakhs</option>
                        <option>₹5 – 10 Lakhs</option>
                        <option>₹10 – 20 Lakhs</option>
                        <option>₹20 Lakhs+</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="fexperience" className="text-xs text-muted-foreground block mb-1">Travel Experience</label>
                      <select id="fexperience" value={franchiseForm.experience}
                        onChange={(e) => setFranchiseForm({ ...franchiseForm, experience: e.target.value })}
                        className="w-full px-4 py-3 text-sm border border-border rounded-xl bg-background focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/30 transition-colors">
                        <option value="">Select</option>
                        <option>No experience</option>
                        <option>1–2 years</option>
                        <option>3–5 years</option>
                        <option>5+ years</option>
                      </select>
                    </div>
                  </div>
                  <button type="submit"
                    className="w-full bg-forest text-white font-medium py-3.5 rounded-full text-sm hover:bg-forest/90 transition-colors">
                    Submit Franchise Application
                  </button>
                  <a href={`https://wa.me/917312345678?text=${waFranchiseMsg}`}
                    target="_blank" rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 bg-[#25D366] text-white py-3 rounded-full text-sm font-medium hover:bg-[#20b858] transition-colors">
                    <MessageCircle size={16} /> Discuss on WhatsApp
                  </a>
                </form>
              )}
            </div>

            {/* FAQ */}
            <div>
              <h3 className="font-serif text-2xl font-semibold text-foreground mb-6">Frequently Asked Questions</h3>
              <div className="flex flex-col gap-3">
                {franchiseFaq.map((item, i) => (
                  <div key={i} className="bg-card border border-border rounded-xl overflow-hidden">
                    <button
                      onClick={() => setOpenFaq(openFaq === i ? null : i)}
                      className="w-full flex items-center justify-between px-5 py-4 text-left hover:bg-muted/50 transition-colors"
                      aria-expanded={openFaq === i}
                    >
                      <span className="font-serif text-sm font-semibold text-foreground pr-4">{item.q}</span>
                      <ChevronRight
                        size={16}
                        className={`text-muted-foreground shrink-0 transition-transform duration-200 ${openFaq === i ? 'rotate-90' : ''}`}
                      />
                    </button>
                    {openFaq === i && (
                      <div className="px-5 pb-4 text-sm text-muted-foreground leading-relaxed border-t border-border pt-3">
                        {item.a}
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Stats bar */}
              <div className="mt-8 bg-forest text-white rounded-xl p-6">
                <h4 className="font-serif text-lg font-semibold mb-4">Our Franchise Network</h4>
                <div className="grid grid-cols-3 gap-4">
                  {[
                    { n: '24+', l: 'Active Partners' },
                    { n: '12', l: 'Cities Covered' },
                    { n: '₹8L', l: 'Avg. Annual Revenue' },
                  ].map((stat) => (
                    <div key={stat.l} className="text-center">
                      <p className="font-serif text-2xl font-semibold text-white">{stat.n}</p>
                      <p className="text-xs text-white/60 mt-0.5">{stat.l}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
