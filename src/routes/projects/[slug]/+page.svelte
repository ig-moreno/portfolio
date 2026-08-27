<script lang="ts">
	let { data } = $props();
</script>

<svelte:head>
	<title>Project: {data.slug}</title>
</svelte:head>

<main>
	<h1>Project Detail</h1>
	<p>Viewing project with slug: {data.slug}</p>
</main>
