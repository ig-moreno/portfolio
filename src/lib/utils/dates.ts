import type { ISODate } from '$lib/domain';

/**
 * Formats an ISODate, Date object, or timestamp into a language-specific date format.
 * 
 * @param date The date to format (Date, ISO string, or number)
 * @param locale The active language locale (e.g. 'es', 'en')
 * @param options Custom formatting options for Intl.DateTimeFormat
 * @returns The formatted date string
 */
export function formatDate(
	date: Date | ISODate | number | undefined | null,
	locale: string,
	options: Intl.DateTimeFormatOptions = {
		year: 'numeric',
		month: 'long',
		day: 'numeric'
	}
): string {
	if (!date) return '';

	const dateObj = typeof date === 'string' || typeof date === 'number' ? new Date(date) : date;

	// Fallback check for invalid dates
	if (isNaN(dateObj.getTime())) {
		return '';
	}

	return new Intl.DateTimeFormat(locale, options).format(dateObj);
}

/**
 * Formats a date range (e.g., for work experiences or education).
 * E.g.: "enero de 2024 - presente" or "January 2024 - Present"
 */
export function formatDateRange(
	startDate: ISODate,
	endDate: ISODate | undefined | null,
	locale: string,
	options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long' }
): string {
	const formattedStart = formatDate(startDate, locale, options);
	
	if (!endDate) {
		return locale === 'es' 
			? `${formattedStart} - Presente` 
			: `${formattedStart} - Present`;
	}

	const formattedEnd = formatDate(endDate, locale, options);
	return `${formattedStart} - ${formattedEnd}`;
}

/**
 * Formats an ISODate, Date object, or timestamp into a language-specific date and time format.
 * 
 * @param date The date to format (Date, ISO string, or number)
 * @param locale The active language locale (e.g. 'es', 'en')
 * @param options Custom formatting options for Intl.DateTimeFormat
 * @returns The formatted date and time string
 */
export function formatDatetime(
	date: Date | ISODate | number | undefined | null,
	locale: string,
	options: Intl.DateTimeFormatOptions = {
		year: 'numeric',
		month: 'long',
		day: 'numeric',
		hour: '2-digit',
		minute: '2-digit'
	}
): string {
	if (!date) return '';

	const dateObj = typeof date === 'string' || typeof date === 'number' ? new Date(date) : date;

	// Fallback check for invalid dates
	if (isNaN(dateObj.getTime())) {
		return '';
	}

	return new Intl.DateTimeFormat(locale, options).format(dateObj);
}
