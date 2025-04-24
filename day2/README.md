# Day 2: Red-Nosed Reports - Solution

## Problem Description
We need to analyze reactor reports to determine which ones are safe according to:
1. Levels must be either strictly increasing or strictly decreasing
2. Adjacent levels must differ by 1-3 (inclusive)

## Solution Approach

### 1. Input Parsing
- Reads from `input.txt`
- Each line becomes an array of numbers
- Handles variable whitespace between numbers

### 2. Safety Check Algorithm
For each report:
1. **Direction Detection**:
   - Determines if sequence is increasing or decreasing from first pair
   - Rejects if direction changes

2. **Difference Validation**:
   - Checks adjacent differences are 1, 2, or 3
   - Rejects if difference is 0 or >3

3. **Edge Cases**:
   - Single-element reports are safe
   - Two-element reports must have valid difference

### 3. Counting Safe Reports
- Filters all reports through safety check
- Returns count of safe reports

## How to Run

### Prerequisites
- Node.js
- TypeScript

### Installation
```cmd
npm install
```

2. Run the solution:
```cmd
npx ts-node day2/solution.ts
```

3. Testing the solution:
```cmd
npx jest day2/test.ts
```

## Answer
213
