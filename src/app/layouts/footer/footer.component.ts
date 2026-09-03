import { NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed } from '@angular/core';
import { RouterLink } from '@angular/router';
import { catalogMeta, footerPageLinks } from '../../design-catalog';

@Component({
	selector: 'app-footer',
	imports: [NgOptimizedImage, RouterLink],
	templateUrl: './footer.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterComponent {
	protected readonly catalog = catalogMeta;
	protected readonly currentYear = new Date().getFullYear();
	protected readonly pageLinks = computed(() => footerPageLinks);
}
