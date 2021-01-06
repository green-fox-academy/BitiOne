'use strict';

const foxImage = document.querySelector('img');

console.log(foxImage.getAttribute('src'));

foxImage.setAttribute('src', 'https://www.dogalize.com/wp-content/uploads/2017/05/big-cats-2062772_640.jpg');

const link = document.querySelector('a');

link.setAttribute('href', 'https://www.greenfoxacademy.com/');

const secondButton = document.querySelector('.this-one');

secondButton.remove();

const firstButton = document.querySelector('button');

firstButton.textContent = `Don't click me!`;