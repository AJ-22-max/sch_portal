export interface AnimatedSquare {
    id: number;
    position: number;
    color: string;
    icon?: string;
    text?: string;
}

export const movements: Record<number, number[]> = {
    2: [2, 1, 3, 5, 6, 4, 2],
    3: [3, 5, 6, 4, 2, 1, 3],
    4: [4, 2, 1, 3, 5, 6, 4],
    5: [5, 6, 4, 2, 1, 3, 5],
};
