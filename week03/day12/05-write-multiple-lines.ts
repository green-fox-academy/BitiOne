'use strict';

const fs = require('fs');

// Create a function that takes 3 parameters: a path, a word and a number
// and is able to write into a file.
// The path parameter should be a string that describes the location of the file you wish to modify
// The word parameter should also be a string that will be written to the file as individual lines
// The number parameter should describe how many lines the file should have.
// If the word is 'apple' and the number is 5, it should write 5 lines
// into the file and each line should read 'apple'
// The function should not raise any errors if it could not write the file.

function writeMultipleLines(givenPath: string, givenWord: string, givenNumber: number): void {
  let givenString: string;
  for(let i: number = 0; i < givenNumber; i++) {
    if(i === 0) {
      givenString = givenWord;
    } else {
      givenString += ('\n' + givenWord);
    }
  }

  try {
    fs.writeFileSync(givenPath, givenString);
  }

  catch(e) {
    console.log(`Can't write file.`)
  }
}

writeMultipleLines('05-my-file.txt', 'apple', 10);