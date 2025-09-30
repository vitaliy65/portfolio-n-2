import { HeroSection } from "@/components/sections/Hero";
import { AboutSection } from "@/components/sections/About";
import { SkillsCarousel } from "@/components/sections/SkillsCarousel";
import { ProjectsGrid } from "@/components/sections/ProjectsGrid";
import { ExperienceTimeline } from "@/components/sections/ExperienceTimeline";
import { ContactSection } from "@/components/sections/Contact";
import { Navigation } from "@/components/Navigation";
import { FloatingElements } from "@/components/FloatingElements";
import UnderImage from "@/components/underImage";

export default function Home() {
  return (
    <main className="min-h-screen bg-background relative overflow-hidden">
      <FloatingElements />
      <Navigation />

      <div className="relative z-10">
        <HeroSection />
        <AboutSection />
        <SkillsCarousel />
        <ProjectsGrid />
        <ExperienceTimeline />
        <ContactSection />
        <UnderImage />
      </div>
    </main>
  );
}
