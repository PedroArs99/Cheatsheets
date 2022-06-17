<script lang="ts" context="module">
	import type { LoadEvent } from '@sveltejs/kit';
	import type { DetailedPokemon } from 'src/models/pokemon/detailedPokemon';

	export async function load({ params }: LoadEvent) {
		const id = params.id;
		const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
		const response = await fetch(url);
		const pokemon = (await response.json()) as unknown as DetailedPokemon;

		return { props: { pokemon } };
	}
</script>

<script lang="ts">
	export let pokemon: DetailedPokemon;
</script>

<div class="container">
	<div class="level">
		<h1 class="level-item is-size-2 my-3">{pokemon.id} - {pokemon.name}</h1>
	</div>

	<div class="level is-flex is-flex-wrap-wrap is-justify-content-space-around">
		<figure class="image">
			<img src={pokemon.sprites.front_default} alt="pokemon front" />
		</figure>
		<figure class="image">
			<img src={pokemon.sprites.back_default} alt="pokemon front" />
		</figure>
	</div>

	<hr />

	<div class="level info-container">
		<div class="is-align-self-flex-start">
            <p><strong class="mr-3">Pokedex index:</strong>{pokemon.id}</p>
            <p><strong class="mr-3">Height:</strong>{pokemon.height * 10} cm</p>
			<p><strong class="mr-3">Weight:</strong>{pokemon.weight / 10} kg</p>
            <p><strong class="mr-3">Base_experience:</strong>{pokemon.base_experience}</p>
        </div>
		<div class="is-align-self-flex-start">
			<strong>Types</strong>
			<ul>
				{#each pokemon.types as type}
					<li>{type.type.name}</li>
				{/each}
			</ul>
		</div>
        <div>
			<strong>Appears on</strong>
			<ul>
				{#each pokemon.game_indices as game_index}
					<li>Pokemon {game_index.version.name}</li>
				{/each}
			</ul>
		</div>
	</div>
</div>

<style>
	.image {
		width: 256px;
		height: 256px;

		border: 1px solid black;
		border-radius: 5%;
		margin: 50px;
	}

	.info-container {
		display: flex;
        justify-content: space-between;

        gap: 2rem;
        padding: 0.75rem;
	}
</style>
