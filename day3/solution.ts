import { readFileSync } from 'fs';
import * as path from 'path';

export function findValidMultiplications(memory: string): number {
    const regex = /mul\((\d{1,3}),(\d{1,3})\)/g;
    let sum = 0;
    let match;

    while ((match = regex.exec(memory)) !== null) {
        const x = parseInt(match[1], 10);
        const y = parseInt(match[2], 10);
        sum += x * y;
    }

    return sum;
}

function main() {
    try {
        const input = readFileSync(path.join(__dirname, 'input.txt'), 'utf-8');
        const result = findValidMultiplications(input);
        console.log(`Sum of all valid multiplications: ${result}`);
    } catch (error) {
        console.error('Error:', error instanceof Error ? error.message : error);
    }
}

if (require.main === module) {
    main();
}