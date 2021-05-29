<script context="module">

	import { page } from '$app/stores';
	import { dev } from '$app/env';
	export const hydrate = dev;
	export const prerender = true;

	export async function load({ page, fetch, session, context }) {
		const url = `/manual.json`;
		const res = await fetch(url);
		console.log( page );
		if (res.ok) {
			return {
				props: {
					slug: page.params.slug,
					key: page.path,
					posts: await res.json()
				}
			};
		}
	}

</script>

<script>
	import PageTransition from "$lib/Components/PageTransition.svelte";
	export let key;
	export let slug;
	export let posts;
</script>

<svelte:head>
	<style>
		#svelte {
			height: unset;
			min-height: 100vh;
		}
	</style>
</svelte:head>

<main>

	<aside>
		<div class="sidebar green text-white">
			<nav>
			{#each posts as post}
				<a aria-current="{$page.path === post.path ? 'page' : ''}" sveltekit:prefetch href={post.path}>{post.title}</a>
			{/each}
			</nav>
		</div>
	</aside>

	<div class="wrapper">
		<PageTransition refresh={key}>
			<article>
				<slot />
			</article>
			<footer>
				<a href="https://github.com/moritzebeling/wwworkshop/blob/main/content/manual/{slug}.md" target="_blank" rel="nofollow noreferrer external">Edit this page on GitHub</a>
			</footer>
		</PageTransition>
	</div>

</main>

<style lang="scss">

	main {
		display: grid;
		grid-template-columns: 75% 1fr;
		padding: 0.5rem;
		padding-top: 0;
		gap: 0.5rem;
	}
	article {
		background-color: $white;
		color: $black;
		padding: 3rem;
		@include boxRadius;
	}
	footer {
		margin: 1rem 0.5rem;
		color: $midgrey;
	}
	aside {
		order: 2;
		.sidebar {
			padding: 1.5rem;
			@include boxRadius;
			font-weight: 700;
			position: sticky;
			top: var(--header-height);
		}
		h3 {
			@include border;
		}
	}
	nav a {
		display: block;
		+ a {
			margin-top: 0.5rem;
		}
		&[aria-current=page]{
			color: $yellow;
			&:before {
				content: '';
				display: inline-block;
				width: 0.7em;
				height: 0.7em;
				margin-right: 0.3em;
				border-radius: 100%;
				background-color: currentColor;
			}
		}
	}


</style>
