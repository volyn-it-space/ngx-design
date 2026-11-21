import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

interface Photo {
	src: string;
	alt: string;
	width: number;
	height: number;
}

interface OvenSlot {
	time: string;
	bakes: string;
	note: string;
}

interface MenuLine {
	name: string;
	note: string;
	price: string;
}

interface MenuColumn {
	title: string;
	lines: MenuLine[];
}

interface CounterPhoto {
	photo: Photo;
	shape: 'wide' | 'tall';
}

interface OpeningHours {
	days: string;
	hours: string;
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
	templateUrl: './cafe-bakery.component.html',
	styleUrl: './cafe-bakery.component.scss',
})
export class CafeBakeryComponent {
	protected readonly heroPhoto = pexels(
		4906454,
		1200,
		600,
		'Bakery counter in daylight with shelves of pastries and sweet bakes',
	);

	protected readonly ovenSlots: OvenSlot[] = [
		{
			time: '7:00',
			bakes: 'Butter croissants and pain au chocolat',
			note: 'Shaped the evening before, baked as the door opens.',
		},
		{
			time: '9:00',
			bakes: 'Country sourdough and seeded rye',
			note: 'A two-day dough. Ask and we will slice it for you.',
		},
		{
			time: '11:30',
			bakes: 'Cinnamon buns and cardamom knots',
			note: 'Still warm at lunch. Usually gone by two.',
		},
		{
			time: '14:00',
			bakes: 'Rosemary focaccia and oat cookies',
			note: 'The last bake of the day, in time for the school run.',
		},
	];

	protected readonly menuColumns: MenuColumn[] = [
		{
			title: 'Coffee',
			lines: [
				{ name: 'Espresso', note: 'double shot', price: '$3.00' },
				{ name: 'Flat white', note: 'whole or oat milk', price: '$4.25' },
				{ name: 'Latte', note: 'hot or iced', price: '$4.75' },
				{ name: 'Filter coffee', note: 'one free refill', price: '$3.50' },
				{ name: 'Hot chocolate', note: 'made with real chocolate', price: '$4.50' },
				{ name: 'Pot of tea', note: 'breakfast, earl grey or mint', price: '$3.75' },
			],
		},
		{
			title: 'Bakes',
			lines: [
				{ name: 'Butter croissant', note: 'plain', price: '$3.75' },
				{ name: 'Pain au chocolat', note: 'two bars of dark chocolate', price: '$4.25' },
				{ name: 'Cinnamon bun', note: 'with a little icing', price: '$4.50' },
				{ name: 'Cardamom knot', note: 'pearl sugar on top', price: '$4.25' },
				{ name: 'Focaccia slice', note: 'rosemary and sea salt', price: '$5.00' },
				{ name: 'Country sourdough', note: 'whole loaf', price: '$8.50' },
			],
		},
	];

	protected readonly counterTop: CounterPhoto[] = [
		{
			photo: pexels(5964496, 900, 600, 'Golden croissants cooling on a baking tray'),
			shape: 'wide',
		},
		{
			photo: pexels(18699459, 600, 800, 'Cappuccino on a wooden table in morning sunlight'),
			shape: 'tall',
		},
	];

	protected readonly counterBottom: CounterPhoto[] = [
		{
			photo: pexels(4640863, 600, 800, 'Cinnamon buns and rustic loaves on a wooden tray'),
			shape: 'tall',
		},
		{
			photo: pexels(30826792, 800, 600, 'Round sourdough loaves lined up on a bakery shelf'),
			shape: 'wide',
		},
		{
			photo: pexels(20310533, 600, 800, 'Bright cafe corner with wooden chairs and a large plant'),
			shape: 'tall',
		},
	];

	protected readonly visitPhoto = pexels(
		12743256,
		600,
		800,
		'Three cappuccinos with latte art on round marble cafe tables',
	);

	protected readonly openingHours: OpeningHours[] = [
		{ days: 'Monday', hours: 'Closed' },
		{ days: 'Tuesday to Friday', hours: '7:00 to 16:00' },
		{ days: 'Saturday', hours: '7:30 to 16:00' },
		{ days: 'Sunday', hours: '8:00 to 14:00' },
	];
}
