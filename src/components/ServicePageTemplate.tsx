import Link from "next/link"
import {
  Phone, CheckCircle, ArrowRight,
  Clock, Shield, Star
} from "lucide-react"
import { COMPANY } from "@/config/constants"

interface ServicePageProps {
  // SEO
  title: string
  subtitle: string
  // Contenu
  heroDescription: string
  whatIsIt: { title: string; content: string }
  howWeDoIt: { step: string; title: string; desc: string }[]
  useCases: { title: string; desc: string }[]
  whyUs: { title: string; desc: string }[]
  faq: { q: string; a: string }[]
  // Maillage
  relatedServices: {
    name: string
    href: string
    desc: string
  }[]
}

export default function ServicePageTemplate({
  title,
  subtitle,
  heroDescription,
  whatIsIt,
  howWeDoIt,
  useCases,
  whyUs,
  faq,
  relatedServices,
}: ServicePageProps) {
  return (
    <>
      {/* -- HERO ------------------------------------------------ */}
      <section className="bg-primary py-20">
        <div className="max-w-7xl mx-auto px-4">
          <nav
            aria-label="Fil d'Ariane"
            className="flex items-center gap-2 text-white/50
                       text-sm mb-8"
          >
            <Link href="/" className="hover:text-white">
              Accueil
            </Link>
            <span>/</span>
            <Link
              href="/degorgement-ile-de-france"
              className="hover:text-white"
            >
              Île-de-France
            </Link>
            <span>/</span>
            <span className="text-white">{title}</span>
          </nav>

          <div className="max-w-3xl">
            <div
              className="inline-flex items-center gap-2
                         bg-urgence/20 border border-urgence/40
                         rounded-full px-4 py-1.5 mb-6"
            >
              <span
                className="w-2 h-2 rounded-full bg-urgence
                           animate-pulse"
              />
              <span
                className="text-urgence font-semibold text-sm"
              >
                {subtitle}
              </span>
            </div>

            <h1
              className="text-4xl lg:text-5xl font-black text-white
                         leading-tight mb-6"
            >
              {title}{" "}
              <span className="text-accent">en Île-de-France</span>
            </h1>

            <p
              className="text-white/70 text-lg mb-8 leading-relaxed"
            >
              {heroDescription}
            </p>

            <div className="flex flex-wrap gap-4 mb-8">
              {[
                { icon: Clock, text: `Intervention sous 1h` },
                { icon: Shield, text: "Devis gratuit" },
                {
                  icon: Star,
                  text: `${COMPANY.googleRating}★ Google`,
                },
              ].map(({ icon: Icon, text }) => (
                <div
                  key={text}
                  className="flex items-center gap-2
                             bg-white/10 rounded-lg px-4 py-2"
                >
                  <Icon className="w-4 h-4 text-accent" />
                  <span
                    className="text-white/90 text-sm font-medium"
                  >
                    {text}
                  </span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={`tel:${COMPANY.phoneRaw}`}
                className="flex items-center justify-center gap-3
                           bg-urgence hover:bg-urgence-hover
                           text-white font-black px-8 py-4
                           rounded-xl text-lg transition-all
                           shadow-urgence"
              >
                <Phone className="w-5 h-5" />
                {COMPANY.phone}
              </a>
              <Link
                href="/devis"
                className="flex items-center justify-center gap-3
                           border-2 border-white/30
                           hover:border-white/60 text-white font-bold
                           px-8 py-4 rounded-xl text-lg transition-all
                           hover:bg-white/10"
              >
                Devis gratuit
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* -- QU'EST-CE QUE C'EST --------------------------------- */}
      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2
            className="text-2xl lg:text-3xl font-black text-primary
                       mb-6"
          >
            {whatIsIt.title}
          </h2>
          <div
            className="text-primary/70 leading-relaxed space-y-4
                       text-lg"
            dangerouslySetInnerHTML={{ __html: whatIsIt.content }}
          />
        </div>
      </section>

      {/* -- COMMENT ON INTERVIENT ------------------------------- */}
      <section className="bg-gray-light py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2
            className="text-2xl lg:text-3xl font-black text-primary
                       mb-10 text-center"
          >
            Notre méthode d&apos;intervention
          </h2>
          <div
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {howWeDoIt.map((step, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-8 border
                           border-gray-100 relative"
              >
                <div
                  className="w-10 h-10 bg-accent rounded-xl
                             flex items-center justify-center mb-5"
                >
                  <span
                    className="text-white font-black text-sm"
                  >
                    {step.step}
                  </span>
                </div>
                <h3
                  className="font-black text-primary text-lg mb-3"
                >
                  {step.title}
                </h3>
                <p className="text-gray-medium text-sm leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* -- CAS D'USAGE ----------------------------------------- */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2
            className="text-2xl lg:text-3xl font-black text-primary
                       mb-10 text-center"
          >
            Dans quels cas faire appel à nous ?
          </h2>
          <div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3
                       gap-5"
          >
            {useCases.map((uc, i) => (
              <div
                key={i}
                className="flex items-start gap-4 bg-gray-light
                           rounded-2xl p-6"
              >
                <CheckCircle
                  className="w-5 h-5 text-accent flex-shrink-0 mt-1"
                />
                <div>
                  <h3
                    className="font-bold text-primary mb-1 text-sm"
                  >
                    {uc.title}
                  </h3>
                  <p className="text-gray-medium text-sm">
                    {uc.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* -- POURQUOI NOUS --------------------------------------- */}
      <section className="bg-primary py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2
            className="text-2xl lg:text-3xl font-black text-white
                       mb-10 text-center"
          >
            Pourquoi choisir{" "}
            <span className="text-accent">{COMPANY.name} ?</span>
          </h2>
          <div
            className="grid grid-cols-1 sm:grid-cols-2
                       lg:grid-cols-4 gap-6"
          >
            {whyUs.map((item, i) => (
              <div
                key={i}
                className="bg-white/5 border border-white/10
                           rounded-2xl p-6"
              >
                <div
                  className="w-8 h-8 bg-accent/20 rounded-lg
                             flex items-center justify-center mb-4"
                >
                  <span
                    className="text-accent font-black text-sm"
                  >
                    {i + 1}
                  </span>
                </div>
                <h3
                  className="font-black text-white text-base mb-2"
                >
                  {item.title}
                </h3>
                <p className="text-white/50 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* -- FAQ ------------------------------------------------- */}
      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2
            className="text-2xl lg:text-3xl font-black text-primary
                       mb-10 text-center"
          >
            Questions fréquentes
          </h2>
          <div className="space-y-4">
            {faq.map((item, i) => (
              <details
                key={i}
                className="bg-gray-light rounded-2xl p-6 group
                           border border-gray-100
                           open:border-accent/30 transition-all"
              >
                <summary
                  className="font-bold text-primary cursor-pointer
                             list-none flex items-center
                             justify-between gap-4"
                >
                  {item.q}
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
                  {item.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* -- SERVICES LIES --------------------------------------- */}
      <section className="bg-gray-light py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2
            className="text-xl font-black text-primary mb-6"
          >
            Nos autres interventions en Île-de-France
          </h2>
          <div
            className="grid grid-cols-1 sm:grid-cols-3 gap-4"
          >
            {relatedServices.map((s) => (
              <Link
                key={s.href}
                href={s.href}
                className="flex items-center justify-between bg-white
                           rounded-xl p-4 border border-gray-100
                           hover:border-accent/30 hover:shadow-card
                           transition-all group"
              >
                <div>
                  <div
                    className="font-bold text-primary text-sm mb-0.5"
                  >
                    {s.name}
                  </div>
                  <div className="text-gray-medium text-xs">
                    {s.desc}
                  </div>
                </div>
                <ArrowRight
                  className="w-4 h-4 text-accent
                             group-hover:translate-x-1
                             transition-transform flex-shrink-0 ml-3"
                />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* -- CTA FINAL ------------------------------------------- */}
      <section className="bg-urgence py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2
            className="text-3xl font-black text-white mb-4"
          >
            Besoin d&apos;une intervention rapide ?
          </h2>
          <p className="text-white/80 mb-8">
            {COMPANY.name} — {COMPANY.availability},
            devis gratuit, intervention sous 1h.
          </p>
          <a
            href={`tel:${COMPANY.phoneRaw}`}
            className="inline-flex items-center gap-3 bg-white
                       text-urgence font-black px-8 py-4 rounded-xl
                       text-lg hover:bg-red-50 transition-colors
                       shadow-lg"
          >
            <Phone className="w-5 h-5" />
            {COMPANY.phone}
          </a>
        </div>
      </section>
    </>
  )
}
