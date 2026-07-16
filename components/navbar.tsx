'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X, ChevronDown, Phone } from 'lucide-react'

const navLinks = [
  { label: 'Home', href: '/' },
  {
    label: 'Tours',
    href: '/tours',
    children: [
      { label: 'All Packages', href: '/tours' },
      { label: 'India Tours', href: '/tours?filter=india' },
      { label: 'International', href: '/tours?filter=international' },
      { label: 'Pilgrimages', href: '/tours?filter=pilgrimage' },
      { label: 'Honeymoon', href: '/tours?filter=honeymoon' },
    ],
  },
  { label: 'Visa Services', href: '/visa' },
  { label: 'About Us', href: '/about' },
  { label: 'Contact', href: '/contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-background/95 backdrop-blur-md shadow-sm border-b border-border'
          : 'bg-transparent'
      }`}
    >
      {/* Top bar */}
      <div className={`hidden md:flex items-center justify-between px-8 py-2 text-xs border-b transition-all duration-300 ${scrolled ? 'border-border' : 'border-white/20'}`}>
        <span className={`transition-colors duration-300 ${scrolled ? 'text-muted-foreground' : 'text-white/80'}`}>
          Indore&apos;s Most Trusted Travel Agency Since 2009
        </span>
        <div className={`flex items-center gap-4 ${scrolled ? 'text-muted-foreground' : 'text-white/80'}`}>
          <a href="tel:+917312345678" className="flex items-center gap-1 hover:text-terracotta transition-colors">
            <Phone size={12} />
            +91 731 234 5678
          </a>
          <span>|</span>
          <a href="mailto:hello@tripocio.com" className="hover:text-terracotta transition-colors">
            hello@tripocio.com
          </a>
        </div>
      </div>

      {/* Main nav */}
      <nav className="flex items-center justify-between px-6 md:px-8 py-4">
        {/* Logo */}
        <Link href="/" className="flex flex-col leading-none">
          <span className={`font-serif text-2xl font-semibold tracking-wide transition-colors duration-300 ${scrolled ? 'text-foreground' : 'text-white'}`}>
            TripOcio
          </span>
          <span className={`text-[10px] font-sans uppercase tracking-[0.2em] transition-colors duration-300 ${scrolled ? 'text-terracotta' : 'text-white/70'}`}>
            Craft Your Journey
          </span>
        </Link>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-7">
          {navLinks.map((link) =>
            link.children ? (
              <li key={link.label} className="relative group">
                <button
                  className={`flex items-center gap-1 text-sm font-medium transition-colors duration-300 ${scrolled ? 'text-foreground hover:text-accent' : 'text-white/90 hover:text-white'}`}
                  onMouseEnter={() => setOpenDropdown(link.label)}
                  onMouseLeave={() => setOpenDropdown(null)}
                  aria-haspopup="true"
                  aria-expanded={openDropdown === link.label}
                >
                  {link.label}
                  <ChevronDown size={14} className="mt-0.5" />
                </button>
                {/* Dropdown */}
                <div
                  className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-48 bg-card border border-border rounded-lg shadow-lg py-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200"
                  onMouseEnter={() => setOpenDropdown(link.label)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  {link.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      className="block px-4 py-2 text-sm text-foreground hover:bg-muted hover:text-accent transition-colors"
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              </li>
            ) : (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className={`text-sm font-medium transition-colors duration-300 ${scrolled ? 'text-foreground hover:text-accent' : 'text-white/90 hover:text-white'}`}
                >
                  {link.label}
                </Link>
              </li>
            )
          )}
        </ul>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <Link
            href="/contact"
            className="bg-accent text-accent-foreground text-sm font-medium px-5 py-2.5 rounded-full hover:bg-accent/90 transition-colors"
          >
            Plan My Trip
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          className={`md:hidden p-2 transition-colors duration-300 ${scrolled ? 'text-foreground' : 'text-white'}`}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-card border-t border-border px-6 py-4 flex flex-col gap-3">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-foreground hover:text-accent py-2 border-b border-border last:border-0 transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="mt-2 bg-accent text-accent-foreground text-sm font-medium px-5 py-3 rounded-full text-center hover:bg-accent/90 transition-colors"
            onClick={() => setMobileOpen(false)}
          >
            Plan My Trip
          </Link>
        </div>
      )}
    </header>
  )
}
