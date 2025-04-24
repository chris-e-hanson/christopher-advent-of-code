import { calculateTotalDistance, parseInput } from './solution';

describe('Day 1: Historian Hysteria', () => {
    const exampleInput = `
3   4
4   3
2   5
1   3
3   9
3   3
    `.trim();

    describe('parseInput', () => {
        it('should correctly parse the input', () => {
            const { left, right } = parseInput(exampleInput);
            expect(left).toEqual([3, 4, 2, 1, 3, 3]);
            expect(right).toEqual([4, 3, 5, 3, 9, 3]);
        });
    });

    describe('calculateTotalDistance', () => {
        it('should calculate the correct total distance', () => {
            const left = [3, 4, 2, 1, 3, 3];
            const right = [4, 3, 5, 3, 9, 3];
            expect(calculateTotalDistance(left, right)).toBe(11);
        });

        it('should work with empty lists', () => {
            expect(calculateTotalDistance([], [])).toBe(0);
        });

        it('should work with single-element lists', () => {
            expect(calculateTotalDistance([5], [8])).toBe(3);
        });
    });
});