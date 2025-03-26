import CustomEase from 'gsap/CustomEase';

export function menuAnimation() {
  CustomEase.create('main', '0.65, 0.01, 0.05, 0.99');

  window.gsap.defaults({
    ease: 'main',
    duration: 0.7,
  });

  function initMenu() {
    const navWrap = document.querySelector('.nav') as HTMLElement;

    let state = navWrap.getAttribute('data-nav');

    const menu = navWrap.querySelector('.menu');
    const overlay = navWrap.querySelector('.overlay');
    const bgPanels = navWrap.querySelectorAll('.bg-panel');

    const menuToggles = document.querySelectorAll('[data-menu-toggle]');

    const menuLinks = navWrap.querySelectorAll(
      '.menu-link, .menu-extras_list-item > .button_component'
    );
    const fadeTargets = navWrap.querySelectorAll('[data-menu-fade]');
    const menuButton = document.querySelector('.menu-button') as HTMLElement;
    const menuButtonTexts = menuButton.querySelectorAll('p');
    const bolt = navWrap.querySelectorAll('.menu-bolt');

    // All focusable elements within the menu
    const focusableElements = navWrap.querySelectorAll(
      'a[href], button, input, textarea, select, details, [tabindex]:not([tabindex="-1"])'
    );

    const tl = window.gsap.timeline();

    const openNav = () => {
      navWrap.setAttribute('data-nav', 'open');

      // Restore accessibility\
      navWrap.setAttribute('aria-hidden', 'false');
      focusableElements.forEach((el) => {
        (el as HTMLElement).setAttribute('tabindex', '0');
      });

      tl.clear()
        .set(navWrap, { visibility: 'visible', opacity: 1 })
        .set(menu, { xPercent: 0 }, '<')
        .fromTo(menuButtonTexts, { yPercent: 0 }, { yPercent: -100, stagger: 0.2 })
        .fromTo(overlay, { autoAlpha: 0 }, { autoAlpha: 1 }, '<')
        .fromTo(bgPanels, { xPercent: 101 }, { xPercent: 0, stagger: 0.12, duration: 0.575 }, '<')
        .fromTo(
          menuLinks,
          { yPercent: 140, rotate: 10 },
          { yPercent: 0, rotate: 0, stagger: 0.05 },
          '<+=0.35'
        )
        .fromTo(
          fadeTargets,
          { autoAlpha: 0, yPercent: 50 },
          { autoAlpha: 1, yPercent: 0, stagger: 0.04 },
          '<+=0.2'
        )
        .fromTo(bolt, { scale: 0 }, { scale: 1 }, '<+=0.2');
    };

    const closeNav = () => {
      navWrap.setAttribute('data-nav', 'closed');

      // Make menu inaccessible to keyboard and screen readers
      navWrap.setAttribute('aria-hidden', 'true');
      focusableElements.forEach((el) => {
        (el as HTMLElement).setAttribute('tabindex', '-1');
      });

      tl.clear()
        .to(overlay, { autoAlpha: 0 })
        .to(menu, { xPercent: 120 }, '<')
        .to(menuButtonTexts, { yPercent: 0 }, '<')
        .set(navWrap, { visibility: 'hidden', opacity: 0 });
    };

    // Set initial state for accessibility
    if (state !== 'open') {
      navWrap.setAttribute('aria-hidden', 'true');
      focusableElements.forEach((el) => {
        (el as HTMLElement).setAttribute('tabindex', '-1');
      });
    }

    // Toggle menu open / close depending on its current state
    menuToggles.forEach((toggle) => {
      toggle.addEventListener('click', () => {
        state = navWrap.getAttribute('data-nav');
        if (state === 'open') {
          closeNav();
          // Return focus to the toggle button
          (toggle as HTMLElement).focus();
        } else {
          openNav();
          // Focus the first focusable element in the menu (or another appropriate element)
          const firstFocusable = focusableElements[0] as HTMLElement;
          if (firstFocusable) {
            firstFocusable.focus();
          }
        }
      });
    });

    // If menu is open, you can close it using the "escape" key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && navWrap.getAttribute('data-nav') === 'open') {
        closeNav();
        // Return focus to the first menu toggle
        const firstToggle = menuToggles[0] as HTMLElement;
        if (firstToggle) {
          firstToggle.focus();
        }
      }
    });
  }

  initMenu();
}
