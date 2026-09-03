import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DesignExperience, DesignGalleryItem } from '../design-page.types';

@Component({
	imports: [RouterLink],
	templateUrl: './resort-spa.component.html',
	styleUrl: './resort-spa.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ResortSpaComponent {
	protected readonly experiences: DesignExperience[] = [
		{
			title: 'Spa Rituals',
			description:
				'Surrender to ancient rituals and modern wellness treatments designed to restore your body and mind. From aromatic oils to warm stone therapy.',
			detail: 'Massages, facials, body scrubs, aromatherapy',
		},
		{
			title: 'Nature Rooms',
			description:
				'Serene suites nestled in natural surroundings. Wake to birdsong, breathe mountain air, and drift to sleep beneath starlit skies.',
			detail: 'Forest views, natural materials, open-air baths',
		},
		{
			title: 'Wellness Retreat',
			description:
				'Multi-day immersive experiences combining yoga, meditation, healthy cuisine, and restorative therapies for complete renewal.',
			detail: 'Yoga classes, meditation, healing cuisine, nature walks',
		},
	];

	protected readonly galleryItems: DesignGalleryItem[] = [
		{
			title: 'Serenity spa',
			label: 'Soft light, natural materials, calm sanctuary',
		},
		{
			title: 'Forest hideaway',
			label: 'Nestled in nature, wooden textures, tranquility',
		},
		{
			title: 'Wellness garden',
			label: 'Native plants, healing herbs, peaceful paths',
		},
		{
			title: 'Meditation pavilion',
			label: 'Open air, morning mist, gentle silence',
		},
	];
}
