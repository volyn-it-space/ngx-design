import { Routes } from '@angular/router';
import { MetaGuard } from '@wawjs/ngx-core';
import { designPages } from './design-catalog';
import { routeSeoGuard } from './utils/route-seo.guard';

export const routes: Routes = [
	{
		path: 'ngx-ui',
		canActivate: [MetaGuard, routeSeoGuard],
		data: {
			meta: {
				title: designPages[21].title,
				description: designPages[21].description,
			},
		},
		loadComponent: () => import('./pages/ngx-ui/ngx-ui.component').then((m) => m.NgxUiComponent),
	},
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
		path: 'cozy-family',
		canActivate: [MetaGuard, routeSeoGuard],
		data: {
			meta: {
				title: designPages[1].title,
				description: designPages[1].description,
			},
		},
		loadComponent: () =>
			import('./pages/cozy-family/cozy-family.component').then(
				(m) => m.CozyFamilyComponent,
			),
	},
	{
		path: 'traditional-local',
		canActivate: [MetaGuard, routeSeoGuard],
		data: {
			meta: {
				title: designPages[5].title,
				description: designPages[5].description,
			},
		},
		loadComponent: () =>
			import('./pages/traditional-local/traditional-local.component').then(
				(m) => m.TraditionalLocalComponent,
			),
	},
	{
		path: 'classic-elegant',
		canActivate: [MetaGuard, routeSeoGuard],
		data: {
			meta: {
				title: designPages[4].title,
				description: designPages[4].description,
			},
		},
		loadComponent: () =>
			import('./pages/classic-elegant/classic-elegant.component').then(
				(m) => m.ClassicElegantComponent,
			),
	},
	{
		path: 'event-banquet',
		canActivate: [MetaGuard, routeSeoGuard],
		data: {
			meta: {
				title: designPages[6].title,
				description: designPages[6].description,
			},
		},
		loadComponent: () =>
			import('./pages/event-banquet/event-banquet.component').then(
				(m) => m.EventBanquetComponent,
			),
	},
	{
		path: 'resort-spa',
		canActivate: [MetaGuard, routeSeoGuard],
		data: {
			meta: {
				title: designPages[8].title,
				description: designPages[8].description,
			},
		},
		loadComponent: () =>
			import('./pages/resort-spa/resort-spa.component').then((m) => m.ResortSpaComponent),
	},
	{
		path: 'cafe-bakery',
		canActivate: [MetaGuard, routeSeoGuard],
		data: {
			meta: {
				title: designPages[0].title,
				description: designPages[0].description,
			},
		},
		loadComponent: () =>
			import('./pages/cafe-bakery/cafe-bakery.component').then((m) => m.CafeBakeryComponent),
	},
	{
		path: 'fine-dining',
		canActivate: [MetaGuard, routeSeoGuard],
		data: {
			meta: {
				title: designPages[2].title,
				description: designPages[2].description,
			},
		},
		loadComponent: () =>
			import('./pages/fine-dining/fine-dining.component').then((m) => m.FineDiningComponent),
	},
	{
		path: 'boutique-hotel',
		canActivate: [MetaGuard, routeSeoGuard],
		data: {
			meta: {
				title: designPages[7].title,
				description: designPages[7].description,
			},
		},
		loadComponent: () =>
			import('./pages/boutique-hotel/boutique-hotel.component').then(
				(m) => m.BoutiqueHotelComponent,
			),
	},
	{
		path: 'rustic-farmhouse',
		canActivate: [MetaGuard, routeSeoGuard],
		data: {
			meta: {
				title: designPages[9].title,
				description: designPages[9].description,
			},
		},
		loadComponent: () =>
			import('./pages/rustic-farmhouse/rustic-farmhouse.component').then(
				(m) => m.RusticFarmhouseComponent,
			),
	},
	{
		path: 'luxury-dark',
		canActivate: [MetaGuard, routeSeoGuard],
		data: {
			meta: {
				title: designPages[10].title,
				description: designPages[10].description,
			},
		},
		loadComponent: () =>
			import('./pages/luxury-dark/luxury-dark.component').then((m) => m.LuxuryDarkComponent),
	},
	{
		path: 'modern-minimal',
		canActivate: [MetaGuard, routeSeoGuard],
		data: {
			meta: {
				title: designPages[3].title,
				description: designPages[3].description,
			},
		},
		loadComponent: () =>
			import('./pages/modern-minimal/modern-minimal.component').then(
				(m) => m.ModernMinimalComponent,
			),
	},
	{
		path: 'speakeasy-cocktail',
		canActivate: [MetaGuard, routeSeoGuard],
		data: {
			meta: {
				title: designPages[11].title,
				description: designPages[11].description,
			},
		},
		loadComponent: () =>
			import('./pages/speakeasy-cocktail/speakeasy-cocktail.component').then(
				(m) => m.SpeakeasyCocktailComponent,
			),
	},
	{
		path: 'neon-night',
		canActivate: [MetaGuard, routeSeoGuard],
		data: {
			meta: {
				title: designPages[12].title,
				description: designPages[12].description,
			},
		},
		loadComponent: () =>
			import('./pages/neon-night/neon-night.component').then((m) => m.NeonNightComponent),
	},
	{
		path: 'wine-cellar',
		canActivate: [MetaGuard, routeSeoGuard],
		data: {
			meta: {
				title: designPages[13].title,
				description: designPages[13].description,
			},
		},
		loadComponent: () =>
			import('./pages/wine-cellar/wine-cellar.component').then((m) => m.WineCellarComponent),
	},
	{
		path: 'smokehouse-ember',
		canActivate: [MetaGuard, routeSeoGuard],
		data: {
			meta: {
				title: designPages[14].title,
				description: designPages[14].description,
			},
		},
		loadComponent: () =>
			import('./pages/smokehouse-ember/smokehouse-ember.component').then(
				(m) => m.SmokehouseEmberComponent,
			),
	},
	{
		path: 'industrial-brewery',
		canActivate: [MetaGuard, routeSeoGuard],
		data: {
			meta: {
				title: designPages[15].title,
				description: designPages[15].description,
			},
		},
		loadComponent: () =>
			import('./pages/industrial-brewery/industrial-brewery.component').then(
				(m) => m.IndustrialBreweryComponent,
			),
	},
	{
		path: 'jazz-lounge',
		canActivate: [MetaGuard, routeSeoGuard],
		data: {
			meta: {
				title: designPages[16].title,
				description: designPages[16].description,
			},
		},
		loadComponent: () =>
			import('./pages/jazz-lounge/jazz-lounge.component').then((m) => m.JazzLoungeComponent),
	},
	{
		path: 'dark-roast-coffee',
		canActivate: [MetaGuard, routeSeoGuard],
		data: {
			meta: {
				title: designPages[17].title,
				description: designPages[17].description,
			},
		},
		loadComponent: () =>
			import('./pages/dark-roast-coffee/dark-roast-coffee.component').then(
				(m) => m.DarkRoastCoffeeComponent,
			),
	},
	{
		path: 'omakase-black',
		canActivate: [MetaGuard, routeSeoGuard],
		data: {
			meta: {
				title: designPages[18].title,
				description: designPages[18].description,
			},
		},
		loadComponent: () =>
			import('./pages/omakase-black/omakase-black.component').then(
				(m) => m.OmakaseBlackComponent,
			),
	},
	{
		path: 'botanical-bar',
		canActivate: [MetaGuard, routeSeoGuard],
		data: {
			meta: {
				title: designPages[19].title,
				description: designPages[19].description,
			},
		},
		loadComponent: () =>
			import('./pages/botanical-bar/botanical-bar.component').then(
				(m) => m.BotanicalBarComponent,
			),
	},
	{
		path: 'whisky-den',
		canActivate: [MetaGuard, routeSeoGuard],
		data: {
			meta: {
				title: designPages[20].title,
				description: designPages[20].description,
			},
		},
		loadComponent: () =>
			import('./pages/whisky-den/whisky-den.component').then((m) => m.WhiskyDenComponent),
	},
	{
		path: '',
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
