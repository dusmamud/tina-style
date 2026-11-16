<script lang="ts">
	import { goto } from '$app/navigation';
	import { reveal } from '$lib/reveal';
	import {
		bag, getCartCount, getSubtotal, shippingCost, STANDARD_SHIPPING, EXPRESS_SHIPPING, FREE_SHIPPING_AT,
		formatPrice, clearBag, makeOrderId, deliveryWindow, saveOrder, productOf, type Order
	} from '$lib/bag.svelte';

	let email = $state('');
	let firstName = $state('');
	let lastName = $state('');
	let address = $state('');
	let city = $state('');
	let zip = $state('');
	let country = $state('United States');
	let method = $state<'standard' | 'express'>('standard');
	let cardName = $state('');
	let cardNumber = $state('');
	let expiry = $state('');
	let cvc = $state('');
	let errors = $state<Record<string, string>>({});
	let placing = $state(false);

	const shipping = $derived(shippingCost(method));
	const total = $derived(getSubtotal() + shipping);

	function luhn(num: string): boolean {
		const digits = num.replace(/\D/g, '');
		if (digits.length !== 16) return false;
		let sum = 0;
		for (let i = 0; i < 16; i++) {
			let d = parseInt(digits[15 - i], 10);
			if (i % 2 === 1) {
				d *= 2;
				if (d > 9) d -= 9;
			}
			sum += d;
		}
		return sum % 10 === 0;
	}

	function formatCard(v: string): string {
		return v.replace(/\D/g, '').slice(0, 16).replace(/(\d{4})(?=\d)/g, '$1 ');
	}

	function formatExpiry(v: string): string {
		const d = v.replace(/\D/g, '').slice(0, 4);
		if (d.length <= 2) return d;
		return d.slice(0, 2) + '/' + d.slice(2);
	}

	function validate(): boolean {
		const e: Record<string, string> = {};
		if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) e.email = 'Enter a valid email address.';
		if (firstName.trim().length < 2) e.firstName = 'Enter your first name.';
		if (lastName.trim().length < 2) e.lastName = 'Enter your last name.';
		if (address.trim().length < 5) e.address = 'Enter your street address.';
		if (city.trim().length < 2) e.city = 'Enter your city.';
		if (zip.trim().length < 3) e.zip = 'Enter your ZIP / postal code.';
		if (cardName.trim().length < 2) e.cardName = 'Enter the name on the card.';
		if (!luhn(cardNumber)) e.cardNumber = 'Enter a valid 16-digit card number.';
		const m = expiry.match(/^(\d{2})\/(\d{2})$/);
		if (!m || +m[1] < 1 || +m[1] > 12) e.expiry = 'Use MM/YY.';
		else {
			const exp = new Date(2000 + +m[2], +m[1], 0);
			if (exp < new Date()) e.expiry = 'This card has expired.';
		}
		if (!/^\d{3,4}$/.test(cvc.trim())) e.cvc = 'Enter the 3–4 digit security code.';
		errors = e;
		return Object.keys(e).length === 0;
	}

	function placeOrder(e: SubmitEvent) {
		e.preventDefault();
		if (placing) return;
		if (!validate()) {
			const first = document.querySelector('[data-error="true"]');
			first?.scrollIntoView({ behavior: 'smooth', block: 'center' });
			return;
		}
		placing = true;
		const win = deliveryWindow(method);
		const order: Order = {
			id: makeOrderId(),
			date: new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }),
			email: email.trim(),
			firstName: firstName.trim(),
			lastName: lastName.trim(),
			address: address.trim(),
			city: city.trim(),
			zip: zip.trim(),
			country,
			method,
			cardLast4: cardNumber.replace(/\D/g, '').slice(-4),
			items: bag.map((i) => {
				const p = productOf(i)!;
				return { slug: p.slug, name: p.name, img: p.img, price: p.amount, qty: i.qty };
			}),
			subtotal: getSubtotal(),
			shipping,
			total,
			deliveryFrom: win.from,
			deliveryTo: win.to
		};
		saveOrder(order);
		clearBag();
		goto('/thank-you');
	}

	const inputCls = (bad: boolean) =>
		`mt-1 w-full rounded-xl border bg-cream px-3 py-2.5 text-[14px] outline-none ${bad ? 'border-red-500' : 'border-stone-300 focus:border-stone-900'}`;
</script>

