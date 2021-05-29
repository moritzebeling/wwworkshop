<script>
    import { fade } from "svelte/transition";
    export let refresh = "";
</script>

{#key refresh}
    <div in:fade={{ duration: 300, delay: 500 }} out:fade={{ duration: 300 }}>
        <slot />
    </div>
{/key}
