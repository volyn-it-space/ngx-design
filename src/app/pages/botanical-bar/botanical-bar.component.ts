import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

interface Photo {
	src: string;
	alt: string;
	width: number;
	height: number;
}

interface Drink {
	name: string;
	ingredients: string;
	price: string;
}

interface Family {
	name: string;
	note: string;
	drinks: Drink[];
}

interface Fact {
	label: string;
	value: string;
}

/** Pexels serves a cropped copy at exactly this size, so `width` / `height` match the file. */
const pexels = (id: number, width: number, height: number, alt: string): Photo => ({
	src: `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=${width}&h=${height}`,
	alt,
	width,
	height,
});

@Component({
	imports: [RouterLink, NgOptimizedImage],
	templateUrl: './botanical-bar.component.html',
	styleUrl: './botanical-bar.component.scss',
})
export class BotanicalBarComponent {
	protected readonly heroPhoto = pexels(
		7259034,
		800,
		900,
		'Cocktail with dried orange slices and rosemary on a dark table',
	);

	protected readonly heroRound = pexels(
		5933207,
		480,
		480,
		'Hand holding a sprig of rosemary over a cocktail in a coupe glass',
	);

	protected readonly families: Family[] = [
		{
			name: 'Herb',
			note: 'Green, sharp, cooling',
			drinks: [
				{ name: 'Thyme and Tonic', ingredients: 'gin, thyme syrup, tonic', price: '$14' },
				{ name: 'Basil Smash', ingredients: 'gin, basil, lemon, sugar', price: '$15' },
				{ name: 'Rosemary Collins', ingredients: 'vodka, rosemary, lemon, soda', price: '$14' },
			],
		},
		{
			name: 'Flower',
			note: 'Soft, floral, a little sweet',
			drinks: [
				{ name: 'Elderflower Fizz', ingredients: 'elderflower, prosecco, lime', price: '$15' },
				{ name: 'Violet Hour', ingredients: 'gin, violet liqueur, lemon', price: '$16' },
				{ name: 'Hibiscus Sour', ingredients: 'tequila, hibiscus, lime, egg white', price: '$16' },
			],
		},
		{
			name: 'Root',
			note: 'Earthy, warm, bitter',
			drinks: [
				{ name: 'Beet and Bitter', ingredients: 'rye, beet, amaro, orange', price: '$16' },
				{ name: 'Ginger Mule', ingredients: 'vodka, fresh ginger, lime', price: '$14' },
				{ name: 'Carrot Top', ingredients: 'aquavit, carrot, honey, dill', price: '$15' },
			],
		},
	];

	protected readonly gardenPhoto = pexels(
		8105035,
		640,
		800,
		'Cocktail on ice with sliced strawberry and thyme',
	);

	protected readonly plants: string[] = [
		'Thyme',
		'Rosemary',
		'Lemon verbena',
		'Mint',
		'Basil',
		'Borage',
		'Nasturtium',
		'Sage',
		'Chive blossom',
		'Lavender',
	];

	protected readonly seasonPhotos: Photo[] = [
		pexels(36701440, 800, 600, 'Cocktail garnished with edible flowers and fresh herbs'),
		pexels(36701442, 800, 600, 'Sparkling cocktail in a flute with a floral garnish'),
	];

	protected readonly visit: Fact[] = [
		{ label: 'Address', value: '2 Glasshouse Lane, behind the flower market' },
		{ label: 'Hours', value: 'Wednesday to Sunday, 4pm to midnight' },
		{ label: 'Garden', value: 'Open seating from May to October, weather allowing' },
		{ label: 'No alcohol', value: 'Each family has a spirit-free drink at $9' },
	];
}
