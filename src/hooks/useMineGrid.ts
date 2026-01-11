import { useLayoutEffect, useEffect, useRef, useState } from "react";
import { gsap } from "gsap"

// Custom hook encapsulating grid, viewport, ready check, and animation logic
export function useMineGrid(cell: number, gap: number) {
    // State and refs
    const [viewport, setViewport] = useState({ width: 1200, height: 800 });
    const [isReady, setIsReady] = useState(false);
    const gridRef = useRef<HTMLDivElement>(null);
    const timelineRef = useRef<gsap.core.Timeline | null>(null);

    // Calculate effective columns and rows based on viewport and cell/gap
    const rawCols = Math.floor(viewport.width / (cell + gap));
    const rawRows = Math.floor(viewport.height / (cell + gap));
    const cols = rawCols % 2 === 0 ? rawCols - 1 : rawCols;
    const rows = rawRows % 2 === 0 ? rawRows - 1 : rawRows;

    // Effect: Adjust grid on window resize
    useEffect(() => {
        function updateViewport() {
            setViewport({
                width: window.innerWidth,
                height: window.innerHeight,
            });
            setIsReady(false);
        }
        updateViewport();
        window.addEventListener("resize", updateViewport);
        return () => {
            window.removeEventListener("resize", updateViewport);
        };
    }, []);

    // Effect: check grid is ready for animation once blocks mount
    useLayoutEffect(() => {
        if (!gridRef.current) return;
        const blocks = gridRef.current.querySelectorAll('.mine-block');
        const expectedCount = cols * rows;

        if (blocks.length === expectedCount) {
            Promise.resolve().then(() => {
                setIsReady(true);
            });
        }
    }, [cols, rows]);

    // Grid enter animation
    useEffect(() => {
        if (!isReady || !gridRef.current) return;

        if (timelineRef.current) {
            timelineRef.current.kill();
        }

        const blocks = gridRef.current.querySelectorAll('.mine-block');
        const tl = gsap.timeline();
        timelineRef.current = tl;

        const centerCol = Math.floor(cols / 2);
        const centerRow = Math.floor(rows / 2);

        blocks.forEach((block, index) => {
            const col = index % cols;
            const row = Math.floor(index / cols);

            // Manhattan distance from center for stagger effect
            const distance = Math.abs(col - centerCol) + Math.abs(row - centerRow);
            const delay = distance * 0.04; // 40ms per cell of distance

            tl.to(block, {
                duration: 0.6,
                scale: 1,
                opacity: 1,
                y: 0,
                ease: "back.out(1.2)",
            }, delay).set(block, { scale: 1, opacity: 1 });
        })

        return () => {
            tl.kill();
        };
    }, [isReady, cols, rows]);

    return {
        cols,
        rows,
        gridRef,
    };
}