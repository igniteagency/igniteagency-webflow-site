import { SCRIPTS_LOADED_EVENT } from 'src/constants';

import { setHeroSuperchargeMode } from '$components/home/supercharge';

window.addEventListener(SCRIPTS_LOADED_EVENT, () => {
  // window.Webflow?.push(() => {
  setHorizontalScrollWrapperHeight();
  setHeroSuperchargeMode();

  try {
    initDelightSectionLazily();
  } catch (error) {
    console.error('Error initializing delight section animator', error);
  }
});
// });

function setHorizontalScrollWrapperHeight() {
  const WRAPPER_SECTION_SELECTOR = '.section_reveal-wrapper';
  const wrapperSectionEl = document.querySelector(WRAPPER_SECTION_SELECTOR);
  if (!wrapperSectionEl) {
    console.warn(`Horizontal scroll section reveal wrapper not found: ${WRAPPER_SECTION_SELECTOR}`);
    return;
  }

  const childrenElList = wrapperSectionEl.children;

  function setHeight() {
    gsap.set(wrapperSectionEl, {
      height: () => {
        return Array.from(childrenElList).reduce((acc, child) => {
          return acc + (child as HTMLElement).offsetHeight;
        }, 0);
      },
    });
  }

  // Set initial height
  setHeight();

  // Create a resize observer to update height when window resizes
  ScrollTrigger.addEventListener('refresh', () => {
    gsap.delayedCall(0.05, () => {
      setHeight();
    });
  });
}

function initDelightSectionLazily() {
  const delightWrapper = document.querySelector('.delight_section-wrapper');

  if (!delightWrapper) {
    console.warn('Delight section wrapper not found, skipping lazy initialization');
    return;
  }

  // Create intersection observer to detect when user approaches the delight section
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // User is approaching the delight section, initialize it
          observer.unobserve(entry.target); // Stop observing once initialized

          document.fonts.ready.then(() => {
            window.loadExternalScript('components/home/delight.js').then(() => {
              if (!window.DelightSectionAnimator) {
                console.error('Delight section script loaded without exposing an animator');
                return;
              }

              const animator = new window.DelightSectionAnimator();
              animator.init();
              window.IS_DEBUG_MODE && console.debug('Delight section initialized lazily');
            });
          });
        }
      });
    },
    {
      // Start initializing when section is 1 viewport height away from viewport
      rootMargin: `${window.innerHeight}px 0px ${window.innerHeight}px 0px`,
      threshold: 0,
    }
  );

  observer.observe(delightWrapper);
}
