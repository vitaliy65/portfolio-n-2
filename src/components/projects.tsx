"use client"

import { ProjectCard } from "@/components/project-card"
import { projects } from "@/data/projects"

export function Projects() {
  return (
    <section className="work-section section-pad" id="work">
      <div className="section-heading">
        <div className="section-label">( 03 — SELECTED WORK )</div>
        <h2>Selected<br /><em>work.</em></h2>
        <p>A selection of projects built with thoughtful design, clear interfaces, and reliable engineering.</p>
      </div>
      <div className="projects">
        {projects.map((project, index) => (
          <ProjectCard {...project} index={index} key={project.title} />
        ))}
      </div>
    </section>
  )
}
