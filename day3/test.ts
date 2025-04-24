import { findValidMultiplications } from './solution';

describe('Day 3: Mull It Over', () => {
    test('should find and calculate valid mul instructions', () => {
        const memory = 'xmul(2,4)%&mul[3,7]!@^do_not_mul(5,5)+mul(32,64]then(mul(11,8)mul(8,5))';
        expect(findValidMultiplications(memory)).toBe(161);
    });

    test('should handle empty input', () => {
        expect(findValidMultiplications('')).toBe(0);
    });

    test('should ignore malformed instructions', () => {
        const memory = 'mul(4*, mul(6,9!, ?(12,34), mul ( 2 , 4 )';
        expect(findValidMultiplications(memory)).toBe(0);
    });

    test('should handle numbers with 1-3 digits', () => {
        const memory = 'mul(1,2)mul(12,34)mul(123,456)';
        expect(findValidMultiplications(memory)).toBe(1*2 + 12*34 + 123*456);
    });
});