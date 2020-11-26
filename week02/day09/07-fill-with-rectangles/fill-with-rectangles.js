'use strict';

const canvas = document.querySelector('.main-canvas');
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Draw four different size and color rectangles.
// Avoid code duplication.

ctx.fillStyle = 'green';
ctx.fillRect(260, 160, 40, 40);

ctx.fillStyle = 'red';
ctx.fillRect(200, 200, 100, 100);

ctx.fillStyle = 'blue';
ctx.fillRect(300, 80, 120, 120);

ctx.fillStyle = 'orange';
ctx.fillRect(300, 200, 80, 80);