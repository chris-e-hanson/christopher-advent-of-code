import { readFileSync } from 'fs';
import * as path from 'path';

type Grid = string[][];
type Direction = [number, number];

export function buildGrid(input: string): Grid {
    return input.trim().split('\n').map(line => line.split(''));
}

export function countXMAS(grid: Grid): number {
    const directions: Direction[] = [
        [0, 1],   // Right
        [1, 0],    // Down
        [1, 1],    // Down-right
        [1, -1],   // Down-left
        [0, -1],   // Left
        [-1, 0],   // Up
        [-1, 1],   // Up-right
        [-1, -1]   // Up-left
    ];

    const word = 'XMAS';
    let count = 0;

    for (let y = 0; y < grid.length; y++) {
        for (let x = 0; x < grid[y].length; x++) {
            if (grid[y][x] !== 'X') continue;

            for (const [dy, dx] of directions) {
                let found = true;
                for (let i = 1; i < word.length; i++) {
                    const ny = y + dy * i;
                    const nx = x + dx * i;

                    if (ny < 0 || ny >= grid.length || 
                        nx < 0 || nx >= grid[ny].length || 
                        grid[ny][nx] !== word[i]) {
                        found = false;
                        break;
                    }
                }
                if (found) count++;
            }
        }
    }

    return count;
}

function main() {
    try {
        const input = readFileSync(path.join(__dirname, 'input.txt'), 'utf-8');
        const grid = buildGrid(input);
        const count = countXMAS(grid);
        console.log(`Number of XMAS occurrences: ${count}`);
    } catch (error) {
        console.error('Error:', error instanceof Error ? error.message : error);
    }
}

if (require.main === module) {
    main();
}