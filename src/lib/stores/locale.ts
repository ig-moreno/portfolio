// src/lib/stores/locale.ts

import { writable } from 'svelte/store';
import { browser } from '$app/environment';
import { storageService } from '$lib/services/storage.service';
import portfolioData from '$lib/data/portfolio.json';
import {
	isSupportedLocale,
	type Locale
} from '$lib/config/i18n';

const STORAGE_KEY = 'lang';

function getInitialLocale(): Locale {
	if (browser) {
		const saved = storageService.get(STORAGE_KEY);
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
		storageService.set(STORAGE_KEY, value);
	});
}