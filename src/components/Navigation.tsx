"use client"

import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"
import { Menu, X, Download } from "lucide-react"

export function Navigation() {
  const [activeSection, setActiveSection] = useState("hero")
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["hero", "about", "projects", "contact"]
      const scrollPosition = window.scrollY + 100

      setIsScrolled(window.scrollY > 20)

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setIsMenuOpen(false)
    }
  }

  const handleDownloadCV = () => {
    console.log("[v0] Download CV clicked")
    // In production, this would download the actual CV file
    window.open("/CV - Vitaliy Posvistak.pdf", "_blank")
  }

  const navItems = [
    { id: "hero", label: "Home" },
    { id: "about", label: "About" },
    { id: "projects", label: "Work" },
    { id: "contact", label: "Contact" },
  ]

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          isScrolled ? "bg-background/80 backdrop-blur-xl border-b border-border/50 shadow-lg" : "bg-transparent",
        )}
      >
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <button
              onClick={() => scrollToSection("hero")}
              className="text-xl font-bold hover:text-primary transition-colors"
            >
              <span className="text-primary">{"<"}</span>
              dev
              <span className="text-primary">{"/>"}</span>
            </button>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={cn(
                    "text-sm font-medium transition-all duration-300 relative group",
                    activeSection === item.id ? "text-primary" : "text-foreground hover:text-primary",
                  )}
                >
                  {item.label}
                  <span
                    className={cn(
                      "absolute -bottom-1 left-0 h-0.5 bg-primary transition-all duration-300",
                      activeSection === item.id ? "w-full" : "w-0 group-hover:w-full",
                    )}
                  />
                </button>
              ))}

              <button
                onClick={handleDownloadCV}
                className="relative group overflow-hidden px-6 py-2.5 bg-primary text-primary-foreground rounded-full font-medium text-sm transition-all duration-300 hover:shadow-lg hover:shadow-accent/50 hover:scale-105"
              >
                <span className="relative z-10 flex items-center gap-2 group-hover:text-white">
                  <Download className="w-4 h-4" />
                  Download CV
                </span>
                <span className="absolute inset-0 bg-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </button>
            </nav>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden relative w-10 h-10 flex items-center justify-center rounded-lg hover:bg-accent/10 transition-colors"
              aria-label="Toggle menu"
            >
              <Menu
                className={cn(
                  "w-6 h-6 absolute transition-all duration-300",
                  isMenuOpen ? "opacity-0 rotate-90" : "opacity-100 rotate-0",
                )}
              />
              <X
                className={cn(
                  "w-6 h-6 absolute transition-all duration-300",
                  isMenuOpen ? "opacity-100 rotate-0" : "opacity-0 -rotate-90",
                )}
              />
            </button>
          </div>
        </div>

        <div
          className={cn(
            "md:hidden overflow-hidden transition-all duration-300 ease-in-out",
            isMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0",
          )}
        >
          <nav className="container mx-auto px-6 pb-6 pt-2 flex flex-col gap-4 bg-background/95 backdrop-blur-xl border-t border-border/50">
            {navItems.map((item, index) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={cn(
                  "text-left px-4 py-3 rounded-lg font-medium transition-all duration-300",
                  "hover:bg-accent/10 hover:translate-x-2",
                  activeSection === item.id ? "text-primary bg-accent/5 border-l-2 border-primary" : "text-foreground",
                )}
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {item.label}
              </button>
            ))}

            <button
              onClick={handleDownloadCV}
              className="relative group overflow-hidden px-6 py-3 mt-2 bg-primary text-primary-foreground rounded-lg font-medium flex items-center justify-center gap-2 transition-all duration-300 hover:shadow-lg hover:shadow-primary/50"
            >
              <Download className="w-4 h-4" />
              Download CV
              <span className="absolute inset-0 bg-gradient-to-r from-primary to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </button>
          </nav>
        </div>
      </header>

      {/* Spacer to prevent content from going under fixed header */}
      <div className="h-20" />
    </>
  )
}
