// Shared content for Tina Style — products, blog posts, videos, testimonials.
// NOTE: follower counts, view counts and prices are demo placeholders —
// replace with real numbers/links when Tina's real profiles are connected.

export type Product = {
	name: string;
	slug: string;
	price: string;
	img: string;
	category: string;
	desc: string;
	details: string[];
};
export type Post = {
	slug: string;
	title: string;
	excerpt: string;
	img: string;
	category: string;
	date: string;
	readTime: string;
	body: string[];
};
export type Video = { title: string; img: string; duration: string; views: string; desc: string };

export const products: Product[] = [
	{
		name: 'Sunglasses',
		slug: 'sunglasses',
		price: '$49.00',
		img: '/images/sunglasses.webp',
		category: 'Accessories',
		desc: 'Oversized frames with a soft tortoiseshell finish — the pair I reach for on every sunny day. Lightweight, flattering on most face shapes, and they make even a plain outfit feel finished.',
		details: ['UV400 protection lenses', 'Lightweight acetate frames', 'Includes a hard case + cleaning cloth', 'One size — fits most faces']
	},
	{
		name: 'Handbag',
		slug: 'handbag',
		price: '$89.00',
		img: '/images/handbag.jpg',
		category: 'Bags',
		desc: 'A structured everyday bag in warm tan leather — big enough for the essentials, small enough to carry everywhere. The one I have taken to Paris, Santorini, and every airport in between.',
		details: ['Genuine leather, tan finish', 'Fits phone, wallet, keys + a small book', 'Adjustable shoulder strap', 'Interior zip pocket']
	},
	{
		name: 'Perfume',
		slug: 'perfume',
		price: '$59.00',
		img: '/images/perfume.webp',
		category: 'Beauty',
		desc: 'My signature scent: soft florals with a warm vanilla base. It is the one people stop me to ask about — light enough for daytime, warm enough for evenings.',
		details: ['Eau de parfum, 50ml', 'Notes: jasmine, peony, vanilla', 'Lasts 6–8 hours on skin', 'Cruelty-free']
	},
	{
		name: 'Makeup Set',
		slug: 'makeup-set',
		price: '$39.00',
		img: '/images/makeup.webp',
		category: 'Beauty',
		desc: 'The five pieces I use in my everyday routine — the exact set from my morning makeup vlog. Everything you need for a fresh, natural look in under ten minutes.',
		details: ['5-piece set: tint, blush, mascara, liner + lip', 'Natural, buildable coverage', 'Suits most skin tones', 'Travel-friendly pouch included']
	},
	{
		name: 'Silk Scarf',
		slug: 'silk-scarf',
		price: '$35.00',
		img: '/images/scarf.jpg',
		category: 'Accessories',
		desc: 'A soft silk scarf in a warm neutral print — wear it around your neck, in your hair, or tied to your bag. The easiest way to make a simple outfit look considered.',
		details: ['100% mulberry silk', '90 × 90 cm', 'Hand-rolled edges', 'Neutral print — pairs with everything']
	},
	{
		name: 'Gold Earrings',
		slug: 'gold-earrings',
		price: '$29.00',
		img: '/images/earrings.webp',
		category: 'Accessories',
		desc: 'Delicate gold hoops that go with literally everything — jeans, dresses, a white blazer. Light enough to wear all day, polished enough for dinner.',
		details: ['14k gold-plated, hypoallergenic', 'Lightweight — comfortable all day', 'Tarnish-resistant coating', 'Gift box included']
	},
	{
		name: 'Leather Tote',
		slug: 'leather-tote',
		price: '$65.00',
		img: '/images/tote.webp',
		category: 'Bags',
		desc: 'My carry-everything tote: laptop, book, water bottle, and still room for a scarf. Structured enough to stand on its own, soft enough to carry all day.',
		details: ['Genuine leather, black', 'Fits a 13" laptop', 'Interior + exterior pockets', 'Reinforced handles']
	},
	{
		name: 'Lipstick Set',
		slug: 'lipstick-set',
		price: '$24.00',
		img: '/images/lipstick.webp',
		category: 'Beauty',
		desc: 'Three everyday shades — a soft nude, a warm rose, and a classic red. Creamy, comfortable, and the kind of set that lives in every bag I own.',
		details: ['3 shades: nude, rose, red', 'Creamy matte finish', 'Comfortable wear, 4–6 hours', 'Enriched with shea butter']
	}
];

