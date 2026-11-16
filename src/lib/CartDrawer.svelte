<script lang="ts">
	import { fly, fade } from 'svelte/transition';
	import { goto } from '$app/navigation';
	import { bag, ui, getCartCount, getSubtotal, getAwayFromFreeShipping, FREE_SHIPPING_AT, formatPrice, shippingCost } from '$lib/bag.svelte';
	import CartLines from '$lib/CartLines.svelte';

	function close() {
		ui.cartOpen = false;
	}

	function checkout() {
		close();
		goto('/checkout');
	}

	function viewCart() {
		close();
		goto('/cart');
	}

	// Close on Escape while the drawer is open
	$effect(() => {
		if (!ui.cartOpen) return;
		const onKey = (e: KeyboardEvent) => {
			if (e.key === 'Escape') close();
		};
		window.addEventListener('keydown', onKey);
		return () => window.removeEventListener('keydown', onKey);
	});
</script>

{#if ui.cartOpen}
	<div class="fixed inset-0 z-50" role="dialog" aria-modal="true" aria-label="Shopping bag">
		<button
			type="button"
			aria-label="Close bag"
			onclick={close}
			transition:fade={{ duration: 180 }}
			class="absolute inset-0 bg-black/40"
		></button>
		<aside
			transition:fly={{ x: 320, duration: 240 }}
			class="absolute right-0 top-0 flex h-full w-full max-w-[400px] flex-col bg-cream shadow-2xl"
		>
			<div class="flex items-center justify-between border-b border-stone-200/70 px-5 py-4">
				<h2 class="font-display text-[18px] font-bold">Your Bag ({getCartCount()})</h2>
				<button
					type="button"
					aria-label="Close bag"
					onclick={close}
					class="flex h-9 w-9 items-center justify-center rounded-full border border-stone-300 bg-white transition hover:bg-stone-100 active:scale-90"
				>
					<svg viewBox="0 0 24 24" class="h-4 w-4 fill-none stroke-stone-800" stroke-width="2.5"><path d="m6 6 12 12M18 6 6 18" /></svg>
				</button>
			</div>

			{#if bag.length > 0}
				<!-- Free-shipping progress bar: top of the drawer, recomputes live -->
				<div class="border-b border-stone-200/70 px-5 py-3">
					{#if getAwayFromFreeShipping() > 0}
						<p class="text-[12px] font-medium text-stone-600">
							You're <b class="text-stone-900">{formatPrice(getAwayFromFreeShipping())}</b> away from FREE shipping
						</p>
					{:else}
						<p class="text-[12px] font-semibold text-emerald-700">🎉 You've unlocked FREE standard shipping!</p>
					{/if}
					<div class="mt-2 h-2 overflow-hidden rounded-full bg-stone-200">
						<div
							class="h-full rounded-full bg-stone-900 transition-all duration-300"
							style="width: {Math.min(100, (getSubtotal() / FREE_SHIPPING_AT) * 100)}%"
						></div>
					</div>
				</div>
			{/if}

			<div class="flex-1 overflow-y-auto px-5">
				{#if bag.length === 0}
					<div class="flex h-full flex-col items-center justify-center py-10 text-center">
						<span class="flex h-14 w-14 items-center justify-center rounded-full bg-sand">
							<svg viewBox="0 0 24 24" class="h-6 w-6 fill-none stroke-stone-700" stroke-width="1.8"><path d="M6 8h12l-1 12H7L6 8Zm3 0V6a3 3 0 0 1 6 0v2" /></svg>
						</span>
						<p class="mt-4 font-display text-[18px] font-bold">Your bag is empty</p>
						<p class="mt-1 max-w-[240px] text-[13px] leading-relaxed text-stone-500">
							Add something you love — it will show up right here.
						</p>
						<button
							type="button"
							onclick={() => { close(); goto('/shop'); }}
							class="mt-5 rounded-full bg-stone-900 px-5 py-2.5 text-[13px] font-semibold text-white transition hover:bg-stone-700 active:scale-95"
						>Shop my favorites →</button>
					</div>
				{:else}
					<CartLines />
				{/if}
			</div>

			{#if bag.length > 0}
				<div class="border-t border-stone-200/70 px-5 py-4">
					<div class="flex items-center justify-between text-[14px]">
						<span class="font-medium text-stone-600">Subtotal</span>
						<span class="font-display text-[18px] font-bold">{formatPrice(getSubtotal())}</span>
					</div>
					<p class="mt-1 text-[12px] text-stone-500">
						Shipping: {shippingCost('standard') === 0 ? 'FREE' : formatPrice(shippingCost('standard')) + ' standard'} · calculated at checkout
					</p>
					<button
						type="button"
						onclick={checkout}
						class="mt-3 w-full rounded-full bg-stone-900 py-3 text-[14px] font-semibold text-white transition hover:bg-stone-700 active:scale-[0.98]"
					>
						Checkout · {formatPrice(getSubtotal())}
					</button>
					<button
						type="button"
						onclick={viewCart}
						class="mt-2 w-full text-center text-[13px] font-semibold text-stone-700 hover:text-stone-900"
					>View full cart →</button>
					<p class="mt-3 text-center text-[11px] text-stone-500">🔒 Secure checkout · 30-day returns</p>
				</div>
			{/if}
		</aside>
	</div>
{/if}
