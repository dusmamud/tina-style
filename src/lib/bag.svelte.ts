// Shared shopping bag — Svelte 5 runes in a .svelte.ts module, one state for every page.
// Persisted in localStorage so the bag survives a refresh or a shared link;
// on the server (prerender) localStorage doesn't exist, so it starts empty there.
const KEY = 'tina-bag';

function load(): string[] {
	try {
		if (typeof localStorage === 'undefined') return [];
		const raw = localStorage.getItem(KEY);
		const parsed = raw ? JSON.parse(raw) : [];
		return Array.isArray(parsed) ? parsed.filter((x) => typeof x === 'string') : [];
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

export const bag = $state<string[]>(load());

export function toggleBag(name: string) {
	const i = bag.indexOf(name);
	if (i >= 0) bag.splice(i, 1);
	else bag.push(name);
	save();
}

export function bagSummary(): string {
	if (bag.length === 0) return '';
	return `🛍️ ${bag.length} item${bag.length > 1 ? 's' : ''} in your bag: ${bag.join(', ')}`;
}
