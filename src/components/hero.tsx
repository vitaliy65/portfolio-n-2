"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { Button } from "@/components/ui/button"
import { ArrowDown } from "lucide-react"
import { heroData } from "@/data/hero"
import Image from "next/image"

export function Hero() {
  const heroRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const subtitleRef = useRef<HTMLParagraphElement>(null)
  const ctaRef = useRef<HTMLDivElement>(null)
  const badgesRef = useRef<HTMLDivElement>(null)
  const metricsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } })

      tl.from(titleRef.current, {
        y: 100,
        opacity: 0,
        duration: 1.2,
        delay: 0.3,
      })
        .from(
          subtitleRef.current,
          {
            y: 50,
            opacity: 0,
            duration: 1,
          },
          "-=0.6",
        )
        .from(
          ctaRef.current,
          {
            y: 30,
            opacity: 0,
            duration: 0.8,
          },
          "-=0.4",
        )
        .from(
          badgesRef.current?.querySelectorAll(".badge") || [],
          {
            scale: 0,
            opacity: 0,
            duration: 0.6,
            stagger: 0.1,
            ease: "back.out(1.7)",
          },
          "-=0.4",
        )
        .from(
          metricsRef.current?.querySelectorAll(".metric") || [],
          {
            y: 30,
            opacity: 0,
            duration: 0.8,
            stagger: 0.1,
          },
          "-=0.3",
        )
    }, heroRef)

    return () => ctx.revert()
  }, [])

  const scrollToProjects = () => {
    const element = document.getElementById("projects")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="hero" ref={heroRef} className="relative min-h-screen flex items-center justify-center px-6 lg:px-16">
      <div className="absolute inset-0 grid-background opacity-30" />

      <div className="max-w-7xl w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Main content */}
          <div className="space-y-8">
            <h1
              ref={titleRef}
              className="text-6xl md:text-7xl lg:text-8xl font-bold leading-none tracking-tight text-balance"
            >
              {heroData.highlight}
              <br />
              <span className="text-accent italic">{heroData.highlightDetail}</span>
            </h1>

            <p
              ref={subtitleRef}
              className="text-xl md:text-2xl text-muted-foreground max-w-xl leading-relaxed text-pretty"
            >
              {heroData.description}
            </p>

            <div ref={ctaRef} className="flex items-center gap-4 pt-4">
              <Button
                size="lg"
                className="bg-accent text-accent-foreground hover:bg-accent/90 text-lg px-8 py-6 rounded-full"
                onClick={scrollToProjects}
              >
                View Work
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 py-6 rounded-full border-2 bg-transparent"
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              >
                Get in Touch
              </Button>
            </div>

            <div ref={metricsRef} className="flex gap-8 pt-8">
              {heroData.stats.map((stat, i) => (
                <div className="metric" key={stat.label}>
                  <div className="text-4xl font-bold text-foreground">{stat.value}</div>
                  <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div ref={badgesRef} className="hidden lg:block relative">
            <div className="relative aspect-square max-w-lg mx-auto">
              {/* Main photo container */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-80 h-80 rounded-[3rem] bg-gradient-to-br from-card via-card/50 to-transparent border border-border/50 backdrop-blur-sm flex items-center justify-center overflow-hidden">
                  <Image src={heroData.photo} alt="Developer" className="w-full h-full object-cover select-none" draggable="false" width={1024} height={1024} />
                </div>
              </div>

              {/* Floating badges */}
              {heroData.badges.map((badge, i) => {
                const badgePositions = [
                  "absolute top-8 left-0 rotate-[-8deg]",
                  "absolute top-24 right-8 rotate-[12deg]",
                  "absolute bottom-32 left-4 rotate-[-15deg]",
                  "absolute bottom-16 right-12 rotate-[8deg]",
                  "absolute top-1/2 right-0 rotate-[18deg]",
                ]
                return (
                  <div
                    key={badge.label}
                    className={`badge ${badgePositions[i] || ""} bg-[${badge.color}] text-black px-5 py-3 rounded-full font-bold text-sm shadow-lg`}
                    style={{ backgroundColor: badge.color }}
                  >
                    {badge.label}
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>

      <button
        onClick={scrollToProjects}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-primary transition-colors animate-bounce"
        aria-label="Scroll to projects"
      >
        <ArrowDown className="w-8 h-8" />
      </button>
    </section>
  )
}
