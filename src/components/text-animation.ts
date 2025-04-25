const DURATION_ATTR = 'data-duration';
const STAGGER_ATTR = 'data-stagger';
const TRIGGER_ATTR = 'data-trigger-start';
const PREV_SECTION_TRIGGER_ATTR = 'data-prev-section-trigger';

const ATTR_NAME = {
  LETTER_STAGGER: 'gsap-letter-stagger',
  LINE_STAGGER: 'gsap-line-stagger',
  SCRUB_TEXT: 'data-scrub',
  HOVER_STAGGER_TRIGGER: 'gsap-hover-stagger-trigger',
  HOVER_STAGGER: 'gsap-hover-stagger',
};

interface AnimationElement {
  element: HTMLElement;
  animation?: gsap.core.Timeline;
}

export class TextAnimator {
  private splitInstances: SplitText[] = [];
  private animations: gsap.core.Animation[] = [];
  private elements: AnimationElement[] = [];
  private isRefreshing: boolean = false;
  private _resizeTimeout: number | null = null;
  private static instance: TextAnimator | null = null;
  private abortController: AbortController;

  private constructor() {
    this.abortController = new AbortController();

    // Create and start the ResizeObserver immediately
    // const resizeObserver = new ResizeObserver(this.handleResize.bind(this));
    // resizeObserver.observe(document.body);
  }

  /**
   * Get the TextAnimator singleton instance
   */
  public static getInstance(): TextAnimator {
    if (!TextAnimator.instance) {
      TextAnimator.instance = new TextAnimator();
    }
    return TextAnimator.instance;
  }

  public init(): void {
    // Reset AbortController if necessary
    if (this.abortController.signal.aborted) {
      this.abortController = new AbortController();
    }

    // Set up animations
    this.setupAnimations();
  }

  public destroy(): void {
    // Abort all event listeners
    this.abortController.abort();

    // Clear all animations and split text
    this.clearAnimations();
  }

  // private handleResize(): void {
  //   // Skip if already refreshing
  //   if (this.isRefreshing) return;

  //   // Debounce resize events
  //   if (this._resizeTimeout) {
  //     window.clearTimeout(this._resizeTimeout);
  //     this._resizeTimeout = null;
  //   }

  //   this._resizeTimeout = window.setTimeout(() => {
  //     if (this.isRefreshing) return;

  //     try {
  //       this.isRefreshing = true;
  //       this.refresh();
  //     } finally {
  //       this.isRefreshing = false;
  //       this._resizeTimeout = null;
  //     }
  //   }, 500);
  // }

  private refresh(): void {
    this.destroy();
    this.init();
  }

  private clearAnimations(): void {
    // Kill all GSAP animations
    this.animations.forEach((animation) => {
      animation.kill();
    });

    // Kill any timeline animations in elements
    this.elements.forEach((el) => {
      el.animation?.kill();
    });

    // Revert all split instances
    this.splitInstances.forEach((instance) => {
      instance.revert();
    });

    // Clear arrays
    this.animations = [];
    this.elements = [];
    this.splitInstances = [];
  }

  private setupAnimations(): void {
    console.debug('Setting up text split data attribute animations');
    this.setupLetterStagger();
    this.setupLineStagger();
    this.setupScrubText();
    this.setupHoverStagger();
  }

  private getPreviousSection(element: HTMLElement): HTMLElement | null {
    // Find the closest parent section
    const parentSection = element.closest('section');
    if (!parentSection) return null;

    // Find the previous section
    return parentSection.previousElementSibling as HTMLElement;
  }

  private setupLetterStagger(): void {
    document.querySelectorAll(`[${ATTR_NAME.LETTER_STAGGER}]`).forEach((el) => {
      const element = el as HTMLElement;

      let typeSplit = new SplitText(element, {
        type: 'words,lines,chars',
        tag: 'span',
      });

      this.splitInstances.push(typeSplit);

      const stagger = this.getStaggerAttrValue(element, 0.03);
      const trigger = this.getTriggerAttrValue(element, 'center');
      const usePrevSectionTrigger = element.hasAttribute(PREV_SECTION_TRIGGER_ATTR);
      const previousSectionEl = usePrevSectionTrigger ? this.getPreviousSection(element) : null;

      gsap.set(typeSplit.chars, {
        y: '100%',
      });

      const animation = gsap.to(typeSplit.chars, {
        y: '0%',
        duration: this.getDurationAttrValue(element, 1),
        ease: 'expo.inOut',
        stagger: stagger,
        scrollTrigger: {
          trigger: previousSectionEl || element,
          start: usePrevSectionTrigger && previousSectionEl ? 'bottom bottom' : `top ${trigger}`,
          invalidateOnRefresh: true,
        },
      });

      this.animations.push(animation);
    });
  }

  private setupLineStagger(): void {
    document.querySelectorAll(`[${ATTR_NAME.LINE_STAGGER}]`).forEach((el) => {
      let lineSplit = new SplitText(el, {
        type: 'lines',
        tag: 'span',
      });

      this.splitInstances.push(lineSplit);

      const duration = this.getDurationAttrValue(el, 0.3);
      const trigger = this.getTriggerAttrValue(el, '80%');
      const usePrevSectionTrigger = el.hasAttribute(PREV_SECTION_TRIGGER_ATTR);
      const previousSectionEl = usePrevSectionTrigger ? this.getPreviousSection(el) : null;

      lineSplit.lines?.forEach((line) => {
        gsap.set(line, {
          y: '100%',
          opacity: 0,
        });

        const animation = gsap.to(line, {
          y: '0%',
          opacity: 1,
          duration: duration,
          ease: 'expo.out',
          scrollTrigger: {
            trigger: previousSectionEl || line,
            start: usePrevSectionTrigger && previousSectionEl ? 'bottom bottom' : `top ${trigger}`,
            toggleActions: 'play none none none',
          },
        });
        this.animations.push(animation);
      });
    });
  }

