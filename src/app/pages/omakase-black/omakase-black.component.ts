import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DesignExperience } from '../design-page.types';

@Component({
	imports: [RouterLink],
	templateUrl: './omakase-black.component.html',
	styleUrl: './omakase-black.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OmakaseBlackComponent {
	protected readonly signatures: DesignExperience[] = [
		{
			title: '01 · Hassun',
			description: "Seasonal opener, six small bites of what's at market this week.",
			detail: "Chef's selection",
		},
		{
			title: '06 · Nigiri Flight',
			description:
				'Nine pieces, individually shaped, individually served — pace set by Chef Hayashi.',
			detail: 'Counter only',
		},
		{
			title: '10 · Closing Course',
			description: 'Tamago, miso, a single piece of sweet from the patissier.',
			detail: 'Sittings 6pm and 9pm',
		},
	];

	protected readonly experiencePoints: string[] = [
		'Counter omakase only. No à la carte, no menu, one set price per evening.',
		'Reservations open the 1st of each month for the following month.',
		'Deposit required at booking. Cancellations less than 48 hours forfeit the deposit.',
	];
}
