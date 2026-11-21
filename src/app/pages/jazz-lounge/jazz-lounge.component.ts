import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

interface Photo {
	src: string;
	alt: string;
	width: number;
	height: number;
}

interface Night {
	day: string;
	act: string;
	style: string;
	cover: string;
	featured: boolean;
}

interface SupperGroup {
	title: string;
	lines: { name: string; price: string }[];
}

interface Fact {
	value: string;
	label: string;
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
	templateUrl: './jazz-lounge.component.html',
	styleUrl: './jazz-lounge.component.scss',
})
export class JazzLoungeComponent {
	protected readonly heroPhoto = pexels(
		9419224,
		900,
		600,
		'Jazz band with a singer, pianist and saxophonist on a dim stage',
	);

	protected readonly tonight = {
		act: 'The Marguerite Quartet',
		style: 'Hard bop and ballads',
		sets: 'Sets at 8:00 and 9:45',
		cover: 'Cover $15, free for diners',
	};

	protected readonly week: Night[] = [
		{ day: 'Tuesday', act: 'Open jam, house trio', style: 'All welcome', cover: 'Free', featured: false },
		{ day: 'Wednesday', act: 'Dalia Reyes Duo', style: 'Piano and voice', cover: '$10', featured: false },
		{ day: 'Thursday', act: 'The Marguerite Quartet', style: 'Hard bop', cover: '$15', featured: false },
		{ day: 'Friday', act: 'Big Room Septet', style: 'Swing and blues', cover: '$20', featured: true },
		{ day: 'Saturday', act: 'Tobias Kane Organ Trio', style: 'Soul jazz', cover: '$20', featured: true },
		{ day: 'Sunday', act: 'Brunch set, solo guitar', style: 'Standards', cover: 'Free', featured: false },
	];

	protected readonly saxPhoto = pexels(
		1358816,
		600,
		800,
		'Saxophonist playing on stage in a jazz club',
	);

	protected readonly supper: SupperGroup[] = [
		{
			title: 'To start',
			lines: [
				{ name: 'Oysters, six, mignonette', price: '$21' },
				{ name: 'Burrata, blistered tomato', price: '$14' },
				{ name: 'Smoked trout toast', price: '$13' },
			],
		},
		{
			title: 'To follow',
			lines: [
				{ name: 'Roast chicken, garlic jus', price: '$28' },
				{ name: 'Seared duck, cherry, farro', price: '$34' },
				{ name: 'Mushroom risotto', price: '$24' },
			],
		},
		{
			title: 'After the set',
			lines: [
				{ name: 'Pecan tart, bourbon cream', price: '$11' },
				{ name: 'Affogato', price: '$9' },
				{ name: 'Cheese, three kinds', price: '$16' },
			],
		},
	];

	protected readonly roomPhotos: Photo[] = [
		pexels(7518778, 800, 600, 'Black leather stools at a softly lit bar'),
		pexels(9419374, 800, 600, 'Band and singer performing in a dim club'),
	];

	protected readonly roomFacts: Fact[] = [
		{ value: '60', label: 'seats' },
		{ value: '12', label: 'stools at the bar' },
		{ value: '8 pm', label: 'first set' },
	];
}
