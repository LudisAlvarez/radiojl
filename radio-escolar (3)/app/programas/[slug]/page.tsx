"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { notFound } from "next/navigation"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Play, Pause, Download, Share2, Volume2, VolumeX, Headphones } from "lucide-react"

// Actualizar los datos de los programas con los episodios reales grabados
const programsData = {
  notiedu: {
    title: "Notiedu",
    type: "Noticiero",
    description:
      "El informativo escolar que mantiene a toda la comunidad educativa al día con las noticias más relevantes de nuestra institución, el barrio y la ciudad.",
    longDescription:
      "Notiedu es el noticiero oficial de la Institución Educativa Los Garzones, producido y presentado por estudiantes que asumen el rol de periodistas. Este programa busca desarrollar habilidades comunicativas mientras mantiene informada a la comunidad sobre eventos, logros y noticias relevantes del entorno escolar y local.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Gemini_Generated_Image_vi9glkvi9glkvi9g.png-gqPPMl8tszVaNojioZupoJl1T5eOti.jpeg", // Imagen de Notiedu
    audioSrc:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/notiEdu%2C%20el%20sonido%20que%20conecta%20al%20saber-nOUd2zvA7JJ4Oq2UqlolNJhbU5AqWJ.mp3", // Jingle de Notiedu
    episodeSrc:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/noticiero%20escolar%20%28online-audio-converter.com%29%20%281%29-ZyfloJADlNT68Rt37Tn82zZUh3d9XU.mp3", // Episodio real de Notiedu
    episodeTitle: "Notiedu - Noticiero Escolar",
    episodeDescription: "Escucha las noticias más importantes de nuestra institución educativa.",
    schedule: "Lunes 7:00 - 8:00, Miércoles 7:00 - 8:00 y Viernes 12:00 - 13:00",
    team: ["María González - Directora", "Carlos Pérez - Presentador", "Ana Martínez - Reportera"],
    isPrincipal: true,
  },
  "cuentos-sonoros": {
    title: "Cuentos Sonoros",
    type: "Radionovela",
    description:
      "Una radionovela que transporta a los oyentes a mundos imaginarios a través de historias narradas, efectos de sonido y música.",
    longDescription:
      "Cuentos Sonoros es una radionovela que transporta a los oyentes a mundos imaginarios a través de historias narradas, efectos de sonido y música. Los estudiantes desarrollan guiones, actúan y producen estas fascinantes historias que estimulan la imaginación y promueven el amor por la literatura y la narración oral.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-06-12%20at%209.13.39%20PM-WnlGQixyBKBttsSnkbDJjo2rY3Jobi.jpeg",
    audioSrc:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Audio%202025-06-12%20at%2010.21.02%20PM%20%28online-audio-converter.com%29-tx4mvMtbUuotKHIH69DBbqtqmaYcI3.mp3", // Jingle de Cuentos Sonoros
    episodeSrc:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Radio%20novela%20%28online-audio-converter.com%29-oJY2Y3vQILnJVRlxaC7DnuaDND82x9.mp3", // Episodio real de Cuentos Sonoros (Radionovela)
    episodeTitle: "Cuentos Sonoros - Radionovela",
    episodeDescription: "Sumérgete en una fascinante historia narrada con efectos de sonido y música.",
    schedule: "Martes 9:30 - 10:30 y Jueves 7:00 - 8:00",
    team: ["Pedro Ramírez - Director", "Lucía Sánchez - Guionista", "Juan Díaz - Efectos de sonido"],
    isPrincipal: true,
  },
  "estrellas-del-cole": {
    title: "Estrellas del Cole",
    type: "Entretenimiento",
    description:
      "Un espacio dedicado a mostrar el talento de nuestros estudiantes: música, poesía, entrevistas y concursos.",
    longDescription:
      "Estrellas del Cole es un espacio dedicado a mostrar el talento de nuestros estudiantes a través de música, poesía, entrevistas y concursos que promueven la participación y el reconocimiento de las habilidades artísticas de la comunidad escolar. Cada semana, nuevos talentos tienen la oportunidad de brillar y compartir sus dones con toda la institución.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Gemini_Generated_Image_pd9k7apd9k7apd9k.png-kLk6Bpfx1ybzzTAfR6EH1CnsZaG3wH.jpeg",
    audioSrc:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Estrellas%20del%20Cole-V2ZwYzksQkH8yY63XNDNQFvCNrpI68.mp3", // Jingle de Estrellas del Cole
    episodeSrc:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/cole%20estelar%20%28online-audio-converter.com%29-taclX6F2s3GXVnriRNG5rck7mf8tBQ.mp3", // Episodio real de Estrellas del Cole (Cole Estelar)
    episodeTitle: "Estrellas del Cole - Cole Estelar",
    episodeDescription: "Disfruta del talento y entretenimiento de nuestros estudiantes más destacados.",
    schedule: "Martes 12:00 - 13:00 y Viernes 7:00 - 8:00",
    team: ["Laura Torres - Presentadora", "Daniel Castro - Coordinador musical", "Sofía Ruiz - Entrevistadora"],
    isPrincipal: true,
  },
  "voces-directivas": {
    title: "Voces Directivas",
    type: "Entrevista",
    description: "Espacio donde directivos y docentes comparten información importante y reflexiones educativas.",
    longDescription:
      "Voces Directivas es un espacio donde los directivos y docentes de la institución comparten información importante, reflexiones educativas y orientaciones para toda la comunidad escolar. A través de entrevistas y conversatorios, se abordan temas relevantes para el desarrollo académico y la convivencia escolar.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/voces%20directivas.png-g8AKIiOCpaGWDPOUxXMQ3AmlCATYDs.jpeg", // Imagen de Voces Directivas
    audioSrc:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Audio%202025-06-12%20at%2010.20.32%20PM%20%28online-audio-converter.com%29-oWe9BYfsOzl1NPsMvoywijpgAWvbj8.mp3", // Jingle de Voces Directivas
    schedule: "Lunes 9:30 - 10:30, Miércoles 12:00 - 13:00 y Viernes 14:30 - 15:30",
    team: ["Rector/a - Invitado permanente", "Coordinadores académicos", "Docentes invitados"],
    isPrincipal: false,
  },
  "debate-joven": {
    title: "Debate Joven",
    type: "Opinión",
    description: "Foro de discusión donde los estudiantes analizan temas de actualidad y expresan sus opiniones.",
    longDescription:
      "Debate Joven es un foro de discusión donde los estudiantes analizan temas de actualidad y expresan sus opiniones de manera respetuosa y argumentada. Este espacio promueve el pensamiento crítico, la tolerancia y las habilidades de expresión oral, preparando a los jóvenes para ser ciudadanos participativos.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/debate%20joven.png-gcmVlXAMdEJv2i2w75ETfuqbW0L037.jpeg", // Imagen de Debate Joven
    audioSrc:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/debate%20joven-RHT6BlEK7NGBSVqtWGYjGEr6pwntwP.mp3", // Jingle de Debate Joven
    schedule: "Martes 7:00 - 8:00 y Miércoles 14:30 - 15:30",
    team: ["Profesor/a de Ciencias Sociales - Moderador/a", "Estudiantes de diferentes grados"],
    isPrincipal: false,
  },
  "vida-sana": {
    title: "Vida Sana",
    type: "Bienestar",
    description: "Consejos y recomendaciones para mantener hábitos saludables en la comunidad educativa.",
    longDescription:
      "Vida Sana ofrece consejos y recomendaciones para mantener hábitos saludables en la comunidad educativa. Con la participación de profesionales de la salud y docentes de educación física, este programa promueve la alimentación balanceada, la actividad física y el bienestar emocional.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/vida%20sana.png-zQKXCIMQ405kteXUdYBIUo3hnmoiVl.jpeg", // Imagen de Vida Sana
    audioSrc: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Vida%20Sana-P823GvQSdpL5UjHAwtt8P6yR01xyNl.mp3", // Jingle de Vida Sana
    schedule: "Lunes 14:30 - 15:30 y Jueves 14:30 - 15:30",
    team: ["Profesor/a de Educación Física", "Enfermera/o escolar", "Estudiantes promotores de salud"],
    isPrincipal: false,
  },
  "lenguaje-cultura": {
    title: "Lenguaje y Cultura",
    type: "Educativo",
    description: "Programa dedicado a la promoción de la lectura, la escritura y las expresiones culturales.",
    longDescription:
      "Lenguaje y Cultura es un programa dedicado a la promoción de la lectura, la escritura y las expresiones culturales. A través de recomendaciones literarias, entrevistas a escritores locales y muestras de producción textual de los estudiantes, se fomenta el amor por las letras y la apreciación de la diversidad cultural.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/lenguaje%20y%20cultura-KShPmHm2VMRlQfXO21w6Ol7iNj1Vgp.png", // Imagen de Lenguaje y Cultura
    audioSrc:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/_Lenguas%20y%20Culturas-WEMIe1zCzfLtVnQrcH2bfkgkY1OGY0.mp3", // Jingle de Lenguas y Culturas
    schedule: "Martes 14:30 - 15:30 y Jueves 9:30 - 10:30",
    team: ["Profesor/a de Lengua Castellana", "Bibliotecario/a", "Club de lectura"],
    isPrincipal: false,
  },
  "microfono-abierto": {
    title: "Micrófono Abierto",
    type: "Participativo",
    description: "Espacio participativo donde los estudiantes pueden expresar sus ideas y talentos libremente.",
    longDescription:
      "Micrófono Abierto es un espacio participativo donde los estudiantes pueden expresar sus ideas y talentos libremente. Cada semana, diferentes estudiantes tienen la oportunidad de compartir sus pensamientos, poemas, canciones o reflexiones con toda la comunidad educativa, fomentando la libertad de expresión y la confianza en sí mismos.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/microfono%20abierto.png-5sTihxbHL81xZrkTe3Wszr6BaUsSkQ.jpeg", // Imagen de Micrófono Abierto
    audioSrc:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/microfono%20abierto-zI5DkJHb8b16sSZyqDxG6g0BVTK2gF.mp3", // Jingle de Micrófono Abierto
    schedule: "Lunes 12:00 - 13:00 y Jueves 12:00 - 13:00",
    team: ["Coordinador/a de participación estudiantil", "Estudiantes voluntarios"],
    isPrincipal: false,
  },
  frikimundo: {
    title: "Frikimundo",
    type: "Entretenimiento",
    description:
      "Programa dedicado a la cultura geek, videojuegos, cómics, anime y todo lo relacionado con el mundo friki.",
    longDescription:
      "Frikimundo es un programa dedicado a la cultura geek, videojuegos, cómics, anime y todo lo relacionado con el mundo friki. Conducido por estudiantes apasionados por estas temáticas, este espacio ofrece reseñas, noticias y debates sobre las últimas tendencias en entretenimiento digital y cultura pop.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/frikimundo.png-2clf4g5rU90RG0xukK6Uuyh7xk2NsO.jpeg", // Imagen de Frikimundo
    audioSrc: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/_FrikiMundo-NP2YGivqU0ipDjZHeNV85LPTtFcffb.mp3", // Jingle de FrikiMundo
    schedule: "Miércoles 9:30 - 10:30 y Viernes 9:30 - 10:30",
    team: ["Club de tecnología", "Aficionados a los videojuegos", "Amantes del anime y cómics"],
    isPrincipal: false,
  },
}

