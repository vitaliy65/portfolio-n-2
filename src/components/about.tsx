"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Card } from "@/components/ui/card"
import { AboutThree } from "@/components/about-three"
import { skills } from "@/data/about"
import Image from "next/image"

gsap.registerPlugin(ScrollTrigger)

export function About() {
  const sectionRef = useRef<HTMLElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const cardsRef = useRef<HTMLDivElement>(null)
  const photoRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(titleRef.current, {
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 80%",
          end: "bottom 60%",
          toggleActions: "play none none reverse",
        },
        y: 60,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      })

      gsap.from(contentRef.current, {
        scrollTrigger: {
          trigger: contentRef.current,
          start: "top 80%",
          end: "bottom 60%",
          toggleActions: "play none none reverse",
        },
        y: 40,
        opacity: 0,
        duration: 1,
        delay: 0.2,
        ease: "power3.out",
      })

      gsap.from(photoRef.current, {
        scrollTrigger: {
          trigger: photoRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
        scale: 0.9,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      })


      const cards = cardsRef.current?.querySelectorAll(".skill-card")
      if (cards && cards.length > 0) {
        gsap.fromTo(
          cards,
          {
            opacity: 0,
            y: 60,
          },
          {
            scrollTrigger: {
              trigger: cardsRef.current,
              start: "top 95%",
              end: "bottom 60%",
              toggleActions: "play none none reverse",
              immediateRender: false,
            },
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.1,
            ease: "power3.in",
          },
        )
      }
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      id="about"
      ref={sectionRef}
      className="min-h-screen flex items-center px-6 lg:px-16 py-32 bg-background relative"
    >
      <div className="absolute inset-0 grid-background opacity-20" />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <h2 ref={titleRef} className="text-5xl md:text-7xl lg:text-8xl font-bold mb-16 text-balance">
          about
        </h2>

        <div className="grid lg:grid-cols-2 gap-16 mb-20">
          <div ref={contentRef} className="space-y-6">
            <p className="text-xl md:text-2xl leading-relaxed text-muted-foreground text-pretty">
              I’m a frontend developer focused on building clean, responsive interfaces and writing predictable, maintainable code.
            </p>

            <p className="text-xl md:text-2xl leading-relaxed text-muted-foreground text-pretty">
              I work primarily with React, Next.js, TypeScript, and TailwindCSS, and have experience building real projects from scratch —
              from layout and UI logic to API integration and deployment.
            </p>

            <p className="text-xl md:text-2xl leading-relaxed text-muted-foreground text-pretty">
              I care about structure, clarity, and user experience, and I’m constantly improving my skills by shipping projects and
              refining existing solutions.
            </p>
          </div>

          <div ref={photoRef} className="relative">
            <div className="aspect-square rounded-[3rem] bg-card border-2 border-border overflow-hidden">
              <Image src="/me-small.png" alt="Workspace" className="w-full h-full object-cover select-none" draggable="false" width={1024} height={1024} />
            </div>
          </div>
        </div>

        <div className="hidden lg:block mb-20">
          <AboutThree />
        </div>

        <div ref={cardsRef} className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {skills.map((skill) => (
            <Card
              key={skill.category}
              className="skill-card p-6 bg-card/50 backdrop-blur-sm border-border/50 rounded-3xl hover:bg-card/80 transition-all duration-300 hover:scale-105 relative overflow-hidden group"
            >
              {/* Colored accent bar */}
              <div
                className="absolute top-0 left-0 w-full h-1 transition-all duration-300 group-hover:h-2"
                style={{ backgroundColor: skill.color }}
              />
              <h3 className="text-sm font-semibold text-foreground mb-4 uppercase tracking-wider pt-2">
                {skill.category}
              </h3>
              <ul className="space-y-2">
                {skill.items.map((item) => (
                  <li key={item} className="text-base text-muted-foreground">
                    {item}
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
