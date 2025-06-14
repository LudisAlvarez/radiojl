import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Newspaper, Film, Music, Users, Heart, BookOpen, MessageSquare, Mic, Globe } from "lucide-react"

export default function FeaturedPrograms() {
  const featuredPrograms = [
    {
      title: "Notiedu",
      type: "Noticiero",
      description:
        "El informativo escolar que mantiene a toda la comunidad educativa al día con las noticias más relevantes de nuestra institución, el barrio y la ciudad. Presentado por estudiantes que asumen el rol de periodistas.",
      icon: <Newspaper className="h-6 w-6" />,
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Gemini_Generated_Image_vi9glkvi9glkvi9g.png-gqPPMl8tszVaNojioZupoJl1T5eOti.jpeg", // Imagen de Notiedu
      color: "bg-primary/10 text-primary",
      link: "/programas/notiedu",
    },
    {
      title: "Cuentos Sonoros",
      type: "Radionovela",
      description:
        "Una radionovela que transporta a los oyentes a mundos imaginarios a través de historias narradas, efectos de sonido y música. Los estudiantes desarrollan guiones, actúan y producen estas fascinantes historias.",
      icon: <Film className="h-6 w-6" />,
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-06-12%20at%209.13.39%20PM-WnlGQixyBKBttsSnkbDJjo2rY3Jobi.jpeg",
      color: "bg-secondary/10 text-secondary",
      link: "/programas/cuentos-sonoros",
    },
    {
      title: "Estrellas del Cole",
      type: "Entretenimiento",
      description:
        "Un espacio dedicado a mostrar el talento de nuestros estudiantes: música, poesía, entrevistas y concursos que promueven la participación y el reconocimiento de las habilidades artísticas de la comunidad escolar.",
      icon: <Music className="h-6 w-6" />,
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Gemini_Generated_Image_pd9k7apd9k7apd9k.png-kLk6Bpfx1ybzzTAfR6EH1CnsZaG3wH.jpeg",
      color: "bg-primary/10 text-primary",
      link: "/programas/estrellas-del-cole",
    },
  ]

  const otherPrograms = [
    {
      title: "Voces Directivas",
      icon: <Users className="h-5 w-5" />,
      description: "Espacio donde directivos y docentes comparten información importante y reflexiones educativas.",
      link: "/programas/voces-directivas",
    },
    {
      title: "Debate Joven",
      icon: <MessageSquare className="h-5 w-5" />,
      description: "Foro de discusión donde los estudiantes analizan temas de actualidad y expresan sus opiniones.",
      link: "/programas/debate-joven",
    },
    {
      title: "Vida Sana",
      icon: <Heart className="h-5 w-5" />,
      description: "Consejos y recomendaciones para mantener hábitos saludables en la comunidad educativa.",
      link: "/programas/vida-sana",
    },
    {
      title: "Lenguaje y Cultura",
      icon: <BookOpen className="h-5 w-5" />,
      description: "Programa dedicado a la promoción de la lectura, la escritura y las expresiones culturales.",
      link: "/programas/lenguaje-cultura",
    },
    {
      title: "Micrófono Abierto",
      icon: <Mic className="h-5 w-5" />,
      description: "Espacio participativo donde los estudiantes pueden expresar sus ideas y talentos libremente.",
      link: "/programas/microfono-abierto",
    },
    {
      title: "Frikimundo",
      icon: <Globe className="h-5 w-5" />,
      description:
        "Programa dedicado a la cultura geek, videojuegos, cómics, anime y todo lo relacionado con el mundo friki.",
      link: "/programas/frikimundo",
    },
  ]

  return (
    <section id="programas" className="section-container bg-gray-50">
      <div className="container">
        <h2 className="section-title">NUESTROS PROGRAMAS</h2>

        <div className="space-y-16">
          {/* Programas Destacados */}
          <div>
            <h3 className="text-2xl font-bold text-center mb-8">Programas Destacados</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {featuredPrograms.map((program, index) => (
                <Card key={index} className="overflow-hidden">
                  <div className="relative h-[200px] w-full">
                    <Image
                      src={program.image || "/placeholder.svg"}
                      alt={program.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <div className={`h-10 w-10 rounded-full ${program.color} flex items-center justify-center`}>
                        {program.icon}
                      </div>
                      <div>
                        <Link
                          href={program.link}
                          className="font-bold hover:text-primary hover:underline transition-colors"
                        >
                          {program.title}
                        </Link>
                        <p className="text-xs text-muted-foreground">{program.type}</p>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground">{program.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Otros Programas */}
          <div>
            <h3 className="text-2xl font-bold text-center mb-8">Otros Programas</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {otherPrograms.map((program, index) => (
                <div key={index} className="flex items-start gap-4 p-4 bg-white rounded-lg shadow-sm">
                  <div className="h-10 w-10 rounded-full bg-secondary/10 flex items-center justify-center text-secondary shrink-0">
                    {program.icon}
                  </div>
                  <div>
                    <Link
                      href={program.link}
                      className="font-medium hover:text-primary hover:underline transition-colors"
                    >
                      {program.title}
                    </Link>
                    <p className="text-sm text-muted-foreground mt-1">{program.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
