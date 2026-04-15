"use client"

import { useEffect } from "react"
import { MapContainer, TileLayer, Marker, Popup, ZoomControl } from "react-leaflet"
import L from "leaflet"
import { IDF_CITIES } from "@/lib/cities"
import { DEPARTMENTS_DATA } from "@/lib/departments"

// Fix Leaflet default icon path in Next.js
delete (L.Icon.Default.prototype as unknown as Record<string, unknown>)._getIconUrl
L.Icon.Default.mergeOptions({
  iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
})

const DEPT_ICON = new L.DivIcon({
  html: `<div style="
    background:#0066FF;color:#fff;
    border-radius:50%;width:32px;height:32px;
    display:flex;align-items:center;justify-content:center;
    font-weight:700;font-size:11px;
    border:2px solid #fff;
    box-shadow:0 2px 8px rgba(0,0,0,0.3)
  ">IDF</div>`,
  className: "",
  iconSize: [32, 32],
  iconAnchor: [16, 16],
})

const CITY_ICON = new L.DivIcon({
  html: `<div style="
    background:#E63946;
    width:10px;height:10px;border-radius:50%;
    border:2px solid #fff;
    box-shadow:0 1px 4px rgba(0,0,0,0.4)
  "></div>`,
  className: "",
  iconSize: [10, 10],
  iconAnchor: [5, 5],
})

export default function MapClient() {
  useEffect(() => {
    // Import leaflet CSS dynamically
    const link = document.createElement("link")
    link.rel = "stylesheet"
    link.href = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"
    document.head.appendChild(link)
    return () => { document.head.removeChild(link) }
  }, [])

  return (
    <MapContainer
      center={[48.8566, 2.3522]}
      zoom={10}
      zoomControl={false}
      className="w-full h-full"
      aria-label="Carte des zones d'intervention en Île-de-France"
    >
      <ZoomControl position="bottomright" />
      <TileLayer
        url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
        attribution='&copy; <a href="https://carto.com/">CARTO</a>'
      />

      {/* Marqueurs départements */}
      {DEPARTMENTS_DATA.map((dept) => (
        <Marker
          key={dept.code}
          position={[dept.lat, dept.lng]}
          icon={DEPT_ICON}
        >
          <Popup>
            <div className="text-center p-1">
              <div className="font-bold text-primary text-sm">{dept.name}</div>
              <div className="text-xs text-gray-500 mb-2">
                {dept.mainCities.join(", ")}
              </div>
              <a
                href={`/${dept.slug}`}
                className="text-xs text-blue-600 underline"
              >
                Voir les interventions →
              </a>
            </div>
          </Popup>
        </Marker>
      ))}

      {/* Marqueurs villes (hors Paris arrondissements) */}
      {IDF_CITIES
        .filter((c) => c.departmentCode !== "75" || c.slug === "paris")
        .map((city) => (
          <Marker
            key={city.slug}
            position={[city.lat, city.lng]}
            icon={CITY_ICON}
          >
            <Popup>
              <div className="p-1">
                <div className="font-bold text-primary text-sm">{city.name}</div>
                <div className="text-xs text-gray-500 mb-1">
                  Dép. {city.departmentCode}
                </div>
                <a
                  href={`/degorgement/${city.slug}`}
                  className="text-xs text-blue-600 underline"
                >
                  Dégorgement {city.name} →
                </a>
              </div>
            </Popup>
          </Marker>
        ))}
    </MapContainer>
  )
}
