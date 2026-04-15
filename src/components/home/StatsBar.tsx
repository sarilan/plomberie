"use client"

import { useEffect, useRef, useState } from "react"
import { useInView } from "framer-motion"
import { COMPANY } from "@/config/constants"
import { IDF_STATS } from "@/lib/cities"

interface StatItem {
  value: string
  numericValue: number
  suffix: string
  label: string
  prefix?: string
}

const STATS: StatItem[] = [
  {
    value: COMPANY.totalInterventions,
    numericValue: 5000,
    suffix: "+",
    label: "Interventions réalisées",
  },
  {
    value: COMPANY.departmentsCovered,
    numericValue: 8,
    suffix: "",
    label: "Départements couverts",
  },
  {
    value: COMPANY.googleRating,
    numericValue: 4.9,
    suffix: "/5",
    label: "Note Google",
    prefix: "★ ",
  },
  {
    value: "1",
    numericValue: 1,
    suffix: "h",
    label: "Délai d'intervention",
    prefix: "< ",
  },
  {
    value: String(IDF_STATS.totalCities),
    numericValue: IDF_STATS.totalCities,
    suffix: "+",
    label: "Villes desservies",
  },
]

function useCountUp(target: number, duration = 2000, start = false) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!start) return
    const isFloat = target % 1 !== 0
    const startTime = performance.now()

    const tick = (now: number) => {
      const elapsed = now - startTime
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      const current = eased * target
      setCount(isFloat ? Math.round(current * 10) / 10 : Math.floor(current))
      if (progress < 1) requestAnimationFrame(tick)
    }

    requestAnimationFrame(tick)
  }, [target, duration, start])

  return count
}

function StatCounter({ stat }: { stat: StatItem }) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true })
  const count = useCountUp(stat.numericValue, 1800, isInView)

  const display = stat.numericValue % 1 !== 0
    ? count.toFixed(1)
    : count.toLocaleString("fr-FR")

  return (
    <div ref={ref} className="text-center px-6 py-8">
      <div className="text-4xl sm:text-5xl font-extrabold text-primary mb-2">
        {stat.prefix}{display}{stat.suffix}
      </div>
      <div className="text-sm font-medium text-gray-medium uppercase tracking-wide">
        {stat.label}
      </div>
    </div>
  )
}

export default function StatsBar() {
  return (
    <section
      className="bg-white border-b border-gray-100 shadow-card"
      aria-label="Chiffres clés Groupe CanalNet"
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 divide-x divide-y sm:divide-y-0 divide-gray-100">
          {STATS.map((stat) => (
            <StatCounter key={stat.label} stat={stat} />
          ))}
        </div>
      </div>
    </section>
  )
}
