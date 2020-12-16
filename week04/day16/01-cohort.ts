'use strict';

import { Student } from "./01-student";
import { Mentor } from "./01-mentor";

export class Cohort {
  protected _name: string;
  protected _students: Student[];
  protected _mentors: Mentor[];

  constructor(name: string) {
    this._name = name;
    this._students = [];
    this._mentors = [];
  }

  public addStudent(student: Student): void {
    this._students.push(student);
  }

  public addMentor(mentor: Mentor): void {
    this._mentors.push(mentor);
  }

  public info(): string {
    return `The ${this._name} cohort has ${this._students.length} students and ${this._mentors.length} mentors.`;
  }
}