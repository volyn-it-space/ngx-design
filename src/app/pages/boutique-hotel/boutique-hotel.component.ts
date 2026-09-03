import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DesignExperience, DesignGalleryItem } from '../design-page.types';

@Component({
	imports: [RouterLink],
	templateUrl: './boutique-hotel.component.html',
	styleUrl: './boutique-hotel.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BoutiqueHotelComponent {
	protected readonly experiences: DesignExperience[] = [
		{
			title: 'Designer Rooms',
			description:
				'Each room is individually curated with locally sourced furnishings, thoughtful details, and a distinct personality. Minimal, warm, and designed for complete comfort.',
			detail: 'Unique layouts, local artistry, premium bedding',
		},
		{
			title: 'Local Breakfast',
			description:
				'Start your morning with fresh ingredients from nearby markets. Seasonal menus crafted by our chef, served in our intimate dining space with genuine warmth.',
			detail: 'Market-fresh, seasonal menus, coffee service',
		},
		{
			title: 'Personal Service',
			description:
				'Our small team knows your name and your preferences. From arrival to departure, we create a deeply personal experience that feels like visiting a friend\'s home.',
			detail: 'Attentive staff, bespoke recommendations, local expertise',
		},
	];

	protected readonly galleryItems: DesignGalleryItem[] = [
		{
			title: 'Suite serenity',
			label: 'Thoughtfully designed, locally curated, intimate space',
		},
		{
			title: 'Morning ritual',
			label: 'Fresh breakfast, local coffee, warm hospitality',
		},
		{
			title: 'Living room warmth',
			label: 'Shared spaces, curated art, genuine connection',
		},
		{
			title: 'Garden sanctuary',
			label: 'Peaceful retreat, natural light, quiet moments',
		},
	];
}
