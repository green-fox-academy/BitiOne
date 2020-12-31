'use strict';

import { StringedInstrument } from './stringedInstrument';

export class BassGuitar extends StringedInstrument {

    constructor(name: string, numberOfStrings: number) {
        super(name, numberOfStrings);
    }
}