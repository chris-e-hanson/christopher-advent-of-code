import { readFileSync } from 'fs';
import * as path from 'path';

type Grid = string[][];
type Direction = [number, number];

export function buildGrid(input: string): Grid {
    return input.trim().split('\n').map(line => line.split(''));
}

// Part 1: Find all XMAS occurrences
export function countXMAS(grid: Grid): number {
    const directions: Direction[] = [
        [0, 1], [1, 0], [1, 1], [1, -1],  // Right, Down, Down-right, Down-left
        [0, -1], [-1, 0], [-1, 1], [-1, -1] // Left, Up, Up-right, Up-left
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
                    if (ny < 0 || ny >= grid.length || nx < 0 || nx >= grid[ny].length || 
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

// Part 2: Find all X-MAS patterns (two MAS forming an X)
export function countXMASPattern(grid: Grid): number {
    let count = 0;
    const height = grid.length;
    if (height === 0) return 0;
    const width = grid[0].length;

    // Check all possible center positions
    for (let y = 1; y < height; y++) {
        for (let x = 1; x < width; x++) {
            if (grid[y][x] !== 'A') continue;

            // Check all four possible X patterns
            const directions = [
                [[-1, -1], [1, 1]],  // NW-SE diagonal
                [[-1, 1], [1, -1]]    // NE-SW diagonal
            ];

            let x_check_count = 0
            for (const [dir1, dir2] of directions) {
                const [dy1, dx1] = dir1;
                const [dy2, dx2] = dir2;

                // Calculate all four endpoints
                const y1 = y + dy1;
                const x1 = x + dx1;
                const y2 = y + dy2;
                const x2 = x + dx2;

                // Verify all positions are within bounds
                const positionsValid = (
                    y1 >= 0 && y1 < height && x1 >= 0 && x1 < width &&
                    y2 >= 0 && y2 < height && x2 >= 0 && x2 < width
                );

                if (!positionsValid) continue;

                // Check for MAS patterns in both directions
                if (
                    (grid[y1][x1] === 'M' && grid[y2][x2] === 'S') || 
                    (grid[y1][x1] === 'S' && grid[y2][x2] === 'M')
                ) {
                    x_check_count ++;
                }
            }

            if (x_check_count === 2) count ++;
        }
    }
    return count;
}

function main() {
    // try {
        const input = readFileSync(path.join(__dirname, 'input.txt'), 'utf-8');
        const grid = buildGrid(input);
        
        // Part 1
        const part1Count = countXMAS(grid);
        console.log(`Part 1: XMAS occurrences: ${part1Count}`);
        
        // Part 2
        const part2Count = countXMASPattern(grid);
        console.log(`Part 2: X-MAS patterns: ${part2Count}`);
    // } catch (error) {
    //     console.error('Error:', error instanceof Error ? error.message : error);
    // }
}

if (require.main === module) {
    main();
}