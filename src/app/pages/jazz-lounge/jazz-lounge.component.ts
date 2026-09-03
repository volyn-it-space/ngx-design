import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DesignExperience } from '../design-page.types';

@Component({
	imports: [RouterLink],
	templateUrl: './jazz-lounge.component.html',
	styleUrl: './jazz-lounge.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class JazzLoungeComponent {
	protected readonly signatures: DesignExperience[] = [
		{
			title: 'Wednesday · The Mara Quartet',
			description: 'Standards and originals, two sets at 8 and 10.',
			detail: 'Cover $15 · Dinner reservation recommended',
		},
		{
			title: 'Thursday · Solo Piano',
			description: 'Quiet, slow tempo, dinner accompaniment by Tomás Reyes.',
			detail: 'No cover · Reservation recommended',
		},
		{
			title: 'Friday · Trio + Vocalist',
			description: 'Late set runs to 1am — request hour from 11pm.',
			detail: 'Cover $20 · Reservations open Monday',
		},
	];

	protected readonly experiencePoints: string[] = [
		'Dinner service ends at 10pm. Drinks and small plates until close.',
		'Booth reservations include the full set. Bar seats walk-in only.',
		'Requests welcomed during the late set. Please tip the band.',
	];
}
