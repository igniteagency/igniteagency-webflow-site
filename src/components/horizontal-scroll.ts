export function horizontalScroll() {
  const wrapper = document.querySelector('.horizontal-scroll') as HTMLElement | null;
  const sections = window.gsap.utils.toArray('.horizontal-scroll > section') as HTMLElement[];

  if (wrapper && sections.length) {
    window.gsap.to(sections, {
      xPercent: -100 * (sections.length - 1),
      ease: 'none',
      scrollTrigger: {
        trigger: '.horizontal-scroll',
        pin: true,
        scrub: true,
        // snap: 1 / (sections.length - 1),
        end: () => '+=' + (wrapper as HTMLElement).offsetWidth,
      },
    });
    // Ensure ScrollTriggers are refreshed
    window.gsap.delayedCall(1, () => {
      window.ScrollTrigger.refresh();
    });
  }
}
