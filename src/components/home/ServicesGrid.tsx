import Link from "next/link"
import {
  AlertTriangle, Waves, Wrench,
  Droplets, ArrowRight
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
    slug: "urgence-degorgement",
    color: "from-urgence/10 to-urgence/5",
    border: "border-urgence/20 hover:border-urgence/50",
    iconBg: "bg-urgence/10 group-hover:bg-urgence/20",
    iconColor: "text-urgence",
    badge: "Urgence 24h/7j",
    badgeColor: "bg-urgence/10 text-urgence",
    bullets: [
      "Intervention sous 1h garantie",
      "Disponible nuits et week-ends",
      "Diagnostic immédiat sur place",
    ],
  },
  {
    slug: "curage-tout-a-l-egout",
    color: "from-accent/10 to-accent/5",
    border: "border-accent/20 hover:border-accent/50",
    iconBg: "bg-accent/10 group-hover:bg-accent/20",
    iconColor: "text-accent",
    badge: "Spécialité",
    badgeColor: "bg-accent/10 text-accent",
    bullets: [
      "Hydrocurage haute pression",
      "Réseaux collectifs et privés",
      "Inspection caméra incluse",
    ],
  },
  {
    slug: "debouchage-canalisation",
    color: "from-green-500/10 to-green-500/5",
    border: "border-green-500/20 hover:border-green-500/50",
    iconBg: "bg-green-500/10 group-hover:bg-green-500/20",
    iconColor: "text-green-600",
    badge: "Résidentiel & Pro",
    badgeColor: "bg-green-500/10 text-green-600",
    bullets: [
      "Évier, WC, douche, baignoire",
      "Furet électrique professionnel",
      "Sans destruction de mur",
    ],
  },
  {
    slug: "hydrocurage",
    color: "from-purple-500/10 to-purple-500/5",
    border: "border-purple-500/20 hover:border-purple-500/50",
    iconBg: "bg-purple-500/10 group-hover:bg-purple-500/20",
    iconColor: "text-purple-600",
    badge: "Haute performance",
    badgeColor: "bg-purple-500/10 text-purple-600",
    bullets: [
      "Pression jusqu'à 400 bars",
      "Canalisations très encrassées",
      "Résultats durables garantis",
    ],
  },
]

export default function ServicesGrid() {
  return (
    <section
      className="bg-gray-light py-20"
      aria-labelledby="services-title"
    >
      <div className="max-w-7xl mx-auto px-4">

        {/* Header section */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 bg-accent/10
                          text-accent font-semibold text-sm px-4 py-1.5
                          rounded-full mb-4">
            <Droplets className="w-4 h-4" />
            Nos prestations
          </div>
          <h2
            id="services-title"
            className="text-3xl lg:text-4xl font-black text-primary mb-4"
          >
            Spécialistes du dégorgement{" "}
            <span className="text-accent">en Île-de-France</span>
          </h2>
          <p className="text-gray-medium max-w-2xl mx-auto text-lg">
            Groupe CanalNet intervient sur tous types de problèmes
            de canalisation, des urgences nocturnes aux entretiens
            préventifs de réseaux collectifs.
          </p>
        </div>

        {/* Grille services */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {SERVICES.map((service) => {
            const details = SERVICE_DETAILS.find(
              (d) => d.slug === service.slug
            )
            if (!details) return null
            const Icon = ICON_MAP[service.icon] || Droplets

            return (
              <Link
                key={service.slug}
                href={`/${service.slug}`}
                className={`group relative bg-gradient-to-br ${details.color}
                            border ${details.border} rounded-2xl p-8
                            transition-all duration-300 hover:shadow-card-hover
                            hover:-translate-y-1 block`}
                aria-label={`${service.name} – ${service.description}`}
              >
                <div className="flex items-start justify-between mb-6">
                  <div
                    className={`w-14 h-14 rounded-2xl ${details.iconBg}
                                flex items-center justify-center
                                transition-colors`}
                  >
                    <Icon
                      className={`w-7 h-7 ${details.iconColor}`}
                    />
                  </div>
                  <span
                    className={`text-xs font-bold px-3 py-1 rounded-full
                                ${details.badgeColor}`}
                  >
                    {details.badge}
                  </span>
                </div>

                <h3 className="text-xl font-black text-primary mb-2">
                  {service.name}
                </h3>
                <p className="text-gray-medium mb-5 text-sm">
                  {service.description}
                </p>

                <ul className="space-y-2 mb-6">
                  {details.bullets.map((bullet) => (
                    <li
                      key={bullet}
                      className="flex items-center gap-2 text-sm
                                 text-primary/70"
                    >
                      <span
                        className={`w-1.5 h-1.5 rounded-full
                                    ${details.iconColor} bg-current
                                    flex-shrink-0`}
                      />
                      {bullet}
                    </li>
                  ))}
                </ul>

                <div
                  className={`flex items-center gap-2 font-bold text-sm
                              ${details.iconColor} group-hover:gap-3
                              transition-all`}
                >
                  En savoir plus
                  <ArrowRight className="w-4 h-4" />
                </div>
              </Link>
            )
          })}
        </div>

      </div>
    </section>
  )
}
