'use strict';

const canvas = document.querySelector('.main-canvas');
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Create a function that draws one square and takes 2 parameters:
// The x and y coordinates of the square's top left corner
// and draws a 50x50 square from that point.
// Draw 3 squares with that function.
// Avoid code duplication.

function drawASquare(x, y) {
    ctx.fillRect(x, y, 50, 50);
}

drawASquare(10, 80);
drawASquare(210, 180);
drawASquare(410, 280);