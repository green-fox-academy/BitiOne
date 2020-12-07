'use strict';

import { Person } from "./classPerson";

export class Student extends Person {
    protected _previousOrganization: string;
    protected _skippedDays: number;

    constructor(name?: string, age?: number, gender?: string, previousOrganisation?: string) {
        super(name, age, gender);
        this._previousOrganization = previousOrganisation ?? 'The School of Life';
        this._skippedDays = 0;
    }

    public getGoal(): void {
        console.log(`My goal is: Be a junior software developer.`);
    }

    public specialIntroduce(): string {
        return ` from ${this._previousOrganization} who skipped ${this._skippedDays} days from the course already.`;
    }

    public skipDays(numberOfDays: number) {
        this._skippedDays += numberOfDays;
    }
}