<script context="module">

	import { page } from '$app/stores';
	import { dev } from '$app/env';
	export const hydrate = dev;
	export const prerender = true;

	export async function load({ page, fetch, session, context }) {
		const url = `/archive.json`;
		const res = await fetch(url);
		if (res.ok) {
			return {
				props: {
					items: await res.json()
				}
			};
		}
	}

</script>

<script>

	export let items;

</script>

<svelte:head>
	<title>Home</title>
</svelte:head>

<main>

	{#each items as item}
		<section>
			<iframe src="{item}" title="New sketch"></iframe>
		</section>
	{/each}

</main>

<style lang="scss">
	main {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(400px, auto));
	}
	section {
		position: relative;
		&:before {
			content: '';
			display: block;
			padding-top: 100%;
		}
		iframe {
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
		}
	}
</style>
