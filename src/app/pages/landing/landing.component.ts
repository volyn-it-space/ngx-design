import { DOCUMENT } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import {
	designCategories,
	designPages,
	DesignCategory,
	DesignPage,
} from '../../design-catalog';
import { DesignCartService } from '../../services/design-cart.service';
import { DesignPromptService } from '../../services/design-prompt.service';

@Component({
	imports: [RouterLink],
	templateUrl: './landing.component.html',
	styleUrl: './landing.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LandingComponent {
	private readonly _document = inject(DOCUMENT);
	private readonly cart = inject(DesignCartService);
	private readonly designPrompt = inject(DesignPromptService);
	private readonly router = inject(Router);

	protected readonly copiedStates = signal<Record<string, boolean>>({});
	protected readonly addedThemeModes = signal<DesignPage['theme'][]>([]);
	protected readonly categories = designCategories;
	protected readonly activeCategory = signal<DesignCategory>('landing-pages');
	protected readonly landingDesigns = designPages.filter(
		(design) => (design.category ?? 'landing-pages') === 'landing-pages',
	);
	protected readonly lightDesigns = this.landingDesigns.filter((design) => design.theme === 'light');
	protected readonly darkDesigns = this.landingDesigns.filter((design) => design.theme === 'dark');
	protected readonly wawUiDesigns = designPages.filter((design) => design.category === 'waw-ui');

	protected selectCategory(category: DesignCategory): void {
		this.activeCategory.set(category);
	}

	copySelectorBrief() {
		this.copyBriefUrl('index');
	}

	copyToClipboard(slug: string) {
		const page = designPages.find((design) => design.slug === slug);

		if (!page) {
			return;
		}

		fetch(`/assets/design/${page.slug}.md`)
			.then((response) => {
				if (!response.ok) {
					throw new Error(`Unable to load ${page.slug}.md`);
				}

				return response.text();
			})
			.then((content) =>
				navigator.clipboard.writeText(
					this.designPrompt.compose([
						{
							page,
							content,
						},
					]),
				),
			)
			.then(() => {
				this.markCopied(slug);
			});
	}

	addToCart(slug: string): void {
		const page = designPages.find((design) => design.slug === slug);

		if (!page) {
			return;
		}

		this.cart.select(slug);
		const nextThemeModes = this.addedThemeModes().includes(page.theme)
			? this.addedThemeModes()
			: [...this.addedThemeModes(), page.theme];

		this.addedThemeModes.set(nextThemeModes);

		if (nextThemeModes.length >= 2) {
			this.router.navigateByUrl('/cart');
		}
	}

	isInCart(slug: string): boolean {
		return this.cart.isSelected(slug);
	}

	private copyBriefUrl(slug: string) {
		const url = new URL(`/assets/design/${slug}.md`, this._document.location.origin).href;

		navigator.clipboard.writeText(url).then(() => {
			this.markCopied(slug);
		});
	}

	private markCopied(slug: string): void {
		this.copiedStates.update((states) => ({
			...states,
			[slug]: true,
		}));

		setTimeout(() => {
			this.copiedStates.update((states) => ({
				...states,
				[slug]: false,
			}));
		}, 2000);
	}

	isCopied(slug: string): boolean {
		return this.copiedStates()[slug] ?? false;
	}
}
