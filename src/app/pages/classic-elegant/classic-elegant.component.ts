import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

interface Photo {
	src: string;
	alt: string;
	width: number;
	height: number;
}

interface CarteLine {
	name: string;
	note: string;
	price: string;
}

interface CarteSection {
	title: string;
	lines: CarteLine[];
}

interface Fact {
	value: string;
	label: string;
}

interface Detail {
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
	templateUrl: './classic-elegant.component.html',
	styleUrl: './classic-elegant.component.scss',
})
export class ClassicElegantComponent {
	protected readonly heroPhoto = pexels(
		31372786,
		1100,
		620,
		'Formal dining room with chandeliers and tables set with white linen',
	);

	protected readonly carte: CarteSection[] = [
		{
			title: 'To begin',
			lines: [
				{ name: 'Consomme de volaille', note: 'clear chicken broth, tarragon', price: '$14' },
				{ name: 'Smoked salmon', note: 'blini, creme fraiche, chive', price: '$19' },
				{ name: 'Escargots', note: 'garlic and parsley butter', price: '$17' },
				{ name: 'Pate de campagne', note: 'cornichons, toasted brioche', price: '$16' },
			],
		},
		{
			title: 'To follow',
			lines: [
				{ name: 'Sole meuniere', note: 'brown butter, lemon, capers', price: '$44' },
				{ name: 'Roast rack of lamb', note: 'rosemary jus, dauphinoise', price: '$52' },
				{ name: 'Coq au vin', note: 'red wine, lardons, mushrooms', price: '$34' },
				{ name: 'Filet of beef', note: 'bearnaise, pommes frites', price: '$56' },
			],
		},
	];

	protected readonly diningPhotos: Photo[] = [
		pexels(5157829, 900, 600, 'Private dining room with decorated tables and chandeliers'),
		pexels(1123248, 600, 800, 'Long formal table with a floral centerpiece and wine glasses'),
	];

	protected readonly roomFacts: Fact[] = [
		{ value: '24', label: 'seated at one table' },
		{ value: '40', label: 'for a standing reception' },
		{ value: '1', label: 'dedicated maitre d' },
	];

	protected readonly historyPhoto = pexels(
		33089298,
		600,
		800,
		'Dining room with classic lighting and marble floor',
	);

	protected readonly details: Detail[] = [
		{ label: 'Hours', value: 'Tuesday to Sunday, noon to 2:30pm and 6pm to 10pm' },
		{ label: 'Address', value: '8 Regent Square, ground floor' },
		{ label: 'Dress', value: 'Jackets for gentlemen. Smart dress for all guests.' },
		{ label: 'Wine', value: 'A cellar of 600 bottles, with a list at the door' },
	];
}
