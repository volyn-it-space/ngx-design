import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DesignExperience } from '../design-page.types';

@Component({
	imports: [RouterLink],
	templateUrl: './whisky-den.component.html',
	styleUrl: './whisky-den.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WhiskyDenComponent {
	protected readonly signatures: DesignExperience[] = [
		{
			title: 'Highland · 21 Years',
			description: 'Single malt. Heather, oak, soft peat finish.',
			detail: '30ml $42 · 60ml $80',
		},
		{
			title: 'Islay · 18 Years',
			description: 'Peated. Maritime smoke, iodine, lemon peel.',
			detail: '30ml $48 · 60ml $92',
		},
		{
			title: 'Speyside · 25 Years',
			description: 'Sherry-cask. Dried fruit, leather, polished oak.',
			detail: '30ml $65 · 60ml $124',
		},
	];

	protected readonly experiencePoints: string[] = [
		'Library access by reservation. Members keep a personal locker.',
		'Cigars available with a 24-hour pre-order. Pairing notes provided at the table.',
		'Jacket preferred after 8pm. Quiet conversation, please.',
	];
}
