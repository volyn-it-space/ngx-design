import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DesignExperience, DesignGalleryItem } from '../design-page.types';

@Component({
	imports: [RouterLink],
	templateUrl: './cafe-bakery.component.html',
	styleUrl: './cafe-bakery.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CafeBakeryComponent {
	protected readonly experiences: DesignExperience[] = [
		{
			title: 'Fresh Pastries',
			description:
				'Every morning, our ovens fill with the aroma of croissants, cinnamon rolls, and artisanal bread. Made from simple, quality ingredients with love.',
			detail: 'Croissants, danish, donuts, seasonal specialties',
		},
		{
			title: 'Specialty Coffee',
			description:
				'Carefully sourced beans roasted to perfection. From smooth lattes to rich espressos, every cup is crafted with care by our baristas.',
			detail: 'Single-origin, pour-overs, oat milk options, seasonal blends',
		},
		{
			title: 'Sweet Breakfasts',
			description:
				'Start your day with fluffy pancakes, fresh fruit, granola bowls, and sweet treats. A cozy spot for morning rituals and catching up.',
			detail: 'Pancakes, waffles, fruit bowls, eggs, toast, jam',
		},
	];

	protected readonly galleryItems: DesignGalleryItem[] = [
		{
			title: 'Morning pastries',
			label: 'Golden croissants, fresh from the oven',
		},
		{
			title: 'Latte art',
			label: 'Handcrafted coffee, morning ritual',
		},
		{
			title: 'Cinnamon rolls',
			label: 'Soft, sweet, shared moments',
		},
		{
			title: 'Cozy corner',
			label: 'Warm light, open space, welcoming',
		},
	];
}
