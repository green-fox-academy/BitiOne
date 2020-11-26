'use strict';

// -  Create a string variable named `typo` and assign the value `Chinchill` to it
// -  Write a function called `appendAFunc` that gets a string as an input,
//    appends an 'a' character to its end and returns with a string
// -  Print the result of `appendAFunc(typo)`

//Solution 01
let typo01: string = 'Chinchill';

function appendAFunc01() {
    console.log(typo01 + 'a');    
}

appendAFunc01();

//Solution 02
function appendAFunc02(typo02: string) {
    console.log(typo02 + 'a');    
}

appendAFunc02('Chinchill');