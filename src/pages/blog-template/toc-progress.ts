/**
 * BlogProgressLine class to handle the TOC progress line functionality
 */
class BlogProgressLine {
  private progressLine: HTMLElement | null;
  private tocLinks: NodeListOf<Element>;
  private container: HTMLElement | null;
  private progressLineAnimation!: gsap.QuickToFunc;

  constructor() {
    // Select the elements
    this.progressLine = document.querySelector('.post-content_progress');
    this.tocLinks = document.querySelectorAll('.post-content_link');
    this.container = document.querySelector('.post-content_link-content');
  }

  /**
   * Initialize the progress line functionality
   */
  init(): void {
    if (!this.progressLine || !this.container) return;

    // Initial setup of GSAP animation
    this.progressLineAnimation = window.gsap.quickTo(this.progressLine, 'height', {
      duration: 0.5,
      ease: 'power2.out',
    });

    // Initial update
    this.updateProgressLine();

    // Update the progress line on scroll using lenis
    window.addEventListener('scroll', () => this.updateProgressLine());
  }

  /**
   * Update the progress line based on current TOC links
   */
  updateProgressLine(): void {
    // Find all links with the `.w--current` class
    const currentLinks = Array.from(this.tocLinks).filter((link) =>
      link.classList.contains('w--current')
    );

    if (currentLinks.length === 0) return; // No current link found

    // Calculate the total height based on all current links
    const containerTop = (this.container as HTMLElement).getBoundingClientRect().top;

    // Find the bottom-most link with `.w--current`
    const lastCurrentLink = currentLinks[currentLinks.length - 1];
    const currentLinkTop = lastCurrentLink.getBoundingClientRect().top;

    const height = currentLinkTop - containerTop;

    // Animate the progress line height
    this.progressLineAnimation(height);
  }
}

/**
 * Initialize the blog progress line functionality
 */
export function initBlogProgressLine(): void {
  const blogProgressLine = new BlogProgressLine();
  blogProgressLine.init();
}
