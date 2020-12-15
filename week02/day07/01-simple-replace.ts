'use strict';

let example: string = 'In a dishwasher far far away';
let replace: string = 'dishwasher';
example = example.replace(replace, 'galaxy');

// I would like to replace "dishwasher" with "galaxy" in this example
// Please fix it for me!
// Expected ouput: In a galaxy far far away

export = example;
console.log(example);
