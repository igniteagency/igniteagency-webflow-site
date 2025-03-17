import { HORIZONTAL_SCROLL_SELECTOR } from '$src/constants';

export function horizontalScroll() {
  const wrapper = document.querySelector(`${HORIZONTAL_SCROLL_SELECTOR}`) as HTMLElement | null;
  const sections = window.gsap.utils.toArray(
    `${HORIZONTAL_SCROLL_SELECTOR} > section`
  ) as HTMLElement[];

  if (wrapper && sections.length) {
    const numSections = sections.length;

    // Remove the offset approach
    const totalVerticalScroll = () => window.innerHeight * numSections;

    // Create a timeline for smoother transitions
    const tl = window.gsap.timeline();

    // First ScrollTrigger: Pin the wrapper during the horizontal scroll
    // Using a small scrub value for the pin to make it smoother
    window.ScrollTrigger.create({
      trigger: `${HORIZONTAL_SCROLL_SELECTOR}`,
      start: 'top top',
      end: () => '+=' + totalVerticalScroll(),
      pin: true,
      anticipatePin: 1, // This helps reduce the jolt
      invalidateOnRefresh: true,
      pinSpacing: true,
      pinReparent: false, // Try setting this to false to reduce jolt
      // Optional: Add markers for debugging
      // markers: true,
    });

    // Second ScrollTrigger: Animate the horizontal scrolling of the sections
    // Using a smoother scrub and ease for better transitions
    window.gsap.to(wrapper, {
      x: () => -1 * window.innerWidth * (numSections - 1),
      ease: 'power2.out', // Smoother ease
      scrollTrigger: {
        trigger: `${HORIZONTAL_SCROLL_SELECTOR}`,
        scrub: 1, // Higher scrub value for smoother scrolling (0.5-1.5 is good)
        start: 'top top',
        end: () => '+=' + totalVerticalScroll(),
        invalidateOnRefresh: true,
        // Optional: Add markers for debugging
        // markers: true,
      },
    });

    // Add a small animation to fade in the horizontal scroll section
    // This can help mask the transition jolt
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
    window.gsap.delayedCall(0.5, () => {
      window.ScrollTrigger.refresh();
    });
  }
}
