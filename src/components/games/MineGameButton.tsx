import { is } from '@react-three/fiber/dist/declarations/src/core/utils'
import { ArrowUpRight } from 'lucide-react'
import React from 'react'

type MineGameButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    variant?: "left" | "right"
    content: string
}

export default function MineGameButton({ variant = "right", content, ...props }: MineGameButtonProps) {
    const isLeft = variant === "left";
    const positionClass = isLeft
        ? "rounded-r-full left-0  hover:translate-x-8 after-button-left"
        : "rounded-l-full right-0 hover:-translate-x-8 after-button";

    return (
        <button
            {...props}
            className={
                `absolute flex top-20 bg-accent px-6 py-4 transition-all z-10 gap-4 duration-300 items-center ` +
                `${positionClass} `
            }
        >
            {isLeft && <ArrowUpRight className="w-6 h-6 -rotate-135" />}
            Mine game
            {!isLeft && <ArrowUpRight className="w-6 h-6 rotate-45" />}
        </button>
    )
}
