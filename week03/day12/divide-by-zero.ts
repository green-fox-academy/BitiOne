'use strict';

// Create a function that takes a number
// divides ten with it,
// and prints the result.
// It should print 'fail' if the parameter is 0

function tenDevidedWithANumber (x: number) {
    if ( x === 0) {
        console.log('fail');
    } else {
        console.log(10 / x);
    }
}

tenDevidedWithANumber(0);