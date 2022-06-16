<script lang="ts">
	import type { Pokemon } from 'src/models/pokemon';

	export let pokemon: Pokemon;
</script>

<div class="card">
	<div class="card-image has-text-centered">
		<figure class="image is-128x128 is-inline-block">
			<!-- svelte-ignore a11y-img-redundant-alt -->
			<img src={pokemon.image} alt="Pokemon image" width="96" height="96" />
		</figure>
	</div>
	<div class="card-content">
		<div class="content">
			<a href={`/pokemon/${pokemon.id}`} class="button is-ghost is-large is-fullwidth">{pokemon.id} - {pokemon.name}</a>
		</div>
	</div>
</div>

<style>
	.card {
		width: 250px;
	}
</style>
