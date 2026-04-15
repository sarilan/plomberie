"use client"

import dynamic from "next/dynamic"
import { MapPin } from "lucide-react"
import { DEPARTMENTS } from "@/config/constants"

// Chargement dynamique obligatoire (Leaflet = client only)
const LeafletMap = dynamic(
  () => import("./LeafletMap"),
  {
    ssr: false,
    loading: () => (
      <div
        className="w-full h-[450px] bg-gray-light rounded-2xl
                   flex items-center justify-center"
        aria-label="Chargement de la carte"
      >
        <div className="text-center text-gray-medium">
          <MapPin className="w-8 h-8 mx-auto mb-2 animate-bounce" />
          <p className="text-sm">Chargement de la carte...</p>
        </div>
      </div>
    ),
  }
)

export default function MapSection() {
  return (
    <section
      className="bg-gray-light py-20"
      aria-labelledby="map-title"
    >
      <div className="max-w-7xl mx-auto px-4">

        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-accent/10
                          text-accent font-semibold text-sm px-4 py-1.5
                          rounded-full mb-4">
            <MapPin className="w-4 h-4" />
            Zone d&apos;intervention
          </div>
          <h2
            id="map-title"
            className="text-3xl lg:text-4xl font-black text-primary mb-4"
          >
            Groupe CanalNet intervient dans{" "}
            <span className="text-accent">
              toute l&apos;Île-de-France
            </span>
          </h2>
          <p className="text-gray-medium max-w-xl mx-auto">
            {DEPARTMENTS.length} départements couverts,
            80+ communes desservies.
            Un seul numéro pour toute la région.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 items-start">

          {/* Carte */}
          <div className="lg:col-span-2">
            <div className="rounded-2xl overflow-hidden shadow-card-hover
                            border border-white">
              <LeafletMap />
            </div>
          </div>

          {/* Liste départements */}
          <div className="space-y-3">
            <h3 className="font-bold text-primary text-lg mb-5">
              Nos départements
            </h3>
            {DEPARTMENTS.map((dept) => (
              <a
                key={dept.code}
                href={`/${dept.slug}`}
                className="flex items-center justify-between p-4
                           bg-white rounded-xl border border-gray-100
                           hover:border-accent/30 hover:shadow-card
                           transition-all group"
              >
                <div className="flex items-center gap-3">
                  <div
                    className="w-10 h-10 bg-accent/10 rounded-lg
                               flex items-center justify-center
                               group-hover:bg-accent/20 transition-colors"
                  >
                    <span className="text-accent font-black text-sm">
                      {dept.code}
                    </span>
                  </div>
                  <div>
                    <div className="font-bold text-primary text-sm">
                      {dept.name}
                    </div>
                    <div className="text-gray-medium text-xs">
                      Intervention 24h/7j
                    </div>
                  </div>
                </div>
                <MapPin
                  className="w-4 h-4 text-accent
                             group-hover:scale-110 transition-transform"
                />
              </a>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
