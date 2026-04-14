export const COMPANY = {
  name: "Groupe CanalNet",
  legalName: "Groupe CanalNet",
  phone: "XX XX XX XX XX",
  phoneRaw: "0XXXXXXXXX",
  whatsapp: "33XXXXXXXXX",
  email: "contact@groupe-canalnet.fr",
  address: {
    street: "",
    city: "Paris",
    region: "Île-de-France",
    country: "France",
    postalCode: "",
  },
  website: "https://www.groupe-canalnet.fr",
  foundedYear: "XXXX",
  totalInterventions: "X XXX",
  citiesCovered: "80+",
  departmentsCovered: "8",
  googleRating: "4.9",
  googleReviewCount: "XXX",
  availability: "24h/24, 7j/7",
  responseTime: "1h",
  social: {
    facebook: "",
    instagram: "",
    linkedin: "",
    youtube: "",
  },
} as const

export const DEPARTMENTS = [
  { name: "Paris", code: "75", slug: "paris-75" },
  { name: "Seine-et-Marne", code: "77", slug: "seine-et-marne-77" },
  { name: "Yvelines", code: "78", slug: "yvelines-78" },
  { name: "Essonne", code: "91", slug: "essonne-91" },
  { name: "Hauts-de-Seine", code: "92", slug: "hauts-de-seine-92" },
  { name: "Seine-Saint-Denis", code: "93", slug: "seine-saint-denis-93" },
  { name: "Val-de-Marne", code: "94", slug: "val-de-marne-94" },
  { name: "Val-d'Oise", code: "95", slug: "val-d-oise-95" },
] as const

export const SERVICES = [
  {
    name: "Dégorgement Urgence",
    slug: "urgence-degorgement",
    icon: "AlertTriangle",
    description: "Intervention rapide 24h/24, 7j/7",
  },
  {
    name: "Curage Tout à l'Égout",
    slug: "curage-tout-a-l-egout",
    icon: "Waves",
    description: "Nettoyage complet du réseau principal",
  },
  {
    name: "Débouchage Canalisation",
    slug: "debouchage-canalisation",
    icon: "Wrench",
    description: "Évier, WC, douche, baignoire",
  },
  {
    name: "Hydrocurage",
    slug: "hydrocurage",
    icon: "Droplets",
    description: "Haute pression pour réseaux encrassés",
  },
] as const

export const COLORS = {
  primary: "#0A1628",
  accent: "#0066FF",
  urgence: "#E63946",
  orange: "#FF6B35",
  white: "#FFFFFF",
  grayLight: "#F4F6F9",
} as const
