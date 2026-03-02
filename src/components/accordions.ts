const ITEM_SELECTOR = 'details';
const TOGGLE_SELECTOR = 'summary';
const CONTENT_SELECTOR = 'summary + *'; // Matches the first element sibling after the summary

const BREAKPOINTS = {
  tablet: 991,
  'mobile-landscape': 767,
  mobile: 478,
} as const;

const ANIMATION_DURATION_IN_MS = 300;
/**
 * If set to true, will close all other accordions when one is opened
 */
const CLOSE_OTHER_ACCORDIONS = true;

/**
 * Checks if the accordion should be closed based on the data-accordion-closed attribute
 */
function shouldStartClosed(accordion: HTMLDetailsElement): boolean {
  const closedBreakpoint = accordion.getAttribute('data-accordion-closed');
  if (!closedBreakpoint) return false;

  const width = window.innerWidth;
  if (closedBreakpoint === 'tablet' && width <= BREAKPOINTS.tablet) return true;
  if (closedBreakpoint === 'mobile-landscape' && width <= BREAKPOINTS['mobile-landscape'])
    return true;
  if (closedBreakpoint === 'mobile' && width <= BREAKPOINTS.mobile) return true;

  return false;
}


export function animatedDetailsAccordions() {
  const accordionsList = Array.from(document.querySelectorAll<HTMLDetailsElement>(ITEM_SELECTOR));

  accordionsList.forEach((accordion) => {
    // Initial state check based on breakpoints
    if (shouldStartClosed(accordion)) {
      accordion.open = false;
    }

    const accordionToggleEl = accordion.querySelector(TOGGLE_SELECTOR);
    const accordionContentEl = accordion.querySelector(CONTENT_SELECTOR) as HTMLElement;

    if (!accordionToggleEl || !accordionContentEl) {
      return;
    }

    accordionToggleEl.addEventListener('click', (event) => {
      // Prevent the default browser behavior so we can control the opening/closing animation
      event.preventDefault();

      // Stop any currently running animations on the content to prevent flickering or stacking
      accordionContentEl.getAnimations().forEach((anim) => anim.cancel());

      const isOpening = !accordion.open;

      if (isOpening) {
        // OPENING
        // Set the details to open immediately so children are rendered and scrollHeight is accurate
        accordion.open = true;
        const height = accordionContentEl.scrollHeight;

        // Force overflow hidden during animation to ensure content is clipped as height changes
        accordionContentEl.style.overflow = 'hidden';
        accordionContentEl.style.height = '0px';

        const animation = accordionContentEl.animate(
          [{ height: '0px' }, { height: `${height}px` }],
          {
            duration: ANIMATION_DURATION_IN_MS,
            easing: 'ease',
          }
        );

        animation.onfinish = () => {
          // Reset styles to their "resting" state after animation
          accordionContentEl.style.height = 'auto';
          accordionContentEl.style.overflow = '';
        };

        if (CLOSE_OTHER_ACCORDIONS) {
          accordionsList.forEach((otherAccordion) => {
            if (otherAccordion !== accordion && otherAccordion.open) {
              // Simulate a click on the other accordion's toggle to trigger its closing animation
              (otherAccordion.querySelector(TOGGLE_SELECTOR) as HTMLElement | null)?.click();
            }
          });
        }
      } else {
        // CLOSING
        const height = accordionContentEl.scrollHeight;

        accordionContentEl.style.overflow = 'hidden';
        // Set explicit height before starting the animation from it to 0
        accordionContentEl.style.height = `${height}px`;

        const animation = accordionContentEl.animate(
          [{ height: `${height}px` }, { height: '0px' }],
          {
            duration: ANIMATION_DURATION_IN_MS,
            easing: 'ease',
          }
        );

        animation.onfinish = () => {
          // Set state to closed
          accordion.open = false;
          // Clear animation styles
          accordionContentEl.style.height = '';
          accordionContentEl.style.overflow = '';
        };
      }
    });
  });
}


