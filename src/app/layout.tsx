import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { COMPANY } from "@/config/constants"
import Layout from "@/components/layout"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

export const metadata: Metadata = {
  metadataBase: new URL(COMPANY.website),
  title: {
    default: `${COMPANY.name} | Dégorgement Urgence Île-de-France 24h/7j`,
    template: `%s | ${COMPANY.name}`,
  },
  description:
    `${COMPANY.name}, spécialiste du dégorgement et curage tout à l'égout ` +
    `en Île-de-France. Intervention rapide 24h/24, 7j/7 dans les ` +
    `${COMPANY.departmentsCovered} départements franciliens. Devis gratuit.`,
  keywords: [
    "dégorgement Île-de-France",
    "débouchage urgence Paris",
    "curage tout à l'égout IDF",
    "hydrocurage canalisation",
    "plombier urgence 24h",
    "Groupe CanalNet",
  ],
  authors: [{ name: COMPANY.name }],
  creator: COMPANY.name,
  publisher: COMPANY.name,
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: COMPANY.website,
    siteName: COMPANY.name,
    title: `${COMPANY.name} | Dégorgement Urgence Île-de-France 24h/7j`,
    description:
      `Spécialiste dégorgement urgence en Île-de-France. ` +
      `Intervention sous 1h, 24h/24 et 7j/7.`,
    images: [
      {
        url: "/images/og/og-default.jpg",
        width: 1200,
        height: 630,
        alt: `${COMPANY.name} – Dégorgement urgence Île-de-France`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${COMPANY.name} | Dégorgement Urgence IDF`,
    description: "Intervention dégorgement sous 1h en Île-de-France.",
    images: ["/images/og/og-default.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: COMPANY.website,
  },
  verification: {
    google: "À_RENSEIGNER",
  },
}

// Schema.org Organization global
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": ["Organization", "LocalBusiness", "Plumber"],
  "@id": `${COMPANY.website}/#organization`,
  name: COMPANY.name,
  url: COMPANY.website,
  telephone: COMPANY.phoneRaw,
  email: COMPANY.email,
  description:
    "Spécialiste du dégorgement et curage canalisation en Île-de-France. " +
    "Disponible 24h/24, 7j/7.",
  areaServed: {
    "@type": "State",
    name: "Île-de-France",
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: [
      "Monday", "Tuesday", "Wednesday", "Thursday",
      "Friday", "Saturday", "Sunday",
    ],
    opens: "00:00",
    closes: "23:59",
  },
  priceRange: "€€",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" className={inter.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
      </head>
      <body className="font-sans antialiased bg-white text-primary">
        <Layout>
          {children}
        </Layout>
      </body>
    </html>
  )
}
