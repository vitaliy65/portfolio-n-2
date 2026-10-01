"use client"

import { motion } from "motion/react"
import { ArrowDown, ArrowUpRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { heroData } from "@/data/hero"
import Image from "next/image"

const ease = [0.22, 1, 0.36, 1] as const

export function Hero() {
  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })

  return (
    <section id="hero" className="relative flex min-h-[92vh] items-center px-6 py-24 lg:px-16">
      <div className="mx-auto grid w-full max-w-7xl items-end gap-16 lg:grid-cols-[1.1fr_.9fr]">
        <div>
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .8, ease }} className="mb-8 flex items-center gap-3 text-xs uppercase tracking-[.24em] text-muted-foreground">
            <span className="h-2 w-2 rounded-full bg-accent" /> Available for selected projects
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 48 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: .08, ease }} className="max-w-5xl text-[clamp(4rem,10vw,9rem)] font-semibold leading-[.86] tracking-[-.08em]">
            {heroData.highlight}<br /><span className="text-accent">{heroData.highlightDetail}</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: .8, delay: .35 }} className="mt-10 max-w-xl text-lg leading-relaxed text-muted-foreground md:text-xl">
            {heroData.description}
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .7, delay: .45 }} className="mt-10 flex flex-wrap gap-3">
            <Button size="lg" className="rounded-full bg-accent px-7 text-accent-foreground hover:bg-accent/90" onClick={() => scrollTo("projects")}>View work <ArrowUpRight /></Button>
            <Button size="lg" variant="outline" className="rounded-full border-border/80 px-7" onClick={() => scrollTo("contact")}>Let&apos;s talk</Button>
          </motion.div>
          <div className="mt-16 flex gap-12 border-t border-border/70 pt-6">
            {heroData.stats.map((stat) => <div key={stat.label}><div className="text-3xl font-medium tracking-tight">{stat.value}</div><div className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">{stat.label}</div></div>)}
          </div>
        </div>
        <motion.div initial={{ opacity: 0, scale: .96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1.1, delay: .2, ease }} className="relative mx-auto w-full max-w-md lg:mb-8">
          <div className="aspect-[4/5] overflow-hidden rounded-[2rem] border border-border/80 bg-card shadow-2xl shadow-accent/10"><Image src={heroData.photo} alt="Vitaliy Posvistak" fill priority sizes="(max-width: 1024px) 90vw, 36vw" className="object-cover" /></div>
          <div className="absolute -bottom-5 -left-5 rounded-2xl border border-border bg-background/90 px-5 py-4 backdrop-blur-xl"><div className="text-xs uppercase tracking-widest text-muted-foreground">Based in</div><div className="mt-1 font-medium">Ukraine · Working globally</div></div>
        </motion.div>
      </div>
      <button onClick={() => scrollTo("projects")} aria-label="Scroll to projects" className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground transition-colors hover:text-accent"><ArrowDown className="h-5 w-5" /></button>
    </section>
  )
}

export const heroEase = ease
