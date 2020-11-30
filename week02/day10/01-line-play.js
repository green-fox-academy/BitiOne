'use strict';

const canvas = document.querySelector('.main-canvas');
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

for (let i = 1; i <= 14; i++) {
    ctx.strokeStyle = 'fuchsia';
    ctx.beginPath();
    ctx.moveTo(10 + (i * 25), 0);
    ctx.lineTo(400, 10 + (0 +  (i * 25)));
    ctx.stroke();
};

for (let i = 1; i <= 14; i++) {
    ctx.strokeStyle = 'lime';
    ctx.beginPath();
    ctx.moveTo(0, 10 + (i * 25));
    ctx.lineTo(10 + (0 +  (i * 25)), 400);
    ctx.stroke();
};
