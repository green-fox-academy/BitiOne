'use strict';

export class Counter {
  protected _integerProperty: number;
  protected _initialValue: number;

  constructor(integerProperty?: number) {
    this._integerProperty = integerProperty ?? 0;
    this._initialValue = integerProperty ?? 0;
  }

  public add(addingNumber?: number): void {
    this._integerProperty += addingNumber ?? + 1;
  }

  public get(): number {
    return this._integerProperty
  }

  public reset(): void {
    this._integerProperty = this._initialValue;
  }
}

let counter01 = new Counter(100);
console.log(counter01);
counter01.add(10);
console.log(counter01);
console.log(counter01.get());
counter01.reset();
console.log(counter01);