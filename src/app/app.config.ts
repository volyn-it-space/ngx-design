import {
	ApplicationConfig,
	provideBrowserGlobalErrorListeners,
	provideZonelessChangeDetection,
} from '@angular/core';

import {
	provideClientHydration,
	withEventReplay,
	withNoIncrementalHydration,
} from '@angular/platform-browser';
import { provideRouter, withInMemoryScrolling } from '@angular/router';
import { provideNgxCore } from '@wawjs/ngx-core';
import { routes } from './app.routes';
import { catalogMeta } from './design-catalog';

export const appConfig: ApplicationConfig = {
	providers: [
		provideBrowserGlobalErrorListeners(),
		provideZonelessChangeDetection(),
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
			}),
		),
		provideClientHydration(withEventReplay(), withNoIncrementalHydration()),
	],
};
