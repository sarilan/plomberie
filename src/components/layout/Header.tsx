"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import {
  Phone, Menu, X, ChevronDown,
  Waves, Wrench, Droplets, AlertTriangle,
  MapPin
} from "lucide-react"
import { COMPANY, DEPARTMENTS, SERVICES } from "@/config/constants"
import { cn } from "@/lib/utils"

const NAV_ITEMS = [
  {
    label: "Services",
    href: "#",
    dropdown: SERVICES.map((s) => ({
      label: s.name,
      href: `/${s.slug}`,
      description: s.description,
      icon: s.icon,
    })),
  },
  {
    label: "Zones",
    href: "#",
    dropdown: [
      {
        label: "Île-de-France",
        href: "/degorgement-ile-de-france",
        description: "Tous les 8 départements",
        icon: "MapPin",
      },
      ...DEPARTMENTS.map((d) => ({
        label: `${d.name} (${d.code})`,
        href: `/${d.slug}`,
        description: `Dégorgement ${d.code}`,
        icon: "MapPin",
      })),
    ],
  },
  { label: "Blog", href: "/blog" },
  { label: "Avis clients", href: "/avis-clients" },
  { label: "À propos", href: "/a-propos" },
]

const ICON_MAP: Record<string, React.ElementType> = {
  AlertTriangle,
  Waves,
  Wrench,
  Droplets,
  MapPin,
}

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Ferme le menu mobile au changement de page
  useEffect(() => {
    setMobileOpen(false)
    setActiveDropdown(null)
  }, [pathname])

  return (
    <>
      {/* Spacer pour compenser StickyCallBar (h-10) + Header */}
      <div className="h-[104px]" aria-hidden="true" />

      <header
        className={cn(
          "fixed top-10 left-0 right-0 z-40 transition-all duration-300",
          isScrolled
            ? "bg-primary shadow-lg backdrop-blur-sm"
            : "bg-primary/95"
        )}
        role="banner"
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">

            {/* Logo */}
            <Link
              href="/"
              className="flex items-center gap-3 group"
              aria-label="Groupe CanalNet – Accueil"
            >
              <div className="w-9 h-9 bg-accent rounded-lg flex items-center
                              justify-center group-hover:bg-accent/90 transition-colors">
                <Droplets className="w-5 h-5 text-white" />
              </div>
              <div className="flex flex-col leading-tight">
                <span className="text-white font-black text-lg tracking-tight">
                  Groupe
                </span>
                <span className="text-accent font-black text-lg
                                 tracking-tight -mt-1">
                  CanalNet
                </span>
              </div>
            </Link>

            {/* Navigation desktop */}
            <nav
              className="hidden lg:flex items-center gap-1"
              aria-label="Navigation principale"
            >
              {NAV_ITEMS.map((item) => (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() =>
                    item.dropdown && setActiveDropdown(item.label)
                  }
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  {item.dropdown ? (
                    <button
                      className={cn(
                        "flex items-center gap-1 px-4 py-2 rounded-lg text-sm",
                        "font-medium text-white/80 hover:text-white",
                        "hover:bg-white/10 transition-all duration-200",
                        activeDropdown === item.label && "bg-white/10 text-white"
                      )}
                      aria-expanded={activeDropdown === item.label}
                      aria-haspopup="true"
                    >
                      {item.label}
                      <ChevronDown
                        className={cn(
                          "w-3.5 h-3.5 transition-transform duration-200",
                          activeDropdown === item.label && "rotate-180"
                        )}
                      />
                    </button>
                  ) : (
                    <Link
                      href={item.href}
                      className={cn(
                        "px-4 py-2 rounded-lg text-sm font-medium",
                        "text-white/80 hover:text-white hover:bg-white/10",
                        "transition-all duration-200",
                        pathname === item.href && "text-white bg-white/10"
                      )}
                    >
                      {item.label}
                    </Link>
                  )}

                  {/* Dropdown */}
                  <AnimatePresence>
                    {item.dropdown && activeDropdown === item.label && (
                      <motion.div
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 8 }}
                        transition={{ duration: 0.15 }}
                        className={cn(
                          "absolute top-full left-0 mt-1 py-2",
                          "bg-white rounded-xl shadow-card-hover border border-gray-100",
                          item.label === "Zones"
                            ? "w-72 max-h-80 overflow-y-auto"
                            : "w-64"
                        )}
                        role="menu"
                      >
                        {item.dropdown.map((subItem) => {
                          const Icon = ICON_MAP[subItem.icon] || MapPin
                          return (
                            <Link
                              key={subItem.href}
                              href={subItem.href}
                              className="flex items-start gap-3 px-4 py-2.5
                                         hover:bg-gray-light transition-colors group"
                              role="menuitem"
                            >
                              <div className="w-8 h-8 rounded-lg bg-accent/10
                                              flex items-center justify-center
                                              flex-shrink-0 mt-0.5
                                              group-hover:bg-accent/20 transition-colors">
                                <Icon className="w-4 h-4 text-accent" />
                              </div>
                              <div>
                                <div className="text-sm font-semibold text-primary">
                                  {subItem.label}
                                </div>
                                <div className="text-xs text-gray-medium">
                                  {subItem.description}
                                </div>
                              </div>
                            </Link>
                          )
                        })}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </nav>

            {/* CTA desktop */}
            <div className="hidden lg:flex items-center gap-3">
              <Link
                href="/devis"
                className="px-4 py-2 text-sm font-semibold text-white/80
                           hover:text-white border border-white/20 rounded-lg
                           hover:border-white/40 hover:bg-white/10 transition-all"
              >
                Devis gratuit
              </Link>
              <a
                href={`tel:${COMPANY.phoneRaw}`}
                className="flex items-center gap-2 bg-urgence hover:bg-urgence-hover
                           text-white font-bold px-5 py-2 rounded-lg text-sm
                           transition-all shadow-urgence hover:shadow-lg"
                aria-label={`Appeler le ${COMPANY.phone}`}
              >
                <Phone className="w-4 h-4" />
                {COMPANY.phone}
              </a>
            </div>

            {/* Burger mobile */}
            <div className="flex lg:hidden items-center gap-3">
              <a
                href={`tel:${COMPANY.phoneRaw}`}
                className="flex items-center gap-1.5 bg-urgence text-white
                           font-bold px-3 py-2 rounded-lg text-sm"
                aria-label="Appeler maintenant"
              >
                <Phone className="w-4 h-4" />
                <span className="hidden sm:inline">{COMPANY.phone}</span>
                <span className="sm:hidden">Appel</span>
              </a>
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="p-2 rounded-lg text-white hover:bg-white/10
                           transition-colors"
                aria-label={mobileOpen ? "Fermer le menu" : "Ouvrir le menu"}
                aria-expanded={mobileOpen}
              >
                {mobileOpen
                  ? <X className="w-6 h-6" />
                  : <Menu className="w-6 h-6" />
                }
              </button>
            </div>

          </div>
        </div>

        {/* Menu mobile */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="lg:hidden bg-primary border-t border-white/10
                         overflow-y-auto max-h-[75vh]"
              aria-label="Menu mobile"
            >
              <div className="max-w-7xl mx-auto px-4 py-4 space-y-1">
                {NAV_ITEMS.map((item) => (
                  <div key={item.label}>
                    {item.dropdown ? (
                      <>
                        <button
                          onClick={() =>
                            setActiveDropdown(
                              activeDropdown === item.label
                                ? null
                                : item.label
                            )
                          }
                          className="w-full flex items-center justify-between
                                     px-4 py-3 rounded-lg text-white/80
                                     hover:text-white hover:bg-white/10
                                     font-medium text-sm transition-colors"
                        >
                          {item.label}
                          <ChevronDown
                            className={cn(
                              "w-4 h-4 transition-transform",
                              activeDropdown === item.label && "rotate-180"
                            )}
                          />
                        </button>
                        <AnimatePresence>
                          {activeDropdown === item.label && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              className="ml-4 border-l border-white/10 pl-4
                                         space-y-1 mt-1"
                            >
                              {item.dropdown.map((sub) => (
                                <Link
                                  key={sub.href}
                                  href={sub.href}
                                  className="block px-3 py-2 rounded-lg text-sm
                                             text-white/70 hover:text-white
                                             hover:bg-white/10 transition-colors"
                                >
                                  {sub.label}
                                </Link>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </>
                    ) : (
                      <Link
                        href={item.href}
                        className="block px-4 py-3 rounded-lg text-white/80
                                   hover:text-white hover:bg-white/10
                                   font-medium text-sm transition-colors"
                      >
                        {item.label}
                      </Link>
                    )}
                  </div>
                ))}

                {/* CTA mobile */}
                <div className="pt-4 space-y-2 border-t border-white/10">
                  <Link
                    href="/devis"
                    className="block text-center px-4 py-3 rounded-lg
                               border border-white/20 text-white font-semibold
                               text-sm hover:bg-white/10 transition-colors"
                  >
                    Demander un devis gratuit
                  </Link>
                  <a
                    href={`tel:${COMPANY.phoneRaw}`}
                    className="flex items-center justify-center gap-2
                               bg-urgence text-white font-bold px-4 py-3
                               rounded-lg text-sm w-full"
                  >
                    <Phone className="w-4 h-4" />
                    Appeler le {COMPANY.phone}
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  )
}
