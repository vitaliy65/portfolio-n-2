export type Skill = {
  name: string;
  img: string;
};

export type SkillCategory = {
  id: string;
  label: string;
  icon: string;
  skills: Skill[];
};

export const skillCategories1: SkillCategory = {
  id: 'main',
  label: 'Основной стек',
  icon: '🧑‍💻',
  skills: [
    { name: 'React', img: '/img/react.svg' },
    { name: 'Next.js', img: '/img/nextjs.svg' },
    { name: 'TypeScript', img: '/img/typescript.svg' },
    { name: 'Tailwind CSS', img: '/img/tailwind.svg' },
    { name: 'Framer Motion', img: '/img/motion.svg' },
    { name: 'Lottie', img: '/img/lottie.svg' }
  ]
};

export const skillCategories2: SkillCategory = {
  id: 'other',
  label: 'Инструменты',
  icon: '🛠️',
  skills: [
    { name: 'CSS', img: '/img/css.svg' },
    { name: 'Git', img: '/img/git.svg' },
    { name: 'Cursor', img: '/img/cursor.svg' },
    { name: 'Figma', img: '/img/figma.svg' },
    { name: 'Vercel', img: '/img/vercel.svg' }
  ]
};
