import React from "react";
import { motion } from "framer-motion";

export default function FloatingFigures() {
  return (
    <>
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
    </>
  );
}
