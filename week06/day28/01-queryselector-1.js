'use strict';

const king = document.querySelector('.asteroid');
console.log(king);

const businessLamp = document.querySelectorAll('.big');

businessLamp.forEach((elem) => {
  console.log(elem);
});

const conceitedKing = document.querySelectorAll('#b325, .asteroid.b326');

conceitedKing.forEach((elem) => {
  alert(elem);
});

const noBusiness = document.querySelectorAll('#b325, .asteroid.b326, .asteroid.b329.big');

noBusiness.forEach((elem) => {
  console.log(elem);
});