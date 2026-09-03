import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DesignExperience, DesignGalleryItem } from '../design-page.types';

@Component({
	imports: [RouterLink],
	templateUrl: './rustic-farmhouse.component.html',
	styleUrl: './rustic-farmhouse.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RusticFarmhouseComponent {
	protected readonly experiences: DesignExperience[] = [
		{
			title: 'Local Kitchen',
			description:
				'Our kitchen celebrates what grows in the surrounding countryside. Simple preparations, honest flavors, and recipes passed down through generations create meals that taste like home.',
			detail: 'Farm-to-table, seasonal menus, traditional recipes',
		},
		{
			title: 'Country Rooms',
			description:
				'Cozy bedrooms with natural wood, soft linens, and warmth. Each room carries the character of our farmhouse, designed for genuine rest and peaceful countryside mornings.',
			detail: 'Wood beams, handmade furnishings, countryside views',
		},
		{
			title: 'Seasonal Gatherings',
			description:
				'We welcome families and friends to gather around our tables. From harvest celebrations to intimate dinners, create memories in spaces designed for connection and shared meals.',
			detail: 'Group dining, communal tables, special events',
		},
	];

	protected readonly galleryItems: DesignGalleryItem[] = [
		{
			title: 'The farmhouse kitchen',
			label: 'Wood counters, cast iron, honest cooking',
		},
		{
			title: 'Morning at the table',
			label: 'Fresh bread, local produce, slow breakfast',
		},
		{
			title: 'Country bedroom',
			label: 'Natural wood, handmade quilts, peaceful rest',
		},
		{
			title: 'Harvest celebration',
			label: 'Shared table, seasonal abundance, togetherness',
		},
	];
}
