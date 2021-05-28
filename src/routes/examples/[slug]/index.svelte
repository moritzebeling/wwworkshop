<script context="module">

	import { dev } from '$app/env';
	export const hydrate = dev;
	export const prerender = true;

	export async function load({ page, fetch, session, context }) {
		const url = `/examples/${page.params.slug}.json`;
		const res = await fetch(url);
		if (res.ok) {
			return {
				props: {
					page: await res.json(),
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
	export let page;
</script>

<svelte:head>
	<title>{page.title}</title>
</svelte:head>

<main>
	<aside>
		{#if page.content}
		<section class="description">
			{@html page.content}
		</section>
		{/if}
		<section class="editor">
			<pre class="dark">
				{@html page.html}
			</pre>
		</section>
		{#if page.css}
		<section class="editor">
			<pre class="dark">
				{@html page.css}
			</pre>
		</section>
		{/if}
	</aside>
	<div class="preview">
		<iframe src="{page.iframe}" title="{page.title}"></iframe>
	</div>
</main>

<style lang="scss">

	main {
		overflow: hidden;
		flex: 1;
		max-height: 100%;
		color: $white;
		display: grid;
		grid-template-columns: 1fr 1fr;
		align-items: stretch;
		padding: 0.5rem;
		padding-top: 0;
		gap: 0.5rem;
	}

	aside {
		max-height: 100%;
		overflow-y: auto;
	}

	iframe {
		width: 100%;
		height: 100%;
		box-sizing: border-box;
		@include boxRadius;
	}

	section {
		@include boxPadding;
		@include boxRadius;
		background-color: $dark;
		+ section {
			margin-top: 0.5rem;
		}
	}

</style>
