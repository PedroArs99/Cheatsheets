<script lang="ts">
	import { onMount } from 'svelte';

	onMount(() => {
		const navbarBurger = document.querySelector('.navbar-burger');
		
    navbarBurger?.addEventListener('click', () => {
      navbarBurger.classList.toggle('is-active');
      
      const target = navbarBurger.getAttribute('data-target');
      const targetElement = document.getElementById(target!);

      targetElement?.classList.toggle('is-active');
    })
	});
</script>

<nav class="navbar" aria-label="main navigation">
	<div class="navbar-brand">
		<a class="navbar-item" href="/">
			<img src="/pokeapi_256.png" alt="PokeApi Logo" />
		</a>

		<button
			class="navbar-burger"
			aria-label="menu"
			aria-expanded="false"
			data-target="navbarBasicExample"
		>
			<span class="is-active" aria-hidden="true" />
			<span class="is-active" aria-hidden="true" />
			<span class="is-active" aria-hidden="true" />
		</button>
	</div>

	<div id="navbarBasicExample" class="navbar-menu">
		<div class="navbar-start">
			<a href="/" class="navbar-item"> Home </a>

			<a href="/about" class="navbar-item"> About </a>
		</div>
	</div>
</nav>
