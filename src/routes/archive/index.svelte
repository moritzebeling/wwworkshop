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
			<div class="info">
				<h3>{item.title}</h3>
				<a class="button" sveltekit:prefetch href={item.path}>Details</a>
			</div>
			<iframe src="{item.iframe}" title="New sketch"></iframe>
		</section>
	{/each}

</main>

<style lang="scss">
	main {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(400px, auto));
		padding: 0.5rem;
		padding-top: 0;
		gap: 0.5rem;
	}
	section {
		position: relative;
		@include boxRadius;
		overflow: hidden;
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

		.info {
			opacity: 0;
			font-size: 0.8em;
			position: absolute;
			z-index: 10;
			bottom: 0;
			width: 100%;
			display: flex;
			justify-content: space-between;
			align-items: center;
			padding: 0.5rem;
			@include transition( opacity );
		}
		&:hover .info {
			opacity: 1;
		}
		h3 {
			padding: 0.2em 0.7em;
		}
		.button {
			background-color: $black;
			color: $white;
			border-radius: 2em;
		}
	}
</style>
