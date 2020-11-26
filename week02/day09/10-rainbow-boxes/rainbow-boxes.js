'use strict';

const canvas = document.querySelector('.main-canvas');
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Create a square drawing function that takes 2 parameters:
// The square size, and the fill color,
// and draws a square of that size and color to the center of the canvas.
// Create a loop that fills the canvas with a rainbow of colored squares.

function drawASquare(x, colour) {
    for (let i = 1; i < 5; i++) {
        ctx.fillStyle = colour;
        ctx.fillRect(0, 0, x/i, i*x);
    }
}

drawASquare(100, 'red');
//drawASquare(40, 'blue');
//drawASquare(60, 'orange');
//drawASquare(80, 'black');
//drawASquare(100, 'brown');