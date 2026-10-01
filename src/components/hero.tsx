"use client"

import { motion } from "motion/react"
import { ArrowDown, ArrowUpRight, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { heroData } from "@/data/hero"
import Image from "next/image"

const ease = [0.22, 1, 0.36, 1] as const

export function Hero() {
  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })

  return (
    <section id="hero" className="relative flex min-h-[calc(100svh-5rem)] items-center overflow-hidden px-6 py-16 lg:px-16 lg:py-24">
      <div className="pointer-events-none absolute right-[8%] top-[12%] h-72 w-72 rounded-full bg-primary/10 blur-[120px]" />
      <div className="mx-auto grid w-full max-w-7xl items-center gap-14 lg:grid-cols-[1.15fr_.85fr]">
        <div>
          <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .7, ease }} className="mb-8 flex items-center gap-3 text-[11px] font-medium uppercase tracking-[.28em] text-muted-foreground">
            <span className="flex h-7 w-7 items-center justify-center rounded-full border border-primary/40 text-primary"><Sparkles className="h-3.5 w-3.5" /></span>
            Available for selected projects
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 38 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .95, delay: .06, ease }} className="max-w-4xl text-[clamp(3.8rem,9.5vw,8.7rem)] font-semibold leading-[.84] tracking-[-.095em]">
            {heroData.highlight}<br /><span className="text-primary">{heroData.highlightDetail}</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: .8, delay: .3 }} className="mt-9 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
            {heroData.description}
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .7, delay: .42 }} className="mt-9 flex flex-wrap gap-3">
            <Button size="lg" className="rounded-full bg-primary px-7 text-primary-foreground shadow-[0_0_32px_-10px_var(--primary)] hover:bg-primary/90" onClick={() => scrollTo("projects")}>View selected work <ArrowUpRight /></Button>
            <Button size="lg" variant="outline" className="rounded-full border-border/80 px-7 hover:border-primary/60 hover:bg-primary/5" onClick={() => scrollTo("contact")}>Let's talk</Button>
          </motion.div>
          <div className="mt-14 flex gap-10 border-t border-border/70 pt-5 sm:gap-14">
            {heroData.stats.map((stat) => <div key={stat.label}><div className="text-2xl font-medium tracking-tight sm:text-3xl">{stat.value}</div><div className="mt-1 text-[10px] uppercase tracking-[.18em] text-muted-foreground">{stat.label}</div></div>)}
          </div>
        </div>
        <motion.div initial={{ opacity: 0, scale: .96, rotate: 2 }} animate={{ opacity: 1, scale: 1, rotate: 0 }} transition={{ duration: 1.1, delay: .16, ease }} className="relative mx-auto w-full max-w-[23rem] lg:max-w-md">
          <div className="absolute -inset-5 rounded-[2.6rem] border border-primary/15" />
          <div className="absolute -inset-10 rounded-[3.5rem] border border-primary/10" />
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-border bg-card shadow-2xl shadow-black/30"><Image src={heroData.photo} alt="Vitaliy Posvistak" fill priority sizes="(max-width: 1024px) 82vw, 34vw" className="object-cover" /></div>
          <div className="absolute -bottom-5 -left-5 rounded-2xl border border-border bg-card/90 px-5 py-4 shadow-xl backdrop-blur-xl"><div className="text-[10px] uppercase tracking-[.2em] text-muted-foreground">Based in</div><div className="mt-1 text-sm font-medium">Ukraine <span className="text-primary">·</span> Working globally</div></div>
          <div className="absolute -right-4 top-7 rounded-full border border-primary/30 bg-background/90 px-4 py-2 text-[10px] uppercase tracking-[.2em] text-primary backdrop-blur-xl">Design · Code · Motion</div>
        </motion.div>
      </div>
      <button onClick={() => scrollTo("projects")} aria-label="Scroll to projects" className="absolute bottom-7 left-1/2 -translate-x-1/2 text-muted-foreground transition-colors hover:text-primary"><ArrowDown className="h-5 w-5" /></button>
    </section>
  )
}

export const heroEase = ease
