"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"
import { Clock, Calendar } from "lucide-react"
import Link from "next/link"

export default function ProgramSchedule() {
  const [day, setDay] = useState("lunes")

  const schedule = {
    lunes: [
      { time: "7:00 - 8:00", program: "Notiedu", type: "Noticiero", link: "/programas/notiedu" },
      { time: "9:30 - 10:30", program: "Voces Directivas", type: "Entrevista", link: "/programas/voces-directivas" },
      {
        time: "12:00 - 13:00",
        program: "Micrófono Abierto",
        type: "Participativo",
        link: "/programas/microfono-abierto",
      },
      { time: "14:30 - 15:30", program: "Vida Sana", type: "Bienestar", link: "/programas/vida-sana" },
    ],
    martes: [
      { time: "7:00 - 8:00", program: "Debate Joven", type: "Opinión", link: "/programas/debate-joven" },
      { time: "9:30 - 10:30", program: "Cuentos Sonoros", type: "Radionovela", link: "/programas/cuentos-sonoros" },
      {
        time: "12:00 - 13:00",
        program: "Estrellas del Cole",
        type: "Entretenimiento",
        link: "/programas/estrellas-del-cole",
      },
      { time: "14:30 - 15:30", program: "Lenguaje y Cultura", type: "Educativo", link: "/programas/lenguaje-cultura" },
    ],
    miercoles: [
      { time: "7:00 - 8:00", program: "Notiedu", type: "Noticiero", link: "/programas/notiedu" },
      { time: "9:30 - 10:30", program: "Frikimundo", type: "Entretenimiento", link: "/programas/frikimundo" },
      {
        time: "12:00 - 13:00",
        program: "Voces Directivas",
        type: "Entrevista",
        link: "/programas/voces-directivas",
      },
      { time: "14:30 - 15:30", program: "Debate Joven", type: "Opinión", link: "/programas/debate-joven" },
    ],
    jueves: [
      {
        time: "7:00 - 8:00",
        program: "Cuentos Sonoros",
        type: "Radionovela",
        link: "/programas/cuentos-sonoros",
      },
      { time: "9:30 - 10:30", program: "Lenguaje y Cultura", type: "Educativo", link: "/programas/lenguaje-cultura" },
      {
        time: "12:00 - 13:00",
        program: "Micrófono Abierto",
        type: "Participativo",
        link: "/programas/microfono-abierto",
      },
      { time: "14:30 - 15:30", program: "Vida Sana", type: "Bienestar", link: "/programas/vida-sana" },
    ],
    viernes: [
      {
        time: "7:00 - 8:00",
        program: "Estrellas del Cole",
        type: "Entretenimiento",
        link: "/programas/estrellas-del-cole",
      },
      { time: "9:30 - 10:30", program: "Frikimundo", type: "Entretenimiento", link: "/programas/frikimundo" },
      { time: "12:00 - 13:00", program: "Notiedu", type: "Noticiero", link: "/programas/notiedu" },
      { time: "14:30 - 15:30", program: "Voces Directivas", type: "Entrevista", link: "/programas/voces-directivas" },
    ],
  }

  return (
    <section id="programacion" className="section-container">
      <div className="container">
        <h2 className="section-title">PROGRAMACIÓN</h2>
        <p className="text-center text-muted-foreground mb-8 max-w-2xl mx-auto">
          Conoce nuestra parrilla de programación semanal. Radio JL transmite contenidos educativos y de entretenimiento
          para toda la comunidad escolar. Haz clic en el nombre del programa para escuchar su jingle o último episodio.
        </p>

        <Card className="max-w-4xl mx-auto">
          <CardContent className="p-6">
            <div className="flex items-center gap-2 mb-6">
              <Calendar className="h-5 w-5 text-primary" />
              <h3 className="text-xl font-bold">Parrilla de Programación</h3>
            </div>

            <Tabs defaultValue="lunes" className="w-full" onValueChange={setDay}>
              <TabsList className="grid grid-cols-5 mb-6">
                <TabsTrigger value="lunes">Lunes</TabsTrigger>
                <TabsTrigger value="martes">Martes</TabsTrigger>
                <TabsTrigger value="miercoles">Miércoles</TabsTrigger>
                <TabsTrigger value="jueves">Jueves</TabsTrigger>
                <TabsTrigger value="viernes">Viernes</TabsTrigger>
              </TabsList>

              {Object.entries(schedule).map(([dayName, programs]) => (
                <TabsContent key={dayName} value={dayName} className="mt-0">
                  <div className="space-y-4">
                    {programs.map((program, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-4 p-4 rounded-lg border hover:bg-muted/50 transition-colors"
                      >
                        <div className="flex items-center justify-center h-12 w-12 rounded-full bg-primary/10 text-primary shrink-0">
                          <Clock className="h-6 w-6" />
                        </div>
                        <div className="flex-1">
                          <Link
                            href={program.link}
                            className="font-medium hover:text-primary hover:underline transition-colors"
                          >
                            {program.program}
                          </Link>
                          <p className="text-sm text-muted-foreground">{program.type}</p>
                        </div>
                        <div className="text-sm font-medium text-muted-foreground">{program.time}</div>
                      </div>
                    ))}
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
