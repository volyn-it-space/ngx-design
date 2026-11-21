import { Type } from '@angular/core';
import { Route, Routes } from '@angular/router';
import { MetaGuard } from '@wawjs/ngx-core';
import { designPages } from './design-catalog';
import { designFontsGuard } from './utils/design-fonts.guard';
import { designModeGuard } from './utils/design-mode.guard';
import { routeSeoGuard } from './utils/route-seo.guard';

/**
 * One lazy component per design slug. The route path, title and description come from
 * `design-catalog.ts`, so a new design needs a catalog entry plus one line here.
 */
const designComponents: Record<string, () => Promise<Type<unknown>>> = {
	'cafe-bakery': () =>
		import('./pages/cafe-bakery/cafe-bakery.component').then((m) => m.CafeBakeryComponent),
	'cozy-family': () =>
		import('./pages/cozy-family/cozy-family.component').then((m) => m.CozyFamilyComponent),
	'fine-dining': () =>
		import('./pages/fine-dining/fine-dining.component').then((m) => m.FineDiningComponent),
	'modern-minimal': () =>
		import('./pages/modern-minimal/modern-minimal.component').then(
			(m) => m.ModernMinimalComponent,
		),
	'classic-elegant': () =>
		import('./pages/classic-elegant/classic-elegant.component').then(
			(m) => m.ClassicElegantComponent,
		),
	'traditional-local': () =>
		import('./pages/traditional-local/traditional-local.component').then(
			(m) => m.TraditionalLocalComponent,
		),
	'event-banquet': () =>
		import('./pages/event-banquet/event-banquet.component').then(
			(m) => m.EventBanquetComponent,
		),
	'boutique-hotel': () =>
		import('./pages/boutique-hotel/boutique-hotel.component').then(
			(m) => m.BoutiqueHotelComponent,
		),
	'resort-spa': () =>
		import('./pages/resort-spa/resort-spa.component').then((m) => m.ResortSpaComponent),
	'rustic-farmhouse': () =>
		import('./pages/rustic-farmhouse/rustic-farmhouse.component').then(
			(m) => m.RusticFarmhouseComponent,
		),
	'luxury-dark': () =>
		import('./pages/luxury-dark/luxury-dark.component').then((m) => m.LuxuryDarkComponent),
	'speakeasy-cocktail': () =>
		import('./pages/speakeasy-cocktail/speakeasy-cocktail.component').then(
			(m) => m.SpeakeasyCocktailComponent,
		),
	'neon-night': () =>
		import('./pages/neon-night/neon-night.component').then((m) => m.NeonNightComponent),
	'wine-cellar': () =>
		import('./pages/wine-cellar/wine-cellar.component').then((m) => m.WineCellarComponent),
	'smokehouse-ember': () =>
		import('./pages/smokehouse-ember/smokehouse-ember.component').then(
			(m) => m.SmokehouseEmberComponent,
		),
	'industrial-brewery': () =>
		import('./pages/industrial-brewery/industrial-brewery.component').then(
			(m) => m.IndustrialBreweryComponent,
		),
	'jazz-lounge': () =>
		import('./pages/jazz-lounge/jazz-lounge.component').then((m) => m.JazzLoungeComponent),
	'dark-roast-coffee': () =>
		import('./pages/dark-roast-coffee/dark-roast-coffee.component').then(
			(m) => m.DarkRoastCoffeeComponent,
		),
	'omakase-black': () =>
		import('./pages/omakase-black/omakase-black.component').then(
			(m) => m.OmakaseBlackComponent,
		),
	'botanical-bar': () =>
		import('./pages/botanical-bar/botanical-bar.component').then(
			(m) => m.BotanicalBarComponent,
		),
	'whisky-den': () =>
		import('./pages/whisky-den/whisky-den.component').then((m) => m.WhiskyDenComponent),
	'ngx-ui': () => import('./pages/ngx-ui/ngx-ui.component').then((m) => m.NgxUiComponent),
};

const designRoutes: Route[] = designPages.map((page) => {
	const loadComponent = designComponents[page.slug];

	if (!loadComponent) {
		throw new Error(`Design "${page.slug}" is in design-catalog.ts but has no route component.`);
	}

	return {
		path: page.slug,
		canActivate: [MetaGuard, routeSeoGuard, designModeGuard, designFontsGuard],
		data: {
			meta: {
				title: page.title,
				description: page.description,
			},
		},
		loadComponent,
	};
});

for (const slug of Object.keys(designComponents)) {
	if (!designPages.some((page) => page.slug === slug)) {
		throw new Error(`Route component "${slug}" has no entry in design-catalog.ts.`);
	}
}

export const routes: Routes = [
	...designRoutes,
	{
		path: 'cart',
		canActivate: [MetaGuard, routeSeoGuard],
		data: {
			meta: {
				title: 'AI Prompt Cart',
				description:
					'Select one light and one dark Angular design brief, combine them into a single AI implementation prompt, and copy it for reuse.',
				robots: 'noindex, follow',
			},
		},
		loadComponent: () => import('./pages/cart/cart.component').then((m) => m.CartComponent),
	},
	{
		path: '',
		pathMatch: 'full',
		canActivate: [MetaGuard, routeSeoGuard],
		data: {
			meta: {
				titleSuffix: '',
			},
		},
		loadComponent: () =>
			import('./pages/landing/landing.component').then((m) => m.LandingComponent),
	},
	{
		path: '**',
		redirectTo: '',
	},
];