export const productCategories = ['All', 'Accessories', 'Bags', 'Beauty'];

export const posts: Post[] = [
	{
		slug: 'paris-day',
		title: 'A Day in Paris: My Favourite Spots',
		excerpt: 'Croissants at dawn, the prettiest streets of Le Marais, and the golden hour by the Seine — my perfect Paris day, hour by hour.',
		img: '/images/vlog-paris.jpg',
		category: 'City guides',
		date: 'Nov 12, 2026',
		readTime: '4 min read',
		body: [
			'Paris is the city I keep coming back to, and every visit starts the same way: a croissant from the little bakery near my hotel, eaten standing on the pavement while the city wakes up. No plan, no rush — just butter, flakes, and that first-morning light.',
			'By mid-morning I am wandering Le Marais. The streets there are made for slow walking: vintage shops, tiny galleries, and doorways covered in vines. My rule is simple — if a street looks pretty, I follow it. That is how I found my favourite bookshop, tucked behind a courtyard I would never have found on a map.',
			'Lunch is always something simple and sitting down: a salad niçoise or a croque-monsieur at a café with wicker chairs facing the street. Parisians treat lunch as an event, not a task, and I try to do the same.',
			'The best part of the day is the golden hour by the Seine. The light turns everything honey-coloured, the bridges fill with musicians, and the whole city slows down for a moment. Bring a camera, bring a friend, or bring nobody at all — Paris is generous like that.',
			'If you only do one thing, do this: skip the long queues, walk everywhere, and let the city surprise you. Paris rewards the wanderers.'
		]
	},
	{
		slug: 'santorini-3-days',
		title: 'Santorini in 3 Days: White Walls & Blue Domes',
		excerpt: 'How to see the best of the island without the crowds — the villages, the beaches, and the sunset spot nobody queues for.',
		img: '/images/travel.jpg',
		category: 'Slow travel',
		date: 'Nov 5, 2026',
		readTime: '5 min read',
		body: [
			'Santorini is beautiful in every photo you have ever seen, and somehow even better in person. But it is also small, busy, and easy to get wrong — so here is the slow version, the one I actually enjoyed.',
			'Day one is for Oia, but not at sunset. Go in the morning, when the lanes are quiet and the blue domes are yours alone. By the time the crowds arrive for sunset, you will already be somewhere else — I watched it from a tiny taverna in Imerovigli, with a table, a glass of Assyrtiko, and no queue at all.',
			'Day two is for the caldera. Take the boat to the volcanic island, swim in the hot springs, and come back sun-tired and happy. Pack light: swimsuit, sunscreen, and shoes you can walk in.',
			'Day three is my favourite — no plan at all. A slow breakfast, a black-sand beach, a long lunch in a village where nobody is taking photos. Santorini is not just the postcard; it is also the quiet in between.',
			'One practical tip: stay in Karterados or Imerovigli instead of Oia. Same views, half the price, twice the calm.'
		]
	},
	{
		slug: 'bali-slow-travel',
		title: 'Bali Slow Travel: Rice Fields & Hidden Cafés',
		excerpt: 'Forget the checklist. Bali is best when you stay put — one village, one scooter, and mornings that start with jungle mist.',
		img: '/images/bali.jpg',
		category: 'Slow travel',
		date: 'Oct 28, 2026',
		readTime: '6 min read',
		body: [
			'Everyone tries to see all of Bali in a week. I tried that once. I came home exhausted and realised I had barely seen anything — just the inside of a car.',
			'This time I stayed in Ubud for ten days and did almost nothing, and it was the best trip I have had in years. Mornings began with mist over the rice fields and a walk through the paddies before the heat arrived.',
			'The cafés here are half the joy: smoothie bowls, strong coffee, and long tables where travellers swap stories. My favourite was a tiny place at the end of a dirt lane — no sign, no menu board, just the best banana pancakes on the island.',
			'Slow travel is not about doing less for the sake of it. It is about letting a place sink in: learning the name of the woman who sells you fruit, finding your own sunset spot, knowing which warung has the best nasi goreng.',
			'If Bali is on your list, my honest advice is this: pick one area, stay longer than feels sensible, and let the island set the pace.'
		]
	},
	{
		slug: 'tokyo-after-dark',
		title: 'Tokyo After Dark: Neon, Ramen & Tiny Bars',
		excerpt: 'When the sun goes down, Tokyo turns up. A night walk through Shibuya, Shinjuku, and the six-seat bars of Golden Gai.',
		img: '/images/tokyo.jpg',
		category: 'City guides',
		date: 'Oct 19, 2026',
		readTime: '5 min read',
		body: [
			'Tokyo by day is orderly and calm. Tokyo by night is a different city entirely — and it is the one I love most.',
			'Start in Shibuya just as the lights come on. The crossing is famous for a reason: a thousand people, all moving in perfect, silent choreography. Cross it once as a tourist, then cross it again like a local — phone away, eyes up.',
			'Dinner is ramen, and the rule is simple: follow the queue. The best bowls I had were in shops with six seats and a ticket machine at the door. Order, sit, slurp, leave. It is fast food elevated to an art form.',
			'After dinner, find Golden Gai in Shinjuku: six narrow alleys packed with tiny bars, most seating fewer than ten people. Pick one with a friendly face at the door, order whatever they recommend, and talk to strangers. Some of my best travel memories are conversations in bars the size of a living room.',
			'One note for first-timers: cash is still king in the small places, and the last trains leave around midnight — plan your way home, or plan to stay out until the first train.'
		]
	},
	{
		slug: 'rome-on-foot',
		title: 'Rome on Foot: Espresso, Ruins & Golden Hour',
		excerpt: 'The Eternal City is best explored slowly and on foot — here is my walking route, from espresso to the Colosseum at dusk.',
		img: '/images/rome.jpg',
		category: 'City guides',
		date: 'Oct 10, 2026',
		readTime: '4 min read',
		body: [
			'Rome is a city that refuses to be rushed, so I stopped trying. My best days there have all followed the same shape: walk, eat, sit, repeat.',
			'Start early with an espresso standing at the bar — it costs less than sitting down, and it is how Romans do it. Then walk. The historic centre is compact, and every wrong turn leads somewhere wonderful: a hidden piazza, a fountain, a church door left open.',
			'The Colosseum is worth it, but go late. The crowds thin as the afternoon fades, and the stone turns gold in the low sun. Book ahead, bring water, and give yourself time to just stand there — two thousand years of history deserves a pause.',
			'Evenings are for Trastevere: cobbled lanes, ivy-covered walls, and trattorias where the pasta is made by hand. Order the cacio e pepe, share a carafe of house wine, and stay for the second one.',
			'Rome taught me that a city does not need an itinerary. It needs comfortable shoes and an appetite.'
		]
	},
	{
		slug: 'maldives-on-a-budget',
		title: 'Maldives on a Budget: Yes, It’s Possible',
		excerpt: 'The Maldives is not just for honeymoon resorts. Local islands, public ferries, and turquoise water — for a fraction of the price.',
		img: '/images/maldives.jpg',
		category: 'Budget tips',
		date: 'Oct 2, 2026',
		readTime: '6 min read',
		body: [
			'When I told friends I was going to the Maldives on a budget, they laughed. The Maldives is the place of overwater villas and four-figure nights — or so everyone thinks.',
			'Here is the secret: stay on a local island. Maafushi, Gulhi, and Thodhoo have guesthouses, cafés, and the same impossible turquoise water, for a fraction of resort prices. My room cost less than a dinner back home.',
			'Getting there is part of the adventure. Public ferries run between Malé and the local islands for a few dollars — slow, scenic, and wonderfully ordinary. Speedboats cost more but save hours; pick based on your patience, not your wallet.',
			'The water is the real luxury, and it is free. Snorkelling straight off the beach, I saw turtles, reef sharks, and fish in colours I did not know existed. Bring your own mask if you can — rentals add up.',
			'Two things to know before you go: local islands have bikini beaches (swimwear is fine there, not everywhere), and alcohol is not served on local islands. Plan accordingly, and the Maldives will give you the same postcard for a tenth of the price.'
		]
	}
];

