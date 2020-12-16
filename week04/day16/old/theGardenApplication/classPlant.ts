'use strict';

export class Plant {
    protected _color: string;
    protected _amountOfWater: number;

    constructor(color: string, amountOfWater: number) {
        this._color = color;
        this._amountOfWater = amountOfWater;
    }
}