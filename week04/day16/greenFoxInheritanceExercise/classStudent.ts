'use strict';

import { Person } from "./classPerson";

export class Student extends Person {
    protected _previousOrganization: string;
    protected _skippedDays: number;

    constructor(name?: string, age?: number, gender?: string, previousOrganisation?: string, skippedDays?: number) {
        super(name, age, gender);
        this._previousOrganization = previousOrganisation;
        this._skippedDays = skippedDays;
    }
}