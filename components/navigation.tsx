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
        <div className="flex items-center justify-between h-28 lg:h-36">
          <Link href="#accueil" className="flex items-center">
            <div className="relative w-24 h-24 lg:w-32 lg:h-32 rounded-full overflow-hidden border-2 border-[#002763]/10 shadow-lg bg-white">
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
          <div className="lg:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-muted-foreground hover:text-primary transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Button asChild className="w-full mt-2 bg-primary hover:bg-primary/90 text-primary-foreground">
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
