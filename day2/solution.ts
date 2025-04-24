import { readFileSync } from 'fs';
import * as path from 'path';

type Report = number[];

export function parseInput(input: string): Report[] {
    return input.trim().split('\n').map(line => 
        line.trim().split(/\s+/).map(Number)
    );
}

function isStrictlyMonotonic(report: Report): boolean {
    if (report.length <= 1) return true;
    
    let isIncreasing: boolean | null = null;
    for (let i = 0; i < report.length - 1; i++) {
        const diff = report[i+1] - report[i];
        if (diff === 0) return false;
        
        if (isIncreasing === null) {
            isIncreasing = diff > 0;
        } else if ((isIncreasing && diff < 0) || (!isIncreasing && diff > 0)) {
            return false;
        }
    }
    return true;
}

function hasValidSteps(report: Report): boolean {
    for (let i = 0; i < report.length - 1; i++) {
        const diff = Math.abs(report[i+1] - report[i]);
        if (diff < 1 || diff > 3) return false;
    }
    return true;
}

export function isSafePart1(report: Report): boolean {
    return isStrictlyMonotonic(report) && hasValidSteps(report);
}

export function isSafePart2(report: Report): boolean {
    // Check if already safe without removal
    if (isSafePart1(report)) return true;
    
    // Try removing each element to see if it becomes safe
    for (let i = 0; i < report.length; i++) {
        const modifiedReport = [...report.slice(0, i), ...report.slice(i+1)];
        if (isSafePart1(modifiedReport)) {
            return true;
        }
    }
    return false;
}

export function countSafeReports(reports: Report[], part: 1 | 2 = 1): number {
    const checker = part === 1 ? isSafePart1 : isSafePart2;
    return reports.filter(checker).length;
}

function main() {
    try {
        const input = readFileSync(path.join(__dirname, 'input.txt'), 'utf-8');
        const reports = parseInput(input);
        
        // Part 1
        const safeCountPart1 = countSafeReports(reports, 1);
        console.log(`Part 1: Safe reports: ${safeCountPart1}`);
        
        // Part 2
        const safeCountPart2 = countSafeReports(reports, 2);
        console.log(`Part 2: Safe reports with Problem Dampener: ${safeCountPart2}`);
    } catch (error) {
        console.error('Error:', error instanceof Error ? error.message : error);
    }
}

if (require.main === module) {
    main();
}