import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DesignExperience, DesignGalleryItem } from '../design-page.types';

@Component({
	imports: [RouterLink],
	templateUrl: './modern-minimal.component.html',
	styleUrl: './modern-minimal.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ModernMinimalComponent {
	protected readonly experiences: DesignExperience[] = [
		{
			title: 'Dining',
			description:
				'Clean, thoughtful spaces where excellent food meets uncluttered design. Simple menus, honest preparations, and genuine service.',
			detail: 'Contemporary cuisine, minimalist atmosphere, curated wine',
		},
		{
			title: 'Stay',
			description:
				'Serene guest rooms designed for clarity and comfort. Essential amenities, beautiful basics, and peaceful surroundings.',
			detail: 'Modern rooms, premium linens, quiet spaces',
		},
		{
			title: 'Events',
			description:
				'Flexible event spaces with clean lines and neutral backgrounds. Room for your vision, free from visual distraction.',
			detail: 'Customizable layout, natural light, simple elegance',
		},
	];

	protected readonly galleryItems: DesignGalleryItem[] = [
		{
			title: 'Dining room',
			label: 'Clean lines, natural light, simple elegance',
		},
		{
			title: 'Guest room',
			label: 'Minimal design, premium comfort, peaceful',
		},
		{
			title: 'Event space',
			label: 'Open layout, neutral backdrop, flexible',
		},
		{
			title: 'Entrance hall',
			label: 'Clear welcome, uncluttered, contemporary',
		},
	];
}
