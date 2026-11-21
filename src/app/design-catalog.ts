export interface DesignPage {
	label: string;
	slug: string;
	path: string;
	icon: string;
	theme: 'light' | 'dark';
	title: string;
	description: string;
	bestFor: string;
	category?: DesignCategory;
	/**
	 * Google Fonts families this demo needs, in css2 `family=` syntax, for example
	 * `'Playfair+Display:ital,wght@0,600;1,500'`. They are loaded only on this design's route
	 * (`src/app/utils/design-fonts.guard.ts`).
	 */
	fonts?: string[];
}

export type DesignCategory = 'landing-pages' | 'waw-ui' | 'waw-prime';

export const designCategories = [
	{
		id: 'landing-pages',
		label: 'Landing Pages Designs',
		description: 'Complete visual directions for hospitality and marketing websites.',
	},
	{
		id: 'waw-ui',
		label: 'WAW UI Design Systems',
		description: 'WAW-native interface foundations for Angular products and business applications.',
	},
	{
		id: 'waw-prime',
		label: 'WAW Prime Design Systems',
		description: 'Prime-based WAW interface directions and theme options.',
		// No designs yet: hidden from the catalog tabs until the first one is added.
		hidden: true,
	},
] as const satisfies ReadonlyArray<{
	id: DesignCategory;
	label: string;
	description: string;
	hidden?: boolean;
}>;

export const catalogMeta = {
	name: 'Angular Project Design Catalog',
	title: 'Angular Project Design Catalog',
	description:
		'Angular 22+ project design demos and AI implementation briefs for reusable, static, SEO-friendly website directions.',
	image: 'https://design.itkamianets.com/logo.png',
	productionOrigin: 'https://design.itkamianets.com',
};

