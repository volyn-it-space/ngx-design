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

interface Pairing {
	course: string;
	wine: string;
	region: string;
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
	templateUrl: './fine-dining.component.html',
	styleUrl: './fine-dining.component.scss',
})
export class FineDiningComponent {
	protected readonly heroPhoto = pexels(
		28052916,
		1200,
		560,
		'Plated seafood course with crab claws and delicate garnish on a white plate',
	);

	protected readonly courses: Course[] = [
		{ name: 'Oyster, cucumber, dill', note: 'cold, to open the evening' },
		{ name: 'Langoustine, brown butter', note: 'lightly warmed, with sorrel' },
		{ name: 'Celeriac, black truffle', note: 'baked in salt, shaved at the table' },
		{ name: 'Turbot, champagne sauce', note: 'with leeks and a little caviar' },
		{ name: 'Duck, cherry, beetroot', note: 'aged for twelve days' },
		{ name: 'Aged cheese, honeycomb', note: 'from a farm 20 km away' },
		{ name: 'Dark chocolate, olive oil', note: 'with sea salt and a quenelle of cream' },
	];

	protected readonly kitchenPhoto = pexels(
		30469692,
		800,
		600,
		'Gourmet plated dishes on a set table in natural light',
	);

	protected readonly pairings: Pairing[] = [
		{ course: 'Oyster, langoustine', wine: 'Chablis Premier Cru', region: 'Burgundy' },
		{ course: 'Celeriac, turbot', wine: 'Meursault', region: 'Burgundy' },
		{ course: 'Duck, cheese', wine: 'Saint-Julien', region: 'Bordeaux' },
		{ course: 'Chocolate', wine: 'Banyuls', region: 'Roussillon' },
	];

	protected readonly platePhotos: Photo[] = [
		pexels(29220386, 700, 500, 'Creative gourmet presentation on a white plate'),
		pexels(6428972, 700, 500, 'Plated shrimp starter with fresh microgreens'),
	];

	protected readonly details: Fact[] = [
		{ label: 'Seatings', value: 'Tuesday to Saturday, 6:30pm and 8:45pm' },
		{ label: 'Address', value: '5 Linden Court, first floor' },
		{ label: 'Dress', value: 'Smart. Jackets are welcome but not required.' },
		{ label: 'Allergies', value: 'Tell us when you book and we will plan around them.' },
	];
}
