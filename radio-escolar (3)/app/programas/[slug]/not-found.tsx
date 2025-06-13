import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <div className="container flex flex-col items-center justify-center py-20">
      <h2 className="text-3xl font-bold mb-4">Programa no encontrado</h2>
      <p className="text-muted-foreground mb-8 text-center max-w-md">
        Lo sentimos, el programa que estás buscando no existe o ha sido movido.
      </p>
      <Button asChild>
        <Link href="/#programacion">Ver programación</Link>
      </Button>
    </div>
  )
}
