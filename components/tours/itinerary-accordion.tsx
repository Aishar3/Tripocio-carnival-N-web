'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

type ItineraryItem = { day: number; title: string; description: string }

export default function ItineraryAccordion({ itinerary }: { itinerary: ItineraryItem[] }) {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <div className="flex flex-col gap-2">
      {itinerary.map((item, i) => (
        <div key={item.day} className="border border-border rounded-xl overflow-hidden">
          <button
            onClick={() => setOpen(open === i ? null : i)}
            className="w-full flex items-center justify-between px-4 py-3.5 text-left bg-card hover:bg-muted transition-colors"
            aria-expanded={open === i}
          >
            <div className="flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-forest text-white text-xs font-semibold flex items-center justify-center font-sans shrink-0">
                {item.day}
              </span>
              <span className="font-serif text-base font-semibold text-foreground">{item.title}</span>
            </div>
            <ChevronDown
              size={16}
              className={`text-muted-foreground transition-transform duration-200 shrink-0 ${open === i ? 'rotate-180' : ''}`}
            />
          </button>
          {open === i && (
            <div className="px-4 py-4 bg-muted/40 border-t border-border">
              <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  )
}
