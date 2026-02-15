"use client";

import { useMemo } from "react";
import Symbol from "@/components/games/gamble/symbol";
import { AnimatingGridsObj, getEmptyGrid } from "@/data/gamble-game/utils";
import { useSpinLogic } from "@/hooks/useSpinLogic";
import { useGsapSpinSymbols } from "@/hooks/useGsapSpinSymbols";
import { cn } from "@/lib/utils";

export default function SymbolDemo() {
    const {
        grid,
        winningPaylines,
        isSpinning,
        animatingGrids,
        isComboAnimating,
        handleSpin,
        setIsComboAnimating,
    } = useSpinLogic();

    const winningPositions = useMemo(() => {
        return new Set(
            winningPaylines.flatMap(wl =>
                wl.positions.map(([r, c]: number[]) => `${r},${c}`)
            )
        );
    }, [winningPaylines]);

    const displayObj: AnimatingGridsObj = useMemo(() => {
        if (isSpinning && animatingGrids) {
            return animatingGrids;
        }
        else
            if (!isSpinning && animatingGrids) {
                return {
                    col1: animatingGrids.col1.slice(-3),
                    col2: animatingGrids.col2.slice(-3),
                    col3: animatingGrids.col3.slice(-3),
                };
            }
            else
                if (grid.length) {
                    return {
                        col1: grid.map(row => row[0]),
                        col2: grid.map(row => row[1]),
                        col3: grid.map(row => row[2]),
                    };
                }
        const empty = getEmptyGrid();
        return {
            col1: empty.map(row => row[0]),
            col2: empty.map(row => row[1]),
            col3: empty.map(row => row[2]),
        };
    }, [isSpinning, animatingGrids, grid]);

    useGsapSpinSymbols(isSpinning, animatingGrids);

    const colNames = ["col1", "col2", "col3"];

    return (
        <div className="grid grid-rows-10 grid-cols-4 justify-items-center w-screen h-screen gap-2  overflow-hidden">
            <div className="col-span-3 row-span-9 grid grid-cols-3 aspect-square max-xl:w-full xl:h-full overflow-hidden p-4">
                {colNames.map((colName, colIdx) => (
                    <div
                        key={colName}
                        className={cn("symbol-container overflow-hidden")}
                    >
                        {Array.from({ length: displayObj[colName as keyof typeof displayObj].length }, (_, rowIdx) => {
                            const symbolId = displayObj[colName as keyof typeof displayObj]?.[rowIdx] ?? 0;
                            const isWinning = winningPositions.has(`${rowIdx},${colIdx}`);
                            return (
                                <Symbol
                                    className="Symbol"
                                    key={`${isSpinning ? `spinning-` : ""}${rowIdx}-${colIdx}`}
                                    dataCol={colIdx}
                                    dataRow={rowIdx}
                                    img={`/symbols/symbol-${symbolId}.png`}
                                    isAnimating={isComboAnimating && isWinning}
                                    onAnimEnd={() => setIsComboAnimating(false)}
                                />
                            );
                        })}
                    </div>
                ))}
            </div>

            <div className="row-span-9 col-start-4 row-start-1 w-full h-full p-8">
                <div className="w-full h-full bg-amber-500 rounded-xl custom-shadow-md">
                </div>
            </div>

            <div className="w-full flex flex-col justify-center items-center gap-2 col-span-3 col-start-1 row-start-10">
                <button
                    className="bg-red-600 text-white rounded-xl min-w-2xs p-4 text-2xl font-bold shadow-[0px_8px_0px_0px_#421f1f] cursor-pointer active:shadow-none active:translate-y-2"
                    onClick={handleSpin}
                    disabled={isSpinning}
                >
                    SPIN!
                </button>
            </div>
        </div>
    );
}