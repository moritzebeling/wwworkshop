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
					show: {
						html: page.query.get('html') === null,
						css: page.query.get('css') === null,
					},
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
	export let show;
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
		{#if show.html}
		<section class="editor">
			<pre class="dark">
				{@html page.html}
			</pre>
		</section>
		{/if}
		{#if page.css && show.css}
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
	}

	aside {
		max-height: 100%;
		overflow-y: auto;
		padding: 0.5rem;
		padding-right: 0.25rem;
	}

	.preview {
		padding: 0.5rem;
		padding-left: 0.25rem;
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
