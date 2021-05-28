<script>
	import Header from '$lib/Header/index.svelte';
	import '../scss/global.scss';
</script>

<svelte:head>
	<link rel="preconnect" href="https://fonts.gstatic.com">
	<link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;600&family=Space+Mono:wght@400;600&display=swap" rel="stylesheet">
</svelte:head>

<Header />

<slot />

<style lang="scss">
</style>
