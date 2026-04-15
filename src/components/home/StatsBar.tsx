"use client"

import { useEffect, useRef, useState } from "react"
import { COMPANY } from "@/config/constants"

interface StatItem {
  value: number
  suffix: string
  label: string
  prefix?: string
}

const STATS: StatItem[] = [
  {
    value: parseInt(COMPANY.totalInterventions.replace(/\s/g, "")) || 5000,
    suffix: "+",
    label: "Interventions réalisées",
  },
  {
    value: 80,
    suffix: "+",
    label: "Communes couvertes",
  },
  {
    value: 8,
    suffix: "",
    label: "Départements IDF",
  },
  {
    value: parseFloat(COMPANY.googleRating) * 10 || 49,
    suffix: "/50",
    label: "Note Google",
    prefix: "",
  },
]

function CountUp({
  target,
  duration = 2000,
}: {
  target: number
  duration?: number
}) {
  const [count, setCount] = useState(0)
  const [started, setStarted] = useState(false)
  const ref = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true)
        }
      },
      { threshold: 0.5 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [started])

  useEffect(() => {
    if (!started) return
    const steps = 60
    const increment = target / steps
    let current = 0
    const timer = setInterval(() => {
      current += increment
      if (current >= target) {
        setCount(target)
        clearInterval(timer)
      } else {
        setCount(Math.floor(current))
      }
    }, duration / steps)
    return () => clearInterval(timer)
  }, [started, target, duration])

  return <span ref={ref}>{count.toLocaleString("fr-FR")}</span>
}

export default function StatsBar() {
  return (
    <section
      className="bg-primary py-12"
      aria-label="Chiffres clés Groupe CanalNet"
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {STATS.map((stat, i) => (
            <div
              key={i}
              className="text-center"
            >
              <div className="text-4xl lg:text-5xl font-black text-accent
                              mb-2 tabular-nums">
                {stat.prefix}
                <CountUp target={stat.value} />
                {stat.suffix}
              </div>
              <div className="text-white/60 text-sm font-medium uppercase
                              tracking-wider">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
