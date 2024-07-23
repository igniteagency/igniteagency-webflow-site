export function textAnimation() {
  document.querySelectorAll('[gsap-letter-stagger]').forEach((elem: Element) => {
    let typeSplit = new window.SplitType(elem, {
      types: 'words, lines, chars',
      tagName: 'span',
    });

    const duration = parseFloat((elem as HTMLElement).getAttribute('data-duration') || '1');
    const stagger = parseFloat((elem as HTMLElement).getAttribute('data-stagger') || '0.05');
    const trigger = (elem as HTMLElement).getAttribute('data-trigger-start') || 'center';

    window.gsap.from(typeSplit.chars, {
      y: '100%',
      duration: duration,
      ease: 'expo.out',
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

    lineSplit.lines.forEach((line) => {
      window.gsap.from(line, {
        y: '100%',
        opacity: 0,
        duration: duration,
        ease: 'expo.out',
        scrollTrigger: {
          trigger: line,
          start: 'top 80%', // Start animation when line enters the bottom of the viewport
          end: 'top center', // End animation when line reaches the center of the viewport
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
}
