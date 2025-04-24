# Day 1: Historian Hysteria

## Problem Description

The Elves need help reconciling two lists of historical location IDs through two different methods.

### Part 1: Total Distance
Calculate the total distance between two lists by:
1. Sorting both lists
2. Pairing elements by their sorted positions
3. Summing absolute differences between pairs

### Part 2: Similarity Score
Calculate how similar the lists are by:
1. Counting occurrences of each number in the right list
2. For each number in the left list, multiply it by its count in the right list
3. Sum all these products

## Solution Approach

1. **Input Parsing**: The input is read from a local file `input.txt`
2. **Sorting**: Both lists are sorted in ascending order to enable proper pairing
3. **Distance Calculation**: For each pair of numbers at the same position in the sorted lists, we calculate the absolute difference and sum all these differences
4. **Similarity Score**: To calculate the similarity score, we multiply each number in the left list by how many times it appears in the right list and sum all these products together.


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
npx jest day1/test.ts
```

## Answer
Part 1: Total distance between lists: 1189304
Part 2: Similarity score: 24349736