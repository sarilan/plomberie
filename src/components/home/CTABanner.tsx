import { Phone, FileText } from "lucide-react"
import Link from "next/link"
import { COMPANY } from "@/config/constants"

export default function CTABanner() {
  return (
    <section
      className="bg-gradient-urgence py-16 relative overflow-hidden"
      aria-labelledby="cta-title"
    >
      {/* Cercles décoratifs */}
      <div
        className="absolute -top-16 -right-16 w-64 h-64
                   bg-white/5 rounded-full"
        aria-hidden="true"
      />
      <div
        className="absolute -bottom-24 -left-12 w-80 h-80
                   bg-white/5 rounded-full"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center
                        justify-between gap-8">

          <div className="text-center lg:text-left">
            <h2
              id="cta-title"
              className="text-3xl lg:text-4xl font-black text-white mb-3"
            >
              Une urgence en Île-de-France ?
            </h2>
            <p className="text-white/80 text-lg">
              Groupe CanalNet intervient{" "}
              <strong>sous 1h, {COMPANY.availability}</strong>.
              <br />
              Devis gratuit avant toute intervention.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 flex-shrink-0">
            <a
              href={`tel:${COMPANY.phoneRaw}`}
              className="flex items-center justify-center gap-3
                         bg-white text-urgence font-black px-8 py-4
                         rounded-xl text-lg hover:bg-red-50
                         transition-colors shadow-lg"
              aria-label={`Appeler le ${COMPANY.phone}`}
            >
              <Phone className="w-5 h-5" />
              {COMPANY.phone}
            </a>
            <Link
              href="/devis"
              className="flex items-center justify-center gap-3
                         border-2 border-white/50 text-white font-bold
                         px-8 py-4 rounded-xl text-lg
                         hover:bg-white/10 transition-colors"
            >
              <FileText className="w-5 h-5" />
              Devis en ligne
            </Link>
          </div>

        </div>
      </div>
    </section>
  )
}
