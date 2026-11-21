import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

interface Photo {
	src: string;
	alt: string;
	width: number;
	height: number;
}

interface Tap {
	no: string;
	beer: string;
	style: string;
	abv: string;
	price: string;
}

interface Numeral {
	value: string;
	label: string;
}

interface TourStep {
	title: string;
	text: string;
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
	templateUrl: './industrial-brewery.component.html',
	styleUrl: './industrial-brewery.component.scss',
})
export class IndustrialBreweryComponent {
	protected readonly heroPhoto = pexels(
		5530263,
		1200,
		500,
		'Row of beer tap handles at a taproom bar in warm light',
	);

	protected readonly taps: Tap[] = [
		{ no: '01', beer: 'Foundry Pale', style: 'American pale ale', abv: '5.2%', price: '$7' },
		{ no: '02', beer: 'Rivet IPA', style: 'West coast IPA', abv: '6.8%', price: '$8' },
		{ no: '03', beer: 'Slag Stout', style: 'Oatmeal stout', abv: '5.9%', price: '$8' },
		{ no: '04', beer: 'Iron Lager', style: 'Helles', abv: '4.8%', price: '$7' },
		{ no: '05', beer: 'Copper Kettle', style: 'Amber ale', abv: '5.5%', price: '$7' },
		{ no: '06', beer: 'Night Shift', style: 'Porter', abv: '6.0%', price: '$8' },
		{ no: '07', beer: 'Hazy Furnace', style: 'New England IPA', abv: '7.1%', price: '$9' },
		{ no: '08', beer: 'Dry Cider', style: 'Local apples', abv: '5.0%', price: '$7' },
	];

	protected readonly numerals: Numeral[] = [
		{ value: '12', label: 'taps, all brewed on site' },
		{ value: '40', label: 'barrels in the cellar' },
		{ value: '3', label: 'hours from grain to glass fermenter' },
	];

	protected readonly beerPhoto = pexels(
		5530251,
		700,
		900,
		'Glass of beer and a beer menu on a taproom table',
	);

	protected readonly tour: TourStep[] = [
		{
			title: 'The brew floor',
			text: 'Walk between the mash tun and the kettle, and taste the sweet wort.',
		},
		{
			title: 'The cellar',
			text: 'Fermenters, barrels and a sour program, with a sample from the tank.',
		},
		{
			title: 'The taproom',
			text: 'Finish with a flight of four beers and a pretzel.',
		},
	];

	protected readonly pairingPhotos: Photo[] = [
		pexels(12360540, 700, 500, 'Copper beer tap handles lined up at a bar'),
		pexels(5858036, 700, 500, 'Two polished beer taps with wood behind them'),
		pexels(5530258, 700, 500, 'Three ornate beer taps in a dim bar'),
	];

	protected readonly visit: Fact[] = [
		{ label: 'Address', value: '4 Foundry Yard, next to the rail bridge' },
		{ label: 'Hours', value: 'Wednesday to Sunday, 3pm to 11pm' },
		{ label: 'Growlers', value: 'Fill a 64 oz bottle for $18, any tap' },
		{ label: 'Tours', value: 'Saturday at 1pm and 3pm, 45 minutes' },
	];
}
