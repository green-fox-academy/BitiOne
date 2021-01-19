'use strict';

const button = document.querySelector('button');

const printTimeStampToTheConsol = () => {
  console.log(Date.now());
  button.disabled = true;
};

button.addEventListener('click', printTimeStampToTheConsol);