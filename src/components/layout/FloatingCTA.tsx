"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Phone, MessageCircle } from "lucide-react"
import { COMPANY } from "@/config/constants"

export default function FloatingCTA() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 300)
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 80 }}
          transition={{ type: "spring", stiffness: 300, damping: 25 }}
          className="fixed bottom-6 right-4 z-40 flex flex-col gap-3
                     lg:hidden"
          aria-label="Contacts rapides"
        >
          {/* WhatsApp */}
          <a
            href={`https://wa.me/${COMPANY.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-14 h-14 rounded-full bg-[#25D366] shadow-lg
                       flex items-center justify-center
                       hover:scale-110 transition-transform"
            aria-label="Contacter par WhatsApp"
          >
            <MessageCircle className="w-6 h-6 text-white" />
          </a>

          {/* Téléphone */}
          <a
            href={`tel:${COMPANY.phoneRaw}`}
            className="w-14 h-14 rounded-full bg-urgence shadow-urgence
                       flex items-center justify-center
                       hover:scale-110 transition-transform"
            aria-label={`Appeler le ${COMPANY.phone}`}
          >
            <motion.div
              animate={{ scale: [1, 1.15, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <Phone className="w-6 h-6 text-white" />
            </motion.div>
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
