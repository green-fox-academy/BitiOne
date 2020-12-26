'use strict';

const fs = require('fs');

// Write a function that takes a filename as string,
// then returns the number of lines the file contains.
// It should return zero if it can't open the file, and
// should not raise any error.


function lineCounter(givenFileName: string) {
  let fileContent: string;
  let splittedData: string[] = [];

  try {
    fileContent = fs.readFileSync(givenFileName, 'utf-8');
  }

  catch(e) {
    console.log(`File does not exist.`);
  }

  splittedData = fileContent.split('\n');

  console.log(`The ${givenFileName} file have ${splittedData.length} lines.`);
}

lineCounter('my-file.txt');