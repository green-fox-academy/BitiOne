'use strict';

// -  Create a function called `factorio`
//    that returns it's input's factorial


function factorio(number: number) {
    let factoralOfNumber: number = 1;
    for (let i: number = 1; i <= number; i++) {
        factoralOfNumber *= i;
    }
    console.log(factoralOfNumber);
}

factorio(6);