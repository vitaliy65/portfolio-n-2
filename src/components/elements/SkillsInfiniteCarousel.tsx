'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { SkillCategory } from '@/data/skills';

type SkillsInfiniteCarouselProps = {
    activeCategory: SkillCategory;
    direction?: 'left' | 'right';
};

export default function SkillsInfiniteCarousel({
    activeCategory,
    direction = 'left',
}: SkillsInfiniteCarouselProps) {
    const skills = activeCategory.skills;

    // Дублируем массив скиллов 3 раза для бесшовной анимации
    const duplicatedSkills = [...skills, ...skills, ...skills];

    // Настройка анимации в зависимости от направления
    const animate = direction === 'left'
        ? { x: [0, '-33.333%'] }  // Двигаем на треть (один полный набор)
        : { x: ['-33.333%', 0] };

    // Длительность анимации (можно настроить под свои нужды)
    const duration = 20;

    return (
        <div className="w-full py-2">
            <motion.div
                key={`${direction}-${activeCategory.id}`}
                style={{
                    display: 'flex',
                    gap: '1.5rem',
                    width: 'fit-content',
                }}
                animate={animate}
                transition={{
                    x: {
                        repeat: Infinity,
                        repeatType: 'loop',
                        duration,
                        ease: 'linear',
                    },
                }}
            >
                {duplicatedSkills.map((skill, index) => (
                    <motion.div
                        key={`${skill.name}-${index}`}
                        whileHover={{ scale: 1.05 }}
                        className="bg-primary-red rounded-2xl min-w-44 h-fit p-6 shadow-custom-lg hover:shadow-custom-xl transition-all group flex flex-col justify-center items-center gap-3 flex-shrink-0"
                    >
                        <Image
                            src={skill.img}
                            alt={skill.name}
                            width={128}
                            height={128}
                            className="aspect-square"
                        />
                        <h3 className="text-card-foreground text-lg">{skill.name}</h3>
                    </motion.div>
                ))}
            </motion.div>
        </div>
    );
}