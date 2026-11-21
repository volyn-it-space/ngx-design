import {
	ApplicationConfig,
	provideBrowserGlobalErrorListeners,
} from '@angular/core';

import {
	provideClientHydration,
	withEventReplay,
	withNoIncrementalHydration,
} from '@angular/platform-browser';
import { provideRouter, withInMemoryScrolling, withRouterConfig } from '@angular/router';
import { provideNgxCore } from '@wawjs/ngx-core';
import { routes } from './app.routes';
import { catalogMeta } from './design-catalog';

export const appConfig: ApplicationConfig = {
	providers: [
		provideBrowserGlobalErrorListeners(),
		provideNgxCore({
			meta: {
				applyFromRoutes: true,
				useTitleSuffix: true,
				defaults: {
					title: catalogMeta.title,
					titleSuffix: ` | ${catalogMeta.name}`,
					description: catalogMeta.description,
					image: catalogMeta.image,
					robots: 'index, follow',
				},
			},
		}),
		provideRouter(
			routes,
			withInMemoryScrolling({
				scrollPositionRestoration: 'top',
				// Design demos link to their own sections with routerLink + fragment.
				anchorScrolling: 'enabled',
			}),
			// Lets a section link scroll again when its fragment is already in the URL.
			withRouterConfig({ onSameUrlNavigation: 'reload' }),
		),
		provideClientHydration(withEventReplay(), withNoIncrementalHydration()),
	],
};
