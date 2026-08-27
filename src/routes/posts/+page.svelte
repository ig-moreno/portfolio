<script lang="ts">
	import { locale } from '$lib/stores/locale';
	import { localize } from '$lib/services';
	import { formatDate } from '$lib';
	import type { Locale } from '$lib/config/i18n';
	import { resolve } from '$app/paths';

	let { data } = $props();

	const pageTitles: Record<Locale, string> = {
		es: 'Entradas de Blog',
		en: 'Blog Posts'
	};

	const noPostsMsg: Record<Locale, string> = {
		es: 'No hay entradas disponibles.',
		en: 'No posts available.'
	};

	const readMoreText: Record<Locale, string> = {
		es: 'Leer más',
		en: 'Read more'
	};
</script>

<svelte:head>
	<title>{pageTitles[$locale]}</title>
</svelte:head>

<section>
	<h1>{pageTitles[$locale]}</h1>

	{#if data.posts.length === 0}
		<p>{noPostsMsg[$locale]}</p>
	{:else}
		<div class="posts-list">
			{#each data.posts as resolvedPost (resolvedPost.post.uuid)}
				{@const post = resolvedPost.post}
				<article class="post-item">
					<h2>
						<a href={resolve('/posts/[slug]', { slug: post.slug })}>
							{localize(post.title, $locale, data.defaultLocale)}
						</a>
					</h2>
					
					{#if post.publishedAt}
						<span class="date">
							{formatDate(post.publishedAt, $locale)}
						</span>
					{/if}

					<p class="excerpt">
						{localize(post.excerpt, $locale, data.defaultLocale)}
					</p>

					<a href={resolve('/posts/[slug]', { slug: post.slug })} class="read-more">
						{readMoreText[$locale]} &rarr;
					</a>
				</article>
			{/each}
		</div>
	{/if}
</section>

<style>
	.posts-list {
		display: flex;
		flex-direction: column;
		gap: 2rem;
		margin-top: 1.5rem;
	}

	.post-item {
		padding-bottom: 1.5rem;
		border-bottom: 1px solid #eee;
	}

	.post-item h2 {
		margin: 0 0 0.5rem 0;
	}

	.post-item h2 a {
		text-decoration: none;
		color: #111;
	}

	.post-item h2 a:hover {
		text-decoration: underline;
		color: #0066cc;
	}

	.date {
		font-size: 0.875rem;
		color: #666;
		display: block;
		margin-bottom: 0.5rem;
	}

	.excerpt {
		margin: 0 0 1rem 0;
		color: #333;
		line-height: 1.5;
	}

	.read-more {
		font-weight: bold;
		text-decoration: none;
		color: #0066cc;
	}

	.read-more:hover {
		text-decoration: underline;
	}
</style>
