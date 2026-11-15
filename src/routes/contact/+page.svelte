<script lang="ts">
	import { reveal } from '$lib/reveal';
	import Socials from '$lib/Socials.svelte';

	let name = $state('');
	let email = $state('');
	let brand = $state('');
	let budget = $state('');
	let message = $state('');
	let sent = $state(false);
	let error = $state('');

	function send(e: SubmitEvent) {
		e.preventDefault();
		error = '';
		if (name.trim().length < 2) return (error = 'Please tell me your name.');
		if (!email.includes('@') || email.trim().length < 5) return (error = 'Please enter a valid email address.');
		if (message.trim().length < 10) return (error = 'Please write a little more about your idea (at least 10 characters).');
		sent = true;
	}
</script>

<svelte:head>
	<title>Work With Me — Tina Style</title>
	<meta name="description" content="Work with Tina — brand collaborations, sponsored trips, product reviews and affiliate partnerships. Send your idea and she'll reply within 2–3 days." />
</svelte:head>

<section class="px-4 pb-10 pt-8 sm:px-8 lg:px-16 lg:pt-12 xl:px-24">
	<div class="mx-auto max-w-6xl">
		<div use:reveal class="text-center">
			<p class="text-[11px] font-bold tracking-[0.24em] text-stone-500">WORK WITH ME</p>
			<h1 class="mt-2 font-display text-[32px] font-bold leading-tight sm:text-[40px] lg:text-[48px]">Let’s Create Together</h1>
			<p class="mx-auto mt-2 max-w-[520px] text-[14px] leading-relaxed text-stone-600">
				Brand collaborations, sponsored trips, product reviews &amp; more — tell me about your idea.
			</p>
		</div>

		<div class="mt-8 grid gap-6 lg:grid-cols-[1.2fr_1fr] lg:gap-10">
			<!-- Form -->
			<div use:reveal class="rounded-2xl bg-white p-5 shadow-sm sm:p-6">
				{#if sent}
					<div class="py-8 text-center">
						<span class="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-emerald-100">
							<svg viewBox="0 0 24 24" class="h-7 w-7 fill-none stroke-emerald-600" stroke-width="2.5"><path d="m5 13 4 4L19 7" /></svg>
						</span>
						<h2 class="mt-4 font-display text-[22px] font-bold">Message sent! ✨</h2>
						<p class="mx-auto mt-2 max-w-[360px] text-[13px] leading-relaxed text-stone-600">
							Thank you, {name}! I’ll reply to {email} within 2–3 days. Talk soon!
						</p>
						<button
							type="button"
							onclick={() => { sent = false; name = ''; email = ''; brand = ''; budget = ''; message = ''; }}
							class="mt-5 rounded-full border border-stone-300 px-4 py-2 text-[13px] font-semibold transition hover:bg-stone-100 active:scale-95"
						>
							Send another message
						</button>
					</div>
				{:else}
					<form onsubmit={send} class="space-y-4">
						<div class="grid gap-4 sm:grid-cols-2">
							<div>
								<label for="c-name" class="text-[12px] font-semibold text-stone-700">Your name *</label>
								<input id="c-name" type="text" required bind:value={name} placeholder="Jane Smith" class="mt-1 w-full rounded-xl border border-stone-300 bg-cream px-3 py-2.5 text-[14px] outline-none focus:border-stone-900" />
							</div>
							<div>
								<label for="c-email" class="text-[12px] font-semibold text-stone-700">Email *</label>
								<input id="c-email" type="email" required bind:value={email} placeholder="jane@brand.com" class="mt-1 w-full rounded-xl border border-stone-300 bg-cream px-3 py-2.5 text-[14px] outline-none focus:border-stone-900" />
							</div>
						</div>
						<div class="grid gap-4 sm:grid-cols-2">
							<div>
								<label for="c-brand" class="text-[12px] font-semibold text-stone-700">Brand / Company</label>
								<input id="c-brand" type="text" bind:value={brand} placeholder="Your brand" class="mt-1 w-full rounded-xl border border-stone-300 bg-cream px-3 py-2.5 text-[14px] outline-none focus:border-stone-900" />
							</div>
							<div>
								<label for="c-budget" class="text-[12px] font-semibold text-stone-700">Budget range</label>
								<select id="c-budget" bind:value={budget} class="mt-1 w-full rounded-xl border border-stone-300 bg-cream px-3 py-2.5 text-[14px] outline-none focus:border-stone-900">
									<option value="">Select a range</option>
									<option value="under-500">Under $500</option>
									<option value="500-2000">$500 – $2,000</option>
									<option value="2000-5000">$2,000 – $5,000</option>
									<option value="5000-plus">$5,000+</option>
									<option value="gifting">Product gifting</option>
								</select>
							</div>
						</div>
						<div>
							<label for="c-message" class="text-[12px] font-semibold text-stone-700">Your idea *</label>
							<textarea id="c-message" required rows="5" bind:value={message} placeholder="Tell me about your brand, the campaign, and what you have in mind…" class="mt-1 w-full resize-none rounded-xl border border-stone-300 bg-cream px-3 py-2.5 text-[14px] outline-none focus:border-stone-900"></textarea>
						</div>
						{#if error}
							<p class="text-[13px] font-medium text-red-600">{error}</p>
						{/if}
						<button type="submit" class="w-full rounded-full bg-stone-900 py-3 text-[14px] font-semibold text-white transition hover:bg-stone-700 active:scale-[0.98]">
							Send message →
						</button>
						<p class="text-center text-[12px] text-stone-500">
							No spam, ever. Your details stay between us.
						</p>
					</form>
				{/if}
			</div>

			<!-- Info -->
			<div>
				<div use:reveal class="rounded-2xl bg-white p-5 shadow-sm sm:p-6">
					<h2 class="font-display text-[18px] font-bold">Ways to collaborate</h2>
					<ul class="mt-3 space-y-2.5 text-[13px] leading-relaxed text-stone-600">
						<li>✨ <b class="text-stone-900">Sponsored posts</b> — Instagram &amp; blog features</li>
						<li>✈️ <b class="text-stone-900">Brand trips</b> — travel &amp; hotel partnerships</li>
						<li>💄 <b class="text-stone-900">Product reviews</b> — honest, tested, on-camera</li>
						<li>🛍️ <b class="text-stone-900">Affiliate partnerships</b> — long-term favourites</li>
						<li>🎥 <b class="text-stone-900">Video features</b> — vlogs &amp; YouTube integrations</li>
					</ul>
				</div>
				<div use:reveal={70} class="mt-4 rounded-2xl bg-sand p-5 shadow-sm sm:p-6">
					<h2 class="font-display text-[18px] font-bold">Prefer email?</h2>
					<p class="mt-2 text-[13px] leading-relaxed text-stone-600">
						Write to me directly — I usually reply within 2–3 days.
					</p>
					<a href="mailto:hello@tinastyle.com" class="mt-2 inline-block text-[14px] font-semibold text-stone-900 hover:underline">hello@tinastyle.com</a>
					<Socials containerClass="mt-4 flex items-center gap-3" />
				</div>
			</div>
		</div>
	</div>
</section>
