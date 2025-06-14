import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Radio } from "lucide-react"

export default function Hero() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-blue-50">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                <span className="text-primary">Radio JL</span> - La voz de Los Garzones
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                Emisora escolar de la INSTITUCIÓN EDUCATIVA LOS GARZONES, donde la educación se transmite en ondas de
                conocimiento.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button className="gap-1">
                <Radio className="h-4 w-4" />
                Escuchar en vivo
              </Button>
              <Button variant="outline">Ver programación</Button>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="relative h-[300px] w-[300px] md:h-[400px] md:w-[400px]">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative h-[250px] w-[250px] md:h-[350px] md:w-[350px] rounded-full overflow-hidden border-8 border-white shadow-xl">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Rgx35UsL_400x400.jpg-ZgsbPryfwlyTWCPvCYJEcD6TVahbmQ.jpeg"
                    alt="Escudo IE Los Garzones"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="absolute inset-0 animate-spin-slow [animation-duration:15s]">
                <div className="h-full w-full rounded-full border-4 border-dashed border-primary opacity-20"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
