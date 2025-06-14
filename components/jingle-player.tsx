"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Play, Pause, Volume2, VolumeX, Radio } from "lucide-react"
import { cn } from "@/lib/utils"

export default function JinglePlayer() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(false)
  const [duration, setDuration] = useState(0)
  const [currentTime, setCurrentTime] = useState(0)
  const audioRef = useRef<HTMLAudioElement>(null)

  // URL del jingle oficial de Radio JL
  const jingleUrl =
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Jingle%20Radio%20JL%202%20%28online-audio-converter.com%29-iLwF2bpQnps08wNDHugeWqrCuIN0yY.mp3" // Jingle oficial de Radio JL

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

    // Add event listeners
    audio.addEventListener("loadeddata", setAudioData)
    audio.addEventListener("timeupdate", setAudioTime)
    audio.addEventListener("ended", handleEnded)

    // Clean up
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
    <section className="py-12 bg-gradient-to-r from-red-50 to-blue-50">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <Card className="overflow-hidden border-2 border-primary/20">
            <CardContent className="p-0">
              <div className="grid md:grid-cols-[1fr_2fr] items-center">
                <div className="bg-primary p-6 text-white flex flex-col items-center justify-center h-full">
                  <Radio className="h-16 w-16 mb-4" />
                  <h2 className="text-2xl font-bold text-center">Jingle Oficial</h2>
                  <p className="text-sm opacity-90 text-center mt-2">Radio JL - La voz de Los Garzones</p>
                </div>

                <div className="p-6 space-y-6">
                  <audio ref={audioRef} src={jingleUrl} preload="metadata" />

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Button
                        size="lg"
                        onClick={togglePlay}
                        className={cn(
                          "rounded-full h-14 w-14 flex items-center justify-center",
                          isPlaying ? "bg-secondary hover:bg-secondary/90" : "bg-primary hover:bg-primary/90",
                        )}
                      >
                        {isPlaying ? <Pause className="h-6 w-6" /> : <Play className="h-6 w-6 ml-1" />}
                        <span className="sr-only">{isPlaying ? "Pausar" : "Reproducir"}</span>
                      </Button>
                      <div>
                        <h3 className="font-bold text-lg">Escucha nuestro jingle oficial</h3>
                        <p className="text-sm text-muted-foreground">¡La identidad sonora de Radio JL!</p>
                      </div>
                    </div>
                    <Button size="icon" variant="ghost" onClick={toggleMute}>
                      {isMuted ? <VolumeX className="h-5 w-5" /> : <Volume2 className="h-5 w-5" />}
                      <span className="sr-only">{isMuted ? "Activar sonido" : "Silenciar"}</span>
                    </Button>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center gap-3">
                      <span className="text-sm font-medium w-10">{formatTime(currentTime)}</span>
                      <div className="relative flex-1">
                        <input
                          type="range"
                          min="0"
                          max={duration || 0}
                          value={currentTime}
                          onChange={handleProgressChange}
                          className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                        />
                        <div
                          className="absolute top-0 left-0 h-2 bg-primary rounded-lg pointer-events-none"
                          style={{ width: `${(currentTime / (duration || 1)) * 100}%` }}
                        />
                      </div>
                      <span className="text-sm font-medium w-10">{formatTime(duration)}</span>
                    </div>
                    <div className="flex justify-between text-xs text-muted-foreground">
                      <span>Jingle Oficial Radio JL</span>
                      <span>INSTITUCIÓN EDUCATIVA LOS GARZONES</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
