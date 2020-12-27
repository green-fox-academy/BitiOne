'use strict';

import { Thing } from './07-thing';
import { Fleet } from './07-fleet';
import { uptime } from 'process';

let fleet = new Fleet();

// -  You have the `Thing` class
// -  You have the `Fleet` class
// -  Download those, use those
// -  Achieve this output:
//  Crete a fleet of things to have this output:

// 1. [ ] Get milk
// 2. [ ] Remove the obstacles
// 3. [x] Stand up
// 4. [x] Eat lunch

let thing01 = new Thing('Get milk');
let thing02 = new Thing('Remove the obstacles');
let thing03 = new Thing('Stand up');
let thing04 = new Thing('Eat lunch');

fleet.add(thing01);
fleet.add(thing02);
fleet.add(thing03);
fleet.add(thing04);

thing03.complete();
thing04.complete();

console.log(fleet.toString());