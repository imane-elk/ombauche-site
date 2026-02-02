"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

const navLinks = [
  { href: "#accueil", label: "Accueil" },
  { href: "#services", label: "Nos Services" },
  { href: "#temoignages", label: "Temoignages" },
  { href: "#apropos", label: "À propos" },
]

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <nav className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20 lg:h-32">
          <Link href="#accueil" className="flex items-center">
            <div className="relative w-24 h-24 lg:w-32 lg:h-32 rounded-full overflow-hidden border-2 border-white shadow-xl bg-white">
              <Image
                src="/images/logo.png"
                alt="O'Mbauche"
                fill
                className="object-cover scale-[1.8]"
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="hidden lg:block">
            <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground">
              <a
                href="https://wa.me/212664260410"
                target="_blank"
                rel="noopener noreferrer"
              >
                Contactez-nous
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-foreground"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden fixed inset-x-0 top-[80px] bottom-0 bg-background/98 backdrop-blur-md z-40 animate-in fade-in slide-in-from-top-4 duration-300">
            <div className="flex flex-col items-center justify-center h-full gap-8 p-6">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-2xl font-semibold text-foreground hover:text-[#002763] transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Button asChild size="lg" className="w-full mt-4 bg-[#002763] hover:bg-[#002763]/90 text-white shadow-xl">
                <a
                  href="https://wa.me/212664260410"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Contactez-nous
                </a>
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
