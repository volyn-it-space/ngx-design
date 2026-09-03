import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DesignExperience, DesignGalleryItem } from '../design-page.types';

@Component({
	imports: [RouterLink],
	templateUrl: './cozy-family.component.html',
	styleUrl: './cozy-family.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CozyFamilyComponent {
	protected readonly experiences: DesignExperience[] = [
		{
			title: 'Homemade meals',
			description:
				'Comforting soups, fresh pastries, generous breakfasts, and simple seasonal dishes prepared with the care of a family kitchen.',
			detail: 'Breakfasts, daily specials, warm desserts',
		},
		{
			title: 'Comfortable rooms',
			description:
				'Soft bedding, calm colors, practical details, and quiet corners for guests who want an easy, restful stay.',
			detail: 'Guest rooms, weekend stays, restful mornings',
		},
		{
			title: 'Kids-friendly space',
			description:
				'Bright tables, room for small guests, gentle service, and flexible meals that make family visits relaxed.',
			detail: 'Family tables, kids menu, safe corners',
		},
	];

	protected readonly galleryItems: DesignGalleryItem[] = [
		{
			title: 'Morning table',
			label: 'Pancakes, honey, fruit, and warm mugs',
		},
		{
			title: 'Family corner',
			label: 'Soft seating and sunny window light',
		},
		{
			title: 'Guest room',
			label: 'Cream linens, peach walls, quiet comfort',
		},
		{
			title: 'Little guests',
			label: 'Simple meals and space to feel at ease',
		},
	];
}
