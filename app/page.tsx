import HeroSection from '@/components/home/hero-section'
import StatsBar from '@/components/home/stats-bar'
import FeaturedTours from '@/components/home/featured-tours'
import DestinationCategories from '@/components/home/destination-categories'
import WhyTripocio from '@/components/home/why-tripocio'
import Testimonials from '@/components/home/testimonials'
import SubBrands from '@/components/home/sub-brands'
import HomeCTA from '@/components/home/home-cta'

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <StatsBar />
      <FeaturedTours />
      <DestinationCategories />
      <WhyTripocio />
      <Testimonials />
      <SubBrands />
      <HomeCTA />
    </>
  )
}
