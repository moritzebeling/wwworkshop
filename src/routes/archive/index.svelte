<script context="module">
	export const prerender = true;
</script>

<svelte:head>
	<title>Home</title>
</svelte:head>

<main>

	{#each (new Array(16)) as item}
		<section>aaa</section>
	{/each}

</main>

<style>
	main {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(400px, auto));
	}
	section {
		border: 1px solid #000;
	}
</style>
