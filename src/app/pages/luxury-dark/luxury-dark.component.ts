import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

interface Photo {
	src: string;
	alt: string;
	width: number;
	height: number;
}

interface PrivateRoom {
	name: string;
	seats: string;
	purpose: string;
	terms: string;
	photo: Photo;
}

interface MenuItem {
	name: string;
	note: string;
	price: string;
}

interface ConciergeService {
	title: string;
	text: string;
}

interface VisitDetail {
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
	templateUrl: './luxury-dark.component.html',
	styleUrl: './luxury-dark.component.scss',
})
export class LuxuryDarkComponent {
	protected readonly heroPhoto = pexels(
		39268201,
		1200,
		514,
		'Restaurant dining room at night with set tables under warm ambient lighting',
	);

	protected readonly rooms: PrivateRoom[] = [
		{
			name: 'The Meridian Room',
			seats: '12 seats at one oval table',
			purpose:
				'For board dinners and family occasions. The room has its own door from the lift lobby and one captain for the whole evening.',
			terms: 'Minimum spend $2,400',
			photo: pexels(
				34723813,
				900,
				600,
				'Dimly lit dining table set with wine glasses and folded napkins',
			),
		},
		{
			name: 'The Card Room',
			seats: '6 seats, low chairs',
			purpose:
				'For the hour after dinner. Leather chairs, a glass table, digestifs from the trolley and a door that closes.',
			terms: 'Minimum spend $600',
			photo: pexels(
				9207416,
				900,
				600,
				'Leather chairs around a glass table in a lounge with dark wood panelling',
			),
		},
		{
			name: 'The Cellar Table',
			seats: '8 seats among 1,400 bottles',
			purpose:
				'For tasting dinners. The head sommelier opens each bottle at the table and pours it against the course it was chosen for.',
			terms: 'From $290 per guest',
			photo: pexels(39478699, 900, 600, 'Row of dusty vintage wine bottles in a dim cellar'),
		},
	];

	protected readonly dishPhoto = pexels(24246212, 800, 450, 'Roast quail served on a black plate');

	protected readonly menu: MenuItem[] = [
		{ name: 'Oscietra caviar', note: 'buckwheat blini, cultured cream', price: '$95' },
		{ name: 'Hand-dived scallop', note: 'brown butter, finger lime', price: '$38' },
		{ name: 'Roast quail', note: 'black garlic, charred leek', price: '$52' },
		{ name: 'Dry-aged beef rib, for two', note: 'bone marrow sauce, pressed potato', price: '$160' },
		{ name: 'Dark chocolate tart', note: 'smoked salt, creme fraiche', price: '$24' },
	];

	protected readonly services: ConciergeService[] = [
		{
			title: 'A car, both ways',
			text: 'A driver collects your party and waits. Ask when you reserve, or by 3pm on the day.',
		},
		{
			title: 'Flowers for the table',
			text: 'Arranged by our florist to your brief and in the room an hour before you arrive.',
		},
		{
			title: 'Cellar selections',
			text: 'The sommelier sends a short list ahead. Chosen bottles are decanted before you sit down.',
		},
		{
			title: 'A menu for the evening',
			text: 'The kitchen writes a menu around your guests, with allergies and preferences noted in advance.',
		},
		{
			title: 'A private arrival',
			text: 'The side entrance on Meridian Row and a separate lift, for guests who prefer not to be seen.',
		},
		{
			title: 'One account',
			text: 'A single invoice after the evening. No bill is brought to the table.',
		},
	];

	protected readonly barPhoto = pexels(
		7518778,
		720,
		900,
		'Row of black leather bar stools at a softly lit bar',
	);

	protected readonly details: VisitDetail[] = [
		{ label: 'Address', value: '11 Meridian Row, eleventh floor. Ask for the floor at the desk.' },
		{ label: 'Hours', value: 'Tuesday to Saturday, 6pm to 1am. Kitchen closes at 10:30pm.' },
		{ label: 'Dress', value: 'Jacket for dinner. No sportswear.' },
		{ label: 'Changes', value: 'Private rooms can be moved or released up to 72 hours ahead.' },
	];
}
