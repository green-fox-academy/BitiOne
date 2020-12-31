'use strict';

import { Car } from './11-car';

export class Station {
  protected _gassAmount: number;

  constructor(gassAmount: number) {
    this._gassAmount = gassAmount;
  }

  public refill(car: Car) {
    this._gassAmount -= car.getCapacity();
  }
}