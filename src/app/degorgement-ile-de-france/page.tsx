import { Metadata } from "next"
import Link from "next/link"
import {
  Phone, MapPin, Clock, Shield,
  CheckCircle, ArrowRight, Droplets,
  Waves, Wrench, AlertTriangle
} from "lucide-react"
import { COMPANY, DEPARTMENTS } from "@/config/constants"
import { getCitiesByDepartment } from "@/lib/cities"

export const metadata: Metadata = {
  title:
    `Dégorgement Île-de-France | ${COMPANY.name} – Urgence 24h/7j`,
  description:
    `${COMPANY.name} intervient pour tous vos besoins en dégorgement ` +
    `en Île-de-France. Équipes disponibles 24h/24, 7j/7 dans les ` +
    `8 départements. Curage canalisation, hydrocurage, ` +
    `tout à l'égout. Devis immédiat.`,
  alternates: {
    canonical: `${COMPANY.website}/degorgement-ile-de-france`,
  },
  openGraph: {
    title:
      `Dégorgement Île-de-France | ${COMPANY.name} – Urgence 24h/7j`,
    description:
      `Spécialiste dégorgement en Île-de-France. ` +
      `Intervention sous 1h, 24h/24 et 7j/7.`,
  },
}

const schemaPage = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["LocalBusiness", "Plumber"],
      "@id": `${COMPANY.website}/degorgement-ile-de-france/#lb`,
      name: COMPANY.name,
      url: `${COMPANY.website}/degorgement-ile-de-france`,
      telephone: COMPANY.phoneRaw,
      areaServed: {
        "@type": "State",
        name: "Île-de-France",
      },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Accueil",
          item: COMPANY.website,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Dégorgement Île-de-France",
          item: `${COMPANY.website}/degorgement-ile-de-france`,
        },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name:
            "Groupe CanalNet intervient-il dans tout l'Île-de-France ?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              `Oui. ${COMPANY.name} couvre l'intégralité des ` +
              `8 départements d'Île-de-France : Paris (75), ` +
              `Seine-et-Marne (77), Yvelines (78), Essonne (91), ` +
              `Hauts-de-Seine (92), Seine-Saint-Denis (93), ` +
              `Val-de-Marne (94) et Val-d'Oise (95).`,
          },
        },
        {
          "@type": "Question",
          name: "Quel est le délai d'intervention en Île-de-France ?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              `Nos équipes interviennent généralement sous 1 heure ` +
              `dans la majorité des communes franciliennes, ` +
              `24h/24 et 7j/7, week-ends et jours fériés inclus.`,
          },
        },
        {
          "@type": "Question",
          name: "Quelle est la différence entre dégorgement et curage ?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              `Le dégorgement traite un bouchon ponctuel sur une ` +
              `canalisation. Le curage est un nettoyage en profondeur ` +
              `de l'ensemble d'un réseau, préventif ou curatif. ` +
              `Nos techniciens diagnostiquent la situation ` +
              `et recommandent la solution adaptée.`,
          },
        },
        {
          "@type": "Question",
          name: "Le devis est-il gratuit avant intervention ?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              `Oui. ${COMPANY.name} établit systématiquement ` +
              `un devis gratuit et sans engagement avant de ` +
              `commencer toute intervention.`,
          },
        },
        {
          "@type": "Question",
          name:
            "Intervenez-vous pour les copropriétés et professionnels ?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              `Oui. ${COMPANY.name} intervient pour les particuliers, ` +
              `les copropriétés, les syndics et les professionnels ` +
              `(restaurants, hôtels, commerces) sur toute l'IDF.`,
          },
        },
      ],
    },
  ],
}

