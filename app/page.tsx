import Hero from "@/components/hero"
import JinglePlayer from "@/components/jingle-player" // Importar el nuevo componente
import AboutInstitution from "@/components/about-institution"
import AboutRadio from "@/components/about-radio"
import ProgramSchedule from "@/components/program-schedule"
import FeaturedPrograms from "@/components/featured-programs"
import Credits from "@/components/credits"

export default function Home() {
  return (
    <div className="container mx-auto px-4">
      <Hero />
      <JinglePlayer /> {/* Añadir el reproductor del jingle después del hero */}
      <AboutInstitution />
      <AboutRadio />
      <ProgramSchedule />
      <FeaturedPrograms />
      <Credits />
    </div>
  )
}
