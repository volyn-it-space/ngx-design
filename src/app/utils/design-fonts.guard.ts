import { DOCUMENT } from '@angular/common';
import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { findDesignByUrl } from '../design-catalog';

const linkId = 'design-fonts';

/**
 * Loads the Google Fonts a design lists in its catalog entry (`fonts`), and only on that design's
 * route. One stylesheet link is reused for every design, so opening the next demo replaces the
 * previous families. It also runs during prerender, so the link is already in the static HTML.
 */
export const designFontsGuard: CanActivateFn = (_route, state) => {
	const document = inject(DOCUMENT);
	const families = findDesignByUrl(state.url)?.fonts ?? [];
	const existing = document.getElementById(linkId);

	if (!families.length) {
		existing?.remove();

		return true;
	}

	const href = `https://fonts.googleapis.com/css2?${families
		.map((family) => `family=${family}`)
		.join('&')}&display=swap`;
	const link = existing ?? document.createElement('link');

	if (link.getAttribute('href') !== href) {
		link.setAttribute('href', href);
	}

	if (!existing) {
		link.id = linkId;
		link.setAttribute('rel', 'stylesheet');
		document.head.appendChild(link);
	}

	return true;
};
