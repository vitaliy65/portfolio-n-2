import { symbols } from "@/data/gamble-game/settings";

export const GRID_SIZE = 3;

export type AnimatingGridsObj = {
    col1: number[];
    col2: number[];
    col3: number[];
} | undefined;

function toCols(grid: number[][]) {
    return {
        col1: grid.map(row => row[0]),
        col2: grid.map(row => row[1]),
        col3: grid.map(row => row[2]),
    };
}

export function generateSpinningGrids(
    currentGrid: number[][],
    nextGrid: number[][],
    frames: number = 8
): Exclude<AnimatingGridsObj, undefined> {
    const cols: Exclude<AnimatingGridsObj, undefined> = {
        col1: [],
        col2: [],
        col3: [],
    };

    // Добавляем значения из текущего грида
    const currentCols = toCols(currentGrid);
    cols.col1.push(...currentCols.col1);
    cols.col2.push(...currentCols.col2);
    cols.col3.push(...currentCols.col3);

    // В каждый кадр дописываем случайные значения
    for (let i = 0; i < frames; i++) {
        const randomGrid = currentGrid.map(row =>
            row.map(() => Math.floor(Math.random() * symbols.length))
        );
        const randomCols = toCols(randomGrid);
        cols.col1.push(...randomCols.col1);
        cols.col2.push(...randomCols.col2);
        cols.col3.push(...randomCols.col3);
    }

    // Добавляем значения из следующего (конечного) грида
    const nextCols = toCols(nextGrid);
    cols.col1.push(...nextCols.col1);
    cols.col2.push(...nextCols.col2);
    cols.col3.push(...nextCols.col3);

    return cols;
}

export const getEmptyGrid = () =>
    Array.from({ length: GRID_SIZE }, () => Array(GRID_SIZE).fill(0));