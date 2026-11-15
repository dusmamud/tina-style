<script lang="ts">
	import { reveal } from '$lib/reveal';
	import { bag, toggleBag, bagSummary } from '$lib/bag.svelte';
	import { products, posts, testimonials, galleryImages } from '$lib/data';
	import Socials from '$lib/Socials.svelte';

	type LinkCard = { title: string; sub: string; img: string; href: string };

	const cards: LinkCard[] = [
		{ title: 'My Outfits', sub: 'Shop my looks', img: '/images/outfits.jpg', href: '/shop' },
		{ title: 'Travel Blog', sub: 'Destinations & tips', img: '/images/travel.jpg', href: '/blog' },
		{ title: 'Beauty Favs', sub: 'My top products', img: '/images/beauty.webp', href: '/shop' },
		{ title: 'Work With Me', sub: 'Collabs & partnerships', img: '/images/work.jpg', href: '/contact' }
	];

	const shopPreview = products.slice(0, 4);
	const blogPreview = posts.slice(0, 3);

	let email = $state('');
	let subscribed = $state(false);

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
	<meta property="og:type" content="website" />
	<meta property="og:title" content="Tina Style — Fashion • Lifestyle • Travel" />
	<meta
		property="og:description"
		content="Sharing my daily looks, travel spots and everything that makes life more beautiful."
	/>
	<meta property="og:url" content="https://tina-style.pages.dev/" />
	<meta property="og:image" content="https://tina-style.pages.dev/images/hero.jpg" />
	<meta property="og:image:alt" content="Tina Style — woman in a white blazer and sunglasses in warm sunlight" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content="Tina Style — Fashion • Lifestyle • Travel" />
	<meta
		name="twitter:description"
		content="Sharing my daily looks, travel spots and everything that makes life more beautiful."
	/>
	<meta name="twitter:image" content="https://tina-style.pages.dev/images/hero.jpg" />
</svelte:head>

<!-- Hero: mobile = photo banner (420px) + profile below;
     desktop (lg+) = two-column hero, profile left + photo right, all visible in first screen. -->
<header class="relative lg:grid lg:grid-cols-[1fr_1.1fr]">
	<!-- Desktop profile panel (mobile: hidden — profile is in the section below) -->
	<div class="hidden flex-col justify-center px-16 py-12 lg:flex xl:px-24 xl:py-16">
		<img
			src="/images/avatar.jpg"
			alt="Tina Style"
			class="anim-scale-in h-[128px] w-[128px] rounded-full border-[5px] border-white object-cover shadow-lg xl:h-[160px] xl:w-[160px]"
		/>
		<h1 class="anim-fade-up anim-delay-1 mt-5 flex items-center gap-2 font-display text-[48px] font-bold leading-none xl:text-[54px]">
			Tina Style
			<svg viewBox="0 0 24 24" class="h-6 w-6 fill-stone-500" aria-label="Verified"
				><path
					d="M12 1.8 14.5 4l3.2-.3.7 3.1 2.9 1.5-1.3 3 1.3 3-2.9 1.5-.7 3.1-3.2-.3L12 22.2 9.5 20l-3.2.3-.7-3.1-2.9-1.5 1.3-3-1.3-3 2.9-1.5.7-3.1 3.2.3L12 1.8Zm-1.2 13.4 5-5-1.4-1.4-3.6 3.6-1.6-1.6-1.4 1.4 3 3Z"
				/></svg
			>
		</h1>
		<p class="anim-fade-up anim-delay-2 mt-3 text-[12px] font-semibold tracking-[0.28em] text-stone-500 xl:text-[13px]">
			FASHION &nbsp;•&nbsp; LIFESTYLE &nbsp;•&nbsp; TRAVEL
		</p>
		<p class="anim-fade-up anim-delay-2 mt-3 max-w-[460px] text-[15px] leading-snug text-stone-600 xl:max-w-[520px] xl:text-[16px]">
			Sharing my daily looks, travel spots and everything that makes life more beautiful ✨
		</p>
		<Socials containerClass="anim-fade-up anim-delay-3 mt-5 flex items-center gap-3.5 xl:gap-4" />
		<div class="anim-fade-up anim-delay-4 mt-6 flex gap-3">
			<a
				href="/shop"
				class="rounded-full bg-stone-900 px-5 py-2.5 text-[13px] font-semibold text-white transition hover:bg-stone-700 active:scale-95 xl:px-6 xl:py-3 xl:text-[15px]"
				>Shop My Favorites</a
			>
			<a
				href="/videos"
				class="rounded-full border border-stone-400 bg-white px-5 py-2.5 text-[13px] font-semibold text-stone-900 transition hover:bg-stone-100 active:scale-95 xl:px-6 xl:py-3 xl:text-[15px]"
				>Watch My Vlog</a
			>
		</div>
	</div>

	<!-- Photo panel -->
	<div class="relative h-[420px] overflow-hidden sm:h-[520px] lg:h-auto lg:min-h-[560px] xl:min-h-[640px]">
		<img
			src="/images/hero.jpg"
			alt="Tina Style — woman in a white blazer and sunglasses in warm sunlight"
			class="anim-hero-photo absolute inset-0 h-full w-full object-cover object-[50%_20%]"
			fetchpriority="high"
		/>
		<div
			class="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/15 via-transparent to-cream lg:to-black/10"
		></div>

		<p
			class="anim-fade-up anim-delay-2 absolute left-5 top-6 -rotate-3 font-script text-[34px] leading-[0.95] text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.45)] lg:left-8 lg:top-8 lg:text-[52px] xl:text-[58px]"
		>
			Good<br />Style<br />Good<br />Mood <span class="text-[22px] lg:text-[32px] xl:text-[36px]">♡</span>
		</p>
	</div>
