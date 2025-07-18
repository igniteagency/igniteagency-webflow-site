// Assuming SplitText is used
import { createConfettiController } from './confetti';
import { RainEmojis } from './rain-emojis';

// --- Modular Section Config ---
export interface DelightSectionConfig {
  name: string;
  effectNames: string[];
  cursorSelector?: string | null;
}

export const delightSectionsConfig: DelightSectionConfig[] = [
  {
    name: 'leads',
    effectNames: ['emojiRain'],
  },
  {
    name: 'delight',
    effectNames: ['confetti'],
    cursorSelector: '#cursor-delight.cursor-content',
  },
  {
    name: 'edit',
    effectNames: [],
    cursorSelector: '#cursor-edit.cursor-content',
  },
  // Add more sections here!
];

// Modular cursor controller
class CursorController {
  private cursorEl: HTMLElement | null;
  private cursorContentEl: HTMLElement | null;
  private section: HTMLElement;
  private abort: AbortController;
  private cursorXTo: gsap.QuickToFunc;
  private cursorYTo: gsap.QuickToFunc;
  private listenersAttached = false;
  constructor(section: HTMLElement, stickyWrapper: HTMLElement, cursorSelector?: string | null) {
    this.section = section;
    this.cursorEl = cursorSelector
      ? (stickyWrapper.querySelector(cursorSelector) as HTMLElement | null)
      : null;
    this.cursorContentEl = cursorSelector
      ? (stickyWrapper.querySelector(
          cursorSelector + ' .cursor_content-wrap'
        ) as HTMLElement | null)
      : null;
    this.abort = new AbortController();

    this.cursorXTo = gsap.quickTo(this.cursorEl, 'x', {
      duration: 0.03,
      // ease: 'power1.out',
    });
    this.cursorYTo = gsap.quickTo(this.cursorEl, 'y', {
      duration: 0.03,
      // ease: 'power1.out',
    });
  }
  private handleMove = (event: MouseEvent) => {
    if (!this.cursorEl) return;
    const x = event.clientX;
    const y = event.clientY;
    this.cursorXTo(x);
    this.cursorYTo(y);
  };
  public hide = () => {
    gsap.to([this.cursorEl, this.cursorContentEl], {
      opacity: 0,
      scale: 0,
      rotationZ: -50,
      duration: 0.2,
    });
    // Remove event listeners if attached
    if (this.listenersAttached) {
      this.section.removeEventListener('mousemove', this.handleMove);
      this.listenersAttached = false;
    }
  };
  public show = () => {
    gsap.to([this.cursorEl, this.cursorContentEl], {
      opacity: 1,
      scale: 1,
      rotationZ: 0,
      duration: 0.3,
    });
    // Add event listeners if not already attached
    if (!this.listenersAttached) {
      this.section.addEventListener('mousemove', this.handleMove);
      this.listenersAttached = true;
    }
  };
  public destroy() {
    this.abort.abort();
    // Clean up listeners if still attached
    if (this.listenersAttached) {
      this.section.removeEventListener('mousemove', this.handleMove);
      this.listenersAttached = false;
    }
  }
}

export class DelightSectionAnimator {
  private sectionWrapper: HTMLElement | null;
  private stickyWrapper: HTMLElement | null;
  private sections: HTMLElement[];
  private effectRegistry: Record<string, any> = {};
  private scrollTriggers: ScrollTrigger[] = [];
  private splitInstances: (SplitText | null)[] = [];
  private abortController: AbortController;
  private cursorAbortControllers: AbortController[] = [];
  private config: DelightSectionConfig[];
  private sectionControllers: Array<{
    inTimeline: gsap.core.Timeline;
    outTimeline: gsap.core.Timeline;
    cursorController: CursorController | null;
  }> = [];

  constructor(config: DelightSectionConfig[] = delightSectionsConfig) {
    this.config = config;
    this.sectionWrapper = document.querySelector('.delight_section-wrapper');
    this.stickyWrapper = document.querySelector('.delight_sticky-wrapper');
    this.sections = this.stickyWrapper
      ? gsap.utils.toArray<HTMLElement>(':scope > .section_delight_new', this.stickyWrapper)
      : [];
    this.abortController = new AbortController();
    this.effectRegistry = {
      confetti: createConfettiController('#canvas-target'),
      emojiRain: new RainEmojis(false),
    };
  }

