import { TabBar } from "#components";
import useWindowStore from "#store/window";
import gsap from "gsap";
import React, { useLayoutEffect, useRef } from "react";

const MobileWindowWrapper = (Component, windowKey) => {
	const Wrapped = (props) => {
		const { focusWindow, windows, closeWindow } = useWindowStore();
		const { isOpen, zIndex } = windows[windowKey];
		const ref = useRef(null);

		useLayoutEffect(() => {
			const el = ref.current;
			if (!el) return;

			if (isOpen) {
				el.style.display = "block";
				gsap.fromTo(
					el,
					{
						scale: 0.8,
						opacity: 0,
						y: 40,
					},
					{ scale: 1, opacity: 1, y: 0, duration: 0.4, ease: "power3.out" }
				);

				// Swipe-to-close gesture
				let startY = 0;
				let currentY = 0;
				let isDragging = false;

				const handleTouchStart = (e) => {
					// Only allow drag from top portion of window (like iOS)
					const rect = el.getBoundingClientRect();
					if (e.touches[0].clientY - rect.top > 60) return; // Only top 60px

					startY = e.touches[0].clientY;
					currentY = startY;
					isDragging = true;
				};

				const handleTouchMove = (e) => {
					if (!isDragging) return;

					currentY = e.touches[0].clientY;
					const deltaY = Math.max(0, currentY - startY);
					const progress = deltaY / window.innerHeight;

					gsap.set(el, {
						y: deltaY,
						scale: 1 - progress * 0.15,
						opacity: 1 - progress * 0.4,
					});
				};

				const handleTouchEnd = () => {
					if (!isDragging) return;
					isDragging = false;

					const deltaY = currentY - startY;

					if (deltaY > window.innerHeight * 0.25) {
						// Close animation
						gsap.to(el, {
							y: window.innerHeight,
							opacity: 0,
							scale: 0.85,
							duration: 0.3,
							ease: "power2.in",
							onComplete: () => {
								closeWindow(windowKey);
								// Reset transform for next open
								gsap.set(el, { y: 0, scale: 1, opacity: 1 });
							},
						});
					} else {
						// Snap back
						gsap.to(el, {
							y: 0,
							scale: 1,
							opacity: 1,
							duration: 0.3,
							ease: "back.out(1.5)",
						});
					}
				};

				el.addEventListener("touchstart", handleTouchStart, { passive: true });
				el.addEventListener("touchmove", handleTouchMove, { passive: true });
				el.addEventListener("touchend", handleTouchEnd, { passive: true });

				return () => {
					el.removeEventListener("touchstart", handleTouchStart);
					el.removeEventListener("touchmove", handleTouchMove);
					el.removeEventListener("touchend", handleTouchEnd);
				};
			} else {
				el.style.display = "none";
			}
		}, [isOpen]);

		return (
			<section id={windowKey} ref={ref} style={{ zIndex }} className="absolute">
				<Component {...props} />
			</section>
		);
	};

	Wrapped.displayName = `WindowWrapper(${
		Component.displayName || Component.name || "Component"
	})`;

	return Wrapped;
};

export default MobileWindowWrapper;
