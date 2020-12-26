'use strict';

// Write a function that copies the contents of a file into another
// It should take the filenames as parameters
// It should return a boolean that shows if the copy was successful

const fs = require('fs');

function readAndWrite(readFile: string, writeFile: string): boolean {
  let readedFileContent: string;

  try {
    readedFileContent = fs.readFileSync(readFile, 'utf-8');
  }

  catch(e) {
    console.log(`Can't read file!`);
  }
  
  try {
    fs.writeFileSync(writeFile, readedFileContent);
  }

  catch(e) {
    console.log(`Can't write file!`);
  }

  if(fs.readFileSync(writeFile, 'utf-8') !== '') {
    return true;
  } else {
    return false;
  }
}

console.log(readAndWrite('06-read-file.txt', '06-write-file.txt'));