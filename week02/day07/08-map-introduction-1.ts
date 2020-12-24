'use strict';

let map = {};

map['97'] = 'a';
map['98'] = 'b';
map['99'] = 'c';
map['65'] = 'A';
map['66'] = 'B';
map['67'] = 'C';
console.log(map);

console.log(Object.keys(map));

console.log(Object.values(map));

map['68'] = 'D';
console.log(map);

console.log(Object.keys(map).length);

console.log(map[99]);

delete map[97];

console.log(map.hasOwnProperty('100'));

map = {};
console.log(map);