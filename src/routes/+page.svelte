<script lang="ts">

	import Hero from '$lib/components/home/Hero.svelte';
	import FeaturedProjects from '$lib/components/home/FeaturedProjects.svelte';
	import ExperiencePreview from '$lib/components/home/ExperiencePreview.svelte';
	import LatestPosts from '$lib/components/home/LatestPosts.svelte';

	import LanguageSelector from '$lib/components/common/LanguageSelector.svelte';
	import { locale } from '$lib/stores/locale';
	import type { Locale } from '$lib/config/i18n';
	import { resolve } from '$app/paths';

		let { data } = $props();

	const t: Record<
		Locale,
		{ title: string; welcome: string; viewProjects: string; viewCV: string }
	> = {
		es: {
			title: 'Portfolio',
			welcome: 'Bienvenido a mi portfolio.',
			viewProjects: 'Ver proyectos',
			viewCV: 'Ver CV'
		},
		en: {
			title: 'Portfolio',
			welcome: 'Welcome to my portfolio.',
			viewProjects: 'View projects',
			viewCV: 'View CV'
		}
	};
</script>

<svelte:head>
	<title>{t[$locale].title}</title>
	<meta
		name="description"
		content="Portfolio personal"
	/>
</svelte:head>



<Hero 
	profile={data.profile} 
	locale={$locale} 
	defaultLocale={data.defaultLocale}
/>

<FeaturedProjects
	projectList={data.featuredProjects}
	columns={4}
	locale={$locale}
	defaultLocale={data.defaultLocale}
/>




<!--
<section>


	<div class="lang-container">
		<LanguageSelector />
	</div>

	<h1 class="text-4xl font-bold text-white">
		{t[$locale].title}
	</h1>

	<p>
		{t[$locale].welcome}
	</p>

	<nav>
		<a href={resolve('/projects')}>{t[$locale].viewProjects}</a>
		<a href={resolve('/cv')}>{t[$locale].viewCV}</a>
	</nav>
</section>

<style>
	.lang-container {
		margin-bottom: 1rem;
	}
</style>
-->