<script>
	import Header from '$lib/Header/index.svelte';
	import '../scss/global.scss';
	import 'highlight.js/styles/github.css';
</script>

<svelte:head>
	<link rel="preconnect" href="https://fonts.gstatic.com">
	<link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;600&family=Space+Mono:wght@400;600&display=swap" rel="stylesheet">
</svelte:head>

<Header />

<slot />

<footer class="violet">
	<p><a href="https://github.com/moritzebeling/wwworkshop" external target="_blank">GitHub</a></p>
</footer>

<style lang="scss">
	footer {
		display: flex;
	}
	a {
		display: block;
		@include boxPadding;
	}
</style>
