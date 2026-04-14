import { Metadata } from "next"
import { City } from "@/types"
import { COMPANY } from "@/config/constants"

export function generateCityMetadata(city: City): Metadata {
  const title =
    `Dégorgement ${city.name} | ${COMPANY.name} – Urgence 24h/7j`
  const description =
    `Besoin d'un dégorgement urgent à ${city.name} (${city.departmentCode}) ? ` +
    `${COMPANY.name} intervient sous 1h, 24h/24 et 7j/7. ` +
    `Curage tout à l'égout, hydrocurage. Devis gratuit – Appelez maintenant.`

  return {
    title,
    description,
    alternates: {
      canonical: `${COMPANY.website}/degorgement/${city.slug}`,
    },
    openGraph: {
      title,
      description,
      url: `${COMPANY.website}/degorgement/${city.slug}`,
      images: [
        {
          url: "/images/og/og-default.jpg",
          width: 1200,
          height: 630,
          alt: `${COMPANY.name} – Dégorgement ${city.name}`,
        },
      ],
    },
  }
}

export function generateDepartmentMetadata(
  deptName: string,
  deptCode: string,
  deptSlug: string
): Metadata {
  const title =
    `Dégorgement ${deptName} (${deptCode}) | ` +
    `${COMPANY.name} – Urgence 24h/7j`
  const description =
    `${COMPANY.name} assure le dégorgement et curage canalisation ` +
    `dans tout le département ${deptName} (${deptCode}). ` +
    `Intervention sous 1h, 24h/24 et 7j/7. Devis gratuit.`

  return {
    title,
    description,
    alternates: {
      canonical: `${COMPANY.website}/${deptSlug}`,
    },
    openGraph: {
      title,
      description,
      url: `${COMPANY.website}/${deptSlug}`,
    },
  }
}

export function generateServiceMetadata(
  serviceName: string,
  serviceSlug: string,
  serviceDescription: string
): Metadata {
  const title =
    `${serviceName} Île-de-France | ${COMPANY.name} – 24h/7j`
  const description =
    `${COMPANY.name} – ${serviceDescription}. ` +
    `Intervention rapide en Île-de-France, 24h/24 et 7j/7. ` +
    `Devis gratuit – Appelez le ${COMPANY.phone}.`

  return {
    title,
    description,
    alternates: {
      canonical: `${COMPANY.website}/${serviceSlug}`,
    },
  }
}
