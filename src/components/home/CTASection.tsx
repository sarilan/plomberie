import Link from "next/link"
import { Phone, FileText, Clock, Shield } from "lucide-react"
import { COMPANY } from "@/config/constants"

export default function CTASection() {
  return (
    <section
      className="py-20 bg-primary relative overflow-hidden"
      aria-labelledby="cta-heading"
    >
      {/* Décoration background */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 50%, #0066FF 0%, transparent 60%), " +
            "radial-gradient(circle at 80% 50%, #E63946 0%, transparent 60%)",
        }}
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Texte */}
          <div>
            <div className="inline-flex items-center gap-2 text-urgence font-semibold
                            text-sm uppercase tracking-widest mb-6">
              <span className="w-2 h-2 bg-urgence rounded-full animate-ping-slow" />
              Urgence disponible maintenant
            </div>
            <h2
              id="cta-heading"
              className="text-3xl sm:text-4xl lg:text-5xl font-black text-white
                         leading-tight mb-6"
            >
              Besoin d&apos;un dégorgement{" "}
              <span className="text-urgence">en urgence</span> ?
            </h2>
            <p className="text-white/70 text-lg mb-8 leading-relaxed">
              Nos techniciens sont disponibles{" "}
              <strong className="text-white">{COMPANY.availability}</strong>.
              Un seul appel suffit pour déclencher l&apos;intervention.
            </p>

            {/* Garanties */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <div className="flex items-center gap-2 text-white/70 text-sm">
                <Clock className="w-4 h-4 text-accent" />
                Intervention sous {COMPANY.responseTime}
              </div>
              <div className="flex items-center gap-2 text-white/70 text-sm">
                <Shield className="w-4 h-4 text-accent" />
                Devis gratuit avant travaux
              </div>
            </div>
          </div>

          {/* CTA box */}
          <div className="bg-white rounded-2xl p-8 shadow-2xl">
            <h3 className="text-xl font-black text-primary mb-2">
              Appelez-nous maintenant
            </h3>
            <p className="text-gray-medium text-sm mb-6">
              Nos équipes répondent immédiatement,
              même la nuit et les week-ends.
            </p>

            {/* Bouton téléphone */}
            <a
              href={`tel:${COMPANY.phoneRaw}`}
              className="flex items-center justify-center gap-3 w-full
                         bg-urgence hover:bg-urgence-hover text-white
                         font-black text-xl px-6 py-5 rounded-xl
                         shadow-urgence hover:shadow-lg transition-all
                         hover:scale-105 mb-4"
              aria-label={`Appeler le ${COMPANY.phone}`}
            >
              <Phone className="w-6 h-6" />
              {COMPANY.phone}
            </a>

            {/* Séparateur */}
            <div className="flex items-center gap-3 my-4">
              <div className="flex-1 h-px bg-gray-100" />
              <span className="text-xs text-gray-medium">ou</span>
              <div className="flex-1 h-px bg-gray-100" />
            </div>

            {/* Devis en ligne */}
            <Link
              href="/devis"
              className="flex items-center justify-center gap-2 w-full
                         bg-gray-light hover:bg-gray-100 text-primary
                         font-semibold px-6 py-4 rounded-xl transition-colors"
            >
              <FileText className="w-5 h-5" />
              Demander un devis gratuit en ligne
            </Link>

            <p className="text-center text-xs text-gray-medium mt-4">
              Réponse sous 2h · Sans engagement
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
