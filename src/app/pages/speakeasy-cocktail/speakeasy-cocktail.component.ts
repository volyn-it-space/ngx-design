import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DesignExperience } from '../design-page.types';

@Component({
	imports: [RouterLink],
	templateUrl: './speakeasy-cocktail.component.html',
	styleUrl: './speakeasy-cocktail.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SpeakeasyCocktailComponent {
	protected readonly signatures: DesignExperience[] = [
		{
			title: 'Old Library Daiquiri',
			description: 'Rum aged in oak, lime cordial, demerara, a whisper of orgeat.',
			detail: 'ABV 28% · $16',
		},
		{
			title: "Bookkeeper's Negroni",
			description: 'Fat-washed gin, vermouth della casa, amaro, lemon oil.',
			detail: 'ABV 30% · $18',
		},
		{
			title: 'The 1929',
			description: 'Rye, vintage cognac, absinthe rinse, sugar cube, citrus.',
			detail: 'ABV 32% · $22',
		},
	];

	protected readonly experiencePoints: string[] = [
		'Curated cocktail menu refreshed each quarter by the head bartender.',
		'Counter seating for guests who prefer to watch the work.',
		'Reservations by appointment. Walk-ins after 11pm if a stool is open.',
	];
}
