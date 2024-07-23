export function mouseTrackImage() {
  document.querySelectorAll('[data-hover-target]').forEach((block) => {
    const image = block.querySelector('[data-hover-move]');

    if (image) {
      block.addEventListener('mouseenter', () => {
        window.gsap.to(image, {
          scale: 1,
          duration: 0.3,
          ease: 'power3.out',
        });
      });

      block.addEventListener('mouseleave', () => {
        window.gsap.to(image, {
          scale: 0,
          duration: 0.3,
          ease: 'power3.out',
        });
      });

      block.addEventListener('mousemove', (e) => {
        const rect = block.getBoundingClientRect();
        const x = e.clientX - rect.right + rect.width / 2;
        const y = e.clientY - rect.bottom + rect.height / 2;

        window.gsap.to(image, {
          x: x,
          y: y,
          duration: 0.3,
          ease: 'power3.out',
        });
      });
    } else {
      console.error('No image found with data-hover-move within the block:', block);
    }
  });
}
