
```markdown
# PROMPTS.md — Groupe CanalNet
# Utilisation : copier-coller chaque bloc directement dans Claude Code
# Claude Code lit automatiquement le CLAUDE.md à chaque session

---

# ════════════════════════════════════════
# BLOC 6 — TEMPLATE 100 PAGES VILLES
# ════════════════════════════════════════

En te basant sur le CLAUDE.md et les fichiers déjà en place
(cities.ts, metadata.ts, schema.ts), construis le template
dynamique pour les ~100 pages villes IDF.

## Fichier 1 — Template page ville
Crée `src/app/degorgement/[ville]/page.tsx` :

```typescript
import { Metadata } from "next"
import { notFound } from "next/navigation"
import Link from "next/link"
import {
  Phone, MapPin, CheckCircle,
  ArrowRight, Clock, Shield
} from "lucide-react"
import { IDF_CITIES, getCityBySlug, getNearestCities } from "@/lib/cities"
import { generateCityMetadata } from "@/lib/metadata"
import { generateCitySchema } from "@/lib/schema"
import { COMPANY } from "@/config/constants"

interface PageProps {
  params: { ville: string }
}

export async function generateStaticParams() {
  return IDF_CITIES.map((city) => ({ ville: city.slug }))
}

export async function generateMetadata(
  { params }: PageProps
): Promise<Metadata> {
  const city = getCityBySlug(params.ville)
  if (!city) return {}
  return generateCityMetadata(city)
}

