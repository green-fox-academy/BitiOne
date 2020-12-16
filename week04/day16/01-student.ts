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

  public getGoal(): string {
    return `My goal is: Be a junior software developer.`;
  }

  public introduce(): string {
    return `Hi, I'm ${super._name}, a ${super._age} year old ${super._gender} from ${this._previousOrganization} who skipped ${this._skippedDays} days from the course already.`;
  }

  public skipDays(numberOfDays: number) {
    this._skippedDays += numberOfDays;
  }
}