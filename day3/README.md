# Day 3: Mull It Over - Solution

## Problem Description
We need to scan corrupted computer memory to find valid `mul(X,Y)` instructions where:
- X and Y are 1-3 digit numbers
- The exact format `mul(X,Y)` must be matched
- All other variations should be ignored

## Solution Approach

### 1. Input Parsing
- Reads the entire memory contents from `input.txt`
- Treats it as a single string to scan

### 2. Pattern Matching
Uses a regular expression to find valid instructions:
```typescript
/mul\((\d{1,3}),(\d{1,3})\)/g
```

### 3. Calculation
For each valid match:
  1. Extracts the two numbers
  2. Converts them to integers
  3. Multiplies them
  4. Adds the result to the running total


### 4. Installation
```cmd
npm install
```

2. Run the solution:
```cmd
npx ts-node day3/solution.ts
```

3. Testing the solution:
```cmd
npx jest day3/test.ts
```

## Answer
Part 1: Sum of multiplications: 155955228
Part 2: Sum of enabled multiplications: 100189366
