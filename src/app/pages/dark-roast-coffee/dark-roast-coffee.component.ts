import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DesignExperience } from '../design-page.types';

@Component({
	imports: [RouterLink],
	templateUrl: './dark-roast-coffee.component.html',
	styleUrl: './dark-roast-coffee.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DarkRoastCoffeeComponent {
	protected readonly signatures: DesignExperience[] = [
		{
			title: 'Ethiopia · Yirgacheffe',
			description: 'Washed. Jasmine, bergamot, soft stone fruit.',
			detail: 'Pour-over $7 · 250g bag $22',
		},
		{
			title: 'Colombia · Las Margaritas',
			description: 'Honey process. Cocoa, dried plum, brown sugar.',
			detail: 'Pour-over $6 · 250g bag $20',
		},
		{
			title: 'Kenya · Nyeri AA',
			description: 'Washed. Black currant, tomato leaf, lively acidity.',
			detail: 'Pour-over $8 · 250g bag $24',
		},
	];

	protected readonly experiencePoints: string[] = [
		'Bar program rotates weekly. Single-origin espresso changes monthly.',
		'Brew bar in the back — pour-over, V60, Aeropress, and batch. Ask for a recipe card.',
		'Dessert pairings from neighbours Patisserie Lune. Six options nightly.',
	];
}
