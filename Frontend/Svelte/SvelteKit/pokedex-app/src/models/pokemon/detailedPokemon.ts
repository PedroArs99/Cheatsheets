export interface DetailedPokemon {
    base_experience: number;
    game_indices: {
        version: {
            name: string;
        }
    }[];
    height: number;
    id: number;
    name: string;
    sprites: {
        back_default: string;
        front_default: string;
    }
    types: {
        type: {
            name: string;
        }
    }[];
    weight: number;
}