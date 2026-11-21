import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

interface Photo {
	src: string;
	alt: string;
	width: number;
	height: number;
}

interface Course {
	name: string;
	note: string;
}

interface Numeral {
	value: string;
	label: string;
}

interface Policy {
	title: string;
	text: string;
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
	templateUrl: './omakase-black.component.html',
	styleUrl: './omakase-black.component.scss',
})
export class OmakaseBlackComponent {
	protected readonly heroPhoto = pexels(
		27581083,
		1200,
		560,
		'Sushi chef preparing sashimi at a restaurant counter',
	);

	protected readonly courses: Course[] = [
		{ name: 'Chawanmushi', note: 'steamed egg custard, crab, ginkgo' },
		{ name: 'Sashimi of the day', note: 'three cuts, fresh wasabi' },
		{ name: 'Simmered dish', note: 'turnip, dashi, yuzu peel' },
		{ name: 'Akami', note: 'lean bluefin, soy cured' },
		{ name: 'Chutoro', note: 'medium fatty tuna' },
		{ name: 'Kohada', note: 'gizzard shad, vinegar cured' },
		{ name: 'Kuruma ebi', note: 'prawn, warm from the pot' },
		{ name: 'Uni', note: 'sea urchin from Hokkaido' },
		{ name: 'Anago', note: 'sea eel, brushed with tsume' },
		{ name: 'Tamago and miso soup', note: 'the last course, always' },
	];

	protected readonly counterPhotos: Photo[] = [
		pexels(28992204, 900, 600, 'Salmon nigiri on a black plate'),
		pexels(30682753, 600, 800, 'Chef shaping a piece of nigiri at the counter'),
		pexels(6144968, 900, 600, 'Sushi arranged on a black slate tray with chopsticks'),
	];

	protected readonly numerals: Numeral[] = [
		{ value: '8', label: 'seats at the counter' },
		{ value: '2', label: 'seatings each night' },
		{ value: '90', label: 'minutes per seating' },
	];

	protected readonly policies: Policy[] = [
		{
			title: 'Reserve by phone',
			text: 'Seats are released on the first of each month for the month after.',
		},
		{
			title: 'Arrive on time',
			text: 'The first piece is served at the hour. We cannot hold your seat after ten minutes.',
		},
		{
			title: 'Tell us about allergies',
			text: 'Please say so when you book. We cannot change the menu on the night.',
		},
		{
			title: 'Cancel 48 hours ahead',
			text: 'Later cancellations are charged half the menu price.',
		},
	];
}
