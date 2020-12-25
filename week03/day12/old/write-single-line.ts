'use strict';

// Write a function that is able to manipulate a file
// By writing your name into it as a single line
// The file should be named "my-file.txt"
// In case the program is unable to write the file,
// It should print the following error message: "Unable to write file: my-file.txt"

function writingNameToFile(name: string) {
    const fs = require('fs');

    try{
        let fileContent = name;
        fs.writeFileSync('my-file02.txt', fileContent);
    }

    catch(e) {
        console.log('Unable to write file: my-file.txt');
    }
}

writingNameToFile('Krisztián Bittner');