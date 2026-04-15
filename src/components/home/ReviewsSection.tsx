"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Star, Quote } from "lucide-react"
import { COMPANY } from "@/config/constants"

const REVIEWS = [
  {
    id: "r1",
    author: "Marie-Claire D.",
    city: "Boulogne-Billancourt",
    rating: 5,
    text: "Intervention ultra rapide un dimanche soir. WC bouché depuis 2 jours, réglé en moins de 30 minutes. Technicien professionnel et poli. Je recommande vivement !",
    date: "Il y a 2 semaines",
  },
  {
    id: "r2",
    author: "Thomas M.",
    city: "Versailles",
    rating: 5,
    text: "Excellent service ! Ils sont venus en moins d'une heure pour un problème de canalisation grave. Prix correct, travail soigné. Groupe CanalNet, c'est la référence.",
    date: "Il y a 1 mois",
  },
  {
    id: "r3",
    author: "Sophie L.",
    city: "Créteil",
    rating: 5,
    text: "Devis transparent avant intervention. Pas de surprise sur la facture. Le technicien a pris le temps d'expliquer le problème. Vraiment sérieux.",
    date: "Il y a 3 semaines",
  },
  {
    id: "r4",
    author: "Jean-Pierre R.",
    city: "Saint-Denis",
    rating: 5,
    text: "Copropriété avec problème d'évacuation récurrent. Curage complet effectué. Plus de problème depuis 6 mois. Contrat annuel signé avec eux.",
    date: "Il y a 2 mois",
  },
  {
    id: "r5",
    author: "Fatima B.",
    city: "Évry-Courcouronnes",
    rating: 5,
    text: "Urgence à 23h, ils ont répondu immédiatement. Technicien disponible et compétent. La cuisine était inutilisable, maintenant tout fonctionne parfaitement.",
    date: "Il y a 1 semaine",
  },
  {
    id: "r6",
    author: "Pierre-Antoine G.",
    city: "Nanterre",
    rating: 5,
    text: "Restaurant avec problème de curage tout à l'égout. Intervention rapide, discrète et efficace. Aucune gêne pour nos clients. Nous faisons appel à eux régulièrement.",
    date: "Il y a 5 jours",
  },
]

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5" aria-label={`Note: ${rating}/5`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`w-4 h-4 ${i < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-200 fill-gray-200"}`}
        />
      ))}
    </div>
  )
}

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

export default function ReviewsSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section className="py-20 bg-white" aria-labelledby="reviews-heading">
      <div className="max-w-7xl mx-auto px-4">

        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 text-accent font-semibold
                          text-sm uppercase tracking-widest mb-4">
            <span className="w-8 h-px bg-accent" />
            Avis clients
            <span className="w-8 h-px bg-accent" />
          </div>
          <h2
            id="reviews-heading"
            className="text-3xl sm:text-4xl font-black text-primary mb-4"
          >
            Ce que disent nos{" "}
            <span className="text-accent">clients</span>
          </h2>

          {/* Score global */}
          <div className="flex items-center justify-center gap-4 mt-4">
            <div className="flex items-center gap-2">
              <Star className="w-6 h-6 text-yellow-400 fill-yellow-400" />
              <span className="text-3xl font-extrabold text-primary">
                {COMPANY.googleRating}
              </span>
            </div>
            <div className="text-left">
              <div className="text-sm font-semibold text-primary">
                {COMPANY.googleReviewCount} avis vérifiés
              </div>
              <div className="text-xs text-gray-medium">sur Google</div>
            </div>
          </div>
        </div>

        {/* Grid avis */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {REVIEWS.map((review) => (
            <motion.article
              key={review.id}
              variants={cardVariants}
              className="bg-gray-light rounded-2xl p-6 relative"
            >
              <Quote
                className="absolute top-4 right-4 w-8 h-8 text-accent/10"
                aria-hidden="true"
              />
              <div className="flex items-start justify-between mb-4">
                <div>
                  <div className="font-bold text-primary text-sm">
                    {review.author}
                  </div>
                  <div className="text-xs text-gray-medium">{review.city}</div>
                </div>
                <StarRating rating={review.rating} />
              </div>
              <p className="text-sm text-primary/80 leading-relaxed mb-3">
                &ldquo;{review.text}&rdquo;
              </p>
              <div className="text-xs text-gray-medium">{review.date}</div>
            </motion.article>
          ))}
        </motion.div>

        {/* Lien avis */}
        <div className="text-center mt-10">
          <a
            href="/avis-clients"
            className="inline-flex items-center gap-2 text-accent font-semibold
                       hover:gap-3 transition-all text-sm"
          >
            Voir tous nos avis clients
            <Star className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  )
}
