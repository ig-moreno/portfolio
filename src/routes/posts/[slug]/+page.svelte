<script lang="ts">
	let { data } = $props();
</script>

<svelte:head>
	<title>Post: {data.slug}</title>
</svelte:head>

<main>
	<h1>Post Detail</h1>
	<p>Viewing post with slug: {data.slug}</p>
</main>
