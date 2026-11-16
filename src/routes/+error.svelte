<script lang="ts">
	import { page } from '$app/state';
	import { reveal } from '$lib/reveal';

	const is404 = $derived(page.status === 404);
</script>

<svelte:head>
	<title>{is404 ? 'Page not found' : 'Something went wrong'} — Tina Style</title>
	<meta name="robots" content="noindex" />
</svelte:head>

<section class="flex min-h-[60vh] items-center justify-center px-4 py-16 sm:px-8">
	<div use:reveal class="max-w-[480px] text-center">
		<p class="font-script text-[56px] leading-none text-stone-900 sm:text-[72px]">{is404 ? 'Oops!' : 'Oh no!'}</p>
		<h1 class="mt-4 font-display text-[28px] font-bold leading-tight sm:text-[36px]">
			{is404 ? 'This page wandered off' : 'Something went wrong'}
		</h1>
		<p class="mx-auto mt-3 max-w-[380px] text-[14px] leading-relaxed text-stone-600">
			{is404
				? 'The link you followed may be broken, or the page may have moved. Let’s get you back to the good stuff.'
				: 'An unexpected error happened. Please try again — and if it keeps happening, let me know.'}
		</p>
		<div class="mt-6 flex flex-wrap items-center justify-center gap-3">
			<a
				href="/"
				class="rounded-full bg-stone-900 px-5 py-2.5 text-[13px] font-semibold text-white transition hover:bg-stone-700 active:scale-95"
				>Back home</a
			>
			<a
				href="/shop"
				class="rounded-full border border-stone-400 bg-white px-5 py-2.5 text-[13px] font-semibold text-stone-900 transition hover:bg-stone-100 active:scale-95"
				>Shop my favorites</a
			>
			<a
				href="/blog"
				class="rounded-full border border-stone-400 bg-white px-5 py-2.5 text-[13px] font-semibold text-stone-900 transition hover:bg-stone-100 active:scale-95"
				>Read the blog</a
			>
		</div>
	</div>
</section>
