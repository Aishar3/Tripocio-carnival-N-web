'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Check, Clock, FileText, ChevronDown, MessageCircle, Phone, Send } from 'lucide-react'

const visaData: Record<string, {
  flag: string
  type: string
  fee: string
  processing: string
  validity: string
  documents: string[]
  notes: string
}> = {
  UAE: {
    flag: '🇦🇪',
    type: 'Tourist Visa (30 days)',
    fee: '₹4,500 – ₹6,000',
    processing: '3–5 working days',
    validity: '30 days / Single Entry',
    documents: [
      'Valid passport (6+ months validity)',
      'Recent passport-size photograph (white background)',
      'Confirmed return flight tickets',
      'Hotel booking confirmation',
      'Bank statement (last 3 months)',
      'Salary slip / ITR (last 2 years)',
      'Travel insurance',
    ],
    notes: 'UAE visa can also be obtained on arrival for some nationalities. TripOcio handles the complete application process.',
  },
  Thailand: {
    flag: '🇹🇭',
    type: 'Tourist Visa / Visa on Arrival',
    fee: '₹2,500 – ₹3,500',
    processing: '2–4 working days',
    validity: '30 days / Single Entry',
    documents: [
      'Valid passport (6+ months validity)',
      'Passport-size photograph (4x6 cm, white background)',
      'Return flight tickets',
      'Hotel booking confirmation',
      'Bank statement showing sufficient funds',
      'Proof of accommodation in Thailand',
    ],
    notes: 'Indian passport holders can get visa on arrival for 30 days at major Thai airports. TripOcio pre-approval service available.',
  },
  Bali: {
    flag: '🇮🇩',
    type: 'Visa on Arrival (Indonesia)',
    fee: 'USD 35 (~₹2,900)',
    processing: 'On arrival (instant)',
    validity: '30 days, extendable to 60 days',
    documents: [
      'Valid passport (6+ months validity)',
      'Return flight tickets',
      'Hotel booking confirmation',
      'Sufficient funds (USD 1,000 or equivalent)',
      'Completed arrival card',
    ],
    notes: 'Indian passport holders can get Visa on Arrival at Ngurah Rai International Airport. Payment in USD or IDR at the airport.',
  },
  Malaysia: {
    flag: '🇲🇾',
    type: 'eNTRI / eVisa (Free for Indians)',
    fee: 'Free (eNTRI) / ₹2,500 (eVisa)',
    processing: '1–3 working days',
    validity: '15 days (eNTRI) / 30 days (eVisa)',
    documents: [
      'Valid passport (6+ months validity)',
      'Confirmed return flight tickets',
      'Hotel booking confirmation',
      'Bank statement (last 3 months)',
      'Passport-size photograph',
    ],
    notes: 'Indian nationals with certain criteria can use the free eNTRI system. TripOcio assists with complete documentation.',
  },
  Singapore: {
    flag: '🇸🇬',
    type: 'Tourist Visa',
    fee: '₹4,000 – ₹5,500',
    processing: '5–10 working days',
    validity: '30 days / Single Entry',
    documents: [
      'Valid passport (6+ months validity)',
      'Completed application form (IMM 14A)',
      'Passport-size photographs (2 copies)',
      'Return flight tickets',
      'Hotel booking confirmation',
      'Bank statement (last 6 months)',
      'Income tax returns (last 2 years)',
      'Employment certificate / Business registration',
    ],
    notes: 'Singapore visa requires detailed documentation. Apply at least 2 weeks before travel date.',
  },
  Schengen: {
    flag: '🇪🇺',
    type: 'Schengen Tourist Visa',
    fee: '€80 (~₹7,200)',
    processing: '10–15 working days',
    validity: '90 days within 180-day period',
    documents: [
      'Valid passport (3+ months beyond stay)',
      'Completed Schengen application form',
      'Travel medical insurance (min. €30,000 coverage)',
      'Return flight tickets',
      'Hotel / accommodation proof',
      'Bank statement (last 6 months, min ₹3 lakh)',
      'Income tax returns (last 2 years)',
      'Employment / business proof',
      'Leave approval letter (if employed)',
      'Cover letter explaining trip purpose',
    ],
    notes: 'Apply at the embassy of the first Schengen country you enter. TripOcio provides full documentation guidance and appointment assistance.',
  },
  Australia: {
    flag: '🇦🇺',
    type: 'Tourist Visa (Subclass 600)',
    fee: 'AUD 150 (~₹8,200)',
    processing: '15–30 working days',
    validity: '3 months / Multiple entry',
    documents: [
      'Valid passport (6+ months validity)',
      'Completed online application (ImmiAccount)',
      'Passport-size photographs',
      'Return flight tickets',
      'Hotel booking confirmation',
      'Bank statement (last 6 months, min ₹5 lakh)',
      'Income tax returns (last 3 years)',
      'Employment proof',
      'Property documents (if applicable)',
    ],
    notes: 'Australian visa is applied online. Processing times vary. TripOcio assists with the online application and document review.',
  },
}

