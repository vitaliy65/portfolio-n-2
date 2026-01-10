"use client"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Projects } from "@/components/projects"
import { Contact } from "@/components/contact"
import { Navigation } from "@/components/navigation"
import { useLoading } from "@/hooks/useLoading"

export default function Home() {
  const { isLoading } = useLoading()

  return (
    <main className={`relative bg-background transition-opacity duration-500 ${isLoading ? "opacity-0 h-0 overflow-hidden" : "opacity-100 min-h-screen"}`}>
      <Navigation />
      <Hero />
      <About />
      <Projects />
      <Contact />
    </main>
  )
}
