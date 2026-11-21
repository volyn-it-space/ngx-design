import { existsSync } from 'node:fs';
import { mkdir, readFile, writeFile } from 'node:fs/promises';
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

// Every design must ship its AI brief and be listed in the selector brief: the catalog copies
// these URLs for agents, so a missing file would only surface as a 404 after deploy.
const briefDir = path.join(rootDir, 'src/assets/design');
const selectorBrief = await readFile(path.join(briefDir, 'index.md'), 'utf8');
const briefProblems = [];

for (const page of designPages) {
	if (!existsSync(path.join(briefDir, `${page.slug}.md`))) {
		briefProblems.push(`missing src/assets/design/${page.slug}.md`);
	}

	if (!selectorBrief.includes(`/assets/design/${page.slug}.md`)) {
		briefProblems.push(`src/assets/design/index.md does not list ${page.slug}`);
	}
}

if (briefProblems.length > 0) {
	throw new Error(`Design briefs are out of sync with design-catalog.ts:\n- ${briefProblems.join('\n- ')}`);
}

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
