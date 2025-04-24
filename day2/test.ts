import { parseInput, isSafePart1, isSafePart2, countSafeReports } from './solution';

describe('Day 2: Red-Nosed Reports', () => {
    const exampleInput = `
7 6 4 2 1
1 2 7 8 9
9 7 6 2 1
1 3 2 4 5
8 6 4 4 1
1 3 6 7 9
    `.trim();

    const reports = parseInput(exampleInput);

    describe('Part 1', () => {
        it('should identify safe reports', () => {
            expect(isSafePart1(reports[0])).toBe(true);  // 7 6 4 2 1
            expect(isSafePart1(reports[5])).toBe(true);  // 1 3 6 7 9
        });

        it('should identify unsafe reports', () => {
            expect(isSafePart1(reports[1])).toBe(false); // 1 2 7 8 9
            expect(isSafePart1(reports[2])).toBe(false); // 9 7 6 2 1
            expect(isSafePart1(reports[3])).toBe(false); // 1 3 2 4 5
            expect(isSafePart1(reports[4])).toBe(false); // 8 6 4 4 1
        });

        it('should count safe reports correctly', () => {
            expect(countSafeReports(reports, 1)).toBe(2);
        });
    });

    describe('Part 2', () => {
        it('should identify safe reports with Problem Dampener', () => {
            expect(isSafePart2(reports[0])).toBe(true);  // Already safe
            expect(isSafePart2(reports[3])).toBe(true);  // Safe by removing 3
            expect(isSafePart2(reports[4])).toBe(true);  // Safe by removing 4
            expect(isSafePart2(reports[5])).toBe(true);  // Already safe
        });

        it('should still identify unsafe reports', () => {
            expect(isSafePart2(reports[1])).toBe(false); // Still unsafe
            expect(isSafePart2(reports[2])).toBe(false); // Still unsafe
        });

        it('should count safe reports correctly with Problem Dampener', () => {
            expect(countSafeReports(reports, 2)).toBe(4);
        });
    });
});