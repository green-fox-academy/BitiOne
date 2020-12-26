'use strict';

const fs = require('fs');

// Write a program that opens a file called "my-file.txt", then prints
// each line from the file.
// If the program is unable to read the file (for example it does not exist),
// then it should print the following error message: "Unable to read file: my-file.txt"


function printLines(fileName: string): void {
  let fileContent: string;
  try {
    fileContent = fs.readFileSync(fileName, 'utf-8');
  }
  
  catch(e) {
    console.log(`File does not exist.`);
  }
  
  console.log(fileContent);
}

printLines('my-file.txt');