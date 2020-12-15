'use strict';

// Write a program that draws a
// pyramid like this:
//
//    *
//   ***
//  *****
// *******
//
// The pyramid should have as many lines as lineCount is

let lineCount: number = 4;
let blankSpace: string = ' ';
let star: string = '*';

for(let i: number = 0; i < lineCount; i++) {
  let star2: string = '**';
  if(i > 0) {
    star += star2;
  }
  for(let j: number = 0; j < lineCount - i; j++) {
    let blankSpace2: string = ' ';
    blankSpace += blankSpace2;
  }
  console.log(blankSpace + star);
  blankSpace = ' ';
}