import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DesignExperience } from '../design-page.types';

@Component({
	imports: [RouterLink],
	templateUrl: './neon-night.component.html',
	styleUrl: './neon-night.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NeonNightComponent {
	protected readonly signatures: DesignExperience[] = [
		{
			title: 'tonkotsu noir',
			description:
				'Pork bone broth simmered 18 hrs, charred negi, soft egg, black garlic oil.',
			detail: '$18 · spice 2/5',
		},
		{
			title: 'yuzu highball',
			description: 'Japanese whisky, yuzu cordial, soda, cracked ice, citrus skin.',
			detail: 'ABV 14% · $14',
		},
		{
			title: 'spicy miso ramen',
			description: 'Fermented chili paste, ground pork, scallion, sesame, hand-pulled noodles.',
			detail: '$19 · spice 4/5',
		},
	];

	protected readonly experiencePoints: string[] = [
		'Kitchen open until 2am. Bar until 3.',
		'No reservations. Counter and table seating, first come.',
		"Tonight's set: DJ from 11pm. Monthly takeovers — see schedule.",
	];
}
