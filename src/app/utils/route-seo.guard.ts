import { DOCUMENT } from '@angular/common';
import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { catalogMeta } from '../design-catalog';

const SITE_URL = catalogMeta.productionOrigin;

export const routeSeoGuard: CanActivateFn = (_route, state) => {
	const document = inject(DOCUMENT);
	const url = new URL(state.url || '/', SITE_URL);
	url.hash = '';
	url.search = '';

	setCanonical(document, url.href);
	setMetaProperty(document, 'og:url', url.href);

	return true;
};

function setCanonical(document: Document, href: string): void {
	let link = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');

	if (!link) {
		link = document.createElement('link');
		link.setAttribute('rel', 'canonical');
		document.head.appendChild(link);
	}

	link.setAttribute('href', href);
}

function setMetaProperty(document: Document, property: string, content: string): void {
	let meta = document.head.querySelector<HTMLMetaElement>(`meta[property="${property}"]`);

	if (!meta) {
		meta = document.createElement('meta');
		meta.setAttribute('property', property);
		document.head.appendChild(meta);
	}

	meta.setAttribute('content', content);
}
