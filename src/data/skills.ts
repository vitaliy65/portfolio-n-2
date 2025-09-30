export type SkillItem = {
  name: string;
  icon: string;
};

export const skills = [
  {
    category: "Frontend",
    items: [
      { name: "React", icon: "/img/react.svg" },
      { name: "Next.js", icon: "/img/nextjs.svg" },
      { name: "TypeScript", icon: "/img/typescript.svg" },
      { name: "Tailwind CSS", icon: "/img/tailwind.svg" },
    ] as SkillItem[],
    color: "from-blue-500 to-cyan-500",
  },
  {
    category: "Animation",
    items: [
      { name: "Framer Motion", icon: "/img/motion.svg" },
      { name: "Tailwind animations", icon: "/img/tailwind.svg" },
      { name: "CSS Animations", icon: "/img/css.svg" },
      { name: "Lottie", icon: "/img/lottie.svg" },
    ] as SkillItem[],
    color: "from-purple-500 to-pink-500",
  },
  {
    category: "Tools",
    items: [
      { name: "Git", icon: "/img/git.svg" },
      { name: "Cursor", icon: "/img/cursor.svg" },
      { name: "Figma", icon: "/img/figma.svg" },
      { name: "Vercel", icon: "/img/vercel.svg" },
    ] as SkillItem[],
    color: "from-orange-500 to-red-500",
  },
];
