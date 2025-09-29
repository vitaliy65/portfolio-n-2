"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { skills } from "@/data/skills";
import Image from "next/image";

export function SkillsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % skills.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [skills.length]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % skills.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + skills.length) % skills.length);
  };

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            Skills & Expertise
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit for building modern web experiences
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden rounded-2xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 300 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -300 }}
                transition={{ duration: 0.5 }}
                className="w-full"
              >
                <Card className="p-12 glass-effect">
                  <div
                    className={`w-full h-2 rounded-full bg-gradient-to-r ${skills[currentIndex].color} mb-8`}
                  />
                  <h3 className="text-3xl font-bold mb-8 text-center">
                    {skills[currentIndex].category}
                  </h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {skills[currentIndex].items.map((skill, index) => (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                        className="text-center"
                      >
                        <div className="md:w-32 md:h-32 h-16 w-16 bg-primary/20 rounded-lg flex items-center justify-center mx-auto mb-4 relative">
                          <Image
                            className="text-2xl font-bold text-primary p-2"
                            fill
                            sizes="100%"
                            src={skill.icon}
                            alt={skill.name}
                          />
                        </div>
                        <p className="font-medium">{skill.name}</p>
                      </motion.div>
                    ))}
                  </div>
                </Card>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex justify-between items-center mt-8">
            <Button
              variant="outline"
              size="icon"
              onClick={prevSlide}
              className="rounded-full bg-transparent"
            >
              <ChevronLeft className="w-4 h-4" />
            </Button>

            <div className="flex space-x-2">
              {skills.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentIndex ? "bg-primary" : "bg-muted"
                  }`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={nextSlide}
              className="rounded-full bg-transparent"
            >
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
