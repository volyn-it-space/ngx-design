import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { inject, Injectable, PLATFORM_ID, signal } from '@angular/core';
import { DesignPage } from '../design-catalog';

type ThemeMode = DesignPage['theme'];

@Injectable({
	providedIn: 'root',
})
export class ThemeModeService {
	private readonly document = inject(DOCUMENT);
	private readonly isBrowser = isPlatformBrowser(inject(PLATFORM_ID));
	private readonly activeMode = signal<ThemeMode>(this.getInitialMode());

	readonly mode = this.activeMode.asReadonly();

	setMode(mode: ThemeMode): void {
		this.activeMode.set(mode);
		this.document.documentElement.setAttribute('data-mode', mode);

		if (this.isBrowser) {
			localStorage.setItem('app-mode', mode);
		}
	}

	toggleMode(): void {
		this.setMode(this.activeMode() === 'light' ? 'dark' : 'light');
	}

	private getInitialMode(): ThemeMode {
		const mode = this.document.documentElement.getAttribute('data-mode');
		return mode === 'dark' ? 'dark' : 'light';
	}
}
