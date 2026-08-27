<script lang="ts">
	import { locale } from '$lib/stores/locale';
	import type { Locale } from '$lib/config/i18n';
	import { resolve } from '$app/paths';

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
		<a href={resolve('/')}>{t[$locale].home}</a>
		<a href={resolve('/projects')}>{t[$locale].projects}</a>
		<a href={resolve('/posts')}>{t[$locale].posts}</a>
		<a href={resolve('/cv')}>{t[$locale].cv}</a>
	</nav>
</header>