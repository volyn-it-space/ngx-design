import { NgOptimizedImage } from '@angular/common';
import { Component, computed, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { NavigationEnd, Router, RouterLink } from '@angular/router';
import { filter, map } from 'rxjs/operators';
import { findDesignByUrl, landingDesignPages } from '../../design-catalog';
import { DesignCartService } from '../../services/design-cart.service';
import { ThemeModeService } from '../../services/theme-mode.service';

@Component({
	selector: 'app-topbar',
	imports: [NgOptimizedImage, RouterLink],
	templateUrl: './topbar.component.html',
	styleUrl: './topbar.component.scss',
})
export class TopbarComponent {
	private readonly router = inject(Router);
	private readonly cart = inject(DesignCartService);
	private readonly themeMode = inject(ThemeModeService);

	protected readonly activeMode = this.themeMode.mode;
	protected readonly cartCount = this.cart.selectedCount;

	/** The landing designs of the active light/dark family, in catalog order. */
	private readonly activeDesigns = computed(() =>
		landingDesignPages.filter((page) => page.theme === this.activeMode()),
	);

	private readonly currentUrl = toSignal(
		this.router.events.pipe(
			filter((event): event is NavigationEnd => event instanceof NavigationEnd),
			map((event) => event.urlAfterRedirects),
		),
		{ initialValue: this.router.url },
	);

	/** Index of the open design inside the active family, or -1 on any other page. */
	private readonly currentIndex = computed(() => {
		const design = findDesignByUrl(this.currentUrl());

		return design ? this.activeDesigns().indexOf(design) : -1;
	});

	private readonly nextIndex = computed(() => {
		const idx = this.currentIndex();

		return idx < 0 ? 0 : (idx + 1) % this.activeDesigns().length;
	});

	protected readonly nextDesign = computed(() => this.activeDesigns()[this.nextIndex()]);

	/** Position of the design the link opens, so the label and the counter describe the same page. */
	protected readonly position = computed(
		() => `${this.nextIndex() + 1} / ${this.activeDesigns().length}`,
	);

	protected toggleMode(): void {
		this.themeMode.toggleMode();
	}
}
