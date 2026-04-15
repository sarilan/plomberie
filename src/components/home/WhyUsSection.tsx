"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import {
  Clock, Shield, Star, Award,
  Users, Headphones, Wrench, CheckCircle
} from "lucide-react"
import { COMPANY } from "@/config/constants"

const REASONS = [
  {
    icon: Clock,
    title: "Disponibilité totale",
    description:
      "Nos équipes sont mobilisables 24h/24, 7j/7, week-ends et jours fériés inclus. Une urgence n'attend pas.",
    highlight: COMPANY.availability,
  },
  {
    icon: Shield,
    title: "Devis gratuit et transparent",
    description:
      "Avant chaque intervention, nos techniciens établissent un devis détaillé. Pas de mauvaises surprises sur la facture.",
    highlight: "Devis 100% gratuit",
  },
  {
    icon: Star,
    title: "Satisfaction garantie",
    description:
      `${COMPANY.googleReviewCount} avis clients confirment notre sérieux. Note ${COMPANY.googleRating}/5 sur Google pour nos interventions en IDF.`,
    highlight: `${COMPANY.googleRating}/5 Google`,
  },
  {
    icon: Award,
    title: "Techniciens certifiés",
    description:
      "Toute notre équipe est formée aux dernières techniques de débouchage et curage. Matériel professionnel haute pression.",
    highlight: "Équipe qualifiée",
  },
  {
    icon: Users,
    title: "Particuliers & professionnels",
    description:
      "Nous intervenons pour les particuliers, copropriétés, restaurants, hôtels et collectivités partout en Île-de-France.",
    highlight: "Tous profils",
  },
  {
    icon: Headphones,
    title: "Hotline dédiée urgence",
    description:
      "Un seul numéro, une réponse immédiate. Notre équipe téléphonique qualifie votre urgence et déploie la bonne équipe.",
    highlight: "1 numéro unique",
  },
  {
    icon: Wrench,
    title: "Matériel de pointe",
    description:
      "Hydrocureur haute pression, caméra d'inspection, déboucheur électrique : nous avons le bon outil pour chaque situation.",
    highlight: "Équipement pro",
  },
  {
    icon: CheckCircle,
    title: "Garantie de résultat",
    description:
      "Nos interventions sont garanties. Si le problème persiste dans les 48h, nous revenons sans frais supplémentaires.",
    highlight: "Garantie résultat",
  },
]

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

export default function WhyUsSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section className="py-20 bg-white" aria-labelledby="why-heading">
      <div className="max-w-7xl mx-auto px-4">

        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 text-accent font-semibold
                          text-sm uppercase tracking-widest mb-4">
            <span className="w-8 h-px bg-accent" />
            Pourquoi nous choisir
            <span className="w-8 h-px bg-accent" />
          </div>
          <h2
            id="why-heading"
            className="text-3xl sm:text-4xl font-black text-primary mb-4"
          >
            Le spécialiste{" "}
            <span className="text-accent">de confiance</span>
            <br className="hidden sm:block" />
            {" "}en Île-de-France
          </h2>
          <p className="text-gray-medium max-w-2xl mx-auto">
            Plus de {COMPANY.totalInterventions} interventions réalisées.
            Nos clients nous font confiance pour leur dégorgement urgence
            depuis {new Date().getFullYear() - parseInt(COMPANY.foundedYear || "2015")} ans.
          </p>
        </div>

        {/* Grid */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {REASONS.map(({ icon: Icon, title, description, highlight }) => (
            <motion.div
              key={title}
              variants={itemVariants}
              className="group p-6 rounded-2xl border border-gray-100
                         hover:border-accent/30 hover:shadow-accent
                         transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center
                              justify-center mb-4 group-hover:bg-accent
                              transition-colors duration-300">
                <Icon className="w-6 h-6 text-accent group-hover:text-white transition-colors" />
              </div>
              <div className="text-xs font-bold text-accent uppercase
                              tracking-wider mb-2">
                {highlight}
              </div>
              <h3 className="text-base font-bold text-primary mb-2">
                {title}
              </h3>
              <p className="text-sm text-gray-medium leading-relaxed">
                {description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
