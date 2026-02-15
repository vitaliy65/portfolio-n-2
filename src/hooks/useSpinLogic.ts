
import { useCallback, useMemo, useState } from "react";
import { GameGamble, WinningPayline } from "@/data/gamble-game/GameGamble";
import { AnimatingGridsObj, generateSpinningGrids, getEmptyGrid } from "@/data/gamble-game/utils";

// Hook для логики вращения и состояния грида
export function useSpinLogic() {
    const [grid, setGrid] = useState<number[][]>([]);
    const [winningPaylines, setWinningPaylines] = useState<WinningPayline[]>([]);
    const [isSpinning, setIsSpinning] = useState(false);
    const [animatingGrids, setAnimatingGrids] = useState<AnimatingGridsObj | undefined>(undefined);
    const [isComboAnimating, setIsComboAnimating] = useState(false);

    const game = useMemo(() => new GameGamble(), []);

    const handleSpin = useCallback(() => {
        setIsSpinning(true);

        const prevGrid = grid.length ? grid : getEmptyGrid();
        const { grid: nextGrid, winningPaylines: winLines } = game.spin();

        const spinningFrames = generateSpinningGrids(prevGrid, nextGrid, 8)
        setAnimatingGrids(spinningFrames);
        setGrid(nextGrid);
        setWinningPaylines(winLines);

        setTimeout(() => {
            setAnimatingGrids(undefined);
            setIsComboAnimating(winLines.length > 0);
            setIsSpinning(false);
        }, 1500);
    }, [grid, game]);

    return {
        grid,
        setGrid,
        winningPaylines,
        setWinningPaylines,
        isSpinning,
        setIsSpinning,
        animatingGrids,
        setAnimatingGrids,
        isComboAnimating,
        setIsComboAnimating,
        handleSpin,
    };
}