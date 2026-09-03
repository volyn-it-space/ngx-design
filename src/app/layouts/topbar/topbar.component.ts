import { NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { NavigationEnd, Router, RouterLink } from '@angular/router';
import { filter, map } from 'rxjs/operators';
import { catalogMeta, designPages, DesignPage } from '../../design-catalog';
import { DesignCartService } from '../../services/design-cart.service';
import { ThemeModeService } from '../../services/theme-mode.service';

type ThemeMode = DesignPage['theme'];

@Component({
	selector: 'app-topbar',
	imports: [NgOptimizedImage, RouterLink],
	templateUrl: './topbar.component.html',
	styleUrl: './topbar.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TopbarComponent {
	private readonly router = inject(Router);
	private readonly cart = inject(DesignCartService);
	private readonly themeMode = inject(ThemeModeService);

	protected readonly catalog = catalogMeta;
	protected readonly activeMode = this.themeMode.mode;
	protected readonly cartCount = this.cart.selectedCount;

	protected readonly activeDesigns = computed(() =>
		designPages.filter((page) => page.theme === this.activeMode()),
	);

	protected readonly totalDesigns = computed(() => this.activeDesigns().length);

	private readonly currentUrl = toSignal(
		this.router.events.pipe(
			filter((event): event is NavigationEnd => event instanceof NavigationEnd),
			map((event) => event.urlAfterRedirects),
		),
		{ initialValue: this.router.url },
	);

	private readonly currentIndex = computed(() => {
		const url = this.currentUrl().split('?')[0].split('#')[0];
		return this.activeDesigns().findIndex((page) => page.path === url);
	});

	protected readonly displayDesign = computed(() => {
		const designs = this.activeDesigns();
		const idx = this.currentIndex();
		return idx >= 0 ? designs[idx] : designs[0];
	});

	protected readonly nextDesign = computed(() => {
		const designs = this.activeDesigns();
		const idx = this.currentIndex();
		const nextIdx = idx < 0 ? 0 : (idx + 1) % designs.length;
		return designs[nextIdx];
	});

	protected readonly position = computed(() => {
		const idx = this.currentIndex();
		const display = idx < 0 ? 1 : idx + 1;
		return `${display} / ${this.totalDesigns()}`;
	});

	protected readonly modeLabel = computed(() =>
		this.activeMode() === 'light' ? 'Light' : 'Dark',
	);

	protected toggleMode(): void {
		this.themeMode.toggleMode();
	}
}
