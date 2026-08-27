import { type Portfolio, MediaType } from '$lib/domain';
import { SkillCategory } from '$lib/domain/skill';
import { ProjectStatus } from '$lib/domain/project';
import { PostStatus } from '$lib/domain/post';
import { ApplicationServices } from './application-services';

export const createMockPortfolio = (): Portfolio => {
	return {
		schemaVersion: 1,
		defaultLocale: 'es',
		supportedLocales: ['es', 'en'],
		profile: {
			name: 'Test User',
			headline: { es: 'Desarrollador de pruebas', en: 'Test Developer' },
			summary: { es: 'Resumen de prueba', en: 'Test summary' },
			links: [],
			avatar: { type: MediaType.IMAGE, src: '/avatar.png', alt: 'Avatar' },
			location: 'Madrid',
			email: 'test@example.com'
		},
		skills: [
			{
				uuid: 'skill-1',
				slug: 'typescript',
				name: 'TypeScript',
				color: '#007acc',
				category: SkillCategory.LANGUAGE
			}
		],
		tags: [
			{
				uuid: 'tag-1',
				name: { es: 'Prueba', en: 'Test' }
			}
		],
		experience: [],
		education: [],
		projects: [
			{
				uuid: 'proj-1',
				slug: 'test-project',
				title: { es: 'Proyecto de prueba', en: 'Test project' },
				shortDescription: { es: 'Descripción corta', en: 'Short description' },
				description: { es: 'Descripción larga', en: 'Long description' },
				projectStatus: ProjectStatus.COMPLETED,
				startDate: '2026-01-01',
				skills: ['skill-1'],
				tags: ['tag-1'],
				media: [],
				links: []
			}
		],
		posts: [
			{
				uuid: 'post-1',
				slug: 'test-post',
				title: { es: 'Post de prueba', en: 'Test post' },
				excerpt: { es: 'Extracto de prueba', en: 'Test excerpt' },
				content: { es: 'Contenido de prueba', en: 'Test content' },
				status: PostStatus.PUBLISHED,
				publishedAt: '2026-08-27',
				updatedAt: '2026-08-27',
				tags: ['tag-1'],
				relatedProjects: ['proj-1'],
				media: []
			}
		]
	};
};

export class TestService extends ApplicationServices {
	constructor(mockPortfolio: Portfolio = createMockPortfolio()) {
		super(mockPortfolio);
	}
}
