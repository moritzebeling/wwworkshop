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

<main>

	<aside class="blue text-white">
		<div class="sidebar">
			<nav>
			{#each posts as post}
				<a aria-current="{$page.path === post.path ? 'page' : ''}" sveltekit:prefetch href={post.path}>{post.title}</a>
			{/each}
			</nav>
		</div>
	</aside>

	<article>
		<slot />
	</article>

</main>

<style lang="scss">

	main {
		display: grid;
		grid-template-columns: 70% 30%;
	}
	article {
		padding: 3rem;
	}
	aside {
		padding: 1.5rem;
		order: 2;
		font-weight: 700;
		.sidebar {
			position: sticky;
			top: 4.5rem;
		}
		h3 {
			@include border;
		}
	}
	nav a {
		display: block;
		margin: 0.5rem 0;
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