  // Modular timeline creation
  private createSectionTimelines(
    section: HTMLElement,
    heading: HTMLElement | null,
    texts: NodeListOf<HTMLElement>
  ): {
    inTimeline: gsap.core.Timeline;
    outTimeline: gsap.core.Timeline;
    headingSplit: SplitText | { words: HTMLElement | null; chars: HTMLElement | null };
  } {
    const LETTER_DURATION = 0.6;
    const LETTER_STAGGER = 0.03;
    const TEXT_DURATION = 0.5;
    const TEXT_STAGGER = 0.05;
    const EASE_TYPE = 'expo.inOut';
    const OUT_OFFSET = 0;
    const TEXT_OUT_OFFSET = 0.1;
    const IN_OFFSET = 0.3;
    const TEXT_IN_OFFSET = 0.4;
    const inTimeline = gsap.timeline({ paused: true, defaults: { ease: EASE_TYPE } });
    const outTimeline = gsap.timeline({ paused: true, defaults: { ease: EASE_TYPE } });
    let headingSplit: SplitText | { words: HTMLElement | null; chars: HTMLElement | null } = {
      words: null,
      chars: null,
    };
    if (heading) {
      headingSplit = new SplitText(heading, { type: 'words,chars', tag: 'span' });
      if (!headingSplit) {
        headingSplit = {
          words: heading,
          chars: heading,
        };
      }
      gsap.set(headingSplit.words, { overflow: 'hidden', display: 'inline-block' });
      gsap.set(headingSplit.chars, { display: 'inline-block', yPercent: 100 });
      inTimeline.to(
        headingSplit.chars,
        { yPercent: 0, stagger: LETTER_STAGGER, duration: LETTER_DURATION },
        IN_OFFSET
      );
      outTimeline.to(
        headingSplit.chars,
        { yPercent: -100, stagger: LETTER_STAGGER, duration: LETTER_DURATION },
        OUT_OFFSET
      );
      if (heading.classList.contains('is-text-editable')) {
        gsap.set(heading, { '--pseudo-opacity': 0 });
        inTimeline.to(heading, { '--pseudo-opacity': 1, duration: TEXT_DURATION }, IN_OFFSET);
        outTimeline.to(heading, { '--pseudo-opacity': 0, duration: TEXT_DURATION }, OUT_OFFSET);
      }
    }
    if (texts.length > 0) {
      gsap.set(texts, { scale: 2, opacity: 0 });
      inTimeline.to(
        texts,
        { scale: 1, opacity: 1, stagger: TEXT_STAGGER, duration: TEXT_DURATION },
        TEXT_IN_OFFSET
      );
      outTimeline.to(
        texts,
        { scale: 0, opacity: 0, stagger: TEXT_STAGGER, duration: TEXT_DURATION },
        TEXT_OUT_OFFSET
      );
    }
    return { inTimeline, outTimeline, headingSplit };
  }

