'use strict';

// Create a function that can reverse a string, which is passed as the parameter
// Use it on this reversed string to check it!

let toBeReversed: string = `.eslaf eb t'ndluow ecnetnes siht ,dehctiws erew eslaf dna eurt fo sgninaem eht fI`;
function reverse(wantToBeReverse: string): string {
  let reverseArray: string[] = wantToBeReverse.split('');
  reverseArray = reverseArray.reverse();
  let reversedArray: string = reverseArray.join('');
  return wantToBeReverse = reversedArray;
}

console.log(reverse(toBeReversed));

export = reverse;