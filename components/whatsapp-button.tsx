'use client'

import { MessageCircle } from 'lucide-react'

export default function WhatsAppButton() {
  const message = encodeURIComponent(
    "Hello TripOcio! I'd like to plan a trip. Could you help me with a customized package?"
  )

  return (
    <a
      href={`https://wa.me/917312345678?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-[#25D366] text-white px-4 py-3 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200 group"
    >
      <MessageCircle size={20} fill="white" />
      <span className="text-sm font-medium hidden md:block max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-300 whitespace-nowrap">
        Chat with us
      </span>
    </a>
  )
}
