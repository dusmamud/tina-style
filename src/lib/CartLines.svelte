<script lang="ts">
	import { bag, productOf, setQty, removeFromBag, formatPrice } from '$lib/bag.svelte';
</script>

<!-- Shared cart line items — one component for the drawer AND the cart page,
     so the two surfaces can never disagree (Baymard/Shopify pattern). -->
{#if bag.length === 0}
	<p class="py-6 text-center text-[13px] text-stone-500">Your bag is empty.</p>
{:else}
	<ul class="divide-y divide-stone-200/70">
		{#each bag as item (item.slug)}
			{@const p = productOf(item)}
			{#if p}
				<li class="flex gap-3 py-4">
					<a href="/shop/{p.slug}" class="shrink-0">
						<img src={p.img} alt={p.name} class="h-[76px] w-[64px] rounded-lg object-cover" />
					</a>
					<div class="min-w-0 flex-1">
						<div class="flex items-start justify-between gap-2">
							<a href="/shop/{p.slug}" class="text-[13px] font-semibold leading-tight hover:underline sm:text-[14px]">{p.name}</a>
							<span class="shrink-0 text-[13px] font-semibold sm:text-[14px]">{formatPrice(p.amount * item.qty)}</span>
						</div>
						<p class="mt-0.5 text-[12px] text-stone-500">{formatPrice(p.amount)} each · {p.category}</p>
						<div class="mt-2 flex items-center justify-between">
							<div class="flex items-center rounded-full border border-stone-300">
								<button
									type="button"
									aria-label="Decrease quantity of {p.name}"
									disabled={item.qty <= 1}
									onclick={() => setQty(item.slug, item.qty - 1)}
									class="flex h-8 w-8 items-center justify-center rounded-full text-[16px] font-bold transition hover:bg-stone-100 active:scale-90 disabled:opacity-30"
								>−</button>
								<span aria-label="Quantity of {p.name}" class="w-7 text-center text-[13px] font-semibold">{item.qty}</span>
								<button
									type="button"
									aria-label="Increase quantity of {p.name}"
									onclick={() => setQty(item.slug, item.qty + 1)}
									class="flex h-8 w-8 items-center justify-center rounded-full text-[16px] font-bold transition hover:bg-stone-100 active:scale-90"
								>+</button>
							</div>
							<button
								type="button"
								onclick={() => removeFromBag(item.slug)}
								class="text-[12px] font-medium text-stone-500 underline hover:text-stone-900"
							>Remove</button>
						</div>
					</div>
				</li>
			{/if}
		{/each}
	</ul>
{/if}
