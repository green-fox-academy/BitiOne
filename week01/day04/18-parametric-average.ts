'use strict';

// Write a program that calculates the sum and the average from 1 to a given number
// Example input: 5
// Example output: Sum: 15, Average: 3

let givenNumber: number = 7;
let sum: number = 0;
let average: number = 0;

for(let i: number = 0; i <= givenNumber; i++) {
  sum += i;
  average = sum / i;
}

console.log(`Sum: ${sum}, Average: ${average}`);