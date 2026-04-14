import { City } from "@/types"
import { COMPANY } from "@/config/constants"

export function generateCitySchema(city: City) {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["LocalBusiness", "Plumber"],
        "@id": `${COMPANY.website}/degorgement/${city.slug}/#localbusiness`,
        name: COMPANY.name,
        url: `${COMPANY.website}/degorgement/${city.slug}`,
        telephone: COMPANY.phoneRaw,
        description:
          `${COMPANY.name} assure le dégorgement urgence à ` +
          `${city.name}. Intervention sous 1h, 24h/24 et 7j/7.`,
        areaServed: {
          "@type": "City",
          name: city.name,
          containedInPlace: {
            "@type": "AdministrativeArea",
            name: city.department,
          },
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
          {
            "@type": "ListItem",
            position: 3,
            name: `Dégorgement ${city.department} (${city.departmentCode})`,
            item: `${COMPANY.website}/${
              city.departmentCode === "75" ? "paris-75" :
              city.departmentCode === "92" ? "hauts-de-seine-92" :
              city.departmentCode === "93" ? "seine-saint-denis-93" :
              city.departmentCode === "94" ? "val-de-marne-94" :
              city.departmentCode === "91" ? "essonne-91" :
              city.departmentCode === "78" ? "yvelines-78" :
              city.departmentCode === "95" ? "val-d-oise-95" :
              "seine-et-marne-77"
            }`,
          },
          {
            "@type": "ListItem",
            position: 4,
            name: `Dégorgement ${city.name}`,
            item: `${COMPANY.website}/degorgement/${city.slug}`,
          },
        ],
      },
      generateFAQSchema(city.name),
    ],
  }
}

export function generateFAQSchema(cityName: string) {
  return {
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: `Groupe CanalNet intervient-il en urgence à ${cityName} ?`,
        acceptedAnswer: {
          "@type": "Answer",
          text:
            `Oui. ${COMPANY.name} assure des interventions de dégorgement ` +
            `urgence à ${cityName} 24h/24 et 7j/7, week-ends ` +
            `et jours fériés inclus.`,
        },
      },
      {
        "@type": "Question",
        name: `Quel est le délai d'intervention à ${cityName} ?`,
        acceptedAnswer: {
          "@type": "Answer",
          text:
            `Nos équipes interviennent généralement sous 1 heure ` +
            `à ${cityName}. Appelez le ${COMPANY.phone} ` +
            `pour une prise en charge immédiate.`,
        },
      },
      {
        "@type": "Question",
        name: "Le devis est-il gratuit ?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            `Oui. ${COMPANY.name} établit un devis gratuit et ` +
            `sans engagement avant toute intervention.`,
        },
      },
      {
        "@type": "Question",
        name: "Quels types de canalisations traitez-vous ?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            `Nous intervenons sur tous types de canalisations : ` +
            `éviers, WC, douches, baignoires, colonnes montantes ` +
            `et réseaux tout à l'égout pour particuliers, ` +
            `copropriétés et professionnels.`,
        },
      },
    ],
  }
}
