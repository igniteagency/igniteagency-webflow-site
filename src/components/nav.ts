import { CustomEase } from 'gsap/CustomEase';
import type Lenis from 'lenis';

/**
 * Navigation class that handles both the nav hide/show functionality and menu animations
 * Implemented as a Singleton to ensure only one instance exists
 */
export class Navigation {
  private navbar: HTMLElement;
  private navWrap: HTMLElement;
  private menu: Element | null;
  private overlay: Element | null;
  private bgPanels: NodeListOf<Element>;
  private menuToggles: NodeListOf<Element>;
  private menuLinks: NodeListOf<Element>;
  private fadeTargets: NodeListOf<Element>;
  private menuButton: HTMLElement;
  private menuButtonTexts: NodeListOf<Element>;
  private bolt: NodeListOf<Element>;
  private focusableElements: NodeListOf<Element>;
  private timeline: gsap.core.Timeline;
  private state: string;
  private body: HTMLElement;
  private lenis: Lenis;
  private colorTriggers: NodeListOf<HTMLElement>;

  private readonly ANIMATION_DURATION: number = 0.5; // Duration in seconds
  private readonly ANIMATION_EASE: string = 'power4.inOut'; // Easing function
  private readonly OVERFLOW_HIDDEN_CLASS: string = 'overflow-hidden';
  private readonly TEXT_COLOR_ALTERNATE_CLASS: string = 'text-color-alternate';

  // Singleton instance
  private static instance: Navigation | null = null;

  /**
   * Private constructor to prevent direct instantiation
   * Use the getInstance() method instead
   */
  private constructor() {
    this.navbar = document.querySelector('.nav_component') as HTMLElement;
    this.navWrap = document.querySelector('.nav') as HTMLElement;
    this.state = this.navWrap.getAttribute('data-nav') || 'closed';
    this.body = document.body;

    // Get Lenis instance from window
    this.lenis = window.lenis;

    // Get color triggers
    this.colorTriggers = document.querySelectorAll('[data-el="nav-color-change-trigger"]');

    // Menu elements
    this.menu = this.navWrap.querySelector('.menu');
    this.overlay = this.navWrap.querySelector('.overlay');
    this.bgPanels = this.navWrap.querySelectorAll('.bg-panel');
    this.menuToggles = document.querySelectorAll('[data-menu-toggle]');
    this.menuLinks = this.navWrap.querySelectorAll(
      '.menu-link, .menu-extras_list-item > .button_component'
    );
    this.fadeTargets = this.navWrap.querySelectorAll('[data-menu-fade]');
    this.menuButton = document.querySelector('.menu-button') as HTMLElement;
    this.menuButtonTexts = this.menuButton.querySelectorAll('p');
    this.bolt = this.navWrap.querySelectorAll('.menu-bolt');

    // All focusable elements within the menu
    this.focusableElements = this.navWrap.querySelectorAll(
      'a[href], button, input, textarea, select, details, [tabindex]:not([tabindex="-1"])'
    );

    this.timeline = window.gsap.timeline();

    // Create custom ease for animations
    CustomEase.create('main', '0.65, 0.01, 0.05, 0.99');

    // Set default GSAP settings
    window.gsap.defaults({
      ease: 'main',
      duration: 0.7,
    });

    // Initialize
    this.initMenu();
    this.initNavHideShow();
    this.initColorTriggers();
  }

  /**
   * Get the singleton instance of the Navigation class
   * @returns {Navigation} The singleton instance
   */
  public static getInstance(): Navigation {
    if (!Navigation.instance) {
      Navigation.instance = new Navigation();
    }
    return Navigation.instance;
  }

  /**
   * Checks if the navigation menu is open
   * @returns {boolean} True if the nav is open, false otherwise
   */
  private isNavOpen(): boolean {
    return this.navWrap.getAttribute('data-nav') === 'open';
  }

  /**
   * Initialize the nav hide/show functionality
   */
  private initNavHideShow(): void {
    let animateNav = window.gsap.quickTo(this.navbar, 'yPercent', {
      duration: this.ANIMATION_DURATION,
      ease: this.ANIMATION_EASE,
    });

    // Use Lenis scroll event instead
    this.lenis.on('scroll', (lenis: Lenis) => {
      if (this.isNavOpen()) {
        return;
      }

      if (lenis.direction === -1) {
        animateNav(0);
      } else {
        animateNav(-100);
      }
    });
  }

