'use strict';

export class Sharpie {
  protected _color: string;
  protected _width: number;
  protected _inkAmount: number;

  constructor(color: string, width: number) {
    this._color = color;
    this._width = width;
    this._inkAmount = 100;
  }

  public use(decreasesInkAmount: number) {
    this._inkAmount -= decreasesInkAmount;
  }
}

let sharpie01 = new Sharpie('orange', 10);
console.log(sharpie01);
sharpie01.use(10);
console.log(sharpie01);