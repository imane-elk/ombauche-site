"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Linkedin, X, ZoomIn, ChevronLeft, ChevronRight } from "lucide-react"

const recommendations = [
  {
    src: "/images/rec8.png",
    alt: "Recommandation de Youssef OUKHEYI - Project Management Expert",
  },
  {
    src: "/images/rec10.png",
    alt: "Recommandation de Jawad JOUD - Responsable Administratif & Financier",
  },
  {
    src: "/images/recommdatiom6.png",
    alt: "Recommandation de Anisse Ezzebdi - Industry 4.0 Project Manager",
  },
  {
    src: "/images/recommandation4.png",
    alt: "Recommandation de Brahim O. - Directeur Technico-commercial",
  },
]

export function TestimonialsSection() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % recommendations.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + recommendations.length) % recommendations.length)
  }

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section ref={sectionRef} id="temoignages" className="py-20 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
            Ce que disent nos clients
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Témoignages : ils ont transformé leur parcours grâce à notre accompagnement
          </p>
        </div>

        {/* Mobile Carousel */}
        <div className="md:hidden relative mb-12">
          <div className="overflow-hidden rounded-xl">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {recommendations.map((rec, index) => (
                <div
                  key={index}
                  className="w-full flex-shrink-0 px-2"
                >
                  <div
                    className="relative bg-white rounded-xl overflow-hidden shadow-lg border border-border cursor-pointer"
                    onClick={() => setSelectedImage(rec.src)}
                  >
                    <div className="relative w-full" style={{ minHeight: "300px" }}>
                      <Image
                        src={rec.src || "/placeholder.svg"}
                        alt={rec.alt}
                        fill
                        className="object-contain p-2"
                        sizes="100vw"
                        priority
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Carousel Controls */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 bg-white shadow-lg rounded-full p-2 border border-border hover:bg-[#002763] hover:text-white transition-colors"
            aria-label="Previous"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 bg-white shadow-lg rounded-full p-2 border border-border hover:bg-[#002763] hover:text-white transition-colors"
            aria-label="Next"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-4">
            {recommendations.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all ${index === currentIndex ? "bg-[#002763] w-6" : "bg-border"
                  }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Desktop Grid - Larger Images */}
        <div className="hidden md:grid md:grid-cols-2 gap-8 mb-12">
          {recommendations.map((rec, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-2xl overflow-hidden shadow-lg border border-border hover:border-[#002763]/30 transition-all duration-500 cursor-pointer group transform hover:-translate-y-2 hover:shadow-2xl ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
              style={{ transitionDelay: `${index * 150}ms` }}
              onClick={() => setSelectedImage(rec.src)}
            >
              <div className="relative w-full" style={{ minHeight: "350px" }}>
                <Image
                  src={rec.src || "/placeholder.svg"}
                  alt={rec.alt}
                  fill
                  className="object-contain p-6"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
              </div>
              <div className="absolute inset-0 bg-[#002763]/0 group-hover:bg-[#002763]/5 transition-colors flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-100 scale-90 bg-[#002763] text-white px-4 py-2 rounded-full flex items-center gap-2">
                  <ZoomIn className="w-4 h-4" />
                  <span className="text-sm font-medium">Agrandir</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className={`text-center transition-all duration-700 delay-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>

          <Button
            asChild
            variant="outline"
            className="border-[#002763] text-[#002763] hover:bg-[#002763] hover:text-white bg-transparent group"
          >
            <a
              href="https://www.linkedin.com/in/maryem-elkhoumsi-%F0%9F%9F%A0-2a2919160/details/recommendations/?detailScreenTabIndex=0"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform" />
              Consultez les recommandations LinkedIn
            </a>
          </Button>
        </div>
      </div>

      {/* Modal for zoomed image - Much Larger */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 animate-in fade-in duration-300"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 text-white hover:text-[#002763] transition-colors z-10 bg-white/10 hover:bg-white rounded-full p-2"
            onClick={() => setSelectedImage(null)}
            aria-label="Fermer"
          >
            <X className="w-8 h-8" />
          </button>
          <div className="relative max-w-7xl max-h-[95vh] w-full animate-in zoom-in-95 duration-300">
            <Image
              src={selectedImage || "/placeholder.svg"}
              alt="Recommandation agrandie"
              width={1800}
              height={1200}
              className="object-contain w-full h-auto max-h-[95vh] rounded-lg bg-white p-4"
              priority
            />
          </div>
        </div>
      )}
    </section>
  )
}
