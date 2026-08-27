<script lang="ts">
	import LanguageSelector from '$lib/components/common/LanguageSelector.svelte';
	import { locale } from '$lib/stores/locale';
	import type { Locale } from '$lib/config/i18n';

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

<section>
	<div class="lang-container">
		<LanguageSelector />
	</div>

	<h1>{t[$locale].title}</h1>

	<p>
		{t[$locale].welcome}
	</p>

	<nav>
		<a href="/projects">{t[$locale].viewProjects}</a>
		<a href="/cv">{t[$locale].viewCV}</a>
	</nav>
</section>

<style>
	.lang-container {
		margin-bottom: 1rem;
	}
</style>