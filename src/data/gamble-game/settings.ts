export type SymbolType = string;

export interface Payline {
    line: number[][];
}

export interface PaytableEntry {
    symbol: number;   // Тип символа для комбинации 3 подряд
    reward: number;   // Сколько платит
    chance: number;   // Вес выпадения
}

// Размерность грида
export const gridSize = 3;

// Доступные символы
export const symbols: SymbolType[] = [
    '/symbols/symbol-0.png',
    '/symbols/symbol-1.png',
    '/symbols/symbol-2.png',
    '/symbols/symbol-3.png',
    '/symbols/symbol-4.png',
];

// Описание линий (все горизонтали, вертикали и обе диагонали для 3x3)
export const paylines: Payline[] = [
    // Горизонтали
    { line: [[0, 0], [0, 1], [0, 2]] }, // верхний ряд
    { line: [[1, 0], [1, 1], [1, 2]] }, // центр
    { line: [[2, 0], [2, 1], [2, 2]] }, // низ

    // Вертикали
    { line: [[0, 0], [1, 0], [2, 0]] }, // левый столбец
    { line: [[0, 1], [1, 1], [2, 1]] }, // средний столбец
    { line: [[0, 2], [1, 2], [2, 2]] }, // правый столбец

    // Диагонали
    { line: [[0, 0], [1, 1], [2, 2]] }, // диагональ \
    { line: [[0, 2], [1, 1], [2, 0]] }, // диагональ /
];

// Список возможных сочетаний для 3х одинаковых символов по линии
export const paytable: PaytableEntry[] = [
    {
        symbol: 0,
        reward: 50,
        chance: 2
    },
    {
        symbol: 1,
        reward: 25,
        chance: 5
    },
    {
        symbol: 2,
        reward: 15,
        chance: 8
    },
    {
        symbol: 3,
        reward: 10,
        chance: 12
    },
    {
        symbol: 4,
        reward: 6,
        chance: 18
    }
];

