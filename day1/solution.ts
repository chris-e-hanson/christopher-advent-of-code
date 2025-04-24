import { readFileSync } from 'fs';
import * as path from 'path';

export function parseInput(input: string): { left: number[]; right: number[] } {
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

export function calculateTotalDistance(left: number[], right: number[]): number {
    const sortedLeft = [...left].sort((a, b) => a - b);
    const sortedRight = [...right].sort((a, b) => a - b);
    return sortedLeft.reduce((sum, num, index) => sum + Math.abs(num - sortedRight[index]), 0);
}

export function calculateSimilarityScore(left: number[], right: number[]): number {
    // Create frequency map for right list
    const rightCounts = new Map<number, number>();
    right.forEach(num => {
        rightCounts.set(num, (rightCounts.get(num) || 0) + 1);
    });

    // Calculate score by summing leftNum * rightCount for each leftNum
    return left.reduce((total, leftNum) => {
        return total + (leftNum * (rightCounts.get(leftNum) || 0));
    }, 0);
}

function main() {
    try {
        const input = readFileSync(path.join(__dirname, 'input.txt'), 'utf-8');
        const { left, right } = parseInput(input);
        
        // Part 1
        const totalDistance = calculateTotalDistance(left, right);
        console.log('Part 1: Total distance between lists:', totalDistance);
        
        // Part 2
        const similarityScore = calculateSimilarityScore(left, right);
        console.log('Part 2: Similarity score:', similarityScore);
    } catch (error) {
        console.error('Error:', error instanceof Error ? error.message : error);
    }
}

if (require.main === module) {
    main();
}