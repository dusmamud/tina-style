// Reveal-on-scroll action, shared by every page.
// Adds .reveal, then .is-visible when the element enters the viewport.
// No JS / no IntersectionObserver / prefers-reduced-motion → element stays visible (see app.css).
export function reveal(node: HTMLElement, delay = 0) {
	node.classList.add('reveal');
	node.style.transitionDelay = `${delay}ms`;
	if (typeof IntersectionObserver === 'undefined') {
		node.classList.add('is-visible');
		return {};
	}
	const io = new IntersectionObserver(
		(entries) => {
			for (const entry of entries) {
				if (entry.isIntersecting) {
					node.classList.add('is-visible');
					io.disconnect();
				}
			}
		},
		// 80px early trigger + threshold 0: fires reliably even on a fast flick-scroll,
		// so an element can never stay invisible because IO missed its brief pass.
		{ threshold: 0, rootMargin: '0px 0px 80px 0px' }
	);
	io.observe(node);
	return { destroy: () => io.disconnect() };
}
