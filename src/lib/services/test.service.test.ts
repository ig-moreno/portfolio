import { describe, it, expect } from 'vitest';
import { TestService } from './test.service';

describe('TestService', () => {
	it('instantiates correctly with mock portfolio data', () => {
		const testService = new TestService();
		const portfolio = testService.portfolio.getPortfolio();

		expect(portfolio).toBeDefined();
		expect(portfolio.profile.name).toBe('Test User');
		expect(portfolio.skills.length).toBe(1);
		expect(portfolio.skills[0].name).toBe('TypeScript');
	});

	it('retrieves and resolves projects correctly', () => {
		const testService = new TestService();
		const projects = testService.projects.getAll();

		expect(projects.length).toBe(1);
		expect(projects[0].slug).toBe('test-project');

		const resolved = testService.projects.resolve(projects[0]);
		expect(resolved.skills.length).toBe(1);
		expect(resolved.skills[0].name).toBe('TypeScript');
		expect(resolved.tags.length).toBe(1);
		expect(resolved.tags[0].name.es).toBe('Prueba');
	});

	it('retrieves and resolves posts correctly', () => {
		const testService = new TestService();
		const posts = testService.posts.getPublished();

		expect(posts.length).toBe(1);
		expect(posts[0].slug).toBe('test-post');

		const resolved = testService.posts.resolve(posts[0]);
		expect(resolved.relatedProjects.length).toBe(1);
		expect(resolved.relatedProjects[0].slug).toBe('test-project');
	});
});
