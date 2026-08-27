export interface CookieOptions {
	path?: string;
	domain?: string;
	maxAge?: number;
	expires?: Date;
	secure?: boolean;
	sameSite?: 'lax' | 'strict' | 'none';
}

export const cookieService = {
	get(name: string): string | null {
		if (typeof document === 'undefined') return null;
		const nameEQ = name + '=';
		const ca = document.cookie.split(';');
		for (let i = 0; i < ca.length; i++) {
			let c = ca[i];
			while (c.charAt(0) === ' ') c = c.substring(1, c.length);
			if (c.indexOf(nameEQ) === 0) {
				return decodeURIComponent(c.substring(nameEQ.length, c.length));
			}
		}
		return null;
	},

	set(name: string, value: string, options: CookieOptions = {}): void {
		if (typeof document === 'undefined') return;
		
		let cookieString = `${encodeURIComponent(name)}=${encodeURIComponent(value)}`;

		if (options.maxAge !== undefined) {
			cookieString += `; Max-Age=${options.maxAge}`;
		} else if (options.expires) {
			cookieString += `; Expires=${options.expires.toUTCString()}`;
		}

		cookieString += `; Path=${options.path || '/'}`;

		if (options.domain) {
			cookieString += `; Domain=${options.domain}`;
		}
		if (options.secure) {
			cookieString += '; Secure';
		}
		if (options.sameSite) {
			cookieString += `; SameSite=${options.sameSite}`;
		} else {
			cookieString += '; SameSite=Lax';
		}

		document.cookie = cookieString;
	},

	delete(name: string, path = '/'): void {
		this.set(name, '', { maxAge: -1, path });
	}
};
