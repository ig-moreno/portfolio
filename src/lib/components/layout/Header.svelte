<script lang="ts">
	import { locale } from '$lib/stores/locale';
	import type { Locale } from '$lib/config/i18n';
	import { resolve } from '$app/paths';

	const t: Record<
		Locale,
		{ home: string; projects: string; posts: string; cv: string; contact: string }
	> = {
		es: {
			home: 'Inicio',
			projects: 'Proyectos',
			posts: 'Posts',
			cv: 'CV',
			contact: 'Contacto'
		},
		en: {
			home: 'Home',
			projects: 'Projects',
			posts: 'Posts',
			cv: 'CV',
			contact: 'Contact'
		}
	};
</script>

<header class="pt-4">
	<div
		class="
			mx-auto flex items-center
			rounded-full border border-white/10
			bg-[var(--color-surface)] py-3 px-3
		"
	>
		<a
			href={resolve('/')}
			class="
				flex h-11 w-11 shrink-0 items-center justify-center
				rounded-full border border-white/10
				bg-white/[0.03]
				text-sm font-semibold text-white
			"
		>
			IG
		</a>

		<nav class="mx-auto flex items-center gap-10">
			<a
				href={resolve('/')}
				class="text-sm font-medium text-[var(--color-text-secondary)] hover:text-white"
			>
				{t[$locale].home}
			</a>

			<a
				href={resolve('/projects')}
				class="text-sm font-medium text-[var(--color-text-secondary)] hover:text-white"
			>
				{t[$locale].projects}
			</a>

			<a
				href={resolve('/posts')}
				class="text-sm font-medium text-[var(--color-text-secondary)] hover:text-white"
			>
				{t[$locale].posts}
			</a>

			<a
				href={resolve('/cv')}
				class="text-sm font-medium text-[var(--color-text-secondary)] hover:text-white"
			>
				{t[$locale].cv}
			</a>
		</nav>

		<a
			href="#contact"
			class="
				shrink-0 rounded-full
				bg-white px-6 py-3
				text-sm font-semibold text-black
				transition
				hover:bg-zinc-200
			"
		>
			{t[$locale].contact}
		</a>
	</div>
</header>