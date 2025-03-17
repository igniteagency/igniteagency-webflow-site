export function footerSpacer() {
  // Get the source and target elements by their IDs
  var source = document.getElementById('sourceSection');
  var target = document.getElementById('targetSection');

  // Set the height of the target to match the source
  if (source && target) {
    target.style.height = source.offsetHeight + 'px';
  }
}

export function footerNextPageAnimation() {
  // Select the footer next page wrapper
  const nextPageWrapper = document.querySelector('.footer_next-page_wrapper');
  // Select the trigger element
  const triggerElement = document.querySelector('.section_supercharged');

  if (!nextPageWrapper || !triggerElement) return;

  // Select all direct children of the wrapper
  const children = nextPageWrapper.children;

  if (!children.length) return;

  // Create the ScrollTrigger animation
  window.gsap.from(children, {
    yPercent: 100,
    duration: 1,
    ease: 'expo.inOut',
    stagger: 0.1, // Stagger each child by 0.1 seconds
    scrollTrigger: {
      trigger: triggerElement,
      start: 'bottom 95%', // Start animation when the bottom of the trigger element is 80% from the top of the viewport (20% from bottom)
      toggleActions: 'play reverse restart reverse', // play on enter, reverse on leave, restart on enter again, reverse on leave again
    },
  });
}