// Componente para el reproductor de audio
function AudioPlayer({
  audioSrc,
  title,
  description,
  icon,
}: {
  audioSrc: string
  title: string
  description?: string
  icon: React.ReactNode
}) {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(false)
  const [duration, setDuration] = useState(0)
  const [currentTime, setCurrentTime] = useState(0)
  const audioRef = useRef<HTMLAudioElement>(null)

  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return

    const setAudioData = () => {
      setDuration(audio.duration)
    }

    const setAudioTime = () => {
      setCurrentTime(audio.currentTime)
    }

    const handleEnded = () => {
      setIsPlaying(false)
      setCurrentTime(0)
    }

    audio.addEventListener("loadeddata", setAudioData)
    audio.addEventListener("timeupdate", setAudioTime)
    audio.addEventListener("ended", handleEnded)

    return () => {
      audio.removeEventListener("loadeddata", setAudioData)
      audio.removeEventListener("timeupdate", setAudioTime)
      audio.removeEventListener("ended", handleEnded)
    }
  }, [])

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause()
      } else {
        audioRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted
      setIsMuted(!isMuted)
    }
  }

  const formatTime = (time: number) => {
    if (isNaN(time)) return "0:00"
    const minutes = Math.floor(time / 60)
    const seconds = Math.floor(time % 60)
    return `${minutes}:${seconds.toString().padStart(2, "0")}`
  }

  const handleProgressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (audioRef.current) {
      const newTime = Number.parseFloat(e.target.value)
      audioRef.current.currentTime = newTime
      setCurrentTime(newTime)
    }
  }

  return (
    <div className="space-y-4">
      <audio ref={audioRef} src={audioSrc} preload="metadata" />
      <div className="bg-muted p-4 rounded-md">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
              {icon}
            </div>
            <div>
              <span className="font-medium">{title}</span>
              {description && <p className="text-sm text-muted-foreground">{description}</p>}
            </div>
          </div>
          <div className="flex gap-2">
            <Button size="icon" variant="secondary" onClick={togglePlay}>
              {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
              <span className="sr-only">{isPlaying ? "Pausar" : "Reproducir"}</span>
            </Button>
            <Button size="icon" variant="ghost" onClick={toggleMute}>
              {isMuted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
              <span className="sr-only">{isMuted ? "Activar sonido" : "Silenciar"}</span>
            </Button>
            <Button size="icon" variant="ghost" asChild>
              <a href={audioSrc} download>
                <Download className="h-4 w-4" />
                <span className="sr-only">Descargar</span>
              </a>
            </Button>
            <Button size="icon" variant="ghost">
              <Share2 className="h-4 w-4" />
              <span className="sr-only">Compartir</span>
            </Button>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <span className="text-sm text-muted-foreground w-10">{formatTime(currentTime)}</span>
          <input
            type="range"
            min="0"
            max={duration || 0}
            value={currentTime}
            onChange={handleProgressChange}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
          />
          <span className="text-sm text-muted-foreground w-10">{formatTime(duration)}</span>
        </div>
      </div>
    </div>
  )
}

export default function ProgramPage({ params }: { params: { slug: string } }) {
  const program = programsData[params.slug as keyof typeof programsData]

  if (!program) {
    notFound()
  }

  return (
    <div className="container py-12">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-primary mb-2">{program.title}</h1>
          <p className="text-muted-foreground">{program.type}</p>
        </div>

        <div className="relative h-[300px] w-full rounded-lg overflow-hidden mb-8">
          <Image src={program.image || "/placeholder.svg"} alt={program.title} fill className="object-cover" />
        </div>

        {/* Jingle del programa */}
        <Card className="mb-8">
          <CardContent className="p-6">
            <h2 className="text-xl font-bold mb-4">Escucha nuestro jingle</h2>
            <AudioPlayer
              audioSrc={program.audioSrc}
              title={`${program.title} - Jingle`}
              icon={<Volume2 className="h-5 w-5" />}
            />
          </CardContent>
        </Card>

        {/* Episodio grabado - Solo para programas principales */}
        {program.isPrincipal && (
          <Card className="mb-8">
            <CardContent className="p-6">
              <h2 className="text-xl font-bold mb-4">Escucha un episodio</h2>
              <p className="text-muted-foreground mb-4">
                Disfruta de una muestra de nuestro programa. Aquí podrás escuchar episodios completos y fragmentos
                destacados producidos por nuestros estudiantes.
              </p>
              <AudioPlayer
                audioSrc={program.episodeSrc!}
                title={program.episodeTitle!}
                description={program.episodeDescription}
                icon={<Headphones className="h-5 w-5" />}
              />
            </CardContent>
          </Card>
        )}

        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div className="md:col-span-2 space-y-4">
            <h2 className="text-xl font-bold">Acerca del programa</h2>
            <p>{program.longDescription}</p>
          </div>
          <div>
            <h2 className="text-xl font-bold mb-4">Detalles</h2>
            <div className="space-y-3">
              <div>
                <h3 className="font-medium">Horario:</h3>
                <p className="text-sm text-muted-foreground">{program.schedule}</p>
              </div>
              <div>
                <h3 className="font-medium">Equipo:</h3>
                <ul className="text-sm text-muted-foreground">
                  {program.team.map((member, index) => (
                    <li key={index}>{member}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center">
          <Button>{program.isPrincipal ? "Ver más episodios" : "Escuchar episodios anteriores"}</Button>
        </div>
      </div>
    </div>
  )
}
