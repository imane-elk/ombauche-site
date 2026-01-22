"use client"

import { useEffect, useRef, useState } from "react"

const stats = [
  { value: 1200, suffix: "+", label: "Personnes accompagnées dans leur parcours vers l’emploi", smallSuffix: false },
  { value: 94, suffix: "%", label: "De réussite aux entretiens", smallSuffix: false },
  { value: 3, suffix: "", label: "Semaines - délai moyen avant 1ère embauche", smallSuffix: true },
]

function AnimatedNumber({ value, suffix, smallSuffix }: { value: number; suffix: string; smallSuffix: boolean }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLDivElement>(null)
  const [hasAnimated, setHasAnimated] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true)
          const duration = 2000
          const steps = 60
          const increment = value / steps
          let current = 0
          const timer = setInterval(() => {
            current += increment
            if (current >= value) {
              setCount(value)
              clearInterval(timer)
            } else {
              setCount(Math.floor(current))
            }
          }, duration / steps)
        }
      },
      { threshold: 0.5 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [value, hasAnimated])

  return (
    <div ref={ref} className="text-5xl md:text-6xl lg:text-7xl font-bold text-[#002763]">
      {count}
      {!smallSuffix && suffix}
    </div>
  )
}

export function StatsSection() {
  return (
    <section id="resultats" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
            Résultats concrets et prouvés
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Des chiffres qui parlent d{"'"}eux-mêmes
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center p-8 lg:p-12 rounded-2xl bg-card border border-border hover:border-[#002763]/30 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
            >
              <AnimatedNumber value={stat.value} suffix={stat.suffix} smallSuffix={stat.smallSuffix} />
              <p className="mt-4 text-muted-foreground text-lg">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
