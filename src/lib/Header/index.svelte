<script>
	import { page } from '$app/stores';

	let pages = [
		['/','Home'],
		['/workshop','Workshop'],
		['/archive','Archive'],
	];

</script>

<header class="green text-yellow">
	<h1><a sveltekit:prefetch href='/'>wwworkshop</a></h1>
	<nav>
	{#each pages as [path, title]}
		<a class="button" aria-current="{$page.path === path ? 'page' : ''}" sveltekit:prefetch href={path}>{title}</a>
	{/each}
	</nav>
</header>

<style lang="scss">

	header {
		padding: 0.3em 1rem;
		display: flex;
		justify-content: space-between;
		align-items: center;
		position: sticky;
		top: 0;
		z-index: 100;
	}

	h1 {
		margin: 0 0.3em;
		text-transform: uppercase;
		letter-spacing: 0.05em;
	}

	a {
		margin: 0.3em;
		color: var(--color-white);
	}

</style>
