"use client"

import { useRef, useEffect } from "react"
import { motion } from "framer-motion"
import { Phone, FileText, Clock, Shield, Star } from "lucide-react"
import Link from "next/link"
import { COMPANY } from "@/config/constants"

const FADE_UP = {
  hidden: { opacity: 0, y: 30 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: "easeOut" as const },
  }),
}

export default function HeroVideo() {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {
        // Autoplay bloqué → fallback image géré en CSS
      })
    }
  }, [])

  return (
    <section
      className="relative min-h-[90vh] flex items-center overflow-hidden
                 bg-primary"
      aria-label="Groupe CanalNet – Dégorgement urgence Île-de-France"
    >
      {/* Vidéo background */}
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover
                   opacity-20 hidden md:block"
        autoPlay
        muted
        loop
        playsInline
        preload="none"
        aria-hidden="true"
      >
        <source src="/videos/hero-background.webm" type="video/webm" />
        <source src="/videos/hero-background.mp4" type="video/mp4" />
      </video>

      {/* Overlay gradient */}
      <div
        className="absolute inset-0 bg-gradient-to-br
                   from-primary via-primary/95 to-accent/20"
        aria-hidden="true"
      />

      {/* Grille décorative */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            "linear-gradient(#fff 1px, transparent 1px)," +
            "linear-gradient(90deg, #fff 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
        aria-hidden="true"
      />

      {/* Contenu */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 py-20 w-full">
        <div className="max-w-3xl">

          {/* Badge urgence */}
          <motion.div
            variants={FADE_UP}
            initial="hidden"
            animate="visible"
            custom={0}
            className="inline-flex items-center gap-2 bg-urgence/20
                       border border-urgence/40 rounded-full px-4 py-1.5
                       mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-urgence
                             animate-pulse" />
            <span className="text-urgence font-semibold text-sm">
              ⚡ Intervention sous 1h — Disponible{" "}
              {COMPANY.availability}
            </span>
          </motion.div>

          {/* H1 */}
          <motion.h1
            variants={FADE_UP}
            initial="hidden"
            animate="visible"
            custom={0.1}
            className="text-4xl sm:text-5xl lg:text-6xl font-black
                       text-white leading-tight mb-6"
          >
            Dégorgement Urgence{" "}
            <span className="text-accent">Île-de-France</span>
            <br />
            <span className="text-white/80 text-3xl sm:text-4xl
                             lg:text-5xl font-bold">
              Groupe CanalNet
            </span>
          </motion.h1>

          {/* Sous-titre */}
          <motion.p
            variants={FADE_UP}
            initial="hidden"
            animate="visible"
            custom={0.2}
            className="text-white/70 text-lg sm:text-xl mb-8
                       leading-relaxed max-w-2xl"
          >
            Spécialiste du dégorgement et curage tout à l&apos;égout
            en Île-de-France. Nos équipes interviennent dans les{" "}
            {COMPANY.departmentsCovered} départements franciliens,{" "}
            {COMPANY.availability}.
          </motion.p>

          {/* CTA */}
          <motion.div
            variants={FADE_UP}
            initial="hidden"
            animate="visible"
            custom={0.3}
            className="flex flex-col sm:flex-row gap-4 mb-12"
          >
            <a
              href={`tel:${COMPANY.phoneRaw}`}
              className="flex items-center justify-center gap-3
                         bg-urgence hover:bg-urgence-hover text-white
                         font-black px-8 py-4 rounded-xl text-lg
                         transition-all shadow-urgence
                         hover:shadow-xl hover:-translate-y-0.5"
              aria-label={`Appeler le ${COMPANY.phone}`}
            >
              <Phone className="w-5 h-5" />
              {COMPANY.phone}
            </a>
            <Link
              href="/devis"
              className="flex items-center justify-center gap-3
                         border-2 border-white/30 hover:border-white/60
                         text-white font-bold px-8 py-4 rounded-xl
                         text-lg transition-all hover:bg-white/10"
            >
              <FileText className="w-5 h-5" />
              Devis gratuit en ligne
            </Link>
          </motion.div>

          {/* Badges confiance */}
          <motion.div
            variants={FADE_UP}
            initial="hidden"
            animate="visible"
            custom={0.4}
            className="flex flex-wrap gap-4"
          >
            {[
              {
                icon: Clock,
                text: "Intervention sous 1h",
                color: "text-accent",
              },
              {
                icon: Shield,
                text: "Devis gratuit & sans engagement",
                color: "text-green-400",
              },
              {
                icon: Star,
                text: `${COMPANY.googleRating}★ sur Google`,
                color: "text-yellow-400",
              },
            ].map(({ icon: Icon, text, color }) => (
              <div
                key={text}
                className="flex items-center gap-2 bg-white/10
                           backdrop-blur-sm rounded-lg px-4 py-2"
              >
                <Icon className={`w-4 h-4 ${color}`} />
                <span className="text-white/90 text-sm font-medium">
                  {text}
                </span>
              </div>
            ))}
          </motion.div>

        </div>
      </div>

      {/* Vague bas de section */}
      <div
        className="absolute bottom-0 left-0 right-0"
        aria-hidden="true"
      >
        <svg
          viewBox="0 0 1440 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full"
          preserveAspectRatio="none"
        >
          <path
            d="M0 60L1440 60L1440 20C1200 60 900 0 720 20C540 40
               240 0 0 20L0 60Z"
            fill="#F4F6F9"
          />
        </svg>
      </div>
    </section>
  )
}
