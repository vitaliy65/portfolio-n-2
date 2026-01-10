"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Button } from "@/components/ui/button"
import { socials } from "@/data/contacts"

gsap.registerPlugin(ScrollTrigger)

export function Contact() {
  const sectionRef = useRef<HTMLElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(contentRef.current, {
        scrollTrigger: {
          trigger: contentRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
        y: 80,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out",
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section id="contact" ref={sectionRef} className="min-h-screen flex items-center px-6 lg:px-16 py-32">
      <div className="max-w-7xl mx-auto w-full">
        <div ref={contentRef} className="text-center space-y-12">
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold text-balance leading-tight">
            Let&apos;s build something
            <br />
            <span className="text-accent italic">exceptional</span> together
          </h2>

          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed text-pretty">
            I&apos;m always interested in hearing about new projects, creative ideas, or opportunities to be part of your
            vision.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-8">
            <Button
              size="lg"
              className="bg-accent text-accent-foreground hover:bg-accent/90 text-xl px-12 py-8 rounded-full"
              asChild
            >
              <a href="mailto:hello@example.com">Start a Conversation</a>
            </Button>
          </div>

          <div className="flex items-center justify-center gap-6 pt-12">
            {socials.map((social) => {
              const Icon = social.icon
              return (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-full bg-secondary/50 text-secondary-foreground hover:bg-accent hover:text-accent-foreground transition-all duration-300"
                  aria-label={social.label}
                >
                  <Icon className="w-6 h-6" />
                </a>
              )
            })}
          </div>

          <div className="pt-20 text-sm text-muted-foreground">
            <p>© 2026 Posvistak Vitaliy. Crafted with care.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
