<script lang="ts">
	import { reveal } from '$lib/reveal';
	import { looks, products } from '$lib/data';

	const productByName = new Map(products.map((p) => [p.name, p]));
</script>

<svelte:head>
	<title>Lookbook — Tina Style</title>
	<meta name="description" content="Tina's lookbook — everyday outfits, travel looks and the pieces behind them. Tap any item to shop it." />
</svelte:head>

<section class="px-4 pb-10 pt-8 sm:px-8 lg:px-16 lg:pt-12 xl:px-24">
	<div class="mx-auto max-w-6xl">
		<div use:reveal class="text-center">
			<p class="text-[11px] font-bold tracking-[0.24em] text-stone-500">LOOKBOOK</p>
			<h1 class="mt-2 font-display text-[32px] font-bold leading-tight sm:text-[40px] lg:text-[48px]">My Outfits</h1>
			<p class="mx-auto mt-2 max-w-[520px] text-[14px] leading-relaxed text-stone-600">
				Real outfits I actually wear — from city days to slow holidays. Tap any piece to shop it.
			</p>
		</div>

		<div class="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
			{#each looks as look, i}
				<article use:reveal={(i % 3) * 70} class="group overflow-hidden rounded-2xl bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
					<div class="relative overflow-hidden">
						<img src={look.img} alt={look.title} loading="lazy" class="h-[280px] w-full object-cover transition duration-500 group-hover:scale-[1.04] sm:h-[320px] lg:h-[340px]" />
						<span class="absolute left-3 top-3 rounded-full bg-black/45 px-2.5 py-1 text-[10px] font-bold text-white">{look.occasion}</span>
					</div>
					<div class="p-4">
						<h2 class="font-display text-[18px] font-bold leading-snug">{look.title}</h2>
						<p class="mt-1 text-[11px] font-bold tracking-[0.18em] text-stone-500">SHOP THE LOOK</p>
						<div class="mt-2 flex flex-wrap gap-2">
							{#each look.items as item}
								{@const p = productByName.get(item)}
								{#if p}
									<a
										href="/shop/{p.slug}"
										class="rounded-full border border-stone-300 bg-cream px-3 py-1.5 text-[12px] font-semibold text-stone-700 transition hover:border-stone-900 hover:text-stone-900"
									>
										{item} · {p.price}
									</a>
								{/if}
							{/each}
						</div>
					</div>
				</article>
			{/each}
		</div>

		<p use:reveal class="mt-8 text-center text-[13px] leading-relaxed text-stone-600">
			Looking for something else?
			<a href="/shop" class="font-semibold text-stone-900 hover:underline">Browse all favourites →</a>
		</p>
	</div>
</section>
