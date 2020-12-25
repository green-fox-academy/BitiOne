'use strict';

const fs = require('fs');

// Write a function that is able to manipulate a file
// By writing your name into it as a single line
// The file should be named "my-file.txt"
// In case the program is unable to write the file,
// It should print the following error message: "Unable to write file: my-file.txt"

let toBeWrittenName: string;

function nameWriter(givenName: string): void {
  toBeWrittenName = givenName;
  try {
    fs.writeFileSync('04-my-file.txt', toBeWrittenName);
  }

  catch(e) {
    console.log(`Unable to write file: 04-my-file.txt.`)
  }
}

nameWriter('Bittner Krisztián');