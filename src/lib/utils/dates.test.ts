import { describe, it, expect } from 'vitest';
import { formatDate, formatDateRange, formatDatetime } from './dates';

describe('Date Utilities', () => {
	describe('formatDate', () => {
		it('formats date correctly in Spanish', () => {
			const date = '2026-08-27';
			const formatted = formatDate(date, 'es');
			expect(formatted).toContain('27');
			expect(formatted).toContain('agosto');
			expect(formatted).toContain('2026');
		});

		it('formats date correctly in English', () => {
			const date = '2026-08-27';
			const formatted = formatDate(date, 'en');
			expect(formatted).toContain('August');
			expect(formatted).toContain('27');
			expect(formatted).toContain('2026');
		});

		it('returns empty string for invalid dates', () => {
			expect(formatDate(undefined, 'es')).toBe('');
			expect(formatDate('invalid-date', 'es')).toBe('');
		});
	});

	describe('formatDateRange', () => {
		it('formats active range in Spanish', () => {
			const range = formatDateRange('2024-01-01', null, 'es');
			expect(range).toContain('enero');
			expect(range).toContain('2024');
			expect(range).toContain('Presente');
		});

		it('formats active range in English', () => {
			const range = formatDateRange('2024-01-01', null, 'en');
			expect(range).toContain('January');
			expect(range).toContain('2024');
			expect(range).toContain('Present');
		});

		it('formats complete range', () => {
			const range = formatDateRange('2024-01-01', '2024-12-31', 'es');
			expect(range).toContain('enero');
			expect(range).toContain('diciembre');
		});
	});

	describe('formatDatetime', () => {
		it('formats date and time', () => {
			const date = '2026-08-27T20:00:00';
			const formatted = formatDatetime(date, 'es');
			expect(formatted).toContain('27');
			expect(formatted).toContain('2026');
			expect(formatted).toContain('20:00');
		});
	});
});
