import { error } from '@sveltejs/kit';
import { products } from '$lib/data';
import type { PageLoad, EntryGenerator } from './$types';

export const entries: EntryGenerator = () => products.map((p) => ({ slug: p.slug }));

export const load: PageLoad = ({ params }) => {
	const product = products.find((p) => p.slug === params.slug);
	if (!product) error(404, 'Product not found');
	const sameCategory = products.filter((p) => p.slug !== product.slug && p.category === product.category);
	const others = products.filter((p) => p.slug !== product.slug && p.category !== product.category);
	const more = [...sameCategory, ...others].slice(0, 3);
	return { product, more };
};
