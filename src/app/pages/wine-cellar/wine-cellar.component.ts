import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DesignExperience } from '../design-page.types';

@Component({
	imports: [RouterLink],
	templateUrl: './wine-cellar.component.html',
	styleUrl: './wine-cellar.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WineCellarComponent {
	protected readonly signatures: DesignExperience[] = [
		{
			title: 'Piemonte · Barolo',
			description: 'Nebbiolo, 2018. Tar and rose, a tannic spine that opens slowly.',
			detail: 'Glass $28 · Bottle $140',
		},
		{
			title: 'Burgundy · Premier Cru',
			description: 'Pinot Noir, 2019. Red fruit, forest floor, a long quiet finish.',
			detail: 'Glass $32 · Bottle $180',
		},
		{
			title: 'Mosel · Riesling Trocken',
			description: 'Dry Riesling, 2021. Slate, white peach, mineral spine, brisk acidity.',
			detail: 'Glass $18 · Bottle $80',
		},
	];

	protected readonly experiencePoints: string[] = [
		'Two flights changed weekly — Old World Reds, Champagne House, Orange & Skin-Contact.',
		'Sommelier Mara Bianchi consults at the table for guests who want a walkthrough.',
		'Corkage available, $30 per bottle, two-bottle limit, no duplicates.',
	];
}
