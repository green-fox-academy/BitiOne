'use strict';

export class Apple {
    protected _apple: string = '';

    public getApple(): string {
        return this._apple = 'apple';
    }
}

let apple01 = new Apple();
console.log(apple01);
apple01.getApple();
console.log(apple01);