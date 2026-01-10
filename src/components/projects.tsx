"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { ProjectCard } from "@/components/project-card"
import { projects } from "@/data/projects"

gsap.registerPlugin(ScrollTrigger)

export function Projects() {
  const sectionRef = useRef<HTMLElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const projectsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(titleRef.current, {
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
        y: 60,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      })

      const projects = projectsRef.current?.querySelectorAll(".project-card")
      projects?.forEach((project) => {
        gsap.from(project, {
          scrollTrigger: {
            trigger: project,
            start: "top 95%",
            toggleActions: "play none none reverse",
          },
          y: 80,
          opacity: 0,
          duration: 1.2,
          ease: "power3.out",
        })
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section id="projects" ref={sectionRef} className="min-h-screen px-6 lg:px-16 py-32">
      <div className="max-w-7xl mx-auto w-full">
        <h2 ref={titleRef} className="text-5xl md:text-7xl lg:text-8xl font-bold mb-20 text-balance">
          selected
          <br />
          <span className="text-muted-foreground italic">work</span>
        </h2>

        <div ref={projectsRef} className="space-y-32">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} {...project} index={index} modelPath={project.modelPath} />
          ))}
        </div>
      </div>
    </section>
  )
}
