# Advent of Code - Day 4: Ceres Search

## Problem Description

### Part 1: XMAS Word Search
Find all occurrences of the word "XMAS" in a grid where:
- The word can appear in any of 8 directions (horizontal, vertical, diagonal)
- The word can be written forwards or backwards
- Overlapping instances should all be counted

### Part 2: X-MAS Pattern Search
Find all X-shaped patterns containing two "MAS" sequences where:
- The center of the X must be 'M'
- Both diagonals must form valid "MAS" or "SAM" sequences
- The entire X pattern must fit within grid boundaries

## Solution Approach

### Part 1 Implementation
1. **Grid Scanning**: Searches for 'X' characters as potential starting points
2. **Direction Checking**: For each 'X', checks all 8 possible directions
3. **Sequence Validation**: Verifies subsequent 'M', 'A', 'S' characters
4. **Counting**: Tracks all valid occurrences, including overlapping ones

### Part 2 Implementation
1. **Center Detection**: Identifies all 'M' characters as potential X centers
2. **Diagonal Validation**: Checks both main diagonals from each center
3. **Pattern Matching**: Validates "MAS" or "SAM" in both directions
4. **Boundary Safety**: Ensures complete patterns fit within grid
5. **Counting**: Only counts fully valid X patterns

## How to Run

### Prerequisites
- Node.js (v16+ recommended)
- TypeScript
- npm/yarn

### Installation
```bash
npm install


### 4. Installation
```cmd
npm install
```

2. Run the solution:
```cmd
npx ts-node day4/solution.ts
```

3. Testing the solution:
```cmd
npx jest day4/test.ts
```

## Answer
Part 1: XMAS occurrences: 2521
Part 2: X-MAS patterns: 1694
