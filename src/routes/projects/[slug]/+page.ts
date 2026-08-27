import { error } from '@sveltejs/kit';
import { services } from '$lib/services/services';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ params }) => {
	const resolvedProject = services.projects.getResolvedBySlug(params.slug);

	if (!resolvedProject) {
		error(404, 'Proyecto no encontrado');
	}

	const portfolio = services.portfolio.getPortfolio();

	return {
		resolvedProject,
		defaultLocale: portfolio.defaultLocale
	};
};
