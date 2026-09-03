import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DesignExperience, DesignGalleryItem } from '../design-page.types';

@Component({
	imports: [RouterLink],
	templateUrl: './luxury-dark.component.html',
	styleUrl: './luxury-dark.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LuxuryDarkComponent {
	protected readonly experiences: DesignExperience[] = [
		{
			title: 'Fine Dining',
			description:
				'An intimate culinary experience where every course is a masterpiece. Private tables, sommelier service, and bespoke menus craft an unforgettable evening of refined luxury.',
			detail: 'Private seating, chef interaction, wine selection',
		},
		{
			title: 'Luxury Rooms',
			description:
				'Exquisitely designed suites with premium furnishings, private amenities, and meticulous attention to every detail. A sanctuary of comfort and elegance.',
			detail: 'Premium bedding, private spa, personalized service',
		},
		{
			title: 'Private Lounge',
			description:
				'An exclusive members-only space for those seeking the highest level of privacy and discretion. Curated experiences, bespoke service, and uncompromising luxury.',
			detail: 'Members only, concierge service, exclusive events',
		},
	];

	protected readonly galleryItems: DesignGalleryItem[] = [
		{
			title: 'The private dining room',
			label: 'Intimate tables, gold accents, exclusive ambiance',
		},
		{
			title: 'Premium suite',
			label: 'Luxury furnishings, panoramic views, ultimate comfort',
		},
		{
			title: 'Members lounge',
			label: 'Elegant decor, private bar, sophisticated retreat',
		},
		{
			title: 'Signature cocktails',
			label: 'Craft mixology, rare spirits, impeccable service',
		},
	];
}
