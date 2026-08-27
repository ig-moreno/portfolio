import { services } from '$lib/services/services';

export function load() {
	const projects = services.projects
		.getSortedByDate()
		.map(project =>
			services.projects.resolve(project)
		);

	const portfolio = services
		.portfolio
		.getPortfolio();

	return {
		projects,
		locale: portfolio.defaultLocale,
		defaultLocale: portfolio.defaultLocale
	};
}