<script>
	import { page } from '$app/stores';

	let pages = [
		['/workshop/1-welcome','Manual'],
		['/archive','Archive'],
	];

</script>

<header>
	<h1><a sveltekit:prefetch href='/archive'>wwworkshop</a></h1>
	<nav>
	{#each pages as [path, title]}
		<a aria-current="{$page.path === path ? 'page' : ''}" sveltekit:prefetch href={path}>{title}</a>
	{/each}
	</nav>
</header>

<style lang="scss">

	header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		position: sticky;
		top: 0;
		z-index: 100;
		padding: 0.5rem 0;
		background-color: var(--background);
		nav {
			display: flex;
		}
	}

	a {
		@include boxPadding;
		display: block;
	}

</style>
