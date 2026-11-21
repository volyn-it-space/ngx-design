import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { findDesignByUrl, isLandingDesign } from '../design-catalog';
import { ThemeModeService } from '../services/theme-mode.service';

/**
 * Keeps the catalog chrome (topbar, footer, "next design" rotation) in the same light/dark family
 * as the landing design being opened. It also runs during prerender, so the static HTML of a dark
 * demo already carries `data-mode="dark"`.
 */
export const designModeGuard: CanActivateFn = (_route, state) => {
	const design = findDesignByUrl(state.url);

	if (design && isLandingDesign(design)) {
		inject(ThemeModeService).showMode(design.theme);
	}

	return true;
};
