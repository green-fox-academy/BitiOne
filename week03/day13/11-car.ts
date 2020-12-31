'use strict';

export class Car {
  protected _gassAmount: number;
  protected _capacity: number;

  constructor(gassAmount: number, capacity: number) {
    this._gassAmount = gassAmount;
    this._capacity = capacity;
  }

  public get getCapacity(): number {
    return this._capacity;
  }
}