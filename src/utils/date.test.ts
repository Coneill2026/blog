import { describe, expect, it } from 'vitest';

const formatDate = (date: Date) =>
	new Intl.DateTimeFormat('en-US', {
		timeZone: 'UTC',
		year: 'numeric',
		month: 'short',
		day: 'numeric',
	}).format(date);

describe('date formatting', () => {
	it('formats a blog post date as month day, year', () => {
		const date = new Date(Date.UTC(2022, 6, 8));
		expect(formatDate(date)).toBe('Jul 8, 2022');
	});

	it('keeps the expected format for another date value', () => {
		const date = new Date(Date.UTC(2024, 5, 19));
		expect(formatDate(date)).toBe('Jun 19, 2024');
	});
});
