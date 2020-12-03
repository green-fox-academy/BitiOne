'use strict';

class Station {
    private _gasAmount: number;
    
    constructor() {
        this._gasAmount = 1000;
    }
    
    public get getFuelAmount(): number {
        return this._gasAmount;
    }
    
    public refill(carWantToRefill: Car) {
        this._gasAmount -= carWantToRefill.carCapacity;
        carWantToRefill.gasAmount += carWantToRefill.carCapacity;
    }
}

class Car {
    private _gasAmount: number;
    private _carCapacity: number;

    constructor() {
        this._gasAmount = 0;
        this._carCapacity = 100;
    }

    public get gasAmount(): number {
        return this._gasAmount;
    }

    public set gasAmount(gasAmount: number) {
        this._gasAmount = gasAmount;
    }

    public get carCapacity(): number {
        return this._carCapacity;
    }

}

let stationOne = new Station;
console.log(`StationOne started gas amount: ${stationOne.getFuelAmount}.`);

let carOne = new Car;
console.log(`CarOne started gas amount: ${carOne.gasAmount}.`);
console.log(`CarOne gas capacity: ${carOne.carCapacity}.`);

stationOne.refill(carOne);
console.log(`StationOne gas amount aftrer fill carOne: ${stationOne.getFuelAmount}.`);
console.log(`CarOne gas amount after refill: ${carOne.gasAmount}.`);

let carTwo = new Car;
console.log(`CarTwo started gas amount: ${carTwo.gasAmount}.`);
console.log(`CarTwo gas capacity: ${carTwo.carCapacity}.`);

stationOne.refill(carTwo);
console.log(`StationOne gas amount aftrer fill carTwo: ${stationOne.getFuelAmount}.`);
console.log(`CarTwo gas amount after refill: ${carTwo.gasAmount}.`);