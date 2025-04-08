import type SplitType from 'split-type';

const DURATION_ATTR = 'data-duration';
const STAGGER_ATTR = 'data-stagger';
const TRIGGER_ATTR = 'data-trigger-start';

const ATTR_NAME = {
  LETTER_STAGGER: 'gsap-letter-stagger',
  LINE_STAGGER: 'gsap-line-stagger',
  SCRUB_TEXT: 'data-scrub',
  HOVER_STAGGER_TRIGGER: 'gsap-hover-stagger-trigger',
  HOVER_STAGGER: 'gsap-hover-stagger',
};

export function textAnimation() {
  // Store all SplitType instances for later refresh
  const splitInstances: SplitType[] = [];

  // Handle letter stagger animations
  document.querySelectorAll(`[${ATTR_NAME.LETTER_STAGGER}]`).forEach((el) => {
    let typeSplit = new window.SplitType(el, {
      types: 'words,lines,chars',
      tagName: 'span',
    });

    splitInstances.push(typeSplit);

    const stagger = getStaggerAttrValue(el, 0.03);
    const trigger = getTriggerAttrValue(el, 'center');

    window.gsap.from(typeSplit.chars, {
      y: '100%',
      duration: getDurationAttrValue(el, 1),
      ease: 'expo.inOut',
      stagger: stagger,
      scrollTrigger: {
        trigger: el,
        start: `top ${trigger}`,
      },
    });
  });

  // Handle line stagger animations
  document.querySelectorAll(`[${ATTR_NAME.LINE_STAGGER}]`).forEach((el) => {
    let lineSplit = new window.SplitType(el, {
      types: 'lines',
      tagName: 'span',
    });

    splitInstances.push(lineSplit);

    const duration = getDurationAttrValue(el, 0.3);
    const trigger = getTriggerAttrValue(el, '80%');

    lineSplit.lines?.forEach((line) => {
      window.gsap.from(line, {
        y: '100%',
        opacity: 0,
        duration: duration,
        ease: 'expo.out',
        scrollTrigger: {
          trigger: line,
          start: `top ${trigger}`, // Start animation when line enters the bottom of the viewport
          toggleActions: 'play none none none',
        },
      });
    });
  });

  // Handle scrub text animations
  document.querySelectorAll(`[${ATTR_NAME.SCRUB_TEXT}]`).forEach((char) => {
    const text = new window.SplitType(char, { types: ['chars', 'words'], tagName: 'span' });
    splitInstances.push(text);

    window.gsap.from(text.chars, {
      scrollTrigger: {
        trigger: char,
        start: 'top 60%',
        end: 'bottom 30%',
        scrub: true,
        markers: false,
      },
      opacity: 0.2,
      stagger: 0.1,
      duration: 1,
    });
  });

  // Handle hover letter stagger animations
  document
    .querySelectorAll(`[${ATTR_NAME.HOVER_STAGGER}], [${ATTR_NAME.HOVER_STAGGER_TRIGGER}`)
    .forEach((el) => {
      // For trigger elements, set up animations for all stagger elements within
      if (el.hasAttribute(ATTR_NAME.HOVER_STAGGER_TRIGGER)) {
        const staggerElements = el.querySelectorAll(`[${ATTR_NAME.HOVER_STAGGER}]`);

        if (staggerElements.length === 0) return;

        const animations = Array.from(staggerElements).map((staggerEl) => {
          const split = new window.SplitType(staggerEl, {
            types: 'chars',
            tagName: 'span',
          });

          splitInstances.push(split);

          const duration = getDurationAttrValue(staggerEl, 0.8);
          const stagger = getStaggerAttrValue(staggerEl, 0.01);

          const tl = window.gsap.timeline({ paused: true });
          tl.to(split.chars, {
            yPercent: -100,
            duration: duration,
            ease: 'expo.inOut',
            stagger: stagger,
          });

          return tl;
        });

        el.addEventListener('mouseenter', () => animations.forEach((tl) => tl.play()));
        el.addEventListener('mouseleave', () => animations.forEach((tl) => tl.reverse()));
      } else if (
        el.hasAttribute(ATTR_NAME.HOVER_STAGGER) &&
        !el.closest(`[${ATTR_NAME.HOVER_STAGGER_TRIGGER}]`)
      ) {
        // For direct stagger elements without a parent trigger
        const split = new window.SplitType(el, {
          types: 'chars',
          tagName: 'span',
        });

        splitInstances.push(split);

        const duration = getDurationAttrValue(el, 0.8);
        const stagger = getStaggerAttrValue(el, 0.01);

        const tl = window.gsap.timeline({ paused: true });
        tl.to(split.chars, {
          yPercent: -100,
          duration: duration,
          ease: 'expo.inOut',
          stagger: stagger,
        });

        el.addEventListener('mouseenter', () => tl.play());
        el.addEventListener('mouseleave', () => tl.reverse());
      }
    });
}

function getDurationAttrValue(el: HTMLElement, defaultValue: number) {
  const duration = parseFloat(el.getAttribute(DURATION_ATTR) || defaultValue.toString());
  return duration;
}

function getStaggerAttrValue(el: HTMLElement, defaultValue: number) {
  const stagger = parseFloat(el.getAttribute(STAGGER_ATTR) || defaultValue.toString());
  return stagger;
}

function getTriggerAttrValue(el: HTMLElement, defaultValue: string) {
  const trigger = el.getAttribute(TRIGGER_ATTR) || defaultValue;
  return trigger;
}
