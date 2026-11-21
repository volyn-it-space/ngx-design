import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

interface Photo {
	src: string;
	alt: string;
	width: number;
	height: number;
}

interface Room {
	name: string;
	size: string;
	text: string;
	from: string;
	photo: Photo;
}

interface Place {
	name: string;
	note: string;
	walk: string;
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
	templateUrl: './boutique-hotel.component.html',
	styleUrl: './boutique-hotel.component.scss',
})
export class BoutiqueHotelComponent {
	protected readonly heroPhoto = pexels(
		37734643,
		720,
		1000,
		'Bright hotel room with a made bed, a plain wall and a large window',
	);

	protected readonly stay: Fact[] = [
		{ label: 'Check-in', value: 'from 3pm' },
		{ label: 'Check-out', value: 'until 11am' },
		{ label: 'Rooms', value: '24' },
		{ label: 'Neighbourhood', value: 'Old Harbour' },
	];

	protected readonly rooms: Room[] = [
		{
			name: 'The Single',
			size: '18 sq m',
			text: 'A quiet room on the courtyard side with a double bed, a desk and a rain shower.',
			from: '$140',
			photo: pexels(7746092, 900, 600, 'Hotel bedroom with a double bed and geometric wallpaper'),
		},
		{
			name: 'The Harbour Double',
			size: '28 sq m',
			text: 'Tall windows over the water, a soft headboard, and a bath beside the bed.',
			from: '$210',
			photo: pexels(14547138, 900, 600, 'Beige hotel room with a tufted headboard and soft light'),
		},
		{
			name: 'The Suite',
			size: '46 sq m',
			text: 'A bedroom, a sitting room and a terrace. Breakfast is served on the terrace.',
			from: '$340',
			photo: pexels(39836703, 900, 600, 'Hotel suite in neutral tones with rustic decor'),
		},
	];

	protected readonly places: Place[] = [
		{ name: 'Fish Market Hall', note: 'Oysters and coffee at 7am.', walk: '3 min' },
		{ name: 'Customs House Gallery', note: 'Free on Thursday evenings.', walk: '5 min' },
		{ name: 'Pier Bakery', note: 'The best cardamom bun in the city.', walk: '6 min' },
		{ name: 'Lantern Street', note: 'Small shops and record stores.', walk: '8 min' },
		{ name: 'Harbour Walk', note: 'Two kilometres of promenade.', walk: '2 min' },
	];

	protected readonly amenities: string[] = [
		'Breakfast from 7:30 to 10:30',
		'Free fast Wi-Fi',
		'Rooftop reading room',
		'Bicycles to borrow',
		'Laundry service',
		'Late check-out on request',
		'Dogs welcome',
		'24-hour front desk',
	];

	protected readonly lobbyPhoto = pexels(
		15717924,
		640,
		800,
		'Bedroom with white bedding and a stone wall',
	);
}
