import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DesignExperience, DesignGalleryItem } from '../design-page.types';

@Component({
	imports: [RouterLink],
	templateUrl: './fine-dining.component.html',
	styleUrl: './fine-dining.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FineDiningComponent {
	protected readonly experiences: DesignExperience[] = [
		{
			title: 'Tasting Menu',
			description:
				'A carefully curated journey through eight to twelve courses, each paired with specific wines. A showcase of technique, creativity, and the finest seasonal ingredients sourced from trusted artisans.',
			detail: 'Eight to twelve courses, seasonal focus, plated artistry',
		},
		{
			title: 'Wine Pairing',
			description:
				'Our sommelier pairs each course with carefully selected wines. A global collection emphasizing small producers, heritage vineyards, and rare vintages that elevate every moment.',
			detail: 'Curated selections, sommelier guidance, rare vintages',
		},
		{
			title: 'Private Dining',
			description:
				'An intimate space designed for your most important moments. Chef\'s table service, bespoke menus, and dedicated attention create an unforgettable culinary experience.',
			detail: 'Chef interaction, bespoke menus, dedicated service',
		},
	];

	protected readonly galleryItems: DesignGalleryItem[] = [
		{
			title: 'Plated artistry',
			label: 'Precision, technique, visual composition',
		},
		{
			title: 'Seasonal harvest',
			label: 'Fresh ingredients, ethical sourcing, peak flavor',
		},
		{
			title: 'Wine collection',
			label: 'Rare vintages, global selection, heritage',
		},
		{
			title: 'Chef at work',
			label: 'Craft, precision, culinary mastery',
		},
	];
}