</header>

<!-- Profile: mobile only (desktop: hidden — profile lives in the hero left panel) -->
<section class="relative z-10 -mt-[72px] px-5 text-center lg:hidden">
	<img
		src="/images/avatar.jpg"
		alt="Tina Style"
		class="anim-scale-in anim-delay-1 mx-auto h-[124px] w-[124px] rounded-full border-[5px] border-cream object-cover shadow-lg sm:h-[140px] sm:w-[140px]"
	/>
	<h1 class="anim-fade-up anim-delay-2 mt-3 flex items-center justify-center gap-1.5 font-display text-[32px] font-bold leading-none sm:text-[38px]">
		Tina Style
		<svg viewBox="0 0 24 24" class="h-5 w-5 fill-stone-500" aria-label="Verified"
			><path
				d="M12 1.8 14.5 4l3.2-.3.7 3.1 2.9 1.5-1.3 3 1.3 3-2.9 1.5-.7 3.1-3.2-.3L12 22.2 9.5 20l-3.2.3-.7-3.1-2.9-1.5 1.3-3-1.3-3 2.9-1.5.7-3.1 3.2.3L12 1.8Zm-1.2 13.4 5-5-1.4-1.4-3.6 3.6-1.6-1.6-1.4 1.4 3 3Z"
			/></svg
		>
	</h1>
	<p class="anim-fade-up anim-delay-2 mt-2 text-[11px] font-semibold tracking-[0.28em] text-stone-500 sm:text-[12px]">
		FASHION &nbsp;•&nbsp; LIFESTYLE &nbsp;•&nbsp; TRAVEL
	</p>
	<p class="anim-fade-up anim-delay-3 mx-auto mt-2 max-w-[300px] text-[13px] leading-snug text-stone-600 sm:max-w-[420px] sm:text-[15px]">
		Sharing my daily looks, travel spots and everything that makes life more beautiful ✨
	</p>
	<Socials containerClass="anim-fade-up anim-delay-3 mt-4 flex items-center justify-center gap-3 sm:mt-5 sm:gap-4" />
</section>

