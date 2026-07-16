'use client'

import { useState } from 'react'
import { MessageCircle, Phone, Send, Users, Calendar } from 'lucide-react'
import type { Tour } from '@/lib/tours-data'

export default function BookingForm({ tour }: { tour: Tour }) {
  const [form, setForm] = useState({ name: '', phone: '', date: '', people: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const waMessage = encodeURIComponent(
    `Hello TripOcio! I'm interested in the *${tour.title}* package.\n\nPlease share more details and availability.`
  )

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="bg-card border border-border rounded-2xl p-6 text-center">
        <div className="w-14 h-14 rounded-full bg-forest/10 flex items-center justify-center mx-auto mb-4">
          <Send size={24} className="text-forest" />
        </div>
        <h3 className="font-serif text-xl font-semibold text-foreground mb-2">Enquiry Sent!</h3>
        <p className="text-sm text-muted-foreground leading-relaxed mb-4">
          Thank you, {form.name}! Our travel expert will call you within 2 hours to discuss your trip.
        </p>
        <a
          href={`https://wa.me/917312345678?text=${waMessage}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 w-full bg-[#25D366] text-white py-3 rounded-full text-sm font-medium hover:bg-[#20b858] transition-colors"
        >
          <MessageCircle size={16} />
          Chat on WhatsApp
        </a>
      </div>
    )
  }

  return (
    <div className="bg-card border border-border rounded-2xl overflow-hidden shadow-sm">
      {/* Header */}
      <div className="bg-forest p-5 text-white">
        <p className="text-white/60 text-xs mb-1">Enquire About This Tour</p>
        <h3 className="font-serif text-xl font-semibold">{tour.title}</h3>
        <div className="flex items-center gap-3 mt-2">
          <p className="text-2xl font-serif font-semibold">{tour.priceLabel}</p>
          <span className="text-white/50 text-xs">per person</span>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="p-5 flex flex-col gap-3">
        <div>
          <label htmlFor="name" className="text-xs text-muted-foreground block mb-1">Full Name *</label>
          <input
            id="name"
            type="text"
            required
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            placeholder="Your name"
            className="w-full px-3 py-2.5 text-sm border border-border rounded-lg bg-background focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/30 transition-colors"
          />
        </div>

        <div>
          <label htmlFor="phone" className="text-xs text-muted-foreground block mb-1">Phone Number *</label>
          <input
            id="phone"
            type="tel"
            required
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
            placeholder="+91 98765 43210"
            className="w-full px-3 py-2.5 text-sm border border-border rounded-lg bg-background focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/30 transition-colors"
          />
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div>
            <label htmlFor="date" className="text-xs text-muted-foreground block mb-1">
              <span className="flex items-center gap-1"><Calendar size={11} /> Travel Date</span>
            </label>
            <input
              id="date"
              type="date"
              value={form.date}
              onChange={(e) => setForm({ ...form, date: e.target.value })}
              className="w-full px-3 py-2.5 text-sm border border-border rounded-lg bg-background focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/30 transition-colors"
            />
          </div>
          <div>
            <label htmlFor="people" className="text-xs text-muted-foreground block mb-1">
              <span className="flex items-center gap-1"><Users size={11} /> People</span>
            </label>
            <select
              id="people"
              value={form.people}
              onChange={(e) => setForm({ ...form, people: e.target.value })}
              className="w-full px-3 py-2.5 text-sm border border-border rounded-lg bg-background focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/30 transition-colors"
            >
              <option value="">Select</option>
              {[1,2,3,4,5,'6+'].map((n) => <option key={n} value={n}>{n}</option>)}
            </select>
          </div>
        </div>

        <div>
          <label htmlFor="message" className="text-xs text-muted-foreground block mb-1">Special Requests</label>
          <textarea
            id="message"
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            placeholder="Any special requirements, dietary needs, or customizations..."
            rows={3}
            className="w-full px-3 py-2.5 text-sm border border-border rounded-lg bg-background resize-none focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/30 transition-colors"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-accent text-white font-medium py-3 rounded-full text-sm hover:bg-accent/90 transition-colors mt-1"
        >
          Send Enquiry
        </button>

        <div className="flex items-center gap-3 mt-1">
          <div className="flex-1 h-px bg-border" />
          <span className="text-xs text-muted-foreground">or</span>
          <div className="flex-1 h-px bg-border" />
        </div>

        <div className="grid grid-cols-2 gap-2">
          <a
            href={`https://wa.me/917312345678?text=${waMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-1.5 bg-[#25D366] text-white py-2.5 rounded-full text-xs font-medium hover:bg-[#20b858] transition-colors"
          >
            <MessageCircle size={13} />
            WhatsApp
          </a>
          <a
            href="tel:+917312345678"
            className="flex items-center justify-center gap-1.5 bg-muted text-foreground py-2.5 rounded-full text-xs font-medium hover:bg-secondary transition-colors"
          >
            <Phone size={13} />
            Call Us
          </a>
        </div>
      </form>
    </div>
  )
}
