"use client"

import dynamic from "next/dynamic"
import Link from "next/link"
import { MapPin, ArrowRight } from "lucide-react"
import { DEPARTMENTS } from "@/config/constants"

// Chargement dynamique avec ssr:false — obligatoire pour Leaflet
const MapClient = dynamic(() => import("./MapClient"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full bg-gray-light animate-pulse flex items-center
                    justify-center">
      <div className="text-gray-medium text-sm">Chargement de la carte…</div>
    </div>
  ),
})

export default function MapSection() {
  return (
    <section
      className="py-20 bg-gray-light"
      aria-labelledby="map-heading"
    >
      <div className="max-w-7xl mx-auto px-4">

        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 text-accent font-semibold
                          text-sm uppercase tracking-widest mb-4">
            <span className="w-8 h-px bg-accent" />
            Zones d&apos;intervention
            <span className="w-8 h-px bg-accent" />
          </div>
          <h2
            id="map-heading"
            className="text-3xl sm:text-4xl font-black text-primary mb-4"
          >
            Présents dans toute{" "}
            <span className="text-accent">l&apos;Île-de-France</span>
          </h2>
          <p className="text-gray-medium max-w-2xl mx-auto">
            Nos équipes couvrent les 8 départements franciliens.
            Cliquez sur un département pour voir nos zones d&apos;intervention.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 items-start">

          {/* Carte */}
          <div className="lg:col-span-2 rounded-2xl overflow-hidden shadow-card-hover
                          border border-gray-100" style={{ height: "500px" }}>
            <MapClient />
          </div>

          {/* Liste départements */}
          <div className="space-y-3">
            <h3 className="text-base font-bold text-primary mb-4 flex items-center gap-2">
              <MapPin className="w-4 h-4 text-accent" />
              8 départements couverts
            </h3>
            {DEPARTMENTS.map((dept) => (
              <Link
                key={dept.code}
                href={`/${dept.slug}`}
                className="flex items-center justify-between p-4 bg-white rounded-xl
                           border border-gray-100 hover:border-accent/40
                           hover:shadow-accent transition-all group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary flex items-center
                                  justify-center flex-shrink-0 text-white font-bold text-sm
                                  group-hover:bg-accent transition-colors">
                    {dept.code}
                  </div>
                  <div>
                    <div className="font-semibold text-primary text-sm">
                      {dept.name}
                    </div>
                    <div className="text-xs text-gray-medium">
                      Dégorgement urgence
                    </div>
                  </div>
                </div>
                <ArrowRight className="w-4 h-4 text-gray-medium group-hover:text-accent
                                       group-hover:translate-x-0.5 transition-all" />
              </Link>
            ))}
            <Link
              href="/degorgement-ile-de-france"
              className="flex items-center justify-center gap-2 p-4 bg-accent text-white
                         font-bold rounded-xl hover:bg-accent/90 transition-colors text-sm"
            >
              Voir toutes les villes IDF
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
