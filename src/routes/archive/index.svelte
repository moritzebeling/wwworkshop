<script context="module">
	export const prerender = true;
</script>

<script>

	let colors = [
		'blue', 'violet', 'green', 'yellow',
		'blue', 'violet', 'green', 'yellow',
		'blue', 'violet', 'green', 'yellow',
		'blue', 'violet', 'green', 'yellow',
		'blue', 'violet', 'green', 'yellow',
		'blue', 'violet', 'green', 'yellow',
	];

</script>

<svelte:head>
	<title>Home</title>
</svelte:head>

<main>

	{#each colors as color}
		<section class="{color}"></section>
	{/each}

</main>

<style lang="scss">
	main {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(400px, auto));
	}
	section {
		height: 500px;
	}
</style>
