'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { skillCategories1, skillCategories2 } from '@/data/skills';
import SkillsInfiniteCarousel from '@/components/elements/SkillsInfiniteCarousel';


export function SkillsCarousel() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="skills" className="py-32 px-4 bg-card-badge/30 relative overflow-hidden">
      <div className="container mx-auto relative z-10 pb-[464px]">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-primary-red rounded-xl shadow-custom-md text-2xl mb-4">
            💪 Skills
          </span>
          <h2 className="text-foreground mb-4">My Tech Stack</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Technologies and tools I use every day
          </p>
        </motion.div>

        {/* Skills infinite horizontal animation (right-to-left) */}
        <div className="overflow-visible -mx-4 absolute w-screen -translate-x-1/2 left-1/2 h-fit bottom-0">
          <SkillsInfiniteCarousel activeCategory={skillCategories1} direction="left" />
          <SkillsInfiniteCarousel activeCategory={skillCategories2} direction="right" />
        </div>
      </div>
    </section>
  );
}