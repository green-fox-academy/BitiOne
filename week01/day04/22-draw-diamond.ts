'use strict';

// Write a program that draws a
// diamond like this:
//
//    *
//   ***
//  *****
// *******
//  *****
//   ***
//    *
//
// The diamond should have as many lines as lineCount is

let lineCount: number = 7;
let blankSpace: string = ' ';
let star: string = '*';

for(let i: number = 0; i < lineCount; i++) {
  let star2: string = '**';
  let blankSpace2: string = ' ';
  if(i < (lineCount / 2)) {
    if(i > 0) {
      star += star2;
    }
    for(let j: number = 0; j < (lineCount / 2) - i; j++) {
      blankSpace += blankSpace2;
    }
    console.log(blankSpace + star);
    blankSpace = ' ';
  } else {
    if(i > 0) {
      blankSpace += blankSpace2;
    }
    for(let j: number = 0; j < (lineCount / 2) - i; j++) {
      star += star2;
    }
    console.log(blankSpace + star);
    star = '*';
  }
}