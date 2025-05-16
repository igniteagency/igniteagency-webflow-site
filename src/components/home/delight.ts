import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Assuming SplitText is used
import { createConfettiController } from './confetti';
import { RainEmojis } from './rain-emojis';

gsap.registerPlugin(ScrollTrigger);

/**
 * Sets up mouse tracking for a specific cursor element within a section.
 * @param sectionElement The parent section element that defines the tracking bounds.
 * @param cursorContentElement The element to move with the mouse.
 * @param abortSignal Signal to clean up event listeners.
 */
function setupMouseTracking(
  sectionElement: HTMLElement,
  cursorContentElement: HTMLElement,
  abortSignal: AbortSignal
) {
  if (!cursorContentElement) return;

  const handleMouseMove = (event: MouseEvent) => {
    const rect = sectionElement.getBoundingClientRect();
    // Calculate mouse position relative to the section's top-left corner
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    // Animate the cursor content element to the mouse position
    gsap.to(cursorContentElement, {
      x: x,
      y: y,
      duration: 0.4, // Adjust for desired smoothness
      ease: 'power1.out',
      overwrite: 'auto',
    });
  };

  sectionElement.addEventListener('mousemove', handleMouseMove, { signal: abortSignal });

  // Optional: Hide cursor when mouse leaves the section
  // sectionElement.addEventListener('mouseleave', () => {
  //   gsap.to(cursorContentElement, { opacity: 0, duration: 0.2 });
  // }, { signal: abortSignal });
  // sectionElement.addEventListener('mouseenter', () => {
  //  gsap.to(cursorContentElement, { opacity: 1, duration: 0.2 });
  // }, { signal: abortSignal });

  console.log(`Mouse tracking set up for section:`, sectionElement);
}

