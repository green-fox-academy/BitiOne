'use strict';

const background = document.querySelector('.img-inspector');
const navElement = document.querySelector('nav');

navElement.addEventListener('click', (event) => {
  if(event.target.getAttribute('data-action') === 'move') {
    if(event.target.getAttribute('data-direction') === 'up') {
      background.style.backgroundPosition = '0px -10px';
    } else if(event.target.getAttribute('data-direction') === 'down') {
      background.style.backgroundPosition = '0px +10px';
    } else if(event.target.getAttribute('data-direction') === 'left') {
      background.style.backgroundPosition = '-10px 0px';
    } else if(event.target.getAttribute('data-direction') === 'right') {
      background.style.backgroundPosition = '+10px 0px';
    }
  } else if(event.target.getAttribute('data-action') === 'zoom') {
    if(event.target.getAttribute('data-direction') === 'in') {
      background.style.backgroundSize = '100%';
    } else if(event.target.getAttribute('data-direction') === 'out') {
      background.style.backgroundSize = '80%';
    }
  }
});