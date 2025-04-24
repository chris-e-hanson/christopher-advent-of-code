# Day 1: Historian Hysteria

## Problem Description

We need to help Elvish Historians reconcile two lists of location IDs by:
1. Sorting both lists
2. Pairing the smallest numbers from each list, then the second smallest, etc.
3. Calculating the absolute difference between each pair
4. Summing all these differences

## Solution Approach

1. **Input Parsing**: The input is read from a local file `input.txt`
2. **Sorting**: Both lists are sorted in ascending order to enable proper pairing
3. **Distance Calculation**: For each pair of numbers at the same position in the sorted lists, we calculate the absolute difference and sum all these differences

## How to Run

1. First install dependencies:
```cmd
npm install
```

2. Run the solution:
```cmd
npx ts-node day1/solution.ts
```

3. Testing the solution:
```cmd
npm test day1/test.ts
```

## Answer
1189304