export default function VillePage({ params }: PageProps) {
  const city = getCityBySlug(params.ville)
  if (!city) notFound()

  const nearCities = getNearestCities(city, 4)
  const schema = generateCitySchema(city)

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      {/* HERO */}
      <section className="bg-primary py-20">
        <div className="max-w-7xl mx-auto px-4">

          {/* Breadcrumb */}
          <nav
            aria-label="Fil d'Ariane"
            className="flex items-center gap-2 text-white/50 text-sm mb-8"
          >
            <Link href="/" className="hover:text-white">Accueil</Link>
            <span>/</span>
            <Link
              href="/degorgement-ile-de-france"
              className="hover:text-white"
            >
              Île-de-France
            </Link>
            <span>/</span>
            <Link
              href={`/${
                city.departmentCode === "75" ? "paris-75" :
                city.departmentCode === "92" ? "hauts-de-seine-92" :
                city.departmentCode === "93" ? "seine-saint-denis-93" :
                city.departmentCode === "94" ? "val-de-marne-94" :
                city.departmentCode === "91" ? "essonne-91" :
                city.departmentCode === "78" ? "yvelines-78" :
                city.departmentCode === "95" ? "val-d-oise-95" :
                "seine-et-marne-77"
              }`}
              className="hover:text-white"
            >
              {city.department} ({city.departmentCode})
            </Link>
            <span>/</span>
            <span className="text-white">
              Dégorgement {city.name}
            </span>
          </nav>

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-urgence/20
                            border border-urgence/40 rounded-full
                            px-4 py-1.5 mb-6">
              <span className="w-2 h-2 rounded-full bg-urgence animate-pulse" />
              <span className="text-urgence font-semibold text-sm">
                Intervention sous 1h à {city.name} — {COMPANY.availability}
              </span>
            </div>

            <h1 className="text-4xl lg:text-5xl font-black text-white
                           leading-tight mb-6">
              Dégorgement{" "}
              <span className="text-accent">{city.name}</span>
              <br />
              <span className="text-white/80 text-3xl lg:text-4xl">
                Urgence 24h/24 et 7j/7
              </span>
            </h1>

            <p className="text-white/70 text-lg mb-8 leading-relaxed">
              {COMPANY.name} assure le dégorgement et le curage de
              canalisations à {city.name} ({city.departmentCode}).
              Nos équipes interviennent sous 1 heure, disponibles
              {COMPANY.availability}, pour toute urgence de
              dégorgement chez les particuliers, copropriétés
              et professionnels.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              
                href={`tel:${COMPANY.phoneRaw}`}
                className="flex items-center justify-center gap-3
                           bg-urgence hover:bg-urgence-hover text-white
                           font-black px-8 py-4 rounded-xl text-lg
                           transition-all shadow-urgence"
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
                Devis gratuit
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CONTENU ÉDITORIAL */}
      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl lg:text-3xl font-black text-primary mb-6">
            Dégorgement et débouchage à {city.name}
          </h2>
          <div className="space-y-4 text-primary/70 leading-relaxed">
            <p>
              {COMPANY.name} intervient à {city.name} et dans toutes
              les communes du {city.department} ({city.departmentCode})
              pour l'ensemble des prestations de dégorgement :
              curage tout à l'égout, débouchage de canalisation,
              hydrocurage haute pression et inspection caméra.
            </p>
            <p>
              Que vous soyez face à une canalisation bouchée en pleine
              nuit ou à un réseau qui nécessite un entretien préventif,
              nos équipes connaissent le terrain à {city.name} et
              garantissent des délais d'intervention parmi les plus
              courts du secteur.
            </p>
            <p>
              Particuliers, syndics de copropriété ou professionnels
              à {city.name} : {COMPANY.name} s'adapte à chaque
              situation et chaque type de bâtiment pour une
              intervention efficace et sans mauvaise surprise.
            </p>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="bg-gray-light py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl lg:text-3xl font-black text-primary
                         mb-10 text-center">
            Nos interventions à {city.name}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {[
              {
                title: "Dégorgement urgence",
                href: "/urgence-degorgement",
                desc: `Intervention sous 1h à ${city.name},
                       ${COMPANY.availability}`,
                color: "text-urgence",
                bg: "bg-urgence/10",
              },
              {
                title: "Curage tout à l'égout",
                href: "/curage-tout-a-l-egout",
                desc: "Nettoyage complet du réseau principal",
                color: "text-accent",
                bg: "bg-accent/10",
              },
              {
                title: "Débouchage canalisation",
                href: "/debouchage-canalisation",
                desc: "Évier, WC, douche, baignoire",
                color: "text-green-600",
                bg: "bg-green-500/10",
              },
              {
                title: "Hydrocurage haute pression",
                href: "/hydrocurage",
                desc: "Canalisations très encrassées",
                color: "text-purple-600",
                bg: "bg-purple-500/10",
              },
            ].map((service) => (
              <Link
                key={service.href}
                href={service.href}
                className="flex items-center justify-between bg-white
                           rounded-2xl p-6 border border-gray-100
                           hover:border-accent/30 hover:shadow-card
                           transition-all group"
              >
                <div>
                  <h3 className={`font-black text-base mb-1
                                  ${service.color}`}>
                    {service.title}
                  </h3>
                  <p className="text-gray-medium text-sm">
                    {service.desc}
                  </p>
                </div>
                <ArrowRight className="w-5 h-5 text-accent
                                       group-hover:translate-x-1
                                       transition-transform flex-shrink-0
                                       ml-4" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ENGAGEMENTS */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl font-black text-primary mb-8 text-center">
            Pourquoi nous choisir à {city.name} ?
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {[
              {
                icon: Clock,
                title: "Sous 1h",
                desc: `À ${city.name} et alentours`,
                color: "text-accent",
                bg: "bg-accent/10",
              },
              {
                icon: Phone,
                title: COMPANY.availability,
                desc: "Jours fériés inclus",
                color: "text-urgence",
                bg: "bg-urgence/10",
              },
              {
                icon: Shield,
                title: "Devis gratuit",
                desc: "Avant intervention",
                color: "text-green-600",
                bg: "bg-green-500/10",
              },
              {
                icon: CheckCircle,
                title: "Garanti",
                desc: "Résultat vérifié",
                color: "text-purple-600",
                bg: "bg-purple-500/10",
              },
            ].map(({ icon: Icon, title, desc, color, bg }) => (
              <div
                key={title}
                className="text-center bg-gray-light rounded-2xl p-6"
              >
                <div className={`w-12 h-12 ${bg} rounded-xl
                                 flex items-center justify-center
                                 mx-auto mb-3`}>
                  <Icon className={`w-6 h-6 ${color}`} />
                </div>
                <div className="font-black text-primary text-sm mb-1">
                  {title}
                </div>
                <div className="text-gray-medium text-xs">{desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-gray-light py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-black text-primary mb-8 text-center">
            FAQ — Dégorgement {city.name}
          </h2>
          <div className="space-y-4">
            {[
              {
                q: `Groupe CanalNet intervient-il en urgence à ${city.name} ?`,
                a: `Oui. ${COMPANY.name} assure des interventions de
                    dégorgement urgence à ${city.name} ${COMPANY.availability},
                    week-ends et jours fériés inclus.
                    Appelez le ${COMPANY.phone} pour une prise en charge
                    immédiate.`,
              },
              {
                q: `Quel est le délai d'intervention à ${city.name} ?`,
                a: `Nos équipes interviennent généralement sous 1 heure
                    à ${city.name}. Notre organisation en Île-de-France
                    nous permet de garantir des délais parmi les plus
                    courts du secteur.`,
              },
              {
                q: "Le devis est-il gratuit ?",
                a: `Oui. ${COMPANY.name} établit un devis gratuit et
                    sans engagement avant toute intervention,
                    à ${city.name} comme partout en Île-de-France.`,
              },
              {
                q: `Intervenez-vous pour les copropriétés à ${city.name} ?`,
                a: `Oui. Nous intervenons pour les particuliers,
                    les syndics et gestionnaires de copropriété,
                    et les professionnels à ${city.name}.`,
              },
            ].map((faq, i) => (
              <details
                key={i}
                className="bg-white rounded-2xl p-6 group border
                           border-gray-100 open:border-accent/30"
              >
                <summary className="font-bold text-primary cursor-pointer
                                    list-none flex items-center
                                    justify-between gap-4">
                  {faq.q}
                  <span className="w-6 h-6 rounded-full bg-accent/10
                                   text-accent flex items-center
                                   justify-center flex-shrink-0
                                   group-open:rotate-45 transition-transform
                                   font-black text-lg leading-none">
                    +
                  </span>
                </summary>
                <p className="text-primary/70 text-sm leading-relaxed mt-4">
                  {faq.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* VILLES PROCHES — MAILLAGE INTERNE */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-xl font-black text-primary mb-6">
            Nous intervenons aussi près de {city.name}
          </h2>
          <div className="flex flex-wrap gap-3">
            {nearCities.map((nearCity) => (
              <Link
                key={nearCity.slug}
                href={`/degorgement/${nearCity.slug}`}
                className="flex items-center gap-2 bg-gray-light
                           hover:bg-accent/10 border border-gray-200
                           hover:border-accent/30 rounded-xl px-4 py-2
                           text-sm font-medium text-primary
                           hover:text-accent transition-all"
              >
                <MapPin className="w-3.5 h-3.5" />
                Dégorgement {nearCity.name}
              </Link>
            ))}
            <Link
              href="/degorgement-ile-de-france"
              className="flex items-center gap-2 bg-accent/10
                         border border-accent/20 rounded-xl px-4 py-2
                         text-sm font-bold text-accent
                         hover:bg-accent/20 transition-all"
            >
              <ArrowRight className="w-3.5 h-3.5" />
              Voir toute l'Île-de-France
            </Link>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="bg-urgence py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-black text-white mb-4">
            Urgence dégorgement à {city.name} ?
          </h2>
          <p className="text-white/80 mb-8">
            {COMPANY.name} — Disponible{" "}
            <strong>{COMPANY.availability}</strong>,
            intervention sous 1h, devis gratuit.
          </p>
          
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
```

Vérifie :
✅ npm run build → toutes les pages générées sans erreur
✅ /degorgement/paris → page correcte
✅ /degorgement/versailles → page correcte
✅ /degorgement/slug-inexistant → 404
✅ Breadcrumb correct sur chaque ville
✅ Maillage vers 4 villes proches fonctionnel
✅ Schema.org JSON-LD présent


---

# ════════════════════════════════════════
# BLOC 7 — 8 PAGES DÉPARTEMENTALES
# ════════════════════════════════════════

En te basant sur le CLAUDE.md et departments.ts déjà en place,
construis le template dynamique pour les 8 pages départementales.

## Fichier 1 — Layout groupe départements
Crée `src/app/(departements)/layout.tsx` :

```typescript
export default function DepartementLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
```

## Fichier 2 — Template réutilisable département
Crée `src/components/DepartementPageTemplate.tsx` :

```typescript
import Link from "next/link"
import { Phone, MapPin, ArrowRight, CheckCircle } from "lucide-react"
import { COMPANY } from "@/config/constants"
import { getCitiesByDepartment } from "@/lib/cities"
import { getDepartmentByCode } from "@/lib/departments"

interface DeptPageProps {
  deptCode: string
  deptName: string
  deptSlug: string
}

export default function DepartementPageTemplate({
  deptCode,
  deptName,
  deptSlug,
}: DeptPageProps) {
  const dept = getDepartmentByCode(deptCode)
  const cities = getCitiesByDepartment(deptCode)
    .sort((a, b) => b.population - a.population)

  return (
    <>
      {/* HERO */}
      <section className="bg-primary py-20">
        <div className="max-w-7xl mx-auto px-4">
          <nav
            aria-label="Fil d'Ariane"
            className="flex items-center gap-2 text-white/50 text-sm mb-8"
          >
            <Link href="/" className="hover:text-white">Accueil</Link>
            <span>/</span>
            <Link
              href="/degorgement-ile-de-france"
              className="hover:text-white"
            >
              Île-de-France
            </Link>
            <span>/</span>
            <span className="text-white">
              {deptName} ({deptCode})
            </span>
          </nav>

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-urgence/20
                            border border-urgence/40 rounded-full
                            px-4 py-1.5 mb-6">
              <span className="w-2 h-2 rounded-full bg-urgence
                               animate-pulse" />
              <span className="text-urgence font-semibold text-sm">
                Dép. {deptCode} — Intervention sous 1h,
                {COMPANY.availability}
              </span>
            </div>

            <h1 className="text-4xl lg:text-5xl font-black text-white
                           leading-tight mb-6">
              Dégorgement{" "}
              <span className="text-accent">{deptName}</span>
              <br />
              <span className="text-white/80 text-3xl lg:text-4xl">
                ({deptCode}) — Urgence 24h/24, 7j/7
              </span>
            </h1>

            <p className="text-white/70 text-lg mb-8 leading-relaxed">
              {COMPANY.name} couvre l'intégralité du département
              {deptName} ({deptCode}). Nos équipes interviennent
              dans toutes les communes pour le dégorgement,
              le curage de canalisations et le débouchage urgence.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              
                href={`tel:${COMPANY.phoneRaw}`}
                className="flex items-center justify-center gap-3
                           bg-urgence hover:bg-urgence-hover text-white
                           font-black px-8 py-4 rounded-xl text-lg
                           transition-all shadow-urgence"
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
                Devis gratuit
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* DESCRIPTION DÉPARTEMENT */}
      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl lg:text-3xl font-black text-primary mb-6">
            {COMPANY.name} dans le {deptName}
          </h2>
          <p className="text-primary/70 leading-relaxed text-lg mb-4">
            {dept?.description}
          </p>
          <p className="text-primary/70 leading-relaxed">
            Avec une couverture complète du département {deptCode},
            {COMPANY.name} garantit des délais d'intervention
            optimaux dans toutes les communes, des plus grandes
            villes aux zones résidentielles.
          </p>
        </div>
      </section>

      {/* GRILLE VILLES */}
      <section className="bg-gray-light py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl font-black text-primary mb-4
                         text-center">
            Nos interventions dans le {deptName}
          </h2>
          <p className="text-gray-medium text-center mb-10">
            Sélectionnez votre commune pour accéder
            à la page dédiée.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3
                          lg:grid-cols-4 gap-4">
            {cities.map((city) => (
              <Link
                key={city.slug}
                href={`/degorgement/${city.slug}`}
                className="flex items-center gap-3 bg-white rounded-xl
                           p-4 border border-gray-100
                           hover:border-accent/30 hover:shadow-card
                           transition-all group"
              >
                <MapPin className="w-4 h-4 text-accent flex-shrink-0" />
                <div>
                  <div className="font-bold text-primary text-sm">
                    {city.name}
                  </div>
                  <div className="text-gray-medium text-xs">
                    Urgence 24h/7j
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ENGAGEMENTS */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl font-black text-primary mb-8
                         text-center">
            Nos engagements dans le {deptName}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Réactivité maximale",
                items: [
                  `Réponse < 2 min`,
                  `Intervention sous 1h dans le ${deptCode}`,
                  `${COMPANY.availability}`,
                ],
                color: "text-accent",
                bg: "bg-accent/10",
              },
              {
                title: "Transparence totale",
                items: [
                  "Devis gratuit avant travaux",
                  "Prix ferme communiqué sur place",
                  "Aucune facturation surprise",
                ],
                color: "text-green-600",
                bg: "bg-green-500/10",
              },
              {
                title: "Expertise technique",
                items: [
                  "Hydrocureur haute pression",
                  "Caméra d'inspection endoscopique",
                  "Compte-rendu d'intervention",
                ],
                color: "text-purple-600",
                bg: "bg-purple-500/10",
              },
            ].map((bloc) => (
              <div
                key={bloc.title}
                className="bg-gray-light rounded-2xl p-8"
              >
                <h3 className="font-black text-primary text-lg mb-5">
                  {bloc.title}
                </h3>
                <ul className="space-y-3">
                  {bloc.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-sm
                                 text-primary/70"
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
            ))}
          </div>
        </div>
      </section>

      {/* FAQ DÉPARTEMENT */}
      <section className="bg-gray-light py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-black text-primary mb-8
                         text-center">
            FAQ — Dégorgement {deptName} ({deptCode})
          </h2>
          <div className="space-y-4">
            {[
              {
                q: `${COMPANY.name} intervient-il dans tout
                    le ${deptName} ?`,
                a: `Oui. ${COMPANY.name} couvre l'intégralité
                    du département ${deptName} (${deptCode}),
                    de la préfecture aux communes les plus petites.
                    Un seul numéro pour tout le département :
                    ${COMPANY.phone}.`,
              },
              {
                q: `Quel délai d'intervention dans le ${deptCode} ?`,
                a: `Nos équipes interviennent généralement sous 1h
                    dans la majorité des communes du ${deptCode}.
                    Disponibles ${COMPANY.availability}.`,
              },
              {
                q: "Intervenez-vous pour les copropriétés ?",
                a: `Oui. ${COMPANY.name} travaille régulièrement
                    avec des syndics et gestionnaires de copropriété
                    dans le ${deptName} pour le curage de colonnes,
                    l'entretien des réseaux collectifs et les
                    interventions urgentes.`,
              },
            ].map((faq, i) => (
              <details
                key={i}
                className="bg-white rounded-2xl p-6 group border
                           border-gray-100 open:border-accent/30"
              >
                <summary className="font-bold text-primary
                                    cursor-pointer list-none flex
                                    items-center justify-between gap-4">
                  {faq.q}
                  <span className="w-6 h-6 rounded-full bg-accent/10
                                   text-accent flex items-center
                                   justify-center flex-shrink-0
                                   group-open:rotate-45
                                   transition-transform font-black
                                   text-lg leading-none">
                    +
                  </span>
                </summary>
                <p className="text-primary/70 text-sm leading-relaxed
                               mt-4">
                  {faq.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* MAILLAGE AUTRES DÉPARTEMENTS */}
      <section className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-lg font-black text-primary mb-5">
            Autres départements couverts
          </h2>
          <div className="flex flex-wrap gap-3">
            {[
              { name: "Paris", code: "75", slug: "paris-75" },
              { name: "Seine-et-Marne", code: "77",
                slug: "seine-et-marne-77" },
              { name: "Yvelines", code: "78", slug: "yvelines-78" },
              { name: "Essonne", code: "91", slug: "essonne-91" },
              { name: "Hauts-de-Seine", code: "92",
                slug: "hauts-de-seine-92" },
              { name: "Seine-Saint-Denis", code: "93",
                slug: "seine-saint-denis-93" },
              { name: "Val-de-Marne", code: "94",
                slug: "val-de-marne-94" },
              { name: "Val-d'Oise", code: "95",
                slug: "val-d-oise-95" },
            ]
              .filter((d) => d.code !== deptCode)
              .map((dept) => (
                <Link
                  key={dept.code}
                  href={`/${dept.slug}`}
                  className="flex items-center gap-2 bg-gray-light
                             hover:bg-accent/10 border border-gray-200
                             hover:border-accent/30 rounded-xl px-4
                             py-2 text-sm font-medium text-primary
                             hover:text-accent transition-all"
                >
                  <MapPin className="w-3.5 h-3.5" />
                  {dept.name} ({dept.code})
                </Link>
              ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-urgence py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-black text-white mb-4">
            Urgence dans le {deptName} ?
          </h2>
          <p className="text-white/80 mb-8">
            {COMPANY.name} — {COMPANY.availability},
            intervention sous 1h, devis gratuit.
          </p>
          
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
```

## Fichier 3 — Crée les 8 pages départementales

Pour chaque département, crée le fichier
`src/app/(departements)/[slug]/page.tsx`
en utilisant le template ci-dessus.

Crée les 8 fichiers suivants :

`src/app/(departements)/paris-75/page.tsx`
`src/app/(departements)/seine-et-marne-77/page.tsx`
`src/app/(departements)/yvelines-78/page.tsx`
`src/app/(departements)/essonne-91/page.tsx`
`src/app/(departements)/hauts-de-seine-92/page.tsx`
`src/app/(departements)/seine-saint-denis-93/page.tsx`
`src/app/(departements)/val-de-marne-94/page.tsx`
`src/app/(departements)/val-d-oise-95/page.tsx`

Chaque fichier suit ce pattern exact :

```typescript
import { Metadata } from "next"
import DepartementPageTemplate from
  "@/components/DepartementPageTemplate"
import { generateDepartmentMetadata } from "@/lib/metadata"
import { generateCitySchema } from "@/lib/schema"
import { COMPANY } from "@/config/constants"

export const metadata: Metadata = generateDepartmentMetadata(
  "[DEPT_NAME]",
  "[DEPT_CODE]",
  "[DEPT_SLUG]"
)

const schema = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "Plumber"],
  name: COMPANY.name,
  telephone: COMPANY.phoneRaw,
  areaServed: {
    "@type": "AdministrativeArea",
    name: "[DEPT_NAME] ([DEPT_CODE])",
  },
}

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <DepartementPageTemplate
        deptCode="[DEPT_CODE]"
        deptName="[DEPT_NAME]"
        deptSlug="[DEPT_SLUG]"
      />
    </>
  )
}
```

Remplace [DEPT_NAME], [DEPT_CODE], [DEPT_SLUG]
par les valeurs réelles pour chaque département.

Vérifie :
✅ /paris-75 → page Paris complète
✅ /hauts-de-seine-92 → page 92 complète
✅ Toutes les villes du département affichées
✅ Maillage vers les 7 autres départements
✅ Aucune erreur TypeScript


---

# ════════════════════════════════════════
# BLOC 8 — FORMULAIRES + API + RESEND
# ════════════════════════════════════════

En te basant sur le CLAUDE.md, construis les formulaires
de contact et devis avec envoi d'email via Resend.

## Fichier 1 — Schema Zod partagé
Crée `src/lib/validations.ts` :

```typescript
import { z } from "zod"

export const contactSchema = z.object({
  nom: z.string().min(2, "Nom requis"),
  telephone: z
    .string()
    .regex(/^(\+33|0)[1-9](\d{8})$/, "Numéro français invalide"),
  email: z.string().email("Email invalide"),
  message: z.string().min(10, "Message trop court"),
  rgpd: z.boolean().refine((v) => v, "Vous devez accepter"),
})

export const devisSchema = z.object({
  nom: z.string().min(2, "Nom requis"),
  telephone: z
    .string()
    .regex(/^(\+33|0)[1-9](\d{8})$/, "Numéro invalide"),
  email: z.string().email("Email invalide"),
  ville: z.string().min(2, "Ville requise"),
  typeProbleme: z.enum([
    "canalisation-bouchee",
    "wc-bouche",
    "evier-douche",
    "reseau-egout",
    "curage-preventif",
    "autre",
  ]),
  urgence: z.boolean(),
  message: z.string().optional(),
  rgpd: z.boolean().refine((v) => v, "Vous devez accepter"),
})

export type ContactFormData = z.infer<typeof contactSchema>
export type DevisFormData = z.infer<typeof devisSchema>
```

## Fichier 2 — API route contact
Crée `src/app/api/contact/route.ts` :

```typescript
import { NextRequest, NextResponse } from "next/server"
import { Resend } from "resend"
import { contactSchema } from "@/lib/validations"
import { COMPANY } from "@/config/constants"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const data = contactSchema.parse(body)

    await resend.emails.send({
      from: "Contact <contact@groupe-canalnet.fr>",
      to: [COMPANY.email],
      subject: `Nouveau message – ${data.nom}`,
      html: `
        <h2>Nouveau message de contact</h2>
        <p><strong>Nom :</strong> ${data.nom}</p>
        <p><strong>Téléphone :</strong> ${data.telephone}</p>
        <p><strong>Email :</strong> ${data.email}</p>
        <p><strong>Message :</strong><br/>${data.message}</p>
      `,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    return NextResponse.json(
      { error: "Erreur lors de l'envoi" },
      { status: 400 }
    )
  }
}
```

## Fichier 3 — API route devis
Crée `src/app/api/devis/route.ts` :

```typescript
import { NextRequest, NextResponse } from "next/server"
import { Resend } from "resend"
import { devisSchema } from "@/lib/validations"
import { COMPANY } from "@/config/constants"

const resend = new Resend(process.env.RESEND_API_KEY)

const PROBLEME_LABELS: Record<string, string> = {
  "canalisation-bouchee": "Canalisation bouchée",
  "wc-bouche": "WC bouché",
  "evier-douche": "Évier / Douche bouchée",
  "reseau-egout": "Réseau tout à l'égout",
  "curage-preventif": "Curage préventif",
  "autre": "Autre",
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const data = devisSchema.parse(body)

    await resend.emails.send({
      from: "Devis <devis@groupe-canalnet.fr>",
      to: [COMPANY.email],
      subject: `${data.urgence ? "🚨 URGENT — " : ""}Demande devis – ${data.nom} – ${data.ville}`,
      html: `
        <h2>${data.urgence ? "🚨 DEMANDE URGENTE" : "Demande de devis"}</h2>
        <table border="1" cellpadding="8" style="border-collapse:collapse">
          <tr><td><strong>Nom</strong></td><td>${data.nom}</td></tr>
          <tr><td><strong>Téléphone</strong></td>
              <td><a href="tel:${data.telephone}">${data.telephone}</a></td>
          </tr>
          <tr><td><strong>Email</strong></td><td>${data.email}</td></tr>
          <tr><td><strong>Ville</strong></td><td>${data.ville}</td></tr>
          <tr><td><strong>Problème</strong></td>
              <td>${PROBLEME_LABELS[data.typeProbleme]}</td>
          </tr>
          <tr><td><strong>Urgence</strong></td>
              <td>${data.urgence ? "OUI" : "Non"}</td>
          </tr>
          ${data.message
            ? `<tr><td><strong>Message</strong></td>
               <td>${data.message}</td></tr>`
            : ""}
        </table>
      `,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    return NextResponse.json(
      { error: "Erreur lors de l'envoi" },
      { status: 400 }
    )
  }
}
```

## Fichier 4 — Composant DevisForm
Crée `src/components/forms/DevisForm.tsx` :

```typescript
"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Phone, CheckCircle, Loader2, AlertCircle } from "lucide-react"
import { devisSchema, DevisFormData } from "@/lib/validations"
import { COMPANY } from "@/config/constants"
import { IDF_CITIES } from "@/lib/cities"

export default function DevisForm() {
  const [status, setStatus] = useState
    "idle" | "loading" | "success" | "error"
  >("idle")

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm<DevisFormData>({
    resolver: zodResolver(devisSchema),
    defaultValues: { urgence: false },
  })

  const urgence = watch("urgence")

  const onSubmit = async (data: DevisFormData) => {
    setStatus("loading")
    try {
      const res = await fetch("/api/devis", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })
      if (!res.ok) throw new Error()
      setStatus("success")
      reset()
    } catch {
      setStatus("error")
    }
  }

  if (status === "success") {
    return (
      <div className="text-center py-12">
        <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
        <h3 className="text-2xl font-black text-primary mb-2">
          Demande envoyée !
        </h3>
        <p className="text-gray-medium">
          Nos équipes vous recontactent dans les plus brefs délais.
        </p>
      </div>
    )
  }

  return (
    <div onSubmit={handleSubmit(onSubmit)} className="space-y-5">

      {/* Urgence toggle */}
      <div className={`flex items-center justify-between p-4 rounded-xl
                       border-2 cursor-pointer transition-all
                       ${urgence
                         ? "border-urgence bg-urgence/5"
                         : "border-gray-200 bg-gray-light"}`}>
        <label className="flex items-center gap-3 cursor-pointer w-full">
          <input
            type="checkbox"
            {...register("urgence")}
            className="w-5 h-5 accent-urgence"
          />
          <div>
            <div className="font-bold text-primary">
              🚨 Demande urgente
            </div>
            <div className="text-gray-medium text-sm">
              Intervention requise aujourd'hui / cette nuit
            </div>
          </div>
        </label>
      </div>

      {/* Nom */}
      <div>
        <label className="block text-sm font-bold text-primary mb-1">
          Nom complet *
        </label>
        <input
          {...register("nom")}
          placeholder="Jean Dupont"
          className="w-full px-4 py-3 rounded-xl border border-gray-200
                     focus:border-accent focus:outline-none
                     focus:ring-2 focus:ring-accent/20 transition-all"
        />
        {errors.nom && (
          <p className="text-urgence text-xs mt-1">
            {errors.nom.message}
          </p>
        )}
      </div>

      {/* Téléphone */}
      <div>
        <label className="block text-sm font-bold text-primary mb-1">
          Téléphone *
        </label>
        <input
          {...register("telephone")}
          type="tel"
          placeholder="06 XX XX XX XX"
          className="w-full px-4 py-3 rounded-xl border border-gray-200
                     focus:border-accent focus:outline-none
                     focus:ring-2 focus:ring-accent/20 transition-all"
        />
        {errors.telephone && (
          <p className="text-urgence text-xs mt-1">
            {errors.telephone.message}
          </p>
        )}
      </div>

      {/* Email */}
      <div>
        <label className="block text-sm font-bold text-primary mb-1">
          Email *
        </label>
        <input
          {...register("email")}
          type="email"
          placeholder="jean@email.fr"
          className="w-full px-4 py-3 rounded-xl border border-gray-200
                     focus:border-accent focus:outline-none
                     focus:ring-2 focus:ring-accent/20 transition-all"
        />
        {errors.email && (
          <p className="text-urgence text-xs mt-1">
            {errors.email.message}
          </p>
        )}
      </div>

      {/* Ville */}
      <div>
        <label className="block text-sm font-bold text-primary mb-1">
          Ville d'intervention *
        </label>
        <input
          {...register("ville")}
          placeholder="Paris, Versailles, Créteil..."
          list="cities-list"
          className="w-full px-4 py-3 rounded-xl border border-gray-200
                     focus:border-accent focus:outline-none
                     focus:ring-2 focus:ring-accent/20 transition-all"
        />
        <datalist id="cities-list">
          {IDF_CITIES.map((c) => (
            <option key={c.slug} value={c.name} />
          ))}
        </datalist>
        {errors.ville && (
          <p className="text-urgence text-xs mt-1">
            {errors.ville.message}
          </p>
        )}
      </div>

      {/* Type de problème */}
      <div>
        <label className="block text-sm font-bold text-primary mb-1">
          Type de problème *
        </label>
        <select
          {...register("typeProbleme")}
          className="w-full px-4 py-3 rounded-xl border border-gray-200
                     focus:border-accent focus:outline-none
                     focus:ring-2 focus:ring-accent/20 transition-all
                     bg-white"
        >
          <option value="">Sélectionnez...</option>
          <option value="canalisation-bouchee">
            Canalisation bouchée
          </option>
          <option value="wc-bouche">WC bouché</option>
          <option value="evier-douche">Évier / Douche bouchée</option>
          <option value="reseau-egout">Réseau tout à l'égout</option>
          <option value="curage-preventif">Curage préventif</option>
          <option value="autre">Autre</option>
        </select>
        {errors.typeProbleme && (
          <p className="text-urgence text-xs mt-1">
            Veuillez sélectionner un type
          </p>
        )}
      </div>

      {/* Message */}
      <div>
        <label className="block text-sm font-bold text-primary mb-1">
          Précisions (optionnel)
        </label>
        <textarea
          {...register("message")}
          rows={3}
          placeholder="Décrivez brièvement votre situation..."
          className="w-full px-4 py-3 rounded-xl border border-gray-200
                     focus:border-accent focus:outline-none
                     focus:ring-2 focus:ring-accent/20 transition-all
                     resize-none"
        />
      </div>

      {/* RGPD */}
      <label className="flex items-start gap-3 cursor-pointer">
        <input
          type="checkbox"
          {...register("rgpd")}
          className="w-4 h-4 mt-0.5 accent-accent flex-shrink-0"
        />
        <span className="text-xs text-gray-medium">
          J'accepte que mes données soient utilisées pour traiter
          ma demande conformément à la{" "}
          
            href="/confidentialite"
            className="text-accent hover:underline"
          >
            politique de confidentialité
          </a>{" "}
          de {COMPANY.name}. *
        </span>
      </label>
      {errors.rgpd && (
        <p className="text-urgence text-xs">{errors.rgpd.message}</p>
      )}

      {/* Erreur globale */}
      {status === "error" && (
        <div className="flex items-center gap-2 bg-urgence/10
                        border border-urgence/20 rounded-xl p-4">
          <AlertCircle className="w-5 h-5 text-urgence flex-shrink-0" />
          <p className="text-urgence text-sm">
            Une erreur s'est produite. Veuillez appeler directement
            le {COMPANY.phone}.
          </p>
        </div>
      )}

      {/* Submit */}
      <button
        type="submit"
        onClick={handleSubmit(onSubmit)}
        disabled={status === "loading"}
        className="w-full flex items-center justify-center gap-3
                   bg-urgence hover:bg-urgence-hover text-white
                   font-black py-4 rounded-xl text-lg
                   transition-all shadow-urgence disabled:opacity-60"
      >
        {status === "loading" ? (
          <>
            <Loader2 className="w-5 h-5 animate-spin" />
            Envoi en cours...
          </>
        ) : (
          <>
            <Phone className="w-5 h-5" />
            {urgence ? "Envoyer ma demande urgente" : "Demander mon devis gratuit"}
          </>
        )}
      </button>

      <p className="text-center text-xs text-gray-medium">
        Ou appelez directement :{" "}
        
          href={`tel:${COMPANY.phoneRaw}`}
          className="font-bold text-urgence"
        >
          {COMPANY.phone}
        </a>
      </p>
    </div>
  )
}
```

## Fichier 5 — Page devis
Crée `src/app/devis/page.tsx` :

```typescript
import { Metadata } from "next"
import DevisForm from "@/components/forms/DevisForm"
import { COMPANY } from "@/config/constants"
import { Phone, Clock, Shield } from "lucide-react"

export const metadata: Metadata = {
  title: `Devis Gratuit Dégorgement | ${COMPANY.name}`,
  description:
    `Demandez votre devis gratuit pour un dégorgement en ` +
    `Île-de-France. ${COMPANY.name} répond rapidement, ` +
    `${COMPANY.availability}.`,
  alternates: {
    canonical: `${COMPANY.website}/devis`,
  },
}

export default function DevisPage() {
  return (
    <>
      <section className="bg-primary py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-2xl">
            <h1 className="text-4xl font-black text-white mb-4">
              Devis Gratuit —{" "}
              <span className="text-accent">Sans Engagement</span>
            </h1>
            <p className="text-white/70 text-lg">
              Remplissez le formulaire ci-dessous.
              Nos équipes vous recontactent dans les plus brefs
              délais pour établir votre devis.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-gray-light py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-5 gap-10 items-start">

            {/* Formulaire */}
            <div className="lg:col-span-3 bg-white rounded-2xl p-8
                            shadow-card border border-gray-100">
              <h2 className="text-xl font-black text-primary mb-6">
                Votre demande
              </h2>
              <DevisForm />
            </div>

            {/* Colonne info */}
            <div className="lg:col-span-2 space-y-5">
              <div className="bg-primary rounded-2xl p-6 text-white">
                <h3 className="font-black text-lg mb-4">
                  Besoin urgent ?
                </h3>
                <p className="text-white/70 text-sm mb-5">
                  N'attendez pas le formulaire.
                  Appelez directement nos équipes.
                </p>
                
                  href={`tel:${COMPANY.phoneRaw}`}
                  className="flex items-center justify-center gap-3
                             bg-urgence text-white font-black px-6
                             py-4 rounded-xl hover:bg-urgence-hover
                             transition-colors w-full"
                >
                  <Phone className="w-5 h-5" />
                  {COMPANY.phone}
                </a>
              </div>

              {[
                {
                  icon: Clock,
                  title: "Réponse rapide",
                  desc: "Nous traitons votre demande sous 2h",
                  color: "text-accent",
                  bg: "bg-accent/10",
                },
                {
                  icon: Shield,
                  title: "Devis 100% gratuit",
                  desc: "Sans engagement de votre part",
                  color: "text-green-600",
                  bg: "bg-green-500/10",
                },
              ].map(({ icon: Icon, title, desc, color, bg }) => (
                <div
                  key={title}
                  className="bg-white rounded-2xl p-5 border
                             border-gray-100 flex items-start gap-4"
                >
                  <div className={`w-10 h-10 ${bg} rounded-xl
                                   flex items-center justify-center
                                   flex-shrink-0`}>
                    <Icon className={`w-5 h-5 ${color}`} />
                  </div>
                  <div>
                    <div className="font-bold text-primary text-sm">
                      {title}
                    </div>
                    <div className="text-gray-medium text-xs mt-0.5">
                      {desc}
                    </div>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>
    </>
  )
}
```

Vérifie :
✅ /devis → formulaire affiché
✅ Validation Zod en temps réel
✅ Envoi → email reçu via Resend
✅ Success state affiché après envoi
✅ Urgence toggle change le CTA du bouton
✅ Autocomplete villes IDF fonctionnel


---

# ════════════════════════════════════════
# BLOC 9 — SANITY CMS
# ════════════════════════════════════════

En te basant sur le CLAUDE.md, configure Sanity CMS
pour permettre au client de gérer son contenu.

## Setup Sanity

```bash
npm create sanity@latest -- \
  --project groupe-canalnet \
  --dataset production \
  --template clean \
  --output-path sanity
```

## Fichier 1 — Client Sanity
Crée `src/lib/sanity.ts` :

```typescript
import { createClient } from "@sanity/client"
import imageUrlBuilder from "@sanity/image-url"

export const sanityClient = createClient({
  projectId: process.env.SANITY_PROJECT_ID!,
  dataset: process.env.SANITY_DATASET || "production",
  apiVersion: "2024-01-01",
  useCdn: true,
})

const builder = imageUrlBuilder(sanityClient)
export function urlFor(source: any) {
  return builder.image(source)
}
```

## Fichier 2 — Schémas Sanity
Crée `sanity/schemaTypes/blogPost.ts` :

```typescript
export default {
  name: "blogPost",
  title: "Article de blog",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Titre",
      type: "string",
      validation: (R: any) => R.required(),
    },
    {
      name: "slug",
      title: "Slug URL",
      type: "slug",
      options: { source: "title" },
      validation: (R: any) => R.required(),
    },
    {
      name: "excerpt",
      title: "Résumé (méta description)",
      type: "text",
      rows: 3,
    },
    {
      name: "mainImage",
      title: "Image principale",
      type: "image",
      options: { hotspot: true },
    },
    {
      name: "category",
      title: "Catégorie",
      type: "string",
      options: {
        list: [
          { title: "Conseils pratiques", value: "conseils" },
          { title: "Guides techniques", value: "guides" },
          { title: "Actualités", value: "actus" },
        ],
      },
    },
    {
      name: "publishedAt",
      title: "Date de publication",
      type: "datetime",
    },
    {
      name: "body",
      title: "Contenu",
      type: "array",
      of: [{ type: "block" }, { type: "image" }],
    },
  ],
  orderings: [
    {
      title: "Plus récents",
      name: "publishedAtDesc",
      by: [{ field: "publishedAt", direction: "desc" }],
    },
  ],
}
```

Crée `sanity/schemaTypes/review.ts` :

```typescript
export default {
  name: "review",
  title: "Avis client",
  type: "document",
  fields: [
    {
      name: "author",
      title: "Prénom + initiale",
      type: "string",
    },
    {
      name: "city",
      title: "Ville",
      type: "string",
    },
    {
      name: "rating",
      title: "Note (1-5)",
      type: "number",
      validation: (R: any) => R.min(1).max(5),
    },
    {
      name: "text",
      title: "Avis",
      type: "text",
      rows: 4,
    },
    {
      name: "publishedAt",
      title: "Date",
      type: "datetime",
    },
    {
      name: "verified",
      title: "Avis vérifié Google",
      type: "boolean",
      initialValue: true,
    },
  ],
}
```

Crée `sanity/schemaTypes/siteConfig.ts` :

```typescript
export default {
  name: "siteConfig",
  title: "Configuration du site",
  type: "document",
  __experimental_actions: ["update", "publish"],
  fields: [
    {
      name: "totalInterventions",
      title: "Nombre d'interventions réalisées",
      type: "number",
    },
    {
      name: "googleRating",
      title: "Note Google",
      type: "number",
    },
    {
      name: "googleReviewCount",
      title: "Nombre d'avis Google",
      type: "number",
    },
    {
      name: "heroVideos",
      title: "Vidéos témoignages YouTube",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "url",
              title: "URL YouTube",
              type: "url",
            },
            {
              name: "title",
              title: "Titre",
              type: "string",
            },
          ],
        },
      ],
    },
    {
      name: "beforeAfterImages",
      title: "Photos avant/après",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "before",
              title: "Avant",
              type: "image",
            },
            {
              name: "after",
              title: "Après",
              type: "image",
            },
            {
              name: "label",
              title: "Description",
              type: "string",
            },
          ],
        },
      ],
    },
  ],
}
```

Crée `sanity/schemaTypes/index.ts` :

```typescript
import blogPost from "./blogPost"
import review from "./review"
import siteConfig from "./siteConfig"

export const schemaTypes = [blogPost, review, siteConfig]
```

## Fichier 3 — Queries GROQ
Crée `src/lib/queries.ts` :

```typescript
import { sanityClient } from "./sanity"

export async function getBlogPosts() {
  return sanityClient.fetch(`
    *[_type == "blogPost"] | order(publishedAt desc) {
      title,
      "slug": slug.current,
      excerpt,
      mainImage,
      category,
      publishedAt
    }
  `)
}

export async function getBlogPost(slug: string) {
  return sanityClient.fetch(
    `*[_type == "blogPost" && slug.current == $slug][0] {
      title,
      "slug": slug.current,
      excerpt,
      mainImage,
      category,
      publishedAt,
      body
    }`,
    { slug }
  )
}

export async function getReviews() {
  return sanityClient.fetch(`
    *[_type == "review"] | order(publishedAt desc) {
      author, city, rating, text, publishedAt, verified
    }
  `)
}

export async function getSiteConfig() {
  return sanityClient.fetch(`
    *[_type == "siteConfig"][0] {
      totalInterventions,
      googleRating,
      googleReviewCount,
      heroVideos,
      beforeAfterImages
    }
  `)
}
```

Vérifie :
✅ Studio Sanity accessible sur /studio
✅ Schémas blogPost, review, siteConfig visibles
✅ getSiteConfig() retourne les données
✅ getBlogPosts() retourne un tableau


---

# ════════════════════════════════════════
# BLOC 10 — BLOG
# ════════════════════════════════════════

En te basant sur le CLAUDE.md et les queries Sanity
déjà configurées, construis les pages blog.

## Fichier 1 — Page liste blog
Crée `src/app/blog/page.tsx` :

```typescript
import { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { getBlogPosts } from "@/lib/queries"
import { urlFor } from "@/lib/sanity"
import { COMPANY } from "@/config/constants"
import { ArrowRight, Calendar, Tag } from "lucide-react"

export const metadata: Metadata = {
  title: `Blog Dégorgement & Plomberie | ${COMPANY.name}`,
  description:
    `Conseils, guides et actualités sur le dégorgement, ` +
    `l'entretien des canalisations et la plomberie en ` +
    `Île-de-France. ${COMPANY.name}.`,
  alternates: {
    canonical: `${COMPANY.website}/blog`,
  },
}

const CATEGORY_LABELS: Record<string, string> = {
  conseils: "Conseils pratiques",
  guides: "Guides techniques",
  actus: "Actualités",
}

const BLOG_FALLBACK = [
  {
    title: "Canalisation bouchée : que faire avant d'appeler ?",
    slug: "canalisation-bouchee-que-faire",
    excerpt:
      "Les bons gestes à adopter en attendant l'intervention " +
      "de nos équipes.",
    category: "conseils",
    publishedAt: "2024-11-15",
  },
  {
    title: "Curage préventif : pourquoi et à quelle fréquence ?",
    slug: "curage-preventif-frequence",
    excerpt:
      "Le curage préventif évite les bouchons critiques et " +
      "prolonge la vie de vos canalisations.",
    category: "guides",
    publishedAt: "2024-11-01",
  },
  {
    title:
      "Hydrocurage vs furetage : quelle technique choisir ?",
    slug: "hydrocurage-vs-furetage",
    excerpt:
      "Comparatif des deux techniques principales pour " +
      "déboucher une canalisation.",
    category: "guides",
    publishedAt: "2024-10-15",
  },
]

export default async function BlogPage() {
  let posts = []
  try {
    posts = await getBlogPosts()
  } catch {
    posts = BLOG_FALLBACK
  }

  return (
    <>
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
            <span className="text-white">Blog</span>
          </nav>

          <h1 className="text-4xl lg:text-5xl font-black text-white mb-4">
            Blog{" "}
            <span className="text-accent">{COMPANY.name}</span>
          </h1>
          <p className="text-white/70 text-lg max-w-2xl">
            Conseils pratiques, guides techniques et actualités
            sur le dégorgement et l'entretien des canalisations
            en Île-de-France.
          </p>
        </div>
      </section>

      <section className="bg-gray-light py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2
                          lg:grid-cols-3 gap-8">
            {posts.map((post: any) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="bg-white rounded-2xl overflow-hidden border
                           border-gray-100 hover:border-accent/30
                           hover:shadow-card-hover transition-all group"
              >
                {post.mainImage && (
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={urlFor(post.mainImage).width(600).url()}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-105
                                 transition-transform duration-500"
                    />
                  </div>
                )}
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    {post.category && (
                      <span className="flex items-center gap-1 text-xs
                                       font-bold text-accent
                                       bg-accent/10 px-2.5 py-1
                                       rounded-full">
                        <Tag className="w-3 h-3" />
                        {CATEGORY_LABELS[post.category] || post.category}
                      </span>
                    )}
                    {post.publishedAt && (
                      <span className="flex items-center gap-1 text-xs
                                       text-gray-medium">
                        <Calendar className="w-3 h-3" />
                        {new Date(post.publishedAt)
                          .toLocaleDateString("fr-FR")}
                      </span>
                    )}
                  </div>
                  <h2 className="font-black text-primary text-lg
                                 mb-2 line-clamp-2 group-hover:text-accent
                                 transition-colors">
                    {post.title}
                  </h2>
                  {post.excerpt && (
                    <p className="text-gray-medium text-sm
                                  line-clamp-3 mb-4">
                      {post.excerpt}
                    </p>
                  )}
                  <span className="flex items-center gap-2 text-sm
                                   font-bold text-accent
                                   group-hover:gap-3 transition-all">
                    Lire la suite
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
```

## Fichier 2 — Page article blog
Crée `src/app/blog/[slug]/page.tsx` :

```typescript
import { Metadata } from "next"
import { notFound } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { PortableText } from "@portabletext/react"
import { getBlogPost, getBlogPosts } from "@/lib/queries"
import { urlFor } from "@/lib/sanity"
import { COMPANY } from "@/config/constants"
import { Calendar, Phone } from "lucide-react"

export async function generateStaticParams() {
  try {
    const posts = await getBlogPosts()
    return posts.map((p: any) => ({ slug: p.slug }))
  } catch {
    return []
  }
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string }
}): Promise<Metadata> {
  const post = await getBlogPost(params.slug).catch(() => null)
  if (!post) return {}
  return {
    title: `${post.title} | ${COMPANY.name}`,
    description: post.excerpt,
    alternates: {
      canonical: `${COMPANY.website}/blog/${post.slug}`,
    },
  }
}

export default async function BlogPostPage({
  params,
}: {
  params: { slug: string }
}) {
  const post = await getBlogPost(params.slug).catch(() => null)
  if (!post) notFound()

  return (
    <>
      <section className="bg-primary py-16">
        <div className="max-w-4xl mx-auto px-4">
          <nav
            aria-label="Fil d'Ariane"
            className="flex items-center gap-2 text-white/50
                       text-sm mb-6"
          >
            <Link href="/" className="hover:text-white">
              Accueil
            </Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-white">
              Blog
            </Link>
            <span>/</span>
            <span className="text-white truncate max-w-xs">
              {post.title}
            </span>
          </nav>

          <div className="flex items-center gap-3 mb-4">
            {post.publishedAt && (
              <span className="flex items-center gap-1 text-sm
                               text-white/50">
                <Calendar className="w-4 h-4" />
                {new Date(post.publishedAt).toLocaleDateString("fr-FR")}
              </span>
            )}
          </div>

          <h1 className="text-3xl lg:text-4xl font-black text-white
                         mb-4 leading-tight">
            {post.title}
          </h1>
          {post.excerpt && (
            <p className="text-white/70 text-lg">{post.excerpt}</p>
          )}
        </div>
      </section>

      <article className="bg-white py-12">
        <div className="max-w-4xl mx-auto px-4">
          {post.mainImage && (
            <div className="relative h-64 md:h-96 rounded-2xl
                            overflow-hidden mb-10">
              <Image
                src={urlFor(post.mainImage).width(900).url()}
                alt={post.title}
                fill
                className="object-cover"
                priority
              />
            </div>
          )}

          <div className="prose prose-lg prose-primary max-w-none">
            {post.body && <PortableText value={post.body} />}
          </div>

          {/* CTA inline */}
          <div className="mt-12 bg-urgence rounded-2xl p-8 text-center">
            <h2 className="text-2xl font-black text-white mb-3">
              Besoin d'une intervention ?
            </h2>
            <p className="text-white/80 mb-6">
              {COMPANY.name} intervient sous 1h en Île-de-France,
              {COMPANY.availability}.
            </p>
            
              href={`tel:${COMPANY.phoneRaw}`}
              className="inline-flex items-center gap-3 bg-white
                         text-urgence font-black px-8 py-4 rounded-xl
                         hover:bg-red-50 transition-colors"
            >
              <Phone className="w-5 h-5" />
              {COMPANY.phone}
            </a>
          </div>
        </div>
      </article>
    </>
  )
}
```

Installe le renderer PortableText :
```bash
npm install @portabletext/react
```

Vérifie :
✅ /blog → liste articles (Sanity ou fallback)
✅ /blog/[slug] → article complet
✅ Images Sanity via urlFor
✅ CTA intégré dans chaque article


---

# ════════════════════════════════════════
# BLOC 11 — PAGES SECONDAIRES
# ════════════════════════════════════════

En te basant sur le CLAUDE.md, construis les pages
avis clients, à propos et contact.

## Page 1 — Avis clients
Crée `src/app/avis-clients/page.tsx` :

```typescript
import { Metadata } from "next"
import Link from "next/link"
import { Star, Quote } from "lucide-react"
import { getReviews } from "@/lib/queries"
import { COMPANY } from "@/config/constants"

export const metadata: Metadata = {
  title: `Avis Clients | ${COMPANY.name} – Île-de-France`,
  description:
    `Découvrez les avis de nos clients en Île-de-France. ` +
    `${COMPANY.googleRating}/5 sur Google avec ` +
    `${COMPANY.googleReviewCount} avis vérifiés. ` +
    `${COMPANY.name}.`,
}

const FALLBACK_REVIEWS = [
  {
    author: "Marie T.",
    city: "Paris 15ème",
    rating: 5,
    text: "Intervention ultra rapide un dimanche soir. Technicien " +
      "professionnel et propre. Problème résolu en 45 minutes.",
    publishedAt: "2024-11-10",
    verified: true,
  },
  {
    author: "Jean-Pierre M.",
    city: "Boulogne-Billancourt",
    rating: 5,
    text: "Syndic depuis 10 ans. Groupe CanalNet est notre " +
      "prestataire de confiance pour le curage annuel. Toujours fiables.",
    publishedAt: "2024-10-28",
    verified: true,
  },
  {
    author: "Sophie L.",
    city: "Versailles",
    rating: 5,
    text: "Appel à 23h, technicien sur place à minuit. " +
      "Problème réglé, devis respecté. Parfait.",
    publishedAt: "2024-10-15",
    verified: true,
  },
  {
    author: "Mohamed B.",
    city: "Saint-Denis",
    rating: 5,
    text: "Gérant d'un restaurant. Intervention en 45 minutes. " +
      "Impeccable.",
    publishedAt: "2024-09-30",
    verified: true,
  },
]

export default async function AvisClients() {
  let reviews = []
  try {
    reviews = await getReviews()
  } catch {
    reviews = FALLBACK_REVIEWS
  }
  if (!reviews.length) reviews = FALLBACK_REVIEWS

  const schemaReviews = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: COMPANY.name,
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: COMPANY.googleRating,
      reviewCount: COMPANY.googleReviewCount,
      bestRating: "5",
      worstRating: "1",
    },
    review: reviews.slice(0, 5).map((r: any) => ({
      "@type": "Review",
      author: { "@type": "Person", name: r.author },
      reviewRating: {
        "@type": "Rating",
        ratingValue: r.rating,
        bestRating: "5",
      },
      reviewBody: r.text,
      datePublished: r.publishedAt,
    })),
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schemaReviews),
        }}
      />

      <section className="bg-primary py-20">
        <div className="max-w-7xl mx-auto px-4">
          <nav
            aria-label="Fil d'Ariane"
            className="flex items-center gap-2 text-white/50 text-sm mb-8"
          >
            <Link href="/" className="hover:text-white">Accueil</Link>
            <span>/</span>
            <span className="text-white">Avis clients</span>
          </nav>

          <div className="max-w-2xl">
            <h1 className="text-4xl font-black text-white mb-4">
              Avis de nos clients{" "}
              <span className="text-accent">en Île-de-France</span>
            </h1>
            <div className="flex items-center gap-3">
              <div className="flex gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-6 h-6 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>
              <span className="text-white font-bold text-xl">
                {COMPANY.googleRating}/5
              </span>
              <span className="text-white/60">
                · {COMPANY.googleReviewCount} avis Google vérifiés
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-light py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2
                          lg:grid-cols-3 gap-6">
            {reviews.map((review: any, i: number) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-6 border
                           border-gray-100 hover:border-accent/20
                           hover:shadow-card transition-all"
              >
                <Quote
                  className="w-8 h-8 text-accent/20 mb-3"
                  aria-hidden="true"
                />
                <div className="flex gap-0.5 mb-3">
                  {Array.from({ length: review.rating }).map(
                    (_, j) => (
                      <Star
                        key={j}
                        className="w-4 h-4 fill-yellow-400
                                   text-yellow-400"
                      />
                    )
                  )}
                </div>
                <p className="text-primary/80 text-sm leading-relaxed
                               mb-5 italic">
                  "{review.text}"
                </p>
                <div className="flex items-center justify-between
                                pt-4 border-t border-gray-100">
                  <div>
                    <div className="font-bold text-primary text-sm">
                      {review.author}
                    </div>
                    <div className="text-gray-medium text-xs">
                      {review.city}
                    </div>
                  </div>
                  {review.verified && (
                    <span className="text-xs font-bold text-green-600
                                     bg-green-50 px-2 py-1 rounded-full">
                      ✓ Vérifié
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
```

## Page 2 — À propos
Crée `src/app/a-propos/page.tsx` :

```typescript
import { Metadata } from "next"
import Link from "next/link"
import {
  Shield, Clock, MapPin,
  Users, Award, CheckCircle
} from "lucide-react"
import { COMPANY } from "@/config/constants"

export const metadata: Metadata = {
  title: `À Propos | ${COMPANY.name} – Dégorgement IDF`,
  description:
    `Découvrez ${COMPANY.name}, spécialiste du dégorgement ` +
    `et curage en Île-de-France. Notre histoire, nos engagements, ` +
    `notre organisation.`,
}

export default function APropos() {
  return (
    <>
      <section className="bg-primary py-20">
        <div className="max-w-7xl mx-auto px-4">
          <nav
            aria-label="Fil d'Ariane"
            className="flex items-center gap-2 text-white/50 text-sm mb-8"
          >
            <Link href="/" className="hover:text-white">Accueil</Link>
            <span>/</span>
            <span className="text-white">À propos</span>
          </nav>
          <h1 className="text-4xl lg:text-5xl font-black text-white mb-4">
            À propos de{" "}
            <span className="text-accent">{COMPANY.name}</span>
          </h1>
          <p className="text-white/70 text-lg max-w-2xl">
            Spécialiste du dégorgement et curage de canalisations
            en Île-de-France depuis {COMPANY.foundedYear}.
          </p>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl lg:text-3xl font-black text-primary mb-6">
            Notre mission
          </h2>
          <div className="space-y-4 text-primary/70 leading-relaxed text-lg">
            <p>
              {COMPANY.name} a été créé pour répondre à un constat
              simple : les problèmes de canalisation surviennent
              à n'importe quelle heure, et les professionnels
              disponibles et réactifs manquent cruellement
              en Île-de-France.
            </p>
            <p>
              Notre organisation repose sur une couverture complète
              des 8 départements franciliens, une disponibilité
              permanente {COMPANY.availability}, et un engagement
              de transparence totale sur les tarifs et les méthodes.
            </p>
            <p>
              Chaque intervention, qu'il s'agisse d'un simple
              débouchage ou d'un curage complet de réseau collectif,
              est traitée avec le même niveau d'exigence et
              le même matériel professionnel.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-gray-light py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl font-black text-primary mb-10
                         text-center">
            Nos chiffres clés
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              {
                value: COMPANY.totalInterventions,
                label: "Interventions réalisées",
                icon: CheckCircle,
                color: "text-accent",
                bg: "bg-accent/10",
              },
              {
                value: COMPANY.departmentsCovered,
                label: "Départements IDF",
                icon: MapPin,
                color: "text-urgence",
                bg: "bg-urgence/10",
              },
              {
                value: COMPANY.availability,
                label: "Disponibilité",
                icon: Clock,
                color: "text-green-600",
                bg: "bg-green-500/10",
              },
              {
                value: `${COMPANY.googleRating}★`,
                label: `${COMPANY.googleReviewCount} avis Google`,
                icon: Award,
                color: "text-yellow-600",
                bg: "bg-yellow-500/10",
              },
            ].map(({ value, label, icon: Icon, color, bg }) => (
              <div
                key={label}
                className="bg-white rounded-2xl p-6 text-center
                           border border-gray-100"
              >
                <div className={`w-12 h-12 ${bg} rounded-xl
                                 flex items-center justify-center
                                 mx-auto mb-4`}>
                  <Icon className={`w-6 h-6 ${color}`} />
                </div>
                <div className={`text-2xl font-black ${color} mb-1`}>
                  {value}
                </div>
                <div className="text-gray-medium text-sm">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl font-black text-primary mb-10
                         text-center">
            Nos engagements
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: Clock,
                title: "Réactivité",
                desc: "Nous savons qu'une urgence de canalisation " +
                  "n'attend pas. Notre organisation garantit des " +
                  "délais d'intervention parmi les plus courts d'IDF.",
                color: "text-accent",
                bg: "bg-accent/10",
              },
              {
                icon: Shield,
                title: "Transparence",
                desc: "Devis gratuit et prix ferme avant toute " +
                  "intervention. Aucune facturation cachée, " +
                  "aucune surprise.",
                color: "text-green-600",
                bg: "bg-green-500/10",
              },
              {
                icon: Users,
                title: "Adaptabilité",
                desc: "Particuliers, copropriétés, syndics, " +
                  "professionnels : nous adaptons notre intervention " +
                  "à chaque contexte et chaque contrainte.",
                color: "text-purple-600",
                bg: "bg-purple-500/10",
              },
            ].map(({ icon: Icon, title, desc, color, bg }) => (
              <div
                key={title}
                className="bg-gray-light rounded-2xl p-8"
              >
                <div className={`w-12 h-12 ${bg} rounded-xl
                                 flex items-center justify-center mb-5`}>
                  <Icon className={`w-6 h-6 ${color}`} />
                </div>
                <h3 className="font-black text-primary text-lg mb-3">
                  {title}
                </h3>
                <p className="text-gray-medium text-sm leading-relaxed">
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
```

## Page 3 — Contact
Crée `src/app/contact/page.tsx` :

```typescript
import { Metadata } from "next"
import Link from "next/link"
import { Phone, Mail, Clock, MapPin } from "lucide-react"
import { COMPANY } from "@/config/constants"
import ContactFormWrapper from "@/components/forms/ContactFormWrapper"

export const metadata: Metadata = {
  title: `Contact | ${COMPANY.name} – Dégorgement IDF`,
  description:
    `Contactez ${COMPANY.name} pour toute demande de ` +
    `dégorgement en Île-de-France. Disponible ` +
    `${COMPANY.availability}.`,
}

export default function ContactPage() {
  return (
    <>
      <section className="bg-primary py-16">
        <div className="max-w-7xl mx-auto px-4">
          <nav
            aria-label="Fil d'Ariane"
            className="flex items-center gap-2 text-white/50 text-sm mb-8"
          >
            <Link href="/" className="hover:text-white">Accueil</Link>
            <span>/</span>
            <span className="text-white">Contact</span>
          </nav>
          <h1 className="text-4xl font-black text-white mb-4">
            Contactez{" "}
            <span className="text-accent">{COMPANY.name}</span>
          </h1>
          <p className="text-white/70 text-lg">
            Urgence ou renseignement, notre équipe vous répond
            rapidement.
          </p>
        </div>
      </section>

      <section className="bg-gray-light py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-5 gap-10">

            <div className="lg:col-span-3 bg-white rounded-2xl p-8
                            border border-gray-100">
              <h2 className="text-xl font-black text-primary mb-6">
                Envoyer un message
              </h2>
              <ContactFormWrapper />
            </div>

            <div className="lg:col-span-2 space-y-5">
              
                href={`tel:${COMPANY.phoneRaw}`}
                className="flex items-center gap-4 bg-urgence
                           rounded-2xl p-6 group"
              >
                <div className="w-14 h-14 bg-white/20 rounded-xl
                                flex items-center justify-center
                                flex-shrink-0">
                  <Phone className="w-7 h-7 text-white" />
                </div>
                <div>
                  <div className="font-black text-white text-xl">
                    {COMPANY.phone}
                  </div>
                  <div className="text-white/80 text-sm">
                    Urgences {COMPANY.availability}
                  </div>
                </div>
              </a>

              {[
                {
                  icon: Mail,
                  label: "Email",
                  value: COMPANY.email,
                  sub: "Réponse sous 2h",
                  href: `mailto:${COMPANY.email}`,
                  color: "text-accent",
                  bg: "bg-accent/10",
                },
                {
                  icon: Clock,
                  label: "Horaires",
                  value: COMPANY.availability,
                  sub: "Jours fériés inclus",
                  href: null,
                  color: "text-green-600",
                  bg: "bg-green-500/10",
                },
                {
                  icon: MapPin,
                  label: "Zone d'intervention",
                  value: "Île-de-France",
                  sub: `${COMPANY.departmentsCovered} départements`,
                  href: "/degorgement-ile-de-france",
                  color: "text-purple-600",
                  bg: "bg-purple-500/10",
                },
              ].map(({ icon: Icon, label, value,
                        sub, href, color, bg }) => {
                const Wrapper = href ? Link : "div"
                return (
                  <Wrapper
                    key={label}
                    href={href as string}
                    className="flex items-center gap-4 bg-white
                               rounded-2xl p-5 border border-gray-100
                               hover:border-accent/20 hover:shadow-card
                               transition-all"
                  >
                    <div className={`w-12 h-12 ${bg} rounded-xl
                                     flex items-center justify-center
                                     flex-shrink-0`}>
                      <Icon className={`w-6 h-6 ${color}`} />
                    </div>
                    <div>
                      <div className="text-gray-medium text-xs mb-0.5">
                        {label}
                      </div>
                      <div className="font-black text-primary">
                        {value}
                      </div>
                      <div className="text-gray-medium text-xs">
                        {sub}
                      </div>
                    </div>
                  </Wrapper>
                )
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
```

Crée `src/components/forms/ContactFormWrapper.tsx` :

```typescript
"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Loader2, CheckCircle, Send } from "lucide-react"
import { contactSchema, ContactFormData } from "@/lib/validations"
import { COMPANY } from "@/config/constants"

export default function ContactFormWrapper() {
  const [status, setStatus] = useState
    "idle" | "loading" | "success" | "error"
  >("idle")

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  })

  const onSubmit = async (data: ContactFormData) => {
    setStatus("loading")
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })
      if (!res.ok) throw new Error()
      setStatus("success")
      reset()
    } catch {
      setStatus("error")
    }
  }

  if (status === "success") {
    return (
      <div className="text-center py-10">
        <CheckCircle className="w-14 h-14 text-green-500 mx-auto mb-4" />
        <h3 className="text-xl font-black text-primary">
          Message envoyé !
        </h3>
        <p className="text-gray-medium mt-2">
          Nous vous répondons sous 2h.
        </p>
      </div>
    )
  }

  return (
    <div className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-bold text-primary mb-1">
            Nom *
          </label>
          <input
            {...register("nom")}
            className="w-full px-4 py-3 rounded-xl border border-gray-200
                       focus:border-accent focus:outline-none
                       focus:ring-2 focus:ring-accent/20"
          />
          {errors.nom && (
            <p className="text-urgence text-xs mt-1">
              {errors.nom.message}
            </p>
          )}
        </div>
        <div>
          <label className="block text-sm font-bold text-primary mb-1">
            Téléphone *
          </label>
          <input
            {...register("telephone")}
            type="tel"
            className="w-full px-4 py-3 rounded-xl border border-gray-200
                       focus:border-accent focus:outline-none
                       focus:ring-2 focus:ring-accent/20"
          />
          {errors.telephone && (
            <p className="text-urgence text-xs mt-1">
              {errors.telephone.message}
            </p>
          )}
        </div>
      </div>

      <div>
        <label className="block text-sm font-bold text-primary mb-1">
          Email *
        </label>
        <input
          {...register("email")}
          type="email"
          className="w-full px-4 py-3 rounded-xl border border-gray-200
                     focus:border-accent focus:outline-none
                     focus:ring-2 focus:ring-accent/20"
        />
        {errors.email && (
          <p className="text-urgence text-xs mt-1">
            {errors.email.message}
          </p>
        )}
      </div>

      <div>
        <label className="block text-sm font-bold text-primary mb-1">
          Message *
        </label>
        <textarea
          {...register("message")}
          rows={5}
          className="w-full px-4 py-3 rounded-xl border border-gray-200
                     focus:border-accent focus:outline-none
                     focus:ring-2 focus:ring-accent/20 resize-none"
        />
        {errors.message && (
          <p className="text-urgence text-xs mt-1">
            {errors.message.message}
          </p>
        )}
      </div>

      <label className="flex items-start gap-3 cursor-pointer">
        <input
          type="checkbox"
          {...register("rgpd")}
          className="w-4 h-4 mt-0.5 accent-accent flex-shrink-0"
        />
        <span className="text-xs text-gray-medium">
          J'accepte la{" "}
          <a href="/confidentialite" className="text-accent">
            politique de confidentialité
          </a>{" "}
          de {COMPANY.name}. *
        </span>
      </label>
      {errors.rgpd && (
        <p className="text-urgence text-xs">{errors.rgpd.message}</p>
      )}

      <button
        type="button"
        onClick={handleSubmit(onSubmit)}
        disabled={status === "loading"}
        className="w-full flex items-center justify-center gap-3
                   bg-accent hover:bg-accent-hover text-white font-black
                   py-4 rounded-xl transition-all disabled:opacity-60"
      >
        {status === "loading" ? (
          <Loader2 className="w-5 h-5 animate-spin" />
        ) : (
          <Send className="w-5 h-5" />
        )}
        Envoyer le message
      </button>
    </div>
  )
}
```

Vérifie :
✅ /avis-clients → grille avis avec Schema Review
✅ /a-propos → page institutionnelle complète
✅ /contact → formulaire contact fonctionnel
✅ Emails reçus via Resend


---

# ════════════════════════════════════════
# BLOC 12 — SEO FINAL
# ════════════════════════════════════════

En te basant sur le CLAUDE.md, finalise le SEO technique.

## Sitemap
Remplace `next-sitemap.config.js` :

```javascript
const { IDF_CITIES } = require("./src/lib/cities")
const { DEPARTMENTS } = require("./src/config/constants")

module.exports = {
  siteUrl: "https://www.groupe-canalnet.fr",
  generateRobotsTxt: true,
  changefreq: "weekly",
  priority: 0.7,
  robotsTxtOptions: {
    policies: [{ userAgent: "*", allow: "/" }],
    additionalSitemaps: [],
  },
  transform: async (config, path) => {
    const priorities = {
      "/": 1.0,
      "/degorgement-ile-de-france": 0.95,
      "/urgence-degorgement": 0.9,
      "/curage-tout-a-l-egout": 0.9,
      "/debouchage-canalisation": 0.9,
      "/hydrocurage": 0.9,
    }
    return {
      loc: path,
      changefreq: config.changefreq,
      priority: priorities[path] || config.priority,
      lastmod: new Date().toISOString(),
    }
  },
  additionalPaths: async (config) => {
    const deptPaths = DEPARTMENTS.map((d) => ({
      loc: `/${d.slug}`,
      changefreq: "monthly",
      priority: 0.85,
      lastmod: new Date().toISOString(),
    }))
    const cityPaths = IDF_CITIES.map((c) => ({
      loc: `/degorgement/${c.slug}`,
      changefreq: "monthly",
      priority: 0.6,
      lastmod: new Date().toISOString(),
    }))
    return [...deptPaths, ...cityPaths]
  },
}
```

Génère le sitemap :
```bash
npm run build && npx next-sitemap
```

## Pages légales
Crée les 3 pages légales obligatoires :
- `src/app/mentions-legales/page.tsx`
- `src/app/cgv/page.tsx`
- `src/app/confidentialite/page.tsx`

Chaque page suit ce template :

```typescript
import { Metadata } from "next"
import { COMPANY } from "@/config/constants"

export const metadata: Metadata = {
  title: `[TITRE] | ${COMPANY.name}`,
  robots: { index: false },
}

export default function Page() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-20">
      <h1 className="text-3xl font-black text-primary mb-8">
        [TITRE]
      </h1>
      <div className="prose prose-primary max-w-none">
        <p className="text-gray-medium">
          Contenu à compléter par le client ou son conseil juridique.
        </p>
        <p>
          <strong>Éditeur du site :</strong> {COMPANY.name}<br />
          <strong>Contact :</strong> {COMPANY.email}<br />
          <strong>Téléphone :</strong> {COMPANY.phone}
        </p>
      </div>
    </div>
  )
}
```

Vérifie :
✅ npm run build → 0 erreur TypeScript
✅ sitemap.xml généré avec toutes les URLs
✅ robots.txt correct
✅ 3 pages légales accessibles


---

# ════════════════════════════════════════
# BLOC 13 — PERFORMANCE & AUDIT FINAL
# ════════════════════════════════════════

En te basant sur le CLAUDE.md, optimise les performances
et prépare le déploiement Vercel.

## 1. Optimisation images
Dans tous les composants utilisant <img>,
remplace par next/image avec :
- width et height explicites
- priority={true} sur les images above-the-fold
- placeholder="blur" quand possible
- sizes adaptatif pour le responsive

## 2. Optimisation Leaflet
Vérifie que LeafletMap.tsx utilise bien :
```typescript
const LeafletMap = dynamic(() => import("./LeafletMap"), {
  ssr: false,
  loading: () => <div className="h-[450px] bg-gray-light
                                  rounded-2xl animate-pulse" />
})
```

## 3. Optimisation YouTube
Dans VideoTestimonials, implémenter le facade pattern :
```typescript
"use client"
import { useState } from "react"

function YouTubeFacade({ videoId, title }: {
  videoId: string
  title: string
}) {
  const [loaded, setLoaded] = useState(false)

  return (
    <div className="relative aspect-video rounded-xl overflow-hidden
                    bg-primary cursor-pointer group"
         onClick={() => setLoaded(true)}>
      {loaded ? (
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${videoId}
               ?autoplay=1`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write;
                 encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-full h-full"
        />
      ) : (
        <>
          <img
            src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
            alt={title}
            className="w-full h-full object-cover
                       group-hover:scale-105 transition-transform"
          />
          <div className="absolute inset-0 flex items-center
                          justify-center bg-black/30">
            <div className="w-16 h-16 bg-white/90 rounded-full
                            flex items-center justify-center
                            group-hover:scale-110 transition-transform">
              <div className="w-0 h-0 border-l-[20px] border-l-urgence
                              border-t-[12px] border-t-transparent
                              border-b-[12px] border-b-transparent
                              ml-1" />
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 p-4
                          bg-gradient-to-t from-black/60">
            <p className="text-white font-bold text-sm">{title}</p>
          </div>
        </>
      )}
    </div>
  )
}
```

## 4. next.config.js
Remplace `next.config.js` :

```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
      },
      {
        protocol: "https",
        hostname: "img.youtube.com",
      },
    ],
    formats: ["image/avif", "image/webp"],
  },
  compress: true,
  poweredByHeader: false,
  headers: async () => [
    {
      source: "/(.*)",
      headers: [
        {
          key: "X-Frame-Options",
          value: "DENY",
        },
        {
          key: "X-Content-Type-Options",
          value: "nosniff",
        },
        {
          key: "Referrer-Policy",
          value: "strict-origin-when-cross-origin",
        },
      ],
    },
    {
      source: "/videos/(.*)",
      headers: [
        {
          key: "Cache-Control",
          value: "public, max-age=31536000, immutable",
        },
      ],
    },
  ],
}

module.exports = nextConfig
```

## 5. Variables .env.local finales
Vérifie que `.env.local` contient :

```
NEXT_PUBLIC_SITE_URL=https://www.groupe-canalnet.fr
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
SANITY_PROJECT_ID=xxxxxxxx
SANITY_DATASET=production
SANITY_API_TOKEN=xxxxxxxxxxxxxxxx
RESEND_API_KEY=re_xxxxxxxxxxxxxxxx
```

## 6. Build final et vérification

```bash
npm run build
```

Checklist finale :
✅ Build sans erreur TypeScript
✅ ~100+ pages générées statiquement
✅ Sitemap.xml accessible sur /sitemap.xml
✅ Robots.txt correct sur /robots.txt
✅ Lighthouse mobile > 90
✅ Lighthouse desktop > 95
✅ Schema.org valide (tester sur
   https://validator.schema.org)
✅ Pages légales accessibles
✅ Formulaires fonctionnels (test envoi email)
✅ Carte Leaflet se charge correctement
✅ FloatingCTA visible sur mobile

## 7. Déploiement Vercel

```bash
npm install -g vercel
vercel --prod
```

Variables d'environnement à ajouter
dans le dashboard Vercel :
- SANITY_PROJECT_ID
- SANITY_DATASET
- SANITY_API_TOKEN
- RESEND_API_KEY
- NEXT_PUBLIC_GA_ID
```


**Claude Code lit le `CLAUDE.md` + le code existant à chaque session. Pas besoin de réexpliquer le contexte.** 🚀
