import { buildGrid, countXMAS, countXMASPattern } from './solution';

describe('Day 4: Ceres Search', () => {
    const exampleInput1 = `
..X...
.SAMX.
.A..A.
XMAS.S
.X....
    `.trim();

    const exampleInput2 = `
M.S
.A.
M.S
    `.trim();

    describe('Part 1', () => {
        test('should count XMAS occurrences', () => {
            const grid = buildGrid(exampleInput1);
            expect(countXMAS(grid)).toBe(4);
        });
    });

    describe('Part 2', () => {
        test('should count X-MAS patterns', () => {
            const grid = buildGrid(exampleInput2);
            expect(countXMASPattern(grid)).toBe(1);
        });

        test('should handle backwards MAS', () => {
            const grid = buildGrid(`
S.M
.A.
S.M
            `.trim());
            expect(countXMASPattern(grid)).toBe(1);
        });


        test('should handle backwards MAS', () => {
            const grid = buildGrid(`
.M.S......
..A..MSMS.
.M.S.MAA..
..A.ASMSM.
.M.S.M....
..........
S.S.S.S.S.
.A.A.A.A..
M.M.M.M.M.
..........
            `.trim());
            expect(countXMASPattern(grid)).toBe(9);
        });
    });

    describe('Part 2 Edge Cases', () => {
        test('should handle grid edges', () => {
            const edgeGrid = buildGrid(`
    M.S
    .A.
    ...
            `.trim());
            expect(countXMASPattern(edgeGrid)).toBe(0); // No complete X pattern at edge
        });
    
        test('should handle small grids', () => {
            const smallGrid = buildGrid(`M.A.S`.trim());
            expect(countXMASPattern(smallGrid)).toBe(0); // Too small for X pattern
        });
    });
});