  /**
   * Initialize the color trigger functionality using GSAP ScrollTrigger
   */
  private initColorTriggers(): void {
    this.colorTriggers.forEach((trigger) => {
      // Themes - `dark` or `light`
      const theme = (trigger.firstChild as HTMLElement).getAttribute(
        'data-wf--nav-color-trigger-theme-atom--theme'
      );

      window.ScrollTrigger.create({
        trigger: trigger,
        start: 'top top',
        markers: true,
        invalidateOnRefresh: true,
        onEnter: () => {
          window.IS_DEBUG_MODE && console.log('onEnter', trigger, theme);
          if (theme === 'light') {
            this.toggleNavTextClass(true);
          } else {
            this.toggleNavTextClass(false);
          }
        },
        onLeaveBack: () => {
          // revert on leave back
          window.IS_DEBUG_MODE && console.log('onLeaveBack', trigger, theme);
          if (theme === 'light') {
            this.toggleNavTextClass(false);
          } else {
            this.toggleNavTextClass(true);
          }
        },
      });
    });
  }

  private toggleNavTextClass(state: boolean): void {
    this.navbar.classList.toggle(this.TEXT_COLOR_ALTERNATE_CLASS, state);
  }

  /**
   * Initialize the menu functionality
   */
  private initMenu(): void {
    // Set initial state for accessibility
    if (this.state !== 'open') {
      this.navWrap.setAttribute('aria-hidden', 'true');
      this.focusableElements.forEach((el) => {
        (el as HTMLElement).setAttribute('tabindex', '-1');
      });
    }

    // Toggle menu open / close depending on its current state
    this.menuToggles.forEach((toggle) => {
      toggle.addEventListener('click', () => {
        this.state = this.navWrap.getAttribute('data-nav') || 'closed';
        if (this.state === 'open') {
          this.closeNav();
          // Return focus to the toggle button
          (toggle as HTMLElement).focus();
        } else {
          this.openNav();
          // Focus the first focusable element in the menu
          const firstFocusable = this.focusableElements[0] as HTMLElement;
          if (firstFocusable) {
            firstFocusable.focus();
          }
        }
      });
    });

    // If menu is open, you can close it using the "escape" key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && this.navWrap.getAttribute('data-nav') === 'open') {
        this.closeNav();
        // Return focus to the first menu toggle
        const firstToggle = this.menuToggles[0] as HTMLElement;
        if (firstToggle) {
          firstToggle.focus();
        }
      }
    });
  }

  /**
   * Open the navigation menu
   */
  private openNav(): void {
    this.navWrap.setAttribute('data-nav', 'open');

    // Add overflow-hidden class to body to prevent scrolling
    this.body.classList.add(this.OVERFLOW_HIDDEN_CLASS);

    // Stop Lenis smooth scrolling
    if (this.lenis) {
      this.lenis.stop();
    }

    // Restore accessibility
    this.navWrap.setAttribute('aria-hidden', 'false');
    this.focusableElements.forEach((el) => {
      (el as HTMLElement).setAttribute('tabindex', '0');
    });

    this.timeline
      .clear()
      .set(this.navWrap, { visibility: 'visible', opacity: 1 })
      .set(this.menu, { xPercent: 0 }, '<')
      .fromTo(this.menuButtonTexts, { yPercent: 0 }, { yPercent: -100, stagger: 0.2 })
      .fromTo(this.overlay, { autoAlpha: 0 }, { autoAlpha: 1 }, '<')
      .fromTo(
        this.bgPanels,
        { xPercent: 101 },
        { xPercent: 0, stagger: 0.12, duration: 0.575 },
        '<'
      )
      .fromTo(
        this.menuLinks,
        { yPercent: 140, rotate: 10 },
        { yPercent: 0, rotate: 0, stagger: 0.05 },
        '<+=0.35'
      )
      .fromTo(
        this.fadeTargets,
        { autoAlpha: 0, yPercent: 50 },
        { autoAlpha: 1, yPercent: 0, stagger: 0.04 },
        '<+=0.2'
      )
      .fromTo(this.bolt, { scale: 0 }, { scale: 1 }, '<+=0.2');
  }

  /**
   * Close the navigation menu
   */
  private closeNav(): void {
    this.navWrap.setAttribute('data-nav', 'closed');

    // Remove overflow-hidden class from body to restore scrolling
    this.body.classList.remove(this.OVERFLOW_HIDDEN_CLASS);

    // Re-enable Lenis smooth scrolling
    if (this.lenis) {
      this.lenis.start();
    }

    // Make menu inaccessible to keyboard and screen readers
    this.navWrap.setAttribute('aria-hidden', 'true');
    this.focusableElements.forEach((el) => {
      (el as HTMLElement).setAttribute('tabindex', '-1');
    });

    this.timeline
      .clear()
      .to(this.overlay, { autoAlpha: 0 })
      .to(this.menu, { xPercent: 120 }, '<')
      .to(this.menuButtonTexts, { yPercent: 0 }, '<')
      .set(this.navWrap, { visibility: 'hidden', opacity: 0 });
  }
}

/**
 * Initialize the navigation functionality
 */
export function initNavigation(): void {
  Navigation.getInstance();
}
