import { error } from '@sveltejs/kit';
import { services } from '$lib/services/services';
import type { PageLoad, EntryGenerator } from './$types';

export const load: PageLoad = async ({ params }) => {
	const resolvedPost = services.posts.getResolvedBySlug(params.slug);

	if (!resolvedPost) {
		error(404, 'Entrada no encontrada');
	}

	const portfolio = services.portfolio.getPortfolio();

	return {
		resolvedPost,
		defaultLocale: portfolio.defaultLocale
	};
};

export const entries: EntryGenerator = () => {
	return services.posts.getPublished().map((post) => ({
		slug: post.slug
	}));
};
