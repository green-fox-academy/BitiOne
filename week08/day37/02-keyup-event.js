'use strict';

const header01 = document.querySelector('h1');

window.addEventListener("keyup", event => {
  header01.textContent = `Last pressed key code is: ${event.keyCode}.`;
});