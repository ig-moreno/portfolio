<script lang="ts">
	import { asset } from '$app/paths';
	import type { Project } from '$lib/domain';
	import { localize, type ResolvedProject } from '$lib/services';
	import ProjectCard from '../common/ProjectCard.svelte';

    interface Props {
		projectList: ResolvedProject[];
        columns: number;
		locale: string;
		defaultLocale: string;
	}

	let {
		projectList,
        columns,
		locale,
		defaultLocale
	}: Props = $props();
</script>

{#if projectList.length === 0}
	<p>No hay proyectos destacados en este momento.</p>
{:else}
    <div class={`grid grid-cols-${columns}`}>
        {#each projectList.slice(0,columns) as resolvedProject (resolvedProject.project.uuid)}
            <ProjectCard
                data={resolvedProject}
                locale={locale}
                defaultLocale={defaultLocale}

            />
            
        {/each}
    </div>
{/if}