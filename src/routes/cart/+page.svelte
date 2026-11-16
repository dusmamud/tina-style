<script lang="ts">
	import { reveal } from '$lib/reveal';
	import { bag, getCartCount, getSubtotal, shippingCost, FREE_SHIPPING_AT, getAwayFromFreeShipping, formatPrice } from '$lib/bag.svelte';
	import CartLines from '$lib/CartLines.svelte';
</script>

<svelte:head>
	<title>Your Bag — Tina Style</title>
	<meta name="description" content="Review your bag — quantities, subtotal and shipping — before checkout." />
</svelte:head>

<section class="px-4 pb-10 pt-8 sm:px-8 lg:px-16 lg:pt-12 xl:px-24">
	<div class="mx-auto max-w-6xl">
		<div use:reveal>
			<p class="text-[11px] font-bold tracking-[0.24em] text-stone-500">SHOPPING BAG</p>
			<h1 class="mt-2 font-display text-[32px] font-bold leading-tight sm:text-[40px] lg:text-[48px]">
				Your Bag {#if getCartCount() > 0}({getCartCount()}){/if}
			</h1>
		</div>

		{#if bag.length === 0}
			<div use:reveal class="mt-8 rounded-2xl bg-white p-8 text-center shadow-sm">
				<p class="font-display text-[22px] font-bold">Your bag is empty</p>
				<p class="mx-auto mt-2 max-w-[360px] text-[13px] leading-relaxed text-stone-600">
					Nothing here yet — browse my favourites and add something you love.
				</p>
				<a href="/shop" class="mt-5 inline-block rounded-full bg-stone-900 px-5 py-2.5 text-[13px] font-semibold text-white transition hover:bg-stone-700 active:scale-95">
					Shop my favorites →
				</a>
			</div>
		{:else}
			<div class="mt-6 grid gap-6 lg:grid-cols-[1.6fr_1fr] lg:gap-10">
				<div use:reveal class="rounded-2xl bg-white px-5 shadow-sm sm:px-6">
					{#if getAwayFromFreeShipping() > 0}
						<p class="border-b border-stone-200/70 pb-3 pt-4 text-[12px] font-medium text-stone-600">
							You're <b class="text-stone-900">{formatPrice(getAwayFromFreeShipping())}</b> away from FREE standard shipping
						</p>
					{:else}
						<p class="border-b border-stone-200/70 pb-3 pt-4 text-[12px] font-semibold text-emerald-700">
							🎉 You've unlocked FREE standard shipping!
						</p>
					{/if}
					<CartLines />
					<div class="flex items-center justify-between border-t border-stone-200/70 py-4">
						<a href="/shop" class="text-[13px] font-semibold text-stone-700 hover:text-stone-900">← Continue shopping</a>
						<span class="text-[12px] text-stone-500">Free shipping over {formatPrice(FREE_SHIPPING_AT)}</span>
					</div>
				</div>

				<aside use:reveal={70} class="h-fit rounded-2xl bg-white p-5 shadow-sm sm:p-6 lg:sticky lg:top-24">
					<h2 class="font-display text-[18px] font-bold">Order summary</h2>
					<dl class="mt-4 space-y-2 text-[13px] sm:text-[14px]">
						<div class="flex justify-between">
							<dt class="text-stone-600">Subtotal ({getCartCount()} item{getCartCount() > 1 ? 's' : ''})</dt>
							<dd class="font-semibold">{formatPrice(getSubtotal())}</dd>
						</div>
						<div class="flex justify-between">
							<dt class="text-stone-600">Shipping (standard)</dt>
							<dd class="font-semibold">{shippingCost('standard') === 0 ? 'FREE' : formatPrice(shippingCost('standard'))}</dd>
						</div>
						<div class="flex justify-between border-t border-stone-200 pt-3 text-[15px] font-bold sm:text-[16px]">
							<dt>Total</dt>
							<dd>{formatPrice(getSubtotal() + shippingCost('standard'))}</dd>
						</div>
					</dl>
					<a
						href="/checkout"
						class="mt-5 block rounded-full bg-stone-900 py-3 text-center text-[14px] font-semibold text-white transition hover:bg-stone-700 active:scale-[0.98]"
					>
						Checkout · {formatPrice(getSubtotal() + shippingCost('standard'))}
					</a>
					<p class="mt-3 text-center text-[11px] leading-relaxed text-stone-500">
						🔒 Secure checkout · 30-day returns · Taxes calculated at checkout
					</p>
				</aside>
			</div>
		{/if}
	</div>
</section>
