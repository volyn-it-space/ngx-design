import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DesignExperience } from '../design-page.types';

@Component({
	imports: [RouterLink],
	templateUrl: './industrial-brewery.component.html',
	styleUrl: './industrial-brewery.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IndustrialBreweryComponent {
	protected readonly signatures: DesignExperience[] = [
		{
			title: '01 · Concrete Pilsner',
			description: 'German Pils. Saaz hops. Crisp, dry, drinkable.',
			detail: 'ABV 4.8% · IBU 38 · $7/12oz · $10/16oz',
		},
		{
			title: '04 · Iron Stout',
			description: 'Foreign export stout. Roasted barley, dark cocoa, dry finish.',
			detail: 'ABV 7.2% · IBU 42 · $8/12oz · $11/16oz',
		},
		{
			title: '07 · Copper IPA',
			description: 'West Coast IPA. Citra, Centennial, Simcoe. Bitter, citrus, resin.',
			detail: 'ABV 6.8% · IBU 65 · $8/12oz · $11/16oz',
		},
	];

	protected readonly experiencePoints: string[] = [
		'10 taps on rotation. Tap list updated daily — see signage above the bar.',
		'Growler and crowler fills available during service. Bring your own clean container, $2 off.',
		'Brewhouse tour Saturdays at 3pm. Free with a pint.',
	];
}
