import Link from "next/link"
import {
  Phone, Mail, MapPin, Clock,
  Droplets, ArrowRight
} from "lucide-react"
import { COMPANY, DEPARTMENTS, SERVICES } from "@/config/constants"

const LEGAL_LINKS = [
  { label: "Mentions légales", href: "/mentions-legales" },
  { label: "CGV", href: "/cgv" },
  { label: "Politique de confidentialité", href: "/confidentialite" },
  { label: "Plan du site", href: "/plan-du-site" },
]

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  )
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
    </svg>
  )
}

function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  )
}

function YoutubeIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  )
}

const SOCIAL_ICONS: Record<string, React.ElementType> = {
  facebook: FacebookIcon,
  instagram: InstagramIcon,
  linkedin: LinkedinIcon,
  youtube: YoutubeIcon,
}

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-primary text-white" role="contentinfo">

      {/* Bande urgence */}
      <div className="bg-urgence py-4">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col sm:flex-row items-center
                          justify-between gap-4">
            <div className="text-center sm:text-left">
              <p className="font-black text-lg">
                🚨 Urgence dégorgement en Île-de-France ?
              </p>
              <p className="text-white/80 text-sm">
                Nos équipes interviennent sous 1h, partout en IDF
              </p>
            </div>
            <a
              href={`tel:${COMPANY.phoneRaw}`}
              className="flex items-center gap-2 bg-white text-urgence
                         font-black px-6 py-3 rounded-xl text-lg
                         hover:bg-red-50 transition-colors shadow-lg
                         flex-shrink-0"
              aria-label={`Appeler le ${COMPANY.phone} pour une urgence`}
            >
              <Phone className="w-5 h-5" />
              {COMPANY.phone}
            </a>
          </div>
        </div>
      </div>

      {/* Contenu principal */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Colonne 1 — Identité */}
          <div className="space-y-5">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group w-fit">
              <div className="w-10 h-10 bg-accent rounded-xl flex items-center
                              justify-center">
                <Droplets className="w-5 h-5 text-white" />
              </div>
              <div className="leading-tight">
                <div className="text-white font-black text-xl">Groupe</div>
                <div className="text-accent font-black text-xl -mt-1">
                  CanalNet
                </div>
              </div>
            </Link>

            <p className="text-white/60 text-sm leading-relaxed">
              Spécialiste du dégorgement et curage canalisation
              en Île-de-France. Disponible {COMPANY.availability},
              nos équipes interviennent dans les{" "}
              {COMPANY.departmentsCovered} départements franciliens.
            </p>

            {/* Réseaux sociaux */}
            <div className="flex items-center gap-3">
              {Object.entries(COMPANY.social).map(([platform, url]) => {
                if (!url) return null
                const Icon = SOCIAL_ICONS[platform]
                if (!Icon) return null
                return (
                  <a
                    key={platform}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-lg bg-white/10 flex items-center
                               justify-center hover:bg-accent transition-colors"
                    aria-label={`Groupe CanalNet sur ${platform}`}
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                )
              })}
            </div>
          </div>

          {/* Colonne 2 — Services */}
          <div>
            <h3 className="text-white font-bold text-base mb-5
                           flex items-center gap-2">
              <span className="w-1 h-5 bg-accent rounded-full
                               inline-block" />
              Nos services
            </h3>
            <ul className="space-y-2.5">
              {SERVICES.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/${service.slug}`}
                    className="flex items-center gap-2 text-sm text-white/60
                               hover:text-white transition-colors group"
                  >
                    <ArrowRight className="w-3.5 h-3.5 text-accent
                                          group-hover:translate-x-0.5
                                          transition-transform" />
                    {service.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/degorgement-ile-de-france"
                  className="flex items-center gap-2 text-sm text-white/60
                             hover:text-white transition-colors group"
                >
                  <ArrowRight className="w-3.5 h-3.5 text-accent
                                        group-hover:translate-x-0.5
                                        transition-transform" />
                  Dégorgement Île-de-France
                </Link>
              </li>
            </ul>
          </div>

          {/* Colonne 3 — Zones */}
          <div>
            <h3 className="text-white font-bold text-base mb-5
                           flex items-center gap-2">
              <span className="w-1 h-5 bg-accent rounded-full
                               inline-block" />
              Zones d&apos;intervention
            </h3>
            <ul className="space-y-2.5">
              {DEPARTMENTS.map((dept) => (
                <li key={dept.code}>
                  <Link
                    href={`/${dept.slug}`}
                    className="flex items-center gap-2 text-sm text-white/60
                               hover:text-white transition-colors group"
                  >
                    <MapPin className="w-3.5 h-3.5 text-accent flex-shrink-0" />
                    {dept.name}
                    <span className="text-white/30">({dept.code})</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Colonne 4 — Contact */}
          <div>
            <h3 className="text-white font-bold text-base mb-5
                           flex items-center gap-2">
              <span className="w-1 h-5 bg-accent rounded-full
                               inline-block" />
              Contact
            </h3>
            <ul className="space-y-4">
              <li>
                <a
                  href={`tel:${COMPANY.phoneRaw}`}
                  className="flex items-start gap-3 group"
                  aria-label={`Appeler le ${COMPANY.phone}`}
                >
                  <div className="w-9 h-9 rounded-lg bg-urgence/20
                                  flex items-center justify-center flex-shrink-0
                                  group-hover:bg-urgence/30 transition-colors">
                    <Phone className="w-4 h-4 text-urgence" />
                  </div>
                  <div>
                    <div className="text-white font-bold text-sm">
                      {COMPANY.phone}
                    </div>
                    <div className="text-white/50 text-xs">
                      Urgence 24h/24, 7j/7
                    </div>
                  </div>
                </a>
              </li>

              <li>
                <a
                  href={`mailto:${COMPANY.email}`}
                  className="flex items-start gap-3 group"
                >
                  <div className="w-9 h-9 rounded-lg bg-accent/20
                                  flex items-center justify-center flex-shrink-0
                                  group-hover:bg-accent/30 transition-colors">
                    <Mail className="w-4 h-4 text-accent" />
                  </div>
                  <div>
                    <div className="text-white font-bold text-sm">
                      {COMPANY.email}
                    </div>
                    <div className="text-white/50 text-xs">
                      Réponse sous 2h
                    </div>
                  </div>
                </a>
              </li>

              <li className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-lg bg-white/10
                                flex items-center justify-center flex-shrink-0">
                  <Clock className="w-4 h-4 text-white/60" />
                </div>
                <div>
                  <div className="text-white font-bold text-sm">
                    {COMPANY.availability}
                  </div>
                  <div className="text-white/50 text-xs">
                    Week-ends et jours fériés inclus
                  </div>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-lg bg-white/10
                                flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-4 h-4 text-white/60" />
                </div>
                <div>
                  <div className="text-white font-bold text-sm">
                    Île-de-France
                  </div>
                  <div className="text-white/50 text-xs">
                    {COMPANY.departmentsCovered} départements couverts
                  </div>
                </div>
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* Barre légale */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-5">
          <div className="flex flex-col sm:flex-row items-center
                          justify-between gap-3">
            <p className="text-white/40 text-xs">
              © {currentYear} {COMPANY.name}.
              Tous droits réservés.
            </p>
            <nav aria-label="Liens légaux">
              <ul className="flex flex-wrap items-center gap-4">
                {LEGAL_LINKS.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-white/40 hover:text-white/70
                                 text-xs transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      </div>

    </footer>
  )
}
