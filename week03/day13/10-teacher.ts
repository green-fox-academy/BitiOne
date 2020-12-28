'use strict';

import { Student } from './10-student';

export class Teacher {
  protected _teacherName: string;

  constructor(teacherName: string) {
    this._teacherName = teacherName;
  }

  teach(student) {
    student.learn();
  }

  answer() {
    console.log(`The ${this._teacherName} is answering a question.`)
  }
}