'use strict';

// -  Create (dynamically*) a two dimensional list
//    with the following matrix**. Use a loop!
//
//    0 0 0 1
//    0 0 1 0
//    0 1 0 0
//    1 0 0 0
//
// -  Print this two dimensional list to the console
//
// * size should depend on a variable
// ** Relax, a matrix is just like an array

let matrix: number[][] = [];
let matrixNumberOfRowAndCol: number = 5;

for (let i: number = 0; i < matrixNumberOfRowAndCol; i++) {
    matrix.push([]);
    for (let j: number = 0; j < matrixNumberOfRowAndCol; j++) {
        matrix[i].push(0);
    }
}

console.table(matrix);