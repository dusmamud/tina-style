import adapter from '@sveltejs/adapter-static';
import { sveltekit } from '@sveltejs/kit/vite';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [
		tailwindcss(),
		sveltekit({
			adapter: adapter({ pages: 'build', assets: 'build', fallback: '404.html', precompress: false, strict: true }),
			// SvelteKit 3 removed the built-in $lib alias; re-add it explicitly (Kit's own
			// documented escape hatch) so $lib/... imports keep working in code and in svelte-check.
			alias: { $lib: 'src/lib' }
		})
	]
});
