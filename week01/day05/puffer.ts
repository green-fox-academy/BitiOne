'use strict';

let lineCount: number = 5;
let star: string = '';
let space: string = '-';

for (let i: number = lineCount; i > 0; i--) {
  console.log('*');
}
/*for (let i: number = 0; i < lineCount; i++) {
    console.log(star);
    for (let j: number = 0; j < lineCount; j++) {

    }
    //for (let i: number = 0; i < lineCount; i++) {
        for (let j: number = lineCount--; j > 0; j--) {
          space = j * space;
          console.log(space);
        }
    }
//}

/*
'use strict';

let lineCount: number = 9;

for (let i: number = 0, pen: string = '', space: string = '', k: number = 0; i < lineCount * 2; i++) {
  for (let j: number = 0; j < lineCount - k; j++) {
    space += ' ';
  }
  for (let l: number = 0; l < i; l++) {
    pen += '*';
  }
  if (i % 2 === 1) {
    console.log(space, pen);
    k += 1;
  }
  space = '';
  pen = '';
}
*/