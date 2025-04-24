import { readFileSync } from 'fs';
import * as path from 'path';

export function isSafeReport(levels: number[]): boolean {
    if (levels.length < 2) return true; // Single level is considered safe
    
    let isIncreasing: boolean | null = null;
    
    for (let i = 0; i < levels.length - 1; i++) {
        const current = levels[i];
        const next = levels[i + 1];
        const diff = next - current;

        if (diff === 0) return false; // Levels must change
        
        // Determine if increasing or decreasing
        if (isIncreasing === null) {
            isIncreasing = diff > 0;
        } else {
            if ((isIncreasing && diff < 0) || (!isIncreasing && diff > 0)) {
                return false; // Direction changed
            }
        }

        // Check difference magnitude
        if (Math.abs(diff) < 1 || Math.abs(diff) > 3) {
            return false;
        }
    }
    
    return true;
}

export function parseInput(input: string): number[][] {
    return input.trim().split('\n').map(line => 
        line.trim().split(/\s+/).map(Number)
    );
}

export function countSafeReports(reports: number[][]): number {
    return reports.filter(isSafeReport).length;
}

function main() {
    try {
        const input = readFileSync(path.join(__dirname, 'input.txt'), 'utf-8');
        const reports = parseInput(input);
        const safeCount = countSafeReports(reports);
        
        console.log(`Number of safe reports: ${safeCount}`);
    } catch (error) {
        console.error('Error:', error instanceof Error ? error.message : error);
    }
}

if (require.main === module) {
    main();
}