import { ArrowRight, AlertTriangle, Lightbulb, CheckCircle2, XCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

const challenges = [
  {
    title: "Invisibilité des candidatures :",
    text: "Trop de CV ne passent jamais les premiers filtres (algorithmes ATS) malgré une expertise réelle, laissant d'excellents profils dans l'ombre du tri automatisé."
  },
  {
    title: "Pression et Incertitude :",
    text: "Un stress grandissant face aux entretiens d'embauche de plus en plus exigeants et techniques, où l'on perd souvent ses moyens faute d'entrainement ciblé."
  },
  {
    title: "Difficulté de Valorisation :",
    text: "Le manque de recul nécessaire pour identifier ses propres forces distinctives et savoir les \"vendre\" de manière percutante et authentique."
  },
  {
    title: "Compétition Accrue :",
    text: "Devoir se démarquer parmi des centaines de profils qualifiés sans posséder les codes secrets du recrutement moderne et des réseaux sociaux."
  },
  {
    title: "Sentiment de Stagnation :",
    text: "Tourner en rond dans sa recherche, accumuler les refus sans feedbacks constructifs, ce qui finit par éroder la confiance en soi."
  }
]

const solutions = [
  {
    title: "Une approche personnalisée :",
    text: "Nous prenons le temps de comprendre votre parcours unique et vos aspirations pour créer une stratégie adaptée à VOUS."
  },
  {
    title: "L'expertise terrain :",
    text: "Fort de notre expérience concrète sur les marchés marocain, français et roumain, nous connaissons les attentes réelles des recruteurs."
  },
  {
    title: "Des résultats mesurables :",
    text: "94% de taux de réussite aux entretiens et un délai moyen de 3 semaines avant la première embauche témoignent de notre efficacité."
  },
  {
    title: "Un accompagnement humain :",
    text: "Certifiée en coaching professionnel (PCCP) et doctorante en management RH, je mets mes compétences et ma bienveillance au service de votre réussite."
  },
  {
    title: "Des outils concrets :",
    text: "CV percutants, préparation intensive aux entretiens, optimisation LinkedIn, stratégies de recherche ciblées... Tout pour vous démarquer !"
  }
]

export function WhyUsSection() {
  return (
    <section id="pourquoi" className="py-20 lg:py-32 bg-white text-slate-800">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-[#002763]">
            Pourquoi travailler avec nous ?
          </h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            Ensemble, transformons vos défis en opportunités
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 max-w-7xl mx-auto">
          {/* Challenges Card */}
          <div className="bg-white rounded-3xl p-6 lg:p-10 shadow-xl border-l-4 border-l-red-500 relative overflow-hidden group hover:shadow-2xl transition-all duration-300">
            <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
              <AlertTriangle className="w-32 h-32 text-red-500 animate-pulse" />
            </div>

            <div className="flex flex-col items-center text-center mb-8 relative z-10">
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center mb-4 animate-[pulse_1s_ease-in-out_infinite]"
                style={{ backgroundColor: '#fee2e2', color: '#ef4444', boxShadow: '0 0 25px rgba(239, 68, 68, 0.8)' }}
              >
                <AlertTriangle className="w-8 h-8 drop-shadow-sm animate-bounce" />
              </div>
              <h3 className="text-2xl font-bold text-[#002763]">
                Les défis du marché du travail
              </h3>
            </div>


            <p className="text-slate-600 mb-8 border-b pb-6">
              Le marché de l{"'"}emploi actuel est devenu une jungle complexe où beaucoup de candidats talentueux se retrouvent malheureusement invisibles :
            </p>

            <ul className="space-y-6 relative z-10">
              {challenges.map((item, index) => (
                <li key={index} className="flex items-start gap-4">
                  <div className="mt-1 bg-red-100 rounded-full p-1 flex-shrink-0 shadow-[0_0_8px_rgba(239,68,68,0.4)] animate-pulse">
                    <XCircle className="w-4 h-4 text-red-500" />
                  </div>
                  <span className="text-slate-700 text-sm md:text-base leading-relaxed">
                    <strong className="text-slate-900 font-semibold">{item.title}</strong> {item.text}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions Card */}
          <div className="bg-white rounded-3xl p-6 lg:p-10 shadow-xl border-l-4 border-l-green-500 relative overflow-hidden group hover:shadow-2xl transition-all duration-300">
            <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
              <Lightbulb className="w-32 h-32 text-green-500 animate-pulse" />
            </div>

            <div className="flex flex-col items-center text-center mb-8 relative z-10">
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center mb-4 animate-[pulse_1s_ease-in-out_infinite]"
                style={{ backgroundColor: '#dcfce7', color: '#22c55e', boxShadow: '0 0 25px rgba(34, 197, 94, 0.8)' }}
              >
                <Lightbulb className="w-8 h-8 drop-shadow-sm animate-bounce" />
              </div>
              <h3 className="text-2xl font-bold text-[#002763]">
                Notre expertise à votre service
              </h3>
            </div>

            <p className="text-slate-600 mb-8 border-b pb-6">
              Avec <strong className="text-[#002763] font-black uppercase">O'MBAUCHE</strong>, nous ne nous contentons pas de vous donner des conseils génériques, nous transformons radicalement votre posture et vos résultats :
            </p>

            <ul className="space-y-6 relative z-10">
              {solutions.map((item, index) => (
                <li key={index} className="flex items-start gap-4">
                  <div className="mt-1 bg-green-100 rounded-full p-1 flex-shrink-0 shadow-[0_0_8px_rgba(34,197,94,0.4)] animate-pulse">
                    <CheckCircle2 className="w-4 h-4 text-green-600" />
                  </div>
                  <span className="text-slate-700 text-sm md:text-base leading-relaxed">
                    <strong className="text-slate-900 font-semibold">{item.title}</strong> {item.text}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="text-center mt-16">
          <Button
            asChild
            size="lg"
            className="bg-[#002763] hover:bg-[#002763]/90 text-white text-lg px-8 py-6 font-semibold rounded-full shadow-lg hover:shadow-xl transition-all hover:-translate-y-1"
          >
            <a
              href="https://wa.me/212664260410"
              target="_blank"
              rel="noopener noreferrer"
            >
              Commencer maintenant
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
