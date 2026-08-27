import { services } from '$lib/services/services';
import type { PageLoad } from './$types';

export const load: PageLoad = async () => {
	const posts = services.posts
		.getPublishedSortedByDate()
		.map(post => services.posts.resolve(post));

	const portfolio = services.portfolio.getPortfolio();

	return {
		posts,
		defaultLocale: portfolio.defaultLocale
	};
};
