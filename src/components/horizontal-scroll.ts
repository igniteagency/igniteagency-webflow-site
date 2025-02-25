import { HORIZONTAL_SCROLL_SELECTOR } from '$src/constants';

export function horizontalScroll() {
  const wrapper = document.querySelector(`${HORIZONTAL_SCROLL_SELECTOR}`) as HTMLElement | null;
  const sections = window.gsap.utils.toArray(
    `${HORIZONTAL_SCROLL_SELECTOR} > section`
  ) as HTMLElement[];

  if (wrapper && sections.length) {
    const numSections = sections.length;
    const totalHorizontalMovement = window.innerWidth * (numSections - 1);
    const totalVerticalScroll = window.innerHeight * numSections;

    // First ScrollTrigger: Pin the wrapper during the horizontal scroll
    window.ScrollTrigger.create({
      trigger: `${HORIZONTAL_SCROLL_SELECTOR}`,
      start: 'top top',
      end: () => '+=' + totalVerticalScroll,
      pin: true,
      anticipatePin: 1,
    });

    // Calculate snap points based on normalized progress
    const snapPoints = sections.map((s, i) => i / (numSections - 1));

    // Second ScrollTrigger: Animate the horizontal scrolling of the sections
    window.gsap.to(wrapper, {
      x: -totalHorizontalMovement,
      ease: 'none',
      scrollTrigger: {
        trigger: `${HORIZONTAL_SCROLL_SELECTOR}`,
        scrub: true,
        // snap: {
        //   snapTo: snapPoints,
        //   duration: { min: 0.2, max: 0.5 },
        //   ease: 'power1.inOut',
        // },
        start: 'top top',
        end: () => '+=' + totalVerticalScroll,
      },
    });

    // Ensure ScrollTriggers are refreshed
    window.gsap.delayedCall(0.5, () => {
      window.ScrollTrigger.refresh();
    });
  }
}
