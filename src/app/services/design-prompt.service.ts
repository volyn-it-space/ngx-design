import { Injectable } from '@angular/core';
import { DesignPage } from '../design-catalog';

export interface DesignPromptBrief {
	page: DesignPage;
	content: string;
}

@Injectable({
	providedIn: 'root',
})
export class DesignPromptService {
	compose(briefs: DesignPromptBrief[]): string {
		const names = briefs.map(({ page }) => `${page.label} (${page.theme})`).join(' + ');
		const hasMultipleThemes = briefs.length > 1;
		const title = 'Implementation';
		const implementationGuidance = hasMultipleThemes
			? [
					`Implement the following 2 theme designs in this project: ${names}.`,
					'Below are light and dark theme explanations. Use them as design direction for the project you are editing, not as assumptions about this catalog repository.',
					'First identify the project\'s existing color system, current brand colors, and whether theme switching already exists.',
					'Map each theme color set to the styling architecture you find: existing theme service, CSS variables, design tokens, global styles, stylesheet variables, or component-level styles. If the project already has theme tokens, replace or extend those tokens with the theme colors below. If it has no theme system, add the smallest maintainable theme structure needed to support both selected themes.',
					'Keep the implementation scoped, preserve existing behavior, and maintain accessible contrast, focus states, and responsive layouts.',
				]
			: [
					`Implement the following theme design in this project: ${names}.`,
					'Below is one theme explanation. Use it as design direction for the project you are editing, not as an assumption that a second theme exists.',
					'First identify the project\'s existing color system and current brand colors.',
					'Map the theme color set to the styling architecture you find: existing CSS variables, design tokens, global styles, stylesheet variables, or component-level styles. If the project already has theme tokens, replace or extend those tokens with the theme colors below. If it has no theme system, keep the colors local and avoid adding a second theme unless the existing project already requires one.',
					'Keep the implementation scoped, preserve existing behavior, and maintain accessible contrast, focus states, and responsive layouts.',
				];

		return [
			`# ${title}`,
			'',
			...implementationGuidance,
			'',
			...briefs.flatMap(({ page, content }) => [
				`## ${page.label} (${page.theme})`,
				'',
				content.trim(),
				'',
			]),
		].join('\n');
	}
}
