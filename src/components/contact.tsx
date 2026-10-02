"use client"

import { motion } from "motion/react"
import { ArrowUpRight, Asterisk } from "lucide-react"
import { socials } from "@/data/contacts"

export function Contact() {
  return (
    <motion.section
      className="contact-section section-pad"
      id="contact"
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      <Asterisk className="contact-orbit" aria-hidden="true" />
      <div className="section-label">( 04 — CONTACT )</div>
      <h2>Have a good<br /><em>idea?</em> Let&apos;s talk.</h2>
      <a className="contact-email" href={socials[2].href}>
        {socials[2].href.replace("mailto:", "")} <ArrowUpRight />
      </a>
      <div className="contact-footer">
        <span>© 2026 Posvistak Vitaliy</span>
        <div className="socials">
          {socials.map((social) => {
            const Icon = social.icon
            return (
              <a key={social.label} href={social.href} aria-label={social.label} target={social.label === "Email" ? undefined : "_blank"} rel={social.label === "Email" ? undefined : "noreferrer"}>
                <Icon />
              </a>
            )
          })}
        </div>
        <span>Frontend development / Ukraine</span>
      </div>
    </motion.section>
  )
}
