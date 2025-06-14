import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

export default function AboutInstitution() {
  return (
    <section id="institucion" className="section-container bg-white">
      <div className="container">
        <h2 className="section-title">INSTITUCIÓN EDUCATIVA LOS GARZONES</h2>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <Card className="overflow-hidden">
              <div className="relative h-[300px] w-full">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Rgx35UsL_400x400.jpg-ZgsbPryfwlyTWCPvCYJEcD6TVahbmQ.jpeg"
                  alt="Institución Educativa Los Garzones"
                  fill
                  className="object-contain bg-white p-4"
                />
              </div>
            </Card>
          </div>
          <div className="space-y-4">
            <p className="text-lg">
              La Institución Educativa Los Garzones es un centro de formación comprometido con la excelencia académica y
              el desarrollo integral de sus estudiantes.
            </p>
            <p>
              Fundada en [año de fundación], nuestra institución se ha destacado por formar ciudadanos íntegros, con
              valores sólidos y preparados para enfrentar los retos del mundo actual.
            </p>
            <div className="grid grid-cols-2 gap-4 mt-6">
              <Card>
                <CardContent className="p-4 text-center">
                  <h3 className="font-bold text-primary">Misión</h3>
                  <p className="text-sm mt-2">
                    Formar estudiantes con excelencia académica y valores humanos para transformar positivamente su
                    entorno.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4 text-center">
                  <h3 className="font-bold text-secondary">Visión</h3>
                  <p className="text-sm mt-2">
                    Ser reconocidos como una institución líder en formación integral y desarrollo de competencias.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
