// Shared shopping bag / cart — Svelte 5 runes in a .svelte.ts module, one state for every page.
// Cart items are { slug, qty }; persisted in localStorage so the bag survives a refresh.
// Old string[] bags (names only, from before the cart upgrade) migrate to qty 1.
// On the server (prerender) localStorage doesn't exist, so it starts empty there.
import { products, type Product } from './data';

const KEY = 'tina-bag';
const ORDER_KEY = 'tina-order';

export type CartItem = { slug: string; qty: number };

export const FREE_SHIPPING_AT = 75;
export const STANDARD_SHIPPING = 4.95;
export const EXPRESS_SHIPPING = 12.95;

export function formatPrice(n: number): string {
	return '$' + n.toFixed(2);
}

function load(): CartItem[] {
	try {
		if (typeof localStorage === 'undefined') return [];
		const raw = localStorage.getItem(KEY);
		if (!raw) return [];
		const parsed = JSON.parse(raw);
		if (!Array.isArray(parsed)) return [];
		// Migrate the old format: ["Sunglasses", ...] -> [{ slug, qty: 1 }]
		if (parsed.every((x) => typeof x === 'string')) {
			const byName = new Map(products.map((p) => [p.name, p.slug]));
			return parsed
				.map((name) => byName.get(name))
				.filter((slug): slug is string => !!slug)
				.map((slug) => ({ slug, qty: 1 }));
		}
		return parsed.filter(
			(x): x is CartItem =>
				x && typeof x.slug === 'string' && typeof x.qty === 'number' && x.qty > 0 &&
				products.some((p) => p.slug === x.slug)
		);
	} catch {
		return [];
	}
}

function save() {
	try {
		if (typeof localStorage !== 'undefined') localStorage.setItem(KEY, JSON.stringify(bag));
	} catch {
		// storage unavailable (private mode, etc.) — bag still works in memory
	}
}

export const bag = $state<CartItem[]>(load());

export function getCartCount(): number {
	return bag.reduce((n, i) => n + i.qty, 0);
}

export function getSubtotal(): number {
	return bag.reduce((sum, i) => {
		const p = products.find((p) => p.slug === i.slug);
		return sum + (p ? p.amount * i.qty : 0);
	}, 0);
}

export function productOf(item: CartItem): Product | undefined {
	return products.find((p) => p.slug === item.slug);
}

export function inBag(slug: string): boolean {
	return bag.some((i) => i.slug === slug);
}

export function qtyOf(slug: string): number {
	return bag.find((i) => i.slug === slug)?.qty ?? 0;
}

export function addToBag(slug: string, openDrawer = true) {
	const item = bag.find((i) => i.slug === slug);
	if (item) item.qty += 1;
	else bag.push({ slug, qty: 1 });
	save();
	if (openDrawer) ui.cartOpen = true;
}

export function toggleBag(slug: string) {
	if (inBag(slug)) removeFromBag(slug);
	else addToBag(slug);
}

export function removeFromBag(slug: string) {
	const i = bag.findIndex((x) => x.slug === slug);
	if (i >= 0) bag.splice(i, 1);
	save();
}

export function setQty(slug: string, qty: number) {
	const item = bag.find((i) => i.slug === slug);
	if (!item) return;
	// A stepper never drops to 0 — removal is always explicit (Remove link).
	if (qty < 1) return;
	item.qty = Math.min(qty, 99);
	save();
}

export function clearBag() {
	bag.splice(0, bag.length);
	save();
}

export function bagSummary(): string {
	const count = getCartCount();
	if (count === 0) return '';
	return `🛍️ ${count} item${count > 1 ? 's' : ''} in your bag · ${formatPrice(getSubtotal())}`;
}

/** Free-shipping progress: how much more for free standard shipping (0 = unlocked). */
export function getAwayFromFreeShipping(): number {
	return Math.max(0, FREE_SHIPPING_AT - getSubtotal());
}

export function shippingCost(method: 'standard' | 'express'): number {
	if (method === 'express') return EXPRESS_SHIPPING;
	return getSubtotal() >= FREE_SHIPPING_AT ? 0 : STANDARD_SHIPPING;
}

// --- Cart drawer state (shared so any page can open it) ---
// NOTE: a bare `export let x = $state(...)` in a .svelte.ts module cannot be
// reassigned from importers (constant_assignment) — keep it inside an object.
export const ui = $state({ cartOpen: false });

// --- Orders (demo checkout: saved locally, no real payment is processed) ---
export type Order = {
	id: string;
	date: string;
	email: string;
	firstName: string;
	lastName: string;
	address: string;
	city: string;
	zip: string;
	country: string;
	method: 'standard' | 'express';
	cardLast4: string;
	items: { slug: string; name: string; img: string; price: number; qty: number }[];
	subtotal: number;
	shipping: number;
	total: number;
	deliveryFrom: string;
	deliveryTo: string;
};

export function saveOrder(order: Order) {
	try {
		if (typeof localStorage !== 'undefined') localStorage.setItem(ORDER_KEY, JSON.stringify(order));
	} catch {
		// ignore
	}
}

export function loadOrder(): Order | null {
	try {
		if (typeof localStorage === 'undefined') return null;
		const raw = localStorage.getItem(ORDER_KEY);
		if (!raw) return null;
		const parsed = JSON.parse(raw);
		return parsed && typeof parsed.id === 'string' ? (parsed as Order) : null;
	} catch {
		return null;
	}
}

export function makeOrderId(): string {
	return 'TS-' + Math.floor(100000 + Math.random() * 900000);
}

export function deliveryWindow(method: 'standard' | 'express'): { from: string; to: string } {
	const fmt = (d: Date) =>
		d.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' });
	const from = new Date();
	const to = new Date();
	if (method === 'express') {
		from.setDate(from.getDate() + 1);
		to.setDate(to.getDate() + 2);
	} else {
		from.setDate(from.getDate() + 3);
		to.setDate(to.getDate() + 5);
	}
	return { from: fmt(from), to: fmt(to) };
}
