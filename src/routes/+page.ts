import { services } from '$lib/services/services';
import type { PageLoad } from './$types';

export const load: PageLoad = async () => {
	const profile = services.profile.get();
	const featuredProjects = services.projects.getFeatured().map(project => services.projects.resolve(project));
	const portfolio = services.portfolio.getPortfolio();
	return {
		profile,
		featuredProjects,
		defaultLocale: portfolio.defaultLocale
	};
};