export const postCategories = ['All', 'City guides', 'Slow travel', 'Budget tips'];

export const videos: Video[] = [
	{ title: 'A day in my life in Paris', img: '/images/vlog-paris.jpg', duration: '12:48', views: '48K views', desc: 'Croissants, Le Marais, and golden hour by the Seine.' },
	{ title: 'Santorini travel diary', img: '/images/travel.jpg', duration: '9:32', views: '32K views', desc: 'Three slow days on the island — mornings, boats, and sunsets.' },
	{ title: 'My everyday makeup routine', img: '/images/beauty.webp', duration: '8:15', views: '61K views', desc: 'The five products I reach for every single morning.' },
	{ title: 'Packing for Bali: what’s in my bag', img: '/images/bali.jpg', duration: '10:04', views: '27K views', desc: 'One carry-on, ten days, zero regrets.' },
	{ title: 'Tokyo food tour: 5 places you must try', img: '/images/tokyo.jpg', duration: '14:20', views: '39K views', desc: 'Ramen, tiny bars, and the best dessert of my life.' }
];

export const testimonials = [
	{
		quote: 'Tina’s style guides changed how I pack for trips — one bag, endless outfits, and I actually felt good in all of them.',
		name: 'Priya S.',
		role: 'Reader from Mumbai'
	},
	{
		quote: 'Working with Tina was effortless. Her audience trusts her, and it shows in the results — our best-performing collaboration this year.',
		name: 'Glow Cosmetics',
		role: 'Brand partner'
	},
	{
		quote: 'Her Paris vlog felt like travelling with a friend. I booked my ticket the same week I watched it.',
		name: 'Emma R.',
		role: 'Follower from London'
	}
];

