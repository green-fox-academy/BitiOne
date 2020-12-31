'use strict';

export abstract class Instrument {
    protected _name: string;

    constructor (name: string) {
        this._name = name;
    }

    public play(): void {
        console.log('tadaaaa');
    }
}