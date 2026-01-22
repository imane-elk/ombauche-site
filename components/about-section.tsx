"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Award, Briefcase, GraduationCap, Globe } from "lucide-react"

const photos = [
  {
    src: "/images/maryem-presentation.jpeg",
    alt: "Maryem ELKHOUMSI - Conference Personal Branding",
  },
  {
    src: "/images/qui.jpeg",
    alt: "Maryem ELKHOUMSI - Interview Podcast",
  },
]

const certifications = [
  {
    icon: Award,
    title: "PCCP - Insight Coaching Maroc",
    description: "Coach professionnel certifié",
  },
  {
    icon: GraduationCap,
    title: "Doctorante en Management des RH",
    description: "Recherche académique avancée",
  },
  {
    icon: Briefcase,
    title: "Consultante en Recrutement",
    description: "Expertise terrain multi-secteurs",
  },
  {
    icon: Globe,
    title: "Expérience Internationale",
    description: "Marchés marocain, français et roumain",
  },
]

export function AboutSection() {
  const [currentPhoto, setCurrentPhoto] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentPhoto((prev) => (prev + 1) % photos.length)
    }, 4000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section id="apropos" className="py-20 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Photos Carousel - Left Side */}
          <div className="relative order-2 lg:order-1">
            <div className="relative aspect-[3/4] max-w-md mx-auto lg:mx-0 rounded-2xl overflow-hidden shadow-2xl">
              {photos.map((photo, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-all duration-700 ease-in-out ${index === currentPhoto
                    ? "opacity-100 scale-100"
                    : "opacity-0 scale-105"
                    }`}
                >
                  <Image
                    src={photo.src || "/placeholder.svg"}
                    alt={photo.alt}
                    fill
                    className="object-cover"
                    priority={index === 0}
                  />
                </div>
              ))}

              {/* Decorative elements */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-[#002763] rounded-2xl -z-10" />
              <div className="absolute -top-4 -left-4 w-16 h-16 bg-[#002763]/20 rounded-2xl -z-10" />
            </div>

            {/* Photo indicators */}
            <div className="flex justify-center gap-3 mt-6">
              {photos.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentPhoto(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentPhoto
                    ? "bg-[#002763] w-8"
                    : "bg-[#002763]/30 hover:bg-[#002763]/50"
                    }`}
                  aria-label={`Voir photo ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Content - Right Side */}
          <div className="order-1 lg:order-2">
            <div className="mb-6">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground text-balance">
                Qui je suis ?
              </h2>
              <p className="text-xl md:text-2xl text-muted-foreground mt-2 font-serif italic">
                Je suis Maryem ELKHOUMSI
              </p>
            </div>

            <div className="space-y-4 text-muted-foreground leading-relaxed mb-8">
              <p>
                Je suis consultante en recrutement, doctorante en management des ressources humaines et intervenante lors de plusieurs conférences RH. Au fil de mes expériences sur les marchés marocain, français et roumain, j’ai rencontré des talents incroyables… qui, pourtant, peinent à trouver l’opportunité qui reflète vraiment leur potentiel.
              </p>
              <p>
                C’est ce constat qui m’a poussée à créer <strong className="text-[#002763] font-black uppercase tracking-wider">O'MBAUCHE</strong> :
                un programme d’accompagnement humain et stratégique, pensé pour ceux et celles qui veulent révéler leur expertise, valoriser leur parcours et décrocher le poste qui correspond vraiment à leurs ambitions.
              </p>
              <p>
                Ma mission ? Vous accompagner pas à pas : révéler votre potentiel unique, construire une candidature qui marque les esprits et vous donner confiance pour atteindre vos objectifs. Chaque personne que j’accompagne est pour moi une histoire à écrire, un défi à relever ensemble.

                Parce qu’aujourd’hui, trouver un poste ne devrait jamais être une question de chance… mais le résultat d’un accompagnement intelligent et humain.
              </p>
            </div>

            {/* Certifications */}
            <div>
              <h3 className="text-xl font-bold text-foreground mb-6">Certifications & Expertise</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {certifications.map((cert, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 p-4 rounded-xl bg-card border border-border hover:border-[#002763]/50 hover:shadow-md transition-all duration-300 transform hover:-translate-y-1"
                  >
                    <div className="w-10 h-10 rounded-lg bg-[#002763]/10 flex items-center justify-center flex-shrink-0">
                      <cert.icon className="w-5 h-5 text-[#002763]" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground text-sm">{cert.title}</p>
                      <p className="text-xs text-muted-foreground">{cert.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
