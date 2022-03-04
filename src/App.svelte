<script lang="ts">
	import LoginBox from "./LoginBox.svelte";
	export let api: string;
</script>

<main>
	<LoginBox {api}/>
</main>

<style>
	:global(body) {
		background: rgb(29,0,36);
		background: linear-gradient(90deg, rgba(29,0,36,1) 0%, rgba(121,9,97,1) 35%, rgba(181,0,255,1) 100%); 
        display: flex;
        justify-content: center;
        align-items: center;
	}
</style>