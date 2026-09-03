import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DesignExperience } from '../design-page.types';

@Component({
	imports: [RouterLink],
	templateUrl: './smokehouse-ember.component.html',
	styleUrl: './smokehouse-ember.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SmokehouseEmberComponent {
	protected readonly signatures: DesignExperience[] = [
		{
			title: 'Dry-Aged Ribeye',
			description: '45-day aged, 14oz, salt-and-fat crust, bone-in, served pink.',
			detail: '$58 · serves 1',
		},
		{
			title: 'House Brisket',
			description: 'Hickory-smoked 14 hrs, fat cap intact, served on butcher paper.',
			detail: '$32 · half lb',
		},
		{
			title: 'Iron-Skillet Pork Chop',
			description: 'Heritage breed, charred over coals, apple-mustard glaze.',
			detail: '$36 · 12oz',
		},
	];

	protected readonly experiencePoints: string[] = [
		'Pit fired on hickory and post-oak. Brisket and ribs start at 6am.',
		'House dry-age cabinet on view from the dining room — typical 35–60 days.',
		'Steaks served at temperature requested. Modifications limited to keep the program honest.',
	];
}
