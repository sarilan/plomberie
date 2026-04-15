import HeroVideo from "@/components/home/HeroVideo"
import StatsBar from "@/components/home/StatsBar"
import ServicesGrid from "@/components/home/ServicesGrid"
import HowItWorks from "@/components/home/HowItWorks"
import MapSection from "@/components/home/MapSection"
import ReviewsCarousel from "@/components/home/ReviewsCarousel"
import TrustBadges from "@/components/home/TrustBadges"
import CTABanner from "@/components/home/CTABanner"
import { COMPANY } from "@/config/constants"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: `${COMPANY.name} | Dégorgement Urgence Île-de-France 24h/7j`,
  description:
    `${COMPANY.name}, spécialiste du dégorgement et curage tout à l'égout ` +
    `en Île-de-France. Intervention rapide 24h/24, 7j/7 ` +
    `dans les 8 départements franciliens. Devis gratuit.`,
  alternates: {
    canonical: COMPANY.website,
  },
}

export default function HomePage() {
  return (
    <>
      <HeroVideo />
      <StatsBar />
      <ServicesGrid />
      <HowItWorks />
      <MapSection />
      <ReviewsCarousel />
      <TrustBadges />
      <CTABanner />
    </>
  )
}
