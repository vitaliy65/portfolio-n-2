"use client"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Projects } from "@/components/projects"
import { Contact } from "@/components/contact"
import { Navigation } from "@/components/Navigation"
import { heroData } from "@/data/hero"

export default function Home() {
  return (
    <main id="mainPage" className="portfolio-shell">
      <div className="grain" aria-hidden="true" />
      <Navigation />
      <Hero />
      <section className="marquee" aria-label="Skills and technologies">
        <div>
          {[...heroData.badges, ...heroData.badges].map((badge, index) => (
            <span key={`${badge.label}-${index}`}>
              {badge.label}<i aria-hidden="true">✳</i>
            </span>
          ))}
        </div>
      </section>
      <About />
      <Projects />
      <Contact />
    </main>
  )
}
