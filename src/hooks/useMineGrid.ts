import { useLayoutEffect, useEffect, useRef, useState } from "react";
import { gsap } from "gsap"

// Custom hook encapsulating grid, viewport, ready check, and animation logic
export function useMineGrid(cell: number, gap: number) {
    // State and refs
    const [viewport, setViewport] = useState({ width: 1200, height: 800 });
    const [isReady, setIsReady] = useState(false);
    const gridRef = useRef<HTMLDivElement>(null);

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

        const blocks = gridRef.current.querySelectorAll('.mine-block');
        const tl = gsap.timeline();

        tl.to(blocks, {
            duration: 0.6,
            scale: 1,
            opacity: 1,
            y: 0,
            ease: "back.out(1.2)",
            stagger: {
                grid: "auto",
                amount: 1,
                from: "center"
            }
        });

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