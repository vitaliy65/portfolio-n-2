"use client";

import { motion } from "framer-motion";
import { useMemo } from "react";

// Функция для генерации случайного числа в диапазоне
function getRandom(min: number, max: number) {
  return Math.random() * (max - min) + min;
}

export function FloatingElements() {
  // Мемоизируем случайные позиции для точек, чтобы они не менялись при каждом рендере
  const floatingDotsPositions = useMemo(() => {
    return Array.from({ length: 6 }).map(() => ({
      top: getRandom(10, 80), // % сверху
      left: getRandom(5, 90), // % слева
    }));
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {/* Floating geometric shapes */}
      {/* circle */}
      <motion.div
        className="absolute top-20 left-10 w-20 h-20 border border-primary/20 rounded-full"
        animate={{
          y: [0, -20, 0],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 8,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />

      {/* purple cube */}
      <motion.div
        className="absolute top-40 right-20 w-16 h-16 bg-primary/20 rounded-lg"
        animate={{
          y: [0, 30, 0],
          x: [0, -10, 0],
          rotate: [0, -90, 0],
        }}
        transition={{
          duration: 10,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />

      {/* blue cube */}
      <motion.div
        className="absolute bottom-40 left-20 w-12 h-12 border-2 border-primary/30 rotate-45"
        animate={{
          y: [0, -25, 0],
          rotate: [45, 225, 45],
        }}
        transition={{
          duration: 6,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />

      {/* Floating dots с рандомными позициями */}
      {floatingDotsPositions.map((pos, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-primary/40 rounded-full"
          style={{
            top: `${pos.top}%`,
            left: `${pos.left}%`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.4, 0.8, 0.4],
          }}
          transition={{
            duration: 3 + i,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: i * 0.5,
          }}
        />
      ))}
    </div>
  );
}
