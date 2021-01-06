'use strict';

const container = ['apple', 'banana', 'cat', 'dog'];

const listElements = document.querySelectorAll('li');

for(let i = 0; i < container.length; i++) {
  listElements[i].textContent = container[i];
}

const ulElement = document.querySelector('ul');

ulElement.setAttribute('style', 'background-color: limegreen;');