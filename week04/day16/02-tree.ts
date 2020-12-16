'use strict';

import { Plant } from "./02-plant";

export class Tree extends Plant {

  constructor(color: string) {
    super(color);
    super._plantType = 'Tree';
  }
}