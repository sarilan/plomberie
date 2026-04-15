"use client"

import useEmblaCarousel from "embla-carousel-react"
import Autoplay from "embla-carousel-autoplay"
import { Star, Quote } from "lucide-react"
import { COMPANY } from "@/config/constants"

const REVIEWS = [
  {
    id: "1",
    author: "Marie T.",
    city: "Paris 15ème",
    rating: 5,
    text:
      "Intervention ultra rapide un dimanche soir. " +
      "WC complètement bouché, résolu en moins d'une heure. " +
      "Technicien très professionnel et propre.",
    date: "Il y a 2 semaines",
  },
  {
    id: "2",
    author: "Jean-Pierre M.",
    city: "Boulogne-Billancourt",
    rating: 5,
    text:
      "Syndic de copropriété depuis 10 ans. " +
      "Groupe CanalNet est notre prestataire de confiance " +
      "pour le curage annuel de nos colonnes. Toujours fiables.",
    date: "Il y a 1 mois",
  },
  {
    id: "3",
    author: "Sophie L.",
    city: "Versailles",
    rating: 5,
    text:
      "Canalisation tout à l'égout bouchée depuis 2 jours. " +
      "Appel à 23h, technicien sur place à minuit. " +
      "Problème réglé, devis respecté. Merci !",
    date: "Il y a 3 semaines",
  },
  {
    id: "4",
    author: "Mohamed B.",
    city: "Saint-Denis",
    rating: 5,
    text:
      "Gérant d'un restaurant. Une canalisation bouchée " +
      "peut me coûter une journée entière. " +
      "Groupe CanalNet est intervenu en 45 minutes. Parfait.",
    date: "Il y a 2 mois",
  },
  {
    id: "5",
    author: "Isabelle D.",
    city: "Créteil",
    rating: 5,
    text:
      "Très satisfaite de la prestation. " +
      "Explication claire du problème avant intervention, " +
      "devis respecté, résultat impeccable.",
    date: "Il y a 1 semaine",
  },
  {
    id: "6",
    author: "David R.",
    city: "Argenteuil",
    rating: 5,
    text:
      "J'avais essayé deux autres sociétés avant. " +
      "Groupe CanalNet a résolu en une heure ce que les autres " +
      "n'avaient pas réussi en deux passages. Bluffant.",
    date: "Il y a 3 semaines",
  },
]

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`Note : ${rating}/5`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`w-4 h-4 ${
            i < rating
              ? "fill-yellow-400 text-yellow-400"
              : "text-gray-200"
          }`}
        />
      ))}
    </div>
  )
}

export default function ReviewsCarousel() {
  const [emblaRef] = useEmblaCarousel(
    { loop: true, align: "start" },
    [Autoplay({ delay: 4000, stopOnInteraction: true })]
  )

  return (
    <section
      className="bg-white py-20"
      aria-labelledby="reviews-title"
    >
      <div className="max-w-7xl mx-auto px-4">

        <div className="text-center mb-12">
          {/* Badge Google */}
          <div className="inline-flex items-center gap-2 bg-yellow-50
                          border border-yellow-200 rounded-full px-4
                          py-1.5 mb-4">
            <div className="flex gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400"
                />
              ))}
            </div>
            <span className="font-bold text-yellow-800 text-sm">
              {COMPANY.googleRating}/5 · {COMPANY.googleReviewCount} avis Google
            </span>
          </div>

          <h2
            id="reviews-title"
            className="text-3xl lg:text-4xl font-black text-primary mb-4"
          >
            Ils nous ont fait confiance{" "}
            <span className="text-accent">en Île-de-France</span>
          </h2>
        </div>

        {/* Carousel */}
        <div
          className="overflow-hidden"
          ref={emblaRef}
          aria-label="Carrousel d'avis clients"
        >
          <div className="flex gap-6">
            {REVIEWS.map((review) => (
              <div
                key={review.id}
                className="flex-none w-full sm:w-[calc(50%-12px)]
                           lg:w-[calc(33.33%-16px)]"
              >
                <div
                  className="bg-gray-light rounded-2xl p-6 h-full
                             border border-gray-100 hover:border-accent/20
                             hover:shadow-card transition-all"
                >
                  <Quote
                    className="w-8 h-8 text-accent/20 mb-4"
                    aria-hidden="true"
                  />
                  <StarRating rating={review.rating} />
                  <p className="text-primary/80 text-sm leading-relaxed
                                my-4">
                    &ldquo;{review.text}&rdquo;
                  </p>
                  <div className="flex items-center justify-between
                                  pt-4 border-t border-gray-200">
                    <div>
                      <div className="font-bold text-primary text-sm">
                        {review.author}
                      </div>
                      <div className="text-gray-medium text-xs">
                        {review.city}
                      </div>
                    </div>
                    <span className="text-xs text-gray-medium">
                      {review.date}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
