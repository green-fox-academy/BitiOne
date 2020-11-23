'use strict';

// Task 01
let a: number = 24;
let out: number = 0;

if ((a %= 2) == 0){
    out = ++out;
}

console.log(out);

// Task 02
let b: number = 13;
let out2: string = '';

if (b < 10){
    out2 = 'Less!';
} else if (b > 20){
    out2 = 'More!';
} else  {
    out2 = 'Sweet!'
}
console.log(out2);

// Task 03
let c: number = 123;
let credits: number = 100;
let isBonus: boolean = false;

if (credits < 50 && !isBonus){
    c -= 2;
} else if (credits >= 50 && !isBonus){
    c--;
}

console.log(c);

// Task 04
let d: number = 8;
let time: number = 120;
let out3: string = '';

if ((d %= 4) == 0 && time <= 200){
    out3 = 'check';
} else if (time > 200){
    out3 = 'Time out'
} else {
    out3 = 'Run Forrest Run!'
}

console.log(out3);