"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import {
  Phone, Search, Wrench, CheckCircle
} from "lucide-react"
import { COMPANY } from "@/config/constants"

const STEPS = [
  {
    number: "01",
    icon: Phone,
    title: "Vous nous appelez",
    description:
      "Notre service client prend en charge votre appel en moins " +
      "de 2 minutes, 24h/24 et 7j/7. Diagnostic rapide par téléphone " +
      "pour qualifier votre situation.",
    color: "bg-urgence",
    detail: "Réponse en < 2 min",
  },
  {
    number: "02",
    icon: Search,
    title: "Diagnostic sur place",
    description:
      "Nos techniciens arrivent sur site avec le matériel adapté. " +
      "Inspection visuelle et si nécessaire par caméra endoscopique " +
      "pour localiser précisément le problème.",
    color: "bg-accent",
    detail: "Intervention sous 1h",
  },
  {
    number: "03",
    icon: Wrench,
    title: "Intervention & résolution",
    description:
      "Dégorgement, curage haute pression ou hydrocurage selon le " +
      "diagnostic. Nos équipes traitent le problème à la source " +
      "pour un résultat durable.",
    color: "bg-orange-brand",
    detail: "Devis avant travaux",
  },
  {
    number: "04",
    icon: CheckCircle,
    title: "Validation & garantie",
    description:
      "Test de circulation après intervention pour vérifier le " +
      "résultat. Compte-rendu d'intervention fourni. " +
      "Satisfaction client garantie.",
    color: "bg-green-500",
    detail: "100% satisfait",
  },
]

export default function HowItWorks() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section
      ref={ref}
      className="bg-white py-20"
      aria-labelledby="process-title"
    >
      <div className="max-w-7xl mx-auto px-4">

        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 bg-primary/5
                          text-primary font-semibold text-sm px-4 py-1.5
                          rounded-full mb-4">
            Notre process
          </div>
          <h2
            id="process-title"
            className="text-3xl lg:text-4xl font-black text-primary mb-4"
          >
            Une intervention{" "}
            <span className="text-accent">en 4 étapes claires</span>
          </h2>
          <p className="text-gray-medium max-w-xl mx-auto">
            De votre appel à la résolution, Groupe CanalNet vous
            accompagne avec transparence et réactivité.
          </p>
        </div>

        <div className="relative">
          {/* Ligne de connexion desktop */}
          <div
            className="hidden lg:block absolute top-16 left-[12.5%]
                       right-[12.5%] h-0.5 bg-gradient-to-r
                       from-urgence via-accent to-green-500"
            aria-hidden="true"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4
                          gap-8">
            {STEPS.map((step, i) => {
              const Icon = step.icon
              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 40 }}
                  animate={
                    inView
                      ? { opacity: 1, y: 0 }
                      : { opacity: 0, y: 40 }
                  }
                  transition={{
                    duration: 0.5,
                    delay: i * 0.15,
                    ease: "easeOut",
                  }}
                  className="relative text-center"
                >
                  {/* Icône */}
                  <div className="flex justify-center mb-5">
                    <div
                      className={`relative w-16 h-16 ${step.color}
                                  rounded-2xl flex items-center
                                  justify-center shadow-lg`}
                    >
                      <Icon className="w-8 h-8 text-white" />
                      <div
                        className="absolute -top-2 -right-2 w-6 h-6
                                   bg-primary rounded-full flex items-center
                                   justify-center"
                      >
                        <span className="text-white text-xs font-black">
                          {i + 1}
                        </span>
                      </div>
                    </div>
                  </div>

                  <h3 className="font-black text-primary text-lg mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-medium text-sm leading-relaxed
                                mb-4">
                    {step.description}
                  </p>
                  <span
                    className="inline-block bg-gray-light text-primary
                               font-bold text-xs px-3 py-1.5 rounded-full"
                  >
                    ✓ {step.detail}
                  </span>
                </motion.div>
              )
            })}
          </div>
        </div>

        {/* CTA bas */}
        <div className="text-center mt-14">
          <a
            href={`tel:${COMPANY.phoneRaw}`}
            className="inline-flex items-center gap-3 bg-urgence
                       hover:bg-urgence-hover text-white font-black
                       px-8 py-4 rounded-xl text-lg transition-all
                       shadow-urgence hover:shadow-xl"
          >
            <Phone className="w-5 h-5" />
            Démarrer maintenant — {COMPANY.phone}
          </a>
        </div>

      </div>
    </section>
  )
}
