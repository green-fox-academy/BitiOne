'use strict';

const fs = require('fs');

// Write a function that is able to manipulate a file
// By writing your name into it as a single line
// The file should be named "my-file.txt"
// In case the program is unable to write the file,
// It should print the following error message: "Unable to write file: my-file.txt"


function nameWriter(givenName: string): void {
  try {
    fs.writeFileSync('04-my-file.txt', givenName);
  }

  catch(e) {
    console.log(`Unable to write file: 04-my-file.txt.`)
  }
}

nameWriter('Bittner Krisztián');