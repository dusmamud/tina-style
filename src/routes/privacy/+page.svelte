<script lang="ts">
	import { reveal } from '$lib/reveal';
</script>

<svelte:head>
	<title>Privacy Policy — Tina Style</title>
	<meta name="description" content="Privacy Policy for Tina Style — what information is collected, how it is used, and your rights." />
</svelte:head>

<section class="px-4 pb-10 pt-8 sm:px-8 lg:px-16 lg:pt-12 xl:px-24">
	<div class="mx-auto max-w-[720px]">
		<div use:reveal>
			<p class="text-[11px] font-bold tracking-[0.24em] text-stone-500">LEGAL</p>
			<h1 class="mt-2 font-display text-[32px] font-bold leading-tight sm:text-[40px]">Privacy Policy</h1>
			<p class="mt-2 text-[13px] text-stone-500">Last updated: November 15, 2026</p>
		</div>
		<div class="mt-6 space-y-6 text-[14px] leading-relaxed text-stone-700">
			<section use:reveal>
				<h2 class="font-display text-[20px] font-bold text-stone-900">1. What I collect</h2>
				<p class="mt-2">
					When you join the newsletter, I collect the email address you provide. When you use the contact
					form, I collect your name, email address, and whatever you write in your message. That is all —
					this site has no accounts, no tracking pixels, and no advertising profiles.
				</p>
			</section>
			<section use:reveal>
				<h2 class="font-display text-[20px] font-bold text-stone-900">2. How it is used</h2>
				<p class="mt-2">
					Your email is used only to send the newsletter you signed up for, or to reply to your message.
					I never sell, rent, or share your details with third parties for marketing.
				</p>
			</section>
			<section use:reveal>
				<h2 class="font-display text-[20px] font-bold text-stone-900">3. Cookies &amp; third parties</h2>
				<p class="mt-2">
					This site does not set advertising cookies. Links to Instagram, TikTok, YouTube, Pinterest, and
					shops you click may set their own cookies under their own policies. Embedded fonts are hosted on
					this site itself — no font provider sees your visit.
				</p>
			</section>
			<section use:reveal>
				<h2 class="font-display text-[20px] font-bold text-stone-900">4. Your rights</h2>
				<p class="mt-2">
					You can unsubscribe from the newsletter at any time using the link in any email, or ask me to
					delete your details by writing to
					<a href="mailto:hello@tinastyle.com" class="font-semibold text-stone-900 hover:underline">hello@tinastyle.com</a>.
					I will remove them promptly.
				</p>
			</section>
			<section use:reveal>
				<h2 class="font-display text-[20px] font-bold text-stone-900">5. Changes</h2>
				<p class="mt-2">
					If this policy changes, the new version will be posted here with a new “last updated” date.
				</p>
			</section>
		</div>
	</div>
</section>
