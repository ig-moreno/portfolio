<script lang="ts">
	import type { ResolvedProject } from '$lib/services';

	import ProjectCard from '../common/ProjectCard.svelte';

	interface Props {
		projects: ResolvedProject[];
		locale: string;
		defaultLocale: string;
	}

	let {
		projects,
		locale,
		defaultLocale
	}: Props = $props();
</script>

<section>
	{#if projects.length === 0}
		<p>No hay proyectos disponibles.</p>
	{:else}
		{#each projects as project (project.project.uuid)}
			<ProjectCard
				data={project}
				{locale}
				{defaultLocale}
			/>
		{/each}
	{/if}
</section>