export function mouseTrackImage() {
  window.gsap.matchMedia().add(
    // Set up a media query for devices with a fine pointer
    '(pointer: fine)',
    () => {
      const blocks = document.querySelectorAll('[data-hover-target]');
      blocks.forEach((block) => {
        const hoverMoveEl = block.querySelector('[data-hover-move]');

        if (hoverMoveEl) {
          const inAnimation = () => {
            window.gsap.to(hoverMoveEl, {
              scale: 1,
              duration: 0.3,
              ease: 'power3.out',
            });
          };

          const outAnimation = () => {
            window.gsap.to(hoverMoveEl, {
              scale: 0,
              duration: 0.3,
              ease: 'power3.out',
            });
          };
          const mouseEnterHandler = () => inAnimation();
          const focusInHandler = () => inAnimation();
          const mouseLeaveHandler = () => outAnimation();
          const focusOutHandler = () => outAnimation();

          // Use quickTo for efficient mousemove handling
          const quickToX = window.gsap.quickTo(hoverMoveEl, 'x', {
            duration: 0.3,
            ease: 'power3.out',
          });
          const quickToY = window.gsap.quickTo(hoverMoveEl, 'y', {
            duration: 0.3,
            ease: 'power3.out',
          });

          const mouseMoveHandler = (e: MouseEvent) => {
            const rect = block.getBoundingClientRect();
            const x = e.clientX - rect.right + rect.width / 2;
            const y = e.clientY - rect.bottom + rect.height / 2;

            quickToX(x);
            quickToY(y);
          };

          block.addEventListener('mouseenter', mouseEnterHandler);
          block.addEventListener('focusin', focusInHandler);
          block.addEventListener('mouseleave', mouseLeaveHandler);
          block.addEventListener('focusout', focusOutHandler);
          block.addEventListener('mousemove', mouseMoveHandler);

          // Cleanup function
          return () => {
            block.removeEventListener('mouseenter', mouseEnterHandler);
            block.removeEventListener('focusin', focusInHandler);
            block.removeEventListener('mouseleave', mouseLeaveHandler);
            block.removeEventListener('focusout', focusOutHandler);
            block.removeEventListener('mousemove', mouseMoveHandler);
          };
        } else {
          console.error('No image found with data-hover-move within the block:', block);
        }
      });
    }
  );
}
