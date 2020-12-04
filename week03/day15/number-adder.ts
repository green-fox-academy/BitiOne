'use strict';

function adder(num: number): number {
    if (num <= 1) {
        return 1;
    } else {
        return num + adder(num - 1);
    }
}

console.log(`5! is ${adder(10)}`);