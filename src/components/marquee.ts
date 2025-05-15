export function initMarqueeScrollDirection() {
  // Check if GSAP and ScrollTrigger are available
  if (!gsap || !ScrollTrigger) {
    console.error('GSAP or ScrollTrigger not loaded. Cannot initialize marquee effects.');
    return;
  }

  document.querySelectorAll('[data-marquee-scroll-direction-target]').forEach((marquee) => {
    // Query marquee elements
    const marqueeContent = marquee.querySelector('[data-marquee-collection-target]');
    const marqueeScroll = marquee.querySelector('[data-marquee-scroll-target]');
    if (!marqueeContent || !marqueeScroll) return;

    // Get data attributes
    const {
      marqueeSpeed: speed,
      marqueeDirection: direction,
      marqueeScrollSpeed: scrollSpeed,
    } = marquee.dataset;

    // Convert data attributes to usable types
    const marqueeSpeedAttr = parseFloat(speed || '0'); // Default to '0' if undefined
    const marqueeDirectionAttr = direction === 'right' ? 1 : -1; // 1 for right, -1 for left
    const scrollSpeedAttr = parseFloat(scrollSpeed || '0'); // Default to '0' if undefined
    const speedMultiplier = window.innerWidth < 479 ? 0.25 : window.innerWidth < 991 ? 0.5 : 1;

    // Ensure content width is not zero to avoid division by zero
    if (marqueeContent.offsetWidth === 0) {
      console.warn('Marquee content has zero width, skipping duplication.', marqueeContent);
      return;
    }

    let marqueeSpeed =
      marqueeSpeedAttr * (marqueeContent.offsetWidth / window.innerWidth) * speedMultiplier;

    // Dynamic duplication calculation
    const containerWidth = marquee.offsetWidth;
    const contentWidth = marqueeContent.offsetWidth;
    const requiredContentBlocks = Math.ceil(containerWidth / contentWidth);
    // Ensure at least 1 duplicate (2 total blocks), add more if needed to fill container
    const dynamicDuplicateAmount = Math.max(1, requiredContentBlocks + 1);

    // Precompute styles for the scroll container
    marqueeScroll.style.marginLeft = `${scrollSpeedAttr * -1}%`;
    marqueeScroll.style.width = `${(scrollSpeedAttr + 2) * 100}%`;

    // Duplicate marquee content dynamically
    if (dynamicDuplicateAmount > 0) {
      const fragment = document.createDocumentFragment();
      // Start loop from 0 as we need 'dynamicDuplicateAmount' copies in *addition* to the original
      for (let i = 0; i < dynamicDuplicateAmount; i++) {
        fragment.appendChild(marqueeContent.cloneNode(true));
      }
      marqueeScroll.appendChild(fragment);
    }

    // GSAP animation for marquee content
    const marqueeItems = marquee.querySelectorAll('[data-marquee-collection-target]');
    const animation = gsap
      .to(marqueeItems, {
        xPercent: -100, // Move completely out of view
        repeat: -1,
        duration: marqueeSpeed,
        ease: 'linear',
      })
      .totalProgress(0.5);

    // Initialize marquee in the correct direction
    gsap.set(marqueeItems, {
      xPercent: marqueeDirectionAttr === 1 ? 100 : -100,
    });
    animation.timeScale(marqueeDirectionAttr); // Set correct direction
    animation.play(); // Start animation immediately

    // Set initial marquee status
    marquee.setAttribute('data-marquee-status', 'normal');

    // ScrollTrigger logic for direction inversion
    ScrollTrigger.create({
      trigger: marquee,
      start: 'top bottom',
      end: 'bottom top',
      onUpdate: (self) => {
        const isInverted = self.direction === 1; // Scrolling down
        const currentDirection = isInverted ? -marqueeDirectionAttr : marqueeDirectionAttr;

        // Update animation direction and marquee status
        animation.timeScale(currentDirection);
        marquee.setAttribute('data-marquee-status', isInverted ? 'normal' : 'inverted');
      },
    });

    // Extra speed effect on scroll
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: marquee,
        start: '0% 100%',
        end: '100% 0%',
        scrub: 0,
      },
    });

    const scrollStart = marqueeDirectionAttr === -1 ? scrollSpeedAttr : -scrollSpeedAttr;
    const scrollEnd = -scrollStart;

    tl.fromTo(marqueeScroll, { x: `${scrollStart}vw` }, { x: `${scrollEnd}vw`, ease: 'none' });
  });
}