<!-- Link cards -->
<section class="px-4 pt-5 sm:px-8 lg:px-16 lg:pt-8 xl:px-24">
	<div class="grid grid-cols-4 gap-2 max-[359px]:grid-cols-2 max-[359px]:gap-3 lg:gap-4">
		{#each cards as card, i}
			<a
				href={card.href}
				use:reveal={i * 70}
				class="group overflow-hidden rounded-xl bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md active:scale-[0.98]"
			>
				<img src={card.img} alt={card.title} loading="lazy" class="h-[64px] w-full object-cover transition duration-500 group-hover:scale-[1.04] max-[359px]:h-[120px] sm:h-[140px] lg:h-[220px] xl:h-[260px]" />
				<span class="flex items-center justify-between px-2 pb-1.5 pt-1.5 sm:px-3 sm:pb-2.5 sm:pt-2.5 lg:px-3 lg:pb-3 lg:pt-3">
					<span>
						<span class="block text-[11px] font-bold leading-tight max-[359px]:text-[13px] sm:text-[13px] lg:text-[15px]">{card.title}</span>
						<span class="block text-[9px] leading-tight text-stone-500 max-[359px]:text-[11px] sm:text-[11px] lg:text-[12px]">{card.sub}</span>
					</span>
					<span class="text-[11px] text-stone-500 lg:text-[15px]">›</span>
				</span>
			</a>
		{/each}
	</div>
</section>

<!-- Featured vlog -->
<section id="vlog" use:reveal class="px-4 pt-4 sm:px-8 lg:px-16 lg:pt-6 xl:px-24">
	<a
		href="/videos"
		class="group relative block h-[196px] overflow-hidden rounded-2xl shadow-md sm:h-[300px] lg:h-[420px] xl:h-[480px]"
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
			<p class="mt-2 font-display text-[28px] font-bold leading-[1.05] sm:text-[36px] lg:text-[48px]">My Latest<br />Vlog</p>
			<p class="mt-1 text-[11px] text-white/90 sm:text-[13px] lg:mt-2 lg:text-[15px]">A day in my life in Paris 🗼</p>
			<span class="mt-2.5 inline-flex items-center gap-1.5 rounded-full bg-white px-3 py-1.5 text-[11px] font-semibold text-stone-900 sm:text-[12px] lg:mt-4 lg:px-4 lg:py-2 lg:text-[13px]">
				<svg viewBox="0 0 24 24" class="h-3.5 w-3.5 fill-stone-900"><path d="M8 5v14l11-7L8 5Z" /></svg>
				Watch the vlog ›
			</span>
		</div>
		<span
			class="absolute right-5 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border-2 border-white/90 bg-black/25 text-white backdrop-blur-sm transition group-hover:scale-110 sm:h-14 sm:w-14 lg:right-10 lg:h-16 lg:w-16"
		>
			<span class="anim-pulse-ring pointer-events-none absolute inset-0 rounded-full border-2 border-white/70"></span>
			<svg viewBox="0 0 24 24" class="ml-0.5 h-5 w-5 fill-white lg:h-7 lg:w-7"><path d="M8 5v14l11-7L8 5Z" /></svg>
		</span>
	</a>
</section>

<!-- Shop preview -->
<section id="shop" class="px-4 pt-5 sm:px-8 lg:px-16 lg:pt-8 xl:px-24">
	<div use:reveal class="flex items-center justify-between">
		<h2 class="font-display text-[19px] font-bold sm:text-[24px] lg:text-[28px] xl:text-[30px]">Shop My Favorites</h2>
		<a
			href="/shop"
			class="rounded-full bg-stone-900 px-3 py-1.5 text-[11px] font-semibold text-white transition hover:bg-stone-700 active:scale-95 sm:text-[12px] lg:px-4 lg:py-2 lg:text-[13px]"
		>
			View All Products ›
		</a>
	</div>
	{#if bag.length > 0}
		<p class="mt-1 text-[11px] font-medium text-stone-600 lg:text-[13px]">
			{bagSummary()}
		</p>
	{/if}
	<div class="mt-3 grid grid-cols-4 gap-2 max-[359px]:grid-cols-2 max-[359px]:gap-3 lg:gap-4">
		{#each shopPreview as p, i}
			<div use:reveal={i * 70} class="group overflow-hidden rounded-xl bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
				<img src={p.img} alt={p.name} loading="lazy" class="h-[72px] w-full object-cover transition duration-500 group-hover:scale-[1.04] max-[359px]:h-[140px] sm:h-[160px] lg:h-[280px] xl:h-[320px]" />
				<div class="flex items-center justify-between px-2 py-1.5 lg:px-3 lg:py-3">
					<span>
						<span class="block text-[11px] font-semibold leading-tight sm:text-[13px] lg:text-[15px]">{p.name}</span>
						<span class="block text-[10px] text-stone-500 sm:text-[12px] lg:text-[13px]">{p.price}</span>
					</span>
					<button
						type="button"
						aria-label={bag.includes(p.name) ? `Remove ${p.name} from bag` : `Add ${p.name} to bag`}
						aria-pressed={bag.includes(p.name)}
						onclick={() => toggleBag(p.name)}
						class="flex h-6 w-6 shrink-0 items-center justify-center rounded-full {bag.includes(p.name)
							? 'bg-emerald-600 text-white'
							: 'bg-stone-900 text-white'} transition hover:scale-110 active:scale-90 sm:h-8 sm:w-8 lg:h-9 lg:w-9"
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

<!-- About preview -->
<section use:reveal class="px-4 pt-8 sm:px-8 lg:px-16 lg:pt-10 xl:px-24">
	<div class="grid overflow-hidden rounded-2xl bg-white shadow-sm lg:grid-cols-2">
		<img src="/images/about.jpg" alt="Tina with her camera on a city street" loading="lazy" class="h-[220px] w-full object-cover sm:h-[300px] lg:h-full" />
		<div class="p-5 sm:p-6 lg:p-8">
			<p class="text-[11px] font-bold tracking-[0.24em] text-stone-500">ABOUT ME</p>
			<h2 class="mt-2 font-display text-[24px] font-bold leading-tight sm:text-[28px] lg:text-[32px]">Hi, I’m Tina</h2>
			<p class="mt-2 text-[13px] leading-relaxed text-stone-600 sm:text-[14px]">
				I’m a fashion and travel creator who believes good style should feel easy — clothes you actually
				wear, trips you actually enjoy, and days that feel a little more beautiful.
			</p>
			<p class="mt-2 text-[13px] leading-relaxed text-stone-600 sm:text-[14px]">
				What started as outfit photos for friends is now a little corner of the internet with over a hundred
				thousand of you — and I’m so glad you’re here.
			</p>
			<div class="mt-4 flex gap-6">
				<div><p class="font-display text-[20px] font-bold lg:text-[24px]">120K</p><p class="text-[11px] text-stone-500">Instagram</p></div>
				<div><p class="font-display text-[20px] font-bold lg:text-[24px]">85K</p><p class="text-[11px] text-stone-500">YouTube</p></div>
				<div><p class="font-display text-[20px] font-bold lg:text-[24px]">40+</p><p class="text-[11px] text-stone-500">Countries</p></div>
			</div>
			<a href="/about" class="mt-5 inline-flex items-center gap-1.5 rounded-full bg-stone-900 px-4 py-2 text-[13px] font-semibold text-white transition hover:bg-stone-700 active:scale-95">
				Read my story ›
			</a>
		</div>
	</div>
</section>

<!-- Blog preview -->
<section class="px-4 pt-8 sm:px-8 lg:px-16 lg:pt-10 xl:px-24">
	<div use:reveal class="flex items-center justify-between">
		<h2 class="font-display text-[19px] font-bold sm:text-[24px] lg:text-[28px] xl:text-[30px]">From the Blog</h2>
		<a href="/blog" class="rounded-full bg-stone-900 px-3 py-1.5 text-[11px] font-semibold text-white transition hover:bg-stone-700 active:scale-95 sm:text-[12px] lg:px-4 lg:py-2 lg:text-[13px]">
			View All Posts ›
		</a>
	</div>
	<div class="mt-3 grid gap-3 sm:grid-cols-3 lg:gap-4">
		{#each blogPreview as post, i}
			<a href="/blog/{post.slug}" use:reveal={i * 70} class="group overflow-hidden rounded-2xl bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md active:scale-[0.99]">
				<img src={post.img} alt={post.title} loading="lazy" class="h-[150px] w-full object-cover transition duration-500 group-hover:scale-[1.04] sm:h-[170px] lg:h-[200px]" />
				<div class="p-4">
					<span class="rounded-full bg-sand px-2.5 py-1 text-[10px] font-bold tracking-wide text-stone-700">{post.category}</span>
					<span class="mt-2 block font-display text-[16px] font-bold leading-snug lg:text-[18px]">{post.title}</span>
					<span class="mt-1 block text-[12px] leading-relaxed text-stone-500">{post.excerpt}</span>
					<span class="mt-2 block text-[11px] font-medium text-stone-500">{post.date} • {post.readTime}</span>
				</div>
			</a>
		{/each}
	</div>
</section>

<!-- Testimonials -->
<section use:reveal class="px-4 pt-8 sm:px-8 lg:px-16 lg:pt-10 xl:px-24">
	<h2 class="text-center font-display text-[19px] font-bold sm:text-[24px] lg:text-[28px] xl:text-[30px]">Kind Words</h2>
	<p class="mt-1 text-center text-[12px] text-stone-500 sm:text-[13px]">From readers, followers &amp; brand partners</p>
	<div class="mt-4 grid gap-3 sm:grid-cols-3 lg:gap-4">
		{#each testimonials as t, i}
			<figure use:reveal={i * 70} class="rounded-2xl bg-white p-5 shadow-sm">
				<span class="font-display text-[36px] leading-none text-sand" aria-hidden="true">“</span>
				<blockquote class="text-[13px] leading-relaxed text-stone-600">{t.quote}</blockquote>
				<figcaption class="mt-3 text-[12px] font-bold text-stone-900">
					{t.name}
					<span class="block font-normal text-stone-500">{t.role}</span>
				</figcaption>
			</figure>
		{/each}
	</div>
</section>

<!-- Instagram gallery -->
<section class="px-4 pt-8 sm:px-8 lg:px-16 lg:pt-10 xl:px-24">
	<div use:reveal class="text-center">
		<h2 class="font-display text-[19px] font-bold sm:text-[24px] lg:text-[28px] xl:text-[30px]">Follow Along</h2>
		<p class="mt-1 text-[12px] text-stone-500 sm:text-[13px]">
			<a href="https://instagram.com" target="_blank" rel="noreferrer" class="font-semibold text-stone-900 hover:underline">@tinastyle</a> on Instagram
		</p>
	</div>
	<div class="mt-3 grid grid-cols-3 gap-2 lg:gap-3">
		{#each galleryImages as g, i}
			<a
				href="https://instagram.com"
				target="_blank"
				rel="noreferrer"
				aria-label="Instagram photo: {g.alt}"
				use:reveal={i * 50}
				class="group relative block aspect-square overflow-hidden rounded-xl"
			>
				<img src={g.img} alt={g.alt} loading="lazy" class="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
				<span class="absolute inset-0 flex items-center justify-center bg-black/0 opacity-0 transition group-hover:bg-black/25 group-hover:opacity-100">
					<svg viewBox="0 0 24 24" class="h-7 w-7 fill-none stroke-white" stroke-width="1.8"><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.2" cy="6.8" r="1" class="fill-white stroke-none" /></svg>
				</span>
			</a>
		{/each}
	</div>
</section>

<!-- Work with me banner -->
<section use:reveal class="px-4 pt-8 sm:px-8 lg:px-16 lg:pt-10 xl:px-24">
	<div class="rounded-2xl bg-sand p-6 text-center sm:p-8">
		<h2 class="font-display text-[22px] font-bold sm:text-[26px] lg:text-[30px]">Let’s Work Together</h2>
		<p class="mx-auto mt-2 max-w-[420px] text-[13px] leading-relaxed text-stone-600 sm:text-[14px]">
			Brand collaborations, sponsored trips, product reviews &amp; more — I’d love to hear about your idea.
		</p>
		<a
			href="/contact"
			class="mt-4 inline-flex items-center gap-1.5 rounded-full bg-stone-900 px-5 py-2.5 text-[13px] font-semibold text-white transition hover:bg-stone-700 active:scale-95"
		>
			Get in touch ›
		</a>
	</div>
</section>

<!-- Newsletter -->
<section id="newsletter" use:reveal class="px-4 pt-8 sm:px-8 lg:px-16 lg:pt-10 xl:px-24">
	<div class="flex items-center gap-3 rounded-2xl bg-white p-4 shadow-sm sm:p-5 lg:gap-4 lg:p-6">
		<span class="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-sand sm:h-12 sm:w-12 lg:h-14 lg:w-14">
			<svg viewBox="0 0 24 24" class="h-5 w-5 fill-none stroke-stone-800 lg:h-6 lg:w-6" stroke-width="1.8"><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3.5 7 8.5 6 8.5-6" /></svg>
		</span>
		<div class="min-w-0 flex-1">
			{#if subscribed}
				<p class="text-[13px] font-bold sm:text-[15px] lg:text-[17px]">You're in! ✨</p>
				<p class="text-[11px] leading-snug text-stone-500 sm:text-[12px] lg:text-[13px]">
					Welcome to Tina Style — first letter {email} par aayega.
				</p>
			{:else}
				<p class="text-[13px] font-bold sm:text-[15px] lg:text-[17px]">Join my newsletter</p>
				<p class="text-[11px] leading-snug text-stone-500 sm:text-[12px] lg:text-[13px]">
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
						class="min-w-0 flex-1 rounded-full border border-stone-300 bg-cream px-3 py-1.5 text-[12px] outline-none focus:border-stone-900 sm:py-2 sm:text-[13px] lg:py-2.5 lg:text-[14px]"
					/>
					<button
						type="submit"
						class="shrink-0 rounded-full bg-stone-900 px-3.5 py-1.5 text-[11px] font-semibold text-white transition hover:bg-stone-700 active:scale-95 sm:text-[12px] lg:px-5 lg:py-2.5 lg:text-[13px]"
					>
						Subscribe ›
					</button>
				</form>
			{/if}
		</div>
	</div>
</section>
