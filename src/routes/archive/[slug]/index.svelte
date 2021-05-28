<script context="module">

	import { dev } from '$app/env';
	export const hydrate = dev;
	export const prerender = true;

	export async function load({ page, fetch, session, context }) {
		const url = `${page.params.slug}.json`;
		const res = await fetch(url);
		if (res.ok) {
			return {
				props: {
					page: await res.json(),
					path: page.path
				}
			};
		}
		return {
			status: res.status,
			error: new Error(`Could not load ${url}`)
		};
	}

</script>

<script>
	export let path;
	export let page;
</script>

<svelte:head>
	<title>{page.title}</title>
</svelte:head>

<main>
	<aside>
		<div class="editor">
			<pre>
				{page.html}
			</pre>
		</div>
		<div class="editor">
			<pre>
				{page.css}
			</pre>
		</div>
	</aside>
	<iframe src="{path}/index.html" title="iFrame Title"></iframe>
</main>

<style lang="scss">

	main {
		flex: 1;
		background-color: $black;
		display: grid;
		grid-template-columns: 50% 50%;
		align-items: stretch;
	}

	iframe {
		width: 100%;
	}

	aside {
	}
	.editor {
		@include mono;
		color: $white;
		pre {
			margin: 1rem;
		}
	}

</style>
