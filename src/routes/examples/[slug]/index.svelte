<script context="module">

	export const hydrate = true;
	export const prerender = true;

	export async function load({ page, fetch, session, context }) {
		const url = `/examples/${page.params.slug}.json`;
		const res = await fetch(url);
		if (res.ok) {
			return {
				props: {
					slug: page.params.slug,
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
	export let slug;
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
			<a class="code-link" sveltekit:prefetch href="/examples/{slug}/pen.html">index.html</a>
		</section>
		{#if page.css}
		<section class="editor">
			<pre class="dark">
				{@html page.css}
			</pre>
			<a class="code-link" sveltekit:prefetch href="/examples/{slug}/index.css">index.css</a>
		</section>
		{/if}
		{#if page.codepen}
			<a class="codepen" href="{page.codepen}" target="_blank">Play with it on CodePen</a>
		{/if}
	</aside>
	<div class="preview">
		<iframe src="{page.iframe}" title="{page.title}"></iframe>
	</div>
</main>

<a class="code-link" sveltekit:prefetch href="/examples/{slug}/embed">Embed link</a>

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

	.codepen {
		color: $midgrey;
		@include transition( color );
		margin: 0.5rem;
		&:hover {
			color: white;
		}
	}

	.code-link {
		display: none;
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
