import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DesignExperience, DesignGalleryItem } from '../design-page.types';

@Component({
	imports: [RouterLink],
	templateUrl: './traditional-local.component.html',
	styleUrl: './traditional-local.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TraditionalLocalComponent {
	protected readonly experiences: DesignExperience[] = [
		{
			title: 'Local cuisine',
			description:
				'Handmade breads, garden herbs, slow soups, smoked specialties, and seasonal plates served with the rhythm of family recipes.',
			detail: 'Regional recipes, hearth cooking, market produce',
		},
		{
			title: 'Cultural rooms',
			description:
				'Warm guest rooms with woven textiles, carved wood, painted ceramics, and quiet corners shaped by regional craft.',
			detail: 'Folk details, natural materials, restful stays',
		},
		{
			title: 'Family celebrations',
			description:
				'Tables set for birthdays, reunions, harvest dinners, and village-style gatherings where every guest feels remembered.',
			detail: 'Shared feasts, music, private gatherings',
		},
	];

	protected readonly galleryItems: DesignGalleryItem[] = [
		{
			title: 'Hearth table',
			label: 'Clay plates, embroidered linen, and fresh bread',
		},
		{
			title: 'Heritage room',
			label: 'Wood beams, woven rugs, and warm lamplight',
		},
		{
			title: 'Garden supper',
			label: 'Seasonal greens, pickles, herbs, and slow dishes',
		},
		{
			title: 'Celebration hall',
			label: 'Long tables, folk patterns, and family toasts',
		},
	];
}
