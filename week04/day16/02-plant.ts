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

  public waterNeedCheck(): string {
    if(this._needWater === true) {
      return `needs`;
    } else {
      return `dosen't need`;
    }
  }

  public getInformation() {
    console.log(`The ${this._color} ${this._plantType} ${this.waterNeedCheck} water`);
  }
}