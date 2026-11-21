import { isPlatformBrowser } from '@angular/common';
import {
	Component,
	computed,
	DestroyRef,
	effect,
	inject,
	PLATFORM_ID,
	signal,
} from '@angular/core';
import { RouterLink } from '@angular/router';
import { landingDesignPages } from '../../design-catalog';
import { DesignCartService } from '../../services/design-cart.service';
import { DesignPromptService } from '../../services/design-prompt.service';
import { copyText } from '../../utils/clipboard';

@Component({
	imports: [RouterLink],
	templateUrl: './cart.component.html',
	styleUrl: './cart.component.scss',
})
export class CartComponent {
	private readonly cart = inject(DesignCartService);
	private readonly designPrompt = inject(DesignPromptService);
	private readonly isBrowser = isPlatformBrowser(inject(PLATFORM_ID));
	private loadId = 0;
	private copyTimer: ReturnType<typeof setTimeout> | undefined;

	protected readonly lightDesigns = landingDesignPages.filter((design) => design.theme === 'light');
	protected readonly darkDesigns = landingDesignPages.filter((design) => design.theme === 'dark');
	protected readonly selectedPages = this.cart.selectedPages;
	protected readonly selectedLight = this.cart.selectedLight;
	protected readonly selectedDark = this.cart.selectedDark;
	protected readonly selectedCount = this.cart.selectedCount;
	protected readonly prompt = signal('');
	protected readonly loadingPrompt = signal(false);
	protected readonly loadFailed = signal(false);
	protected readonly copied = signal(false);
	protected readonly copyFailed = signal(false);
	protected readonly expandedTheme = signal<'light' | 'dark' | null>(null);
	protected readonly promptReady = computed(() => this.prompt().trim().length > 0);

	constructor() {
		inject(DestroyRef).onDestroy(() => clearTimeout(this.copyTimer));

		effect(() => {
			const pages = this.selectedPages();
			const loadId = ++this.loadId;

			this.copied.set(false);
			this.copyFailed.set(false);
			this.loadFailed.set(false);

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
						// Keep the prompt empty so an error message can never be copied as a prompt.
						this.prompt.set('');
						this.loadFailed.set(true);
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

		if (this.cart.isSelected(slug)) {
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

		copyText(prompt)
			.then(() => {
				this.copied.set(true);
				this.copyFailed.set(false);
			})
			.catch(() => {
				this.copied.set(false);
				this.copyFailed.set(true);
			})
			.finally(() => {
				clearTimeout(this.copyTimer);
				this.copyTimer = setTimeout(() => {
					this.copied.set(false);
					this.copyFailed.set(false);
				}, 2000);
			});
	}
}
