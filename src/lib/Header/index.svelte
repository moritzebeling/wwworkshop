<script>
	import { page } from '$app/stores';

	let pages = [
		['/','Home'],
		['/workshop','Workshop'],
		['/archive','Archive'],
	];

</script>

<header>
	<nav>
	{#each pages as [path, title]}
		<a class="button" aria-current="{$page.path === path ? 'page' : ''}" sveltekit:prefetch href={path}>{title}</a>
	{/each}
	</nav>
</header>

<style>

	header {
		background-color: var(--color-black);
		padding: 0.3em;
	}

	a {
		margin: 0.3rem;
		color: var(--color-white);
	}

</style>
