'use strict';

let mapOfBooks = {
  '978-1-60309-452-8': 'A Letter to Jo',
  '978-1-60309-459-7': 'Lupus',
  '978-1-60309-444-3': 'Red Panda and Moon Bear',
  '978-1-60309-461-0': 'The Lab'
};

for (let key in mapOfBooks) {
  console.log(`${mapOfBooks[key]} (ISBN: ${key})`);
};

delete mapOfBooks['978-1-60309-444-3'];
console.log(mapOfBooks);

for (let key in mapOfBooks) {
  if(mapOfBooks[key] === 'The Lab') {
    delete mapOfBooks[key];
  }
};
console.log(mapOfBooks);

mapOfBooks['978-1-60309-450-4'] = 'They Called Us Enemy';
mapOfBooks['978-1-60309-453-5'] = 'Why Did We Trust Him?';
console.log(mapOfBooks);

if(mapOfBooks.hasOwnProperty('478-0-61159-424-8') === true) {
  console.log(`Yes, there is 478-0-61159-424-8 key in the object mapOfBooks.`);
} else {
  console.log(`No, there isn't 478-0-61159-424-8 key in the object mapOfBooks.`)
};

console.log(mapOfBooks['978-1-60309-453-5']);