const TIP_LINKS = document.querySelectorAll('[data-cursor]');
const CURSOR = document.querySelectorAll('.cursor');

export function cursorMove() {
  gsap.set(CURSOR, { xPercent: -50, yPercent: -50 });

  let xTo = gsap.quickTo(CURSOR, 'x', { duration: 0.2, ease: 'power3' });
  let yTo = gsap.quickTo(CURSOR, 'y', { duration: 0.2, ease: 'power3' });

  window.addEventListener('mousemove', (e) => {
    xTo(e.clientX);
    yTo(e.clientY);
  });

  // TIP_LINKS.forEach((link) => {
  //   let text = link.getAttribute('data-cursor');

  //   link.addEventListener('mouseenter', () => {
  //     if (text !== null) {
  //       gsap.to('.cursor p', {
  //         text: text, // Utilises TextPlugin for text changes
  //         duration: 0.8, // Smooth transition to the new text
  //       });
  //     }
  //   });
  // });
}
