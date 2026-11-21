import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

interface Photo {
	src: string;
	alt: string;
	width: number;
	height: number;
}

interface Ticket {
	no: string;
	name: string;
	note: string;
	price: string;
	tag: string;
	hot: boolean;
}

interface DayBlock {
	day: string;
	close: string;
	note: string;
	late: boolean;
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
	templateUrl: './neon-night.component.html',
	styleUrl: './neon-night.component.scss',
})
export class NeonNightComponent {
	protected readonly heroPhoto = pexels(
		1510610,
		800,
		900,
		'Narrow city alley on a rainy night, lit by pink and red neon signs',
	);

	protected readonly tickets: Ticket[] = [
		{ no: '01', name: 'Tonkotsu black', note: 'pork broth, black garlic oil, soft egg', price: '$17', tag: 'house bowl', hot: false },
		{ no: '02', name: 'Spicy miso', note: 'chili paste, ground pork, sesame', price: '$18', tag: 'spicy', hot: true },
		{ no: '03', name: 'Shoyu classic', note: 'chicken broth, soy, bamboo, nori', price: '$15', tag: 'light', hot: false },
		{ no: '04', name: 'Yuzu shio', note: 'clear salt broth, yuzu peel, chicken', price: '$16', tag: 'citrus', hot: false },
		{ no: '05', name: 'Tantan dry', note: 'no broth, sesame, chili oil, peanuts', price: '$16', tag: 'spicy', hot: true },
		{ no: '06', name: 'Mushroom miso', note: 'kelp broth, king oyster, corn, tofu', price: '$16', tag: 'vegan', hot: false },
		{ no: '07', name: 'Gyoza, six', note: 'pork and chive, pan fried', price: '$8', tag: 'side', hot: false },
		{ no: '08', name: 'Karaage', note: 'fried chicken thigh, lemon, mayo', price: '$9', tag: 'side', hot: false },
		{ no: '09', name: 'Extra noodles', note: 'a second portion in your broth', price: '$3', tag: 'add on', hot: false },
		{ no: '10', name: 'Soft egg', note: 'soy marinated, six minute', price: '$2', tag: 'add on', hot: false },
		{ no: '11', name: 'Whisky highball', note: 'Japanese whisky, soda, lemon', price: '$10', tag: 'drink', hot: false },
		{ no: '12', name: 'Draft lager', note: 'cold, 400 ml', price: '$7', tag: 'drink', hot: false },
	];

	protected readonly week: DayBlock[] = [
		{ day: 'Mon', close: 'Closed', note: 'broth day', late: false },
		{ day: 'Tue', close: '2am', note: 'from 6pm', late: false },
		{ day: 'Wed', close: '2am', note: 'from 6pm', late: false },
		{ day: 'Thu', close: '2am', note: 'from 6pm', late: false },
		{ day: 'Fri', close: '4am', note: 'from 6pm', late: true },
		{ day: 'Sat', close: '4am', note: 'from 6pm', late: true },
		{ day: 'Sun', close: '12am', note: 'from 5pm', late: false },
	];

	protected readonly signPhoto = pexels(
		32789231,
		600,
		800,
		'Glowing izakaya sign hanging over a dark street at night',
	);

	protected readonly counterStrip: Photo[] = [
		pexels(31264126, 600, 450, 'Bowl of ramen with a soft egg, scallions and chopsticks on top'),
		pexels(16671603, 600, 450, 'Chopsticks lifting noodles from a ramen bowl against a black background'),
		pexels(1907229, 600, 450, 'Noodle soup with sliced beef and scallions in a dark bowl'),
	];

	protected readonly streetPhoto = pexels(
		37129828,
		900,
		600,
		'Small izakaya storefront glowing on a dark street at night',
	);
}
