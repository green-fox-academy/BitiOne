'use strict';

const classElements = document.getElementsByTagName('p');

if(classElements[3].getAttribute('class') == 'dolphin') {
  classElements[0].textContent = 'pear';
}

if(classElements[0].getAttribute('class') == 'apple') {
  classElements[2].textContent = 'dog';
}

classElements[0].setAttribute('class', 'red');

classElements[1].setAttribute('class', 'pear');