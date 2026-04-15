import type { Metadata } from "next"
import { COMPANY } from "@/config/constants"
import HeroVideo from "@/components/home/HeroVideo"
import StatsBar from "@/components/home/StatsBar"
import ServicesSection from "@/components/home/ServicesSection"
import WhyUsSection from "@/components/home/WhyUsSection"
import MapSection from "@/components/home/MapSection"
import ReviewsSection from "@/components/home/ReviewsSection"
import CTASection from "@/components/home/CTASection"

export const metadata: Metadata = {
  title: `${COMPANY.name} | Dégorgement Urgence Île-de-France 24h/7j`,
  description:
    `${COMPANY.name}, spécialiste du dégorgement et curage canalisation en ` +
    `Île-de-France. Intervention rapide sous 1h, 24h/24 et 7j/7 dans les ` +
    `${COMPANY.departmentsCovered} départements. Devis gratuit.`,
  alternates: {
    canonical: COMPANY.website,
  },
}

export default function HomePage() {
  return (
    <>
      <HeroVideo />
      <StatsBar />
      <ServicesSection />
      <WhyUsSection />
      <MapSection />
      <ReviewsSection />
      <CTASection />
    </>
  )
}
