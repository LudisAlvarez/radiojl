import Link from "next/link"
import Image from "next/image"
import { Facebook, Instagram, Twitter } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-secondary text-white">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Rgx35UsL_400x400.jpg-ZgsbPryfwlyTWCPvCYJEcD6TVahbmQ.jpeg"
                alt="Logo IE Los Garzones"
                width={40}
                height={40}
                className="rounded-full bg-white"
              />
              <div>
                <h3 className="font-bold">Radio JL</h3>
                <p className="text-sm">IE Los Garzones</p>
              </div>
            </div>
            <p className="text-sm">
              La voz de nuestra institución educativa, transmitiendo conocimiento, cultura y entretenimiento.
            </p>
          </div>

          <div>
            <h3 className="font-bold mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#institucion" className="hover:underline">
                  Institución
                </Link>
              </li>
              <li>
                <Link href="#emisora" className="hover:underline">
                  Emisora
                </Link>
              </li>
              <li>
                <Link href="#programacion" className="hover:underline">
                  Programación
                </Link>
              </li>
              <li>
                <Link href="#programas" className="hover:underline">
                  Programas
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4">Contacto</h3>
            <address className="text-sm not-italic">
              <p>INSTITUCIÓN EDUCATIVA LOS GARZONES</p>
              <p>radiojl@losgarzones.edu.co</p>
              <p>Tel: (123) 456-7890</p>
            </address>
            <div className="flex gap-4 mt-4">
              <Link href="#" className="hover:text-primary transition-colors">
                <Facebook size={20} />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="hover:text-primary transition-colors">
                <Instagram size={20} />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="hover:text-primary transition-colors">
                <Twitter size={20} />
                <span className="sr-only">Twitter</span>
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8 text-center text-sm">
          <p>
            © {new Date().getFullYear()} Radio JL - INSTITUCIÓN EDUCATIVA LOS GARZONES. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