const countries = Object.keys(visaData)

export default function VisaPage() {
  const [selected, setSelected] = useState('')
  const [form, setForm] = useState({ name: '', phone: '', destination: '', travelDate: '' })
  const [submitted, setSubmitted] = useState(false)

  const info = selected ? visaData[selected] : null

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSubmitted(true)
  }

  const waMessage = encodeURIComponent(
    `Hello TripOcio! I need help with a ${selected || 'travel'} visa. Could you assist me?`
  )

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-forest overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <Image src="/images/tour-dubai.png" alt="" fill className="object-cover" sizes="100vw" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <p className="text-xs uppercase tracking-[0.2em] text-white/50 mb-2">Visa Assistance</p>
          <h1 className="font-serif text-5xl md:text-6xl font-semibold text-white mb-4 text-balance">
            Visa Services
          </h1>
          <p className="text-white/70 max-w-xl mx-auto text-base leading-relaxed">
            Stress-free visa processing for 50+ countries. Select your destination and we&apos;ll walk you through every requirement.
          </p>
        </div>
      </section>

      {/* Main content */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-3 gap-10">
          {/* Left: country selector + info */}
          <div className="lg:col-span-2 flex flex-col gap-8">
            {/* Country selector */}
            <div>
              <label htmlFor="country" className="block font-serif text-2xl font-semibold text-foreground mb-3">
                Select Your Destination Country
              </label>
              <div className="relative">
                <select
                  id="country"
                  value={selected}
                  onChange={(e) => setSelected(e.target.value)}
                  className="w-full appearance-none px-5 py-4 text-base border-2 border-border rounded-xl bg-card focus:outline-none focus:border-accent transition-colors cursor-pointer"
                >
                  <option value="">-- Choose a country --</option>
                  {countries.map((c) => (
                    <option key={c} value={c}>
                      {visaData[c].flag} {c}
                    </option>
                  ))}
                </select>
                <ChevronDown size={18} className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none" />
              </div>
            </div>

            {/* Visa info */}
            {!info && (
              <div className="flex flex-col items-center justify-center py-16 text-center border-2 border-dashed border-border rounded-2xl">
                <FileText size={40} className="text-muted-foreground mb-4" />
                <h3 className="font-serif text-xl font-semibold text-foreground mb-2">Select a Country Above</h3>
                <p className="text-muted-foreground text-sm max-w-sm">
                  Choose your destination to see visa requirements, fees, processing time, and required documents.
                </p>
              </div>
            )}

            {info && (
              <div className="flex flex-col gap-6 animate-in fade-in slide-in-from-bottom-2 duration-300">
                {/* Overview cards */}
                <div>
                  <div className="flex items-center gap-3 mb-5">
                    <span className="text-4xl">{info.flag}</span>
                    <div>
                      <h2 className="font-serif text-2xl font-semibold text-foreground">{selected} Visa</h2>
                      <p className="text-sm text-muted-foreground">{info.type}</p>
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-3 gap-4">
                    {[
                      { icon: FileText, label: 'Visa Fee', value: info.fee },
                      { icon: Clock, label: 'Processing Time', value: info.processing },
                      { icon: Check, label: 'Validity', value: info.validity },
                    ].map((card) => {
                      const Icon = card.icon
                      return (
                        <div key={card.label} className="bg-muted rounded-xl p-4 border border-border">
                          <div className="flex items-center gap-2 mb-2">
                            <Icon size={16} className="text-accent" />
                            <span className="text-xs text-muted-foreground uppercase tracking-wider">{card.label}</span>
                          </div>
                          <p className="font-serif text-base font-semibold text-foreground">{card.value}</p>
                        </div>
                      )
                    })}
                  </div>
                </div>

                {/* Required documents */}
                <div className="bg-card border border-border rounded-2xl p-6">
                  <h3 className="font-serif text-xl font-semibold text-foreground mb-4">Required Documents</h3>
                  <ul className="flex flex-col gap-2.5">
                    {info.documents.map((doc, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-sm text-foreground">
                        <Check size={15} className="text-forest mt-0.5 shrink-0" />
                        {doc}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Notes */}
                <div className="bg-secondary border border-secondary-foreground/10 rounded-xl p-4">
                  <p className="text-xs font-medium text-foreground mb-1 uppercase tracking-wider">Important Note</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{info.notes}</p>
                </div>
              </div>
            )}
          </div>

          {/* Right: inquiry form */}
          <div>
            <div className="sticky top-28">
              {submitted ? (
                <div className="bg-card border border-border rounded-2xl p-7 text-center">
                  <div className="w-14 h-14 rounded-full bg-forest/10 flex items-center justify-center mx-auto mb-4">
                    <Send size={24} className="text-forest" />
                  </div>
                  <h3 className="font-serif text-xl font-semibold text-foreground mb-2">Enquiry Sent!</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Our visa expert will contact you within 24 hours with a complete checklist and process guide.
                  </p>
                  <a
                    href={`https://wa.me/917312345678?text=${waMessage}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 w-full bg-[#25D366] text-white py-3 rounded-full text-sm font-medium"
                  >
                    <MessageCircle size={16} /> Chat on WhatsApp
                  </a>
                </div>
              ) : (
                <div className="bg-card border border-border rounded-2xl overflow-hidden shadow-sm">
                  <div className="bg-forest p-5">
                    <p className="text-white/60 text-xs mb-1">Get Visa Assistance</p>
                    <h3 className="font-serif text-xl font-semibold text-white">Start Your Application</h3>
                    <p className="text-white/60 text-sm mt-1">Our experts handle everything for you</p>
                  </div>
                  <form onSubmit={handleSubmit} className="p-5 flex flex-col gap-3">
                    <div>
                      <label htmlFor="vname" className="text-xs text-muted-foreground block mb-1">Full Name *</label>
                      <input id="vname" type="text" required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })}
                        placeholder="Your name"
                        className="w-full px-3 py-2.5 text-sm border border-border rounded-lg bg-background focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/30 transition-colors" />
                    </div>
                    <div>
                      <label htmlFor="vphone" className="text-xs text-muted-foreground block mb-1">Phone Number *</label>
                      <input id="vphone" type="tel" required value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        placeholder="+91 98765 43210"
                        className="w-full px-3 py-2.5 text-sm border border-border rounded-lg bg-background focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/30 transition-colors" />
                    </div>
                    <div>
                      <label htmlFor="vdest" className="text-xs text-muted-foreground block mb-1">Destination Country *</label>
                      <select id="vdest" required value={form.destination} onChange={(e) => setForm({ ...form, destination: e.target.value })}
                        className="w-full px-3 py-2.5 text-sm border border-border rounded-lg bg-background focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/30 transition-colors">
                        <option value="">Select country</option>
                        {countries.map((c) => <option key={c} value={c}>{visaData[c].flag} {c}</option>)}
                      </select>
                    </div>
                    <div>
                      <label htmlFor="vdate" className="text-xs text-muted-foreground block mb-1">Planned Travel Date</label>
                      <input id="vdate" type="date" value={form.travelDate} onChange={(e) => setForm({ ...form, travelDate: e.target.value })}
                        className="w-full px-3 py-2.5 text-sm border border-border rounded-lg bg-background focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/30 transition-colors" />
                    </div>
                    <button type="submit" className="w-full bg-accent text-white font-medium py-3 rounded-full text-sm hover:bg-accent/90 transition-colors mt-1">
                      Get Visa Assistance
                    </button>
                    <div className="grid grid-cols-2 gap-2 mt-1">
                      <a href={`https://wa.me/917312345678?text=${waMessage}`} target="_blank" rel="noopener noreferrer"
                        className="flex items-center justify-center gap-1.5 bg-[#25D366] text-white py-2.5 rounded-full text-xs font-medium">
                        <MessageCircle size={13} /> WhatsApp
                      </a>
                      <a href="tel:+917312345678"
                        className="flex items-center justify-center gap-1.5 bg-muted text-foreground py-2.5 rounded-full text-xs font-medium">
                        <Phone size={13} /> Call Us
                      </a>
                    </div>
                  </form>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Why choose us for visa */}
      <section className="py-16 bg-muted">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-10">
            <h2 className="font-serif text-3xl font-semibold text-foreground text-balance">Why Get Your Visa Through <em>TripOcio?</em></h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { title: '99% Approval Rate', desc: 'Expert document review ensures your visa application is correctly prepared every time.' },
              { title: 'End-to-End Support', desc: 'From document checklist to submission to final approval — we handle it all.' },
              { title: 'Fast Processing', desc: 'We use express channels for urgent applications with results in 24–48 hours.' },
              { title: '50+ Countries', desc: 'We process visas for over 50 countries including Schengen, USA, UK, Australia and more.' },
            ].map((item) => (
              <div key={item.title} className="bg-card border border-border rounded-xl p-5">
                <Check size={20} className="text-forest mb-3" />
                <h3 className="font-serif text-base font-semibold text-foreground mb-1">{item.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
