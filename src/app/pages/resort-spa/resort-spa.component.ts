import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

interface Photo {
	src: string;
	alt: string;
	width: number;
	height: number;
}

interface Treatment {
	name: string;
	minutes: string;
	price: string;
}

interface TreatmentGroup {
	title: string;
	items: Treatment[];
}

interface Moment {
	time: string;
	title: string;
	text: string;
	photo?: Photo;
}

interface Stay {
	name: string;
	nights: string;
	text: string;
	from: string;
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
	templateUrl: './resort-spa.component.html',
	styleUrl: './resort-spa.component.scss',
})
export class ResortSpaComponent {
	protected readonly heroPhoto = pexels(
		10831652,
		720,
		1000,
		'Aerial view of a pool and loungers beside the sea at a quiet resort',
	);

	protected readonly treatments: TreatmentGroup[] = [
		{
			title: 'Massage and body',
			items: [
				{ name: 'Deep tissue massage', minutes: '60 min', price: '$130' },
				{ name: 'Hot stone massage', minutes: '75 min', price: '$155' },
				{ name: 'Sea salt body scrub', minutes: '45 min', price: '$95' },
				{ name: 'Couples massage', minutes: '60 min', price: '$260' },
			],
		},
		{
			title: 'Face and rest',
			items: [
				{ name: 'Botanical facial', minutes: '50 min', price: '$110' },
				{ name: 'Scalp and shoulder ritual', minutes: '30 min', price: '$75' },
				{ name: 'Float in the warm pool', minutes: '45 min', price: '$40' },
				{ name: 'Guided breathing session', minutes: '40 min', price: '$35' },
			],
		},
	];

	protected readonly day: Moment[] = [
		{
			time: '7:00',
			title: 'Sunrise stretch',
			text: 'A slow group class on the terrace, with tea afterwards.',
		},
		{
			time: '9:30',
			title: 'Breakfast by the water',
			text: 'Fruit, eggs and warm bread, eaten without hurry.',
			photo: pexels(18310489, 800, 600, 'Pool and deck chairs on a terrace facing the mountains'),
		},
		{
			time: '12:00',
			title: 'Your treatment',
			text: 'Book any time between noon and five. Robes and slippers are in your room.',
			photo: pexels(30453695, 800, 600, 'White rose and smooth stones resting on a folded towel'),
		},
		{
			time: '16:00',
			title: 'The quiet pool',
			text: 'Adults only after four. No phones, and no music.',
		},
		{
			time: '19:30',
			title: 'Supper and sleep',
			text: 'A light menu in the garden room, then turn-down at nine.',
		},
	];

	protected readonly stays: Stay[] = [
		{
			name: 'The Rest',
			nights: '2 nights',
			text: 'A garden room, daily breakfast and one 60 minute massage.',
			from: '$480',
		},
		{
			name: 'The Reset',
			nights: '3 nights',
			text: 'A sea-view room, all meals, two treatments and daily classes.',
			from: '$960',
		},
		{
			name: 'The Retreat',
			nights: '5 nights',
			text: 'A pool suite, all meals, five treatments and a private consultation.',
			from: '$1,880',
		},
	];

	protected readonly poolPhotos: Photo[] = [
		pexels(10610438, 800, 600, 'Plush loungers and umbrellas beside the pool'),
		pexels(6129987, 800, 600, 'Calm pool with wooden huts and hills behind'),
	];

	protected readonly closingPhoto = pexels(
		38907978,
		1400,
		620,
		'Quiet pool at sunrise with the sea behind it',
	);
}
