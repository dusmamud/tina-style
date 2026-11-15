<script lang="ts">
	type LinkCard = { title: string; sub: string; img: string; href: string };
	type Product = { name: string; price: string; img: string };

	const cards: LinkCard[] = [
		{ title: 'My Outfits', sub: 'Shop my looks', img: '/images/outfits.jpg', href: '#shop' },
		{ title: 'Travel Blog', sub: 'Destinations & tips', img: '/images/travel.jpg', href: '#vlog' },
		{ title: 'Beauty Favs', sub: 'My top products', img: '/images/beauty.webp', href: '#shop' },
		{ title: 'Work With Me', sub: 'Collabs & partnerships', img: '/images/work.jpg', href: '#newsletter' }
	];

	const products: Product[] = [
		{ name: 'Sunglasses', price: '$49.00', img: '/images/sunglasses.webp' },
		{ name: 'Handbag', price: '$89.00', img: '/images/handbag.jpg' },
		{ name: 'Perfume', price: '$59.00', img: '/images/perfume.webp' },
		{ name: 'Makeup Set', price: '$39.00', img: '/images/makeup.webp' }
	];

	let bag = $state<string[]>([]);
	let email = $state('');
	let subscribed = $state(false);
	let menuOpen = $state(false);

	function toggleBag(name: string) {
		bag = bag.includes(name) ? bag.filter((b) => b !== name) : [...bag, name];
	}

	function subscribe(e: SubmitEvent) {
		e.preventDefault();
		if (email.trim().length > 3 && email.includes('@')) subscribed = true;
	}
</script>

<svelte:head>
	<title>Tina Style — Fashion • Lifestyle • Travel</title>
	<meta
		name="description"
		content="Tina Style — sharing daily looks, travel spots and everything that makes life more beautiful."
	/>
</svelte:head>

