<script lang="ts">
	import { reveal } from '$lib/reveal';
	import { bag, toggleBag, bagSummary } from '$lib/bag.svelte';
	import { products, productCategories } from '$lib/data';

	let activeCategory = $state('All');
	const visible = $derived(
		activeCategory === 'All' ? products : products.filter((p) => p.category === activeCategory)
	);
</script>

<svelte:head>
	<title>Shop My Favorites — Tina Style</title>
	<meta name="description" content="Shop Tina's favourite pieces — sunglasses, handbags, perfume, makeup and accessories she actually wears and loves." />
</svelte:head>

<section class="px-4 pb-10 pt-8 sm:px-8 lg:px-16 lg:pt-12 xl:px-24">
	<div class="mx-auto max-w-6xl">
		<div use:reveal class="text-center">
			<p class="text-[11px] font-bold tracking-[0.24em] text-stone-500">SHOP</p>
			<h1 class="mt-2 font-display text-[32px] font-bold leading-tight sm:text-[40px] lg:text-[48px]">Shop My Favorites</h1>
			<p class="mx-auto mt-2 max-w-[520px] text-[14px] leading-relaxed text-stone-600">
				Everyday pieces I actually wear and love — tried, tested, and linked so you can find them in one tap.
			</p>
		</div>

		{#if bag.length > 0}
			<p class="mt-4 text-center text-[12px] font-medium text-stone-600 lg:text-[13px]">{bagSummary()}</p>
		{/if}

		<div use:reveal class="mt-6 flex flex-wrap items-center justify-center gap-2">
			{#each productCategories as c}
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

		<div class="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4 lg:gap-4">
			{#each visible as p, i (p.name)}
				<div use:reveal={(i % 4) * 70} class="group overflow-hidden rounded-2xl bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
					<div class="relative">
						<img src={p.img} alt={p.name} loading="lazy" class="h-[170px] w-full object-cover transition duration-500 group-hover:scale-[1.04] sm:h-[220px] lg:h-[260px]" />
						<span class="absolute left-2 top-2 rounded-full bg-black/45 px-2.5 py-1 text-[10px] font-bold text-white">{p.category}</span>
					</div>
					<div class="flex items-center justify-between px-3 py-3">
						<span>
							<span class="block text-[13px] font-semibold leading-tight sm:text-[14px]">{p.name}</span>
							<span class="block text-[12px] text-stone-500">{p.price}</span>
						</span>
						<button
							type="button"
							aria-label={bag.includes(p.name) ? `Remove ${p.name} from bag` : `Add ${p.name} to bag`}
							aria-pressed={bag.includes(p.name)}
							onclick={() => toggleBag(p.name)}
							class="flex h-9 w-9 shrink-0 items-center justify-center rounded-full {bag.includes(p.name)
								? 'bg-emerald-600 text-white'
								: 'bg-stone-900 text-white'} transition hover:scale-110 active:scale-90"
						>
							{#if bag.includes(p.name)}
								<svg viewBox="0 0 24 24" class="h-4 w-4 fill-none stroke-white" stroke-width="2.5"><path d="m5 13 4 4L19 7" /></svg>
							{:else}
								<svg viewBox="0 0 24 24" class="h-4 w-4 fill-none stroke-white" stroke-width="2"><path d="M6 8h12l-1 12H7L6 8Zm3 0V6a3 3 0 0 1 6 0v2" /></svg>
							{/if}
						</button>
					</div>
				</div>
			{/each}
		</div>

		<p use:reveal class="mt-6 text-center text-[12px] leading-relaxed text-stone-500">
			Prices in USD. Some links are affiliate links — if you buy through them, I may earn a small commission
			at no extra cost to you. Thank you for supporting Tina Style ♥
		</p>
	</div>
</section>
