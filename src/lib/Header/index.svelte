<script>
	import { page } from '$app/stores';

	let pages = [
		['/','Home'],
		['/workshop','Workshop'],
		['/archive','Archive'],
	];

</script>

<header class="green text-yellow">
	<h1>wwworkshop</h1>
	<nav>
	{#each pages as [path, title]}
		<a class="button" aria-current="{$page.path === path ? 'page' : ''}" sveltekit:prefetch href={path}>{title}</a>
	{/each}
	</nav>
</header>

<style lang="scss">

	header {
		padding: 0.3em;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	h1 {
		margin: 0 1rem;
	}

	a {
		margin: 0.3em 0.6em;
		color: var(--color-white);
	}

</style>
