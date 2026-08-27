<script lang="ts">
	import { locale } from '$lib/stores/locale';
	import { localize } from '$lib/services';
	import { formatDateRange } from '$lib';

	let { data } = $props();

	let project = $derived(data.resolvedProject.project);
</script>

<svelte:head>
	<title>{localize(project.title, $locale, data.defaultLocale)}</title>
</svelte:head>

<main>
	<h1>{localize(project.title, $locale, data.defaultLocale)}</h1>

	<p class="date">
		{formatDateRange(project.startDate, project.endDate, $locale)}
	</p>

	<div class="description">
		{localize(project.description, $locale, data.defaultLocale)}
	</div>
</main>

<style>
	.date {
		font-style: italic;
		color: #666;
		margin-bottom: 1.5rem;
	}
	
	.description {
		line-height: 1.6;
	}
</style>
