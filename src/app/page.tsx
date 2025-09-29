import { HeroSection } from "@/components/sections/Hero";
import { AboutSection } from "@/components/sections/About";
import { SkillsCarousel } from "@/components/sections/SkillsCarousel";
// import { ProjectsGrid } from "@/components/projects-grid";
// import { ExperienceTimeline } from "@/components/experience-timeline";
// import { ContactSection } from "@/components/contact-section";
import { Navigation } from "@/components/Navigation";
import { FloatingElements } from "@/components/FloatingElements";

export default function Home() {
  return (
    <main className="min-h-screen bg-background relative overflow-hidden">
      <div className="mesh-gradient fixed inset-0 -z-10" />
      <FloatingElements />
      <Navigation />

      <div className="relative z-10">
        <HeroSection />
        <AboutSection />
        <SkillsCarousel />
        {/* <ProjectsGrid /> */}
        {/* <ExperienceTimeline /> */}
        {/* <ContactSection /> */}
      </div>
    </main>
  );
}
