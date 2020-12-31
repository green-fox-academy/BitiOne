'use strict';

import { Plant } from "./02-plant";

export class Garden {
  protected _name: string;
  protected _plantsOfTheGarden: Plant[];

  constructor(name: string) {
    this._name = name;
    this._plantsOfTheGarden = [];
  }

  public addPlant(plant: Plant): void {
    this._plantsOfTheGarden.push(plant);
  }

  public getPlants(): Plant[] {
    return this._plantsOfTheGarden;
  }

  public waterAllThePlants(addedWaterAmount: number): void {
    console.log(`\r\nWatering with ${addedWaterAmount}.`)
    let needWaterPlants: Plant[] = [];
    let waterAmoumtForEachPlant: number;
    for(let i: number = 0; i < this._plantsOfTheGarden.length; i++) {
      if(this._plantsOfTheGarden[i].needWater() === true) {
        needWaterPlants.push(this._plantsOfTheGarden[i]);
      }
    }
    
    waterAmoumtForEachPlant = (addedWaterAmount / needWaterPlants.length);

    for(let j: number; j < needWaterPlants.length; j++) {
      needWaterPlants[j].watering(waterAmoumtForEachPlant);
    }
  }

  public getInfoFromAllPlant(): void {
    for(let i: number = 0; i < this._plantsOfTheGarden.length; i++) {
      this._plantsOfTheGarden[i].getInformation();
    }
  }
}