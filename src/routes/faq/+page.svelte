<script lang="ts">
	import { reveal } from '$lib/reveal';

	const groups = [
		{
			title: 'Shopping',
			qa: [
				{
					q: 'How does ordering work?',
					a: 'Pick a piece, add it to your bag, and check out right here — no account needed. You will get an order number and a confirmation page straight away. Checkout is a demo for now: no real payment is taken and nothing is shipped yet. Real payments (via a provider like Stripe) are the next step.'
				},
				{
					q: 'What does shipping cost, and how long does it take?',
					a: 'Standard shipping is $4.95 and takes 3–5 business days — free on orders over $75. Express shipping is $12.95 and takes 1–2 business days. You pick the method at checkout and see the exact cost before you pay.'
				},
				{
					q: 'What is your returns policy?',
					a: '30-day returns on unworn items in their original packaging. Write to hello@tinastyle.com with your order number and we will sort the return with you.'
				},
				{
					q: 'What if a product is out of stock?',
					a: 'Sizes and colours sell out fast on the pieces I post. If your size is gone, check back — I update links when items come back, and I often post a similar alternative on the Lookbook page.'
				}
			]
		},
		{
			title: 'Collaborations',
			qa: [
				{
					q: 'How do I work with you?',
					a: 'Send me a message through the Work With Me page — tell me about your brand, the campaign, and your timeline. I read every message and usually reply within 2–3 days.'
				},
				{
					q: 'What kind of partnerships do you take on?',
					a: 'Sponsored posts, brand trips, product reviews, affiliate partnerships and video features — across fashion, beauty and travel. I only work with brands I would genuinely use, and every paid partnership is always labelled.'
				},
				{
					q: 'Do you do gifted products?',
					a: 'Sometimes — if the product fits what I actually use and share. Gifting never guarantees a post. If I love it, I will share it; if I do not, I will tell you honestly.'
				}
			]
		},
		{
			title: 'Blog & videos',
			qa: [
				{
					q: 'How often do you post?',
					a: 'A new blog post every week, a vlog every two weeks, and daily outfit posts on Instagram. The newsletter goes out once a month with the best of everything.'
				},
				{
					q: 'Can I use your photos or text?',
					a: 'Please do not reuse my photos, videos or writing without asking first. For press or feature requests, write to hello@tinastyle.com.'
				},
				{
					q: 'How do I join the newsletter?',
					a: 'Scroll to the newsletter box on the home page and enter your email — one email a month, no spam, and you can unsubscribe any time with one click.'
				}
			]
		}
	];
</script>

<svelte:head>
	<title>FAQ — Tina Style</title>
	<meta name="description" content="Frequently asked questions about Tina Style — shopping, collaborations, the blog and the newsletter." />
</svelte:head>

<section class="px-4 pb-10 pt-8 sm:px-8 lg:px-16 lg:pt-12 xl:px-24">
	<div class="mx-auto max-w-[720px]">
		<div use:reveal class="text-center">
			<p class="text-[11px] font-bold tracking-[0.24em] text-stone-500">FAQ</p>
			<h1 class="mt-2 font-display text-[32px] font-bold leading-tight sm:text-[40px] lg:text-[48px]">Good Questions</h1>
			<p class="mx-auto mt-2 max-w-[480px] text-[14px] leading-relaxed text-stone-600">
				Everything people ask me most — shopping, collabs, and how this little corner of the internet works.
			</p>
		</div>

		{#each groups as g, gi}
			<h2 use:reveal class="mt-10 font-display text-[20px] font-bold sm:text-[24px]">{g.title}</h2>
			<div class="mt-3 space-y-3">
				{#each g.qa as item, i}
					<details use:reveal={(gi * 3 + i) * 40} class="group rounded-2xl bg-white p-4 shadow-sm sm:p-5">
						<summary class="flex cursor-pointer list-none items-center justify-between gap-3 text-[14px] font-semibold text-stone-900 sm:text-[15px]">
							{item.q}
							<span class="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-sand text-[16px] leading-none transition group-open:rotate-45">+</span>
						</summary>
						<p class="mt-3 text-[13px] leading-relaxed text-stone-600 sm:text-[14px]">{item.a}</p>
					</details>
				{/each}
			</div>
		{/each}

		<p use:reveal class="mt-10 rounded-2xl bg-sand p-5 text-center text-[13px] leading-relaxed text-stone-600 sm:text-[14px]">
			Still curious about something?
			<a href="/contact" class="font-semibold text-stone-900 hover:underline">Ask me directly →</a>
		</p>
	</div>
</section>
