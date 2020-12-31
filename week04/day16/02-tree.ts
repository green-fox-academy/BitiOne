'use strict';

import { Plant } from "./02-plant";

export class Tree extends Plant {
  constructor(color: string) {
    super(color);
    this._plantType = 'Tree';
    this._criticalWaterLevel = 10;
    this._waterAdsorbationRate = 0.4;
  }
}