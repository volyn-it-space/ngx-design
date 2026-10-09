import { mkdir, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, '../..');

// Static assets live in `src/assets`; robots.txt and sitemap.xml are build output only.
const outputDirs = [path.join(rootDir, 'dist/app/browser')];

// The sitemap carries no build date, so it only changes when the routes change.
// The catalog is the single source of truth for indexable pages. Node strips the TypeScript types.
const { catalogMeta, designPages } = await import(
	pathToFileURL(path.join(rootDir, 'src/app/design-catalog.ts')).href
);

const siteUrl = trimTrailingSlash(catalogMeta.productionOrigin);
const routes = ['/', ...designPages.map((page) => page.path)];

await Promise.all(
	outputDirs.map(async (outputDir) => {
		await mkdir(outputDir, { recursive: true });
		await writeFile(path.join(outputDir, 'sitemap.xml'), buildSitemap(routes, siteUrl));
		await writeFile(path.join(outputDir, 'robots.txt'), buildRobots(siteUrl));
	}),
);

function buildSitemap(routes, siteUrl) {
	const urls = routes
		.map((route) => `	<url>\n		<loc>${escapeXml(toAbsoluteUrl(siteUrl, route))}</loc>\n	</url>`)
		.join('\n');

	return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;
}

function buildRobots(siteUrl) {
	return `User-agent: *
Allow: /

Sitemap: ${siteUrl}/sitemap.xml
`;
}

function toAbsoluteUrl(siteUrl, route) {
	return route === '/' ? `${siteUrl}/` : `${siteUrl}${route}`;
}

function trimTrailingSlash(value) {
	return value.endsWith('/') ? value.slice(0, -1) : value;
}

function escapeXml(value) {
	return value
		.replaceAll('&', '&amp;')
		.replaceAll('<', '&lt;')
		.replaceAll('>', '&gt;')
		.replaceAll('"', '&quot;')
		.replaceAll("'", '&apos;');
}
