import { useMineGrid } from "@/hooks/useMineGrid";
import MineBlock from "./MineBlock";
import MineGameButton from "./MineGameButton";
import { gsap } from "gsap"

interface GameContainerProps {
    onGameClose: () => void
}

export default function GameContainer({ onGameClose }: GameContainerProps) {
    const cell = 67;
    const gap = 8;

    const { cols, rows, gridRef } = useMineGrid(cell, gap);

    const closeGameHandler = () => {
        gsap.to("#gameGrid", {
            xPercent: 100,
            opacity: 0,
            onComplete: onGameClose
        })
    }

    return (
        <div id="gameGrid" className="relative flex justify-center items-center h-screen w-screen bg-background overflow-hidden">
            <MineGameButton onClick={closeGameHandler} variant="left" content="Go Back" />
            <div
                ref={gridRef}
                style={{
                    display: "grid",
                    gridTemplateColumns: `repeat(${cols}, ${cell}px)`,
                    gridTemplateRows: `repeat(${rows}, ${cell}px)`,
                }}
                className="gap-2 w-fit h-fit"
            >
                {Array.from({ length: rows * cols }).map((_, idx) => (
                    <MineBlock key={idx} cell={cell} />
                ))}
            </div>
        </div>
    );
}