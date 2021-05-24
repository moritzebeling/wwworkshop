<script context="module">

	import { dev } from '$app/env';
	export const hydrate = dev;
	export const prerender = true;

	export async function load({ page, fetch, session, context }) {
		const url = `/workshop.json`;
		const res = await fetch(url);
		if (res.ok) {
			return {
				props: {
					pages: await res.json()
				}
			};
		}
		/* TODO: this should output something more helpful */
		return {
			status: res.status,
			error: new Error(`Could not load ${url}`)
		};
	}

</script>

<script>
	export let pages;
</script>

<svelte:head>
	<title>Workshop</title>
</svelte:head>

<h1>Welcome</h1>

<style lang="scss">
</style>
