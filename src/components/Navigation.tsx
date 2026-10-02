"use client"

import { useState } from "react"
import { motion } from "motion/react"
import { ArrowUpRight, Download, Menu, X } from "lucide-react"

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navItems = [
    { href: "#about", label: "About" },
    { href: "#work", label: "Work" },
    { href: "#contact", label: "Contact" },
  ]

  const closeMenu = () => setIsMenuOpen(false)

  return (
    <motion.header
      className="site-header"
      initial={{ y: -28, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      <a className="brand" href="#hero" onClick={closeMenu} aria-label="Posvistak Vitaliy, home">
        <span>VP</span>
        <small>FRONTEND<br />DEVELOPER</small>
      </a>

      <button
        className="menu-toggle"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label={isMenuOpen ? "Close navigation" : "Open navigation"}
        aria-expanded={isMenuOpen}
      >
        {isMenuOpen ? <X /> : <Menu />}
      </button>

      <nav className={`site-nav${isMenuOpen ? " is-open" : ""}`} aria-label="Primary navigation">
        {navItems.map((item) => (
          <a key={item.href} href={item.href} onClick={closeMenu}>{item.label}</a>
        ))}
        <a className="nav-cta" href="/CV%20-%20Vitaliy%20Posvistak.pdf" target="_blank" rel="noreferrer" onClick={closeMenu}>
          Resume <Download />
        </a>
        <a className="nav-contact" href="#contact" onClick={closeMenu} aria-label="Get in touch">
          <ArrowUpRight />
        </a>
      </nav>
    </motion.header>
  )
}