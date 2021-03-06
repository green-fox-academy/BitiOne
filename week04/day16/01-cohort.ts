'use strict';

import { Mentor } from "./01-mentor";
import { Student } from "./01-student";

export class Cohort {
  protected _name: string;
  protected _students: Student[];
  protected _mentors: Mentor[];

  constructor(name: string) {
    this._name = name;
    this._students = [];
    this._mentors = [];
  }

  public addStudent(student: Student) {
    this._students.push(student);
  }

  public addMentor(mentor: Mentor) {
    this._mentors.push(mentor);
  }

  public info() {
    console.log(`The ${this._name} cohort has ${this._students.length} students and ${this._mentors.length} mentors.`);
  }
}