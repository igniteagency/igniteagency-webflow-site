import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

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
  const sectionWrapper = document.querySelector('.delight_section-wrapper') as HTMLElement | null;
  const stickyWrapper = document.querySelector('.delight_sticky-wrapper') as HTMLElement | null;

  // Ensure necessary wrappers exist
  if (!sectionWrapper || !stickyWrapper) {
    console.error(
      'Required wrapper elements (.delight_section-wrapper, .delight_sticky-wrapper) not found.'
    );
    return () => {};
  }

  const sections = gsap.utils.toArray<HTMLElement>(
    ':scope > .section_delight_test', // Select direct children of stickyWrapper
    stickyWrapper
  );

  if (sections.length < 3) {
    console.error(
      'Expected at least 3 direct children .section_delight_test elements inside .delight_sticky-wrapper. Found:',
      sections.length
    );
    return () => {};
  }

  // Calculate scroll distance per section based on the wrapper's total scroll height
  const totalScrollHeight = sectionWrapper.scrollHeight;
  // We expect 3 sections, so divide total scroll height by 3.
  // Subtracting window.innerHeight might be needed if scrollHeight includes the viewport portion.
  // Let's start simpler: assume scrollHeight is the total scrollable distance.
  const scrollPerSection = totalScrollHeight / 3;
  console.log(`Total Scroll Height: ${totalScrollHeight}, Scroll Per Section: ${scrollPerSection}`);

  if (scrollPerSection <= 0) {
    console.warn(
      "Calculated scroll per section is zero or negative. Check sectionWrapper's height and overflow."
    );
    // Default back to sectionHeight if calculation failed?
    // For now, let the potentially incorrect values proceed to see markers.
  }

  // Abort controller for cleaning up listeners (now just for the main mouse listener)
  const abortController = new AbortController();

  // Assign sections to named variables
  const sectionLeads = sections[0]; // Section 1
  const sectionDelight = sections[1]; // Section 2
  const sectionEdit = sections[2]; // Section 3

  // Find Cursor Elements (Assuming they are now direct children of stickyWrapper with IDs)
  const delightCursorContent = stickyWrapper.querySelector(
    '#cursor-delight.cursor-content'
  ) as HTMLElement | null;
  const delightCursorImage = delightCursorContent?.querySelector(
    '.cursor-image'
  ) as HTMLElement | null;
  const delightCursorWrap = delightCursorContent?.querySelector(
    '.cursor-content_wrap'
  ) as HTMLElement | null;

  const editCursorContent = stickyWrapper.querySelector(
    '#cursor-edit.cursor-content'
  ) as HTMLElement | null;
  const editCursorImage = editCursorContent?.querySelector('.cursor-image') as HTMLElement | null;
  const editCursorWrap = editCursorContent?.querySelector(
    '.cursor-content_wrap'
  ) as HTMLElement | null;

  // --- Persistent Mouse Tracking Setup ---
  // Assuming cursors use position: fixed for simplicity
  const handleGlobalMouseMove = (event: MouseEvent) => {
    const x = event.clientX;
    const y = event.clientY;

    // Update both cursor positions simultaneously
    if (delightCursorContent) {
      gsap.to(delightCursorContent, {
        x: x,
        y: y,
        duration: 0.3,
        ease: 'power1.out',
        overwrite: 'auto',
      });
    }
    if (editCursorContent) {
      gsap.to(editCursorContent, {
        x: x,
        y: y,
        duration: 0.3,
        ease: 'power1.out',
        overwrite: 'auto',
      });
    }
  };

  // Attach listener to a large area, body is simplest if cursors are position: fixed
  document.body.addEventListener('mousemove', handleGlobalMouseMove, {
    signal: abortController.signal,
  });

  // --- Initial States and Animations ---

  // Set Initial States for Cursor Elements (Children Only)
  if (delightCursorImage) {
    gsap.set(delightCursorImage, { scale: 0, rotationZ: -50, transformOrigin: 'center center' });
  }
  if (delightCursorWrap) {
    gsap.set(delightCursorWrap, { scale: 0, transformOrigin: 'center center' }); // Existing Y transform is preserved
  }

  if (editCursorImage) {
    gsap.set(editCursorImage, { scale: 0, rotationZ: -50, transformOrigin: 'center center' });
  }
  if (editCursorWrap) {
    gsap.set(editCursorWrap, { scale: 0, transformOrigin: 'center center' }); // Existing Y transform is preserved
  }

  // Ensure parent cursor elements are initially positioned (e.g., center or off-screen)
  // This depends on your desired starting point before mouse moves
  // Example: Start centered if mouse hasn't moved yet
  const initialX = window.innerWidth / 2;
  const initialY = window.innerHeight / 2;
  if (delightCursorContent) gsap.set(delightCursorContent, { x: initialX, y: initialY });
  if (editCursorContent) gsap.set(editCursorContent, { x: initialX, y: initialY });

  // Animation Parameters
  const LETTER_DURATION = 0.6;
  const LETTER_STAGGER = 0.03;
  const TEXT_DURATION = 0.5;
  const TEXT_STAGGER = 0.05;
  const EASE_TYPE = 'expo.inOut'; // Consistent ease
  const OUT_OFFSET = 0; // When letter out animation starts
  const TEXT_OUT_OFFSET = 0.1; // When text out animation starts
  const IN_OFFSET = 0.3; // When letter in animation starts
  const TEXT_IN_OFFSET = 0.4; // When text in animation starts
  // Calculate when the outgoing cursor animation finishes to start the next one
  const CURSOR_OUT_END_TIME = TEXT_OUT_OFFSET + TEXT_DURATION;
  const CURSOR_IN_START_BUFFER = 0.4; // Tiny buffer to prevent visual overlap

  // Store SplitText instances for cleanup
  const splitInstances: SplitText[] = [];

  // --- Transition Leads -> Delight (1 -> 2) ---
  const tl1 = gsap.timeline({
    paused: true,
    defaults: { duration: 0.8, ease: EASE_TYPE }, // Note: Default duration might be overridden
  });

  // Animate Out Leads Section
  const headingLeads = sectionLeads.querySelector('.heading-style-h1');
  if (headingLeads) {
    const split = new SplitText(headingLeads, { type: 'words,chars', tag: 'span' });
    gsap.set(split.words, { overflow: 'hidden', display: 'inline-block' });
    gsap.set(split.chars, { display: 'inline-block' });
    splitInstances.push(split);
    tl1.to(
      split.chars,
      {
        yPercent: -100,
        stagger: LETTER_STAGGER,
        duration: LETTER_DURATION,
        ease: EASE_TYPE,
      },
      OUT_OFFSET
    );
  }
  const otherTextLeads = sectionLeads.querySelectorAll('.text-style-subtitle, .text-size-large');
  if (otherTextLeads.length > 0) {
    tl1.to(
      otherTextLeads,
      {
        scale: 0,
        opacity: 0,
        stagger: TEXT_STAGGER,
        duration: TEXT_DURATION,
        ease: EASE_TYPE,
      },
      TEXT_OUT_OFFSET
    );
  }

  // Animate In Delight Section
  const headingDelight = sectionDelight.querySelector('.heading-style-h1');
  if (headingDelight) {
    const split = new SplitText(headingDelight, { type: 'words,chars', tag: 'span' });
    gsap.set(split.words, { overflow: 'hidden', display: 'inline-block' });
    gsap.set(split.chars, { display: 'inline-block', yPercent: 100 });
    splitInstances.push(split);
    tl1.to(
      split.chars,
      {
        yPercent: 0,
        stagger: LETTER_STAGGER,
        duration: LETTER_DURATION,
        ease: EASE_TYPE,
      },
      IN_OFFSET
    ); // Start after section Leads starts animating out
  }
  const otherTextDelight = sectionDelight.querySelectorAll(
    '.text-style-subtitle, .text-size-large'
  );
  if (otherTextDelight.length > 0) {
    gsap.set(otherTextDelight, { scale: 2, opacity: 0 }); // Initial state
    tl1.to(
      otherTextDelight,
      {
        scale: 1,
        opacity: 1,
        stagger: TEXT_STAGGER,
        duration: TEXT_DURATION,
        ease: EASE_TYPE,
      },
      TEXT_IN_OFFSET
    );
  }

  // Animate in Delight Cursor Elements (Children Only)
  if (delightCursorImage) {
    tl1.fromTo(
      delightCursorImage,
      {
        scale: 0,
        rotationZ: -50,
        transformOrigin: 'center center',
      },
      {
        scale: 1,
        rotationZ: 0,
        duration: TEXT_DURATION,
        ease: EASE_TYPE,
      },
      TEXT_IN_OFFSET
    );
  }
  if (delightCursorWrap) {
    tl1.to(
      delightCursorWrap,
      {
        scale: 1,
        duration: TEXT_DURATION,
        ease: EASE_TYPE,
      },
      TEXT_IN_OFFSET
    ); // Align with other text?
  }

  // --- Transition 1 -> 2 ScrollTrigger Setup ---
  const st1 = ScrollTrigger.create({
    trigger: sectionWrapper,
    start: scrollPerSection * 0.95, // Trigger slightly before the end of the first section's scroll distance
    end: scrollPerSection * 1.05, // Define a zone around the end of the first section's scroll
    onEnter: () => {
      // Kill existing progress tweens on both timelines before starting new one
      gsap.killTweensOf([tl1.progress, tl2.progress]);
      gsap.to(tl1, { progress: 1, duration: tl1.duration(), ease: 'none' });
    },
    onLeaveBack: () => {
      // Kill existing progress tweens on both timelines before starting new one
      gsap.killTweensOf([tl1.progress, tl2.progress]);
      gsap.to(tl1, { progress: 0, duration: tl1.duration(), ease: 'none' });
    },
    invalidateOnRefresh: true,
    markers: false, // Turn off markers
    id: 'delight-leads-delight',
  });

  // --- Transition Delight -> Edit (2 -> 3) ---
  const tl2 = gsap.timeline({
    paused: true,
    defaults: { duration: 0.8, ease: EASE_TYPE }, // Note: Default duration might be overridden
  });

  // Animate Out Delight Section (reuse headingDelight, otherTextDelight selectors)
  if (headingDelight) {
    // Find the SplitText instance associated with headingDelight
    const split = splitInstances.find((s) => s.elements[0] === headingDelight);
    if (split && split.chars) {
      tl2.to(
        split.chars,
        {
          yPercent: -100,
          stagger: LETTER_STAGGER,
          duration: LETTER_DURATION,
          ease: EASE_TYPE,
        },
        OUT_OFFSET
      );
    }
  }
  if (otherTextDelight.length > 0) {
    tl2.to(
      otherTextDelight,
      {
        scale: 0,
        opacity: 0,
        stagger: TEXT_STAGGER,
        duration: TEXT_DURATION,
        ease: EASE_TYPE,
      },
      TEXT_OUT_OFFSET
    );
  }

  // Animate out Delight Cursor Elements (Children Only)
  if (delightCursorImage) {
    tl2.to(delightCursorImage, {
      scale: 0,
      rotationZ: -50,
      transformOrigin: 'center center',
      duration: TEXT_DURATION,
      ease: EASE_TYPE,
    });
  }
  if (delightCursorWrap) {
    tl2.to(
      delightCursorWrap,
      {
        scale: 0,
        duration: TEXT_DURATION,
        ease: EASE_TYPE,
      },
      TEXT_OUT_OFFSET
    );
  }

  // Animate In Edit Section
  const headingEdit = sectionEdit.querySelector('.heading-style-h1');
  if (headingEdit) {
    const split = new SplitText(headingEdit, { type: 'words,chars', tag: 'span' });
    gsap.set(split.words, { overflow: 'hidden', display: 'inline-block' });
    gsap.set(split.chars, { display: 'inline-block', yPercent: 100 });
    splitInstances.push(split);
    tl2.to(
      split.chars,
      {
        yPercent: 0,
        stagger: LETTER_STAGGER,
        duration: LETTER_DURATION,
        ease: EASE_TYPE,
      },
      IN_OFFSET
    );
    // Animate the pseudo-element via CSS variable
    if (headingEdit.classList.contains('is-text-editable')) {
      // Set initial state to 0 before the timeline animates it
      gsap.set(headingEdit, { '--pseudo-opacity': 0 });
      // Animate to 1
      tl2.to(
        headingEdit,
        {
          '--pseudo-opacity': 1,
          duration: TEXT_DURATION,
          ease: EASE_TYPE,
        },
        IN_OFFSET
      );
    }
  }
  const otherTextEdit = sectionEdit.querySelectorAll('.text-style-subtitle, .text-size-large');
  if (otherTextEdit.length > 0) {
    gsap.set(otherTextEdit, { scale: 2, opacity: 0 }); // Initial state
    tl2.to(
      otherTextEdit,
      {
        scale: 1,
        opacity: 1,
        stagger: TEXT_STAGGER,
        duration: TEXT_DURATION,
        ease: EASE_TYPE,
      },
      TEXT_IN_OFFSET
    );
  }

  // Animate in Edit Cursor Elements (Children Only)
  if (editCursorImage) {
    tl2.fromTo(
      editCursorImage,
      {
        scale: 0,
        rotationZ: -50,
        transformOrigin: 'center center',
      },
      {
        scale: 1,
        rotationZ: 0,
        duration: TEXT_DURATION,
        ease: EASE_TYPE,
      },
      CURSOR_OUT_END_TIME + CURSOR_IN_START_BUFFER
    );
  }
  if (editCursorWrap) {
    tl2.to(
      editCursorWrap,
      {
        scale: 1,
        duration: TEXT_DURATION,
        ease: EASE_TYPE,
      },
      CURSOR_OUT_END_TIME + CURSOR_IN_START_BUFFER
    ); // Also delay the wrap animation to match the image
  }

  // --- Transition 2 -> 3 ScrollTrigger Setup ---
  const st2 = ScrollTrigger.create({
    trigger: sectionWrapper,
    start: scrollPerSection * 1.95, // Trigger slightly before the end of the second section's scroll distance
    end: scrollPerSection * 2.05, // Define a zone around the end of the second section's scroll
    onEnter: () => {
      // Kill existing progress tweens on both timelines before starting new one
      gsap.killTweensOf([tl1.progress, tl2.progress]);
      gsap.to(tl2, { progress: 1, duration: tl2.duration(), ease: 'none' });
    },
    onLeaveBack: () => {
      // Kill existing progress tweens on both timelines before starting new one
      gsap.killTweensOf([tl1.progress, tl2.progress]);
      gsap.to(tl2, { progress: 0, duration: tl2.duration(), ease: 'none' });
    },
    invalidateOnRefresh: true,
    markers: false, // Turn off markers
    id: 'delight-delight-edit',
  });

  // Cleanup function
  return () => {
    // Kill timelines and ScrollTriggers
    tl1.kill();
    tl2.kill();
    st1.kill();
    st2.kill();
    // Revert SplitText instances
    splitInstances.forEach((split) => split.revert());
    splitInstances.length = 0; // Clear the array
    // Abort mouse tracking listener
    abortController.abort();
    console.log('Delight transitions and persistent mouse tracking cleaned up.'); // Keep final cleanup log
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
