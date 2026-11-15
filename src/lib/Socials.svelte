<script lang="ts">
	let { containerClass = '' }: { containerClass?: string } = $props();
</script>

<nav aria-label="Social links" class={containerClass}>
	<a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram" class="flex h-10 w-10 items-center justify-center rounded-full border border-stone-300 bg-white/70 transition hover:-translate-y-0.5 hover:bg-white sm:h-11 sm:w-11">
		<svg viewBox="0 0 24 24" class="h-5 w-5 fill-none stroke-stone-800" stroke-width="1.8"><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.2" cy="6.8" r="1" class="fill-stone-800 stroke-none" /></svg>
	</a>
	<a href="https://tiktok.com" target="_blank" rel="noreferrer" aria-label="TikTok" class="flex h-10 w-10 items-center justify-center rounded-full border border-stone-300 bg-white/70 transition hover:-translate-y-0.5 hover:bg-white sm:h-11 sm:w-11">
		<svg viewBox="0 0 24 24" class="h-5 w-5 fill-stone-800"><path d="M16.6 3c.4 2.1 1.8 3.6 3.9 3.9v3.1c-1.5 0-2.9-.5-3.9-1.3v6.1c0 3.4-2.6 6.2-6 6.2A5.9 5.9 0 0 1 4.5 15c0-3.3 2.7-6 6-6 .3 0 .7 0 1 .1v3.2a2.8 2.8 0 0 0-1-.2 2.9 2.9 0 0 0-3 2.9 2.9 2.9 0 0 0 3 2.9c1.7 0 3-1.3 3-3V3h3.1Z" /></svg>
	</a>
	<a href="https://youtube.com" target="_blank" rel="noreferrer" aria-label="YouTube" class="flex h-10 w-10 items-center justify-center rounded-full border border-stone-300 bg-white/70 transition hover:-translate-y-0.5 hover:bg-white sm:h-11 sm:w-11">
		<svg viewBox="0 0 24 24" class="h-5 w-5 fill-stone-800"><path d="M22 8.2a3 3 0 0 0-2.1-2.1C18 5.5 12 5.5 12 5.5s-6 0-7.9.6A3 3 0 0 0 2 8.2 31 31 0 0 0 1.6 12 31 31 0 0 0 2 15.8a3 3 0 0 0 2.1 2.1c1.9.6 7.9.6 7.9.6s6 0 7.9-.6a3 3 0 0 0 2.1-2.1A31 31 0 0 0 22.4 12 31 31 0 0 0 22 8.2ZM10 15V9l5.2 3L10 15Z" /></svg>
	</a>
	<a href="https://pinterest.com" target="_blank" rel="noreferrer" aria-label="Pinterest" class="flex h-10 w-10 items-center justify-center rounded-full border border-stone-300 bg-white/70 transition hover:-translate-y-0.5 hover:bg-white sm:h-11 sm:w-11">
		<svg viewBox="0 0 24 24" class="h-5 w-5 fill-stone-800"><path d="M12 2a10 10 0 0 0-3.6 19.3c-.1-.8-.2-2 0-2.9l1.2-4.9s-.3-.6-.3-1.5c0-1.4.8-2.5 1.9-2.5.9 0 1.3.7 1.3 1.5 0 .9-.6 2.2-.9 3.5-.2 1 .5 1.9 1.5 1.9 1.9 0 3.3-2 3.3-4.8 0-2.5-1.8-4.3-4.4-4.3a4.6 4.6 0 0 0-4.8 4.6c0 .9.4 1.9.8 2.4.1.1.1.2.1.3l-.3 1.2c0 .2-.2.2-.4.1-1.2-.6-2-2.4-2-3.9 0-3.2 2.3-6.1 6.7-6.1 3.5 0 6.2 2.5 6.2 5.8 0 3.5-2.2 6.3-5.3 6.3-1 0-2-.5-2.3-1.2l-.6 2.4c-.2.9-.8 1.9-1.3 2.6A10 10 0 1 0 12 2Z" /></svg>
	</a>
	<a href="mailto:hello@tinastyle.com" aria-label="Email" class="flex h-10 w-10 items-center justify-center rounded-full border border-stone-300 bg-white/70 transition hover:-translate-y-0.5 hover:bg-white sm:h-11 sm:w-11">
		<svg viewBox="0 0 24 24" class="h-5 w-5 fill-none stroke-stone-800" stroke-width="1.8"><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3.5 7 8.5 6 8.5-6" /></svg>
	</a>
</nav>
