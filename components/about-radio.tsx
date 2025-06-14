import Image from "next/image"
import { Headphones, Mic2, Music } from "lucide-react"

export default function AboutRadio() {
  return (
    <section id="emisora" className="section-container bg-gray-50">
      <div className="container">
        <h2 className="section-title">RADIO JL</h2>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="order-2 md:order-1 space-y-4">
            <p className="text-lg">
              Radio JL es la emisora escolar de la Institución Educativa Los Garzones, un espacio de expresión,
              aprendizaje y entretenimiento para toda la comunidad educativa.
            </p>
            <p>
              Nuestro proyecto radiofónico busca fortalecer las habilidades comunicativas de los estudiantes, promover
              la participación y difundir contenidos educativos de calidad.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
              <div className="flex flex-col items-center text-center p-4 bg-white rounded-lg shadow-sm">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-3">
                  <Mic2 className="h-6 w-6" />
                </div>
                <h3 className="font-medium">Expresión</h3>
                <p className="text-sm text-muted-foreground mt-1">Espacio para las voces de nuestra comunidad</p>
              </div>

              <div className="flex flex-col items-center text-center p-4 bg-white rounded-lg shadow-sm">
                <div className="h-12 w-12 rounded-full bg-secondary/10 flex items-center justify-center text-secondary mb-3">
                  <Headphones className="h-6 w-6" />
                </div>
                <h3 className="font-medium">Educación</h3>
                <p className="text-sm text-muted-foreground mt-1">Contenidos que complementan el aprendizaje</p>
              </div>

              <div className="flex flex-col items-center text-center p-4 bg-white rounded-lg shadow-sm">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-3">
                  <Music className="h-6 w-6" />
                </div>
                <h3 className="font-medium">Entretenimiento</h3>
                <p className="text-sm text-muted-foreground mt-1">Música y programas para disfrutar</p>
              </div>
            </div>
          </div>

          <div className="order-1 md:order-2">
            <div className="relative h-[300px] w-full rounded-lg overflow-hidden shadow-lg">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-06-12%20at%2010.10.08%20PM-8356RGkQWidl6l6blCOOYCENmuPOfq.jpeg"
                alt="Estudio de Radio JL"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                <div className="p-6 text-white">
                  <h3 className="text-xl font-bold">Nuestro Estudio</h3>
                  <p className="text-sm opacity-90">
                    Equipado con tecnología profesional para producir contenidos de calidad
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
