<script lang="ts">
	import { reveal } from '$lib/reveal';
	import { videos } from '$lib/data';

	const [featured, ...rest] = videos;
</script>

<svelte:head>
	<title>Videos — Tina Style</title>
	<meta name="description" content="Watch Tina's vlogs, guides and day-in-my-life films — Paris, Santorini, Bali, Tokyo and everyday beauty." />
</svelte:head>

<section class="px-4 pb-10 pt-8 sm:px-8 lg:px-16 lg:pt-12 xl:px-24">
	<div class="mx-auto max-w-6xl">
		<div use:reveal class="text-center">
			<p class="text-[11px] font-bold tracking-[0.24em] text-stone-500">VIDEOS</p>
			<h1 class="mt-2 font-display text-[32px] font-bold leading-tight sm:text-[40px] lg:text-[48px]">Watch &amp; Wander</h1>
			<p class="mx-auto mt-2 max-w-[520px] text-[14px] leading-relaxed text-stone-600">
				Vlogs, guides, and day-in-my-life films — new videos every week on YouTube.
			</p>
		</div>

		<!-- Featured video -->
		<a
			href="https://www.youtube.com"
			target="_blank"
			rel="noreferrer"
			use:reveal
			class="group relative mt-8 block h-[240px] overflow-hidden rounded-2xl shadow-md sm:h-[340px] lg:h-[440px]"
		>
			<img src={featured.img} alt={featured.title} class="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
			<div class="absolute inset-0 bg-gradient-to-r from-black/55 via-black/20 to-transparent"></div>
			<div class="absolute left-4 top-1/2 w-[70%] -translate-y-1/2 text-white sm:left-8 lg:w-[46%]">
				<span class="rounded-full bg-black/45 px-2.5 py-1 text-[10px] font-bold tracking-[0.2em] lg:text-[11px]">LATEST VIDEO</span>
				<p class="mt-2 font-display text-[26px] font-bold leading-[1.1] sm:text-[36px] lg:text-[44px]">{featured.title}</p>
				<p class="mt-1 text-[12px] text-white/90 sm:text-[14px]">{featured.desc}</p>
				<span class="mt-3 inline-flex items-center gap-1.5 rounded-full bg-white px-4 py-2 text-[12px] font-semibold text-stone-900 lg:text-[13px]">
					<svg viewBox="0 0 24 24" class="h-4 w-4 fill-red-600"><path d="M22 8.2a3 3 0 0 0-2.1-2.1C18 5.5 12 5.5 12 5.5s-6 0-7.9.6A3 3 0 0 0 2 8.2 31 31 0 0 0 1.6 12 31 31 0 0 0 2 15.8a3 3 0 0 0 2.1 2.1c1.9.6 7.9.6 7.9.6s6 0 7.9-.6a3 3 0 0 0 2.1-2.1A31 31 0 0 0 22.4 12 31 31 0 0 0 22 8.2ZM10 15V9l5.2 3L10 15Z" /></svg>
					Watch on YouTube
				</span>
			</div>
			<span class="absolute right-5 top-1/2 flex h-14 w-14 -translate-y-1/2 items-center justify-center rounded-full border-2 border-white/90 bg-black/25 text-white backdrop-blur-sm transition group-hover:scale-110 lg:right-10 lg:h-16 lg:w-16">
				<span class="anim-pulse-ring pointer-events-none absolute inset-0 rounded-full border-2 border-white/70"></span>
				<svg viewBox="0 0 24 24" class="ml-0.5 h-6 w-6 fill-white"><path d="M8 5v14l11-7L8 5Z" /></svg>
			</span>
		</a>

		<div class="mt-6 grid gap-4 sm:grid-cols-2 lg:gap-5">
			{#each rest as v, i}
				<a
					href="https://www.youtube.com"
					target="_blank"
					rel="noreferrer"
					use:reveal={i * 70}
					class="group overflow-hidden rounded-2xl bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
				>
					<div class="relative">
						<img src={v.img} alt={v.title} loading="lazy" class="h-[170px] w-full object-cover transition duration-500 group-hover:scale-[1.04] sm:h-[200px]" />
						<span class="absolute bottom-2 right-2 rounded-md bg-black/70 px-2 py-0.5 text-[11px] font-bold text-white">{v.duration}</span>
						<span class="absolute left-1/2 top-1/2 flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 border-white/90 bg-black/30 text-white backdrop-blur-sm transition group-hover:scale-110">
							<svg viewBox="0 0 24 24" class="ml-0.5 h-4 w-4 fill-white"><path d="M8 5v14l11-7L8 5Z" /></svg>
						</span>
					</div>
					<div class="p-4">
						<span class="block font-display text-[16px] font-bold leading-snug lg:text-[18px]">{v.title}</span>
						<span class="mt-1 block text-[12px] text-stone-500">{v.desc}</span>
						<span class="mt-2 block text-[12px] font-medium text-stone-500">{v.views} • Watch on YouTube ↗</span>
					</div>
				</a>
			{/each}
		</div>

		<div use:reveal class="mt-8 rounded-2xl bg-sand p-6 text-center sm:p-8">
			<h2 class="font-display text-[22px] font-bold sm:text-[26px]">Never miss a video</h2>
			<p class="mx-auto mt-2 max-w-[420px] text-[13px] leading-relaxed text-stone-600">
				Subscribe on YouTube and join the newsletter — new vlogs every week.
			</p>
			<div class="mt-4 flex flex-wrap items-center justify-center gap-3">
				<a href="https://www.youtube.com" target="_blank" rel="noreferrer" class="rounded-full bg-red-600 px-5 py-2.5 text-[13px] font-semibold text-white transition hover:bg-red-700 active:scale-95">
					Subscribe on YouTube
				</a>
				<a href="/#newsletter" class="rounded-full bg-stone-900 px-5 py-2.5 text-[13px] font-semibold text-white transition hover:bg-stone-700 active:scale-95">
					Join the newsletter
				</a>
			</div>
		</div>
	</div>
</section>
