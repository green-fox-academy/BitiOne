'use strict';

import { Person } from "./classPerson";

export class Mentor extends Person {
    protected _level: string;

    constructor(name?: string, age?: number, gender?: string, level?: string) {
        super(name, age, gender);
        this._level = level ?? 'Intermidiate';
    }

    public getGoal(): void {
        console.log(`My goal is: Educate brilliant junior software developers.`);
    }

    public specialIntroduce(): string {
        return `, ${this._level} mentor.`;
    }
}