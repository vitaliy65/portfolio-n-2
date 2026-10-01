"use client"

import { motion } from "motion/react"
import { Button } from "@/components/ui/button"
import { socials } from "@/data/contacts"

export function Contact() {
  return (
    <section id="contact" className="flex min-h-[80vh] items-center px-6 py-28 lg:px-16">
      <motion.div initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.25 }} transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }} className="mx-auto w-full max-w-7xl">
        <div className="rounded-[2rem] border border-border bg-card/70 p-8 text-center md:p-16 lg:p-24">
          <p className="mb-6 text-sm text-accent">Have a good brief?</p>
          <h2 className="mx-auto max-w-4xl text-5xl font-semibold leading-[0.95] tracking-[-0.07em] md:text-7xl lg:text-8xl">Let&apos;s make it unmistakably yours.</h2>
          <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl">I&apos;m open to thoughtful collaborations, ambitious interfaces, and products that deserve a little more care.</p>
          <Button size="lg" className="mt-10 rounded-full bg-accent px-8 py-6 text-base text-accent-foreground hover:bg-accent/90" asChild><a href="mailto:hello@example.com">Start a conversation</a></Button>
          <div className="mt-12 flex items-center justify-center gap-3">{socials.map((social) => { const Icon = social.icon; return <a key={social.label} href={social.href} target="_blank" rel="noopener noreferrer" aria-label={social.label} className="rounded-full border border-border p-3 text-muted-foreground transition-colors hover:border-accent hover:text-accent"><Icon className="h-5 w-5" /></a> })}</div>
          <p className="mt-16 text-xs text-muted-foreground">© 2026 Posvistak Vitaliy. Crafted with care.</p>
        </div>
      </motion.div>
    </section>
  )
}
