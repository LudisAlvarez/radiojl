import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Programas - Radio JL",
  description: "Conoce los programas de Radio JL - INSTITUCIÓN EDUCATIVA LOS GARZONES",
}

export default function ProgramsLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return <>{children}</>
}
