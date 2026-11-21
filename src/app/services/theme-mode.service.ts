import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { inject, PLATFORM_ID, Service, signal } from '@angular/core';
import { DesignPage } from '../design-catalog';

type ThemeMode = DesignPage['theme'];

const storageKey = 'app-mode';

@Service()
export class ThemeModeService {
	private readonly document = inject(DOCUMENT);
	private readonly isBrowser = isPlatformBrowser(inject(PLATFORM_ID));
	private readonly activeMode = signal<ThemeMode>(this.getInitialMode());

	readonly mode = this.activeMode.asReadonly();

	/** Switches the mode because the visitor asked for it, and remembers the choice. */
	setMode(mode: ThemeMode): void {
		this.showMode(mode);

		if (!this.isBrowser) {
			return;
		}

		try {
			localStorage.setItem(storageKey, mode);
		} catch {
			// Storage can be unavailable (private mode, blocked cookies); keep the in-memory mode.
		}
	}

	/**
	 * Applies a mode without storing it. Used when a design route dictates the mode, so opening
	 * a dark demo does not overwrite the visitor's saved preference.
	 */
	showMode(mode: ThemeMode): void {
		this.activeMode.set(mode);
		this.document.documentElement.setAttribute('data-mode', mode);
	}

	toggleMode(): void {
		this.setMode(this.activeMode() === 'light' ? 'dark' : 'light');
	}

	private getInitialMode(): ThemeMode {
		const mode = this.document.documentElement.getAttribute('data-mode');
		return mode === 'dark' ? 'dark' : 'light';
	}
}
