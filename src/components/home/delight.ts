import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function delightSectionTransitions() {
  const sectionWrapper = document.querySelector('.delight_section-wrapper') as HTMLElement | null;
  const stickyWrapper = document.querySelector('.delight_sticky-wrapper') as HTMLElement | null;
  // Ensure we select only direct children sections if structure is nested
  const sections = gsap.utils.toArray<HTMLElement>(
    ':scope > .delight_sticky-wrapper > .section_delight_TEST',
    sectionWrapper
  );

  if (!sectionWrapper || !stickyWrapper || sections.length < 3) {
    console.error(
      'Delight section elements not found. Required: .delight_section-wrapper > .delight_sticky-wrapper > .section_delight_TEST (x3). Found sections:',
      sections.length
    );
    return () => {}; // Return empty cleanup function
  }

  const sectionHeight = stickyWrapper.offsetHeight; // Should be 100vh effectively

  if (sectionHeight === 0) {
    console.warn('Delight sticky wrapper has zero height. Animations might not trigger correctly.');
    // Potentially wait for layout? For now, proceed but warn.
  }

  // Store SplitText instances for cleanup
  const splitInstances: SplitText[] = [];

  // --- Transition 1 -> 2 ---
  const tl1 = gsap.timeline({
    paused: true,
    defaults: { duration: 0.8, ease: 'power2.inOut' },
  });

  const section1 = sections[0];
  const section2 = sections[1];

  // Animate Out Section 1
  const heading1 = section1.querySelector('.heading-style-h1');
  if (heading1) {
    const split = new SplitText(heading1, { type: 'chars', tag: 'span' });
    splitInstances.push(split);
    tl1.to(
      split.chars,
      {
        yPercent: -100,
        stagger: 0.03,
        duration: 0.6,
        ease: 'power1.in',
      },
      0
    );
  }
  const otherText1 = section1.querySelectorAll('.text-style-subtitle, .text-size-large');
  if (otherText1.length > 0) {
    tl1.to(
      otherText1,
      {
        scale: 0,
        opacity: 0,
        stagger: 0.05,
        duration: 0.4,
        ease: 'power1.in',
      },
      0.1
    );
  }

  // Animate In Section 2
  const heading2 = section2.querySelector('.heading-style-h1');
  if (heading2) {
    const split = new SplitText(heading2, { type: 'chars', tag: 'span' });
    splitInstances.push(split);
    gsap.set(split.chars, { yPercent: 100 }); // Initial state
    tl1.to(
      split.chars,
      {
        yPercent: 0,
        stagger: 0.03,
        duration: 0.6,
        ease: 'power1.out',
      },
      0.3
    ); // Start after section 1 starts animating out
  }
  const otherText2 = section2.querySelectorAll('.text-style-subtitle, .text-size-large');
  if (otherText2.length > 0) {
    gsap.set(otherText2, { scale: 2, opacity: 0 }); // Initial state
    tl1.to(
      otherText2,
      {
        scale: 1,
        opacity: 1,
        stagger: 0.05,
        duration: 0.5,
        ease: 'power1.out',
      },
      0.4
    );
  }

  const st1 = ScrollTrigger.create({
    trigger: sectionWrapper,
    start: `top top+=${sectionHeight * 0.9}`, // Trigger slightly before the 100vh scroll point
    end: `top top+=${sectionHeight * 1.1}`, // Define a zone for the trigger toggle
    onEnter: () => tl1.play(),
    onLeaveBack: () => tl1.reverse(),
    invalidateOnRefresh: true,
    markers: window.IS_DEBUG_MODE || false, // Add markers if in debug mode
    id: 'delight-1-2',
  });

  // --- Transition 2 -> 3 ---
  const tl2 = gsap.timeline({
    paused: true,
    defaults: { duration: 0.8, ease: 'power2.inOut' },
  });

  const section3 = sections[2];

  // Animate Out Section 2 (reuse selectors)
  if (heading2) {
    // Find the SplitText instance associated with heading2
    const split = splitInstances.find((s) => s.elements[0] === heading2);
    if (split) {
      tl2.to(
        split.chars,
        {
          yPercent: -100,
          stagger: 0.03,
          duration: 0.6,
          ease: 'power1.in',
        },
        0
      );
    }
  }
  if (otherText2.length > 0) {
    tl2.to(
      otherText2,
      {
        scale: 0,
        opacity: 0,
        stagger: 0.05,
        duration: 0.4,
        ease: 'power1.in',
      },
      0.1
    );
  }

  // Animate In Section 3
  const heading3 = section3.querySelector('.heading-style-h1');
  if (heading3) {
    const split = new SplitText(heading3, { type: 'chars', tag: 'span' });
    splitInstances.push(split);
    gsap.set(split.chars, { yPercent: 100 }); // Initial state
    tl2.to(
      split.chars,
      {
        yPercent: 0,
        stagger: 0.03,
        duration: 0.6,
        ease: 'power1.out',
      },
      0.3
    );
  }
  const otherText3 = section3.querySelectorAll('.text-style-subtitle, .text-size-large');
  if (otherText3.length > 0) {
    gsap.set(otherText3, { scale: 2, opacity: 0 }); // Initial state
    tl2.to(
      otherText3,
      {
        scale: 1,
        opacity: 1,
        stagger: 0.05,
        duration: 0.5,
        ease: 'power1.out',
      },
      0.4
    );
  }

  const st2 = ScrollTrigger.create({
    trigger: sectionWrapper,
    start: `top top+=${sectionHeight * 1.9}`, // Trigger slightly before the 200vh scroll point
    end: `top top+=${sectionHeight * 2.1}`, // Define trigger zone
    onEnter: () => tl2.play(),
    onLeaveBack: () => tl2.reverse(),
    invalidateOnRefresh: true,
    markers: window.IS_DEBUG_MODE || false, // Add markers if in debug mode
    id: 'delight-2-3',
  });

  // Cleanup function
  return () => {
    console.log('Cleaning up delight transitions...');
    tl1.kill();
    tl2.kill();
    st1.kill();
    st2.kill();
    splitInstances.forEach((split) => split.revert());
    splitInstances.length = 0; // Clear the array
    console.log('Delight transitions cleaned up.');
  };
}

// Example of how to call it and manage cleanup (e.g., in your main app script or component lifecycle)
/*
let cleanupDelightTransitions: (() => void) | null = null;

function initializeAnimations() {
  // Clean up previous instances if any
  if (cleanupDelightTransitions) {
    cleanupDelightTransitions();
  }
  // Initialize new animations and store the cleanup function
  cleanupDelightTransitions = delightSectionTransitions();
}

// Call initializeAnimations when the page/component loads
// If using a framework, call it in the appropriate lifecycle hook (e.g., onMounted, useEffect)
// Make sure to call cleanupDelightTransitions on unmount/destroy
*/
