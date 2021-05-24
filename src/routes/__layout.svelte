<script>
	import Header from '$lib/Header/index.svelte';
	import '../scss/global.scss';
</script>

<svelte:head>
	<link rel="preconnect" href="https://fonts.gstatic.com">
	<link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;600&family=Space+Mono:wght@400;700&display=swap" rel="stylesheet">
</svelte:head>

<Header />

<main>
	<slot />
</main>

<footer class="violet text-yellow">
	<p>© 2021</p>
</footer>

<style lang="scss">
	footer {
		padding: 1rem;
	}
</style>
