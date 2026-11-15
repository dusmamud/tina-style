import { error } from '@sveltejs/kit';
import { posts } from '$lib/data';
import type { PageLoad, EntryGenerator } from './$types';

export const entries: EntryGenerator = () => posts.map((p) => ({ slug: p.slug }));

export const load: PageLoad = ({ params }) => {
	const post = posts.find((p) => p.slug === params.slug);
	if (!post) error(404, 'Post not found');
	const more = posts.filter((p) => p.slug !== post.slug).slice(0, 2);
	return { post, more };
};
