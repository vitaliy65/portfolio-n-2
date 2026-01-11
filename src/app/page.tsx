"use client"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Projects } from "@/components/projects"
import { Contact } from "@/components/contact"
import { Navigation } from "@/components/Navigation"
import { useLoading } from "@/hooks/useLoading"
import MineGameButton from "@/components/games/MineGameButton"
import { gsap } from "gsap"
import { useState } from "react"
import GameContainer from "@/components/games/mineOres/GameContainer"
import { LoadingScreen } from "@/components/LoadingScreen"

export default function Home() {
  const { isLoading } = useLoading()
  const [animationFinished, setAnimationFinished] = useState(false);

  const openGameHandler = () => {
    gsap.to("#mainPage", {
      xPercent: -100,
      opacity: 0,
      onComplete: () => setAnimationFinished(true)
    })
  }

  const closeGameHandler = () => {
    setAnimationFinished(false)
  }

  if (animationFinished) return <GameContainer onGameClose={closeGameHandler} />

  return (
    <>
      <LoadingScreen />
      <main id="mainPage" className={`relative bg-background transition-opacity duration-500 overflow-hidden ${isLoading ? "opacity-0 h-0 overflow-hidden" : "opacity-100 min-h-screen"}`}>
        <div className="absolute inset-0 opacity-45 grid-background" />
        <MineGameButton onClick={openGameHandler} variant="right" content="Mine game" />
        <Navigation />
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
    </>
  )
}