export const designPages: DesignPage[] = [
	{
		label: 'Cafe Bakery',
		slug: 'cafe-bakery',
		fonts: ['Fraunces:wght@600;700', 'Inter:wght@400;500;600'],
		path: '/cafe-bakery',
		icon: 'bakery_dining',
		theme: 'light',
		title: 'Cafe Bakery Angular Project Design',
		description:
			'A cozy cafe and bakery landing page demo for coffee shops, pastry venues, and breakfast places with warm, friendly, and welcoming aesthetics.',
		bestFor: 'coffee shops, pastry venues, breakfast cafes, and neighborhood bakeries',
	},
	{
		label: 'Cozy Family',
		slug: 'cozy-family',
		fonts: ['DM+Serif+Display', 'Inter:wght@400;500;600;700'],
		path: '/cozy-family',
		icon: 'family_restroom',
		theme: 'light',
		title: 'Cozy Family Angular Project Design',
		description:
			'A warm cozy family landing page demo for family restaurants, small cafes, guest houses, local hotels, and casual dining places.',
		bestFor: 'family restaurants, small cafes, guest houses, and casual dining places',
	},
	{
		label: 'Fine Dining',
		slug: 'fine-dining',
		fonts: ['Playfair+Display:wght@500;600', 'Lora:wght@400;500'],
		path: '/fine-dining',
		icon: 'restaurant',
		theme: 'light',
		title: 'Fine Dining Angular Project Design',
		description:
			'A refined fine dining landing page demo for chef-led restaurants, tasting menu venues, and exclusive culinary experiences with premium presentation.',
		bestFor: 'chef-led restaurants, tasting menu venues, and premium culinary brands',
	},
	{
		label: 'Modern Minimal',
		slug: 'modern-minimal',
		fonts: ['Inter:wght@300;400;500;600'],
		path: '/modern-minimal',
		icon: 'dashboard',
		theme: 'light',
		title: 'Modern Minimal Angular Project Design',
		description:
			'A clean and simple modern minimal landing page demo for contemporary hospitality with premium, focused design and maximum clarity.',
		bestFor: 'modern restaurants, design hotels, minimalist cafes, and focused hospitality brands',
	},
	{
		label: 'Classic Elegant',
		slug: 'classic-elegant',
		fonts: ['Cormorant+Garamond:wght@500;600', 'Lora:wght@400;500'],
		path: '/classic-elegant',
		icon: 'local_bar',
		theme: 'light',
		title: 'Classic Elegant Angular Project Design',
		description:
			'A refined classic elegant landing page demo for premium traditional restaurants, boutique hotels, and private hospitality events.',
		bestFor: 'premium traditional restaurants, boutique hotels, and private hospitality events',
	},
	{
		label: 'Traditional Local',
		slug: 'traditional-local',
		fonts: ['Playfair+Display:wght@600;700', 'Lora:wght@400;500;600'],
		path: '/traditional-local',
		icon: 'local_dining',
		theme: 'light',
		title: 'Traditional Local Angular Project Design',
		description:
			'A warm traditional local landing page demo for national cuisine restaurants, family inns, ethnic cafes, and countryside hospitality places.',
		bestFor: 'national cuisine restaurants, family inns, ethnic cafes, and local hospitality',
	},
	{
		label: 'Event Banquet',
		slug: 'event-banquet',
		fonts: ['Playfair+Display:wght@600;700', 'Lora:wght@400;500'],
		path: '/event-banquet',
		icon: 'celebration',
		theme: 'light',
		title: 'Event Banquet Angular Project Design',
		description:
			'An elegant event banquet landing page demo for wedding venues, banquet halls, conferences, and celebration spaces with refined hospitality focus.',
		bestFor: 'wedding venues, banquet halls, conferences, and celebration spaces',
	},
	{
		label: 'Boutique Hotel',
		slug: 'boutique-hotel',
		fonts: ['Inter:wght@400;500;600'],
		path: '/boutique-hotel',
		icon: 'hotel',
		theme: 'light',
		title: 'Boutique Hotel Angular Project Design',
		description:
			'A stylish boutique hotel landing page demo for design hotels, intimate guesthouses, and personalized city stays with atmospheric, curated hospitality.',
		bestFor: 'design hotels, intimate guesthouses, city stays, and personalized hospitality',
	},
	{
		label: 'Resort Spa',
		slug: 'resort-spa',
		fonts: ['Fraunces:ital,wght@0,500;1,500', 'Inter:wght@400;500;600'],
		path: '/resort-spa',
		icon: 'spa',
		theme: 'light',
		title: 'Resort Spa Angular Project Design',
		description:
			'A serene resort spa landing page demo for wellness hotels, spa sanctuaries, nature retreats, and peaceful hospitality with calming natural aesthetics.',
		bestFor: 'wellness hotels, spa sanctuaries, nature retreats, and resort hospitality',
	},
	{
		label: 'Rustic Farmhouse',
		slug: 'rustic-farmhouse',
		fonts: ['Fraunces:wght@600;700', 'Lora:wght@400;500;600'],
		path: '/rustic-farmhouse',
		icon: 'cottage',
		theme: 'light',
		title: 'Rustic Farmhouse Angular Project Design',
		description:
			'A warm rustic farmhouse landing page demo for countryside restaurants, farmhouse inns, and rural hospitality with honest, farm-to-table character.',
		bestFor: 'farm-to-table restaurants, farmhouse inns, rural stays, and countryside venues',
	},
	{
		label: 'Luxury Dark',
		slug: 'luxury-dark',
		fonts: ['Cormorant+Garamond:wght@500;600;700', 'Lora:wght@400;500'],
		path: '/luxury-dark',
		icon: 'diamond',
		theme: 'dark',
		title: 'Luxury Dark Angular Project Design',
		description:
			'A premium luxury dark landing page demo for exclusive restaurants, high-end lounges, and private luxury venues with dramatic, elegant presentation.',
		bestFor: 'exclusive restaurants, high-end lounges, private clubs, and luxury venues',
	},
	{
		label: 'Speakeasy Cocktail',
		slug: 'speakeasy-cocktail',
		path: '/speakeasy-cocktail',
		icon: 'nightlife',
		theme: 'dark',
		title: 'Speakeasy Cocktail Angular Project Design',
		description:
			'A moody speakeasy cocktail landing page demo for Prohibition-style bars, hidden cocktail rooms, and mixology dens with oxblood, aged brass, and dark-wood atmospherics.',
		bestFor: 'speakeasies, cocktail bars, hidden bars, and mixology dens',
		fonts: ['Playfair+Display:ital,wght@0,500;0,600;0,700;1,500', 'Inter:wght@400;500;600'],
	},
	{
		label: 'Neon Night',
		slug: 'neon-night',
		fonts: ['Bebas+Neue', 'Inter:wght@400;500;600', 'JetBrains+Mono:wght@400;700'],
		path: '/neon-night',
		icon: 'bolt',
		theme: 'dark',
		title: 'Neon Night Angular Project Design',
		description:
			'An electric neon-night landing page demo for late-night izakaya, ramen bars, club-adjacent eateries, and modern Asian fusion venues with magenta and cyan accents on jet black.',
		bestFor: 'late-night izakaya, ramen bars, Asian fusion, and club-adjacent eats',
	},
	{
		label: 'Wine Cellar',
		slug: 'wine-cellar',
		fonts: ['Cormorant+Garamond:ital,wght@0,500;0,600;0,700;1,500', 'Crimson+Text:wght@400;600'],
		path: '/wine-cellar',
		icon: 'wine_bar',
		theme: 'dark',
		title: 'Wine Cellar Angular Project Design',
		description:
			'A candlelit wine cellar landing page demo for wine bars, enotecas, and sommelier-led venues with deep burgundy, parchment, and warm gold atmospherics.',
		bestFor: 'wine bars, enotecas, sommelier-led venues, and tasting rooms',
	},
	{
		label: 'Smokehouse Ember',
		slug: 'smokehouse-ember',
		fonts: ['Bebas+Neue', 'Inter:wght@400;500;600;700'],
		path: '/smokehouse-ember',
		icon: 'local_fire_department',
		theme: 'dark',
		title: 'Smokehouse Ember Angular Project Design',
		description:
			'A smoldering smokehouse landing page demo for steakhouses, BBQ joints, grill houses, and smoked-meat venues with charcoal, ember orange, leather, and bronze atmospherics.',
		bestFor: 'steakhouses, BBQ joints, grill houses, and smoked-meat venues',
	},
	{
		label: 'Industrial Brewery',
		slug: 'industrial-brewery',
		fonts: ['Bebas+Neue', 'Inter:wght@400;500;600;700'],
		path: '/industrial-brewery',
		icon: 'sports_bar',
		theme: 'dark',
		title: 'Industrial Brewery Angular Project Design',
		description:
			'A raw industrial brewery landing page demo for craft breweries, taprooms, gastropubs, and beer halls with concrete gray, iron black, copper, and amber atmospherics.',
		bestFor: 'craft breweries, taprooms, gastropubs, and beer halls',
	},
	{
		label: 'Jazz Lounge',
		slug: 'jazz-lounge',
		fonts: ['Cormorant+Garamond:ital,wght@0,500;0,600;1,500', 'Lora:wght@400;500'],
		path: '/jazz-lounge',
		icon: 'piano',
		theme: 'dark',
		title: 'Jazz Lounge Angular Project Design',
		description:
			'A smooth jazz lounge landing page demo for piano bars, live-music supper clubs, and hotel lounges with midnight blue, plum, brass, and vintage cream atmospherics.',
		bestFor: 'piano bars, live-music supper clubs, hotel lounges, and listening rooms',
	},
	{
		label: 'Dark Roast Coffee',
		slug: 'dark-roast-coffee',
		fonts: ['Fraunces:ital,wght@0,600;0,700;1,600', 'Inter:wght@400;500;600'],
		path: '/dark-roast-coffee',
		icon: 'local_cafe',
		theme: 'dark',
		title: 'Dark Roast Coffee Angular Project Design',
		description:
			'A late-evening dark roast coffee landing page demo for third-wave roasters, evening coffee bars, and dessert cafes with espresso, cocoa, copper, and steamed cream atmospherics.',
		bestFor: 'third-wave roasters, evening coffee bars, and dessert cafes',
	},
	{
		label: 'Omakase Black',
		slug: 'omakase-black',
		fonts: ['Cormorant+Garamond:wght@300;400;500', 'Inter:wght@400;500'],
		path: '/omakase-black',
		icon: 'set_meal',
		theme: 'dark',
		title: 'Omakase Black Angular Project Design',
		description:
			'A precise omakase black landing page demo for sushi omakase counters, kaiseki rooms, and Japanese fine dining with sumi ink, bamboo, lacquer red, and rice-paper atmospherics.',
		bestFor: 'sushi omakase, kaiseki, and Japanese fine dining',
	},
	{
		label: 'Botanical Bar',
		slug: 'botanical-bar',
		fonts: ['Fraunces:ital,wght@0,500;0,600;1,500;1,600', 'Inter:wght@400;500;600'],
		path: '/botanical-bar',
		icon: 'local_florist',
		theme: 'dark',
		title: 'Botanical Bar Angular Project Design',
		description:
			'A botanical bar landing page demo for plant-forward bars, garden restaurants at night, and botanical cocktail rooms with deep forest, brass, terracotta, and cream atmospherics.',
		bestFor: 'plant-forward bars, garden restaurants, and botanical cocktail rooms',
	},
	{
		label: 'Whisky Den',
		slug: 'whisky-den',
		fonts: ['Cinzel:wght@500;600', 'Lora:wght@400;500'],
		path: '/whisky-den',
		icon: 'liquor',
		theme: 'dark',
		title: 'Whisky Den Angular Project Design',
		description:
			'A discreet whisky den landing page demo for whisky bars, cigar lounges, and members-only nightcap rooms with tobacco brown, oxblood, tarnished brass, and parchment atmospherics.',
		bestFor: 'whisky bars, cigar lounges, hotel cigar rooms, and members-only nightcap venues',
	},
	{
		label: 'WAW UI',
		slug: 'ngx-ui',
		path: '/ngx-ui',
		icon: 'dashboard_customize',
		theme: 'light',
		title: 'WAW UI Angular Design System',
		description:
			'A clean, token-driven Angular interface showcase built with @wawjs/ngx-ui primitives for product dashboards, operational tools, and reusable application surfaces.',
		bestFor: 'Angular products, admin tools, dashboards, customer portals, and reusable application UI',
		category: 'waw-ui',
	},
];

/** Designs without a category are complete landing page directions. */
export function isLandingDesign(page: DesignPage): boolean {
	return (page.category ?? 'landing-pages') === 'landing-pages';
}

/** Landing page directions: the light/dark families used by the topbar rotation and the cart. */
export const landingDesignPages = designPages.filter(isLandingDesign);

/** Finds the design whose demo route matches a router URL (query and fragment are ignored). */
export function findDesignByUrl(url: string): DesignPage | null {
	const path = url.split('?')[0].split('#')[0];

	return designPages.find((page) => page.path === path) ?? null;
}

export const footerPageLinks = [
	{
		label: 'Catalog',
		path: '/',
		icon: 'home',
	},
	...designPages,
];
