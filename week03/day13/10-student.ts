'use strict';

import { Teacher } from './10-teacher';

export class Student {
  protected _studentName: string;

  constructor(studentName: string) {
    this._studentName = studentName;
  }

  public learn() {
    console.log(`The ${this._studentName} is learning something new.`);
  }

  public question(teacher) {
    teacher.answer();
  }
}