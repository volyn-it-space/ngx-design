import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

interface Photo {
	src: string;
	alt: string;
	width: number;
	height: number;
}

interface Hall {
	name: string;
	seated: string;
	standing: string;
	size: string;
	from: string;
	photo: Photo;
}

interface Package {
	name: string;
	from: string;
	includes: string[];
}

interface Step {
	title: string;
	text: string;
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
	templateUrl: './event-banquet.component.html',
	styleUrl: './event-banquet.component.scss',
})
export class EventBanquetComponent {
	protected readonly heroPhoto = pexels(
		14636319,
		1200,
		560,
		'Banquet hall with round tables set for an event under soft lighting',
	);

	protected readonly capacity: Fact[] = [
		{ value: '320', label: 'guests seated in the largest hall' },
		{ value: '3', label: 'halls under one roof' },
		{ value: '120', label: 'cars in the private car park' },
	];

	protected readonly halls: Hall[] = [
		{
			name: 'The Grand Hall',
			seated: '320',
			standing: '450',
			size: '620 sq m',
			from: '$6,800',
			photo: pexels(36028895, 600, 450, 'Grand hall with chandeliers and round banquet tables'),
		},
		{
			name: 'The Timber Room',
			seated: '140',
			standing: '200',
			size: '280 sq m',
			from: '$3,400',
			photo: pexels(30838286, 600, 450, 'Banquet hall with a wooden ceiling and round tables'),
		},
		{
			name: 'The Stone Cellar',
			seated: '60',
			standing: '90',
			size: '120 sq m',
			from: '$1,600',
			photo: pexels(5812870, 600, 450, 'Stone-walled room with wooden chairs and tables'),
		},
	];

	protected readonly packages: Package[] = [
		{
			name: 'Gathering',
			from: '$55',
			includes: ['Three-course dinner', 'House wine and soft drinks', 'Hall for six hours'],
		},
		{
			name: 'Celebration',
			from: '$85',
			includes: ['Four-course dinner', 'Open bar for four hours', 'Florals and linens', 'Event host'],
		},
		{
			name: 'Gala',
			from: '$130',
			includes: [
				'Five-course dinner with pairings',
				'Open bar all evening',
				'Stage, sound and lighting',
				'Dedicated planner',
			],
		},
	];

	protected readonly tablePhotos: Photo[] = [
		pexels(3376765, 700, 480, 'Round tables with floral centerpieces ready for a large event'),
		pexels(14646752, 700, 480, 'Dining tables with flowers and candles set for a private function'),
	];

	protected readonly steps: Step[] = [
		{ title: 'Enquire', text: 'Tell us the date, the guest count and the occasion.' },
		{ title: 'Visit', text: 'Walk the halls with our planner and taste the menu.' },
		{ title: 'Plan', text: 'We agree a menu, a layout and a timetable in writing.' },
		{ title: 'Celebrate', text: 'Our team sets up, runs the evening and clears away.' },
	];
}
