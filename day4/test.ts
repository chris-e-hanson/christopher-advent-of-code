import { buildGrid, countXMAS } from './solution';

describe('Day 4: Ceres Search', () => {
    test('should count XMAS occurrences in all directions', () => {
        const input = `
..X...
.SAMX.
.A..A.
XMAS.S
.X....
        `.trim();
        const grid = buildGrid(input);
        expect(countXMAS(grid)).toBe(4);
    });

    test('should count overlapping occurrences', () => {
        const input = `
XXMASX
MASXXX
ASXXXX
SXXXXX
        `.trim();
        const grid = buildGrid(input);
        expect(countXMAS(grid)).toBe(2);
    });

    test('should handle example from problem', () => {
        const input = `
MMMSXXMASM
MSAMXMSMSA
AMXSXMAAMM
MSAMASMSMX
XMASAMXAMM
XXAMMXXAMA
SMSMSASXSS
SAXAMASAAA
MAMMMXMMMM
MXMXAXMASX
        `.trim();
        const grid = buildGrid(input);
        expect(countXMAS(grid)).toBe(18);
    });

    test('should handle empty grid', () => {
        expect(countXMAS([])).toBe(0);
    });
});