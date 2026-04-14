export const DEPARTMENTS_DATA = [
  {
    name: "Paris",
    code: "75",
    slug: "paris-75",
    population: 2161000,
    lat: 48.8566,
    lng: 2.3522,
    description:
      "Capitale française et plus grande ville d'Île-de-France, " +
      "Paris concentre des millions d'habitants répartis sur 20 arrondissements.",
    mainCities: ["Paris 15ème", "Paris 13ème", "Paris 18ème"],
    polygon: [],
  },
  {
    name: "Hauts-de-Seine",
    code: "92",
    slug: "hauts-de-seine-92",
    population: 1620000,
    lat: 48.8588,
    lng: 2.2208,
    description:
      "Département de la petite couronne ouest, " +
      "incluant Boulogne-Billancourt, Nanterre et Neuilly-sur-Seine.",
    mainCities: ["Boulogne-Billancourt", "Nanterre", "Courbevoie"],
    polygon: [],
  },
  {
    name: "Seine-Saint-Denis",
    code: "93",
    slug: "seine-saint-denis-93",
    population: 1670000,
    lat: 48.9200,
    lng: 2.4800,
    description:
      "Département nord-est de la petite couronne, " +
      "incluant Saint-Denis, Montreuil et Aubervilliers.",
    mainCities: ["Saint-Denis", "Montreuil", "Aubervilliers"],
    polygon: [],
  },
  {
    name: "Val-de-Marne",
    code: "94",
    slug: "val-de-marne-94",
    population: 1400000,
    lat: 48.7900,
    lng: 2.4700,
    description:
      "Département sud-est de la petite couronne, " +
      "incluant Créteil, Ivry-sur-Seine et Champigny-sur-Marne.",
    mainCities: ["Créteil", "Ivry-sur-Seine", "Champigny-sur-Marne"],
    polygon: [],
  },
  {
    name: "Essonne",
    code: "91",
    slug: "essonne-91",
    population: 1320000,
    lat: 48.6300,
    lng: 2.3000,
    description:
      "Département sud de la grande couronne, " +
      "incluant Évry-Courcouronnes, Massy et Corbeil-Essonnes.",
    mainCities: ["Évry-Courcouronnes", "Massy", "Corbeil-Essonnes"],
    polygon: [],
  },
  {
    name: "Yvelines",
    code: "78",
    slug: "yvelines-78",
    population: 1450000,
    lat: 48.8000,
    lng: 2.1300,
    description:
      "Département ouest de la grande couronne, " +
      "incluant Versailles, Saint-Germain-en-Laye et Mantes-la-Jolie.",
    mainCities: ["Versailles", "Saint-Germain-en-Laye", "Mantes-la-Jolie"],
    polygon: [],
  },
  {
    name: "Val-d'Oise",
    code: "95",
    slug: "val-d-oise-95",
    population: 1220000,
    lat: 49.0500,
    lng: 2.1000,
    description:
      "Département nord de la grande couronne, " +
      "incluant Cergy, Argenteuil et Sarcelles.",
    mainCities: ["Cergy", "Argenteuil", "Sarcelles"],
    polygon: [],
  },
  {
    name: "Seine-et-Marne",
    code: "77",
    slug: "seine-et-marne-77",
    population: 1420000,
    lat: 48.6000,
    lng: 2.8000,
    description:
      "Plus grand département d'Île-de-France, " +
      "incluant Meaux, Chelles et Melun.",
    mainCities: ["Meaux", "Chelles", "Melun"],
    polygon: [],
  },
]

export function getDepartmentByCode(code: string) {
  return DEPARTMENTS_DATA.find((d) => d.code === code)
}

export function getDepartmentBySlug(slug: string) {
  return DEPARTMENTS_DATA.find((d) => d.slug === slug)
}
