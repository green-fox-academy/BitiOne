'use strict';

export class PostIt {
    _backgroundColor: string;
    _textColor: string;
    _text: string;

    constructor(bacgroundColor: string, textColor: string, text: string) {
    this._backgroundColor = bacgroundColor;
    this._textColor = textColor;
    this._text = text;
    }
}

let postIt01 = new PostIt('orange', 'blue', 'Idea 1');
console.log(postIt01);
let postIt02 = new PostIt('pink', 'black', 'Awesome');
console.log(postIt02);
let postIt03 = new PostIt('yellow', 'green', 'Superb');
console.log(postIt03);