export function delightSectionTransitions() {
  // --- Initialize Effects Controllers ---
  const emojiRain = new RainEmojis(false); // Prevent auto-start
  const confettiController = createConfettiController('#canvas-target');

  const sectionWrapper = document.querySelector('.delight_section-wrapper') as HTMLElement | null;
  const stickyWrapper = document.querySelector('.delight_sticky-wrapper') as HTMLElement | null;

  if (!sectionWrapper || !stickyWrapper) {
    console.error(
      'Required wrapper elements (.delight_section-wrapper, .delight_sticky-wrapper) not found.'
    );
    return () => {};
  }

  const sections = gsap.utils.toArray<HTMLElement>(':scope > .section_delight_test', stickyWrapper);

  if (sections.length < 3) {
    console.error(
      'Expected at least 3 direct children .section_delight_test elements inside .delight_sticky-wrapper. Found:',
      sections.length
    );
    return () => {};
  }

  // --- Calculate Scroll Durations ---
  const scrollPerSection = window.innerHeight; // Each section gets 1 viewport height of scroll
  const totalScrollDurationForPin = sections.length * scrollPerSection;

  console.log(
    `Delight Setup: scrollPerSection: ${scrollPerSection}, totalScrollDurationForPin: ${totalScrollDurationForPin}`
  );
  if (sectionWrapper) {
    console.log(`Delight Setup: sectionWrapper.offsetTop (initial): ${sectionWrapper.offsetTop}`);
    console.log(
      `Delight Setup: sectionWrapper.scrollHeight (initial): ${sectionWrapper.scrollHeight}`
    );
  }
  if (stickyWrapper) {
    console.log(
      `Delight Setup: stickyWrapper.offsetHeight (initial): ${stickyWrapper.offsetHeight}`
    );
  }

  // Abort controller for cleaning up listeners (now just for the main mouse listener)
  const abortController = new AbortController();
  const scrollTriggers: ScrollTrigger[] = []; // To store all ST instances for cleanup
  const splitInstances: SplitText[] = [];

  // Assign sections to named variables
  const sectionLeads = sections[0]; // Section 1
  const sectionDelight = sections[1]; // Section 2
  const sectionEdit = sections[2]; // Section 3

  // Find Cursor Elements
  const delightCursorContent = stickyWrapper.querySelector(
    '#cursor-delight.cursor-content'
  ) as HTMLElement | null;
  const delightCursorImage = delightCursorContent?.querySelector(
    '.cursor-image'
  ) as HTMLElement | null;
  const delightCursorWrap = delightCursorContent?.querySelector(
    '.cursor_content-wrap'
  ) as HTMLElement | null;

  const editCursorContent = stickyWrapper.querySelector(
    '#cursor-edit.cursor-content'
  ) as HTMLElement | null;
  const editCursorImage = editCursorContent?.querySelector('.cursor-image') as HTMLElement | null;
  const editCursorWrap = editCursorContent?.querySelector(
    '.cursor_content-wrap'
  ) as HTMLElement | null;

  // --- Persistent Mouse Tracking Setup ---
  const handleGlobalMouseMove = (event: MouseEvent) => {
    const x = event.clientX;
    const y = event.clientY;
    if (delightCursorContent) {
      gsap.to(delightCursorContent, { x, y, duration: 0.3, ease: 'power1.out', overwrite: 'auto' });
    }
    if (editCursorContent) {
      gsap.to(editCursorContent, { x, y, duration: 0.3, ease: 'power1.out', overwrite: 'auto' });
    }
  };
  document.body.addEventListener('mousemove', handleGlobalMouseMove, {
    signal: abortController.signal,
  });

  // --- Initial States and Animations ---
  sectionWrapper.setAttribute('data-active-section', 'leads');
  if (delightCursorImage)
    gsap.set(delightCursorImage, { scale: 0, rotationZ: -50, transformOrigin: 'center center' });
  if (delightCursorWrap) gsap.set(delightCursorWrap, { scale: 0 });
  if (editCursorImage)
    gsap.set(editCursorImage, { scale: 0, rotationZ: -50, transformOrigin: 'center center' });
  if (editCursorWrap) gsap.set(editCursorWrap, { scale: 0 });
  const initialX = window.innerWidth / 2;
  const initialY = window.innerHeight / 2;
  if (delightCursorContent) gsap.set(delightCursorContent, { x: initialX, y: initialY });
  if (editCursorContent) gsap.set(editCursorContent, { x: initialX, y: initialY });

  // Animation Parameters
  const LETTER_DURATION = 0.6;
  const LETTER_STAGGER = 0.03;
  const TEXT_DURATION = 0.5;
  const TEXT_STAGGER = 0.05;
  const EASE_TYPE = 'expo.inOut';
  const OUT_OFFSET = 0;
  const TEXT_OUT_OFFSET = 0.1;
  const IN_OFFSET = 0.3;
  const TEXT_IN_OFFSET = 0.4;
  const CURSOR_OUT_END_TIME = TEXT_OUT_OFFSET + TEXT_DURATION;
  const CURSOR_IN_START_BUFFER = 0.4;

  // --- Transition Leads -> Delight (tl1) ---
  const tl1 = gsap.timeline({ paused: true, defaults: { ease: EASE_TYPE } });

  const headingLeads = sectionLeads.querySelector('.heading-style-h1');
  if (headingLeads) {
    const split = new SplitText(headingLeads, { type: 'words,chars', tag: 'span' });
    gsap.set(split.words, { overflow: 'hidden', display: 'inline-block' });
    gsap.set(split.chars, { display: 'inline-block' });
    splitInstances.push(split);
    tl1.to(
      split.chars,
      { yPercent: -100, stagger: LETTER_STAGGER, duration: LETTER_DURATION },
      OUT_OFFSET
    );
  }
  const otherTextLeads = sectionLeads.querySelectorAll('.text-style-subtitle, .text-size-large');
  if (otherTextLeads.length > 0) {
    tl1.to(
      otherTextLeads,
      { scale: 0, opacity: 0, stagger: TEXT_STAGGER, duration: TEXT_DURATION },
      TEXT_OUT_OFFSET
    );
  }

  if (confettiController) {
    tl1.call(confettiController.activate, [], TEXT_IN_OFFSET + TEXT_DURATION - 0.1); // Activate towards end of Delight text in
  }

  const headingDelight = sectionDelight.querySelector('.heading-style-h1');
  if (headingDelight) {
    const split = new SplitText(headingDelight, { type: 'words,chars', tag: 'span' });
    gsap.set(split.words, { overflow: 'hidden', display: 'inline-block' });
    gsap.set(split.chars, { display: 'inline-block', yPercent: 100 });
    splitInstances.push(split);
    tl1.to(
      split.chars,
      { yPercent: 0, stagger: LETTER_STAGGER, duration: LETTER_DURATION },
      IN_OFFSET
    );
  }
  const otherTextDelight = sectionDelight.querySelectorAll(
    '.text-style-subtitle, .text-size-large'
  );
  if (otherTextDelight.length > 0) {
    gsap.set(otherTextDelight, { scale: 2, opacity: 0 });
    tl1.to(
      otherTextDelight,
      { scale: 1, opacity: 1, stagger: TEXT_STAGGER, duration: TEXT_DURATION },
      TEXT_IN_OFFSET
    );
  }

  if (delightCursorImage) {
    tl1.fromTo(
      delightCursorImage,
      { scale: 0, rotationZ: -50 },
      { scale: 1, rotationZ: 0, duration: TEXT_DURATION },
      TEXT_IN_OFFSET
    );
  }
  if (delightCursorWrap) {
    tl1.to(delightCursorWrap, { scale: 1, duration: TEXT_DURATION }, TEXT_IN_OFFSET);
  }

  // --- Transition Delight -> Edit (tl2) ---
  const tl2 = gsap.timeline({ paused: true, defaults: { ease: EASE_TYPE } });

  if (confettiController) {
    tl2.call(confettiController.deactivate, [], OUT_OFFSET);
  }

  if (headingDelight) {
    const split = splitInstances.find((s) => s.elements[0] === headingDelight); // Find existing split
    if (split && split.chars) {
      tl2.to(
        split.chars,
        { yPercent: -100, stagger: LETTER_STAGGER, duration: LETTER_DURATION },
        OUT_OFFSET
      );
    }
  }
  if (otherTextDelight.length > 0) {
    tl2.to(
      otherTextDelight,
      { scale: 0, opacity: 0, stagger: TEXT_STAGGER, duration: TEXT_DURATION },
      TEXT_OUT_OFFSET
    );
  }

  if (delightCursorImage) {
    tl2.to(
      delightCursorImage,
      { scale: 0, rotationZ: -50, duration: TEXT_DURATION },
      TEXT_OUT_OFFSET
    );
  }
  if (delightCursorWrap) {
    tl2.to(delightCursorWrap, { scale: 0, duration: TEXT_DURATION }, TEXT_OUT_OFFSET);
  }

  const headingEdit = sectionEdit.querySelector('.heading-style-h1');
  if (headingEdit) {
    const split = new SplitText(headingEdit, { type: 'words,chars', tag: 'span' });
    gsap.set(split.words, { overflow: 'hidden', display: 'inline-block' });
    gsap.set(split.chars, { display: 'inline-block', yPercent: 100 });
    splitInstances.push(split);
    tl2.to(
      split.chars,
      { yPercent: 0, stagger: LETTER_STAGGER, duration: LETTER_DURATION },
      IN_OFFSET
    );
    if (headingEdit.classList.contains('is-text-editable')) {
      gsap.set(headingEdit, { '--pseudo-opacity': 0 });
      tl2.to(headingEdit, { '--pseudo-opacity': 1, duration: TEXT_DURATION }, IN_OFFSET);
    }
  }
  const otherTextEdit = sectionEdit.querySelectorAll('.text-style-subtitle, .text-size-large');
  if (otherTextEdit.length > 0) {
    gsap.set(otherTextEdit, { scale: 2, opacity: 0 });
    tl2.to(
      otherTextEdit,
      { scale: 1, opacity: 1, stagger: TEXT_STAGGER, duration: TEXT_DURATION },
      TEXT_IN_OFFSET
    );
  }

  if (editCursorImage) {
    tl2.fromTo(
      editCursorImage,
      { scale: 0, rotationZ: -50 },
      { scale: 1, rotationZ: 0, duration: TEXT_DURATION },
      CURSOR_OUT_END_TIME + CURSOR_IN_START_BUFFER
    );
  }
  if (editCursorWrap) {
    tl2.to(
      editCursorWrap,
      { scale: 1, duration: TEXT_DURATION },
      CURSOR_OUT_END_TIME + CURSOR_IN_START_BUFFER
    );
  }

  // --- ScrollTrigger Setup ---

  // 1. Main Pinning ScrollTrigger
  let pinST: ScrollTrigger | null = null;
  if (sectionWrapper && stickyWrapper) {
    pinST = ScrollTrigger.create({
      trigger: sectionWrapper,
      pin: stickyWrapper,
      start: 'top top',
      end: () => `+=${totalScrollDurationForPin}`,
      markers: { startColor: 'purple', endColor: 'purple', indent: 120 },
      id: 'delight-main-pin',
      invalidateOnRefresh: true, // Good to have for pinning
    });
    if (pinST) scrollTriggers.push(pinST);
  }

  // 2. Initial Rain Start Trigger
  if (sectionWrapper) {
    const stInitialRain = ScrollTrigger.create({
      trigger: sectionWrapper,
      start: 'top top',
      onEnter: () => {
        console.log('Initial rain start trigger entered.');
        if (emojiRain && emojiRain.isInitialized) {
          emojiRain.startRain();
        } else {
          // This case might happen if IntersectionObserver for rain-canvas hasn't fired yet
          // We can set a flag or use a more robust way for emojiRain to signal readiness
          console.warn('Tried to start rain, but emojiRain not initialized yet.');
        }
      },
      once: true,
      id: 'delight-initial-rain-start',
      // markers: {startColor: "blue", endColor: "blue", indent: 200}, // For debugging if needed
    });
    scrollTriggers.push(stInitialRain);
  }

  // 3. Transition 1 -> 2 ScrollTrigger (Leads -> Delight)
  if (sectionWrapper && pinST) {
    // Ensure pinST exists for progress logging
    const st1 = ScrollTrigger.create({
      trigger: sectionWrapper,
      start: () => totalScrollDurationForPin / 3 - 2, // 2px zone around 1/3
      end: () => totalScrollDurationForPin / 3 + 2,
      markers: { startColor: 'green', endColor: 'green', indent: 40 },
      id: 'delight-leads-delight',
      onEnter: () => {
        console.log(
          `ST1 onEnter: Playing tl1. ScrollY: ${window.scrollY}, pinST progress: ${pinST ? pinST.progress.toFixed(3) : 'N/A'}`
        );
        sectionWrapper?.setAttribute('data-active-section', 'delight');
        if (emojiRain) {
          emojiRain.stopRain();
          emojiRain.removeFloor();
        }
        gsap.killTweensOf(tl1.progress);
        tl1.play();
      },
      onEnterBack: () => {
        console.log(
          `ST1 onEnterBack: Reversing tl1. ScrollY: ${window.scrollY}, pinST progress: ${pinST ? pinST.progress.toFixed(3) : 'N/A'}`
        );
        sectionWrapper?.setAttribute('data-active-section', 'leads');
        if (confettiController) confettiController.deactivate();
        if (emojiRain) {
          emojiRain.clearDynamicBodies();
          emojiRain.recreateFloor();
          emojiRain.startRain();
        }
        gsap.killTweensOf(tl1.progress);
        tl1.reverse();
      },
      invalidateOnRefresh: true,
    });
    scrollTriggers.push(st1);
  }

  // 4. Transition 2 -> 3 ScrollTrigger (Delight -> Edit)
  if (sectionWrapper && pinST) {
    // Ensure pinST exists
    const st2 = ScrollTrigger.create({
      trigger: sectionWrapper,
      start: () => (totalScrollDurationForPin * 2) / 3 - 2, // 2px zone around 2/3
      end: () => (totalScrollDurationForPin * 2) / 3 + 2,
      markers: { startColor: 'orange', endColor: 'orange', indent: 80 },
      id: 'delight-delight-edit',
      onEnter: () => {
        console.log(
          `ST2 onEnter: Playing tl2. ScrollY: ${window.scrollY}, pinST progress: ${pinST ? pinST.progress.toFixed(3) : 'N/A'}`
        );
        sectionWrapper?.setAttribute('data-active-section', 'edit');
        if (confettiController) confettiController.deactivate();
        gsap.killTweensOf(tl2.progress);
        tl2.play();
      },
      onLeaveBack: () => {
        console.log(
          `ST2 onLeaveBack: Reversing tl2. ScrollY: ${window.scrollY}, pinST progress: ${pinST ? pinST.progress.toFixed(3) : 'N/A'}`
        );
        sectionWrapper?.setAttribute('data-active-section', 'delight');
        if (confettiController) confettiController.activate();
        gsap.killTweensOf(tl2.progress);
        tl2.reverse();
      },
      invalidateOnRefresh: true,
    });
    scrollTriggers.push(st2);
  }

  // Cleanup function
  return () => {
    console.log('Cleaning up Delight transitions...');
    tl1.kill();
    tl2.kill();

    // Kill all ScrollTriggers stored in the array
    scrollTriggers.forEach((st) => st.kill());
    scrollTriggers.length = 0; // Clear the array

    splitInstances.forEach((split) => split.revert());
    splitInstances.length = 0;

    abortController.abort(); // Stop mouse move listener

    if (emojiRain) {
      emojiRain.destroy();
    }
    if (confettiController) {
      confettiController.destroy();
    }
    console.log('Delight cleanup complete.');
  };
}

// Example of how to call it and manage cleanup (e.g., in your main app script or component lifecycle)
/*
let cleanupDelightTransitions: (() => void) | null = null;

function initializeAnimations() {
  if (cleanupDelightTransitions) {
    cleanupDelightTransitions();
  }
  cleanupDelightTransitions = delightSectionTransitions();
}

// Call initializeAnimations when the page/component loads
// If using a framework, call it in the appropriate lifecycle hook (e.g., onMounted, useEffect)
// Make sure to call cleanupDelightTransitions on unmount/destroy
*/
