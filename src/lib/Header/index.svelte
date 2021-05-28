<script>
	import { page } from '$app/stores';

	let pages = [
		['/workshop/1-welcome','Workshop'],
		['/archive','Archive'],
	];

</script>

<header class="violet">
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
		nav {
			display: flex;
		}
	}

	h1 {
		@include uppercase;
	}

	a {
		@include boxPadding;
		display: block;
		color: var(--color-white);
	}

</style>
