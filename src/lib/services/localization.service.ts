import type { Localized } from '$lib/domain';

export function localize<T>(
    value: Localized<T>,
    locale: string,
    defaultLocale: string
): T {
    if (locale in value) {
        return value[locale];
    }

    if (defaultLocale in value) {
        return value[defaultLocale];
    }

    const firstValue = Object.values(value)[0];

    if (firstValue === undefined) {
        throw new Error('Localized value contains no translations');
    }

    return firstValue;
}