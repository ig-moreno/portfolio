import { error } from '@sveltejs/kit';
import { services } from '$lib/services/services';
import type { PageLoad } from './$types';

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
