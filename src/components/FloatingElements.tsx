"use client";

import { motion } from "framer-motion";
import { useMemo } from "react";
import FloatingFigures from "./elements/floatingFigures";
import { useAppSelector } from "@/store/hook";
import { Theme } from "@/store/slices/themeSlice";
import FloatingLeafs from "./elements/Floatingleafs";

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
  const { theme } = useAppSelector((s) => s.theme);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {/* Floating geometric shapes */}
      {/* circle */}
      {theme === Theme.Dark && <FloatingFigures />}
      {theme === Theme.Autumn && <FloatingLeafs />}
      {theme === Theme.Spring && <FloatingFigures />}
      {theme === Theme.Summer && <FloatingFigures />}
      {theme === Theme.Winter && <FloatingFigures />}

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
