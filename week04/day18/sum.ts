'use strict';

export class Sum {
    protected _sum: number = 0;

    public sum(sum: number[]): number {
        for(let i: number = 0; i < sum.length; i++) {
            this._sum += sum[i];
        }
        return this._sum;
    }
}

/*
let sum01 = new Sum();
console.log(sum01);
sum01.sum([1, 2, 3, 4, 5]);
console.log(sum01);
*/