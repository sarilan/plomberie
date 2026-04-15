import {
  Clock, Shield, Phone, ThumbsUp,
  CreditCard, Award
} from "lucide-react"
import { COMPANY } from "@/config/constants"

const BADGES = [
  {
    icon: Clock,
    title: "Intervention sous 1h",
    description: "Dans la majorité des communes d'IDF",
    color: "text-accent",
    bg: "bg-accent/10",
  },
  {
    icon: Phone,
    title: `Disponible ${COMPANY.availability}`,
    description: "Week-ends et jours fériés inclus",
    color: "text-urgence",
    bg: "bg-urgence/10",
  },
  {
    icon: Shield,
    title: "Devis gratuit & transparent",
    description: "Prix communiqué avant intervention",
    color: "text-green-600",
    bg: "bg-green-500/10",
  },
  {
    icon: ThumbsUp,
    title: "Satisfaction garantie",
    description: "Résultat vérifié avant départ",
    color: "text-purple-600",
    bg: "bg-purple-500/10",
  },
  {
    icon: CreditCard,
    title: "Paiement sécurisé",
    description: "CB, virement, chèque acceptés",
    color: "text-orange-600",
    bg: "bg-orange-500/10",
  },
  {
    icon: Award,
    title: `${COMPANY.googleRating}★ sur Google`,
    description: `${COMPANY.googleReviewCount} avis vérifiés`,
    color: "text-yellow-600",
    bg: "bg-yellow-500/10",
  },
]

export default function TrustBadges() {
  return (
    <section
      className="bg-primary py-20"
      aria-labelledby="trust-title"
    >
      <div className="max-w-7xl mx-auto px-4">

        <div className="text-center mb-12">
          <h2
            id="trust-title"
            className="text-3xl lg:text-4xl font-black text-white mb-4"
          >
            Pourquoi choisir{" "}
            <span className="text-accent">Groupe CanalNet ?</span>
          </h2>
          <p className="text-white/60 max-w-xl mx-auto">
            Des engagements concrets pour chaque intervention.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 lg:gap-6">
          {BADGES.map((badge) => {
            const Icon = badge.icon
            return (
              <div
                key={badge.title}
                className="bg-white/5 hover:bg-white/10 border
                           border-white/10 hover:border-white/20
                           rounded-2xl p-6 transition-all duration-300
                           group"
              >
                <div
                  className={`w-12 h-12 ${badge.bg} rounded-xl
                              flex items-center justify-center mb-4
                              group-hover:scale-110 transition-transform`}
                >
                  <Icon className={`w-6 h-6 ${badge.color}`} />
                </div>
                <h3 className="font-black text-white text-base mb-1">
                  {badge.title}
                </h3>
                <p className="text-white/50 text-sm">
                  {badge.description}
                </p>
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