const SERVICES_IDF = [
  {
    icon: AlertTriangle,
    name: "Dégorgement urgence",
    href: "/urgence-degorgement",
    desc: "Intervention immédiate 24h/24, 7j/7",
    color: "text-urgence",
    bg: "bg-urgence/10",
  },
  {
    icon: Waves,
    name: "Curage tout à l'égout",
    href: "/curage-tout-a-l-egout",
    desc: "Nettoyage complet du réseau principal",
    color: "text-accent",
    bg: "bg-accent/10",
  },
  {
    icon: Wrench,
    name: "Débouchage canalisation",
    href: "/debouchage-canalisation",
    desc: "Évier, WC, douche, baignoire",
    color: "text-green-600",
    bg: "bg-green-500/10",
  },
  {
    icon: Droplets,
    name: "Hydrocurage haute pression",
    href: "/hydrocurage",
    desc: "Canalisations très encrassées",
    color: "text-purple-600",
    bg: "bg-purple-500/10",
  },
]

export default function DegorgementIleDeFrance() {
  // Top villes par département pour le maillage
  const topCitiesPerDept = DEPARTMENTS.map((dept) => ({
    dept,
    cities: getCitiesByDepartment(dept.code)
      .sort((a, b) => b.population - a.population)
      .slice(0, 4),
  }))

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schemaPage),
        }}
      />

      {/* -- HERO ------------------------------------------------- */}
      <section
        className="bg-primary py-20"
        aria-labelledby="idf-hero-title"
      >
        <div className="max-w-7xl mx-auto px-4">
          {/* Breadcrumb */}
          <nav
            aria-label="Fil d'Ariane"
            className="flex items-center gap-2 text-white/50 text-sm mb-8"
          >
            <Link href="/" className="hover:text-white transition-colors">
              Accueil
            </Link>
            <span>/</span>
            <span className="text-white">
              Dégorgement Île-de-France
            </span>
          </nav>

          <div className="max-w-3xl">
            <div
              className="inline-flex items-center gap-2 bg-urgence/20
                         border border-urgence/40 rounded-full
                         px-4 py-1.5 mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-urgence
                               animate-pulse" />
              <span className="text-urgence font-semibold text-sm">
                Intervention sous 1h — {COMPANY.availability}
              </span>
            </div>

            <h1
              id="idf-hero-title"
              className="text-4xl lg:text-5xl font-black text-white
                         leading-tight mb-6"
            >
              Dégorgement en{" "}
              <span className="text-accent">Île-de-France</span>
              <br />
              Urgence 24h/24 et 7j/7
            </h1>

            <p className="text-white/70 text-lg mb-8 leading-relaxed">
              {COMPANY.name} est le spécialiste du dégorgement
              et du curage de canalisations en Île-de-France.
              Nos équipes couvrent l&apos;intégralité des{" "}
              {COMPANY.departmentsCovered} départements franciliens
              avec une disponibilité permanente et une réactivité
              garantie.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={`tel:${COMPANY.phoneRaw}`}
                className="flex items-center justify-center gap-3
                           bg-urgence hover:bg-urgence-hover text-white
                           font-black px-8 py-4 rounded-xl text-lg
                           transition-all shadow-urgence"
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
                Devis gratuit en ligne
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* -- INTRO EDITORIALE ------------------------------------ */}
      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4 prose prose-lg
                        prose-primary max-w-none">
          <h2 className="text-2xl lg:text-3xl font-black text-primary
                         mb-6">
            Une couverture complète de l&apos;Île-de-France
          </h2>
          <p className="text-primary/70 leading-relaxed mb-6">
            Une canalisation bouchée ne prévient jamais.
            Qu&apos;il soit 3h du matin un dimanche ou en pleine journée
            de semaine, {COMPANY.name} a structuré son organisation
            pour répondre à toute urgence de dégorgement en
            Île-de-France. Nos équipes sont déployées sur
            l&apos;ensemble du territoire francilien pour garantir
            des délais d&apos;intervention parmi les plus courts
            de la région.
          </p>
          <p className="text-primary/70 leading-relaxed mb-6">
            Du dégorgement ponctuel d&apos;un évier à Paris au curage
            complet du réseau tout à l&apos;égout d&apos;une copropriété
            en Seine-et-Marne, {COMPANY.name} mobilise le matériel
            adapté à chaque situation : hydrocureurs haute pression,
            caméras d&apos;inspection endoscopique, furets électriques
            professionnels.
          </p>
          <p className="text-primary/70 leading-relaxed">
            Particuliers, syndics de copropriété, gestionnaires
            d&apos;immeubles ou professionnels : nos équipes connaissent
            les contraintes spécifiques de chaque type d&apos;intervention
            et s&apos;adaptent pour minimiser la gêne et maximiser
            l&apos;efficacité.
          </p>
        </div>
      </section>

      {/* -- SERVICES -------------------------------------------- */}
      <section
        className="bg-gray-light py-16"
        aria-labelledby="services-idf-title"
      >
        <div className="max-w-7xl mx-auto px-4">
          <h2
            id="services-idf-title"
            className="text-2xl lg:text-3xl font-black text-primary
                       mb-10 text-center"
          >
            Nos interventions en Île-de-France
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4
                          gap-6">
            {SERVICES_IDF.map((service) => {
              const Icon = service.icon
              return (
                <Link
                  key={service.href}
                  href={service.href}
                  className="bg-white rounded-2xl p-6 border
                             border-gray-100 hover:border-accent/30
                             hover:shadow-card-hover transition-all
                             group block"
                >
                  <div
                    className={`w-12 h-12 ${service.bg} rounded-xl
                                flex items-center justify-center mb-4
                                group-hover:scale-110 transition-transform`}
                  >
                    <Icon
                      className={`w-6 h-6 ${service.color}`}
                    />
                  </div>
                  <h3
                    className="font-black text-primary mb-2 text-base"
                  >
                    {service.name}
                  </h3>
                  <p className="text-gray-medium text-sm mb-4">
                    {service.desc}
                  </p>
                  <span
                    className={`flex items-center gap-1 text-sm
                                font-bold ${service.color}`}
                  >
                    En savoir plus
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* -- ENGAGEMENTS ----------------------------------------- */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2
            className="text-2xl lg:text-3xl font-black text-primary
                       mb-10 text-center"
          >
            Nos engagements pour chaque intervention
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: Clock,
                title: "Réactivité garantie",
                items: [
                  "Réponse téléphonique < 2 min",
                  "Intervention sous 1h",
                  "Disponible 365 jours/an",
                ],
                color: "text-accent",
                bg: "bg-accent/10",
              },
              {
                icon: Shield,
                title: "Transparence totale",
                items: [
                  "Devis gratuit avant travaux",
                  "Prix ferme et définitif",
                  "Aucune surprise à la facture",
                ],
                color: "text-green-600",
                bg: "bg-green-500/10",
              },
              {
                icon: CheckCircle,
                title: "Qualité d'exécution",
                items: [
                  "Matériel professionnel dernière génération",
                  "Test de circulation après intervention",
                  "Compte-rendu d'intervention fourni",
                ],
                color: "text-purple-600",
                bg: "bg-purple-500/10",
              },
            ].map((bloc) => {
              const Icon = bloc.icon
              return (
                <div
                  key={bloc.title}
                  className="bg-gray-light rounded-2xl p-8
                             border border-gray-100"
                >
                  <div
                    className={`w-12 h-12 ${bloc.bg} rounded-xl
                                flex items-center justify-center mb-5`}
                  >
                    <Icon className={`w-6 h-6 ${bloc.color}`} />
                  </div>
                  <h3
                    className="font-black text-primary text-lg mb-4"
                  >
                    {bloc.title}
                  </h3>
                  <ul className="space-y-3">
                    {bloc.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2
                                   text-sm text-primary/70"
                      >
                        <CheckCircle
                          className={`w-4 h-4 ${bloc.color}
                                      flex-shrink-0 mt-0.5`}
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* -- ZONES PAR DEPARTEMENT ------------------------------- */}
      <section
        className="bg-gray-light py-16"
        aria-labelledby="zones-title"
      >
        <div className="max-w-7xl mx-auto px-4">
          <h2
            id="zones-title"
            className="text-2xl lg:text-3xl font-black text-primary
                       mb-4 text-center"
          >
            Nos zones d&apos;intervention par département
          </h2>
          <p className="text-gray-medium text-center mb-10 max-w-xl
                        mx-auto">
            Cliquez sur votre département pour accéder
            à la page dédiée et trouver votre commune.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {topCitiesPerDept.map(({ dept, cities }) => (
              <div
                key={dept.code}
                className="bg-white rounded-2xl p-6 border
                           border-gray-100 hover:border-accent/30
                           hover:shadow-card transition-all"
              >
                <div className="flex items-center justify-between mb-5">
                  <div className="flex items-center gap-3">
                    <div
                      className="w-12 h-12 bg-accent/10 rounded-xl
                                 flex items-center justify-center"
                    >
                      <span
                        className="text-accent font-black text-sm"
                      >
                        {dept.code}
                      </span>
                    </div>
                    <div>
                      <h3
                        className="font-black text-primary text-base"
                      >
                        {dept.name}
                      </h3>
                      <p className="text-gray-medium text-xs">
                        Intervention 24h/7j
                      </p>
                    </div>
                  </div>
                  <Link
                    href={`/${dept.slug}`}
                    className="text-accent text-sm font-bold
                               hover:underline flex items-center gap-1"
                  >
                    Voir tout
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  {cities.map((city) => (
                    <Link
                      key={city.slug}
                      href={`/degorgement/${city.slug}`}
                      className="flex items-center gap-1.5 text-sm
                                 text-primary/70 hover:text-accent
                                 transition-colors group py-1"
                    >
                      <MapPin
                        className="w-3 h-3 text-accent/50
                                   group-hover:text-accent flex-shrink-0"
                      />
                      {city.name}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* -- FAQ ------------------------------------------------- */}
      <section
        className="bg-white py-16"
        aria-labelledby="faq-idf-title"
      >
        <div className="max-w-4xl mx-auto px-4">
          <h2
            id="faq-idf-title"
            className="text-2xl lg:text-3xl font-black text-primary
                       mb-10 text-center"
          >
            Questions fréquentes — Dégorgement en Île-de-France
          </h2>
          <div className="space-y-4">
            {(
              schemaPage["@graph"][2] as {
                mainEntity: {
                  name: string
                  acceptedAnswer: { text: string }
                }[]
              }
            ).mainEntity.map((faq, i) => (
              <details
                key={i}
                className="bg-gray-light rounded-2xl p-6 group
                           border border-gray-100
                           open:border-accent/30 transition-all"
              >
                <summary
                  className="font-bold text-primary cursor-pointer
                             list-none flex items-center justify-between
                             gap-4"
                >
                  {faq.name}
                  <span
                    className="w-6 h-6 rounded-full bg-accent/10
                               text-accent flex items-center
                               justify-center flex-shrink-0
                               group-open:rotate-45 transition-transform
                               font-black text-lg leading-none"
                  >
                    +
                  </span>
                </summary>
                <p
                  className="text-primary/70 text-sm leading-relaxed
                             mt-4"
                >
                  {faq.acceptedAnswer.text}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* -- CTA FINAL ------------------------------------------- */}
      <section className="bg-urgence py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2
            className="text-3xl lg:text-4xl font-black text-white mb-4"
          >
            Besoin d&apos;une intervention en Île-de-France ?
          </h2>
          <p className="text-white/80 text-lg mb-8">
            {COMPANY.name} — Disponible{" "}
            <strong>{COMPANY.availability}</strong>, devis gratuit.
          </p>
          <div
            className="flex flex-col sm:flex-row gap-4
                       justify-center"
          >
            <a
              href={`tel:${COMPANY.phoneRaw}`}
              className="flex items-center justify-center gap-3
                         bg-white text-urgence font-black px-8 py-4
                         rounded-xl text-lg hover:bg-red-50
                         transition-colors shadow-lg"
            >
              <Phone className="w-5 h-5" />
              {COMPANY.phone}
            </a>
            <Link
              href="/devis"
              className="flex items-center justify-center gap-3
                         border-2 border-white/50 text-white font-bold
                         px-8 py-4 rounded-xl text-lg
                         hover:bg-white/10 transition-colors"
            >
              Devis gratuit en ligne
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
