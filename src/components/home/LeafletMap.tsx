"use client"

import { useEffect } from "react"
import { MapContainer, TileLayer, Marker, Popup, useMap } from
  "react-leaflet"
import L from "leaflet"
import "leaflet/dist/leaflet.css"
import { IDF_CITIES } from "@/lib/cities"
import Link from "next/link"

// Fix icônes Leaflet avec Next.js
const customIcon = L.divIcon({
  className: "",
  html: `
    <div style="
      width:28px;height:28px;
      background:#0066FF;
      border:3px solid white;
      border-radius:50%;
      box-shadow:0 2px 8px rgba(0,102,255,0.4);
      display:flex;align-items:center;justify-content:center;
    ">
      <div style="
        width:8px;height:8px;
        background:white;
        border-radius:50%;
      "></div>
    </div>
  `,
  iconSize: [28, 28],
  iconAnchor: [14, 14],
  popupAnchor: [0, -16],
})

// Villes principales à afficher (population > 30 000)
const MAIN_CITIES = IDF_CITIES.filter((c) => c.population > 30000)

function SetView() {
  const map = useMap()
  useEffect(() => {
    map.setView([48.8566, 2.3522], 9)
  }, [map])
  return null
}

export default function LeafletMap() {
  return (
    <MapContainer
      center={[48.8566, 2.3522]}
      zoom={9}
      style={{ height: "450px", width: "100%" }}
      scrollWheelZoom={false}
      aria-label="Carte des zones d'intervention Groupe CanalNet"
    >
      <SetView />
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {MAIN_CITIES.map((city) => (
        <Marker
          key={city.slug}
          position={[city.lat, city.lng]}
          icon={customIcon}
        >
          <Popup>
            <div className="text-center p-1">
              <p className="font-bold text-primary text-sm mb-1">
                {city.name}
              </p>
              <p className="text-xs text-gray-medium mb-2">
                Dégorgement urgence disponible
              </p>
              <Link
                href={`/degorgement/${city.slug}`}
                className="text-xs text-accent font-semibold
                           hover:underline"
              >
                Voir la page →
              </Link>
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  )
}
