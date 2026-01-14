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
        duration: 0.8,
        ease: "power2.in",
      })

      const projectEls = gsap.utils.toArray<HTMLElement>(".project-card");
      const numProjects = projectEls.length;

      const tl = gsap
        .timeline({
          scrollTrigger: {
            trigger: "#projects-cards",
            start: "top center",
            scrub: 2,
            pin: true,
            end: `+=${numProjects * 1000}vh`
          }
        })

      projectEls?.forEach((project) => {
        // -=-=-=--=-=-=- OLD ANIMATION -=-=-=--=-=-=-
        // gsap.from(project, {
        //   scrollTrigger: {
        //     trigger: project,
        //     start: "top bottom",
        //     end: "top center",
        //     scrub: true,
        //   },
        //   y: 160,
        //   opacity: 0,
        //   scale: 0.8,
        //   duration: 0.5,
        //   ease: "power2.in",
        // })
        tl.from(
          project,
          {
            y: window.innerHeight / 2,
            opacity: 0,
            scale: 0.8,
            duration: 1,
            ease: "power2.in",
            delay: 1
          }
        );
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section id="projects" ref={sectionRef} className="min-h-screen px-6 lg:px-16 py-32 mb-64">
      <div className="max-w-7xl mx-auto w-full">
        <h2 ref={titleRef} className="text-5xl md:text-7xl lg:text-8xl font-bold mb-20 text-balance">
          selected
          <br />
          <span className="text-muted-foreground italic">work</span>
        </h2>

        <div
          id="projects-cards"
          ref={projectsRef}
          className="relative"
        >
          {projects.map((project, index) => (
            <div
              className="project-card flex absolute bottom-1/2 top-1/2 justify-center items-center"
              key={project.title}
            >
              <ProjectCard
                {...project}
                index={index}
                modelPath={project.modelPath}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
