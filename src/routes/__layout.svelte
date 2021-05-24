<script>
	import Header from '$lib/Header/index.svelte';
	import '../app.css';
</script>

<svelte:head>
	<link rel="preconnect" href="https://fonts.gstatic.com">
	<link href="https://fonts.googleapis.com/css2?family=Space+Grotesk&family=Space+Mono:ital@0;1&display=swap" rel="stylesheet">
</svelte:head>

<Header />

<main>
	<slot />
</main>

<footer>
	<p>© 2021</p>
</footer>

<style>
	footer {
		padding: 1rem;
		background-color: var(--color-black);
		color: var(--color-blue);
	}
</style>
