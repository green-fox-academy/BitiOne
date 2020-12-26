'use strict';

// Create a method that decrypts reversed-lines.txt

const fs = require('fs');

function decryptReversedText(givenFile: string): void {
  let fileContent: string;
  let fileContentArray: string[] = [];
  let finishedFileContent: string = '';
  
  try {
    fileContent = fs.readFileSync(givenFile, 'utf-8');
  }
  
  catch(e) {
    console.log(`Can't read file!`);
    return;
  }
  
  fileContentArray = fileContent.split('\r\n');
  
  for(let i: number = 0; i < fileContentArray.length; i++) {
    if(i < (fileContentArray.length - 1)) {
      finishedFileContent += fileContentArray[i].split('').reverse().join('') +'\r\n';
    } else {
      finishedFileContent += fileContentArray[i].split('').reverse().join('');
    }
  }

  try {
    fs.writeFileSync(givenFile, finishedFileContent);
  }

  catch(e) {
    console.log(`Can't write file!`);
  }
}

decryptReversedText('08-reversed-lines.txt');