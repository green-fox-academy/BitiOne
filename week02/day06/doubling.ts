'use strict';

// -  Create a variable named `baseNum` and assign the value `123` to it
// -  Create a function called `doubling` that doubles it's input parameter and returns with an integer
// -  Log the result of `doubling(baseNum)` to the console

//Solution 01
let baseNum: number = 123;

function doubling01() {
    console.log(baseNum * 2);
}

doubling01();

//Solution 02
function doubling02(baseNum: number) {
    console.log(baseNum * 2);
}

doubling02(123);