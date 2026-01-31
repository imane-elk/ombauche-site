"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const particuliersServices = [
  {
    title: "Création de CV professionnels",
    description: "CV personnalisé et percutant qui met en valeur votre parcours unique",
    image: "/images/image.png",
    scale: "scale-[1.7]"
  },
  {
    title: "Préparation aux entretiens",
    description: "Simulation d'entretiens et techniques pour convaincre les recruteurs",
    image: "/images/call2.jpeg",
    scale: "scale-[1.7]"
  },
  {
    title: "Optimisation LinkedIn",
    description: "Profil stratégique pour maximiser votre visibilité auprès des recruteurs",
    image: "/images/service-linkedin.png",
    scale: "scale-[1.8]"
  },
  {
    title: "Techniques de recherche d'emploi",
    description: "Méthodes ciblées, candidatures spontanées, activation de réseaux",
    image: "/images/service-recherche.png",
    scale: "scale-110"
  },
]

export function ServicesSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} id="services" className="py-20 lg:py-32 bg-muted/50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
            Nos Services
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Des solutions adaptées à chaque profil pour atteindre vos objectifs
          </p>
        </div>

        {/* Particuliers Section */}
        <div className="mb-20">
          <div className={`flex items-center gap-4 mb-8 transition-all duration-700 delay-100 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}>
            <div className="h-1 w-12 bg-[#002763] rounded-full" />
            <h3 className="text-2xl md:text-3xl font-bold text-foreground">
              Pour les particuliers (candidats)
            </h3>
          </div>
          <p className={`text-muted-foreground mb-8 text-lg max-w-2xl transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
            <strong>Décrochez</strong> le poste qui vous correspond et <strong>maximisez</strong> votre impact professionnel grâce à notre accompagnement personnalisé.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {particuliersServices.map((service, index) => (
              <Card
                key={index}
                className={`bg-card border-border hover:border-[#002763]/50 transition-all duration-500 hover:shadow-xl group transform hover:-translate-y-2 overflow-hidden ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                  }`}
                style={{ transitionDelay: `${400 + index * 200}ms` }}
              >
                <div className="relative h-48 w-full overflow-hidden bg-muted/20">
                  <Image
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    fill
                    className={`object-contain p-0 ${service.scale} group-hover:scale-125 transition-transform duration-500`}
                  />
                </div>
                <CardHeader className="pt-4">
                  <CardTitle className="text-lg text-foreground">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground">{service.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Entreprises Section */}
        <div>
          <div className={`flex items-center gap-4 mb-8 transition-all duration-700 delay-700 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}>
            <div className="h-1 w-12 bg-[#002763] rounded-full" />
            <h3 className="text-2xl md:text-3xl font-bold text-foreground">
              Pour les entreprises
            </h3>
          </div>
          <p className={`text-muted-foreground mb-12 text-lg max-w-4xl transition-all duration-700 delay-800 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
            Nos experts ont collaboré étroitement avec des entreprises de renom afin de répondre efficacement à leurs besoins en recrutement.
          </p>

          <div className="mt-16 bg-white py-16 px-4 rounded-[40px] shadow-[0_10px_50px_-15px_rgba(0,0,0,0.05)] border border-slate-50 relative overflow-hidden">
            <div className="relative flex items-center justify-between gap-8 md:gap-12 overflow-x-auto pb-8 scrollbar-hide px-4 lg:px-12">
              {[
                "OCP.png", "alten.png", "attijari.png", "bank.png", "cgi.png", "cma.png",
                "dsc.png", "idemia.png", "rekrute.png", "jobzyn.png", "naval.png", "orano.png"
              ].map((logo, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-28 md:w-36 transition-all duration-700 hover:scale-105"
                >
                  <div className="h-16 md:h-20 flex items-center justify-center transition-all duration-500">
                    <Image
                      src={`/images/entreprises/${logo}`}
                      alt={`Partenaire ${logo}`}
                      width={120}
                      height={60}
                      className={`object-contain max-h-full ${logo === 'OCP.png' ? 'scale-125' : ''}`}
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation Dots - exactly as Image 2 */}
            <div className="flex justify-center items-center gap-3 mt-4">
              {[1, 2, 3, 4, 5, 6, 7, 10, 11].map((dot, idx) => (
                <div
                  key={idx}
                  className={`rounded-full transition-all duration-300 ${idx === 4 ? "w-2.5 h-2.5 bg-slate-800" : "w-1.5 h-1.5 bg-slate-300"}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section >
  )
}
