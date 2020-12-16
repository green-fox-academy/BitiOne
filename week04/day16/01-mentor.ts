'use strict';

import { Person } from "./01-person";

export class Mentor extends Person {
  protected _level: string;

  constructor(name?: string, age?: number, gender?: string, level?: string) {
    super(name, age, gender);
    this._level = level ?? 'Intermidiate';
  }

  public getGoal(): void {
    console.log(`My goal is: Educate brilliant junior software developers.`);
  }

  public introduce(): void {
    console.log(`Hi, I'm ${super._name}, a ${super._age} year old ${super._gender} ${this._level} mentor.`);
  }
}