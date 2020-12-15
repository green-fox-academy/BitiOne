'use strict';

// -  Create a function called `printParams`
//    which logs to the console the input parameters
//    (can have multiple number of arguments)

function printParams(...inputParameter: any[]) {
  for(let i: number = 0; i < arguments.length; i++) {
    console.log(inputParameter[i]);
  }
}

printParams(1, 2, true, 'hello', 5);