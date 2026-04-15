"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import {
  AlertTriangle, Waves, Wrench, Droplets,
  ArrowRight, Shield
} from "lucide-react"
import { SERVICES } from "@/config/constants"

const ICON_MAP: Record<string, React.ElementType> = {
  AlertTriangle,
  Waves,
  Wrench,
  Droplets,
}

const SERVICE_DETAILS = [
  {
    color: "urgence",
    bgClass: "bg-urgence/10",
    iconClass: "text-urgence",
    hoverClass: "group-hover:bg-urgence group-hover:text-white",
    features: ["Disponible 24h/24, 7j/7", "Intervention sous 1h", "Tous types d'obstructions"],
  },
  {
    color: "accent",
    bgClass: "bg-accent/10",
    iconClass: "text-accent",
    hoverClass: "group-hover:bg-accent group-hover:text-white",
    features: ["Curage haute pression", "Réseaux collectifs", "Inspection caméra"],
  },
  {
    color: "accent",
    bgClass: "bg-accent/10",
    iconClass: "text-accent",
    hoverClass: "group-hover:bg-accent group-hover:text-white",
    features: ["Évier, WC, douche", "Baignoire, siphon", "Colonnes montantes"],
  },
  {
    color: "accent",
    bgClass: "bg-accent/10",
    iconClass: "text-accent",
    hoverClass: "group-hover:bg-accent group-hover:text-white",
    features: ["Pompe haute pression", "Réseau encrassé", "Copropriétés & entreprises"],
  },
]

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

export default function ServicesSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section
      className="py-20 bg-gray-light"
      aria-labelledby="services-heading"
    >
      <div className="max-w-7xl mx-auto px-4">

        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 text-accent font-semibold
                          text-sm uppercase tracking-widest mb-4">
            <span className="w-8 h-px bg-accent" />
            Nos prestations
            <span className="w-8 h-px bg-accent" />
          </div>
          <h2
            id="services-heading"
            className="text-3xl sm:text-4xl font-black text-primary mb-4"
          >
            Tous nos services de{" "}
            <span className="text-accent">dégorgement</span>
          </h2>
          <p className="text-gray-medium max-w-2xl mx-auto">
            Du débouchage d&apos;urgence au curage professionnel,
            nos équipes maîtrisent toutes les techniques
            pour un résultat durable.
          </p>
        </div>

        {/* Cards */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {SERVICES.map((service, i) => {
            const Icon = ICON_MAP[service.icon] || Droplets
            const detail = SERVICE_DETAILS[i]

            return (
              <motion.div key={service.slug} variants={cardVariants}>
                <Link
                  href={`/${service.slug}`}
                  className="group flex flex-col bg-white rounded-2xl p-6
                             shadow-card hover:shadow-card-hover transition-all
                             duration-300 hover:-translate-y-1 h-full"
                >
                  {/* Icon */}
                  <div
                    className={`w-14 h-14 rounded-xl ${detail.bgClass}
                                flex items-center justify-center mb-5
                                transition-all duration-300 ${detail.hoverClass}`}
                  >
                    <Icon className={`w-7 h-7 ${detail.iconClass} group-hover:text-white transition-colors`} />
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-primary mb-2 group-hover:text-accent transition-colors">
                    {service.name}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-gray-medium mb-4 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-1.5 mb-6 flex-1">
                    {detail.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-sm text-primary/70">
                        <Shield className="w-3.5 h-3.5 text-accent flex-shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <div className="flex items-center gap-1 text-accent font-semibold text-sm
                                  group-hover:gap-2 transition-all">
                    En savoir plus
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </Link>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Link vers page IDF */}
        <div className="text-center mt-10">
          <Link
            href="/degorgement-ile-de-france"
            className="inline-flex items-center gap-2 text-accent font-semibold
                       hover:gap-3 transition-all"
          >
            Voir toutes nos zones d&apos;intervention en IDF
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
