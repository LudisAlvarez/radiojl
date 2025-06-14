"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-4">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Rgx35UsL_400x400.jpg-ZgsbPryfwlyTWCPvCYJEcD6TVahbmQ.jpeg"
              alt="Logo IE Los Garzones"
              width={40}
              height={40}
              className="rounded-full"
            />
            <div className="flex flex-col">
              <span className="text-sm font-bold text-primary">Radio JL</span>
              <span className="text-xs text-muted-foreground">IE Los Garzones</span>
            </div>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <Link href="#institucion" className="text-sm font-medium hover:text-primary transition-colors">
            Institución
          </Link>
          <Link href="#emisora" className="text-sm font-medium hover:text-primary transition-colors">
            Emisora
          </Link>
          <Link href="#programacion" className="text-sm font-medium hover:text-primary transition-colors">
            Programación
          </Link>
          <Link href="#programas" className="text-sm font-medium hover:text-primary transition-colors">
            Programas
          </Link>
          <Link href="#creditos" className="text-sm font-medium hover:text-primary transition-colors">
            Créditos
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X /> : <Menu />}
          <span className="sr-only">Toggle menu</span>
        </Button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden border-t">
          <div className="container flex flex-col space-y-3 py-4">
            <Link
              href="#institucion"
              className="text-sm font-medium hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Institución
            </Link>
            <Link
              href="#emisora"
              className="text-sm font-medium hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Emisora
            </Link>
            <Link
              href="#programacion"
              className="text-sm font-medium hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Programación
            </Link>
            <Link
              href="#programas"
              className="text-sm font-medium hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Programas
            </Link>
            <Link
              href="#creditos"
              className="text-sm font-medium hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Créditos
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
