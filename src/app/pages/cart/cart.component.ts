import { isPlatformBrowser } from '@angular/common';
import {
	ChangeDetectionStrategy,
	Component,
	computed,
	effect,
	inject,
	PLATFORM_ID,
	signal,
} from '@angular/core';
import { RouterLink } from '@angular/router';
import { designPages } from '../../design-catalog';
import { DesignCartService } from '../../services/design-cart.service';
import { DesignPromptService } from '../../services/design-prompt.service';

@Component({
	imports: [RouterLink],
	templateUrl: './cart.component.html',
	styleUrl: './cart.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CartComponent {
	private readonly cart = inject(DesignCartService);
	private readonly designPrompt = inject(DesignPromptService);
	private readonly isBrowser = isPlatformBrowser(inject(PLATFORM_ID));
	private loadId = 0;

	protected readonly lightDesigns = designPages.filter(
		(design) => design.theme === 'light' && (design.category ?? 'landing-pages') === 'landing-pages',
	);
	protected readonly darkDesigns = designPages.filter(
		(design) => design.theme === 'dark' && (design.category ?? 'landing-pages') === 'landing-pages',
	);
	protected readonly selectedPages = this.cart.selectedPages;
	protected readonly selectedLight = this.cart.selectedLight;
	protected readonly selectedDark = this.cart.selectedDark;
	protected readonly selectedCount = this.cart.selectedCount;
	protected readonly prompt = signal('');
	protected readonly loadingPrompt = signal(false);
	protected readonly copied = signal(false);
	protected readonly expandedTheme = signal<'light' | 'dark' | null>(null);
	protected readonly promptReady = computed(() => this.prompt().trim().length > 0);

	constructor() {
		effect(() => {
			const pages = this.selectedPages();
			const loadId = ++this.loadId;

			this.copied.set(false);

			if (!this.isBrowser || pages.length === 0) {
				this.prompt.set('');
				this.loadingPrompt.set(false);
				return;
			}

			this.loadingPrompt.set(true);

			Promise.all(
				pages.map((page) =>
					fetch(`/assets/design/${page.slug}.md`)
						.then((response) => {
							if (!response.ok) {
								throw new Error(`Unable to load ${page.slug}.md`);
							}

							return response.text();
						})
						.then((content) => ({ page, content })),
				),
			)
				.then((briefs) => {
					if (loadId !== this.loadId) {
						return;
					}

					this.prompt.set(this.designPrompt.compose(briefs));
				})
				.catch(() => {
					if (loadId === this.loadId) {
						this.prompt.set('Unable to load the selected design briefs.');
					}
				})
				.finally(() => {
					if (loadId === this.loadId) {
						this.loadingPrompt.set(false);
					}
				});
		});
	}

	protected toggle(slug: string): void {
		this.cart.toggle(slug);
		const page = designPages.find((design) => design.slug === slug);

		if (page && this.cart.isSelected(slug)) {
			this.expandedTheme.set(null);
		}
	}

	protected isSelected(slug: string): boolean {
		return this.cart.isSelected(slug);
	}

	protected clear(): void {
		this.cart.clear();
		this.expandedTheme.set(null);
	}

	protected expandTheme(theme: 'light' | 'dark'): void {
		this.expandedTheme.set(theme);
	}

	protected copyPrompt(): void {
		const prompt = this.prompt();

		if (!prompt || !this.isBrowser) {
			return;
		}

		navigator.clipboard.writeText(prompt).then(() => {
			this.copied.set(true);

			setTimeout(() => {
				this.copied.set(false);
			}, 2000);
		});
	}

}
