<script lang="ts">
	import ProjectList from '$lib/components/project/ProjectList.svelte';

	let { data } = $props();
</script>

<svelte:head>
	<title>Proyectos</title>
	<meta
		name="description"
		content="Mis proyectos"
	/>
</svelte:head>

<section>
	<h1>Proyectos</h1>

	<ProjectList
		projects={data.projects}
		locale={data.locale}
		defaultLocale={data.defaultLocale}
	/>
</section>