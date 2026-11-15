<script lang="ts">
	import { reveal } from '$lib/reveal';
	import Socials from '$lib/Socials.svelte';
</script>

<svelte:head>
	<title>About — Tina Style</title>
	<meta name="description" content="Meet Tina — fashion and travel creator sharing daily looks, travel spots and everything that makes life more beautiful." />
</svelte:head>

<section class="px-4 pb-10 pt-8 sm:px-8 lg:px-16 lg:pt-12 xl:px-24">
	<div class="mx-auto max-w-6xl">
		<div use:reveal class="text-center">
			<p class="text-[11px] font-bold tracking-[0.24em] text-stone-500">ABOUT TINA</p>
			<h1 class="mt-2 font-display text-[32px] font-bold leading-tight sm:text-[40px] lg:text-[48px]">The Woman Behind the Looks</h1>
			<p class="mx-auto mt-2 max-w-[520px] text-[14px] leading-relaxed text-stone-600">
				Fashion lover, slow traveller, professional over-packer — and your friend on the internet.
			</p>
		</div>

		<div use:reveal class="mt-8 grid gap-6 lg:grid-cols-2 lg:gap-10">
			<img src="/images/about.jpg" alt="Tina with her camera on a city street" class="h-[280px] w-full rounded-2xl object-cover shadow-sm sm:h-[380px] lg:h-full" />
			<div>
				<h2 class="font-display text-[22px] font-bold sm:text-[26px]">My story</h2>
				<p class="mt-3 text-[14px] leading-relaxed text-stone-600">
					Hi, I’m Tina. I started this little corner of the internet in 2021 with a phone, a borrowed
					camera, and a wardrobe I had outgrown. My first posts were outfit photos taken by friends on
					lunch breaks — nothing fancy, just clothes I loved and places that made me happy.
				</p>
				<p class="mt-3 text-[14px] leading-relaxed text-stone-600">
					Somewhere along the way, a few hundred followers became a community. Today, more than 120,000 of
					you follow along on Instagram, 85,000 watch my vlogs on YouTube, and I’ve been lucky enough to
					visit 40+ countries — usually with one carry-on and far too many outfit options.
				</p>
				<p class="mt-3 text-[14px] leading-relaxed text-stone-600">
					My philosophy is simple: good style should feel easy. No rules, no pressure — just pieces you
					actually wear, trips you actually enjoy, and days that feel a little more beautiful.
				</p>
				<Socials containerClass="mt-5 flex items-center gap-3" />
			</div>
		</div>

		<div class="mt-10 grid grid-cols-3 gap-3 text-center sm:gap-4">
			<div use:reveal class="rounded-2xl bg-white p-5 shadow-sm">
				<p class="font-display text-[26px] font-bold sm:text-[32px]">120K</p>
				<p class="text-[11px] text-stone-500 sm:text-[12px]">Instagram followers</p>
			</div>
			<div use:reveal={70} class="rounded-2xl bg-white p-5 shadow-sm">
				<p class="font-display text-[26px] font-bold sm:text-[32px]">85K</p>
				<p class="text-[11px] text-stone-500 sm:text-[12px]">YouTube subscribers</p>
			</div>
			<div use:reveal={140} class="rounded-2xl bg-white p-5 shadow-sm">
				<p class="font-display text-[26px] font-bold sm:text-[32px]">40+</p>
				<p class="text-[11px] text-stone-500 sm:text-[12px]">Countries visited</p>
			</div>
		</div>

		<div class="mt-10">
			<h2 use:reveal class="text-center font-display text-[22px] font-bold sm:text-[26px]">What I Do</h2>
			<div class="mt-4 grid gap-3 sm:grid-cols-3 lg:gap-4">
				<div use:reveal class="rounded-2xl bg-white p-5 shadow-sm">
					<img src="/images/outfits.jpg" alt="Fashion" loading="lazy" class="h-[140px] w-full rounded-xl object-cover" />
					<h3 class="mt-3 font-display text-[17px] font-bold">Fashion</h3>
					<p class="mt-1 text-[13px] leading-relaxed text-stone-600">
						Everyday outfits, capsule wardrobes, and honest reviews of the pieces I actually wear — no
						one-time-only looks.
					</p>
				</div>
				<div use:reveal={70} class="rounded-2xl bg-white p-5 shadow-sm">
					<img src="/images/travel.jpg" alt="Travel" loading="lazy" class="h-[140px] w-full rounded-xl object-cover" />
					<h3 class="mt-3 font-display text-[17px] font-bold">Travel</h3>
					<p class="mt-1 text-[13px] leading-relaxed text-stone-600">
						Slow travel guides, city walks, and the cafés, beaches, and viewpoints I’d go back to
						tomorrow.
					</p>
				</div>
				<div use:reveal={140} class="rounded-2xl bg-white p-5 shadow-sm">
					<img src="/images/beauty.webp" alt="Beauty" loading="lazy" class="h-[140px] w-full rounded-xl object-cover" />
					<h3 class="mt-3 font-display text-[17px] font-bold">Beauty</h3>
					<p class="mt-1 text-[13px] leading-relaxed text-stone-600">
						Skincare that works, makeup that takes five minutes, and the products worth your money —
						tested on real skin.
					</p>
				</div>
			</div>
		</div>

		<div use:reveal class="mt-10 rounded-2xl bg-sand p-6 text-center sm:p-8">
			<h2 class="font-display text-[22px] font-bold sm:text-[26px]">Want to say hi?</h2>
			<p class="mx-auto mt-2 max-w-[420px] text-[13px] leading-relaxed text-stone-600">
				For collaborations, press, or just to share your favourite travel story — my inbox is always open.
			</p>
			<a href="/contact" class="mt-4 inline-flex items-center gap-1.5 rounded-full bg-stone-900 px-5 py-2.5 text-[13px] font-semibold text-white transition hover:bg-stone-700 active:scale-95">
				Get in touch ›
			</a>
		</div>
	</div>
</section>
