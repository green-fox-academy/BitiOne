'use strict';

/*
function sumOfDigits(num: number): number {
    if(num <= 1) {
        return 1;
    } else {
        let x: number = num % 10;
        return num * sumOfDigits(num - 1);
    }
}

console.log(sumOfDigits(12));
*/

  
function sumDigits(num) {
    let residue = num % 10;
    let rounded = Math.floor(num / 10);
    if (rounded == 0) {
      return residue;
    } else {
      return residue + sumDigits(rounded);
    }
  }
  console.log(sumDigits(123));