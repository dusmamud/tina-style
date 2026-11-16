import { products, posts } from '$lib/data';

export const prerender = true;

const BASE = 'https://tina-style.pages.dev';

export function GET() {
	const staticRoutes = ['', 'about', 'shop', 'blog', 'videos', 'contact', 'privacy', 'terms', 'lookbook', 'faq'];
	const urls = [
		...staticRoutes.map((r) => `${BASE}/${r}`),
		...products.map((p) => `${BASE}/shop/${p.slug}`),
		...posts.map((p) => `${BASE}/blog/${p.slug}`)
	];
	const body = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls
		.map((u) => `  <url><loc>${u}</loc></url>`)
		.join('\n')}\n</urlset>\n`;
	return new Response(body, { headers: { 'Content-Type': 'application/xml' } });
}
