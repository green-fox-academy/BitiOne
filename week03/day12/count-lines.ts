'use strict';

import { fileURLToPath } from "url";

// Write a function that takes a filename as string,
// then returns the number of lines the file contains.
// It should return zero if it can't open the file, and
// should not raise any error.


function getNumberOfLinesInFile (fileName: string) {
    const fs = require('fs');

    try{
        let fileContent: string = fs.readFileSync(fileName, 'utf-8').split('\r\n');
        console.log(fileContent.length);
    }

    catch(e) {
        console.log(0);
    }
}

getNumberOfLinesInFile('my-file.txt');