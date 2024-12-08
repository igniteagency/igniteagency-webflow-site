export function footerSpacer() {
  // Get the source and target elements by their IDs
  var source = document.getElementById('sourceSection');
  var target = document.getElementById('targetSection');

  // Set the height of the target to match the source
  if (source && target) {
    target.style.height = source.offsetHeight + 'px';
  }
  ////
  ////
  ////
  // Select all paragraph wrappers
  const paragraphWrappers = document.querySelectorAll('.scrub-intro_paragraph-wrapper');

  gsap.to('.scrub-intro_image-wrapper', {
    scrollTrigger: {
      trigger: '.scrub-intro_scroll-container', // The container that triggers the animation
      start: 'top 20%', // Start when the top of the trigger is 20% from the top of the viewport
      end: 'top top', // End when the top of the trigger hits the top of the viewport
      scrub: true, // Smooth scrubbing
    },
    scale: 0.8, // Target scale
    opacity: 0.5, // Target opacity
  });

  gsap.to;
  paragraphWrappers.forEach((wrapper) => {
    const paragraph = wrapper.querySelector('.scrub-intro_paragraph');

    // Split the paragraph text into characters
    new window.SplitType(paragraph, { types: ['words', 'chars'] });

    // Set up ScrollTrigger for each wrapper
    gsap
      .timeline({
        scrollTrigger: {
          trigger: wrapper, // Trigger is the wrapper
          start: 'top top', // Start when the wrapper hits the top of the viewport
          end: 'bottom bottom', // End when the wrapper scrolls out of view
          scrub: true, // Tie animations to scroll progress
        },
      })
      // Animate paragraph opacity (fade in and fade out)
      .fromTo(paragraph, { opacity: 0 }, { opacity: 1, duration: 4, ease: 'power2.inOut' })
      // Animate text scrub effect (letter-by-letter opacity)
      .fromTo(
        paragraph.querySelectorAll('.char'),
        { opacity: 0.2 }, // Letters start slightly visible
        {
          opacity: 1, // Animate to fully visible
          stagger: {
            each: 0.1, // Spread animation across letters
            ease: 'none', // Smooth, linear easing tied to scroll
          },
          duration: 1, // Actual timing is tied to scroll
        },
        '<' // Start text scrub immediately after fade-in
      )
      // Fade out the paragraph opacity
      .to(paragraph, { opacity: 0, duration: 4, ease: 'power2.inOut' });
  });
  //
  ////
  ///
  ///
}
