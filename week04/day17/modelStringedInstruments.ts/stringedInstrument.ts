'use strict';

import { Instrument } from './indtrument';

export abstract class StringedInstrument extends Instrument {
    protected _numberOfStrings: number;

    constructor(name: string, numberOfStrings: number) {
        super(name);
        this._numberOfStrings = numberOfStrings;
    }

    public sound(): void {

    }
}