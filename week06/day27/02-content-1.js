const apple = document.querySelector('.apple');
const balloon = document.querySelector('.balloon');
balloon.append(' ' + apple.textContent);
const cat = document.querySelector('.cat');
cat.append(' ' + balloon.textContent);
const animals = document.querySelector('.animals');
animals.append(' ' + cat.textContent);

console.log(apple);
console.log(balloon);
console.log(cat);
console.log(animals);