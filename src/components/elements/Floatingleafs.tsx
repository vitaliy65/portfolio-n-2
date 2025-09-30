import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import useDevice from "@/hooks/useDevice";

export default function FloatingLeafs() {
  const { isDesktop, isTablet } = useDevice();
  return (
    (isDesktop || isTablet) && (
      <>
        <motion.div
          className="absolute top-20 left-10 lg:w-24 lg:h-24 w-12 h-12 rounded-full"
          animate={{
            y: [0, -20, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        >
          <Image src={"/autumn/leaf1.webp"} alt="1" width={512} height={512} />
        </motion.div>

        {/* purple cube */}
        <motion.div
          className="absolute top-40 right-20 lg:w-48 lg:h-48  w-12 h-12 rounded-lg"
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
        >
          <Image src={"/autumn/leaf2.webp"} alt="1" width={512} height={512} />
        </motion.div>

        {/* blue cube */}
        <motion.div
          className="absolute bottom-40 left-20 lg:w-32 lg:h-32  w-12 h-12 rotate-45"
          animate={{
            y: [0, -25, 0],
            rotate: [45, 225, 45],
          }}
          transition={{
            duration: 6,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        >
          <Image src={"/autumn/leaf3.webp"} alt="1" width={512} height={512} />
        </motion.div>
      </>
    )
  );
}
