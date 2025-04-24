# Day 4: Ceres Search - Solution

## Problem Description
Find all occurrences of "XMAS" in a word search grid where the word can appear:
- In any of 8 possible directions (horizontal, vertical, diagonal)
- Backwards or forwards
- With overlapping instances

## Solution Approach

### 1. Grid Construction
- Parses input into a 2D character grid
```typescript
input.trim().split('\n').map(line => line.split(''));
```

### 2. Search Algorithm
For each cell in the grid:
  - Checks if it starts with 'X'
  - Searches in all 8 possible directions
  - Verifies if the following letters match 'MAS'
  - Counts all valid occurrences

### 3. Direction Handling
Uses direction vectors to search:
```typescript
const directions: Direction[] = [
  [0, 1],   // Right
  [1, 0],    // Down
  [1, 1],    // Down-right
  [1, -1],   // Down-left
  [0, -1],   // Left
  [-1, 0],   // Up
  [-1, 1],   // Up-right
  [-1, -1]   // Up-left
];
```


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
2521
