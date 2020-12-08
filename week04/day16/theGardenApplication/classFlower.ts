'use strict';

import { Plant } from "./classPlant";

export class Flower extends Plant {
    protected _needWater: boolean;

    constructor(color: string, amountOfWater: number, needWater: boolean) {
        super(color, amountOfWater);
        this._needWater = needWater;
    }

    public watering(amountOfWaterWatering: number) {
        this._amountOfWater += (0.75 * amountOfWaterWatering);
    }
}