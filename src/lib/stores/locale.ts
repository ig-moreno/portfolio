// src/lib/stores/locale.ts

import { writable } from 'svelte/store';
import { browser } from '$app/environment';
import { cookieService } from '$lib/services/cookie.service';
import portfolioData from '$lib/data/portfolio.json';
import {
	isSupportedLocale,
	type Locale
} from '$lib/config/i18n';

const COOKIE_NAME = 'lang';

function getInitialLocale(): Locale {
	if (browser) {
		const saved = cookieService.get(COOKIE_NAME);
		if (saved && isSupportedLocale(saved)) {
			return saved;
		}
	}
	
	// Fallback to json default locale
	const jsonDefault = portfolioData.defaultLocale;
	if (jsonDefault && isSupportedLocale(jsonDefault)) {
		return jsonDefault;
	}
	
	return 'es';
}

const initialLocale = getInitialLocale();

export const locale = writable<Locale>(initialLocale);

if (browser) {
	locale.subscribe((value) => {
		cookieService.set(COOKIE_NAME, value, {
			maxAge: 60 * 60 * 24 * 365, // 1 year
			path: '/'
		});
	});
}