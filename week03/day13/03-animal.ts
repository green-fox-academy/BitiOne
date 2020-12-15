'use strict';

class Animal {
    private _hunger: number;
    private _thirst: number;

    constructor() {
        this._hunger = 50;
        this._thirst = 50;
    }

    public eat(): void {
        this._hunger -= 1;
    }

    public drink(): void {
        this._thirst -= 1;
    }
    
    public play(): void {
        this._hunger -= 1;
        this._thirst -= 1;
    }

    public get hunger(): number {
        return this._hunger;
    }
    
    public get thirst(): number {
        return this._thirst;
    }
}

let tiger = new Animal();
console.log(`Tiger hunger: ${tiger.hunger}, and tiger thirst: ${tiger.thirst}`);
tiger.eat();
console.log(`After eat, tiger hunger: ${tiger.hunger}, and tiger thirst: ${tiger.thirst}`);
tiger.drink();
console.log(`After drink, tiger hunger: ${tiger.hunger}, and tiger thirst: ${tiger.thirst}`);
tiger.play();
console.log(`After play, tiger hunger: ${tiger.hunger}, and tiger thirst: ${tiger.thirst}`);

let lion = new Animal();
console.log(`Lion hunger: ${lion.hunger}, and lion thirst: ${lion.thirst}`);
lion.drink();
console.log(`After drink, lion hunger: ${lion.hunger}, and lion thirst: ${lion.thirst}`);
lion.eat();
console.log(`After eat, lion hunger: ${lion.hunger}, and lion thirst: ${lion.thirst}`);
lion.play();
console.log(`After play, lion hunger: ${lion.hunger}, and lion thirst: ${lion.thirst}`);

let leopard = new Animal();
console.log(`Leopard hunger: ${leopard.hunger}, and leopard thirst: ${leopard.thirst}`);
leopard.play();
console.log(`After play, leopard hunger: ${leopard.hunger}, and leopard thirst: ${leopard.thirst}`);
leopard.drink();
console.log(`After drink, leopard hunger: ${leopard.hunger}, and leopard thirst: ${leopard.thirst}`);
leopard.eat();
console.log(`After eat, leopard hunger: ${leopard.hunger}, and leopard thirst: ${leopard.thirst}`);