"use client"
import { gsap } from "gsap";
import { useRef, useEffect } from "react";
import { MotionPathPlugin } from "gsap/all";
import { cn } from "@/lib/utils";
import Image from "next/image";
gsap.registerPlugin(MotionPathPlugin);

interface SymbolProps {
    id?: string
    className?: string
    dataCol?: number;
    dataRow?: number;
    img: string;
    isAnimating?: boolean;
    onAnimEnd?: () => void;
}

export default function Symbol({ id, className, dataCol, dataRow, img, isAnimating, onAnimEnd }: SymbolProps) {
    const ref = useRef<HTMLImageElement>(null);

    useEffect(() => {
        if (!isAnimating) return;

        const duration = 0.4;
        const repeats = 3;
        const tl = gsap.timeline({ repeat: repeats, defaults: { ease: "none" } });

        const path = [
            { x: '5%', y: '-5%' },
            { x: '0%', y: '0%' },
            { x: '-5%', y: '5%' },
            { x: '0%', y: '0%' },
            { x: '5%', y: '5%' },
            { x: '0%', y: '0%' },
            { x: '-5%', y: '-5%' },
            { x: '0%', y: '0%' },
        ];

        tl.to(ref.current, {
            duration: duration,
            motionPath: {
                path: path,
                curviness: 2.5,
            },
            onUpdate: function () {
                if (!ref.current) return;
                const progress = tl.progress() % 1;
                const hue = Math.round(progress * 360);
                ref.current.style.filter = `hue-rotate(${hue}deg)`;
            },
            onComplete: function () {
                if (ref.current) ref.current.style.filter = "hue-rotate(0deg)";
            }
        });

        const animEndMiliseconds = duration * (repeats + 1) * 1000;
        const timeout = setTimeout(() => {
            if (onAnimEnd) {
                onAnimEnd();
            }
        }, animEndMiliseconds);

        return () => {
            clearTimeout(timeout);
        };
    }, [isAnimating, onAnimEnd]);

    return (
        <div
            id={id}
            data-col={dataCol}
            data-row={dataRow}
            className={cn(
                "relative flex justify-center items-center rounded-xl transition-all",
                className
            )}
        >
            {isAnimating && (
                <div
                    className="pointer-events-none absolute inset-0 m-3 rounded-lg border-8 border-orange-400 z-10"
                />
            )}
            <img width={512} height={512} alt="symbol" src={img} draggable={false} className="select-none" />
            <img
                id="animated-bg"
                ref={ref}
                width={512}
                height={512}
                alt="symbol"
                src={img}
                className="absolute w-full h-full inset-0 select-none -z-1 opacity-65 object-contain"
                draggable={false}
            />
        </div>
    )
}
