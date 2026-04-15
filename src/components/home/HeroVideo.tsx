"use client"

import { useRef } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Phone, ChevronDown, Shield, Clock, Star } from "lucide-react"
import { COMPANY } from "@/config/constants"

const TRUST_BADGES = [
  { icon: Clock, label: "Intervention sous 1h" },
  { icon: Shield, label: "Devis gratuit" },
  { icon: Star, label: `${COMPANY.googleRating}/5 avis clients` },
]

export default function HeroVideo() {
  const scrollRef = useRef<HTMLDivElement>(null)

  const handleScroll = () => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden"
      aria-label="Hero – Dégorgement urgence Île-de-France"
    >
      {/* ── Fond vidéo (desktop) ─────────────────────────────── */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="hidden md:block w-full h-full object-cover"
          poster="/images/og/og-default.jpg"
          aria-hidden="true"
        >
          <source src="/videos/hero.webm" type="video/webm" />
          <source src="/videos/hero.mp4" type="video/mp4" />
        </video>

        {/* Fallback image mobile */}
        <div
          className="md:hidden absolute inset-0 bg-primary"
          aria-hidden="true"
        />

        {/* Overlay gradient */}
        <div
          className="absolute inset-0 bg-gradient-hero opacity-90"
          aria-hidden="true"
        />
      </div>

      {/* ── Contenu ──────────────────────────────────────────── */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 py-24 w-full">
        <div className="max-w-3xl">

          {/* Badge urgence */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-urgence/20 border
                       border-urgence/40 text-white rounded-full
                       px-4 py-1.5 text-sm font-semibold mb-6"
          >
            <span className="w-2 h-2 bg-urgence rounded-full animate-ping-slow" />
            Urgence disponible {COMPANY.availability}
          </motion.div>

          {/* H1 */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-black text-white
                       leading-tight mb-6"
          >
            Dégorgement{" "}
            <span className="text-accent">urgence</span>
            <br />
            en Île-de-France
          </motion.h1>

          {/* Sous-titre */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg sm:text-xl text-white/80 mb-8 leading-relaxed"
          >
            Nos équipes interviennent sous{" "}
            <strong className="text-white">{COMPANY.responseTime}</strong>{" "}
            dans les{" "}
            <strong className="text-white">
              {COMPANY.departmentsCovered} départements
            </strong>{" "}
            franciliens. Curage tout à l&apos;égout, hydrocurage,
            débouchage — devis gratuit.
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 mb-12"
          >
            <a
              href={`tel:${COMPANY.phoneRaw}`}
              className="flex items-center justify-center gap-3
                         bg-urgence hover:bg-urgence-hover text-white
                         font-black text-lg px-8 py-4 rounded-xl
                         shadow-urgence hover:shadow-lg transition-all
                         hover:scale-105"
              aria-label={`Appeler le ${COMPANY.phone} pour une urgence`}
            >
              <Phone className="w-5 h-5" />
              {COMPANY.phone}
            </a>
            <Link
              href="/devis"
              className="flex items-center justify-center gap-2
                         bg-white/10 hover:bg-white/20 text-white
                         font-semibold text-lg px-8 py-4 rounded-xl
                         border border-white/30 hover:border-white/50
                         transition-all backdrop-blur-sm"
            >
              Devis gratuit en ligne
            </Link>
          </motion.div>

          {/* Trust badges */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-wrap gap-4"
          >
            {TRUST_BADGES.map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="flex items-center gap-2 text-white/70 text-sm"
              >
                <Icon className="w-4 h-4 text-accent flex-shrink-0" />
                <span>{label}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* ── Scroll indicator ─────────────────────────────────── */}
      <motion.button
        onClick={handleScroll}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10
                   text-white/50 hover:text-white transition-colors"
        aria-label="Défiler vers le bas"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ChevronDown className="w-8 h-8" />
        </motion.div>
      </motion.button>

      {/* Anchor for scroll */}
      <div ref={scrollRef} className="absolute bottom-0" aria-hidden="true" />
    </section>
  )
}
