<script context="module">

	import { page } from '$app/stores';
	import { dev } from '$app/env';
	export const hydrate = dev;
	export const prerender = true;

	export async function load({ page, fetch, session, context }) {
		const url = `/workshop.json`;
		const res = await fetch(url);
		if (res.ok) {
			return {
				props: {
					posts: await res.json()
				}
			};
		}
	}

</script>

<script>
	export let posts;
</script>

<div class="wrapper">

	<aside>
		<h3>Table of contents</h3>
		<nav>
		{#each posts as post}
			<a aria-current="{$page.path === post.path ? 'page' : ''}" sveltekit:prefetch href={post.path}>{post.title}</a>
		{/each}
		</nav>
	</aside>

	<article>
		<slot />
	</article>

</div>

<style>

	.wrapper {
		display: grid;
		grid-template-columns: 2fr 1fr;
		gap: 4rem;
		padding: 4rem;
	}
	aside {
		order: 2;
	}
	nav a {
		display: block;
		margin: 0.5rem 0;
	}


</style>
