'use strict';

import { Thing } from './07-thing';
import { Fleet } from './07-fleet';

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

let todo01 = new Thing('Get milk');
let todo02 = new Thing('Remove the obstacles');
let todo03 = new Thing('Stand up');
let todo04 = new Thing('Eat lunch');

fleet.add(todo01);
fleet.add(todo02);
fleet.add(todo03);
fleet.add(todo04);

todo03.complete();
todo04.complete();

console.log(fleet.toString());