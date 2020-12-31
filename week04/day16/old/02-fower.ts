'use strict';

import { Plant } from "./02-plant";

export class Flower extends Plant {

  constructor(color: string) {
    super(color);
    super._plantType = 'Flower';
  }
}