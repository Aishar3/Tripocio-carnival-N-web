import type { Metadata, Viewport } from 'next'
import { Inter, Cormorant_Garamond } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import WhatsAppButton from '@/components/whatsapp-button'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-cormorant',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'TripOcio — Craft Your Journey | Travel Agency Indore',
  description:
    'TripOcio is Indore\'s premier travel agency offering curated domestic & international tours, destination weddings, pilgrimage packages, visa assistance, and franchise opportunities.',
  keywords: 'travel agency indore, tours packages, destination wedding, pilgrimage tours, dubai tours, visa assistance, tripocio',
  openGraph: {
    title: 'TripOcio — Craft Your Journey',
    description: 'Curated travel experiences — from Himalayan pilgrimages to Dubai skylines.',
    url: 'https://tripocio.com',
    siteName: 'TripOcio',
    type: 'website',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#2D4A3E',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${cormorant.variable} bg-background`}>
      <body className="antialiased font-sans">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  )
}
