"use client"

import { motion } from "motion/react"
import { ProjectCard } from "@/components/project-card"
import { projects } from "@/data/projects"

const reveal = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0 },
}

export function Projects() {
  return (
    <section id="projects" className="relative px-6 py-28 lg:px-16 lg:py-40">
      <div className="mx-auto w-full max-w-7xl">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          variants={reveal}
          className="mb-16 max-w-3xl text-5xl font-semibold leading-[.9] tracking-[-0.08em] md:mb-20 md:text-7xl lg:text-8xl"
        >
          selected<br /><span className="text-muted-foreground italic">work</span>
        </motion.h2>
        <div className="space-y-6 md:space-y-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.12 }}
              transition={{ duration: 0.7, delay: Math.min(index * 0.08, 0.24), ease: [0.22, 1, 0.36, 1] }}
              variants={reveal}
            >
              <ProjectCard {...project} index={index} modelPath={project.modelPath} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
