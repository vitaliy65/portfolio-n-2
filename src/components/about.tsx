"use client"

import { motion } from "motion/react"
import { Card } from "@/components/ui/card"
import { AboutThree } from "@/components/about-three"
import { skills } from "@/data/about"
import Image from "next/image"

const reveal = { hidden: { opacity: 0, y: 28 }, visible: { opacity: 1, y: 0 } }

export function About() {
  return (
    <section id="about" className="relative flex min-h-screen items-center px-6 py-28 lg:px-16">
      <div className="relative z-10 mx-auto w-full max-w-7xl">
        <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={reveal} transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }} className="mb-14 text-5xl font-semibold tracking-[-0.06em] md:text-7xl lg:text-8xl">
          about <span className="text-muted-foreground">the maker</span>
        </motion.h2>
        <div className="mb-20 grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={reveal} transition={{ duration: 0.7, delay: 0.08 }} className="space-y-6">
            <p className="max-w-2xl text-xl leading-relaxed text-muted-foreground md:text-2xl">I&apos;m a frontend developer focused on building clear, responsive interfaces and writing predictable, maintainable code.</p>
            <p className="max-w-2xl text-xl leading-relaxed text-muted-foreground md:text-2xl">I work with React, Next.js, TypeScript, and TailwindCSS — taking projects from first layout to a thoughtful, shipped experience.</p>
            <p className="max-w-2xl text-base leading-relaxed text-muted-foreground">Good structure is invisible. The details are not.</p>
          </motion.div>
          <motion.div initial={{ opacity: 0, scale: 0.96 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }} className="relative overflow-hidden rounded-[2rem] border border-border bg-card">
            <Image src="/me-small.png" alt="Vitaliy Posvistak at work" width={1024} height={1024} className="aspect-square h-full w-full object-cover" />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-accent/20 via-transparent to-transparent" />
          </motion.div>
        </div>
        <div className="mb-16 hidden lg:block"><AboutThree /></div>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.15 }} variants={{ visible: { transition: { staggerChildren: 0.08 } } }} className="grid grid-cols-2 gap-3 lg:grid-cols-4">
          {skills.map((skill) => (
            <motion.div key={skill.category} variants={reveal} transition={{ duration: 0.55 }}>
              <Card className="group relative h-full rounded-2xl border-border/60 bg-card/60 p-5 transition-colors hover:bg-card">
                <div className="mb-5 h-1 w-10 rounded-full" style={{ backgroundColor: skill.color }} />
                <h3 className="mb-4 text-sm font-medium text-foreground">{skill.category}</h3>
                <ul className="space-y-2">{skill.items.map((item) => <li key={item} className="text-sm text-muted-foreground">{item}</li>)}</ul>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
