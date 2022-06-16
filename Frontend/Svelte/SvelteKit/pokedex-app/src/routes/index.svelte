<script>
	import { fetchPokemon, pokemonStore } from '../stores/pokestore';
	import PokemonCard from '../components/pokemon/pokemonCard.svelte';

	// Init Store Data
	fetchPokemon();
</script>

<!-- HTML Section -->
<svelte:head>
	<title>Svelte Kit Pokedex</title>
</svelte:head>

<div class="level">
	<h1 class="level-item is-size-2 my-3">SvelteKit Pokedex</h1>
</div>
<div class="pokemon-list">
	{#each $pokemonStore as pokemon}
		<PokemonCard {pokemon}/>
	{/each}
</div>
 
<!-- CSS Section-->
<style>
	.pokemon-list {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-around;

		gap: 0.75em;
	}
</style>
