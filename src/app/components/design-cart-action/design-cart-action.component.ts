import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { NavigationEnd, Router } from '@angular/router';
import { filter, map } from 'rxjs/operators';
import { designPages } from '../../design-catalog';
import { DesignCartService } from '../../services/design-cart.service';
import { ThemeModeService } from '../../services/theme-mode.service';

@Component({
	selector: 'app-design-cart-action',
	templateUrl: './design-cart-action.component.html',
	styleUrl: './design-cart-action.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DesignCartActionComponent {
	private readonly router = inject(Router);
	private readonly cart = inject(DesignCartService);
	private readonly themeMode = inject(ThemeModeService);

	private readonly currentUrl = toSignal(
		this.router.events.pipe(
			filter((event): event is NavigationEnd => event instanceof NavigationEnd),
			map((event) => event.urlAfterRedirects),
		),
		{ initialValue: this.router.url },
	);

	protected readonly currentDesign = computed(() => {
		const url = this.currentUrl().split('?')[0].split('#')[0];
		return designPages.find((page) => page.path === url) ?? null;
	});

	protected readonly isVisible = computed(() => this.currentDesign() !== null);
	protected readonly isSelected = computed(() => {
		const design = this.currentDesign();
		return design ? this.cart.isSelected(design.slug) : false;
	});
	protected readonly buttonLabel = computed(() => {
		const design = this.currentDesign();

		if (!design) {
			return 'Add to cart';
		}

		if (this.cart.selectedCount() >= 2 && this.isSelected()) {
			return 'Open cart';
		}

		return this.cart.selectedCount() === 0
			? 'Add to cart'
			: `Add ${design.theme} design`;
	});

	protected addToCart(): void {
		const design = this.currentDesign();

		if (!design) {
			return;
		}

		this.cart.select(design.slug);

		if (this.cart.selectedCount() >= 2) {
			this.router.navigateByUrl('/cart');
			return;
		}

		this.themeMode.setMode(design.theme === 'light' ? 'dark' : 'light');
	}
}
