'use strict';

import { StringedInstrument } from './stringedInstrument';

export class ElectricGuitar extends StringedInstrument {

    constructor(name?: string, numberOfStrings?: number) {
        super(name, numberOfStrings);
        this._numberOfStrings = numberOfStrings ?? 6;
    }
}