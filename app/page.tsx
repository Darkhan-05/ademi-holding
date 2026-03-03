import { HeroSection } from "@/components/home/hero-section"
import { ProjectsSection } from "@/components/home/projects-section"
import { StatsSection } from "@/components/home/stats-section"
import { AdvantagesSection } from "@/components/home/advantages-section"
import { PurchaseSection } from "@/components/home/purchase-section"
import { ConsultationSection } from "@/components/home/consultation-section"
import { MapSection } from "@/components/home/map-section"
import { ContactInfoSection } from "@/components/home/contact-info-section"

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ProjectsSection />
      <StatsSection />
      <AdvantagesSection />
      <PurchaseSection />
      <ConsultationSection />
      <MapSection />
      <ContactInfoSection />
    </>
  )
}
