import { SCRIPTS_LOADED_EVENT } from 'src/constants';

import { DelightSectionAnimator } from '$components/home/delight';
import { setHeroSuperchargeMode } from '$components/home/supercharge';

window.addEventListener(SCRIPTS_LOADED_EVENT, () => {
  // window.Webflow?.push(() => {
  leadMagnetMauticForm();
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

function leadMagnetMauticForm() {
  const FORM_NAME = 'ignitewebsiteleadmagnetform';

  const DIALOG_SELECTOR = 'dialog[data-el="form-dialog"][open]';
  const SUCCESS_MESSAGE_SELECTOR = '[data-form-el="success-message"]';
  const ERROR_MESSAGE_SELECTOR = '[data-form-el="error-message"]';

  if (typeof MauticFormCallback == 'undefined') {
    window.MauticFormCallback = {};
  }

  window.MauticFormCallback[FORM_NAME] = {
    onResponse: function (response) {
      console.debug('Mautic form callback', { response });
      const dialogEl = document.querySelector<HTMLDialogElement>(DIALOG_SELECTOR);
      const formEl = dialogEl?.querySelector('form');
      if (!dialogEl || !formEl) {
        console.error('Current form element not found in mautic response callback', { response });
        return;
      }

      const successEl = dialogEl.querySelector(SUCCESS_MESSAGE_SELECTOR);
      const errorEl = dialogEl.querySelector(ERROR_MESSAGE_SELECTOR);

      if (response.success) {
        console.debug({ successEl });
        if (successEl) {
          formEl.style.display = 'none';
          successEl.style.display = 'block';
        }

        // close the dialog in 5 sec
        setTimeout(() => {
          dialogEl.close();
        }, 5000);
      }

      if (response.errorMessage) {
        // show error state
        if (errorEl) {
          errorEl.style.display = 'block';
        }
      }

      return true; // prevent any Mautic based action like redirect
    },
  };

  /** This section is only needed once per page if manually copying **/
  if (typeof MauticSDKLoaded == 'undefined') {
    window.MauticSDKLoaded = true;
    var head = document.getElementsByTagName('head')[0];
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://m.igniteagency.com/media/js/mautic-form.js?vd43a7f62';
    script.onload = function () {
      MauticSDK.onLoad();
    };
    head.appendChild(script);
    window.MauticDomain = 'https://m.igniteagency.com';
    window.MauticLang = { submittingMessage: 'Please wait...' };
  } else if (typeof MauticSDK != 'undefined') {
    MauticSDK.onLoad();
  }
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
            const animator = new DelightSectionAnimator();
            animator.init();
            window.IS_DEBUG_MODE && console.debug('Delight section initialized lazily');
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