  public init() {
    if (!this.sectionWrapper || !this.stickyWrapper) {
      console.error(
        'Required wrapper elements (.delight_section-wrapper, .delight_sticky-wrapper) not found.'
      );
      return;
    }
    if (this.sections.length < this.config.length) {
      console.error(
        `Expected at least ${this.config.length} direct children .section_delight_new elements inside .delight_sticky-wrapper. Found:`,
        this.sections.length
      );
      return;
    }

    // --- Setup per section ---
    this.sections.forEach((section, i) => {
      const config = this.config[i];
      const heading = section.querySelector('.heading-style-h1');
      const texts = section.querySelectorAll('.text-style-subtitle, .text-size-large');
      const { inTimeline, outTimeline, headingSplit } = this.createSectionTimelines(
        section,
        heading,
        texts
      );
      this.splitInstances.push(headingSplit instanceof SplitText ? headingSplit : null);
      let cursorController: CursorController | null = null;
      if (config.cursorSelector) {
        cursorController = new CursorController(
          section,
          this.stickyWrapper!,
          config.cursorSelector
        );
      }
      this.sectionControllers.push({ inTimeline, outTimeline, cursorController });
    });

    // --- Pinning and ScrollTriggers ---
    const scrollPerSection = window.innerHeight;
    const totalScrollDurationForPin = this.sections.length * scrollPerSection;
    let pinST: ScrollTrigger | null = null;
    if (this.sectionWrapper && this.stickyWrapper) {
      pinST = ScrollTrigger.create({
        trigger: this.sectionWrapper,
        pin: this.stickyWrapper,
        start: 'top top',
        end: () => `+=${totalScrollDurationForPin}`,
        id: 'delight-main-pin',
        invalidateOnRefresh: true,
      });
      if (pinST) this.scrollTriggers.push(pinST);
    }
    const sectionScrollLength = totalScrollDurationForPin / this.sections.length;

    // play first section in timeline
    this.sectionControllers[0].inTimeline.play(100);

    this.config.forEach((config, i) => {
      const isLastSection = i === this.sections.length - 1;
      const isFirstSection = i === 0;

      const sectionName = config.name;
      const { inTimeline, outTimeline, cursorController } = this.sectionControllers[i];
      const st = ScrollTrigger.create({
        trigger: this.sectionWrapper,
        start: () => {
          if (!pinST) return 0;
          return pinST.start + sectionScrollLength * i;
        },
        end: () => {
          if (!pinST) return 0;
          return pinST.start + sectionScrollLength * (i + 1);
        },
        id: `delight-section-${sectionName}`,
        onEnter: () => {
          console.log('onEnter', config.name);
          if (this.sectionWrapper)
            this.sectionWrapper.setAttribute('data-active-section', config.name);
          // Set pointer-events for all sections, only the active one gets 'auto'
          this.sections.forEach((section, idx) => {
            section.style.pointerEvents = idx === i ? 'auto' : 'none';
          });
          // --- EFFECTS: Reactivate for this section ---
          config.effectNames.forEach((effectName) => {
            const effect = this.effectRegistry[effectName];
            if (effect && effect.reenterEffect) {
              effect.reenterEffect();
            }
          });
          // Play IN timeline
          if (!isFirstSection) inTimeline.play(0);
          cursorController?.show();
        },
        onLeave: () => {
          console.log('onLeave', config.name);
          if (this.sectionWrapper)
            this.sectionWrapper.setAttribute('data-active-section', config.name);
          // Set pointer-events for all sections, only the active one gets 'auto'
          this.sections.forEach((section, idx) => {
            section.style.pointerEvents = idx === i ? 'auto' : 'none';
          });
          // --- EFFECTS: Deactivate for this section ---
          config.effectNames.forEach((effectName) => {
            const effect = this.effectRegistry[effectName];
            if (effect && effect.exitEffect) {
              effect.exitEffect();
            }
          });
          // Play OUT timeline
          if (!isLastSection) outTimeline.play(0);
          cursorController?.hide();
        },
        onEnterBack: () => {
          console.log('onEnterBack', config.name);
          if (this.sectionWrapper)
            this.sectionWrapper.setAttribute('data-active-section', config.name);
          // Set pointer-events for all sections, only the active one gets 'auto'
          this.sections.forEach((section, idx) => {
            section.style.pointerEvents = idx === i ? 'auto' : 'none';
          });
          // --- EFFECTS: Reactivate for previous section ---
          config.effectNames.forEach((effectName) => {
            const effect = this.effectRegistry[effectName];
            if (effect && effect.reenterEffect) {
              effect.reenterEffect();
            }
          });
          // Play IN timeline
          if (!isLastSection) inTimeline.play(0);
          cursorController?.show();
        },
        onLeaveBack: () => {
          console.log('onLeaveBack', config.name);
          // Set pointer-events for all sections, only the active one gets 'auto'
          this.sections.forEach((section, idx) => {
            section.style.pointerEvents = idx === i ? 'auto' : 'none';
          });
          // --- EFFECTS: Deactivate for previous section ---
          config.effectNames.forEach((effectName) => {
            const effect = this.effectRegistry[effectName];
            if (effect && effect.exitEffect) {
              effect.exitEffect();
            }
          });
          // Play OUT timeline
          if (!isFirstSection) outTimeline.play(0);
          cursorController?.hide();
        },
        invalidateOnRefresh: true,
        markers: window.IS_DEBUG_MODE,
      });
      this.scrollTriggers.push(st);
    });

    // --- Initial States and Animations ---
    if (this.sectionWrapper) {
      // NOTE: data-active-session is used as CSS selector for custom cursor styling
      this.sectionWrapper.setAttribute('data-active-section', this.config[0].name);
    }
    if (this.stickyWrapper) {
      this.config.forEach((config) => {
        if (config.cursorSelector && this.stickyWrapper) {
          const cursorEl = this.stickyWrapper.querySelector(
            config.cursorSelector
          ) as HTMLElement | null;
          if (cursorEl) {
            gsap.set(cursorEl, {
              scale: 0,
              rotationZ: -50,
              transformOrigin: 'center center',
              opacity: 0,
            });
            const wrap = cursorEl.querySelector
              ? (cursorEl.querySelector('.cursor_content-wrap') as HTMLElement | null)
              : null;
            if (wrap) gsap.set(wrap, { scale: 0 });
            // Center cursor initially
            const initialX = window.innerWidth / 2;
            const initialY = window.innerHeight / 2;
            gsap.set(cursorEl, { x: initialX, y: initialY });
          }
        }
      });
    }
  }

  public destroy() {
    this.sectionControllers.forEach((ctrl) => {
      ctrl.inTimeline.kill();
      ctrl.outTimeline.kill();
      ctrl.cursorController?.destroy();
    });
    this.scrollTriggers.forEach((st) => st.kill());
    this.splitInstances.forEach((split) => split?.revert());
    this.abortController.abort();
    this.cursorAbortControllers.forEach((ctrl) => ctrl.abort());
    Object.values(this.effectRegistry).forEach(
      (effect) => effect && effect.destroy && effect.destroy()
    );
  }
}
