// SOLID foundation for the Gamble Game logic

import { gridSize, paytable, symbols, paylines } from "./settings";

export interface SpinResult {
    grid: number[][];
    winningPaylines: WinningPayline[];
    totalWin: number;
}

export interface WinningPayline {
    paylineIndex: number;
    symbol: number;
    reward: number;
    positions: [number, number][];
}

export class GameGamble {
    private grid: number[][] = [];

    /**
     * Generate a new random spin grid.
     * @returns {number[][]} 2D array of symbol indices.
     */
    generateRandomGrid(): number[][] {
        const grid: number[][] = [];
        for (let row = 0; row < gridSize; row++) {
            const rowArr: number[] = [];
            for (let col = 0; col < gridSize; col++) {
                rowArr.push(Math.floor(Math.random() * symbols.length));
            }
            grid.push(rowArr);
        }
        this.grid = grid;
        return grid;
    }

    /**
     * Evaluate the current (or provided) grid for all winning paylines.
     * @param {number[][]} gridToCheck - Optional custom grid to evaluate, defaults to the last spun one.
     * @returns {WinningPayline[]} Array of winning paylines with their win details.
     */
    evaluateWinningPaylines(gridToCheck?: number[][]): WinningPayline[] {
        const grid = gridToCheck ?? this.grid;
        const winners: WinningPayline[] = [];

        paylines.forEach((payline, paylineIdx) => {
            const symbolIds = payline.line.map(([row, col]) => grid[row][col]);
            const winningSymbol = GameGamble.isWinningCombination(symbolIds);

            if (winningSymbol !== null) {
                winners.push({
                    paylineIndex: paylineIdx,
                    symbol: winningSymbol,
                    reward: GameGamble.getRewardBySymbol(winningSymbol),
                    positions: payline.line as [number, number][],
                });
            }
        });

        return winners;
    }

    /**
     * Conduct a full spin cycle: spin the grid, check wins, return the outcome.
     * @returns {SpinResult}
     */
    spin(): SpinResult {
        const grid = this.generateRandomGrid();
        const winningPaylines = this.evaluateWinningPaylines(grid);
        const totalWin = winningPaylines.reduce((sum, wl) => sum + wl.reward, 0);

        return {
            grid,
            winningPaylines,
            totalWin,
        };
    }

    /**
     * Utility: checks for a winning combination (e.g. 3 of the same in payline).
     */
    static isWinningCombination(symbolIdsOnLine: number[]): number | null {
        if (
            symbolIdsOnLine.length === gridSize &&
            symbolIdsOnLine.every(id => id === symbolIdsOnLine[0])
        ) {
            return symbolIdsOnLine[0];
        }
        return null;
    }

    /**
     * Utility: Get reward value by symbol ID.
     */
    static getRewardBySymbol(symbolId: number): number {
        const entry = paytable.find(e => e.symbol === symbolId);
        return entry ? entry.reward : 0;
    }

    /**
     * Returns a 1D list of symbol image URLs for the UI, for flat boards.
     */
    static getSymbolsGridAsImages(grid: number[][]): string[] {
        return grid.flat().map(symbolId => symbols[symbolId]);
    }

    /**
     * Generates a special winning line for test/demo (all same symbol, weighted chance).
     */
    static getRandomWinningLine(): number[] {
        const totalChance = paytable.reduce((sum, p) => sum + p.chance, 0);
        let rnd = Math.random() * totalChance;
        for (const entry of paytable) {
            rnd -= entry.chance;
            if (rnd <= 0) {
                return [entry.symbol, entry.symbol, entry.symbol];
            }
        }
        const defaultSymbol = paytable[paytable.length - 1].symbol;
        return [defaultSymbol, defaultSymbol, defaultSymbol];
    }

    /**
     * Generates a special non-winning line for test/demo (guaranteed not all the same).
     */
    static getRandomNonWinningLine(): number[] {
        let arr: number[] = [];
        while (true) {
            arr = Array(gridSize)
                .fill(0)
                .map(() => Math.floor(Math.random() * symbols.length));
            if (!(arr.every((id) => id === arr[0]))) break;
        }
        return arr;
    }

    /**
     * Get the latest grid (for stateful usage).
     */
    getGrid(): number[][] {
        return this.grid;
    }

    /**
     * Set a custom grid (mainly for tests/demo).
     */
    setGrid(newGrid: number[][]) {
        this.grid = newGrid;
    }
}