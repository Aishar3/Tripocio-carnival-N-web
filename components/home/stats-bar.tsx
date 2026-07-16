const stats = [
  { number: '10,000+', label: 'Happy Travelers' },
  { number: '200+', label: 'Tour Packages' },
  { number: '15+', label: 'Years of Experience' },
  { number: '50+', label: 'Destinations' },
  { number: '4.9★', label: 'Average Rating' },
]

export default function StatsBar() {
  return (
    <section className="bg-forest text-forest-foreground py-6">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-wrap items-center justify-between gap-6 md:gap-0">
          {stats.map((stat, i) => (
            <div key={i} className="flex flex-col items-center text-center flex-1 min-w-[120px]">
              <span className="font-serif text-2xl md:text-3xl font-semibold text-white">{stat.number}</span>
              <span className="text-xs text-white/60 uppercase tracking-widest mt-1">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
