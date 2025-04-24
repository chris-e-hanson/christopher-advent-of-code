import { readFileSync } from 'fs';
import * as path from 'path';

export function solvePart1(memory: string): number {
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

export function solvePart2(memory: string): number {
    const mulRegex = /mul\((\d{1,3}),(\d{1,3})\)/g;
    const controlRegex = /(do\(\)|don't\(\))/g;
    let sum = 0;
    let mulEnabled = true;

    // Find all control and mul instructions with their positions
    const instructions: Array<{
        index: number;
        type: 'mul' | 'do' | 'dont';
        x?: number;
        y?: number;
    }> = [];

    let controlMatch;
    while ((controlMatch = controlRegex.exec(memory)) !== null) {
        instructions.push({
            index: controlMatch.index,
            type: controlMatch[1] === 'do()' ? 'do' : 'dont'
        });
    }

    let mulMatch;
    while ((mulMatch = mulRegex.exec(memory)) !== null) {
        instructions.push({
            index: mulMatch.index,
            type: 'mul',
            x: parseInt(mulMatch[1], 10),
            y: parseInt(mulMatch[2], 10)
        });
    }

    // Sort instructions by their position in the memory
    instructions.sort((a, b) => a.index - b.index);

    // Process instructions in order
    for (const inst of instructions) {
        if (inst.type === 'do') {
            mulEnabled = true;
        } else if (inst.type === 'dont') {
            mulEnabled = false;
        } else if (inst.type === 'mul' && mulEnabled) {
            sum += inst.x! * inst.y!;
        }
    }

    return sum;
}

function main() {
    try {
        const input = readFileSync(path.join(__dirname, 'input.txt'), 'utf-8');
        
        // Part 1
        const part1Result = solvePart1(input);
        console.log(`Part 1: Sum of multiplications: ${part1Result}`);
        
        // Part 2
        const part2Result = solvePart2(input);
        console.log(`Part 2: Sum of enabled multiplications: ${part2Result}`);
    } catch (error) {
        console.error('Error:', error instanceof Error ? error.message : error);
    }
}

if (require.main === module) {
    main();
}