<svelte:head>
	<title>Checkout — Tina Style</title>
	<meta name="description" content="Checkout — contact, shipping and payment for your Tina Style order." />
</svelte:head>

<section class="px-4 pb-10 pt-8 sm:px-8 lg:px-16 lg:pt-12 xl:px-24">
	<div class="mx-auto max-w-6xl">
		<div use:reveal>
			<p class="text-[11px] font-bold tracking-[0.24em] text-stone-500">CHECKOUT</p>
			<h1 class="mt-2 font-display text-[32px] font-bold leading-tight sm:text-[40px]">Checkout</h1>
			<!-- Progress: Cart (done) → Details & payment (now) → Confirmation -->
			<ol class="mt-4 flex items-center gap-2 text-[12px] font-semibold sm:text-[13px]">
				<li><a href="/cart" class="flex items-center gap-1.5 text-emerald-700">✓ Cart</a></li>
				<li aria-hidden="true" class="text-stone-300">—</li>
				<li class="flex items-center gap-1.5 text-stone-900"><span class="flex h-5 w-5 items-center justify-center rounded-full bg-stone-900 text-[11px] text-white">2</span> Details &amp; payment</li>
				<li aria-hidden="true" class="text-stone-300">—</li>
				<li class="flex items-center gap-1.5 text-stone-400"><span class="flex h-5 w-5 items-center justify-center rounded-full bg-stone-200 text-[11px]">3</span> Confirmation</li>
			</ol>
		</div>

		{#if bag.length === 0 && !placing}
			<div use:reveal class="mt-8 rounded-2xl bg-white p-8 text-center shadow-sm">
				<p class="font-display text-[22px] font-bold">Your bag is empty</p>
				<p class="mx-auto mt-2 max-w-[360px] text-[13px] leading-relaxed text-stone-600">
					There's nothing to check out yet — add something from the shop first.
				</p>
				<a href="/shop" class="mt-5 inline-block rounded-full bg-stone-900 px-5 py-2.5 text-[13px] font-semibold text-white transition hover:bg-stone-700 active:scale-95">
					Shop my favorites →
				</a>
			</div>
		{:else}
			<form onsubmit={placeOrder} class="mt-8 grid gap-6 lg:grid-cols-[1.6fr_1fr] lg:gap-10">
				<div class="space-y-6">
					<!-- Contact -->
					<section use:reveal class="rounded-2xl bg-white p-5 shadow-sm sm:p-6">
						<h2 class="font-display text-[18px] font-bold">Contact</h2>
						<p class="mt-1 text-[12px] text-stone-500">Guest checkout — no account needed. Your confirmation goes here.</p>
						<div class="mt-4" data-error={!!errors.email}>
							<label for="co-email" class="text-[12px] font-semibold text-stone-700">Email *</label>
							<input id="co-email" type="email" bind:value={email} placeholder="you@example.com" autocomplete="email" class={inputCls(!!errors.email)} />
							{#if errors.email}<p class="mt-1 text-[12px] font-medium text-red-600">{errors.email}</p>{/if}
						</div>
					</section>

					<!-- Shipping address -->
					<section use:reveal class="rounded-2xl bg-white p-5 shadow-sm sm:p-6">
						<h2 class="font-display text-[18px] font-bold">Shipping address</h2>
						<div class="mt-4 grid gap-4 sm:grid-cols-2">
							<div data-error={!!errors.firstName}>
								<label for="co-first" class="text-[12px] font-semibold text-stone-700">First name *</label>
								<input id="co-first" type="text" bind:value={firstName} placeholder="Tina" autocomplete="given-name" class={inputCls(!!errors.firstName)} />
								{#if errors.firstName}<p class="mt-1 text-[12px] font-medium text-red-600">{errors.firstName}</p>{/if}
							</div>
							<div data-error={!!errors.lastName}>
								<label for="co-last" class="text-[12px] font-semibold text-stone-700">Last name *</label>
								<input id="co-last" type="text" bind:value={lastName} placeholder="Style" autocomplete="family-name" class={inputCls(!!errors.lastName)} />
								{#if errors.lastName}<p class="mt-1 text-[12px] font-medium text-red-600">{errors.lastName}</p>{/if}
							</div>
						</div>
						<div class="mt-4" data-error={!!errors.address}>
							<label for="co-address" class="text-[12px] font-semibold text-stone-700">Street address *</label>
							<input id="co-address" type="text" bind:value={address} placeholder="Street and number" autocomplete="street-address" class={inputCls(!!errors.address)} />
							{#if errors.address}<p class="mt-1 text-[12px] font-medium text-red-600">{errors.address}</p>{/if}
						</div>
						<div class="mt-4 grid gap-4 sm:grid-cols-3">
							<div data-error={!!errors.city}>
								<label for="co-city" class="text-[12px] font-semibold text-stone-700">City *</label>
								<input id="co-city" type="text" bind:value={city} placeholder="City" autocomplete="address-level2" class={inputCls(!!errors.city)} />
								{#if errors.city}<p class="mt-1 text-[12px] font-medium text-red-600">{errors.city}</p>{/if}
							</div>
							<div data-error={!!errors.zip}>
								<label for="co-zip" class="text-[12px] font-semibold text-stone-700">ZIP / Postal code *</label>
								<input id="co-zip" type="text" bind:value={zip} placeholder="10001" autocomplete="postal-code" class={inputCls(!!errors.zip)} />
								{#if errors.zip}<p class="mt-1 text-[12px] font-medium text-red-600">{errors.zip}</p>{/if}
							</div>
							<div>
								<label for="co-country" class="text-[12px] font-semibold text-stone-700">Country</label>
								<select id="co-country" bind:value={country} autocomplete="country-name" class={inputCls(false)}>
									{#each ['United States', 'United Kingdom', 'Canada', 'India', 'Australia', 'Germany', 'France', 'Other'] as c}
										<option value={c}>{c}</option>
									{/each}
								</select>
							</div>
						</div>

						<!-- Shipping method -->
						<fieldset class="mt-6">
							<legend class="text-[12px] font-semibold text-stone-700">Shipping method</legend>
							<div class="mt-2 space-y-2">
								<label class="flex cursor-pointer items-center justify-between gap-3 rounded-xl border px-4 py-3 {method === 'standard' ? 'border-stone-900 bg-cream' : 'border-stone-300'}">
									<span class="flex items-center gap-3">
										<input type="radio" name="method" value="standard" bind:group={method} class="accent-stone-900" />
										<span>
											<span class="block text-[13px] font-semibold">Standard · 3–5 business days</span>
											<span class="block text-[12px] text-stone-500">Free over {formatPrice(FREE_SHIPPING_AT)}</span>
										</span>
									</span>
									<span class="text-[13px] font-bold">{shippingCost('standard') === 0 ? 'FREE' : formatPrice(STANDARD_SHIPPING)}</span>
								</label>
								<label class="flex cursor-pointer items-center justify-between gap-3 rounded-xl border px-4 py-3 {method === 'express' ? 'border-stone-900 bg-cream' : 'border-stone-300'}">
									<span class="flex items-center gap-3">
										<input type="radio" name="method" value="express" bind:group={method} class="accent-stone-900" />
										<span>
											<span class="block text-[13px] font-semibold">Express · 1–2 business days</span>
											<span class="block text-[12px] text-stone-500">Fastest delivery</span>
										</span>
									</span>
									<span class="text-[13px] font-bold">{formatPrice(EXPRESS_SHIPPING)}</span>
								</label>
							</div>
						</fieldset>
					</section>

					<!-- Payment -->
					<section use:reveal class="rounded-2xl bg-white p-5 shadow-sm sm:p-6">
						<h2 class="font-display text-[18px] font-bold">Payment</h2>
						<p class="mt-2 rounded-xl bg-amber-50 px-3 py-2 text-[12px] leading-relaxed text-amber-800">
							⚠️ Demo checkout — no real payment is processed and nothing is shipped. To take real
							payments, connect a payment provider (e.g. Stripe).
						</p>
						<div class="mt-4" data-error={!!errors.cardName}>
							<label for="co-cardname" class="text-[12px] font-semibold text-stone-700">Name on card *</label>
							<input id="co-cardname" type="text" bind:value={cardName} placeholder="Tina Style" autocomplete="cc-name" class={inputCls(!!errors.cardName)} />
							{#if errors.cardName}<p class="mt-1 text-[12px] font-medium text-red-600">{errors.cardName}</p>{/if}
						</div>
						<div class="mt-4" data-error={!!errors.cardNumber}>
							<label for="co-card" class="text-[12px] font-semibold text-stone-700">Card number *</label>
							<input
								id="co-card"
								type="text"
								inputmode="numeric"
								value={cardNumber}
								oninput={(e) => (cardNumber = formatCard((e.target as HTMLInputElement).value))}
								placeholder="4242 4242 4242 4242"
								autocomplete="cc-number"
								class={inputCls(!!errors.cardNumber)}
							/>
							{#if errors.cardNumber}<p class="mt-1 text-[12px] font-medium text-red-600">{errors.cardNumber}</p>{/if}
						</div>
						<div class="mt-4 grid grid-cols-2 gap-4">
							<div data-error={!!errors.expiry}>
								<label for="co-exp" class="text-[12px] font-semibold text-stone-700">Expiry (MM/YY) *</label>
								<input
									id="co-exp"
									type="text"
									inputmode="numeric"
									value={expiry}
									oninput={(e) => (expiry = formatExpiry((e.target as HTMLInputElement).value))}
									placeholder="08/28"
									autocomplete="cc-exp"
									class={inputCls(!!errors.expiry)}
								/>
								{#if errors.expiry}<p class="mt-1 text-[12px] font-medium text-red-600">{errors.expiry}</p>{/if}
							</div>
							<div data-error={!!errors.cvc}>
								<label for="co-cvc" class="text-[12px] font-semibold text-stone-700">Security code *</label>
								<input id="co-cvc" type="text" inputmode="numeric" bind:value={cvc} placeholder="123" autocomplete="cc-csc" maxlength="4" class={inputCls(!!errors.cvc)} />
								{#if errors.cvc}<p class="mt-1 text-[12px] font-medium text-red-600">{errors.cvc}</p>{/if}
							</div>
						</div>
						<p class="mt-3 text-[11px] leading-relaxed text-stone-500">
							🔒 Your card details never leave this page in demo mode — they are checked in your
							browser only and are not sent or stored anywhere.
						</p>
					</section>
				</div>

				<!-- Order summary -->
				<aside use:reveal={70} class="h-fit rounded-2xl bg-white p-5 shadow-sm sm:p-6 lg:sticky lg:top-24">
					<h2 class="font-display text-[18px] font-bold">Order summary</h2>
					<ul class="mt-4 space-y-3">
						{#each bag as item}
							{@const p = productOf(item)}
							{#if p}
								<li class="flex items-center gap-3">
									<span class="relative shrink-0">
										<img src={p.img} alt={p.name} class="h-[52px] w-[44px] rounded-lg object-cover" />
										<span class="absolute -right-1.5 -top-1.5 flex h-5 w-5 items-center justify-center rounded-full bg-stone-900 text-[10px] font-bold text-white">{item.qty}</span>
									</span>
									<span class="min-w-0 flex-1 text-[13px] font-medium leading-tight">{p.name}</span>
									<span class="shrink-0 text-[13px] font-semibold">{formatPrice(p.amount * item.qty)}</span>
								</li>
							{/if}
						{/each}
					</ul>
					<dl class="mt-4 space-y-2 border-t border-stone-200 pt-4 text-[13px] sm:text-[14px]">
						<div class="flex justify-between">
							<dt class="text-stone-600">Subtotal</dt>
							<dd class="font-semibold">{formatPrice(getSubtotal())}</dd>
						</div>
						<div class="flex justify-between">
							<dt class="text-stone-600">Shipping ({method === 'express' ? 'Express' : 'Standard'})</dt>
							<dd class="font-semibold">{shipping === 0 ? 'FREE' : formatPrice(shipping)}</dd>
						</div>
						<div class="flex justify-between border-t border-stone-200 pt-3 text-[15px] font-bold sm:text-[16px]">
							<dt>Total</dt>
							<dd>{formatPrice(total)}</dd>
						</div>
					</dl>
					<button
						type="submit"
						disabled={placing}
						class="mt-5 w-full rounded-full bg-stone-900 py-3 text-[14px] font-semibold text-white transition hover:bg-stone-700 active:scale-[0.98] disabled:opacity-60"
					>
						{placing ? 'Placing your order…' : `Place order · ${formatPrice(total)}`}
					</button>
					<p class="mt-3 text-center text-[11px] leading-relaxed text-stone-500">
						🔒 Secure checkout · 30-day returns · By placing this order you agree to the
						<a href="/terms" class="underline hover:text-stone-900">Terms</a>
					</p>
				</aside>
			</form>
		{/if}
	</div>
</section>
