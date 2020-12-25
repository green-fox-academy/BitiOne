'use strict';

// Write a function that copies the contents of a file into another
// It should take the filenames as parameters
// It should return a boolean that shows if the copy was successful

function copyFileContentToAnotherFile(readedFile: string, writedFile: string) {
    const fs = require('fs');

    let fileContent = fs.readFileSync(readedFile, 'utf-8');
    fs.writeFileSync(writedFile, fileContent);
}

copyFileContentToAnotherFile('file01.txt', 'file02.txt');