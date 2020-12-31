'use strict';

import { Plant } from "./02-plant";
import { Flower } from "./02-flower";
import { Tree } from "./02-tree";
import { Garden } from "./02-garden";

let flower01 = new Flower('yellow');
let flower02 = new Flower('blue');
let tree01 = new Tree('purple');
let tree02 = new Tree('orange');

let garden01 = new Garden('Garden of Eden');

garden01.addPlant(flower01);
garden01.addPlant(flower02);
garden01.addPlant(tree01);
garden01.addPlant(tree02);

garden01.getInfoFromAllPlant();
garden01.waterAllThePlants(40);
garden01.getInfoFromAllPlant();
garden01.waterAllThePlants(70);
garden01.getInfoFromAllPlant();