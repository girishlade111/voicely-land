import { HeroSection } from '@/components/sections/HeroSection'
import { DemoVideo } from '@/components/sections/DemoVideo'
import { FeaturesGrid } from '@/components/sections/FeaturesGrid'
import { HowItWorks } from '@/components/sections/HowItWorks'
import { LanguageSupport } from '@/components/sections/LanguageSupport'
import { PrivacyBadge } from '@/components/sections/PrivacyBadge'
import { PricingPreview } from '@/components/sections/PricingPreview'
import { FAQSection } from '@/components/sections/FAQSection'
import { FooterCTA } from '@/components/sections/FooterCTA'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      <HeroSection />
      <DemoVideo />
      <FeaturesGrid />
      <HowItWorks />
      <LanguageSupport />
      <PrivacyBadge />
      <PricingPreview />
      <FAQSection />
      <FooterCTA />
      
      <Footer />
    </main>
  )
}