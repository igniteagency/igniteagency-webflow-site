// Select all testimonial CARDS
const CARDS: Element[] = window.gsap.utils.toArray('.testimonials_card');
const COMPONENT: Element | null = document.querySelector('.testimonials_COMPONENT');

export function testimonialCards() {
  if (COMPONENT) {
    // Calculate the total scroll distance needed
    const totalScrollHeight: number = (CARDS.length + 1) * window.innerHeight;

    // Set the COMPONENT height to allow for full scroll animation
    window.gsap.set(COMPONENT, { height: `${totalScrollHeight}px` });

    // Reverse the order of CARDS for animation
    const reversedCARDS: Element[] = [...CARDS].reverse();

    // Create individual animations for each card
    reversedCARDS.forEach((card: Element, index: number) => {
      // Generate a random rotation value between -50 and 50
      const randomRotation: number = window.gsap.utils.random(-50, 50);

      // Set initial rotation to 10% of the final rotation
      window.gsap.set(card, {
        rotation: randomRotation * 0.1,
      });

      window.gsap.to(card, {
        y: `-${window.innerHeight * 1}px`, // Move 1.5 times the viewport height
        rotation: randomRotation, // Use the same random rotation value
        ease: 'none',
        scrollTrigger: {
          trigger: COMPONENT,
          start: () => `top+=${index * window.innerHeight} top`,
          end: () => `top+=${(index + 1) * window.innerHeight} top`,
          scrub: true,
          // markers: true, // Uncomment for debugging
        },
      });
    });
  }
}
