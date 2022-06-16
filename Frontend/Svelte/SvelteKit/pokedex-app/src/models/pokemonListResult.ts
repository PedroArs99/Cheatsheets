import type { Pokemon } from "./pokemon";

export interface PokemonListResult {
    count: number;
    results: Pokemon[];
}