import type { Pokemon } from "./pokemon/pokemon";

export interface PokemonListResult {
    count: number;
    results: Pokemon[];
}