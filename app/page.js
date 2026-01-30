import HeroSection from '@/components/HeroSection'

import ServicesSection from '@/components/ServicesSection'
import Advantages from '@/components/Advantages'
import FeaturesSection from '@/components/FeaturesSection'
import ContactCTA from '@/components/ContactCTA'
import OfferSection from '@/components/OfferSection'

export default function Home() {
  return (
    <main>
      <HeroSection />
      <ServicesSection />
       <Advantages/>
      <FeaturesSection />
      <ContactCTA />
      <OfferSection/>
    </main>
  )
}