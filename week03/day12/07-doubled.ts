'use strict';

// Create a method that decrypts duplicated-chars.txt

const fs = require('fs');

function removeDuplicatedChars(readFile: string) {
  let readedFileContent: string;
  let fileContentArray: string[] = [];
  let removedDuplicatedCharsContent: string[] = [];
  let finaleContent: string;

  try {
    readedFileContent = fs.readFileSync(readFile, 'utf-8');
  }

  catch(e) {
    console.log(`Can't read file!`);
    return;
  }

  fileContentArray = readedFileContent.split('');

  for(let i: number = 0; i < fileContentArray.length; i++) {
    if(fileContentArray[i] !== fileContentArray[i - 1]) {
      removedDuplicatedCharsContent.push(fileContentArray[i])
    }
  }

  finaleContent = removedDuplicatedCharsContent.join('');

  try {
    fs.writeFileSync(readFile, finaleContent);
  }

  catch(e) {
    console.log(`Can't write file!`);
  }
}

removeDuplicatedChars('07-duplicated-chars.txt');