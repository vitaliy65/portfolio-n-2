"use client"

import { motion } from "motion/react"
import { skills } from "@/data/about"


export function About() {
  return (
    <section className="about-section section-pad" id="about">
      <div className="section-label">( 02 — ABOUT )</div>
      <motion.div
        className="about-content"
        initial={{ opacity: 0, y: 36 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <h2>Clear work.<br /><em>Thoughtful by design.</em></h2>
        <div className="about-copy">
          <p>I&apos;m a frontend developer focused on building clean, responsive interfaces and writing predictable, maintainable code.</p>
          <p>I work primarily with React, Next.js, TypeScript, and Tailwind CSS, from layout and UI logic to API integration and deployment.</p>
          <p>I care about structure, clarity, and user experience, and keep improving by shipping projects and refining existing solutions.</p>
        </div>
      </motion.div>
      <div className="principles">
        {skills.map((skill, index) => (
          <motion.div
            key={skill.category}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55, delay: index * 0.08, ease: "easeOut" }}
          >
            <b>{String(index + 1).padStart(2, "0")}</b>
            <strong>{skill.category}</strong>
            <p>{skill.items.join(" · ")}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
