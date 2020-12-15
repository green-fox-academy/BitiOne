'use strict';

// Write a program that stores 3 sides of a cuboid as variables (floats)
// The program should write the surface area and volume of the cuboid like:
//
// Surface Area: 600
// Volume: 1000

let a: number = 10;
let b: number = 50;
let c: number = 80;

console.log(`The cuboid surface area is: ${2 * ((a * b) + (b * c) + (b * c))}.`);
console.log(`The cuboid volume is: ${a * b * c}.`)