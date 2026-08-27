<script lang="ts">
	import ProjectList from '$lib/components/project/ProjectList.svelte';
	import { locale } from '$lib/stores/locale';
	import type { Locale } from '$lib/config/i18n';

	let { data } = $props();

	const pageTitles: Record<Locale, string> = {
		es: 'Proyectos',
		en: 'Projects'
	};
</script>

<svelte:head>
	<title>{pageTitles[$locale]}</title>
	<meta
		name="description"
		content="Mis proyectos"
	/>
</svelte:head>

<section>
	<h1>{pageTitles[$locale]}</h1>

	<ProjectList
		projects={data.projects}
		locale={$locale}
		defaultLocale={data.defaultLocale}
	/>
</section>