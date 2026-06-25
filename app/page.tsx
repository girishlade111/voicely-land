import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import PerformanceStatsBar from "@/components/sections/PerformanceStatsBar";
import AnimatedDemoSection from "@/components/sections/AnimatedDemoSection";
import SpeedComparisonSection from "@/components/sections/SpeedComparisonSection";
import { FeaturesGrid } from "@/components/sections/FeaturesGrid";
import FeatureSpecsSection from "@/components/sections/FeatureSpecsSection";
import PlatformSpecsSection from "@/components/sections/PlatformSpecsSection";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { LanguageSupport } from "@/components/sections/LanguageSupport";
import { PrivacyBadge } from "@/components/sections/PrivacyBadge";
import { PricingPreview } from "@/components/sections/PricingPreview";
import { FAQSection } from "@/components/sections/FAQSection";
import { FooterCTA } from "@/components/sections/FooterCTA";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <PerformanceStatsBar />
        <AnimatedDemoSection />
        <SpeedComparisonSection />
        <FeaturesGrid />
        <FeatureSpecsSection />
        <PlatformSpecsSection />
        <HowItWorks />
        <LanguageSupport />
        <PrivacyBadge />
        <PricingPreview />
        <FAQSection />
        <FooterCTA />
      </main>
      <Footer />
    </>
  );
}
