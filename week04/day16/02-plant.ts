'use strict';

export class Plant {
  protected _color: string;
  protected _waterLevel: number;
  protected _criticalWaterLevel: number;
  protected _waterAdsorbationRate: number;
  protected _plantType: string;

  constructor(color: string) {
    this._color = color;
    this._waterLevel = 0;
  }

  public needWater(): boolean {
    return this._waterLevel < this._criticalWaterLevel;
  }

  public watering(amountOfWater: number): void {
    this._waterLevel += (this._waterAdsorbationRate * amountOfWater);
  }

  public getInformation(): void {
    console.log(`The ${this._color} ${this._plantType} ${this.needWater() === true ? 'need' : 'don\'t need'} water.`);
  }
}