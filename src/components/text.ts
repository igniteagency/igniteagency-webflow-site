const SCRUB_TEXT = document.querySelectorAll('[data-scrub]');

export function textAnimation() {
  document.querySelectorAll('[gsap-letter-stagger]').forEach((elem: Element) => {
    let typeSplit = new window.SplitType(elem, {
      types: 'lines, words, chars',
      tagName: 'span',
    });

    window.gsap.from(typeSplit.chars, {
      y: '100%',
      opacity: 0,
      duration: parseFloat((elem as HTMLElement).getAttribute('data-duration') || '0.3'),
      ease: 'expo.out',
      stagger: parseFloat((elem as HTMLElement).getAttribute('data-stagger') || '0.05'),
      scrollTrigger: {
        trigger: elem,
        start: 'top center',
      },
    });
  });

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
