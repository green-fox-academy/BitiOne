'use strict';

let a: number = 3;
a = a + 3;
console.log(a);

let b: number = 100;
b = b - 7;
console.log(b);

let c: number = 44;
c = c * 2;
console.log(c);

let d: number = 125;
d = d / 5;
console.log(d);

let e: number = 8;
e = e **= 3;
console.log(e);

let f1: number = 123;
let f2: number = 345;

if (f1 > f2) {
    console.log(true)
} else {
    console.log(false)
}

let g1: number = 350;
let g2: number = 200;

if (g1 < (g2 * 2)) {
    console.log(true)
} else {
    console.log(false)
}

let h: number = 1357988018575474;

if (h % 11 == 0){
    console.log(true)
} else {
    console.log(false)
}

let i1: number = 10;
let i2: number = 3;

if ((i1 > (i2 **= 2)) && (i1 < (i2 **= 3))) {
    console.log(true)
} else {
    console.log(false)
}

let j: number = 1521;

if ((j % 3 == 0) && (j % 5 == 0)) {
    console.log(true)
} else {
    console.log(false)
}