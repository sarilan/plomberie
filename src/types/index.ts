export type Department = {
  name: string
  code: string
  slug: string
}

export type City = {
  name: string
  slug: string
  department: string
  departmentCode: string
  population: number
  lat: number
  lng: number
}

export type Service = {
  name: string
  slug: string
  icon: string
  description: string
}

export type Review = {
  id: string
  author: string
  city: string
  rating: number
  text: string
  date: string
  verified: boolean
}

export type BlogPost = {
  title: string
  slug: string
  excerpt: string
  content: string
  image: string
  date: string
  category: string
}
