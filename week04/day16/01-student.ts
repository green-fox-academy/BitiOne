'use strict';

import { Person } from "./01-person";

export class Student extends Person {
  protected _previousOrganization: string;
  protected _skippedDays: number;

  constructor(name?: string, age?: number, gender?: string, previousOrganization?: string) {
    super(name, age, gender);
    this._previousOrganization = previousOrganization ?? 'The School of Life';
    this._skippedDays = 0;
  }

  public getGoal() {
    console.log(`My goal is: Be a junior software developer.`);
  }

  public introduce() {
    console.log(`Hi, I'm ${this._name}, a ${this._age} year old ${this._gender} from ${this._previousOrganization} who skipped ${this._skippedDays} days from the course already.`);
  }

  skipDays(numberOfDays) {
    this._skippedDays += numberOfDays;
  }
}