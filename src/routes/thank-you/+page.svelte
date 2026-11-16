<script lang="ts">
	import { reveal } from '$lib/reveal';
	import { loadOrder, formatPrice } from '$lib/bag.svelte';

	const order = loadOrder();
</script>

<svelte:head>
	<title>{order ? `Order ${order.id} confirmed` : 'Thank you'} — Tina Style</title>
	<meta name="description" content="Your Tina Style order confirmation." />
	<meta name="robots" content="noindex" />
</svelte:head>

<section class="px-4 pb-10 pt-8 sm:px-8 lg:px-16 lg:pt-12 xl:px-24">
	<div class="mx-auto max-w-[720px]">
		{#if !order}
			<div use:reveal class="rounded-2xl bg-white p-8 text-center shadow-sm">
				<p class="font-display text-[22px] font-bold">No order here yet</p>
				<p class="mx-auto mt-2 max-w-[360px] text-[13px] leading-relaxed text-stone-600">
					This page shows your confirmation right after you place an order.
				</p>
				<a href="/shop" class="mt-5 inline-block rounded-full bg-stone-900 px-5 py-2.5 text-[13px] font-semibold text-white transition hover:bg-stone-700 active:scale-95">
					Shop my favorites →
				</a>
			</div>
		{:else}
			<div use:reveal class="text-center">
				<span class="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100">
					<svg viewBox="0 0 24 24" class="h-8 w-8 fill-none stroke-emerald-600" stroke-width="2.5"><path d="m5 13 4 4L19 7" /></svg>
				</span>
				<h1 class="mt-4 font-display text-[28px] font-bold leading-tight sm:text-[36px]">
					Thanks, {order.firstName}! Your order is confirmed.
				</h1>
				<p class="mx-auto mt-2 max-w-[440px] text-[14px] leading-relaxed text-stone-600">
					Order <b class="text-stone-900">{order.id}</b> · {order.date} · a confirmation is on its way to
					<b class="text-stone-900"> {order.email}</b>.
				</p>
			</div>

			<div use:reveal class="mt-8 rounded-2xl bg-white p-5 shadow-sm sm:p-6">
				<h2 class="font-display text-[18px] font-bold">What you ordered</h2>
				<ul class="mt-4 space-y-3">
					{#each order.items as item}
						<li class="flex items-center gap-3">
							<img src={item.img} alt={item.name} class="h-[56px] w-[48px] shrink-0 rounded-lg object-cover" />
							<span class="min-w-0 flex-1">
								<span class="block text-[13px] font-semibold leading-tight sm:text-[14px]">{item.name}</span>
								<span class="block text-[12px] text-stone-500">Qty {item.qty} · {formatPrice(item.price)} each</span>
							</span>
							<span class="shrink-0 text-[13px] font-semibold sm:text-[14px]">{formatPrice(item.price * item.qty)}</span>
						</li>
					{/each}
				</ul>
				<dl class="mt-4 space-y-2 border-t border-stone-200 pt-4 text-[13px] sm:text-[14px]">
					<div class="flex justify-between">
						<dt class="text-stone-600">Subtotal</dt>
						<dd class="font-semibold">{formatPrice(order.subtotal)}</dd>
					</div>
					<div class="flex justify-between">
						<dt class="text-stone-600">Shipping ({order.method === 'express' ? 'Express' : 'Standard'})</dt>
						<dd class="font-semibold">{order.shipping === 0 ? 'FREE' : formatPrice(order.shipping)}</dd>
					</div>
					<div class="flex justify-between border-t border-stone-200 pt-3 text-[15px] font-bold sm:text-[16px]">
						<dt>Total paid</dt>
						<dd>{formatPrice(order.total)}</dd>
					</div>
				</dl>
				<p class="mt-3 text-[12px] text-stone-500">Paid with card ending in •••• {order.cardLast4} (demo — no real payment was taken).</p>
			</div>

			<div use:reveal={70} class="mt-4 grid gap-4 sm:grid-cols-2">
				<div class="rounded-2xl bg-white p-5 shadow-sm">
					<h2 class="font-display text-[16px] font-bold">Shipping to</h2>
					<p class="mt-2 text-[13px] leading-relaxed text-stone-600">
						{order.firstName} {order.lastName}<br />
						{order.address}<br />
						{order.city}, {order.zip}<br />
						{order.country}
					</p>
				</div>
				<div class="rounded-2xl bg-white p-5 shadow-sm">
					<h2 class="font-display text-[16px] font-bold">What happens next</h2>
					<p class="mt-2 text-[13px] leading-relaxed text-stone-600">
						Estimated delivery: <b class="text-stone-900">{order.deliveryFrom} – {order.deliveryTo}</b>.
						You'll get a shipping email with tracking when your order leaves.
					</p>
				</div>
			</div>

			<div use:reveal class="mt-6 flex flex-wrap items-center justify-center gap-3">
				<a href="/shop" class="rounded-full bg-stone-900 px-5 py-2.5 text-[13px] font-semibold text-white transition hover:bg-stone-700 active:scale-95">
					Continue shopping →
				</a>
				<a href="/faq" class="rounded-full border border-stone-400 bg-white px-5 py-2.5 text-[13px] font-semibold text-stone-900 transition hover:bg-stone-100 active:scale-95">
					Questions? See the FAQ
				</a>
			</div>
			<p class="mt-4 text-center text-[12px] text-stone-500">
				Need help with this order? Write to <a href="mailto:hello@tinastyle.com" class="font-semibold text-stone-900 hover:underline">hello@tinastyle.com</a> and quote order {order.id}.
			</p>
		{/if}
	</div>
</section>
