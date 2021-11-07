<script context="module">

	export const prerender = true;
	export const ssr = true;

	export async function load() {
		return {
			status: 302,
			redirect: "/examples",
		}
	}

</script>
