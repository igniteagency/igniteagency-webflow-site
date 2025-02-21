export function textAnimation() {
  document.querySelectorAll('[gsap-letter-stagger]').forEach((elem: Element) => {
    let typeSplit = new window.SplitType(elem, {
      types: 'words, lines, chars',
      tagName: 'span',
    });

    const duration = parseFloat((elem as HTMLElement).getAttribute('data-duration') || '1');
    const stagger = parseFloat((elem as HTMLElement).getAttribute('data-stagger') || '0.03');
    const trigger = (elem as HTMLElement).getAttribute('data-trigger-start') || 'center';

    window.gsap.from(typeSplit.chars, {
      y: '100%',
      duration: duration,
      ease: 'expo.inOut',
      stagger: stagger,
      scrollTrigger: {
        trigger: elem,
        start: `top ${trigger}`,
      },
    });
  });

  document.querySelectorAll('[gsap-line-stagger]').forEach((elem) => {
    let lineSplit = new window.SplitType(elem, {
      types: 'lines',
      tagName: 'span',
    });

    const duration = parseFloat((elem as HTMLElement).getAttribute('data-duration') || '0.3');
    const trigger = (elem as HTMLElement).getAttribute('data-trigger-start') || '80%';

    lineSplit.lines.forEach((line) => {
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

  const SCRUB_TEXT = document.querySelectorAll('[data-scrub]');
  SCRUB_TEXT.forEach((char) => {
    const text = new window.SplitType(char, { types: ['chars', 'words'] });
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
    .querySelectorAll('[gsap-hover-stagger], [gsap-hover-stagger-trigger]')
    .forEach((elem: Element) => {
      // For trigger elements, set up animations for all stagger elements within
      if (elem.hasAttribute('gsap-hover-stagger-trigger')) {
        const staggerElements = elem.querySelectorAll('[gsap-hover-stagger]');

        if (staggerElements.length === 0) return;

        const animations = Array.from(staggerElements).map((staggerElem) => {
          const split = new window.SplitType(staggerElem, {
            types: 'chars',
            tagName: 'span',
          });

          const duration = parseFloat(
            (staggerElem as HTMLElement).getAttribute('data-duration') || '0.8'
          );
          const stagger = parseFloat(
            (staggerElem as HTMLElement).getAttribute('data-stagger') || '0.01'
          );

          const tl = window.gsap.timeline({ paused: true });
          tl.to(split.chars, {
            yPercent: -100,
            duration: duration,
            ease: 'expo.inOut',
            stagger: stagger,
          });

          return tl;
        });

        elem.addEventListener('mouseenter', () => animations.forEach((tl) => tl.play()));
        elem.addEventListener('mouseleave', () => animations.forEach((tl) => tl.reverse()));
      }
      // For direct stagger elements without a parent trigger
      else if (
        elem.hasAttribute('gsap-hover-stagger') &&
        !elem.closest('[gsap-hover-stagger-trigger]')
      ) {
        const split = new window.SplitType(elem, {
          types: 'chars',
          tagName: 'span',
        });

        const duration = parseFloat((elem as HTMLElement).getAttribute('data-duration') || '0.8');
        const stagger = parseFloat((elem as HTMLElement).getAttribute('data-stagger') || '0.01');

        const tl = window.gsap.timeline({ paused: true });
        tl.to(split.chars, {
          yPercent: -100,
          duration: duration,
          ease: 'expo.inOut',
          stagger: stagger,
        });

        elem.addEventListener('mouseenter', () => tl.play());
        elem.addEventListener('mouseleave', () => tl.reverse());
      }
    });
}
