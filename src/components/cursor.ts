const TIP_LINKS = document.querySelectorAll('[data-cursor]');
const HOVER_LINKS = document.querySelectorAll('a');
const CURSOR = document.querySelectorAll('.cursor');

export function cursorMove() {
  gsap.set(CURSOR, { xPercent: -50, yPercent: -50 });

  let xTo = gsap.quickTo(CURSOR, 'x', { duration: 0.2, ease: 'power3' });
  let yTo = gsap.quickTo(CURSOR, 'y', { duration: 0.2, ease: 'power3' });

  window.addEventListener('mousemove', (e) => {
    xTo(e.clientX);
    yTo(e.clientY);
  });

  TIP_LINKS.forEach((link) => {
    let text = link.getAttribute('data-cursor');

    link.addEventListener('mouseenter', () => {
      gsap.to('.cursor p', {
        scrambleText: {
          text: text,
          chars: 'lowercase',
          speed: 2,
        },
        duration: 0.8,
      });
    });
  });

  // Add hover effect for links
  HOVER_LINKS.forEach((link) => {
    link.addEventListener('mouseenter', () => {
      window.gsap.to(CURSOR, {
        scale: 1.5,
        duration: 0.2,
        ease: 'power2.out',
      });
    });

    link.addEventListener('mouseleave', () => {
      window.gsap.to(CURSOR, {
        scale: 1,
        duration: 0.2,
        ease: 'power2.out',
      });
    });
  });
}
