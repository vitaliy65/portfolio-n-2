"use client";
import { useAppSelector } from "@/store/hook";
import React from "react";

export default function UnderImage() {
  const { theme } = useAppSelector((s) => s.theme);

  return (
    <div
      className={`
        w-full aspect-[4/1] md:aspect-[12/1] relative
        bg-repeat-x bg-center bg-transparent
      `}
      style={{
        backgroundImage: `url(/${theme}/underPage.webp)`,
        backgroundSize: "auto 100%",
      }}
    ></div>
  );
}
