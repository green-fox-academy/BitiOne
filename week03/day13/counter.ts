'use strict';

export class Counter {
    private _integer: number;
    private _defaultValue: number;

    constructor(integer?: number) {
        if(integer) {
            this._integer = integer;
            this._defaultValue = integer;
        } else {
            this._integer = 0;
            this._defaultValue = 0;
        }
    }

    public add(number?: number) {
        if(number) {
            this._integer += number;
        } else {
            this._integer += 1;
        }
    }

    public /*get*/ get(): number { //a saját tesztem nem fut le a kód alján ha a counter.test.ts-nek megfelel a kód!!!
        return this._integer;
    }

    public reset(): number {
        return this._integer = this._defaultValue;
    }
}


let numberOne = new Counter(10);
console.log(numberOne.get);
numberOne.add(10);
console.log(numberOne.get);
numberOne.reset();
console.log(numberOne.get);