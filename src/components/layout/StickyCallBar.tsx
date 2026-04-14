"use client"

import { Phone } from "lucide-react"
import { COMPANY } from "@/config/constants"
import { motion } from "framer-motion"

export default function StickyCallBar() {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-urgence text-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-10 text-sm">

          {/* Texte gauche */}
          <div className="hidden sm:flex items-center gap-2 font-medium">
            <span className="animate-pulse">🚨</span>
            <span>
              URGENCE DÉGORGEMENT — Disponible{" "}
              <strong>{COMPANY.availability}</strong>
            </span>
          </div>

          {/* Texte mobile */}
          <div className="flex sm:hidden items-center gap-2 font-medium text-xs">
            <span className="animate-pulse">🚨</span>
            <span>Urgence 24h/7j</span>
          </div>

          {/* Bouton appel */}
          <motion.a
            href={`tel:${COMPANY.phoneRaw}`}
            className="flex items-center gap-2 bg-white text-urgence
                       font-bold px-4 py-1.5 rounded-full text-sm
                       hover:bg-red-50 transition-colors shadow-urgence"
            animate={{ scale: [1, 1.03, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            aria-label={`Appeler Groupe CanalNet au ${COMPANY.phone}`}
          >
            <Phone className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">{COMPANY.phone}</span>
            <span className="sm:hidden">Appeler maintenant</span>
          </motion.a>

        </div>
      </div>
    </div>
  )
}
