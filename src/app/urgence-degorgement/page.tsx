import { Metadata } from "next"
import ServicePageTemplate from "@/components/ServicePageTemplate"
import { COMPANY } from "@/config/constants"
import { generateServiceMetadata } from "@/lib/metadata"

export const metadata: Metadata = generateServiceMetadata(
  "Dégorgement Urgence",
  "urgence-degorgement",
  "Intervention rapide pour tout dégorgement urgent en IDF"
)

const schemaService = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Dégorgement urgence Île-de-France",
  provider: {
    "@type": "LocalBusiness",
    name: COMPANY.name,
    telephone: COMPANY.phoneRaw,
  },
  areaServed: { "@type": "State", name: "Île-de-France" },
  availableChannel: {
    "@type": "ServiceChannel",
    servicePhone: COMPANY.phoneRaw,
    availableLanguage: "French",
  },
  hoursAvailable: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: [
      "Monday","Tuesday","Wednesday","Thursday",
      "Friday","Saturday","Sunday",
    ],
    opens: "00:00",
    closes: "23:59",
  },
}

export default function UrgenceDegorgement() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schemaService),
        }}
      />
      <ServicePageTemplate
        title="Dégorgement Urgence"
        subtitle="Intervention sous 1h — 24h/24, 7j/7"
        heroDescription={
          `Une canalisation bouchée en pleine nuit, ` +
          `un week-end ou un jour férié ? ` +
          `${COMPANY.name} est disponible ${COMPANY.availability} ` +
          `pour toute urgence de dégorgement en Île-de-France. ` +
          `Nos équipes interviennent sous 1 heure dans la majorité ` +
          `des communes franciliennes.`
        }
        whatIsIt={{
          title: "Qu'est-ce qu'un dégorgement d'urgence ?",
          content: `
            <p>Un dégorgement d'urgence désigne toute intervention
            réalisée en dehors des horaires habituels ou en réponse
            à une situation critique : débordement, refoulement
            d'eaux usées, blocage total des évacuations.</p>
            <p>Ces situations exigent une réponse immédiate pour
            éviter les dégâts des eaux, les nuisances sanitaires
            ou la paralysie complète d'un logement ou d'une
            activité professionnelle.</p>
            <p>${COMPANY.name} a structuré son organisation
            pour garantir une disponibilité permanente et des
            délais d'intervention parmi les plus courts
            d'Île-de-France.</p>
          `,
        }}
        howWeDoIt={[
          {
            step: "01",
            title: "Appel et diagnostic téléphonique",
            desc:
              "Notre service client répond en moins de 2 minutes. " +
              "Qualification de l'urgence par téléphone pour préparer " +
              "l'intervention et mobiliser le matériel adapté.",
          },
          {
            step: "02",
            title: "Déploiement et intervention sur site",
            desc:
              "Nos équipes arrivent avec le matériel complet. " +
              "Devis immédiat sur place avant tout commencement. " +
              "Dégorgement par furet, hydrocurage ou aspiration " +
              "selon le diagnostic.",
          },
          {
            step: "03",
            title: "Validation et remise en état",
            desc:
              "Test de circulation des eaux après intervention. " +
              "Nettoyage de la zone de travail. Compte-rendu " +
              "d'intervention remis au client.",
          },
        ]}
        useCases={[
          {
            title: "WC bouché ou en refoulement",
            desc: "Intervention prioritaire pour remédier au " +
              "blocage ou au retour d'eaux usées.",
          },
          {
            title: "Évier ou douche bouchés",
            desc: "Débouchage rapide des évacuations " +
              "de cuisine et de salle de bain.",
          },
          {
            title: "Canalisation principale bloquée",
            desc: "Dégorgement du réseau principal " +
              "desservant l'ensemble des équipements.",
          },
          {
            title: "Refoulement en cave ou parking",
            desc: "Intervention d'urgence sur les réseaux " +
              "collectifs en sous-sol.",
          },
          {
            title: "Urgence copropriété",
            desc: "Coordination rapide avec syndics et " +
              "gardiens pour interventions en immeuble.",
          },
          {
            title: "Urgence professionnelle",
            desc: "Restaurant, hôtel, commerce : " +
              "intervention prioritaire pour limiter " +
              "l'impact sur votre activité.",
          },
        ]}
        whyUs={[
          {
            title: `Disponible ${COMPANY.availability}`,
            desc: "Aucun créneau fermé. Nuits, week-ends " +
              "et jours fériés inclus.",
          },
          {
            title: "Intervention sous 1h",
            desc: "Organisation optimisée pour les délais " +
              "les plus courts d'IDF.",
          },
          {
            title: "Devis avant travaux",
            desc: "Transparence totale. Prix ferme et " +
              "définitif communiqué avant de commencer.",
          },
          {
            title: "Matériel professionnel",
            desc: "Hydrocureurs, caméras, furets : " +
              "le bon outil pour chaque situation.",
          },
        ]}
        faq={[
          {
            q: "Y a-t-il une majoration pour les interventions de nuit ?",
            a:
              `Les tarifs de nuit et de week-end sont communiqués ` +
              `lors du devis téléphonique, avant toute intervention. ` +
              `${COMPANY.name} s'engage à une transparence totale ` +
              `sur les prix.`,
          },
          {
            q: "Intervenez-vous le jour de Noël ou le 1er janvier ?",
            a:
              `Oui. ${COMPANY.name} est disponible 365 jours par an, ` +
              `jours fériés inclus. ` +
              `Aucune urgence ne reste sans réponse.`,
          },
          {
            q: "Que faire en attendant l'intervention ?",
            a:
              `Coupez l'alimentation en eau si possible. ` +
              `N'utilisez pas les autres équipements reliés ` +
              `au même réseau. Protégez le sol avec des serviettes. ` +
              `Nos techniciens vous guideront par téléphone.`,
          },
          {
            q: "Pouvez-vous intervenir en appartement ?",
            a:
              `Oui. Nous intervenons dans tous types de logements : ` +
              `appartements, maisons individuelles, immeubles en ` +
              `copropriété, locaux professionnels.`,
          },
        ]}
        relatedServices={[
          {
            name: "Curage tout à l'égout",
            href: "/curage-tout-a-l-egout",
            desc: "Nettoyage complet du réseau",
          },
          {
            name: "Débouchage canalisation",
            href: "/debouchage-canalisation",
            desc: "Évier, WC, douche",
          },
          {
            name: "Hydrocurage",
            href: "/hydrocurage",
            desc: "Haute pression",
          },
        ]}
      />
    </>
  )
}
