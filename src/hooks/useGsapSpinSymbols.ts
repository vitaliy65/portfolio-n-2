import { useEffect } from "react";
import { gsap } from "gsap";
import { AnimatingGridsObj } from "@/data/gamble-game/utils";

export function useGsapSpinSymbols(
    isSpinning: boolean,
    animatingGrids: AnimatingGridsObj,
) {
    useEffect(() => {
        if (!isSpinning || !animatingGrids) return;

        const containers = Array.from(document.querySelectorAll<HTMLElement>('.symbol-container'));

        const tweens = containers.map((container, colIdx) => {
            container.scrollTop = 0;

            const maxScroll = container.scrollHeight - container.clientHeight;

            return gsap.to(container, {
                scrollTop: maxScroll,
                duration: 1.3,
                delay: colIdx * 0.1,
                ease: "power2.out",
            });
        });

        return () => {
            tweens.forEach(tween => tween && tween.kill());
        };
    }, [isSpinning, animatingGrids]);
}