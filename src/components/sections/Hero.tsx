'use client';

import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';
import { heroData } from '@/data/hero';

const socialIconMap: Record<string, typeof Github> = {
  github: Github,
  linkedin: Linkedin,
  mail: Mail,
};

export function HeroSection() {
  const scrollToAbout = () => {
    const element = document.querySelector('#about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="relative max-w-6xl mx-auto min-h-screen flex items-center justify-center pt-20 px-4"
    >
      <div className="container mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-block px-4 py-2 bg-primary-red rounded-xl shadow-custom-md text-2xl"
            >
              <span className="text-foreground">👋 Hi, I&apos;m</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-foreground"
            >
              <span className="block">{heroData.name}</span>
              <span className="block text-primary mt-2">{heroData.title}</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-muted-foreground max-w-lg"
            >
              {heroData.description}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap gap-4"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToAbout()}
                className="px-8 py-3 bg-primary text-primary-foreground rounded-lg shadow-custom-md hover:shadow-custom-lg transition-all"
              >
                Learn More
              </motion.button>

              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#contact"
                className="px-8 py-3 bg-primary-red text-foreground rounded-lg shadow-custom-md hover:bg-card-hover transition-all"
              >
                Contact
              </motion.a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex gap-4 pt-4"
            >
              {heroData.socials.map((social, index) => {
                const IconComponent = socialIconMap[social.type];
                if (!IconComponent) return null;
                return (
                  <motion.a
                    key={index}
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-primary-red rounded-full flex items-center justify-center text-foreground hover:bg-card-hover shadow-custom-sm transition-all"
                  >
                    <IconComponent size={20} />
                  </motion.a>
                );
              })}
            </motion.div>
          </motion.div>

          {/* Right content - 3D Card effect */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <motion.div
              animate={{
                y: [0, -20, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="relative"
            >
              {/* Main card */}
              <div className="relative bg-primary-red rounded-2xl p-8 shadow-custom-lg overflow-hidden">
                {/* Decorative elements */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl" />
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-background-light/20 rounded-full translate-y-1/2 -translate-x-1/2 blur-2xl" />

                <div className="relative z-10 space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-card-hover rounded-full flex items-center justify-center shadow-custom-md">
                      <span className="text-2xl">💻</span>
                    </div>
                    <div>
                      <h3 className="text-card-foreground">
                        {heroData.highlight}
                      </h3>
                      <p className="text-card-foreground/70">
                        {heroData.highlightDetail}
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    {heroData.stats.map((stat, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.8 + index * 0.1 }}
                        className="rounded-xl p-4 text-center shadow-custom-lg-inset bg-primary-red-dark"
                      >
                        <div className="text-2xl text-white">{stat.value}</div>
                        <div className="text-sm text-foreground/70">{stat.label}</div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Floating elements */}
              <motion.div
                animate={{
                  y: [0, -15, 0],
                  rotate: [0, 5, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className="absolute -top-6 -right-6 w-24 h-24 bg-primary-red rounded-2xl shadow-custom-lg flex items-center justify-center"
              >
                <span className="text-3xl">⚡</span>
              </motion.div>

              <motion.div
                animate={{
                  y: [0, 15, 0],
                  rotate: [0, -5, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: 0.5,
                }}
                className="absolute -bottom-6 -left-6 w-20 h-20 bg-primary-red rounded-2xl shadow-custom-lg flex items-center justify-center z-10"
              >
                <span className="text-2xl">🎨</span>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}