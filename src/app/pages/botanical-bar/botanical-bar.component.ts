import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DesignExperience } from '../design-page.types';

@Component({
	imports: [RouterLink],
	templateUrl: './botanical-bar.component.html',
	styleUrl: './botanical-bar.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BotanicalBarComponent {
	protected readonly signatures: DesignExperience[] = [
		{
			title: 'The Hothouse',
			description: 'Tarragon-infused gin, lemon verbena, dry vermouth, basil oil.',
			detail: '$16',
		},
		{
			title: 'Smoke + Salvia',
			description: 'Mezcal, salvia tincture, pineapple shrub, salted rim.',
			detail: '$17',
		},
		{
			title: 'Garden Negroni',
			description: 'Genepy, vermouth, gin, rosemary, smoked rosemary garnish.',
			detail: '$15',
		},
	];

	protected readonly experiencePoints: string[] = [
		'Cocktail menu changes with what the garden is producing — six rotating signatures.',
		'Foraged garnishes from partner growers — list available on request.',
		'Garden tour 6pm Saturdays, complimentary with a reservation.',
	];
}
