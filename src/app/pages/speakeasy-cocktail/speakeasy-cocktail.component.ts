import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

interface Photo {
	src: string;
	alt: string;
	width: number;
	height: number;
}

interface HousePour {
	name: string;
	ingredients: string;
	price: string;
	photo: Photo;
}

interface CardLine {
	name: string;
	ingredients: string;
	price: string;
}

interface HouseRule {
	title: string;
	text: string;
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
	templateUrl: './speakeasy-cocktail.component.html',
	styleUrl: './speakeasy-cocktail.component.scss',
})
export class SpeakeasyCocktailComponent {
	protected readonly heroPhoto = pexels(
		5371913,
		800,
		1040,
		'Back bar with rows of bottles lit by a stained glass window',
	);

	protected readonly housePours: HousePour[] = [
		{
			name: 'The 1929',
			ingredients: 'rye, vintage cognac, absinthe rinse, sugar cube',
			price: '$22',
			photo: pexels(8551445, 600, 750, 'Hand holding a whiskey cocktail in a cut crystal glass'),
		},
		{
			name: "Bookkeeper's Negroni",
			ingredients: 'fat-washed gin, house vermouth, amaro, orange oil',
			price: '$18',
			photo: pexels(
				29707925,
				600,
				750,
				'Stirred cocktail over ice with an orange peel on a dark bar counter',
			),
		},
		{
			name: 'Old Library Daiquiri',
			ingredients: 'oak-aged rum, lime cordial, demerara, lemon twist',
			price: '$16',
			photo: pexels(29707918, 600, 750, 'Cocktail served up with a lemon twist on a dim bar'),
		},
	];

	protected readonly cardLines: CardLine[] = [
		{ name: 'Ledger Sour', ingredients: 'bourbon, lemon, egg white, port float', price: '$17' },
		{ name: 'Night Clerk', ingredients: 'mezcal, sweet vermouth, cacao, salt', price: '$18' },
		{ name: 'Back Stairs', ingredients: 'gin, dry sherry, celery bitters', price: '$16' },
		{ name: 'Quiet Car', ingredients: 'aged rum, coffee, cardamom, cream', price: '$17' },
		{ name: 'Paper Trail', ingredients: 'scotch, honey, ginger, smoked lemon', price: '$19' },
		{ name: 'Dry County', ingredients: 'seedlip, verjus, tonic, thyme (no alcohol)', price: '$12' },
	];

	protected readonly roomPhoto = pexels(
		10177682,
		1200,
		800,
		'Bartender pouring whiskey behind a dim, wood-panelled bar',
	);

	protected readonly roomFacts: { value: string; label: string }[] = [
		{ value: '24', label: 'seats, never more' },
		{ value: '7', label: 'stools at the counter' },
		{ value: '1', label: 'candle on every table' },
	];

	protected readonly roomStrip: Photo[] = [
		pexels(4667024, 600, 450, 'Bartender stirring a cocktail with a long bar spoon'),
		pexels(6174011, 600, 450, 'Cocktail poured from a shaker into a glass on the counter'),
		pexels(6531482, 600, 450, 'Two glasses on a bar counter under low red light'),
	];

	protected readonly houseRules: HouseRule[] = [
		{
			title: 'Book ahead',
			text: 'Tables are held for two hours. Walk-ins are welcome after 11pm if a stool is open.',
		},
		{
			title: 'Keep it low',
			text: 'The room is small. Speak as you would in a library, and take calls outside.',
		},
		{
			title: 'No standing',
			text: 'Everyone gets a seat, so the bartenders can look after every glass.',
		},
		{
			title: 'Ask the bar',
			text: 'Not on the card? Name a spirit and a mood, and we will make something for you.',
		},
	];
}
