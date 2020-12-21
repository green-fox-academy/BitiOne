'use strict';

// -  Create a variable named `numbers`
//    with the following content: `[3, 4, 5, 6, 7]`
// -  Reverse the order of the elements of `numbers`
// 	   -  do it with the built in method
//	   -  do it with creating a new temp array and a loop
// -  Print the elements of the reversed `numbers`

let numbers: number[] = [3, 4, 5, 6, 7];
console.log(numbers);

//Witg build in metod

console.log(numbers.reverse());
console.log(numbers);

//Reset numbers

numbers.reverse();
console.log(numbers);

//With loop

let reversedNumbersWithLoop: number[] = [];

for(let i: number = 0; i < numbers.length; i++) {
  reversedNumbersWithLoop.push(numbers[numbers.length - (1 + i)]);
}

console.log(reversedNumbersWithLoop);