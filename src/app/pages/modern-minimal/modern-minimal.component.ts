import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

interface Photo {
	src: string;
	alt: string;
	width: number;
	height: number;
}

interface MenuLine {
	name: string;
	price: string;
}

interface MenuGroup {
	title: string;
	lines: MenuLine[];
}

interface Principle {
	title: string;
	text: string;
}

interface Row {
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
	templateUrl: './modern-minimal.component.html',
	styleUrl: './modern-minimal.component.scss',
})
export class ModernMinimalComponent {
	protected readonly heroPhoto = pexels(
		31272224,
		1200,
		800,
		'Minimal cafe interior with a plain wall, wooden tables and one painting',
	);

	protected readonly spacePhotos: Photo[] = [
		pexels(7402627, 600, 800, 'Wooden chairs and tables in a bright, plain dining space'),
		pexels(7402624, 600, 800, 'Rows of wooden chairs by simple tables near a window'),
		pexels(15138577, 600, 800, 'Wooden stools and plants against a large window'),
	];

	protected readonly menu: MenuGroup[] = [
		{
			title: 'Morning',
			lines: [
				{ name: 'Sourdough, cultured butter', price: '6' },
				{ name: 'Soft egg, greens, rye', price: '12' },
				{ name: 'Yoghurt, quince, oats', price: '10' },
			],
		},
		{
			title: 'Midday',
			lines: [
				{ name: 'Miso soup, rice, pickles', price: '14' },
				{ name: 'Roast carrot, tahini, dukkah', price: '16' },
				{ name: 'Grilled mackerel, fennel', price: '22' },
			],
		},
		{
			title: 'Drinks',
			lines: [
				{ name: 'Filter coffee', price: '4' },
				{ name: 'Cortado', price: '4.5' },
				{ name: 'Natural wine, glass', price: '9' },
			],
		},
	];

	protected readonly principles: Principle[] = [
		{ title: 'Few things', text: 'Nine dishes on the menu. Each is cooked every day.' },
		{ title: 'Plain plates', text: 'White ceramic, no garnish that is not eaten.' },
		{ title: 'Quiet room', text: 'No music before 5pm. No screens at the counter.' },
	];

	protected readonly info: Row[] = [
		{ label: 'Address', value: '12 Quay Lane' },
		{ label: 'Open', value: 'Monday to Saturday, 8am to 6pm' },
		{ label: 'Closed', value: 'Sunday' },
		{ label: 'Phone', value: '+1 (555) 010 1212' },
		{ label: 'Email', value: 'hello@example.com' },
	];
}
