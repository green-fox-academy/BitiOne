'use strict';

const button = document.querySelector('button');
const itemArray = document.querySelectorAll('li');
const result = document.querySelector('.result');
let itemCounter = 0;

const countListItems = () => {
  for(let i = 0; i < itemArray.length; i++) {
    itemCounter ++;
  }
  result.textContent = `There are ${itemCounter} item in the page.`;
  itemCounter = 0;
};

button.addEventListener('click', countListItems);