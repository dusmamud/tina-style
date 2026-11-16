<script lang="ts">
	import '../app.css';
	import { fly } from 'svelte/transition';
	import { page } from '$app/state';
	import { getCartCount, ui } from '$lib/bag.svelte';
	import CartDrawer from '$lib/CartDrawer.svelte';
	import { reveal } from '$lib/reveal';
	import Socials from '$lib/Socials.svelte';
	import type { Snippet } from 'svelte';

	let { children }: { children: Snippet } = $props();
	let menuOpen = $state(false);

	const links = [
		{ label: 'Home', href: '/' },
		{ label: 'About', href: '/about' },
		{ label: 'Shop', href: '/shop' },
		{ label: 'Blog', href: '/blog' },
		{ label: 'Videos', href: '/videos' },
		{ label: 'Contact', href: '/contact' }
	];
</script>

<div id="top" class="flex min-h-screen w-full flex-col bg-cream">
	<!-- Shared header: every page EXCEPT the landing page (his order) —
	     home starts with the hero photo, like the original design.
	     On inner pages the header shows at ALL widths: full link row on
	     desktop, brand + bag + hamburger on mobile. -->
	{#if page.url.pathname !== '/'}
		<header class="sticky top-0 z-40 border-b border-stone-200/70 bg-cream/90 backdrop-blur">
		<nav class="flex items-center justify-between px-4 py-3 sm:px-8 lg:px-16 xl:px-24" aria-label="Main">
			<a href="/" class="font-display text-[20px] font-bold leading-none lg:text-[22px]"
				>Tina Style <span class="text-red-400">♥</span></a
			>
			<div class="hidden items-center gap-7 text-[14px] font-medium text-stone-600 lg:flex">
				{#each links as l}
					<a
						href={l.href}
						aria-current={page.url.pathname === l.href ? 'page' : undefined}
						class="transition hover:text-stone-900 {page.url.pathname === l.href
							? 'font-semibold text-stone-900 underline underline-offset-4'
							: ''}">{l.label}</a
					>
				{/each}
			</div>
			<div class="flex items-center gap-2">
				<button
					type="button"
					aria-label="Shopping bag, {getCartCount()} item{getCartCount() === 1 ? '' : 's'}"
					onclick={() => (ui.cartOpen = true)}
					class="relative flex h-10 w-10 items-center justify-center rounded-full border border-stone-300 bg-white/70 transition hover:bg-white active:scale-90"
				>
					<svg viewBox="0 0 24 24" class="h-5 w-5 fill-none stroke-stone-800" stroke-width="1.8"
						><path d="M6 8h12l-1 12H7L6 8Zm3 0V6a3 3 0 0 1 6 0v2" /></svg
					>
					{#if getCartCount() > 0}
						<span
							class="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-stone-900 text-[10px] font-bold text-white"
							>{getCartCount()}</span
						>
					{/if}
				</button>
				<button
					type="button"
					aria-label="Menu"
					aria-expanded={menuOpen}
					onclick={() => (menuOpen = !menuOpen)}
					class="flex h-10 w-10 items-center justify-center rounded-full border border-stone-300 bg-white/70 transition hover:bg-white active:scale-90 lg:hidden"
				>
					<svg viewBox="0 0 24 24" class="h-5 w-5 fill-none stroke-stone-800" stroke-width="2"
						><path d="M4 7h16M4 12h16M4 17h16" /></svg
					>
				</button>
			</div>
		</nav>
		{#if menuOpen}
			<div
				transition:fly={{ y: -6, duration: 180 }}
				class="border-t border-stone-200/70 px-4 pb-4 pt-2 lg:hidden"
			>
				{#each links as l}
					<a
						href={l.href}
						onclick={() => (menuOpen = false)}
						class="block rounded-lg px-3 py-2.5 text-[15px] font-medium text-stone-700 hover:bg-white {page.url
							.pathname === l.href
							? 'font-semibold text-stone-900'
							: ''}">{l.label}</a
					>
				{/each}
				<a
					href="/#newsletter"
					onclick={() => (menuOpen = false)}
					class="mt-1 block rounded-full bg-stone-900 px-4 py-2.5 text-center text-[14px] font-semibold text-white"
					>Join the newsletter</a
				>
			</div>
		{/if}
		</header>
	{/if}

	<main class="flex-1">
		{@render children()}
	</main>

	<!-- Cart drawer: available on every page -->
	<CartDrawer />

	<!-- Shared footer -->
	<footer use:reveal class="mt-auto px-6 pb-8 pt-8 text-center sm:px-8 lg:px-16 xl:px-24">
		<div class="mx-auto max-w-6xl">
			<div class="flex flex-col items-center gap-6 border-t border-stone-300/70 pt-6 lg:flex-row lg:items-start lg:justify-between lg:text-left">
				<div class="max-w-[300px]">
					<p class="font-display text-[18px] font-bold">Tina Style <span class="text-red-400">♥</span></p>
					<p class="mt-1 text-[12px] leading-relaxed text-stone-500">
						Fashion, lifestyle &amp; travel — sharing daily looks, travel spots and everything that makes
						life more beautiful.
					</p>
					<Socials containerClass="mt-3 flex items-center justify-center gap-2.5 lg:justify-start" />
				</div>
				<div>
					<p class="text-[11px] font-bold tracking-[0.2em] text-stone-500">EXPLORE</p>
					<div class="mt-2 flex flex-col gap-1.5 text-[13px] font-medium text-stone-600">
						<a href="/about" class="hover:text-stone-900">About</a>
						<a href="/shop" class="hover:text-stone-900">Shop</a>
						<a href="/lookbook" class="hover:text-stone-900">Lookbook</a>
						<a href="/blog" class="hover:text-stone-900">Blog</a>
						<a href="/videos" class="hover:text-stone-900">Videos</a>
						<a href="/faq" class="hover:text-stone-900">FAQ</a>
						<a href="/contact" class="hover:text-stone-900">Contact</a>
					</div>
				</div>
				<div>
					<p class="text-[11px] font-bold tracking-[0.2em] text-stone-500">GET IN TOUCH</p>
					<div class="mt-2 flex flex-col gap-1.5 text-[13px] font-medium text-stone-600">
						<a href="mailto:hello@tinastyle.com" class="hover:text-stone-900">hello@tinastyle.com</a>
						<a href="/contact" class="hover:text-stone-900">Work with me</a>
						<a href="/#newsletter" class="hover:text-stone-900">Newsletter</a>
					</div>
				</div>
			</div>
			<div class="mt-6 flex items-center gap-3">
				<span class="h-px flex-1 bg-stone-300"></span>
				<p class="font-display text-[15px] font-bold">Tina Style <span class="text-red-400">♥</span></p>
				<span class="h-px flex-1 bg-stone-300"></span>
			</div>
			<p class="mt-2 text-[11px] text-stone-500">© 2026 All rights reserved.</p>
			<p class="mt-1 text-[11px] text-stone-500">
				<a href="/privacy" class="hover:text-stone-900">Privacy</a>
				<span class="mx-2 text-stone-300">|</span>
				<a href="/terms" class="hover:text-stone-900">Terms</a>
				<span class="mx-2 text-stone-300">|</span>
				<a href="mailto:hello@tinastyle.com" class="hover:text-stone-900">Contact</a>
			</p>
		</div>
	</footer>
</div>
