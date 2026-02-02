import { Button } from "@/components/ui/button"
import { Gift, CheckCircle2, Linkedin } from "lucide-react"

const learnings = [
  "Techniques de design professionnel",
  "Structure optimisée pour les recuteurs",
  "Mise en valeur de vos compétences",
  "Exemples concrets et modèles",
  "Conseils d'experte RH",
]

const trainingUrl = "https://www.linkedin.com/posts/maryem-elkhoumsi-%F0%9F%9F%A0-2a2919160_apprenez-%C3%A0-cr%C3%A9er-un-cv-moderne-et-attractif-activity-7402652562451214338-uS0Q/?utm_source=share&utm_medium=member_ios&rcm=ACoAACaUO1oBoxCxwGecpNbOdF45ZpNWpUGstx8"

export function FreeTrainingSection() {
  return (
    <section id="formation" className="py-20 lg:py-32 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-black text-[#002763] mb-6">
            Formation 100% Gratuite sur LinkedIn !
          </h2>

        </div>

        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-[32px] p-5 md:p-12 shadow-[0_20px_60px_rgba(0,39,99,0.1)] relative border border-slate-100">

            <div className="flex flex-col items-center text-center">
              {/* Badge "GRATUIT" Flashy - FORCED STYLE */}
              <div
                className="inline-flex items-center gap-2 px-6 py-2 rounded-full mb-6 border-2 border-white shadow-xl animate-pulse"
                style={{ backgroundColor: '#FF0000' }}
              >
                <Gift className="w-5 h-5 animate-bounce" style={{ color: '#FFFF00', fill: 'rgba(255, 255, 0, 0.5)' }} />
                <span className="text-white font-black text-sm uppercase tracking-widest">Gratuit</span>
              </div>

              {/* LinkedIn Icon in circle */}
              <div className="w-24 h-24 bg-slate-50 rounded-full flex items-center justify-center mb-8 border-4 border-white shadow-md overflow-hidden p-2">
                <div
                  className="w-full h-full rounded-full flex items-center justify-center shadow-inner"
                  style={{ backgroundColor: '#0077b5' }}
                >
                  <Linkedin className="w-12 h-12" style={{ color: '#FFFFFF', fill: '#FFFFFF' }} />
                </div>
              </div>



              <p className="text-slate-500 mb-10 leading-relaxed text-balance px-4">
                Une formation complète pour étudiants et jeunes
                diplômés afin de maîtriser l’art de rédiger un CV percutant
              </p>

              <div className="w-full space-y-4 mb-12 max-w-md mx-auto">
                {learnings.map((learning, index) => (
                  <div key={index} className="flex items-center gap-4 text-left group">
                    <div
                      className="rounded-full p-1 flex-shrink-0 shadow-sm"
                      style={{ backgroundColor: '#002763' }}
                    >
                      <CheckCircle2 className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-slate-700 font-medium text-sm md:text-base">
                      {learning}
                    </span>
                  </div>
                ))}
              </div>

              <Button
                asChild
                size="lg"
                className="text-white text-xs sm:text-sm md:text-lg px-4 sm:px-8 md:px-12 py-4 md:py-7 rounded-full transition-all hover:-translate-y-1 font-extrabold w-full sm:w-auto mt-4 h-auto min-h-[3.5rem]"
                style={{ backgroundColor: '#0077b5', boxShadow: '0 10px 30px rgba(0, 119, 181, 0.3)' }}
              >
                <a
                  href={trainingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 md:gap-3 text-center w-full"
                >
                  <Linkedin className="w-5 h-5 md:w-6 md:h-6 flex-shrink-0" style={{ color: '#FFFFFF', fill: '#FFFFFF' }} />
                  <span className="leading-tight break-words">Découvrez la formation gratuite</span>
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
