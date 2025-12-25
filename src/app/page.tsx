import { HeroSection } from "@/components/sections/Hero";
import { AboutSection } from "@/components/sections/About";
import { SkillsCarousel } from "@/components/sections/SkillsCarousel";
import { ProjectsGrid } from "@/components/sections/ProjectsGrid";
import { ExperienceTimeline } from "@/components/sections/ExperienceTimeline";
import { ContactSection } from "@/components/sections/Contact";
import { Navigation } from "@/components/Navigation";
import { FloatingElements } from "@/components/FloatingElements";
import UnderImage from "@/components/underImage";
import SnowfallClient from "@/components/elements/SnowfallClient";

export default function Home() {
  return (
    <main className="min-h-screen bg-background relative overflow-hidden">
      {/* Полупрозрачное изображение поверх фона с сохранением цвета, используя Tailwind CSS 4 */}
      <div
        className="pointer-events-none absolute inset-0 z-0 bg-[url('/img/bg-img.webp')] bg-repeat-y bg-[length:50%_auto] bg-left opacity-2"
        style={{
          backgroundPosition: "left top, right top",
          backgroundRepeat: "repeat-y, repeat-y",
          backgroundImage: "url('/img/bg-img.webp'), url('/img/bg-img.webp')",
          backgroundSize: "50% auto, 50% auto"
        }}
        aria-hidden="true"
      />
      {/* <FloatingElements /> */}
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

      <SnowfallClient />
    </main>
  );
}
