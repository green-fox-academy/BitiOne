'use strict';

export abstract class Instrument {
    protected _name: string;

    constructor (name: string) {
        this._name = name;
    }

    public play(name: string): void {
        console.log('tadaaaa');
    }
}