<script lang="ts">
	import { fetchPokemon, pokemonStore } from '../stores/pokestore';
	import PokemonCard from '../components/pokemon/pokemonCard.svelte';
	import { onMount } from 'svelte';
	import type { Pokemon } from 'src/models/pokemon';

	onMount(() => {
		fetchPokemon();
	});

	let searchTerm = '';
	let filteredPokemon = new Array<Pokemon>();

	$: {
		if(searchTerm){
			filteredPokemon = $pokemonStore.filter(pokemon => pokemon.name.includes(searchTerm));
		}else {
			filteredPokemon = $pokemonStore;
		}
	}
</script>

<!-- HTML Section -->
<svelte:head>
	<title>Svelte Kit Pokedex</title>
</svelte:head>

<div class="container">
	<div class="level">
		<h1 class="level-item is-size-2 my-3">SvelteKit Pokedex</h1>
	</div>

	<div class="level">
		<div class="level-item field px-3">
			<div class="control">
				<input class="input" type="text" placeholder="Search" bind:value={searchTerm} />
			</div>
		</div>
	</div>

	<div class="pokemon-list">
		{#each filteredPokemon as pokemon}
			<PokemonCard {pokemon} />
		{/each}
	</div>
</div>

<!-- CSS Section-->
<style>
	.pokemon-list {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-around;

		gap: 0.75em;
	}

	.control {
		width: 100%;
	}
</style>