  private setupScrubText(): void {
    document.querySelectorAll(`[${ATTR_NAME.SCRUB_TEXT}]`).forEach((el) => {
      const text = new SplitText(el, {
        type: 'chars,words',
        tag: 'span',
      });

      this.splitInstances.push(text);

      gsap.set(text.chars, {
        opacity: 0.2,
      });
      const animation = gsap.to(text.chars, {
        scrollTrigger: {
          trigger: el,
          start: 'top 60%',
          end: 'bottom 30%',
          scrub: true,
          markers: false,
          invalidateOnRefresh: true,
        },
        opacity: 1,
        stagger: 0.1,
        duration: 1,
      });

      this.animations.push(animation);
    });
  }

  private setupHoverStagger(): void {
    const mq = window.matchMedia('(min-width: 1100px) and (pointer: fine)');

    if (!mq.matches) {
      window.IS_DEBUG_MODE &&
        console.debug(
          'Hover stagger not set up on screens smaller than 1100px or devices with a coarse pointer'
        );
      return;
    }

    document
      .querySelectorAll(`[${ATTR_NAME.HOVER_STAGGER}], [${ATTR_NAME.HOVER_STAGGER_TRIGGER}]`)
      .forEach((el) => {
        const animElement: AnimationElement = { element: el };

        // For trigger elements, set up animations for all stagger elements within
        if (el.hasAttribute(ATTR_NAME.HOVER_STAGGER_TRIGGER)) {
          const staggerElements = el.querySelectorAll(`[${ATTR_NAME.HOVER_STAGGER}]`);

          if (staggerElements.length === 0) return;

          const animations = Array.from(staggerElements).map((staggerEl) => {
            const split = new SplitText(staggerEl, {
              type: 'words,chars',
              tag: 'span',
            });

            this.splitInstances.push(split);

            const duration = this.getDurationAttrValue(staggerEl, 0.8);
            const stagger = this.getStaggerAttrValue(staggerEl, 0.01);

            const tl = gsap.timeline({ paused: true });
            tl.to(split.chars, {
              yPercent: -100,
              duration: duration,
              ease: 'expo.inOut',
              stagger: stagger,
            });

            return tl;
          });

          const playHandler = () => animations.forEach((tl) => tl.play());
          const reverseHandler = () => animations.forEach((tl) => tl.reverse());

          el.addEventListener('mouseenter', playHandler, {
            signal: this.abortController.signal,
          });
          el.addEventListener('focusin', playHandler, { signal: this.abortController.signal });
          el.addEventListener('mouseleave', reverseHandler, {
            signal: this.abortController.signal,
          });
          el.addEventListener('focusout', reverseHandler, {
            signal: this.abortController.signal,
          });

          // Store animations for cleanup
          animations.forEach((tl) => {
            this.animations.push(tl);
          });
        } else if (
          el.hasAttribute(ATTR_NAME.HOVER_STAGGER) &&
          !el.closest(`[${ATTR_NAME.HOVER_STAGGER_TRIGGER}]`)
        ) {
          // For direct stagger elements without a parent trigger
          const split = new SplitText(el, {
            type: 'words,chars',
            tag: 'span',
          });

          this.splitInstances.push(split);

          const duration = this.getDurationAttrValue(el, 0.8);
          const stagger = this.getStaggerAttrValue(el, 0.01);

          const tl = gsap.timeline({ paused: true });
          tl.to(split.chars, {
            yPercent: -100,
            duration: duration,
            ease: 'expo.inOut',
            stagger: stagger,
          });

          animElement.animation = tl;
          this.elements.push(animElement);

          const playHandler = () => tl.play();
          const reverseHandler = () => tl.reverse();

          el.addEventListener('mouseenter', playHandler, {
            signal: this.abortController.signal,
          });
          el.addEventListener('focusin', playHandler, { signal: this.abortController.signal });
          el.addEventListener('mouseleave', reverseHandler, {
            signal: this.abortController.signal,
          });
          el.addEventListener('focusout', reverseHandler, {
            signal: this.abortController.signal,
          });
        }
      });
  }

  private getDurationAttrValue(el: HTMLElement, defaultValue: number): number {
    const duration = parseFloat(el.getAttribute(DURATION_ATTR) || defaultValue.toString());
    return duration;
  }

  private getStaggerAttrValue(el: HTMLElement, defaultValue: number): number {
    const stagger = parseFloat(el.getAttribute(STAGGER_ATTR) || defaultValue.toString());
    return stagger;
  }

  private getTriggerAttrValue(el: HTMLElement, defaultValue: string): string {
    const trigger = el.getAttribute(TRIGGER_ATTR) || defaultValue;
    return trigger;
  }
}

// Export original function for backward compatibility
export function textAnimation() {
  const animator = TextAnimator.getInstance();
  animator.init();
  return animator;
}
