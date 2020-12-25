'use strict';

// Create a function that takes a number
// divides ten with it,
// and prints the result.
// It should print 'Cannot divide by zero!' if the parameter is 0

function devideWithIt(givenNumber: number) {
  try {
    if(givenNumber === 0) throw 'Cannot divide by zero!';
    console.log(10 / givenNumber);
  }
  catch(e) {
    console.log(e);
  }
}

devideWithIt(10);