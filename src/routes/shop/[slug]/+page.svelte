<script lang="ts">
	import { reveal } from '$lib/reveal';
	import { bag, toggleBag, bagSummary } from '$lib/bag.svelte';
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();
	const { product, more } = data;
	const inBag = $derived(bag.includes(product.name));
</script>

<svelte:head>
	<title>{product.name} — Tina Style</title>
	<meta name="description" content={product.desc} />
	<meta property="og:type" content="product" />
	<meta property="og:title" content="{product.name} — Tina Style" />
	<meta property="og:description" content={product.desc} />
	<meta property="og:image" content="https://tina-style.pages.dev{product.img}" />
</svelte:head>

<section class="px-4 pb-10 pt-8 sm:px-8 lg:px-16 lg:pt-12 xl:px-24">
	<div class="mx-auto max-w-6xl">
		<nav aria-label="Breadcrumb" class="text-[12px] font-medium text-stone-500 sm:text-[13px]">
			<a href="/shop" class="hover:text-stone-900">Shop</a>
			<span class="mx-1.5 text-stone-300">›</span>
			<span>{product.category}</span>
			<span class="mx-1.5 text-stone-300">›</span>
			<span class="text-stone-900">{product.name}</span>
		</nav>

		<div class="mt-5 grid gap-6 lg:grid-cols-2 lg:gap-10">
			<div use:reveal class="overflow-hidden rounded-2xl bg-white shadow-sm">
				<img
					src={product.img}
					alt={product.name}
					class="h-[320px] w-full object-cover sm:h-[420px] lg:h-[520px]"
				/>
			</div>

			<div use:reveal={70}>
				<span class="rounded-full bg-sand px-3 py-1 text-[11px] font-bold tracking-wide text-stone-700">{product.category}</span>
				<h1 class="mt-3 font-display text-[28px] font-bold leading-tight sm:text-[36px] lg:text-[42px]">{product.name}</h1>
				<p class="mt-2 font-display text-[22px] font-bold text-stone-900 sm:text-[26px]">{product.price}</p>
				<p class="mt-3 text-[14px] leading-relaxed text-stone-600">{product.desc}</p>

				<ul class="mt-4 space-y-2 text-[13px] leading-relaxed text-stone-600">
					{#each product.details as d}
						<li class="flex items-start gap-2">
							<svg viewBox="0 0 24 24" class="mt-0.5 h-4 w-4 shrink-0 fill-none stroke-emerald-600" stroke-width="2.5"><path d="m5 13 4 4L19 7" /></svg>
							{d}
						</li>
					{/each}
				</ul>

				<button
					type="button"
					aria-label={inBag ? `Remove ${product.name} from bag` : `Add ${product.name} to bag`}
					aria-pressed={inBag}
					onclick={() => toggleBag(product.name)}
					class="mt-6 w-full rounded-full py-3 text-[14px] font-semibold text-white transition active:scale-[0.98] sm:w-auto sm:px-8 {inBag
						? 'bg-emerald-600 hover:bg-emerald-700'
						: 'bg-stone-900 hover:bg-stone-700'}"
				>
					{inBag ? '✓ Added to your bag' : 'Add to bag — ' + product.price}
				</button>
				{#if bag.length > 0}
					<p class="mt-3 text-[12px] font-medium text-stone-600">{bagSummary()}</p>
				{/if}

				<p class="mt-5 text-[12px] leading-relaxed text-stone-500">
					Prices in USD. This is an affiliate link — if you buy through it, I may earn a small commission
					at no extra cost to you. Thank you for supporting Tina Style ♥
				</p>
				<a href="/shop" class="mt-4 inline-block text-[13px] font-semibold text-stone-900 hover:underline">← Back to all products</a>
			</div>
		</div>

		<div class="mt-12">
			<h2 use:reveal class="font-display text-[20px] font-bold sm:text-[24px] lg:text-[28px]">You may also like</h2>
			<div class="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:gap-4">
				{#each more as p, i}
					<a
						href="/shop/{p.slug}"
						use:reveal={i * 70}
						class="group overflow-hidden rounded-2xl bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
					>
						<img src={p.img} alt={p.name} loading="lazy" class="h-[170px] w-full object-cover transition duration-500 group-hover:scale-[1.04] sm:h-[220px]" />
						<span class="block px-3 py-3">
							<span class="block text-[13px] font-semibold leading-tight sm:text-[14px]">{p.name}</span>
							<span class="block text-[12px] text-stone-500">{p.price}</span>
						</span>
					</a>
				{/each}
			</div>
		</div>
	</div>
</section>
