import Lenis from 'lenis';

/**
 * LenisSmoothScroll class that handles smooth scrolling functionality
 * Implemented as a Singleton to ensure only one instance exists
 */
export class LenisSmoothScroll {
  private lenis: Lenis | null = null;
  private readonly CSS_URL: string = 'https://unpkg.com/lenis@1.2.3/dist/lenis.css';
  private scrollCallback: ((time: number) => void) | null = null;

  // Singleton instance
  private static instance: LenisSmoothScroll | null = null;

  /**
   * Private constructor to prevent direct instantiation
   * Use the getInstance() method instead
   */
  private constructor() {
    // Add Lenis CSS to head
    this.addLenisCSS();

    // Initialize Lenis only on devices with fine pointer control
    gsap.matchMedia().add('(pointer: fine)', () => {
      // Initialize Lenis
      this.initLenis();

      // Cleanup function
      return () => {
        this.destroyLenis();
      };
    });
  }

  /**
   * Initialize Lenis instance and setup all handlers
   */
  private initLenis(): void {
    // Initialize a new Lenis instance for smooth scrolling
    this.lenis = new Lenis({
      duration: 1,
      easing: (t) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t)),
      touchMultiplier: 1.5,
      anchors: false, // Disable built-in anchors functionality
    });

    // Expose Lenis instance to window for access by other components
    window.lenis = this.lenis;

    // Setup scroll syncing with GSAP
    this.setupGSAPSync();

    // Setup custom anchor handling
    this.setupAnchorHandling();
  }

  /**
   * Clean up and destroy Lenis instance
   */
  private destroyLenis(): void {
    if (this.lenis) {
      // Remove GSAP sync
      if (this.scrollCallback) {
        gsap.ticker.remove(this.scrollCallback);
        this.scrollCallback = null;
      }

      // Remove ScrollTrigger update
      this.lenis.off('scroll', ScrollTrigger.update);

      // Destroy Lenis instance
      this.lenis.destroy();
      this.lenis = null;
      window.lenis = null;
    }
  }

  /**
   * Set up custom anchor link handling
   */
  private setupAnchorHandling(): void {
    if (!this.lenis) return;

    const links = document.querySelectorAll<HTMLAnchorElement>('a');

    links.forEach((link) => {
      link.addEventListener('click', (e) => {
        const href = link.getAttribute('href');

        // Skip if no href, external link, or not an anchor link
        if (!href || link.target === '_blank' || !href.startsWith('#')) return;

        // Skip Webflow tabs
        if (href.startsWith('#w-tabs')) return;

        // Get the ID part (remove the # symbol)
        const id = href.substring(1);

        // Use getElementById instead of querySelector to avoid selector syntax issues
        const targetElement = document.getElementById(id);

        if (targetElement && this.lenis) {
          e.preventDefault();

          // Use Lenis scrollTo
          this.lenis.scrollTo(targetElement, {
            offset: -100,
          });
        }
      });
    });
  }

  /**
   * Setup GSAP ScrollTrigger sync with Lenis
   */
  private setupGSAPSync(): void {
    if (!this.lenis) return;

    // Synchronize Lenis scrolling with GSAP's ScrollTrigger plugin
    this.lenis.on('scroll', ScrollTrigger.update);

    // Store the callback function so we can remove it later
    this.scrollCallback = (time: number) => {
      this.lenis?.raf(time * 1000); // Convert time from seconds to milliseconds
    };

    // Add Lenis's requestAnimationFrame (raf) method to GSAP's ticker
    gsap.ticker.add(this.scrollCallback);

    // Disable lag smoothing in GSAP to prevent any delay in scroll animations
    gsap.ticker.lagSmoothing(0);
  }

  /**
   * Get the singleton instance of the LenisSmoothScroll class
   * @returns {LenisSmoothScroll} The singleton instance
   */
  public static getInstance(): LenisSmoothScroll {
    if (!LenisSmoothScroll.instance) {
      LenisSmoothScroll.instance = new LenisSmoothScroll();
    }
    return LenisSmoothScroll.instance;
  }

  /**
   * Add Lenis CSS to the document head
   */
  private addLenisCSS(): void {
    const lenisCSS = document.createElement('link');
    lenisCSS.rel = 'stylesheet';
    lenisCSS.href = this.CSS_URL;
    document.head.appendChild(lenisCSS);
  }

  /**
   * Get the Lenis instance
   * @returns {Lenis | null} The Lenis instance or null if not initialized
   */
  public getLenis(): Lenis | null {
    return this.lenis;
  }

  /**
   * Stop Lenis smooth scrolling
   */
  public stop(): void {
    this.lenis?.stop();
  }

  /**
   * Start Lenis smooth scrolling
   */
  public start(): void {
    this.lenis?.start();
  }
}

/**
 * Initialize the Lenis smooth scrolling functionality
 */
export function initLenisSmoothScroll(): void {
  LenisSmoothScroll.getInstance();
}
