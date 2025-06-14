import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

export default function Credits() {
  const teamMembers = [
    {
      name: "Ludis Álvarez",
      role: "Guionista",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-06-10%20at%209.59.46%20PM-ShsHbn7t4EysxboNjvC1J05UnZO5ja.jpeg",
    },
    {
      name: "Luis González",
      role: "Director",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-06-13%20at%203.12.53%20PM-kF0nszFHwXCePeAIeVvlTLsIUyU9cr.jpeg",
    },
    {
      name: "Juan Palomo",
      role: "Periodista",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-06-10%20at%209.54.34%20PM-1DJJTUJT1HCOwR45Rj5gVWDTKnEHM3.jpeg",
    },
    {
      name: "Leonardo Cordero",
      role: "Periodista",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-06-10%20at%209.53.00%20PM-lnAt7VsReR4YvBCvntj0WfMOsvUAJs.jpeg",
    },
    {
      name: "Juan Lozano",
      role: "Periodista",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-06-13%20at%203.19.12%20PM-tnD6MvK4EJJcSgjoQ7bzZVi1bDM561.jpeg",
    },
    {
      name: "Juan Miranda",
      role: "Locutor",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-06-13%20at%203.57.10%20PM-dIR0OPrAAz6JKgUnUAoFY0EZdA5WZw.jpeg",
    },
    {
      name: "Ximena Sibaja",
      role: "Locutora",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-06-13%20at%203.52.14%20PM-PTzp3Pyzyb31jInAjOHB2Cv9rAfk7e.jpeg",
    },
  ]

  return (
    <section id="creditos" className="section-container">
      <div className="container">
        <h2 className="section-title">CRÉDITOS</h2>
        <p className="text-center text-muted-foreground mb-8 max-w-2xl mx-auto">
          Radio JL es posible gracias al esfuerzo y dedicación de un equipo comprometido con la comunicación educativa.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamMembers.map((member, index) => (
            <Card key={index}>
              <CardContent className="p-6 text-center">
                <div className="flex justify-center mb-4">
                  <div className="relative h-24 w-24 rounded-full overflow-hidden border-4 border-primary/20">
                    <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
                  </div>
                </div>
                <h4 className="font-bold">{member.name}</h4>
                <p className="text-sm text-muted-foreground">{member.role}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <h3 className="text-xl font-bold mb-4">Agradecimientos</h3>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
            Agradecemos a toda la comunidad educativa de la INSTITUCIÓN EDUCATIVA LOS GARZONES por su apoyo y
            participación en este proyecto radiofónico que fortalece nuestra identidad institucional.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <div className="bg-gray-100 rounded-lg p-4 text-center">
              <h4 className="font-medium">Desarrollo Web</h4>
              <p className="text-sm text-muted-foreground">v0 (Vercel)</p>
            </div>
            <div className="bg-gray-100 rounded-lg p-4 text-center">
              <h4 className="font-medium">Asistencia IA</h4>
              <p className="text-sm text-muted-foreground">ChatGPT</p>
            </div>
            <div className="bg-gray-100 rounded-lg p-4 text-center">
              <h4 className="font-medium">Generación de Imágenes</h4>
              <p className="text-sm text-muted-foreground">Suno AI</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
