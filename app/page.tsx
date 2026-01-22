import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { StatsSection } from "@/components/stats-section"
import { ServicesSection } from "@/components/services-section"
import { WhyUsSection } from "@/components/why-us-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { AboutSection } from "@/components/about-section"
import { FreeTrainingSection } from "@/components/free-training-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <StatsSection />
      <ServicesSection />
      <WhyUsSection />
      <TestimonialsSection />
      <FreeTrainingSection />
      <Footer />
    </main>
  )
}
