import { Component, computed, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { NavigationEnd, Router } from '@angular/router';
import { filter, map } from 'rxjs/operators';
import { findDesignByUrl } from '../../design-catalog';
import { DesignCartService } from '../../services/design-cart.service';
import { ThemeModeService } from '../../services/theme-mode.service';

type CartActionState = 'add' | 'added' | 'open-cart';

@Component({
	selector: 'app-design-cart-action',
	templateUrl: './design-cart-action.component.html',
	styleUrl: './design-cart-action.component.scss',
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

	/** The design on screen, when it is one the cart accepts (landing directions only). */
	protected readonly currentDesign = computed(() => {
		const design = findDesignByUrl(this.currentUrl());

		return design && this.cart.canSelect(design.slug) ? design : null;
	});

	protected readonly state = computed<CartActionState>(() => {
		const design = this.currentDesign();

		if (!design || !this.cart.isSelected(design.slug)) {
			return 'add';
		}

		return this.cart.selectedCount() >= 2 ? 'open-cart' : 'added';
	});

	protected readonly otherTheme = computed(() =>
		this.currentDesign()?.theme === 'light' ? 'dark' : 'light',
	);

	protected readonly icon = computed(() => {
		switch (this.state()) {
			case 'open-cart':
				return 'shopping_cart_checkout';
			case 'added':
				return 'check';
			default:
				return 'add_shopping_cart';
		}
	});

	protected readonly buttonLabel = computed(() => {
		const design = this.currentDesign();

		switch (this.state()) {
			case 'open-cart':
				return 'Open cart';
			case 'added':
				return `Added. Browse ${this.otherTheme()} designs`;
			default:
				return this.cart.selectedCount() === 0 || !design
					? 'Add to cart'
					: `Add ${design.theme} design`;
		}
	});

	protected readonly ariaLabel = computed(() => {
		const label = this.currentDesign()?.label ?? '';

		switch (this.state()) {
			case 'open-cart':
				return `${label} is in the AI prompt cart. Open cart`;
			case 'added':
				return `${label} is in the AI prompt cart. Browse ${this.otherTheme()} designs`;
			default:
				return `Add ${label} to AI prompt cart`;
		}
	});

	protected onAction(): void {
		const design = this.currentDesign();

		if (!design) {
			return;
		}

		this.cart.select(design.slug);

		if (this.cart.selectedCount() >= 2) {
			this.router.navigateByUrl('/cart');
			return;
		}

		// One design chosen: point the topbar rotation at the other family.
		this.themeMode.setMode(this.otherTheme());
	}
}
