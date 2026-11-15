<script lang="ts">
	import { reveal } from '$lib/reveal';
	import { posts, postCategories } from '$lib/data';

	let activeCategory = $state('All');
	const visible = $derived(
		activeCategory === 'All' ? posts : posts.filter((p) => p.category === activeCategory)
	);
</script>

<svelte:head>
	<title>Travel Blog — Tina Style</title>
	<meta name="description" content="Travel stories, city guides and slow travel notes from Tina — Paris, Santorini, Bali, Tokyo, Rome and the Maldives." />
</svelte:head>

<section class="px-4 pb-10 pt-8 sm:px-8 lg:px-16 lg:pt-12 xl:px-24">
	<div class="mx-auto max-w-6xl">
		<div use:reveal class="text-center">
			<p class="text-[11px] font-bold tracking-[0.24em] text-stone-500">TRAVEL BLOG</p>
			<h1 class="mt-2 font-display text-[32px] font-bold leading-tight sm:text-[40px] lg:text-[48px]">Stories From the Road</h1>
			<p class="mx-auto mt-2 max-w-[520px] text-[14px] leading-relaxed text-stone-600">
				City guides, slow travel notes, and the little things I wish someone had told me before I went.
			</p>
		</div>

		<div use:reveal class="mt-6 flex flex-wrap items-center justify-center gap-2">
			{#each postCategories as c}
				<button
					type="button"
					aria-pressed={activeCategory === c}
					onclick={() => (activeCategory = c)}
					class="rounded-full px-4 py-2 text-[13px] font-semibold transition active:scale-95 {activeCategory === c
						? 'bg-stone-900 text-white'
						: 'border border-stone-300 bg-white text-stone-700 hover:bg-stone-100'}"
				>
					{c}
				</button>
			{/each}
		</div>

		<div class="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
			{#each visible as post, i (post.slug)}
				<a
					href="/blog/{post.slug}"
					use:reveal={(i % 3) * 70}
					class="group overflow-hidden rounded-2xl bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md active:scale-[0.99]"
				>
					<img src={post.img} alt={post.title} loading="lazy" class="h-[180px] w-full object-cover transition duration-500 group-hover:scale-[1.04] lg:h-[210px]" />
					<div class="p-4 sm:p-5">
						<span class="rounded-full bg-sand px-2.5 py-1 text-[10px] font-bold tracking-wide text-stone-700">{post.category}</span>
						<span class="mt-2 block font-display text-[18px] font-bold leading-snug lg:text-[20px]">{post.title}</span>
						<span class="mt-1 block text-[13px] leading-relaxed text-stone-500">{post.excerpt}</span>
						<span class="mt-3 block text-[12px] font-medium text-stone-500">{post.date} • {post.readTime}</span>
						<span class="mt-2 inline-flex items-center gap-1 text-[13px] font-semibold text-stone-900 group-hover:underline">
							Read the story ›
						</span>
					</div>
				</a>
			{/each}
		</div>
	</div>
</section>
