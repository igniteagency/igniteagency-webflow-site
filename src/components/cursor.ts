export function cursorMove() {
  const cursor = document.querySelector('.cursor');

  document.addEventListener('mousemove', (e) => {
    window.gsap.to(cursor, {
      x: e.clientX,
      y: e.clientY,
      duration: 0.1,
      ease: 'power2.out',
    });
  });
}
