'use strict';

import { StringedInstrument } from './stringedInstrument';

export class Violin extends StringedInstrument {

    constructor(name: string, numberOfStrings: number) {
        super(name, numberOfStrings);
    }
}