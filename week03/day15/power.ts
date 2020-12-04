'use strict';

function power(base: number, num: number): number {
    if (num <= 1) {
        return base;
    } else {
        return base * power(base, num - 1);
    }
}

console.log(`This is 3 power 4: ${power(3, 4)}`)