import Link from "next/link"
import Image from "next/image"
import { Instagram, Linkedin, Facebook, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

const socialLinks = [
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/in/maryem-elkhoumsi-%F0%9F%9F%A0-2a2919160/",
    label: "LinkedIn",
  },
  {
    icon: Instagram,
    href: "https://www.instagram.com/maryem_elkhoumsi/",
    label: "Instagram",
  },
  {
    icon: Facebook,
    href: "https://www.facebook.com/maryem.economiste/",
    label: "Facebook",
  },
]

const quickLinks = [
  { href: "#accueil", label: "Accueil" },
  { href: "#services", label: "Services" },
  { href: "#resultats", label: "Résultats" },
  { href: "#temoignages", label: "Témoignages" },
  { href: "#apropos", label: "À propos" },
  { href: "#formation", label: "Formation gratuite" },
]

export function Footer() {
  return (
    <footer className="w-full">
      {/* CTA Section */}
      <div className="bg-white text-slate-900 border-b border-gray-100">
        <div className="container mx-auto px-4 lg:px-8 py-16">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance text-[#002763]">
              Et si vous transformiez votre carrière dès aujourd’hui ?
            </h2>

            <Button
              asChild
              size="lg"
              className="bg-green-600 hover:bg-green-700 text-white text-lg px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 mt-6"
            >
              <a
                href="https://wa.me/212664260410"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6 mr-2"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.008-.57-.008-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
                Veuillez nous contacter sur WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </div>

      {/* Footer Content */}
      <div className="bg-[#002763] text-white">
        <div className="container mx-auto px-4 lg:px-8 py-12">
          <div className="grid md:grid-cols-3 gap-12">
            {/* Brand */}
            <div>
              <div className="mb-6 relative w-24 h-24 lg:w-32 lg:h-32 rounded-full overflow-hidden border-2 border-white/20 shadow-xl bg-white">
                <Image
                  src="/images/logo.png"
                  alt="O'Mbauche"
                  fill
                  className="object-cover scale-[1.8]"
                />
              </div>
              <p className="text-white/70 mb-6 leading-relaxed">
                Plus qu’un accompagnement, une stratégie personnalisée pour faire matcher talents et entreprises.
              </p>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white hover:text-[#002763] transition-colors"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold mb-4 text-white">Navigation</h4>
              <ul className="space-y-2">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <Link
                      href={link.href}
                      className="text-white/70 hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <div className="space-y-4">
                <p className="text-white/70">
                  <span className="block text-white font-medium">Maryem ELKHOUMSI</span>
                  Consultante RH & Coach Carrière
                </p>
                <a
                  href="https://wa.me/212664260410"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-white/10 hover:bg-white hover:text-[#002763] text-white px-4 py-2 rounded-full transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  Nous contacter
                </a>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-white/10 mt-12 pt-8 text-center text-white/50 text-sm">
            <p>© {new Date().getFullYear()} <strong className="font-bold text-white uppercase">O'MBAUCHE</strong> - Maryem ELKHOUMSI. Tous droits réservés.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
