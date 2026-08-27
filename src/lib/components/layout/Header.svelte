<script lang="ts">
	import { locale } from '$lib/stores/locale';
	import type { Locale } from '$lib/config/i18n';

	const t: Record<
		Locale,
		{ home: string; projects: string; posts: string; cv: string }
	> = {
		es: {
			home: 'Inicio',
			projects: 'Proyectos',
			posts: 'Posts',
			cv: 'CV'
		},
		en: {
			home: 'Home',
			projects: 'Projects',
			posts: 'Posts',
			cv: 'CV'
		}
	};
</script>

<header>
	<nav>
		<a href="/">{t[$locale].home}</a>
		<a href="/projects">{t[$locale].projects}</a>
		<a href="/posts">{t[$locale].posts}</a>
		<a href="/cv">{t[$locale].cv}</a>
	</nav>
</header>