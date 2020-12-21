'use strict';

//  Create a function that takes a list of numbers as a parameter
//  and returns a list of numbers where every number is unique (occurs only once)

let arrayOfNumbers: number[] = [1, 11, 34, 11, 52, 61, 1, 34, 5];

function unique(array: number[]): void {
  let uniqueItems: number[] = [];
  let counter: number = 0;
  for(let i: number = 0; i < array.length; i++) {
    for(let j: number = 0; j < array.length; j++) {
      if(array[i] === array[j]) {
        counter += 1;
      }
    }
    if(counter === 1) {
      uniqueItems.push(array[i]);
    }
    counter = 0;
  }
  console.log(uniqueItems);
}

unique(arrayOfNumbers);

//  Example
//console.log(findUniqueItems([1, 11, 34, 11, 52, 61, 1, 34]))
//  should print: `[1, 11, 34, 52, 61]`