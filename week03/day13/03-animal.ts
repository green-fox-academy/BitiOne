'use strict';

export class Animal {
  protected _hunger: number;
  protected _thirst: number;

  constructor() {
    this._hunger = 50;
    this._thirst = 50;
  }

  public eat(): void {
    this._hunger -= 1;
  }

  public drink(): void {
    this._thirst -= 1;
  }

  public play(): void {
    this._hunger += 1;
    this._thirst += 1;
  }
}

let tiger = new Animal();
console.log(tiger);
tiger.eat();
console.log(tiger);
tiger.drink();
console.log(tiger);
tiger.play();
console.log(tiger);
