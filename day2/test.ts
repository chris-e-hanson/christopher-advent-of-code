import { isSafeReport, parseInput, countSafeReports } from './solution';

describe('Day 2: Red-Nosed Reports', () => {
    const exampleInput = `
7 6 4 2 1
1 2 7 8 9
9 7 6 2 1
1 3 2 4 5
8 6 4 4 1
1 3 6 7 9
    `.trim();

    describe('isSafeReport', () => {
        it('should identify safe reports', () => {
            expect(isSafeReport([7, 6, 4, 2, 1])).toBe(true);
            expect(isSafeReport([1, 3, 6, 7, 9])).toBe(true);
        });

        it('should identify unsafe reports', () => {
            expect(isSafeReport([1, 2, 7, 8, 9])).toBe(false);
            expect(isSafeReport([9, 7, 6, 2, 1])).toBe(false);
            expect(isSafeReport([1, 3, 2, 4, 5])).toBe(false);
            expect(isSafeReport([8, 6, 4, 4, 1])).toBe(false);
        });

        it('should handle edge cases', () => {
            expect(isSafeReport([1])).toBe(true);
            expect(isSafeReport([1, 2])).toBe(true);
            expect(isSafeReport([1, 4])).toBe(true);
            expect(isSafeReport([1, 5])).toBe(false);
            expect(isSafeReport([5, 5])).toBe(false);
        });
    });

    describe('parseInput', () => {
        it('should parse input correctly', () => {
            const reports = parseInput(exampleInput);
            expect(reports.length).toBe(6);
            expect(reports[0]).toEqual([7, 6, 4, 2, 1]);
        });
    });

    describe('countSafeReports', () => {
        it('should count safe reports correctly', () => {
            const reports = parseInput(exampleInput);
            expect(countSafeReports(reports)).toBe(2);
        });
    });
});