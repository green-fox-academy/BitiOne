'use strict';

import { Plant } from "./02-plant";

export class Flower extends Plant {
  constructor(color: string) {
    super(color);
    this._plantType = 'Flower';
    this._criticalWaterLevel = 5;
    this._waterAdsorbationRate = 0.75;
  }
}