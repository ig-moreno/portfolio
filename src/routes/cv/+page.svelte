<script lang="ts">
	let { data } = $props();
</script>

<svelte:head>
	<title>{data.title}</title>
</svelte:head>

<main>
	<h1>{data.title}</h1>
	<p>Here will be displayed the Curriculum Vitae.</p>
</main>
