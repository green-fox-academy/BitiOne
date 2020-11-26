'use strict';

  
// -  Create variable named `nameToGreet` and assign the value `Green Fox` to it
// -  Create a function called `greet` that greets it's input parameter
//     -  Greeting is printing e.g. `Greetings, dear Green Fox`
// -  Greet `nameToGreet`

//Solution 01
let nameToGeet01: string = 'Green Fox';

function greet01() {
    console.log('Greetings, dear ' + nameToGeet01);
}

greet01();

//Solution 02
function greet02(nameToGeet02: string) {
    console.log('Greetings, dear ' + nameToGeet02);
}

greet02('Green Fox');