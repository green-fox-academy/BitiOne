'use strict';

// - Create a function called `calculateFactorial()`
//   that returns the factorial of its input

function calculateFactorial(x: number): number {
  let y: number = 1;
  for(let i: number = 0; i < x; i++) {
    y *= (x - i);
  }
  return y;
}

console.log(calculateFactorial(5));