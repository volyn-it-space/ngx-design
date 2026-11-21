import { DOCUMENT, NgTemplateOutlet } from '@angular/common';
import { Component, DestroyRef, inject, signal } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import {
	catalogMeta,
	designCategories,
	designPages,
	DesignCategory,
	landingDesignPages,
} from '../../design-catalog';
import { DesignCartService } from '../../services/design-cart.service';
import { DesignPromptService } from '../../services/design-prompt.service';
import { copyText } from '../../utils/clipboard';

type CopyState = 'copied' | 'failed';

@Component({
	imports: [NgTemplateOutlet, RouterLink],
	templateUrl: './landing.component.html',
	styleUrl: './landing.component.scss',
})
export class LandingComponent {
	private readonly _document = inject(DOCUMENT);
	private readonly cart = inject(DesignCartService);
	private readonly designPrompt = inject(DesignPromptService);
	private readonly router = inject(Router);

	private readonly copyStates = signal<Record<string, CopyState | undefined>>({});
	private readonly copyTimers = new Map<string, ReturnType<typeof setTimeout>>();

	protected readonly catalog = catalogMeta;
	protected readonly categories = designCategories.filter(
		(category) => !('hidden' in category && category.hidden),
	);
	protected readonly activeCategory = signal<DesignCategory>('landing-pages');
	protected readonly lightDesigns = landingDesignPages.filter((design) => design.theme === 'light');
	protected readonly darkDesigns = landingDesignPages.filter((design) => design.theme === 'dark');
	protected readonly wawUiDesigns = designPages.filter((design) => design.category === 'waw-ui');

	constructor() {
		inject(DestroyRef).onDestroy(() => {
			for (const timer of this.copyTimers.values()) {
				clearTimeout(timer);
			}

			this.copyTimers.clear();
		});
	}

	protected categoryDescription(id: DesignCategory): string {
		return this.categories.find((category) => category.id === id)?.description ?? '';
	}

	protected selectCategory(category: DesignCategory): void {
		this.activeCategory.set(category);
	}

	/** Copies the public URL of the selector brief, for agents that should pick a design. */
	protected copySelectorBrief(): void {
		const url = new URL('/assets/design/index.md', this._document.location.origin).href;

		this.copy('index', url);
	}

	/** Copies a ready-to-paste implementation prompt for one design. */
	protected copyPrompt(slug: string): void {
		const page = designPages.find((design) => design.slug === slug);

		if (!page) {
			return;
		}

		const prompt = fetch(`/assets/design/${page.slug}.md`)
			.then((response) => {
				if (!response.ok) {
					throw new Error(`Unable to load ${page.slug}.md`);
				}

				return response.text();
			})
			.then((content) => this.designPrompt.compose([{ page, content }]));

		this.copy(slug, prompt);
	}

	/** Adds a design to the cart or removes it; opens the cart once a light + dark pair is chosen. */
	protected toggleCart(slug: string): void {
		this.cart.toggle(slug);

		if (this.cart.isSelected(slug) && this.cart.selectedCount() >= 2) {
			this.router.navigateByUrl('/cart');
		}
	}

	protected isInCart(slug: string): boolean {
		return this.cart.isSelected(slug);
	}

	protected copyLabel(slug: string, idle: string): string {
		const state = this.copyStates()[slug];

		return state === 'copied' ? 'Copied' : state === 'failed' ? 'Copy failed' : idle;
	}

	private copy(key: string, text: string | Promise<string>): void {
		copyText(text)
			.then(() => this.markCopyState(key, 'copied'))
			.catch(() => this.markCopyState(key, 'failed'));
	}

	private markCopyState(key: string, state: CopyState): void {
		this.copyStates.update((states) => ({ ...states, [key]: state }));

		clearTimeout(this.copyTimers.get(key));
		this.copyTimers.set(
			key,
			setTimeout(() => {
				this.copyTimers.delete(key);
				this.copyStates.update((states) => ({ ...states, [key]: undefined }));
			}, 2000),
		);
	}
}
