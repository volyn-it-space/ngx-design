import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

interface Photo {
	src: string;
	alt: string;
	width: number;
	height: number;
}

interface DaySpecial {
	day: string;
	dish: string;
	price: string;
}

interface FamilyFact {
	title: string;
	text: string;
}

interface Hours {
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
	templateUrl: './cozy-family.component.html',
	styleUrl: './cozy-family.component.scss',
})
export class CozyFamilyComponent {
	protected readonly heroPhotos: Photo[] = [
		pexels(9543813, 800, 560, 'Hands reaching for slices of pizza on a restaurant table'),
		pexels(35453229, 560, 700, 'Pizza, pasta and tiramisu on a red checkered tablecloth'),
		pexels(33313542, 640, 480, 'Friends sharing pizza and pasta at a corner table'),
	];

	protected readonly week: DaySpecial[] = [
		{ day: 'Mon', dish: 'Spaghetti and meatballs', price: '$12' },
		{ day: 'Tue', dish: 'Chicken pot pie', price: '$13' },
		{ day: 'Wed', dish: 'Baked ziti, garlic bread', price: '$12' },
		{ day: 'Thu', dish: 'Fish and chips', price: '$14' },
		{ day: 'Fri', dish: 'Build your own pizza', price: '$11' },
		{ day: 'Sat', dish: 'Slow roast, three sides', price: '$16' },
		{ day: 'Sun', dish: 'Family platter, serves four', price: '$48' },
	];

	protected readonly facts: FamilyFact[] = [
		{
			title: 'Kids eat for $6',
			text: 'Any kids plate comes with a drink and a scoop of ice cream. Free for under threes.',
		},
		{
			title: 'High chairs and crayons',
			text: 'Six high chairs, two booster seats, and a paper tablecloth to draw on.',
		},
		{
			title: 'Order from your seat',
			text: 'We bring little plates first, so nobody waits hungry for the grown-up food.',
		},
	];

	protected readonly factPhoto = pexels(
		6223233,
		640,
		800,
		'Hands sharing Italian dishes across a family table',
	);

	protected readonly storyPhoto = pexels(
		28871009,
		640,
		800,
		'Shared dishes of mussels and bread on a long table',
	);

	protected readonly hours: Hours[] = [
		{ days: 'Monday to Thursday', hours: '11:30 to 21:00' },
		{ days: 'Friday and Saturday', hours: '11:30 to 22:00' },
		{ days: 'Sunday', hours: '11:00 to 20:00' },
	];
}
