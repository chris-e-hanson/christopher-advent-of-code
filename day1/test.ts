import { calculateTotalDistance, calculateSimilarityScore, parseInput } from './solution';

describe('Day 1: Historian Hysteria', () => {
    const exampleInput = `
3   4
4   3
2   5
1   3
3   9
3   3
    `.trim();

    describe('Part 1', () => {
        it('should calculate total distance', () => {
            const left = [3, 4, 2, 1, 3, 3];
            const right = [4, 3, 5, 3, 9, 3];
            expect(calculateTotalDistance(left, right)).toBe(11);
        });
    });

    describe('Part 2', () => {
        it('should calculate similarity score', () => {
            const left = [3, 4, 2, 1, 3, 3];
            const right = [4, 3, 5, 3, 9, 3];
            expect(calculateSimilarityScore(left, right)).toBe(31);
        });

        it('should handle numbers not in right list', () => {
            const left = [3, 4, 2, 1, 3, 3];
            const right = [4, 3, 5, 3, 9, 3];
            expect(calculateSimilarityScore(left, right)).toBe(31); // 3*3 + 4*1 + 2*0 + 1*0 + 3*3 + 3*3
        });

        it('should handle empty lists', () => {
            expect(calculateSimilarityScore([], [])).toBe(0);
        });
    });

    describe('parseInput', () => {
        it('should parse input correctly', () => {
            const { left, right } = parseInput(exampleInput);
            expect(left).toEqual([3, 4, 2, 1, 3, 3]);
            expect(right).toEqual([4, 3, 5, 3, 9, 3]);
        });
    });
});