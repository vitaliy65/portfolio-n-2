"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  aboutMain,
  aboutHighlights,
  aboutEducation,
  aboutAchievements,
} from "@/data/about";

export function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="about" className="py-32 px-4 relative overflow-hidden">
      <div className="container mx-auto relative z-10">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-6xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-primary-red rounded-xl shadow-custom-md text-2xl mb-4">
              {aboutMain.subtitle}
            </span>
            <h2 className="text-foreground mb-4">{aboutMain.heading}</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {aboutMain.summary}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-12 gap-6">
            {/* Large card - Main info */}
            <motion.div
              variants={itemVariants}
              className="md:col-span-8 bg-primary-red rounded-3xl p-8 shadow-custom-lg hover:scale-105 transition-all group overflow-hidden relative"
            >
              <div className="relative z-10">
                <h3 className="text-2xl text-card-foreground mb-4">
                  A bit about me
                </h3>
                <div className="space-y-4 text-card-foreground/80">
                  {aboutMain.description.map((desc, i) => (
                    <p key={i}>{desc}</p>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Small cards stack */}
            <div className="md:col-span-4 space-y-6">
              {aboutHighlights.map((highlight, idx) => (
                <motion.div
                  key={highlight.title}
                  variants={itemVariants}
                  className={`${highlight.bg} rounded-3xl p-6 shadow-custom-lg hover:scale-105 transition-transform`}
                >
                  <div className="text-5xl mb-3">{highlight.icon}</div>
                  <h4
                    className={`text-xl ${highlight.fg === "foreground"
                      ? "text-foreground"
                      : "text-card-foreground"
                      } mb-2`}
                  >
                    {highlight.title}
                  </h4>
                  <p
                    className={`text-${highlight.fg === "foreground"
                      ? "foreground/80"
                      : "card-foreground/70"
                      } text-sm`}
                  >
                    {highlight.description}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Wide card - Experience timeline */}
            <motion.div
              variants={itemVariants}
              className="md:col-span-6 bg-primary-red rounded-3xl p-8 shadow-custom-lg transition-all hover:scale-105"
            >
              <h3 className="text-xl text-card-foreground mb-6">Education</h3>
              <div className="space-y-4">
                {aboutEducation.map((item, idx) => (
                  <div className="flex gap-4" key={item.title}>
                    <div
                      className={`w-2 ${item.bg} rounded-full`}
                    />
                    <div className={`flex-1${idx === 0 ? " pb-4" : ""}`}>
                      <div className="flex items-start justify-between mb-2">
                        <h4 className="text-card-foreground">{item.title}</h4>
                        <span className="text-sm text-card-foreground/60">
                          {item.period}
                        </span>
                      </div>
                      <p className="text-card-foreground/70 text-sm">
                        {item.institution}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Stats card */}
            <motion.div
              variants={itemVariants}
              className="md:col-span-6 bg-primary-red rounded-3xl p-8 shadow-custom-lg relative overflow-hidden transition-all hover:scale-105"
            >
              <h3 className="text-xl text-card-foreground mb-6 relative z-10">My Achievements</h3>
              <div className="grid grid-cols-2 gap-6 relative z-10">
                {aboutAchievements.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    whileHover={{ scale: 1.1 }}
                    className="text-center shadow-custom-lg-inset bg-primary-red-dark rounded-2xl p-4"
                  >
                    <div className="text-2xl text-primary-red-light mb-1">{stat.icon} {stat.value}</div>
                    <div className="text-sm text-card-foreground/70">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
