'use strict';

export class Plant {
  protected _color: string;
  protected _plantType: string;
  protected _amountsOfWater: number;
  protected _needWater: boolean;

  constructor(color: string) {
    this._color = color;
    this._amountsOfWater = 0;
    this._needWater = true;
  }
}