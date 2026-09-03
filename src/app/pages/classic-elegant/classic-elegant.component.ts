import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DesignExperience, DesignGalleryItem } from '../design-page.types';

@Component({
	imports: [RouterLink],
	templateUrl: './classic-elegant.component.html',
	styleUrl: './classic-elegant.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ClassicElegantComponent {
	protected readonly experiences: DesignExperience[] = [
		{
			title: 'Restaurant',
			description:
				'Seasonal dining shaped by polished service, candlelit tables, and a cellar-minded approach to every course.',
			detail: 'Fine dining, wine pairings, tasting evenings',
		},
		{
			title: 'Rooms',
			description:
				'Quiet suites with tailored textures, warm light, and all the grace of a private residence.',
			detail: 'Boutique stays, breakfast service, concierge care',
		},
		{
			title: 'Private events',
			description:
				'Refined salons for anniversaries, board dinners, ceremonies, and intimate celebrations.',
			detail: 'Private dining, receptions, bespoke menus',
		},
	];

	protected readonly galleryItems: DesignGalleryItem[] = [
		{
			title: 'The dining room',
			label: 'Ivory linens and brass candlelight',
		},
		{
			title: 'Heritage suite',
			label: 'Layered textiles and calm morning light',
		},
		{
			title: 'Evening reception',
			label: 'Gold details, florals, and polished service',
		},
		{
			title: 'Chef table',
			label: 'Seasonal plating in a private salon',
		},
	];
}
