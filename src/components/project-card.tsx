"use client"

import Image from "next/image"
import { Card } from "@/components/ui/card"
import { ArrowUpRight } from "lucide-react"
import { cn } from "@/lib/utils"
import { ProjectThree } from "@/components/project-three"

interface ProjectCardProps {
  title: string
  description: string
  tags: string[]
  image: string
  link: string
  index: number
  accent?: string
  modelPath: string
}

export function ProjectCard({ title, description, tags, image, link, index, accent, modelPath }: ProjectCardProps) {
  const isEven = index % 2 === 0

  return (
    <Card
      className={cn(
        "project-card group relative bg-card/50 backdrop-blur-sm border-border/50 rounded-[3rem] overflow-hidden hover:bg-card/80 transition-all duration-500",
        "grid lg:grid-cols-2 gap-8",
        !isEven && "lg:grid-flow-dense",
      )}
    >
      {accent && (
        <div
          className="absolute top-0 left-0 right-0 h-2 transition-all duration-500 group-hover:h-3 z-10"
          style={{ backgroundColor: accent }}
        />
      )}

      <div className={cn("relative aspect-[4/3] lg:aspect-auto overflow-hidden", !isEven && "lg:col-start-2")}>
        <div className="h-full lg:block z-30">
          <ProjectThree modelPath={modelPath} />
        </div>
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover duration-700 group-hover:opacity-0 group-hover:scale-90 transition-all"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-60 lg:opacity-0 group-hover:opacity-60 transition-opacity duration-500" />

        {accent && (
          <div
            className="absolute top-8 right-8 px-6 py-3 rounded-full font-bold text-sm rotate-[8deg] shadow-xl text-black opacity-0 group-hover:opacity-100 transition-opacity duration-500 backdrop-blur-sm"
            style={{ backgroundColor: accent }}
          >
            VIEW PROJECT
          </div>
        )}
      </div>

      <div className={cn("p-8 lg:p-12 flex flex-col justify-center", !isEven && "lg:col-start-1")}>
        <div className="space-y-6">
          <div className="flex items-start justify-between gap-4">
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-balance">{title}</h3>
            <a
              href={link}
              className="flex-shrink-0 p-3 rounded-full border-2 border-border hover:border-accent text-muted-foreground hover:text-accent transition-all duration-300 hover:rotate-45"
              aria-label={`View ${title} project`}
            >
              <ArrowUpRight className="w-6 h-6" />
            </a>
          </div>

          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed text-pretty">{description}</p>

          <div className="flex flex-wrap gap-2 pt-4">
            {tags.map((tag, idx) => (
              <span
                key={tag}
                className="px-5 py-2.5 text-sm font-semibold bg-background/80 text-foreground rounded-full border border-border/50 hover:border-accent/50 transition-colors duration-300"
                style={{
                  borderLeftColor: accent,
                  borderLeftWidth: idx === 0 ? "3px" : "1px",
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Card>
  )
}
