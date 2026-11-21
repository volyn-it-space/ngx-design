import { isPlatformBrowser } from '@angular/common';
import { afterNextRender, computed, inject, PLATFORM_ID, Service, signal } from '@angular/core';
import { DesignPage, landingDesignPages } from '../design-catalog';

const storageKey = 'design-cart';

/**
 * Holds at most one light and one dark landing design. Design systems (for example WAW UI) are
 * not landing directions, so they cannot be combined into the cart prompt.
 */
@Service()
export class DesignCartService {
	private readonly platformId = inject(PLATFORM_ID);
	private readonly isBrowser = isPlatformBrowser(this.platformId);
	private readonly selectedSlugs = signal<string[]>([]);

	readonly selectedPages = computed(() =>
		landingDesignPages.filter((page) => this.selectedSlugs().includes(page.slug)),
	);

	readonly selectedCount = computed(() => this.selectedPages().length);

	readonly selectedLight = computed(
		() => this.selectedPages().find((page) => page.theme === 'light') ?? null,
	);

	readonly selectedDark = computed(
		() => this.selectedPages().find((page) => page.theme === 'dark') ?? null,
	);

	constructor() {
		// Restore the stored cart after the first browser render so prerendered markup hydrates cleanly.
		afterNextRender(() => this.selectedSlugs.set(this.readStoredSlugs()));
	}

	canSelect(slug: string): boolean {
		return this.findPage(slug) !== null;
	}

	isSelected(slug: string): boolean {
		return this.selectedSlugs().includes(slug);
	}

	/** Selects a design, replacing the selected design of the same theme. */
	select(slug: string): void {
		const page = this.findPage(slug);

		if (page) {
			this.setSlugs([...this.slugsOfOtherTheme(page), slug]);
		}
	}

	toggle(slug: string): void {
		if (this.isSelected(slug)) {
			this.setSlugs(this.selectedSlugs().filter((selectedSlug) => selectedSlug !== slug));
			return;
		}

		this.select(slug);
	}

	clear(): void {
		this.setSlugs([]);
	}

	private findPage(slug: string): DesignPage | null {
		return landingDesignPages.find((design) => design.slug === slug) ?? null;
	}

	private slugsOfOtherTheme(page: DesignPage): string[] {
		return this.selectedSlugs().filter(
			(selectedSlug) => this.findPage(selectedSlug)?.theme !== page.theme,
		);
	}

	private setSlugs(slugs: string[]): void {
		this.selectedSlugs.set(slugs);

		if (!this.isBrowser) {
			return;
		}

		try {
			localStorage.setItem(storageKey, JSON.stringify(slugs));
		} catch {
			// Storage can be unavailable (private mode, quota); keep in-memory state only.
		}
	}

	private readStoredSlugs(): string[] {
		if (!this.isBrowser) {
			return [];
		}

		try {
			const parsed = JSON.parse(localStorage.getItem(storageKey) ?? '[]');

			if (!Array.isArray(parsed)) {
				return [];
			}

			// Rebuild through select() rules so a tampered or outdated value can never hold
			// two designs of one theme or a design that left the catalog.
			const slugs: string[] = [];

			for (const slug of parsed) {
				const page = typeof slug === 'string' ? this.findPage(slug) : null;

				if (page && !slugs.some((kept) => this.findPage(kept)?.theme === page.theme)) {
					slugs.push(page.slug);
				}
			}

			return slugs;
		} catch {
			return [];
		}
	}
}
