'use strict';

// Write a function called `sum` that returns the sum of numbers from zero to the given parameter


function sum(number: number): number {
    console.log(`The sum of numbers until: ${number}`);
    let sumOfNumber: number = 0;
    for (let i: number = 0; i <= number; i++) {
        sumOfNumber+=i;
    }
    return sumOfNumber;
}

let sumOfNumbersToTen: number = sum(8);
console.log(sumOfNumbersToTen);

let sumOfNumbersToTwenty: number = sum(20);
console.log(sumOfNumbersToTwenty);