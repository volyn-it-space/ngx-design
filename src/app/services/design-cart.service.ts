import { isPlatformBrowser } from '@angular/common';
import { computed, inject, Injectable, PLATFORM_ID, signal } from '@angular/core';
import { designPages } from '../design-catalog';

const storageKey = 'design-cart';

@Injectable({
	providedIn: 'root',
})
export class DesignCartService {
	private readonly platformId = inject(PLATFORM_ID);
	private readonly isBrowser = isPlatformBrowser(this.platformId);
	private readonly selectedSlugs = signal<string[]>(this.readStoredSlugs());

	readonly selectedPages = computed(() =>
		designPages.filter((page) => this.selectedSlugs().includes(page.slug)),
	);

	readonly selectedCount = computed(() => this.selectedPages().length);

	readonly selectedLight = computed(
		() => this.selectedPages().find((page) => page.theme === 'light') ?? null,
	);

	readonly selectedDark = computed(
		() => this.selectedPages().find((page) => page.theme === 'dark') ?? null,
	);

	isSelected(slug: string): boolean {
		return this.selectedSlugs().includes(slug);
	}

	select(slug: string): void {
		const page = designPages.find((design) => design.slug === slug);

		if (!page) {
			return;
		}

		this.setSlugs([
			...this.selectedSlugs().filter((selectedSlug) => {
				const selectedPage = designPages.find((design) => design.slug === selectedSlug);

				return selectedPage?.theme !== page.theme;
			}),
			slug,
		]);
	}

	toggle(slug: string): void {
		const page = designPages.find((design) => design.slug === slug);

		if (!page) {
			return;
		}

		const current = this.selectedSlugs();
		const next = current.includes(slug)
			? current.filter((selectedSlug) => selectedSlug !== slug)
			: [
					...current.filter((selectedSlug) => {
						const selectedPage = designPages.find(
							(design) => design.slug === selectedSlug,
						);

						return selectedPage?.theme !== page.theme;
					}),
					slug,
				];

		this.setSlugs(next);
	}

	clear(): void {
		this.setSlugs([]);
	}

	private setSlugs(slugs: string[]): void {
		this.selectedSlugs.set(slugs);

		if (this.isBrowser) {
			localStorage.setItem(storageKey, JSON.stringify(slugs));
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

			return parsed
				.filter((slug): slug is string => typeof slug === 'string')
				.filter((slug) => designPages.some((page) => page.slug === slug))
				.slice(0, 2);
		} catch {
			return [];
		}
	}
}
