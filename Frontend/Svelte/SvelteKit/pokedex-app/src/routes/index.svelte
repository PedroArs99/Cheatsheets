<script>
	import { fetchPokemon, pokemonStore } from '../stores/pokestore';

	// Init Store Data
	fetchPokemon();
</script>

<!-- HTML Section -->
<svelte:head>
	<title>Svelte Kit Pokedex</title>
</svelte:head>

<h1>SvelteKit Pokedex</h1>

{#each $pokemonStore as pokemon }
	<h2>{pokemon.name}</h2>
{/each}

<!-- CSS Section-->
<style>
	h1 {
		color: red;
	}
</style>
