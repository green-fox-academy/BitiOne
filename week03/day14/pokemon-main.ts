'use strict';

import { Pokemon } from './pokemon'

let pokemonOfAsh: Pokemon[] = initializePokemon();

// Every pokemon has a name and a type.
// Certain types are effective against others, e.g. water is effective against fire.

// Ash has a few pokemon.
// A wild pokemon appeared!

let wildPokemon: Pokemon = new Pokemon('Oddish', 'leaf', 'water');

// Which pokemon should Ash use?

function chooseEffective(arrayOfPokemons: Pokemon[], givenPokemon: Pokemon) {
    for (let i: number = 0; i < arrayOfPokemons.length; i++) {
        if (givenPokemon.type === pokemonOfAsh[i].effectiveAgainst) {
            console.log(`I choose you, ${pokemonOfAsh[i].name}`)
        } else {
            console.log(`I don't have the appropriate pokemon! Sorry!`)
        }
    }
}

chooseEffective(pokemonOfAsh, wildPokemon);

// Implement the following `chooseEffective` function which will choose the most effective pokemon for Ash
//console.log(`I choose you!, ${chooseEffective(pokemonOfAsh, wildPokemon)}`);

function initializePokemon(): Pokemon[] {
    return [
        new Pokemon('Balbasaur', 'leaf', 'water'),
        new Pokemon('Pikatchu', 'electric', 'water'),
        new Pokemon('Charizard', 'fire', 'leaf'),
        new Pokemon('Balbasaur', 'water', 'fire'),
        new Pokemon('Kingler', 'water', 'fire')
    ];
}