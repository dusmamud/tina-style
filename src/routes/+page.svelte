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

<div class="mx-auto w-full max-w-[430px] bg-cream shadow-[0_0_60px_rgba(0,0,0,0.25)]">
	<!-- Hero -->
	<header class="relative h-[540px] overflow-hidden">
		<img
			src="/images/hero.jpg"
			alt="Tina Style — woman in a white blazer and sunglasses in warm sunlight"
			class="h-full w-full object-cover object-[50%_20%]"
			fetchpriority="high"
		/>
		<div
			class="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/15 via-transparent to-cream"
		></div>

		<p
			class="absolute left-5 top-6 -rotate-3 font-script text-[34px] leading-[0.95] text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.45)]"
		>
			Good<br />Style<br />Good<br />Mood <span class="text-[22px]">♡</span>
		</p>

		<div class="absolute right-4 top-5">
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

	<!-- Profile -->
	<section class="relative z-10 -mt-[72px] px-5 text-center">
		<img
			src="/images/avatar.jpg"
			alt="Tina Style"
			class="mx-auto h-[124px] w-[124px] rounded-full border-[5px] border-cream object-cover shadow-lg"
		/>
		<h1 class="mt-3 flex items-center justify-center gap-1.5 font-display text-[32px] font-bold leading-none">
			Tina Style
			<svg viewBox="0 0 24 24" class="h-5 w-5 fill-stone-500" aria-label="Verified"
				><path
					d="M12 1.8 14.5 4l3.2-.3.7 3.1 2.9 1.5-1.3 3 1.3 3-2.9 1.5-.7 3.1-3.2-.3L12 22.2 9.5 20l-3.2.3-.7-3.1-2.9-1.5 1.3-3-1.3-3 2.9-1.5.7-3.1 3.2.3L12 1.8Zm-1.2 13.4 5-5-1.4-1.4-3.6 3.6-1.6-1.6-1.4 1.4 3 3Z"
				/></svg
			>
		</h1>
		<p class="mt-2 text-[11px] font-semibold tracking-[0.28em] text-stone-500">
			FASHION &nbsp;•&nbsp; LIFESTYLE &nbsp;•&nbsp; TRAVEL
		</p>
		<p class="mx-auto mt-2 max-w-[300px] text-[13px] leading-snug text-stone-600">
			Sharing my daily looks, travel spots and everything that makes life more beautiful ✨
		</p>

		<!-- Socials -->
		<nav aria-label="Social links" class="mt-4 flex items-center justify-center gap-3">
			<a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram" class="flex h-10 w-10 items-center justify-center rounded-full border border-stone-300 bg-white/70 transition hover:bg-white">
				<svg viewBox="0 0 24 24" class="h-5 w-5 fill-none stroke-stone-800" stroke-width="1.8"><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.2" cy="6.8" r="1" class="fill-stone-800 stroke-none" /></svg>
			</a>
			<a href="https://tiktok.com" target="_blank" rel="noreferrer" aria-label="TikTok" class="flex h-10 w-10 items-center justify-center rounded-full border border-stone-300 bg-white/70 transition hover:bg-white">
				<svg viewBox="0 0 24 24" class="h-5 w-5 fill-stone-800"><path d="M16.6 3c.4 2.1 1.8 3.6 3.9 3.9v3.1c-1.5 0-2.9-.5-3.9-1.3v6.1c0 3.4-2.6 6.2-6 6.2A5.9 5.9 0 0 1 4.5 15c0-3.3 2.7-6 6-6 .3 0 .7 0 1 .1v3.2a2.8 2.8 0 0 0-1-.2 2.9 2.9 0 0 0-3 2.9 2.9 2.9 0 0 0 3 2.9c1.7 0 3-1.3 3-3V3h3.1Z" /></svg>
			</a>
			<a href="https://youtube.com" target="_blank" rel="noreferrer" aria-label="YouTube" class="flex h-10 w-10 items-center justify-center rounded-full border border-stone-300 bg-white/70 transition hover:bg-white">
				<svg viewBox="0 0 24 24" class="h-5 w-5 fill-stone-800"><path d="M22 8.2a3 3 0 0 0-2.1-2.1C18 5.5 12 5.5 12 5.5s-6 0-7.9.6A3 3 0 0 0 2 8.2 31 31 0 0 0 1.6 12 31 31 0 0 0 2 15.8a3 3 0 0 0 2.1 2.1c1.9.6 7.9.6 7.9.6s6 0 7.9-.6a3 3 0 0 0 2.1-2.1A31 31 0 0 0 22.4 12 31 31 0 0 0 22 8.2ZM10 15V9l5.2 3L10 15Z" /></svg>
			</a>
			<a href="https://pinterest.com" target="_blank" rel="noreferrer" aria-label="Pinterest" class="flex h-10 w-10 items-center justify-center rounded-full border border-stone-300 bg-white/70 transition hover:bg-white">
				<svg viewBox="0 0 24 24" class="h-5 w-5 fill-stone-800"><path d="M12 2a10 10 0 0 0-3.6 19.3c-.1-.8-.2-2 0-2.9l1.2-4.9s-.3-.6-.3-1.5c0-1.4.8-2.5 1.9-2.5.9 0 1.3.7 1.3 1.5 0 .9-.6 2.2-.9 3.5-.2 1 .5 1.9 1.5 1.9 1.9 0 3.3-2 3.3-4.8 0-2.5-1.8-4.3-4.4-4.3a4.6 4.6 0 0 0-4.8 4.6c0 .9.4 1.9.8 2.4.1.1.1.2.1.3l-.3 1.2c0 .2-.2.2-.4.1-1.2-.6-2-2.4-2-3.9 0-3.2 2.3-6.1 6.7-6.1 3.5 0 6.2 2.5 6.2 5.8 0 3.5-2.2 6.3-5.3 6.3-1 0-2-.5-2.3-1.2l-.6 2.4c-.2.9-.8 1.9-1.3 2.6A10 10 0 1 0 12 2Z" /></svg>
			</a>
			<a href="mailto:hello@tinastyle.com" aria-label="Email" class="flex h-10 w-10 items-center justify-center rounded-full border border-stone-300 bg-white/70 transition hover:bg-white">
				<svg viewBox="0 0 24 24" class="h-5 w-5 fill-none stroke-stone-800" stroke-width="1.8"><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3.5 7 8.5 6 8.5-6" /></svg>
			</a>
		</nav>
	</section>

	<!-- Link cards -->
	<section class="px-4 pt-5">
		<div class="grid grid-cols-4 gap-2">
			{#each cards as card}
				<a
					href={card.href}
					class="group overflow-hidden rounded-xl bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
				>
					<img src={card.img} alt={card.title} loading="lazy" class="h-[64px] w-full object-cover" />
					<span class="flex items-center justify-between px-2 pb-1.5 pt-1.5">
						<span>
							<span class="block text-[11px] font-bold leading-tight">{card.title}</span>
							<span class="block text-[9px] leading-tight text-stone-500">{card.sub}</span>
						</span>
						<span class="text-[11px] text-stone-500">›</span>
					</span>
				</a>
			{/each}
		</div>
	</section>

	<!-- Featured vlog -->
	<section id="vlog" class="px-4 pt-4">
		<a
			href="https://www.youtube.com"
			target="_blank"
			rel="noreferrer"
			class="group relative block h-[196px] overflow-hidden rounded-2xl shadow-md"
		>
			<img
				src="/images/vlog-paris.jpg"
				alt="Tina Style — A day in my life in Paris"
				loading="lazy"
				class="h-full w-full object-cover transition duration-500 group-hover:scale-105"
			/>
			<div class="absolute inset-0 bg-gradient-to-r from-black/55 via-black/20 to-transparent"></div>
			<div class="absolute left-4 top-1/2 w-[62%] -translate-y-1/2 text-white">
				<span class="rounded-full bg-black/45 px-2.5 py-1 text-[9px] font-bold tracking-[0.2em]">FEATURED</span>
				<p class="mt-2 font-display text-[28px] font-bold leading-[1.05]">My Latest<br />Vlog</p>
				<p class="mt-1 text-[11px] text-white/90">A day in my life in Paris 🗼</p>
				<span class="mt-2.5 inline-flex items-center gap-1.5 rounded-full bg-white px-3 py-1.5 text-[11px] font-semibold text-stone-900">
					<svg viewBox="0 0 24 24" class="h-3.5 w-3.5 fill-red-600"><path d="M22 8.2a3 3 0 0 0-2.1-2.1C18 5.5 12 5.5 12 5.5s-6 0-7.9.6A3 3 0 0 0 2 8.2 31 31 0 0 0 1.6 12 31 31 0 0 0 2 15.8a3 3 0 0 0 2.1 2.1c1.9.6 7.9.6 7.9.6s6 0 7.9-.6a3 3 0 0 0 2.1-2.1A31 31 0 0 0 22.4 12 31 31 0 0 0 22 8.2ZM10 15V9l5.2 3L10 15Z" /></svg>
					Watch on YouTube ›
				</span>
			</div>
			<span
				class="absolute right-5 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border-2 border-white/90 bg-black/25 text-white backdrop-blur-sm transition group-hover:scale-110"
			>
				<svg viewBox="0 0 24 24" class="ml-0.5 h-5 w-5 fill-white"><path d="M8 5v14l11-7L8 5Z" /></svg>
			</span>
		</a>
	</section>

	<!-- Shop -->
	<section id="shop" class="px-4 pt-5">
		<div class="flex items-center justify-between">
			<h2 class="font-display text-[19px] font-bold">Shop My Favorites</h2>
			<a
				href="#shop"
				class="rounded-full bg-stone-900 px-3 py-1.5 text-[11px] font-semibold text-white transition hover:bg-stone-700"
			>
				View All Products ›
			</a>
		</div>
		{#if bag.length > 0}
			<p class="mt-1 text-[11px] font-medium text-stone-600">
				🛍️ {bag.length} item{bag.length > 1 ? 's' : ''} in your bag: {bag.join(', ')}
			</p>
		{/if}
		<div class="mt-3 grid grid-cols-4 gap-2">
			{#each products as p}
				<div class="overflow-hidden rounded-xl bg-white shadow-sm">
					<img src={p.img} alt={p.name} loading="lazy" class="h-[72px] w-full object-cover" />
					<div class="flex items-center justify-between px-2 py-1.5">
						<span>
							<span class="block text-[11px] font-semibold leading-tight">{p.name}</span>
							<span class="block text-[10px] text-stone-500">{p.price}</span>
						</span>
						<button
							type="button"
							aria-label={bag.includes(p.name) ? `Remove ${p.name} from bag` : `Add ${p.name} to bag`}
							aria-pressed={bag.includes(p.name)}
							onclick={() => toggleBag(p.name)}
							class="flex h-6 w-6 shrink-0 items-center justify-center rounded-full {bag.includes(p.name)
								? 'bg-emerald-600 text-white'
								: 'bg-stone-900 text-white'} transition hover:scale-110"
						>
							{#if bag.includes(p.name)}
								<svg viewBox="0 0 24 24" class="h-3.5 w-3.5 fill-none stroke-white" stroke-width="2.5"><path d="m5 13 4 4L19 7" /></svg>
							{:else}
								<svg viewBox="0 0 24 24" class="h-3.5 w-3.5 fill-none stroke-white" stroke-width="2"><path d="M6 8h12l-1 12H7L6 8Zm3 0V6a3 3 0 0 1 6 0v2" /></svg>
							{/if}
						</button>
					</div>
				</div>
			{/each}
		</div>
	</section>

	<!-- Newsletter -->
	<section id="newsletter" class="px-4 pt-4">
		<div class="flex items-center gap-3 rounded-2xl bg-white p-4 shadow-sm">
			<span class="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-sand">
				<svg viewBox="0 0 24 24" class="h-5 w-5 fill-none stroke-stone-800" stroke-width="1.8"><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3.5 7 8.5 6 8.5-6" /></svg>
			</span>
			<div class="min-w-0 flex-1">
				{#if subscribed}
					<p class="text-[13px] font-bold">You're in! ✨</p>
					<p class="text-[11px] leading-snug text-stone-500">
						Welcome to Tina Style — first letter {email} par aayega.
					</p>
				{:else}
					<p class="text-[13px] font-bold">Join my newsletter</p>
					<p class="text-[11px] leading-snug text-stone-500">
						Get exclusive content, style tips and special offers.
					</p>
					<form class="mt-2 flex gap-2" onsubmit={subscribe}>
						<label class="sr-only" for="newsletter-email">Email address</label>
						<input
							id="newsletter-email"
							type="email"
							required
							bind:value={email}
							placeholder="Your email"
							class="min-w-0 flex-1 rounded-full border border-stone-300 bg-cream px-3 py-1.5 text-[12px] outline-none focus:border-stone-900"
						/>
						<button
							type="submit"
							class="shrink-0 rounded-full bg-stone-900 px-3.5 py-1.5 text-[11px] font-semibold text-white transition hover:bg-stone-700"
						>
							Subscribe ›
						</button>
					</form>
				{/if}
			</div>
		</div>
	</section>

	<!-- Footer -->
	<footer class="px-6 pb-8 pt-6 text-center">
		<div class="flex items-center gap-3">
			<span class="h-px flex-1 bg-stone-300"></span>
			<p class="font-display text-[15px] font-bold">Tina Style <span class="text-red-400">♥</span></p>
			<span class="h-px flex-1 bg-stone-300"></span>
		</div>
		<p class="mt-2 text-[11px] text-stone-500">© 2024 All rights reserved.</p>
		<p class="mt-1 text-[11px] text-stone-500">
			<a href="#top" class="hover:text-stone-900">Privacy</a>
			<span class="mx-2 text-stone-300">|</span>
			<a href="#top" class="hover:text-stone-900">Terms</a>
			<span class="mx-2 text-stone-300">|</span>
			<a href="mailto:hello@tinastyle.com" class="hover:text-stone-900">Contact</a>
		</p>
	</footer>
</div>
