export function horizontalScroll() {
  const wrapper = document.querySelector('.horizontal-scroll') as HTMLElement | null;
  const sections = window.gsap.utils.toArray('.horizontal-scroll > section') as HTMLElement[];

  if (wrapper && sections.length) {
    const numSections = sections.length;
    const totalHorizontalMovement = window.innerWidth * (numSections - 1);
    const totalVerticalScroll = window.innerHeight * (numSections - 1);

    // First ScrollTrigger: Pin the wrapper during the horizontal scroll
    window.ScrollTrigger.create({
      trigger: '.horizontal-scroll',
      start: 'top top',
      //end: () => '+=' + (totalVerticalScroll + window.innerHeight),
      end: () => '+=' + (totalVerticalScroll - window.innerHeight),
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
        trigger: '.horizontal-scroll',
        scrub: true,
        snap: {
          snapTo: snapPoints,
          duration: { min: 0.2, max: 0.5 },
          ease: 'power1.inOut',
        },
        start: 'top bottom',
        end: () => '+=' + (totalVerticalScroll + window.innerHeight),
      },
    });

    // Ensure ScrollTriggers are refreshed
    window.gsap.delayedCall(0.5, () => {
      window.ScrollTrigger.refresh();
    });
  }
}