<!-- Mobile: phone column (reference same-to-same). Desktop (lg+): full-bleed, no side gaps. -->
<div class="flex min-h-screen w-full flex-col bg-cream">
	<!-- Desktop top nav (mobile: hidden) -->
	<nav class="hidden items-center justify-between px-16 py-4 lg:flex" aria-label="Main">
		<a href="#top" class="font-display text-[22px] font-bold">Tina Style <span class="text-red-400">♥</span></a>
		<div class="flex items-center gap-8 text-[14px] font-medium text-stone-600">
			<a href="#shop" class="hover:text-stone-900">My Outfits</a>
			<a href="#vlog" class="hover:text-stone-900">Travel Blog</a>
			<a href="#shop" class="hover:text-stone-900">Shop</a>
			<a href="#newsletter" class="hover:text-stone-900">Newsletter</a>
			<a href="#newsletter" class="rounded-full bg-stone-900 px-4 py-2 text-white transition hover:bg-stone-700">Work With Me</a>
		</div>
	</nav>

	<!-- Hero -->
	<header class="relative h-[540px] overflow-hidden lg:h-[600px]">
		<img
			src="/images/hero.jpg"
			alt="Tina Style — woman in a white blazer and sunglasses in warm sunlight"
			class="h-full w-full object-cover object-[50%_20%] lg:object-[50%_22%]"
			fetchpriority="high"
		/>
		<div
			class="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/15 via-transparent to-cream"
		></div>

		<p
			class="absolute left-5 top-6 -rotate-3 font-script text-[34px] leading-[0.95] text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.45)] lg:left-10 lg:top-10 lg:text-[58px]"
		>
			Good<br />Style<br />Good<br />Mood <span class="text-[22px] lg:text-[34px]">♡</span>
		</p>

		<div class="absolute right-4 top-5 lg:hidden">
			<button
				type="button"
				aria-label="More options"
				aria-expanded={menuOpen}
				onclick={() => (menuOpen = !menuOpen)}
				class="flex h-10 w-10 items-center justify-center rounded-full bg-white/25 text-xl font-bold text-white backdrop-blur-md transition hover:bg-white/40"
			>
				•••
			</button>
			{#if menuOpen}
				<div
					class="absolute right-0 top-12 w-44 overflow-hidden rounded-xl bg-white text-sm shadow-xl"
				>
					<a href="#shop" onclick={() => (menuOpen = false)} class="block px-4 py-3 hover:bg-stone-100"
						>Shop my favorites</a
					>
					<a href="#vlog" onclick={() => (menuOpen = false)} class="block px-4 py-3 hover:bg-stone-100"
						>Watch my latest vlog</a
					>
					<a
						href="#newsletter"
						onclick={() => (menuOpen = false)}
						class="block px-4 py-3 hover:bg-stone-100">Join the newsletter</a
					>
				</div>
			{/if}
		</div>
	</header>

	<!-- Profile: mobile centered stack / desktop horizontal row -->
	<section
		class="relative z-10 -mt-[72px] px-5 text-center lg:-mt-[88px] lg:flex lg:items-end lg:gap-8 lg:px-16 lg:text-left"
	>
		<img
			src="/images/avatar.jpg"
			alt="Tina Style"
			class="mx-auto h-[124px] w-[124px] shrink-0 rounded-full border-[5px] border-cream object-cover shadow-lg lg:mx-0 lg:h-[168px] lg:w-[168px]"
		/>
		<div class="min-w-0 lg:pb-1">
			<h1
				class="mt-3 flex items-center justify-center gap-1.5 font-display text-[32px] font-bold leading-none lg:mt-0 lg:justify-start lg:text-[44px]"
			>
				Tina Style
				<svg viewBox="0 0 24 24" class="h-5 w-5 fill-stone-500 lg:h-6 lg:w-6" aria-label="Verified"
					><path
						d="M12 1.8 14.5 4l3.2-.3.7 3.1 2.9 1.5-1.3 3 1.3 3-2.9 1.5-.7 3.1-3.2-.3L12 22.2 9.5 20l-3.2.3-.7-3.1-2.9-1.5 1.3-3-1.3-3 2.9-1.5.7-3.1 3.2.3L12 1.8Zm-1.2 13.4 5-5-1.4-1.4-3.6 3.6-1.6-1.6-1.4 1.4 3 3Z"
					/></svg
				>
			</h1>
			<p class="mt-2 text-[11px] font-semibold tracking-[0.28em] text-stone-500 lg:text-[12px]">
				FASHION &nbsp;•&nbsp; LIFESTYLE &nbsp;•&nbsp; TRAVEL
			</p>
			<p
				class="mx-auto mt-2 max-w-[300px] text-[13px] leading-snug text-stone-600 lg:mx-0 lg:max-w-[520px] lg:text-[15px]"
			>
				Sharing my daily looks, travel spots and everything that makes life more beautiful ✨
			</p>

			<!-- Socials -->
			<nav aria-label="Social links" class="mt-4 flex items-center justify-center gap-3 lg:justify-start lg:gap-3.5">
				<a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram" class="flex h-10 w-10 items-center justify-center rounded-full border border-stone-300 bg-white/70 transition hover:bg-white lg:h-11 lg:w-11">
					<svg viewBox="0 0 24 24" class="h-5 w-5 fill-none stroke-stone-800" stroke-width="1.8"><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.2" cy="6.8" r="1" class="fill-stone-800 stroke-none" /></svg>
				</a>
				<a href="https://tiktok.com" target="_blank" rel="noreferrer" aria-label="TikTok" class="flex h-10 w-10 items-center justify-center rounded-full border border-stone-300 bg-white/70 transition hover:bg-white lg:h-11 lg:w-11">
					<svg viewBox="0 0 24 24" class="h-5 w-5 fill-stone-800"><path d="M16.6 3c.4 2.1 1.8 3.6 3.9 3.9v3.1c-1.5 0-2.9-.5-3.9-1.3v6.1c0 3.4-2.6 6.2-6 6.2A5.9 5.9 0 0 1 4.5 15c0-3.3 2.7-6 6-6 .3 0 .7 0 1 .1v3.2a2.8 2.8 0 0 0-1-.2 2.9 2.9 0 0 0-3 2.9 2.9 2.9 0 0 0 3 2.9c1.7 0 3-1.3 3-3V3h3.1Z" /></svg>
				</a>
				<a href="https://youtube.com" target="_blank" rel="noreferrer" aria-label="YouTube" class="flex h-10 w-10 items-center justify-center rounded-full border border-stone-300 bg-white/70 transition hover:bg-white lg:h-11 lg:w-11">
					<svg viewBox="0 0 24 24" class="h-5 w-5 fill-stone-800"><path d="M22 8.2a3 3 0 0 0-2.1-2.1C18 5.5 12 5.5 12 5.5s-6 0-7.9.6A3 3 0 0 0 2 8.2 31 31 0 0 0 1.6 12 31 31 0 0 0 2 15.8a3 3 0 0 0 2.1 2.1c1.9.6 7.9.6 7.9.6s6 0 7.9-.6a3 3 0 0 0 2.1-2.1A31 31 0 0 0 22.4 12 31 31 0 0 0 22 8.2ZM10 15V9l5.2 3L10 15Z" /></svg>
				</a>
				<a href="https://pinterest.com" target="_blank" rel="noreferrer" aria-label="Pinterest" class="flex h-10 w-10 items-center justify-center rounded-full border border-stone-300 bg-white/70 transition hover:bg-white lg:h-11 lg:w-11">
					<svg viewBox="0 0 24 24" class="h-5 w-5 fill-stone-800"><path d="M12 2a10 10 0 0 0-3.6 19.3c-.1-.8-.2-2 0-2.9l1.2-4.9s-.3-.6-.3-1.5c0-1.4.8-2.5 1.9-2.5.9 0 1.3.7 1.3 1.5 0 .9-.6 2.2-.9 3.5-.2 1 .5 1.9 1.5 1.9 1.9 0 3.3-2 3.3-4.8 0-2.5-1.8-4.3-4.4-4.3a4.6 4.6 0 0 0-4.8 4.6c0 .9.4 1.9.8 2.4.1.1.1.2.1.3l-.3 1.2c0 .2-.2.2-.4.1-1.2-.6-2-2.4-2-3.9 0-3.2 2.3-6.1 6.7-6.1 3.5 0 6.2 2.5 6.2 5.8 0 3.5-2.2 6.3-5.3 6.3-1 0-2-.5-2.3-1.2l-.6 2.4c-.2.9-.8 1.9-1.3 2.6A10 10 0 1 0 12 2Z" /></svg>
				</a>
				<a href="mailto:hello@tinastyle.com" aria-label="Email" class="flex h-10 w-10 items-center justify-center rounded-full border border-stone-300 bg-white/70 transition hover:bg-white lg:h-11 lg:w-11">
					<svg viewBox="0 0 24 24" class="h-5 w-5 fill-none stroke-stone-800" stroke-width="1.8"><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3.5 7 8.5 6 8.5-6" /></svg>
				</a>
			</nav>
		</div>
	</section>

	<!-- Link cards -->
	<section class="px-4 pt-5 lg:px-16 lg:pt-8">
		<div class="grid grid-cols-4 gap-2 lg:gap-4">
			{#each cards as card}
				<a
					href={card.href}
					class="group overflow-hidden rounded-xl bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
				>
					<img src={card.img} alt={card.title} loading="lazy" class="h-[64px] w-full object-cover lg:h-[220px]" />
					<span class="flex items-center justify-between px-2 pb-1.5 pt-1.5 lg:px-3 lg:pb-3 lg:pt-3">
						<span>
							<span class="block text-[11px] font-bold leading-tight lg:text-[15px]">{card.title}</span>
							<span class="block text-[9px] leading-tight text-stone-500 lg:text-[12px]">{card.sub}</span>
						</span>
						<span class="text-[11px] text-stone-500 lg:text-[15px]">›</span>
					</span>
				</a>
			{/each}
		</div>
	</section>

	<!-- Featured vlog -->
	<section id="vlog" class="px-4 pt-4 lg:px-16 lg:pt-6">
		<a
			href="https://www.youtube.com"
			target="_blank"
			rel="noreferrer"
			class="group relative block h-[196px] overflow-hidden rounded-2xl shadow-md lg:h-[420px]"
		>
			<img
				src="/images/vlog-paris.jpg"
				alt="Tina Style — A day in my life in Paris"
				loading="lazy"
				class="h-full w-full object-cover transition duration-500 group-hover:scale-105"
			/>
			<div class="absolute inset-0 bg-gradient-to-r from-black/55 via-black/20 to-transparent"></div>
			<div class="absolute left-4 top-1/2 w-[62%] -translate-y-1/2 text-white lg:left-10 lg:w-[46%]">
				<span class="rounded-full bg-black/45 px-2.5 py-1 text-[9px] font-bold tracking-[0.2em] lg:text-[11px]">FEATURED</span>
				<p class="mt-2 font-display text-[28px] font-bold leading-[1.05] lg:text-[48px]">My Latest<br />Vlog</p>
				<p class="mt-1 text-[11px] text-white/90 lg:mt-2 lg:text-[15px]">A day in my life in Paris 🗼</p>
				<span class="mt-2.5 inline-flex items-center gap-1.5 rounded-full bg-white px-3 py-1.5 text-[11px] font-semibold text-stone-900 lg:mt-4 lg:px-4 lg:py-2 lg:text-[13px]">
					<svg viewBox="0 0 24 24" class="h-3.5 w-3.5 fill-red-600"><path d="M22 8.2a3 3 0 0 0-2.1-2.1C18 5.5 12 5.5 12 5.5s-6 0-7.9.6A3 3 0 0 0 2 8.2 31 31 0 0 0 1.6 12 31 31 0 0 0 2 15.8a3 3 0 0 0 2.1 2.1c1.9.6 7.9.6 7.9.6s6 0 7.9-.6a3 3 0 0 0 2.1-2.1A31 31 0 0 0 22.4 12 31 31 0 0 0 22 8.2ZM10 15V9l5.2 3L10 15Z" /></svg>
					Watch on YouTube ›
				</span>
			</div>
			<span
				class="absolute right-5 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border-2 border-white/90 bg-black/25 text-white backdrop-blur-sm transition group-hover:scale-110 lg:right-10 lg:h-16 lg:w-16"
			>
				<svg viewBox="0 0 24 24" class="ml-0.5 h-5 w-5 fill-white lg:h-7 lg:w-7"><path d="M8 5v14l11-7L8 5Z" /></svg>
			</span>
		</a>
	</section>

	<!-- Shop -->
	<section id="shop" class="px-4 pt-5 lg:px-16 lg:pt-8">
		<div class="flex items-center justify-between">
			<h2 class="font-display text-[19px] font-bold lg:text-[28px]">Shop My Favorites</h2>
			<a
				href="#shop"
				class="rounded-full bg-stone-900 px-3 py-1.5 text-[11px] font-semibold text-white transition hover:bg-stone-700 lg:px-4 lg:py-2 lg:text-[13px]"
			>
				View All Products ›
			</a>
		</div>
		{#if bag.length > 0}
			<p class="mt-1 text-[11px] font-medium text-stone-600 lg:text-[13px]">
				🛍️ {bag.length} item{bag.length > 1 ? 's' : ''} in your bag: {bag.join(', ')}
			</p>
		{/if}
		<div class="mt-3 grid grid-cols-4 gap-2 lg:gap-4">
			{#each products as p}
				<div class="overflow-hidden rounded-xl bg-white shadow-sm">
					<img src={p.img} alt={p.name} loading="lazy" class="h-[72px] w-full object-cover lg:h-[280px]" />
					<div class="flex items-center justify-between px-2 py-1.5 lg:px-3 lg:py-3">
						<span>
							<span class="block text-[11px] font-semibold leading-tight lg:text-[15px]">{p.name}</span>
							<span class="block text-[10px] text-stone-500 lg:text-[13px]">{p.price}</span>
						</span>
						<button
							type="button"
							aria-label={bag.includes(p.name) ? `Remove ${p.name} from bag` : `Add ${p.name} to bag`}
							aria-pressed={bag.includes(p.name)}
							onclick={() => toggleBag(p.name)}
							class="flex h-6 w-6 shrink-0 items-center justify-center rounded-full {bag.includes(p.name)
								? 'bg-emerald-600 text-white'
								: 'bg-stone-900 text-white'} transition hover:scale-110 lg:h-9 lg:w-9"
						>
							{#if bag.includes(p.name)}
								<svg viewBox="0 0 24 24" class="h-3.5 w-3.5 fill-none stroke-white lg:h-4 lg:w-4" stroke-width="2.5"><path d="m5 13 4 4L19 7" /></svg>
							{:else}
								<svg viewBox="0 0 24 24" class="h-3.5 w-3.5 fill-none stroke-white lg:h-4 lg:w-4" stroke-width="2"><path d="M6 8h12l-1 12H7L6 8Zm3 0V6a3 3 0 0 1 6 0v2" /></svg>
							{/if}
						</button>
					</div>
				</div>
			{/each}
		</div>
	</section>

	<!-- Newsletter -->
	<section id="newsletter" class="px-4 pt-4 lg:px-16 lg:pt-6">
		<div class="flex items-center gap-3 rounded-2xl bg-white p-4 shadow-sm lg:gap-4 lg:p-6">
			<span class="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-sand lg:h-14 lg:w-14">
				<svg viewBox="0 0 24 24" class="h-5 w-5 fill-none stroke-stone-800 lg:h-6 lg:w-6" stroke-width="1.8"><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3.5 7 8.5 6 8.5-6" /></svg>
			</span>
			<div class="min-w-0 flex-1">
				{#if subscribed}
					<p class="text-[13px] font-bold lg:text-[17px]">You're in! ✨</p>
					<p class="text-[11px] leading-snug text-stone-500 lg:text-[13px]">
						Welcome to Tina Style — first letter {email} par aayega.
					</p>
				{:else}
					<p class="text-[13px] font-bold lg:text-[17px]">Join my newsletter</p>
					<p class="text-[11px] leading-snug text-stone-500 lg:text-[13px]">
						Get exclusive content, style tips and special offers.
					</p>
					<form class="mt-2 flex gap-2 lg:mt-3 lg:max-w-[520px]" onsubmit={subscribe}>
						<label class="sr-only" for="newsletter-email">Email address</label>
						<input
							id="newsletter-email"
							type="email"
							required
							bind:value={email}
							placeholder="Your email"
							class="min-w-0 flex-1 rounded-full border border-stone-300 bg-cream px-3 py-1.5 text-[12px] outline-none focus:border-stone-900 lg:py-2.5 lg:text-[14px]"
						/>
						<button
							type="submit"
							class="shrink-0 rounded-full bg-stone-900 px-3.5 py-1.5 text-[11px] font-semibold text-white transition hover:bg-stone-700 lg:px-5 lg:py-2.5 lg:text-[13px]"
						>
							Subscribe ›
						</button>
					</form>
				{/if}
			</div>
		</div>
	</section>

	<!-- Footer (mt-auto: chhoti screen par bhi footer bottom se chipka rahega) -->
	<footer class="mt-auto px-6 pb-8 pt-6 text-center lg:px-16">
		<div class="flex items-center gap-3">
			<span class="h-px flex-1 bg-stone-300"></span>
			<p class="font-display text-[15px] font-bold lg:text-[18px]">Tina Style <span class="text-red-400">♥</span></p>
			<span class="h-px flex-1 bg-stone-300"></span>
		</div>
		<p class="mt-2 text-[11px] text-stone-500 lg:text-[12px]">© 2024 All rights reserved.</p>
		<p class="mt-1 text-[11px] text-stone-500 lg:text-[12px]">
			<a href="#top" class="hover:text-stone-900">Privacy</a>
			<span class="mx-2 text-stone-300">|</span>
			<a href="#top" class="hover:text-stone-900">Terms</a>
			<span class="mx-2 text-stone-300">|</span>
			<a href="mailto:hello@tinastyle.com" class="hover:text-stone-900">Contact</a>
		</p>
	</footer>
</div>
