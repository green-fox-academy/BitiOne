'use strict';

//  Create a function that takes a list of numbers as parameter
//  and returns a list where the elements are sorted in ascending numerical order
//  When you are done, add a second boolean parameter to the function
//  If it is `true` sort the list descending, otherwise ascending

function bubble(array: number[]): void {
  array.sort(function(a, b){
    return a - b;
  });
  console.log(array);
}

function advancedBubble(array: number[], booleanVar: boolean): void {
  if(booleanVar === true) {
    array.sort(function(a, b){
      return a - b;
    });
  } else {
    array.sort(function(a, b){
      return b - a;
    });
  }
  console.log(array);
}

//  Example:
console.log(bubble([34, 12, 24, 9, 5]));
//  should print [5, 9, 12, 24, 34]
console.log(advancedBubble([34, 12, 24, 9, 5], false));
//  should print [34, 24, 12, 9, 5]