'use strict';

import { Student } from "./01-student";

export class Cohort {
  protected _name: string;
  protected _students: string[] = [];
  protected _mentors: string[] = [];

  constructor(name: string) {
    this._name = name;
  }

  public addStudent(Student: Student[]): void {
    this._students.push(Student);
  }
}