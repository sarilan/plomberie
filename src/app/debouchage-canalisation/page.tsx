import { Metadata } from "next"
import ServicePageTemplate from "@/components/ServicePageTemplate"
import { COMPANY } from "@/config/constants"
import { generateServiceMetadata } from "@/lib/metadata"

export const metadata: Metadata = generateServiceMetadata(
  "Débouchage Canalisation",
  "debouchage-canalisation",
  "Débouchage évier, WC, douche et baignoire en Île-de-France"
)

export default function DebouchageCanalisation() {
  return (
    <ServicePageTemplate
      title="Débouchage Canalisation"
      subtitle="Évier, WC, Douche, Baignoire — Intervention rapide"
      heroDescription={
        `Évier qui ne s'écoule plus, WC obstrué, douche stagnante ? ` +
        `${COMPANY.name} intervient rapidement pour déboucher ` +
        `toutes vos canalisations en Île-de-France. ` +
        `Nos techniciens disposent du matériel adapté ` +
        `à chaque type de bouchon.`
      }
      whatIsIt={{
        title: "Débouchage de canalisation : quand intervenir ?",
        content: `
          <p>Un bouchon de canalisation peut survenir à tout moment
          et dans n'importe quelle pièce d'eau. Les causes sont
          multiples : accumulation de cheveux, dépôts de savon,
          graisses alimentaires, calcaire ou corps étrangers.</p>
          <p>Un bouchon non traité s'aggrave progressivement
          jusqu'au blocage complet, voire au refoulement d'eaux
          usées. Une intervention rapide limite les dégâts
          et évite des travaux plus importants.</p>
          <p>${COMPANY.name} traite tous types de bouchons
          sans destruction : furet électrique, ventouse
          professionnelle ou hydrocurage ciblé selon
          la localisation et la nature du bouchon.</p>
        `,
      }}
      howWeDoIt={[
        {
          step: "01",
          title: "Identification du bouchon",
          desc:
            "Localisation précise du bouchon par inspection visuelle " +
            "et tests d'écoulement. Choix de la méthode adaptée " +
            "selon la nature et la position du blocage.",
        },
        {
          step: "02",
          title: "Débouchage sans destruction",
          desc:
            "Utilisation du furet électrique, ventouse haute pression " +
            "ou hydrocurage ciblé. Intervention propre, " +
            "sans ouverture de mur ni démontage systématique.",
        },
        {
          step: "03",
          title: "Test et vérification",
          desc:
            "Vérification de l'écoulement après débouchage. " +
            "Conseils sur les causes du bouchon et les gestes " +
            "pour éviter la récidive.",
        },
      ]}
      useCases={[
        {
          title: "Évier de cuisine bouché",
          desc: "Accumulation de graisses et résidus alimentaires " +
            "dans le siphon et la canalisation.",
        },
        {
          title: "WC bouché",
          desc: "Corps étranger, excès de papier ou dépôt " +
            "calcaire obstruant la sortie.",
        },
        {
          title: "Douche qui stagne",
          desc: "Cheveux et savon accumulés dans " +
            "le siphon ou la canalisation d'évacuation.",
        },
        {
          title: "Baignoire bouchée",
          desc: "Siphon de baignoire obstrué, " +
            "écoulement lent ou nul.",
        },
        {
          title: "Lave-vaisselle ou machine à laver",
          desc: "Canalisation d'évacuation d'appareil électroménager " +
            "bouchée ou en refoulement.",
        },
        {
          title: "Lavabo salle de bain",
          desc: "Siphon obstrué par calcaire et dépôts " +
            "de produits cosmétiques.",
        },
      ]}
      whyUs={[
        {
          title: "Sans destruction",
          desc: "Pas d'ouverture de mur systématique. " +
            "Intervention propre et ciblée.",
        },
        {
          title: "Matériel complet",
          desc: "Furet, ventouse pro, hydrocurage : " +
            "le bon outil pour chaque bouchon.",
        },
        {
          title: "Intervention rapide",
          desc: "Sous 1h en Île-de-France, " +
            `${COMPANY.availability}.`,
        },
        {
          title: "Conseils inclus",
          desc: "Nos techniciens expliquent les causes " +
            "et comment prévenir la récidive.",
        },
      ]}
      faq={[
        {
          q: "Peut-on déboucher soi-même avant d'appeler ?",
          a:
            `Pour un bouchon superficiel, une ventouse standard ` +
            `peut suffire. En revanche, l'utilisation de produits ` +
            `chimiques déboucheurs est déconseillée : ` +
            `ils abîment les canalisations et sont rarement ` +
            `efficaces sur les bouchons profonds. ` +
            `Si le bouchon résiste, contactez nos équipes.`,
        },
        {
          q: "Le débouchage abîme-t-il les canalisations ?",
          a:
            `Non. Les techniques utilisées par ${COMPANY.name} ` +
            `(furet professionnel, hydrocurage basse pression ` +
            `pour les petits diamètres) sont adaptées aux ` +
            `canalisations domestiques et ne les endommagent pas.`,
        },
        {
          q: "Intervenez-vous en location ou en appartement ?",
          a:
            `Oui. Nous intervenons quel que soit le statut ` +
            `d'occupation : propriétaire, locataire, gestionnaire. ` +
            `Un bon de commande ou accord du propriétaire ` +
            `peut être demandé selon les situations.`,
        },
        {
          q: "Combien de temps dure une intervention de débouchage ?",
          a:
            `Un débouchage standard dure entre 30 minutes ` +
            `et 1h30 selon la complexité. ` +
            `Nos techniciens vous informent dès le diagnostic ` +
            `sur place.`,
        },
      ]}
      relatedServices={[
        {
          name: "Dégorgement urgence",
          href: "/urgence-degorgement",
          desc: "Intervention immédiate",
        },
        {
          name: "Curage tout à l'égout",
          href: "/curage-tout-a-l-egout",
          desc: "Réseau principal complet",
        },
        {
          name: "Hydrocurage",
          href: "/hydrocurage",
          desc: "Haute pression",
        },
      ]}
    />
  )
}
