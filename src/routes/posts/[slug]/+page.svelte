<script lang="ts">
	import { locale } from '$lib/stores/locale';
	import { localize } from '$lib/services';
	import { formatDate } from '$lib';
	import type { Locale } from '$lib/config/i18n';
	import { resolve } from '$app/paths';

	let { data } = $props();

	let post = $derived(data.resolvedPost.post);

	const backText: Record<Locale, string> = {
		es: 'Volver a las entradas',
		en: 'Back to posts'
	};
</script>

<svelte:head>
	<title>{localize(post.title, $locale, data.defaultLocale)}</title>
</svelte:head>

<main class="post-detail">
	<a href={resolve('/posts')} class="back-link">&larr; {backText[$locale]}</a>

	<h1>{localize(post.title, $locale, data.defaultLocale)}</h1>

	{#if post.publishedAt}
		<p class="date">
			{formatDate(post.publishedAt, $locale)}
		</p>
	{/if}

	<div class="content">
		{localize(post.content, $locale, data.defaultLocale)}
	</div>
</main>

<style>
	.post-detail {
		max-width: 800px;
		margin: 0 auto;
		padding: 1rem 0;
	}

	.back-link {
		display: inline-block;
		margin-bottom: 1.5rem;
		color: #0066cc;
		text-decoration: none;
	}

	.back-link:hover {
		text-decoration: underline;
	}

	h1 {
		margin: 0 0 0.5rem 0;
	}

	.date {
		font-style: italic;
		color: #666;
		margin-bottom: 2rem;
	}

	.content {
		line-height: 1.8;
		font-size: 1.1rem;
		color: #222;
	}
</style>
