"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section id="accueil" className="relative min-h-screen flex items-center justify-center bg-[#002763] text-white pt-20">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:64px_64px]" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#002763]/50" />

      <div className="container mx-auto px-4 lg:px-8 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div
            className={`inline-block mb-6 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
              }`}
          >
            <span className="text-white/90 text-sm font-medium">Coaching Carrière & Recrutement</span>
          </div>

          <h1
            className={`text-4xl md:text-5xl lg:text-7xl font-bold mb-6 leading-tight text-balance transition-all duration-700 delay-150 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
          >
            Votre avenir professionnel
            <span className="text-blue-300 block mt-2"> commence ici</span>
          </h1>

          <p
            className={`text-lg md:text-xl text-white/70 mb-10 max-w-2xl mx-auto leading-relaxed text-pretty transition-all duration-700 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
          >
            Développez vos compétences, atteignez vos objectifs et transformez votre carrière grâce à l’accompagnement de nos experts.
          </p>

          <div
            className={`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-700 delay-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
          >
            <Button
              asChild
              size="lg"
              className="bg-white text-[#002763] hover:bg-white/90 text-lg px-8 py-6 font-semibold shadow-lg hover:shadow-xl transition-all hover:-translate-y-1"
            >
              <a
                href="https://wa.me/212664260410"
                target="_blank"
                rel="noopener noreferrer"
              >
                Réservez votre rendez-vous
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-white/30 text-white hover:bg-white/10 text-lg px-8 py-6 bg-transparent hover:-translate-y-1 transition-all"
            >
              <a href="#services">
                Explorez nos services
              </a>
            </Button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
          <div className="w-1 h-3 bg-white/50 rounded-full" />
        </div>
      </div>
    </section>
  )
}
