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
    const menuButtonIcon = menuButton.querySelector('.menu-button-icon');
    const bolt = navWrap.querySelectorAll('.menu-bolt');

    const tl = window.gsap.timeline();

    const openNav = () => {
      navWrap.setAttribute('data-nav', 'open');

      tl.clear()
        .set(navWrap, { display: 'block' })
        .set(menu, { xPercent: 0 }, '<')
        .fromTo(menuButtonTexts, { yPercent: 0 }, { yPercent: -100, stagger: 0.2 })
        .fromTo(menuButtonIcon, { rotate: 0 }, { rotate: 315 }, '<')
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

      tl.clear()
        .to(overlay, { autoAlpha: 0 })
        .to(menu, { xPercent: 120 }, '<')
        .to(menuButtonTexts, { yPercent: 0 }, '<')
        .to(menuButtonIcon, { rotate: 0 }, '<')
        .set(navWrap, { display: 'none' });
    };

    // Toggle menu open / close depending on its current state
    menuToggles.forEach((toggle) => {
      toggle.addEventListener('click', () => {
        state = navWrap.getAttribute('data-nav');
        if (state === 'open') {
          closeNav();
        } else {
          openNav();
        }
      });
    });

    // If menu is open, you can close it using the "escape" key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && navWrap.getAttribute('data-nav') === 'open') {
        closeNav();
      }
    });
  }

  initMenu();
}
