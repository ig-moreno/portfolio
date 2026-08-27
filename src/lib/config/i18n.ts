export const DEFAULT_LOCALE = 'es';

export const SUPPORTED_LOCALES = ['es', 'en'] as const;

export type Locale = (typeof SUPPORTED_LOCALES)[number];

export function isSupportedLocale(
	locale: string
): locale is Locale {
	return SUPPORTED_LOCALES.includes(locale as Locale);
}