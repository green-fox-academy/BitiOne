'use strict';

import { Person } from "./01-person";

export class Sponsor extends Person {
  protected _company: string;
  protected _hiredStudents: number;

  constructor(name?: string, age?: number, gender?: string, company?: string) {
    super(name, age, gender);
    this._company = company ?? 'Google';
    this._hiredStudents = 0;
  }

  public introduce(): string {
    return `Hi, I'm ${super._name}, a ${super._age} year old ${super._gender} who represents ${this._company} and hired ${this._hiredStudents} students so far.`;
  }

  public hire(): void {
    this._hiredStudents += 1;
  }

  public getGoal(): string {
    return `My goal is: Hire brilliant junior software developers.`;
  }
}