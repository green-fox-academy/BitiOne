'use strict';

import { Student } from './10-student';
import { Teacher } from './10-teacher';

let student01 = new Student('Jo Joco');
let student02 = new Student('Ki Kiki');
let student03 = new Student('Pa Papa');
let student04 = new Student('La Lala');

let teacher01 = new Teacher('Teach Me');

student01.question(teacher01);
student02.question(teacher01);
student03.question(teacher01);
student04.question(teacher01);

teacher01.teach(student01);
teacher01.teach(student02);
teacher01.teach(student03);
teacher01.teach(student04);