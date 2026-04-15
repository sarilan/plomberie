import { Metadata } from "next"
import ServicePageTemplate from "@/components/ServicePageTemplate"
import { COMPANY } from "@/config/constants"
import { generateServiceMetadata } from "@/lib/metadata"

export const metadata: Metadata = generateServiceMetadata(
  "Hydrocurage Canalisation",
  "hydrocurage",
  "Nettoyage haute pression canalisations en Île-de-France"
)

export default function Hydrocurage() {
  return (
    <ServicePageTemplate
      title="Hydrocurage Canalisation"
      subtitle="Haute pression jusqu'à 400 bars — Résultats durables"
      heroDescription={
        `L'hydrocurage est la technique la plus efficace ` +
        `pour nettoyer en profondeur les canalisations ` +
        `très encrassées. ${COMPANY.name} intervient ` +
        `en Île-de-France avec des équipements haute pression ` +
        `professionnels pour des résultats durables.`
      }
      whatIsIt={{
        title: "Qu'est-ce que l'hydrocurage ?",
        content: `
          <p>L'hydrocurage consiste à projeter de l'eau sous
          très haute pression (jusqu'à 400 bars) à l'intérieur
          des canalisations pour décoller, fragmenter et évacuer
          tous les dépôts accumulés.</p>
          <p>Cette technique est particulièrement efficace sur
          les encrassements importants : dépôts graisseux dans
          les réseaux de restauration, concrétions calcaires,
          racines pénétrantes, boues et sédiments dans les
          réseaux pluviaux.</p>
          <p>Contrairement au simple furetage, l'hydrocurage
          nettoie la totalité de la section de la canalisation
          et donne des résultats visibles et durables,
          vérifiés par caméra.</p>
        `,
      }}
      howWeDoIt={[
        {
          step: "01",
          title: "Diagnostic préalable",
          desc:
            "Évaluation de l'état d'encrassement par caméra " +
            "endoscopique. Détermination de la pression adaptée " +
            "et de la buse appropriée.",
        },
        {
          step: "02",
          title: "Hydrocurage haute pression",
          desc:
            "Injection d'eau sous haute pression avec buse rotative " +
            "ou directionnelle. Progression dans la canalisation " +
            "pour traitement complet sur toute la longueur.",
        },
        {
          step: "03",
          title: "Aspiration et contrôle caméra",
          desc:
            "Aspiration des matières décollées. " +
            "Passage caméra pour valider le résultat. " +
            "Rapport d'intervention avec photos remis au client.",
        },
      ]}
      useCases={[
        {
          title: "Canalisations très encrassées",
          desc: "Années de dépôts graisseux, calcaires " +
            "et organiques à décoller.",
        },
        {
          title: "Réseaux de restauration",
          desc: "Graisses culinaires accumulées " +
            "dans les canalisations de cuisine.",
        },
        {
          title: "Racines dans canalisations",
          desc: "Intrusion racinaire fragmentée " +
            "et évacuée par haute pression.",
        },
        {
          title: "Réseaux pluviaux et parking",
          desc: "Nettoyage des avaloirs, grilles et réseaux " +
            "de collecte des eaux pluviales.",
        },
        {
          title: "Canalisations grand diamètre",
          desc: "Collecteurs et canalisations de gros diamètre " +
            "en copropriété ou ERP.",
        },
        {
          title: "Après travaux de terrassement",
          desc: "Nettoyage des réseaux après intrusion " +
            "de sédiments ou boues.",
        },
      ]}
      whyUs={[
        {
          title: "Pression jusqu'à 400 bars",
          desc: "Efficace sur les encrassements " +
            "les plus importants.",
        },
        {
          title: "Caméra avant et après",
          desc: "Résultat vérifié et documenté " +
            "pour chaque intervention.",
        },
        {
          title: "Tous diamètres traités",
          desc: "Du siphon de cuisine aux collecteurs " +
            "de grand diamètre.",
        },
        {
          title: "Résultats durables",
          desc: "Nettoyage complet de la section, " +
            "pas seulement du bouchon.",
        },
      ]}
      faq={[
        {
          q: "L'hydrocurage peut-il endommager mes canalisations ?",
          a:
            `Non, si réalisé par des professionnels. ` +
            `Nos techniciens adaptent la pression ` +
            `au diamètre et au matériau de la canalisation ` +
            `(PVC, fonte, grès, béton). ` +
            `Un diagnostic préalable par caméra ` +
            `permet de détecter les fragilités éventuelles.`,
        },
        {
          q: "Combien de temps dure un hydrocurage ?",
          a:
            `Entre 1h et une demi-journée selon la longueur ` +
            `et l'état d'encrassement du réseau. ` +
            `Nos techniciens vous indiquent une estimation ` +
            `après le diagnostic initial.`,
        },
        {
          q: "L'hydrocurage est-il efficace contre les racines ?",
          a:
            `Oui. Les buses à haute pression fragmentent ` +
            `les intrusions racinaires. Pour les cas importants, ` +
            `nous recommandons un fraisage complémentaire ` +
            `suivi d'un curage.`,
        },
        {
          q: "Proposez-vous l'hydrocurage pour les parkings ?",
          a:
            `Oui. ${COMPANY.name} intervient sur les avaloirs, ` +
            `grilles, siphons de sol et réseaux pluviaux ` +
            `de parking et de sous-sol.`,
        },
      ]}
      relatedServices={[
        {
          name: "Curage tout à l'égout",
          href: "/curage-tout-a-l-egout",
          desc: "Réseau principal complet",
        },
        {
          name: "Dégorgement urgence",
          href: "/urgence-degorgement",
          desc: "Intervention immédiate",
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
