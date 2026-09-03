import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DesignExperience, DesignGalleryItem } from '../design-page.types';

@Component({
	imports: [RouterLink],
	templateUrl: './event-banquet.component.html',
	styleUrl: './event-banquet.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EventBanquetComponent {
	protected readonly experiences: DesignExperience[] = [
		{
			title: 'Wedding Receptions',
			description:
				'Celebrate your special day in a luminous setting where every detail reflects your love story. From intimate ceremonies to grand celebrations.',
			detail: 'Elegant halls, catering, dance floor, champagne toasts',
		},
		{
			title: 'Banquet Halls',
			description:
				'Sophisticated spaces designed for your momentous gatherings. A curated backdrop for milestone celebrations and memorable occasions.',
			detail: 'Custom menus, bar service, flexible layouts, premium linens',
		},
		{
			title: 'Business Events',
			description:
				'Professional yet celebratory spaces for conferences, galas, and corporate milestones. Create lasting impressions with refined hospitality.',
			detail: 'AV support, breakout rooms, reception areas, full catering',
		},
	];

	protected readonly galleryItems: DesignGalleryItem[] = [
		{
			title: 'The grand ballroom',
			label: 'Chandeliers, gold accents, capacity for 500',
		},
		{
			title: 'Champagne service',
			label: 'Premium selections and signature cocktails',
		},
		{
			title: 'Table settings',
			label: 'Fine linens, fresh florals, personalized details',
		},
		{
			title: 'Evening ambiance',
			label: 'Soft lighting, elegant décor, timeless elegance',
		},
	];
}
