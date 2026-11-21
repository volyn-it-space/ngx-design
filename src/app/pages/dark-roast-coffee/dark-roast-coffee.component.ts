import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

interface Photo {
	src: string;
	alt: string;
	width: number;
	height: number;
}

interface Bean {
	name: string;
	origin: string;
	altitude: string;
	process: string;
	notes: string;
	price: string;
}

interface BrewRow {
	method: string;
	time: string;
	size: string;
	price: string;
}

interface RoastDay {
	day: string;
	roast: string;
}

interface Cup {
	name: string;
	note: string;
	price: string;
	photo: Photo;
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
	templateUrl: './dark-roast-coffee.component.html',
	styleUrl: './dark-roast-coffee.component.scss',
})
export class DarkRoastCoffeeComponent {
	protected readonly heroPhoto = pexels(
		25482765,
		800,
		800,
		'Black coffee in a cup surrounded by roasted beans, seen from above',
	);

	protected readonly beans: Bean[] = [
		{
			name: 'Night Porter',
			origin: 'Brazil, Mogiana',
			altitude: '1,100 m',
			process: 'natural',
			notes: 'dark chocolate, roasted hazelnut, low acidity',
			price: '$17',
		},
		{
			name: 'Cinder Lane',
			origin: 'Sumatra, Gayo',
			altitude: '1,400 m',
			process: 'wet-hulled',
			notes: 'cedar, cocoa nib, brown sugar',
			price: '$19',
		},
		{
			name: 'Slow Burn',
			origin: 'Colombia, Huila',
			altitude: '1,750 m',
			process: 'washed',
			notes: 'black cherry, molasses, a little spice',
			price: '$20',
		},
	];

	protected readonly brewBar: BrewRow[] = [
		{ method: 'Espresso', time: '30 sec', size: '36 g in, 2 oz', price: '$3.50' },
		{ method: 'Pour-over', time: '3 min', size: '12 oz', price: '$5.00' },
		{ method: 'Aeropress', time: '2 min', size: '10 oz', price: '$4.75' },
		{ method: 'Cold brew', time: '18 hours', size: '12 oz', price: '$5.00' },
	];

	protected readonly brewPhotos: Photo[] = [
		pexels(20513594, 800, 533, 'Hot water poured over coffee in a pour-over dripper'),
		pexels(13240965, 533, 800, 'Barista making pour-over coffee at the counter'),
	];

	protected readonly roastDays: RoastDay[] = [
		{ day: 'Tue', roast: 'Night Porter' },
		{ day: 'Wed', roast: 'Cinder Lane' },
		{ day: 'Thu', roast: 'Slow Burn' },
		{ day: 'Fri', roast: 'Night Porter' },
		{ day: 'Sat', roast: 'Single origin, ask' },
	];

	protected readonly cups: Cup[] = [
		{
			name: 'Double espresso',
			note: 'Night Porter, with a small glass of sparkling water.',
			price: '$4.50',
			photo: pexels(20066398, 700, 700, 'Espresso cup among scattered coffee beans'),
		},
		{
			name: 'Flat white',
			note: 'Cinder Lane and steamed whole milk.',
			price: '$5.00',
			photo: pexels(25482736, 700, 700, 'Steaming cup of coffee on roasted beans'),
		},
		{
			name: 'Slow Burn filter',
			note: 'Brewed to order, refilled once, free.',
			price: '$4.00',
			photo: pexels(14679164, 700, 700, 'Hot water poured into a coffee dripper in a cafe'),
		},
	];

	protected readonly visit: Fact[] = [
		{ label: 'Address', value: '18 Smelter Street, by the old tram depot' },
		{ label: 'Hours', value: 'Tuesday to Sunday, 7am to 5pm' },
		{ label: 'Beans', value: 'Whole or ground, 250 g bags. Ground to order.' },
		{ label: 'Wi-Fi', value: 'Yes. Laptops until 2pm on weekends.' },
	];
}
