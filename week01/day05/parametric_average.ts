'use strict';

// Task 01
let a: number = 50;
let sum: number = 0;
let average: number = 0;

for (let i: number = 1; i <= a; i++) {
    sum = sum + i;
    average = sum / i;
}

console.log('Sum: ' + sum + ', Average: ' + average)