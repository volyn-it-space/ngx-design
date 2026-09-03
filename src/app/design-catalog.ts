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
	},
] as const satisfies ReadonlyArray<{
	id: DesignCategory;
	label: string;
	description: string;
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
	},
	{
		label: 'Neon Night',
		slug: 'neon-night',
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

export const footerPageLinks = [
	{
		label: 'Catalog',
		path: '/',
		icon: 'home',
	},
	...designPages,
];
