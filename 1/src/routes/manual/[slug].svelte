<script context="module">

	import { dev } from '$app/env';
	export const hydrate = dev;

	export async function load({ page, fetch, session, context }) {
		const slug = page.params.slug || 'index';
		const url = `/manual/${slug}.json`;
		const res = await fetch(url);
		if (res.ok) {
			return {
				props: {
					page: await res.json()
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
	export let page;
</script>

<svelte:head>
	<title>{page.title}</title>
</svelte:head>

<section class="markdown">
	{@html page.content}
</section>

<style lang="scss">

</style>
