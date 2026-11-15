<script lang="ts">
	import { reveal } from '$lib/reveal';
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();
	const { post, more } = data;
</script>

<svelte:head>
	<title>{post.title} — Tina Style</title>
	<meta name="description" content={post.excerpt} />
	<meta property="og:type" content="article" />
	<meta property="og:title" content="{post.title} — Tina Style" />
	<meta property="og:description" content={post.excerpt} />
	<meta property="og:image" content="https://tina-style.pages.dev{post.img}" />
</svelte:head>

<article class="px-4 pb-10 pt-8 sm:px-8 lg:px-16 lg:pt-12 xl:px-24">
	<div class="mx-auto max-w-[720px]">
		<a href="/blog" class="text-[13px] font-semibold text-stone-600 hover:text-stone-900">← All posts</a>
		<div use:reveal class="mt-4">
			<span class="rounded-full bg-sand px-3 py-1 text-[11px] font-bold tracking-wide text-stone-700">{post.category}</span>
			<h1 class="mt-3 font-display text-[28px] font-bold leading-tight sm:text-[36px] lg:text-[42px]">{post.title}</h1>
			<p class="mt-2 text-[13px] font-medium text-stone-500">{post.date} • {post.readTime} • by Tina</p>
		</div>
		<img
			use:reveal
			src={post.img}
			alt={post.title}
			class="mt-6 h-[240px] w-full rounded-2xl object-cover shadow-sm sm:h-[340px] lg:h-[400px]"
		/>
		<div class="mt-6 space-y-4">
			{#each post.body as para, i}
				<p use:reveal={i * 40} class="text-[15px] leading-relaxed text-stone-700 sm:text-[16px]">{para}</p>
			{/each}
		</div>

		<div use:reveal class="mt-8 flex items-center gap-4 rounded-2xl bg-white p-5 shadow-sm">
			<img src="/images/avatar.jpg" alt="Tina Style" class="h-14 w-14 rounded-full object-cover" />
			<div>
				<p class="font-display text-[16px] font-bold">Tina Style</p>
				<p class="text-[13px] leading-relaxed text-stone-500">
					Fashion &amp; travel creator — sharing daily looks, travel spots and everything that makes life
					more beautiful.
				</p>
			</div>
		</div>

		<div class="mt-10">
			<h2 use:reveal class="font-display text-[20px] font-bold sm:text-[24px]">More from the blog</h2>
			<div class="mt-4 grid gap-4 sm:grid-cols-2">
				{#each more as m, i}
					<a
						href="/blog/{m.slug}"
						use:reveal={i * 70}
						class="group overflow-hidden rounded-2xl bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
					>
						<img src={m.img} alt={m.title} loading="lazy" class="h-[150px] w-full object-cover transition duration-500 group-hover:scale-[1.04]" />
						<div class="p-4">
							<span class="block font-display text-[16px] font-bold leading-snug">{m.title}</span>
							<span class="mt-1 block text-[12px] text-stone-500">{m.date} • {m.readTime}</span>
						</div>
					</a>
				{/each}
			</div>
		</div>
	</div>
</article>
