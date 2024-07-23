export function mouseTrackImage() {
  document.querySelectorAll('[data-hover-target]').forEach((block) => {
    const image = block.querySelector('[data-hover-move]');

    if (image) {
      block.addEventListener('mousemove', (e) => {
        const rect = block.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        console.log(`Mouse move - X: ${x}, Y: ${y}`);

        window.gsap.to(image, {
          x: x,
          y: y,
          duration: 0.3,
          ease: 'power3.out',
        });
      });

      block.addEventListener('mouseleave', () => {
        console.log('Mouse leave');

        window.gsap.to(image, {
          x: 0,
          y: 0,
          duration: 0.3,
          ease: 'power3.out',
        });
      });
    } else {
      console.error('No image found with data-hover-move within the block:', block);
    }
  });
}
