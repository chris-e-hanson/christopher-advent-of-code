import { solvePart1, solvePart2 } from './solution';

describe('Day 3: Mull It Over', () => {
    describe('Part 1', () => {
        test('should sum valid multiplications', () => {
            const memory = 'xmul(2,4)%&mul[3,7]!@^do_not_mul(5,5)+mul(32,64]then(mul(11,8)mul(8,5))';
            expect(solvePart1(memory)).toBe(161); // 2*4 + 5*5 + 11*8 + 8*5
        });

        test('should ignore malformed patterns', () => {
            const memory = 'mul(1*,2)mul(3,4!)mul(1234,5)mul(1, 2)';
            expect(solvePart1(memory)).toBe(0);
        });

        test('should handle complex cases', () => {
            const memory = 'mul(1,2)mul(3,4)invalidmul(5,6)mul(7,8)';
            expect(solvePart1(memory)).toBe(1*2 + 3*4 + 7*8);
        });
    });

    describe('Part 2', () => {
        test('should handle enabled/disabled multiplications', () => {
            const memory = 'xmul(2,4)&mul[3,7]!^don\'t()_mul(5,5)+mul(32,64](mul(11,8)do()?mul(8,5))';
            expect(solvePart2(memory)).toBe(48); // 2*4 + 8*5
        });

        test('should start with multiplications enabled', () => {
            const memory = 'mul(1,2)don\'t()mul(3,4)';
            expect(solvePart2(memory)).toBe(1*2);
        });

        test('should handle multiple control statements', () => {
            const memory = 'do()mul(1,2)don\'t()mul(3,4)do()mul(5,6)don\'t()mul(7,8)';
            expect(solvePart2(memory)).toBe(1*2 + 5*6);
        });
    });
});