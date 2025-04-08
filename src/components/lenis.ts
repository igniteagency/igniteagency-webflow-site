import Lenis from 'lenis';

/**
 * LenisSmoothScroll class that handles smooth scrolling functionality
 * Implemented as a Singleton to ensure only one instance exists
 */
export class LenisSmoothScroll {
  private lenis: Lenis;
  private readonly CSS_URL: string = 'https://unpkg.com/lenis@1.2.3/dist/lenis.css';

  // Singleton instance
  private static instance: LenisSmoothScroll | null = null;

  /**
   * Private constructor to prevent direct instantiation
   * Use the getInstance() method instead
   */
  private constructor() {
    // Add Lenis CSS to head
    this.addLenisCSS();

    // Initialize a new Lenis instance for smooth scrolling
    this.lenis = new Lenis({
      duration: 1,
      easing: (t) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t)),
      touchMultiplier: 1.5,
      anchors: false, // Disable built-in anchors functionality
    });

    // Expose Lenis instance to window for access by other components
    window.lenis = this.lenis;

    // Initialize Lenis
    this.initLenis();

    // Setup custom anchor handling
    this.setupAnchorHandling();
  }

  /**
   * Set up custom anchor link handling
   */
  private setupAnchorHandling(): void {
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

        if (targetElement) {
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
   * Initialize Lenis and set up event listeners
   */
  private initLenis(): void {
    // Synchronize Lenis scrolling with GSAP's ScrollTrigger plugin
    this.lenis.on('scroll', ScrollTrigger.update);

    // Add Lenis's requestAnimationFrame (raf) method to GSAP's ticker
    // This ensures Lenis's smooth scroll animation updates on each GSAP tick
    gsap.ticker.add((time) => {
      this.lenis.raf(time * 1000); // Convert time from seconds to milliseconds
    });

    // Disable lag smoothing in GSAP to prevent any delay in scroll animations
    gsap.ticker.lagSmoothing(0);
  }

  /**
   * Get the Lenis instance
   * @returns {Lenis} The Lenis instance
   */
  public getLenis(): Lenis {
    return this.lenis;
  }

  /**
   * Stop Lenis smooth scrolling
   */
  public stop(): void {
    this.lenis.stop();
  }

  /**
   * Start Lenis smooth scrolling
   */
  public start(): void {
    this.lenis.start();
  }
}

/**
 * Initialize the Lenis smooth scrolling functionality
 */
export function initLenisSmoothScroll(): void {
  LenisSmoothScroll.getInstance();
}
