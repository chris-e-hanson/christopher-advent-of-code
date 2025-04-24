import { readFileSync } from 'fs';
import * as path from 'path';

export function calculateTotalDistance(left: number[], right: number[]): number {
    // Sort both lists in ascending order
    const sortedLeft = [...left].sort((a, b) => a - b);
    const sortedRight = [...right].sort((a, b) => a - b);

    // Calculate the sum of absolute differences
    return sortedLeft.reduce((sum, num, index) => {
        return sum + Math.abs(num - sortedRight[index]);
    }, 0);
}

export function parseInput(input: string): { left: number[], right: number[] } {
    const lines = input.trim().split('\n');
    const left: number[] = [];
    const right: number[] = [];

    for (const line of lines) {
        const [leftNum, rightNum] = line.trim().split(/\s+/).map(Number);
        left.push(leftNum);
        right.push(rightNum);
    }

    return { left, right };
}

function main() {
    try {
        // Read input from file
        const input = readFileSync(path.join(__dirname, 'input.txt'), 'utf-8');
        const { left, right } = parseInput(input);
        const totalDistance = calculateTotalDistance(left, right);

        console.log('Part 1: Total distance between lists:', totalDistance);
    } catch (error) {
        console.error('Error:', error);
        console.log('Please make sure input.txt exists in the day1 directory');
    }
}

// Only run main if this is the main module
if (require.main === module) {
    main();
}