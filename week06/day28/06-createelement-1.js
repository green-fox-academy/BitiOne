'use strict';

const ulAsteroids = document.querySelector('ul');

const thirdAsteroid = document.createElement('li');
thirdAsteroid.textContent = 'The Green Fox';
ulAsteroids.appendChild(thirdAsteroid);

const fourthAsteroid = document.createElement('li');
fourthAsteroid.textContent = 'The Lamplighter';
ulAsteroids.appendChild(fourthAsteroid);

const containerClass = document.querySelector('.container')
const heading01 = document.createElement('h1');
heading01.textContent = 'I can add elements to the DOM!';
containerClass.appendChild(heading01);

const addedImage = document.createElement('img');
