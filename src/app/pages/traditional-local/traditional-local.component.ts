import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

interface Photo {
	src: string;
	alt: string;
	width: number;
	height: number;
}

interface Dish {
	name: string;
	text: string;
	price: string;
	photo: Photo;
}

interface Milestone {
	year: string;
	text: string;
}

interface Supplier {
	name: string;
	gives: string;
	distance: string;
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
	templateUrl: './traditional-local.component.html',
	styleUrl: './traditional-local.component.scss',
})
export class TraditionalLocalComponent {
	protected readonly heroPhoto = pexels(
		35221046,
		720,
		900,
		'Basket of fresh bread beside a stone fireplace',
	);

	protected readonly dishes: Dish[] = [
		{
			name: 'Harvest soup in a bread bowl',
			text: 'Root vegetables and smoked bacon, served in a loaf baked that morning.',
			price: '$13',
			photo: pexels(14197869, 700, 500, 'Thick soup served in a hollowed bread bowl with butter'),
		},
		{
			name: 'Pot-roast of the house',
			text: 'Beef shoulder braised six hours with onions, paprika and a little red wine.',
			price: '$24',
			photo: pexels(20718417, 700, 500, 'Pots of food simmering over a large wood stove'),
		},
		{
			name: 'Hearth loaf with butter',
			text: 'Rye and wheat sourdough baked in the stone oven, with salted butter.',
			price: '$7',
			photo: pexels(15582506, 700, 500, 'Freshly baked loaf in a wicker basket by the fireplace'),
		},
		{
			name: 'Village flatbread',
			text: 'Baked on the oven floor and brushed with garlic, dill and sour cream.',
			price: '$9',
			photo: pexels(9430112, 700, 500, 'Woman taking traditional bread out of a village oven'),
		},
	];

	protected readonly timeline: Milestone[] = [
		{ year: '1952', text: 'Marta opens a bakery in the front room of the family house.' },
		{ year: '1971', text: 'The stone oven is built, and the first dinners are served at two tables.' },
		{ year: '1998', text: 'The second generation moves the kitchen into the old hay barn.' },
		{ year: '2019', text: 'The third generation restores the hearth and writes the recipes down.' },
	];

	protected readonly suppliers: Supplier[] = [
		{ name: 'Brenner Mill', gives: 'rye and wheat flour', distance: '6 km' },
		{ name: 'Hollow Farm', gives: 'milk, butter and sour cream', distance: '9 km' },
		{ name: 'Stoyan Smokehouse', gives: 'bacon and sausage', distance: '14 km' },
		{ name: 'Valley Orchard', gives: 'apples and plums', distance: '18 km' },
	];

	protected readonly roomPhoto = pexels(
		35165071,
		600,
		800,
		'Dining room with a wood-burning stove and two guests at a table',
	);

	protected readonly visit: Fact[] = [
		{ label: 'Address', value: '3 Mill Road, at the edge of the village' },
		{ label: 'Hours', value: 'Wednesday to Sunday, noon to 9pm' },
		{ label: 'Tables', value: 'Long tables for groups of up to 20' },
		{ label: 'Take-away', value: 'Hearth loaves from 9am, until they run out' },
	];
}
