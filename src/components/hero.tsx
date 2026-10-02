"use client"

import { motion, useScroll, useSpring, useTransform } from "motion/react"
import { ArrowUpRight, MoveDownRight } from "lucide-react"
import { heroData } from "@/data/hero"
import Image from "next/image"

export function Hero() {
  const { scrollYProgress } = useScroll()
  const smoothProgress = useSpring(scrollYProgress, { stiffness: 90, damping: 24 })
  const heroY = useTransform(smoothProgress, [0, 0.25], [0, -70])
  const heroOpacity = useTransform(smoothProgress, [0, 0.18], [1, 0])

  return (
    <motion.section id="hero" className="hero" style={{ y: heroY, opacity: heroOpacity }}>
      <p className="hero-kicker">
        <span className="eyebrow-dot" />
        {heroData.name} <span className="hero-place">/ {heroData.title}</span>
      </p>
      <h1>
        {heroData.highlight}<br />
        <em>{heroData.highlightDetail}</em>
        <ArrowUpRight className="accent-mark" aria-hidden="true" />
      </h1>
      <div className="hero-bottom">
        <p>{heroData.description}</p>
        <a className="round-link" href="#work" aria-label="Scroll to selected work">
          <MoveDownRight />
        </a>
        <span className="hero-index">01 <i /> 04</span>
      </div>
      <div className="hero-portrait ">
        <Image src={heroData.photo} alt="Posvistak Vitaliy" fill className="border-none"/>
      </div>
    </motion.section>
  )
}
