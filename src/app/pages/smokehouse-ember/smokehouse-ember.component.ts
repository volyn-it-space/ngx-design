import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

interface Photo {
	src: string;
	alt: string;
	width: number;
	height: number;
}

interface Cut {
	name: string;
	wood: string;
	hours: string;
	price: string;
}

interface SmokeStep {
	title: string;
	time: string;
	text: string;
	photo: Photo;
}

interface PricedLine {
	name: string;
	note: string;
	price: string;
}

interface Sauce {
	name: string;
	note: string;
}

interface VisitLine {
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
	templateUrl: './smokehouse-ember.component.html',
	styleUrl: './smokehouse-ember.component.scss',
})
export class SmokehouseEmberComponent {
	protected readonly heroPhoto = pexels(
		37179548,
		1200,
		514,
		'Meat grilling over glowing coals on a barbecue pit',
	);

	protected readonly cuts: Cut[] = [
		{ name: 'Beef brisket', wood: 'Post oak', hours: '14 hours', price: '$17' },
		{ name: 'Beef short rib', wood: 'Post oak', hours: '9 hours', price: '$24' },
		{ name: 'Pork spare ribs', wood: 'Hickory', hours: '6 hours', price: '$14' },
		{ name: 'Pulled pork shoulder', wood: 'Hickory', hours: '12 hours', price: '$12' },
		{ name: 'Turkey breast', wood: 'Cherry', hours: '4 hours', price: '$13' },
		{ name: 'Jalapeno cheddar sausage', wood: 'Post oak', hours: '3 hours', price: '$9' },
	];

	protected readonly steps: SmokeStep[] = [
		{
			title: 'Rub',
			time: '20 minutes',
			text: 'Coarse salt and cracked black pepper, nothing else. The meat goes on cold.',
			photo: pexels(10201880, 600, 450, 'Raw beef with coarse salt and herbs on a wooden board'),
		},
		{
			title: 'Smoke',
			time: '14 hours',
			text: 'Over split post oak at 250 degrees. The fire is fed by hand every 40 minutes.',
			photo: pexels(36799182, 600, 450, 'Meat over open flames in a barbecue pit'),
		},
		{
			title: 'Rest',
			time: '2 hours',
			text: 'Wrapped in butcher paper and held warm, so the juice stays in the meat.',
			photo: pexels(13068565, 600, 450, 'Hands holding a smoked brisket over a wooden board'),
		},
		{
			title: 'Slice',
			time: 'To order',
			text: 'Cut against the grain at the counter when you order. Never ahead of time.',
			photo: pexels(12645502, 600, 450, 'Hand slicing smoked beef brisket on a cutting board'),
		},
	];

	protected readonly sidesPhoto = pexels(
		8251356,
		800,
		1000,
		'Grilled ribs and corn with bowls of sauce on a wooden board',
	);

	protected readonly sides: PricedLine[] = [
		{ name: 'Burnt-end beans', note: 'pinto beans, brisket trim', price: '$6' },
		{ name: 'Vinegar slaw', note: 'cabbage, carrot, celery seed', price: '$5' },
		{ name: 'Skillet cornbread', note: 'honey butter', price: '$6' },
		{ name: 'Mac and cheese', note: 'sharp cheddar, smoked crumb', price: '$7' },
		{ name: 'Potato salad', note: 'mustard, dill pickle', price: '$5' },
		{ name: 'Pickles and onions', note: 'made in house', price: '$3' },
	];

	protected readonly sauces: Sauce[] = [
		{ name: 'House red', note: 'tomato, molasses, black pepper' },
		{ name: 'Gold', note: 'yellow mustard, cider vinegar' },
		{ name: 'Pepper vinegar', note: 'thin, sharp, for pork' },
		{ name: 'Ember', note: 'smoked chili, the hot one' },
	];

	protected readonly roomPhoto = pexels(
		34723813,
		1200,
		800,
		'Dimly lit restaurant table set with glasses and folded napkins',
	);

	protected readonly visit: VisitLine[] = [
		{ label: 'Tuesday to Thursday', value: '5pm to 10pm' },
		{ label: 'Friday and Saturday', value: '12pm to 11pm' },
		{ label: 'Sunday', value: '12pm to 8pm' },
		{ label: 'Monday', value: 'Closed. The pit gets cleaned.' },
		{ label: 'Address', value: '412 Iron Street, The Yards' },
	];
}
