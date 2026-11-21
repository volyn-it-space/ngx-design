import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

interface Photo {
	src: string;
	alt: string;
	width: number;
	height: number;
}

interface Dram {
	name: string;
	age: string;
	cask: string;
	price: string;
}

interface Region {
	name: string;
	note: string;
	drams: Dram[];
}

interface Flight {
	name: string;
	text: string;
	price: string;
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
	templateUrl: './whisky-den.component.html',
	styleUrl: './whisky-den.component.scss',
})
export class WhiskyDenComponent {
	protected readonly heroPhoto = pexels(
		17541188,
		1200,
		640,
		'Bar with rows of whisky bottles on black shelves in low light',
	);

	protected readonly regions: Region[] = [
		{
			name: 'Speyside',
			note: 'Orchard fruit, honey, sherry casks',
			drams: [
				{ name: 'Glen Arran 12', age: '12 years', cask: 'ex-sherry', price: '$14' },
				{ name: 'Balvenie Doublewood', age: '14 years', cask: 'oak and sherry', price: '$18' },
				{ name: 'Aberlour Abunadh', age: 'no age', cask: 'oloroso, cask strength', price: '$22' },
			],
		},
		{
			name: 'Islay',
			note: 'Peat smoke, sea salt, iodine',
			drams: [
				{ name: 'Laphroaig 10', age: '10 years', cask: 'ex-bourbon', price: '$15' },
				{ name: 'Lagavulin 16', age: '16 years', cask: 'refill', price: '$26' },
				{ name: 'Ardbeg Uigeadail', age: 'no age', cask: 'sherry and bourbon', price: '$21' },
			],
		},
		{
			name: 'Highlands and islands',
			note: 'Heather, dried fruit, light smoke',
			drams: [
				{ name: 'Oban 14', age: '14 years', cask: 'refill', price: '$19' },
				{ name: 'Highland Park 18', age: '18 years', cask: 'sherry', price: '$32' },
			],
		},
		{
			name: 'Japan',
			note: 'Quiet, floral, a little spice',
			drams: [
				{ name: 'Yamazaki 12', age: '12 years', cask: 'mizunara', price: '$34' },
				{ name: 'Hakushu Reserve', age: 'no age', cask: 'mixed', price: '$17' },
			],
		},
	];

	protected readonly flights: Flight[] = [
		{
			name: 'The Speyside primer',
			text: 'Three 25 ml drams from one region, young to old.',
			price: '$38',
		},
		{
			name: 'The peat ladder',
			text: 'From a light Islay to a heavy one, with a square of dark chocolate.',
			price: '$44',
		},
		{
			name: 'Around the world',
			text: 'Scotland, Japan and Ireland side by side, with water and a pipette.',
			price: '$48',
		},
	];

	protected readonly shelfPhoto = pexels(
		29392061,
		900,
		600,
		'Premium whisky bottles on a dimly lit display shelf',
	);

	protected readonly flightPhoto = pexels(
		29475749,
		640,
		800,
		'Whisky bottle and two glasses on a wooden tray',
	);

	protected readonly loungePhotos: Photo[] = [
		pexels(20105884, 800, 533, 'Whisky glass and a cigar on a wooden table'),
		pexels(7253705, 800, 533, 'Close-up of a whisky bottle with amber light behind it'),
	];

	protected readonly houseFacts: Fact[] = [
		{ label: 'Bottles on the wall', value: '240' },
		{ label: 'Seats in the lounge', value: '28' },
		{ label: 'Smallest pour', value: '25 ml' },
	];

	protected readonly visit: Fact[] = [
		{ label: 'Address', value: '9 Distillery Row, down the steps' },
		{ label: 'Hours', value: 'Tuesday to Sunday, 5pm to midnight' },
		{ label: 'Dress', value: 'Come as you are. No sports shirts at the bar.' },
		{ label: 'Bookings', value: 'Lounge tables for two to six, by phone' },
	];
}
