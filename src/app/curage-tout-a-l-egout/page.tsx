import { Metadata } from "next"
import ServicePageTemplate from "@/components/ServicePageTemplate"
import { COMPANY } from "@/config/constants"
import { generateServiceMetadata } from "@/lib/metadata"

export const metadata: Metadata = generateServiceMetadata(
  "Curage Tout à l'Égout",
  "curage-tout-a-l-egout",
  "Nettoyage complet du réseau principal d'assainissement en IDF"
)

export default function CurageToutEgout() {
  return (
    <ServicePageTemplate
      title="Curage Tout à l'Égout"
      subtitle="Nettoyage réseau principal — Particuliers & Copropriétés"
      heroDescription={
        `Le curage tout à l'égout est l'intervention la plus ` +
        `complète pour un réseau d'assainissement. ` +
        `${COMPANY.name} réalise le nettoyage en profondeur ` +
        `de vos canalisations principales avec des équipements ` +
        `professionnels haute performance.`
      }
      whatIsIt={{
        title: "Qu'est-ce que le curage tout à l'égout ?",
        content: `
          <p>Le réseau tout à l'égout désigne l'ensemble des
          canalisations qui collectent et évacuent les eaux usées
          d'un bâtiment vers le réseau public. Contrairement
          au simple débouchage, le curage consiste à nettoyer
          l'intégralité de ce réseau.</p>
          <p>Avec le temps, les dépôts de graisse, calcaire,
          déchets organiques et corps étrangers s'accumulent
          et réduisent progressivement la section utile
          des canalisations. Un curage préventif régulier
          évite les bouchons critiques et prolonge la durée
          de vie de votre réseau.</p>
          <p>${COMPANY.name} réalise le curage tout à l'égout
          pour les particuliers, les copropriétés, les restaurants
          et tous les professionnels en Île-de-France.</p>
        `,
      }}
      howWeDoIt={[
        {
          step: "01",
          title: "Inspection préalable par caméra",
          desc:
            "Passage d'une caméra endoscopique pour cartographier " +
            "l'état du réseau, localiser les zones d'encrassement " +
            "et identifier d'éventuelles anomalies structurelles.",
        },
        {
          step: "02",
          title: "Curage haute pression",
          desc:
            "Hydrocurage par injection d'eau sous haute pression " +
            "(jusqu'à 400 bars). Décollement et évacuation " +
            "de tous les dépôts. Traitement des angles " +
            "et coudes de canalisation.",
        },
        {
          step: "03",
          title: "Contrôle et compte-rendu",
          desc:
            "Passage caméra post-intervention pour valider " +
            "le résultat. Rapport photographique fourni. " +
            "Recommandations de fréquence d'entretien préventif.",
        },
      ]}
      useCases={[
        {
          title: "Copropriétés et immeubles",
          desc: "Curage des colonnes montantes et " +
            "réseaux collectifs annuellement.",
        },
        {
          title: "Restaurants et cuisines pro",
          desc: "Dégraissage et curage des canalisations " +
            "très sollicitées par les graisses.",
        },
        {
          title: "Maisons individuelles",
          desc: "Nettoyage préventif ou curatif du réseau " +
            "tout à l'égout privatif.",
        },
        {
          title: "Bouchon récurrent",
          desc: "Quand les débouchages répétés ne suffisent plus, " +
            "le curage traite la cause profonde.",
        },
        {
          title: "Avant vente immobilière",
          desc: "Curage et rapport d'état du réseau " +
            "pour rassurer acheteurs et notaires.",
        },
        {
          title: "ERP et établissements publics",
          desc: "Conformité réglementaire des réseaux " +
            "d'assainissement pour les ERP.",
        },
      ]}
      whyUs={[
        {
          title: "Caméra d'inspection incluse",
          desc: "Diagnostic précis avant et après pour " +
            "garantir le résultat.",
        },
        {
          title: "Hydrocureur haute pression",
          desc: "Matériel professionnel pour les " +
            "encrassements les plus importants.",
        },
        {
          title: "Rapport d'intervention",
          desc: "Document écrit avec photos pour " +
            "votre dossier ou votre syndic.",
        },
        {
          title: "Contrats d'entretien",
          desc: "Convention annuelle disponible pour " +
            "copropriétés et professionnels.",
        },
      ]}
      faq={[
        {
          q: "À quelle fréquence faut-il curer le réseau tout à l'égout ?",
          a:
            `Pour un particulier, un curage tous les 2 à 3 ans ` +
            `est recommandé à titre préventif. ` +
            `Pour un restaurant ou une copropriété, ` +
            `un curage annuel est conseillé.`,
        },
        {
          q: "Le curage nécessite-t-il de couper l'eau ?",
          a:
            `Pas nécessairement. Nos techniciens adaptent ` +
            `l'intervention pour minimiser la gêne. ` +
            `Dans certains cas, une coupure temporaire ` +
            `de courte durée peut être nécessaire.`,
        },
        {
          q: "Quelle est la différence entre curage et débouchage ?",
          a:
            `Le débouchage traite un bouchon ponctuel localisé. ` +
            `Le curage nettoie l'intégralité du réseau, ` +
            `y compris les zones non encore bloquées. ` +
            `C'est une intervention plus complète et durable.`,
        },
        {
          q: "Proposez-vous des contrats d'entretien annuels ?",
          a:
            `Oui. ${COMPANY.name} propose des conventions ` +
            `d'entretien annuelles pour copropriétés ` +
            `et professionnels, avec passage planifié ` +
            `et tarifs préférentiels.`,
        },
      ]}
      relatedServices={[
        {
          name: "Dégorgement urgence",
          href: "/urgence-degorgement",
          desc: "Intervention immédiate",
        },
        {
          name: "Hydrocurage",
          href: "/hydrocurage",
          desc: "Haute pression",
        },
        {
          name: "Débouchage canalisation",
          href: "/debouchage-canalisation",
          desc: "Évier, WC, douche",
        },
      ]}
    />
  )
}
