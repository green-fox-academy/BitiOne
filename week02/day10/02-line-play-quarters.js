'use strict';

const canvas = document.querySelector('.main-canvas');
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

let x = 16;
let y = 400/ Math.sqrt(x);
let lineStartingPointX = 1;
let lineStartingPointY = 1;
let lineEndingPointX = 198;
let lineEndingPointY = 1;

for (let i = 0; i < 10; i++) {
    ctx.strokeStyle = 'fuchsia';
    ctx.beginPath();
    ctx.moveTo(y / 10 * i, 0);
    ctx.lineTo(canvas.width / Math.sqrt(x), Math.sqrt(x) * 10 * (i + 1));
    ctx.stroke();
};

for (let i = 1; i <= 14; i++) {
    ctx.strokeStyle = 'lime';
    ctx.beginPath();
    ctx.moveTo(0, 10 + (i * 25));
    ctx.lineTo(10 + (0 +  (i * 25)), 400);
    ctx.stroke();
};

dravLines();