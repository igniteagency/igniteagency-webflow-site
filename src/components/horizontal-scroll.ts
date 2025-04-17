import { HORIZONTAL_SCROLL_SELECTOR } from '$src/constants';

export function horizontalScroll() {
  // Check if it's a touch device
  const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;

  // If it's a touch device, don't initialize horizontal scroll
  if (isTouchDevice) return;

  const wrapper = document.querySelector(`${HORIZONTAL_SCROLL_SELECTOR}`) as HTMLElement | null;
  const sections = window.gsap.utils.toArray(
    `${HORIZONTAL_SCROLL_SELECTOR} > section`
  ) as HTMLElement[];

  if (wrapper && sections.length) {
    const sectionCount = sections.length;

    window.gsap.to(sections, {
      xPercent: -(100 * (sectionCount - 1)),
      duration: sectionCount,
      ease: 'none',
      scrollTrigger: {
        trigger: `${HORIZONTAL_SCROLL_SELECTOR}`,
        scrub: true,
        start: 'top top',
        end: () => '+=' + window.innerHeight * (sectionCount - 1),
        pin: true,
        invalidateOnRefresh: true,
        // snap: 1 / (sectionCount - 1),
      },
    });

    // Add a small animation to fade in the horizontal scroll section
    window.gsap.fromTo(
      wrapper,
      {
        opacity: 0.95,
      },
      {
        opacity: 1,
        duration: 0.3,
        scrollTrigger: {
          trigger: `${HORIZONTAL_SCROLL_SELECTOR}`,
          start: 'top bottom-=10%',
          end: 'top top+=10%',
          toggleActions: 'play none none reverse',
        },
      }
    );

    // Ensure ScrollTriggers are refreshed
    window.gsap.delayedCall(2, () => {
      window.ScrollTrigger.refresh();
    });
  }
}
