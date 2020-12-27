'use strict';

export class PostIt {
  protected _backgroundColor: string;
  protected _text: string;
  protected _textColor: string;

  constructor(backgroundColor: string, text: string, textColor: string) {
    this._backgroundColor = backgroundColor;
    this._text = text;
    this._textColor = textColor;
  }
}

let postIt01 = new PostIt('orange', 'blue', 'Idea 1');
let postIt02 = new PostIt('pink', 'black', 'Awsome');
let postIt03 = new PostIt('yellow', 'green', 'Superb!');

console.log(postIt01);
console.log(postIt02);
console.log(postIt03);