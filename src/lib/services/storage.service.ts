export const storageService = {
	get(key: string): string | null {
		if (typeof window === 'undefined' || !window.localStorage) return null;
		try {
			return localStorage.getItem(key);
		} catch (e) {
			console.error('Error reading from localStorage', e);
			return null;
		}
	},

	set(key: string, value: string): void {
		if (typeof window === 'undefined' || !window.localStorage) return;
		try {
			localStorage.setItem(key, value);
		} catch (e) {
			console.error('Error writing to localStorage', e);
		}
	},

	delete(key: string): void {
		if (typeof window === 'undefined' || !window.localStorage) return;
		try {
			localStorage.removeItem(key);
		} catch (e) {
			console.error('Error deleting from localStorage', e);
		}
	}
};
