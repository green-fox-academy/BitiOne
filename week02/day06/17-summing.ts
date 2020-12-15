'use strict';

// Write a function called `sum()` that returns the sum of numbers from zero to the given parameter

function sum(x: number): number {
  let y: number = 0;
  for(let i: number = 0; i <= x; i++) {
    y += i;
  }
  return y;
}

console.log(sum(5));