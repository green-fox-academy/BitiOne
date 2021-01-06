'use strict';

const classElements = document.getElementsByTagName('p');

if(classElements[3].classList.value == 'dolphin') {
  classElements[0].textContent = 'pear';
}

if(classElements[0].classList.value == 'apple') {
  classElements[2].textContent = 'dog';
}

classElements[0].classList.add('red');

classElements[1].classList.remove('balloon');
classElements[1].classList.add('pear');