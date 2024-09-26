export function cursorMove() {
  const cursor = document.querySelector('.cursor');
  const links = document.querySelectorAll('a');

  document.addEventListener('mousemove', (e) => {
    window.gsap.to(cursor, {
      x: e.clientX,
      y: e.clientY,
      duration: 0.05,
      ease: 'power2.out',
    });
  });

  // Add hover effect for links
  links.forEach((link) => {
    link.addEventListener('mouseenter', () => {
      window.gsap.to(cursor, {
        scale: 1.5,
        duration: 0.2,
        ease: 'power2.out',
      });
    });

    link.addEventListener('mouseleave', () => {
      window.gsap.to(cursor, {
        scale: 1,
        duration: 0.2,
        ease: 'power2.out',
      });
    });
  });
}