export const galleryImages = [
	{ img: '/images/hero.jpg', alt: 'Tina in a white blazer and sunglasses' },
	{ img: '/images/outfits.jpg', alt: 'Tina’s outfit of the day' },
	{ img: '/images/travel.jpg', alt: 'Santorini blue domes' },
	{ img: '/images/beauty.webp', alt: 'Makeup brushes flat lay' },
	{ img: '/images/vlog-paris.jpg', alt: 'Paris vlog — Eiffel Tower at golden hour' },
	{ img: '/images/work.jpg', alt: 'Tina working at her desk' }
];

export type Look = { title: string; occasion: string; img: string; items: string[] };

export const looks: Look[] = [
	{ title: 'White Blazer, Golden Hour', occasion: 'City day out', img: '/images/hero.jpg', items: ['Sunglasses', 'Gold Earrings', 'Lipstick Set'] },
	{ title: 'The Everyday Neutral', occasion: 'Coffee run + errands', img: '/images/outfits.jpg', items: ['Silk Scarf', 'Handbag', 'Gold Earrings'] },
	{ title: 'Santorini Whites', occasion: 'Holiday by the sea', img: '/images/travel.jpg', items: ['Sunglasses', 'Silk Scarf', 'Lipstick Set'] },
	{ title: 'Paris, But Make It Easy', occasion: 'Travel day', img: '/images/vlog-paris.jpg', items: ['Sunglasses', 'Leather Tote', 'Perfume'] },
	{ title: 'Desk to Dinner', occasion: 'Work day', img: '/images/work.jpg', items: ['Handbag', 'Gold Earrings', 'Perfume'] },
	{ title: 'Slow Morning in Ubud', occasion: 'Slow travel', img: '/images/bali.jpg', items: ['Silk Scarf', 'Sunglasses', 'Makeup Set'] }
];
