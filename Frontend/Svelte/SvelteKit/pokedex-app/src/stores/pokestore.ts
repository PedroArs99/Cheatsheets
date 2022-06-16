import type { Pokemon } from "src/models/pokemon";
import type { PokemonListResult } from "src/models/pokemonListResult";
import { writable } from "svelte/store";

// Actions
export const fetchPokemon = async () => {
    const url = `https://pokeapi.co/api/v2/pokemon?limit=150`
    const response = await fetch(url);
    const { results } = await response.json() as unknown as PokemonListResult;

    const loadedPokemon = results.map((data, index) => {
        return {
            id: index + 1,
            image: `https://raw.githubusercontent.com/POKEAPI/sprites/master/sprites/pokemon/${index + 1}.png`,
            name: data.name,
        } as Pokemon;
    });

    pokemonStore.set(loadedPokemon);
}

// Stores
export const pokemonStore = writable(new Array<Pokemon>());