"use client"

import Image from "next/image"
import { motion } from "motion/react"
import { ArrowUpRight } from "lucide-react"

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  image: string;
  link: string;
  index: number;
}

export function ProjectCard({
  title,
  description,
  tags,
  image,
  link,
  index,
}: ProjectCardProps) {
  return (
    <motion.article
      className="project-card"
      initial={{ opacity: 0, y: 56 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.7, delay: (index % 3) * 0.08, ease: "easeOut" }}
    >
      <div className="project-visual-wrap">
        <a className="project-visual" href={link} target="_blank" rel="noreferrer" aria-label={`View ${title} project`}>
          <Image src={image} alt={title} fill sizes="(max-width: 700px) 84vw, 62vw" className="project-image" />
          <span className="project-number">{String(index + 1).padStart(2, "0")}</span>
          <span className="project-arrow"><ArrowUpRight /></span>
        </a>
      </div>
      <div className="project-info">
        <div>
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
        <div className="project-meta">
          {tags.map((tag) => <span key={tag}>{tag}</span>)}
        </div>
      </div>
    </motion.article>
  )
}
