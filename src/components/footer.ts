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
  // Select the link element
  const nextPageLink = document.querySelector('.footer_next-page_link');

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
      start: 'bottom 95%', // Start animation when the bottom of the trigger element is 95% from the top of the viewport
      toggleActions: 'play reverse restart reverse', // play on enter, reverse on leave, restart on enter again, reverse on leave again
    },
  });

  // Add scroll-to-next-page interaction
  if (nextPageLink) {
    // Get the href from the link
    const targetHref = nextPageLink.getAttribute('href');

    if (targetHref) {
      // Variables to track scroll state
      let isAtBottom = false;
      let cumulativeScrollDistance = 0;
      const scrollDistanceThreshold = 1000; // Pixels of cumulative scroll needed to trigger navigation
      let animationProgress = 0;
      // Define the type for the GSAP timeline
      let progressAnimation: gsap.core.Timeline | null = null;
      // Timer for auto-decay
      let decayTimer: number | null = null;
      // Decay animation
      let decayAnimation: gsap.core.Tween | null = null;

      // Function to check if we're at the bottom of the page
      const checkIfAtBottom = () => {
        const scrollY = window.scrollY;
        const windowHeight = window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight;

        // Check if we're at the bottom (with a small buffer of 5px)
        return scrollY + windowHeight >= documentHeight - 5;
      };

      // Function to start the decay of scroll value
      const startDecay = () => {
        // Clear any existing decay timer and animation
        if (decayTimer) {
          clearTimeout(decayTimer);
        }
        if (decayAnimation) {
          decayAnimation.kill();
        }

        // Set a timer to start decaying the scroll value if no scroll occurs
        decayTimer = window.setTimeout(() => {
          // Create a decay animation that rapidly reduces the scroll value
          decayAnimation = window.gsap.to(
            {},
            {
              duration: 0.5, // Faster decay
              onUpdate: function () {
                // Faster decay rate - multiply by 0.8 instead of 0.9
                cumulativeScrollDistance *= 0.8;

                // Reset to zero when it gets small enough
                if (cumulativeScrollDistance < 10) {
                  cumulativeScrollDistance = 0;
                }

                updateVisualFeedback();
              },
              onComplete: function () {
                // Ensure it's completely reset at the end
                cumulativeScrollDistance = 0;
                updateVisualFeedback();
              },
            }
          );
        }, 200); // Start decay after 200ms of no scrolling
      };

      // Function to update visual feedback based on progress
      const updateVisualFeedback = () => {
        // Add active class when any progress is made
        if (cumulativeScrollDistance > 0) {
          nextPageWrapper.classList.add('is-active');
        } else {
          nextPageWrapper.classList.remove('is-active');
        }

        // Add ready class when approaching the threshold
        if (cumulativeScrollDistance >= scrollDistanceThreshold * 0.7) {
          nextPageWrapper.classList.add('is-ready');
        } else {
          nextPageWrapper.classList.remove('is-ready');
        }

        // Calculate progress percentage (0 to 1)
        animationProgress = Math.min(cumulativeScrollDistance / scrollDistanceThreshold, 1);

        // Update any progress indicators with GSAP
        if (progressAnimation) {
          progressAnimation.progress(animationProgress);
        }

        // Set CSS variables for styling
        // Set the raw progress value (0 to 1)
        nextPageWrapper.style.setProperty('--scroll-progress', animationProgress.toString());
        // Set a percentage value (0% to 100%) for use in gradients
        nextPageWrapper.style.setProperty(
          '--scroll-progress-percent',
          `${animationProgress * 100}%`
        );
      };

      // Create a GSAP timeline for progress animation (optional)
      progressAnimation = window.gsap.timeline({ paused: true }).to(nextPageWrapper, {
        // You can add any animation properties here
        // This is just a placeholder timeline that tracks progress
        duration: 1,
        onUpdate: function () {
          // This is where you could add more complex animations
        },
      });

      // Add wheel event listener to detect scroll attempts when already at bottom
      window.addEventListener(
        'wheel',
        (event) => {
          // Reset any decay that was in progress
          if (decayTimer) {
            clearTimeout(decayTimer);
            decayTimer = null;
          }
          if (decayAnimation) {
            decayAnimation.kill();
            decayAnimation = null;
          }

          // Only interested in downward scrolls
          if (event.deltaY <= 0) {
            // More aggressively decrease when scrolling up
            cumulativeScrollDistance = Math.max(
              0,
              cumulativeScrollDistance - Math.abs(event.deltaY) * 1.5
            );
            updateVisualFeedback();

            // Start decay after this scroll
            startDecay();
            return;
          }

          // Check if we're at the bottom of the page
          isAtBottom = checkIfAtBottom();

          if (isAtBottom) {
            // Add the scroll distance to our cumulative total
            cumulativeScrollDistance += event.deltaY;

            // Update visual feedback
            updateVisualFeedback();

            // Navigate to next page after threshold
            if (cumulativeScrollDistance >= scrollDistanceThreshold) {
              // Optional: Add a small delay for visual feedback to complete
              window.gsap.delayedCall(0.2, () => {
                window.location.href = targetHref;
              });
            } else {
              // Start decay after this scroll if we didn't reach the threshold
              startDecay();
            }

            // Prevent default scroll behavior when at bottom
            event.preventDefault();
          } else {
            // Reset cumulative scroll if not at bottom
            cumulativeScrollDistance = 0;
            updateVisualFeedback();
          }
        },
        { passive: false }
      );

      // Also handle touch events for mobile
      let touchStartY = 0;
      let lastTouchY = 0;

      window.addEventListener(
        'touchstart',
        (event) => {
          touchStartY = event.touches[0].clientY;
          lastTouchY = touchStartY;

          // Reset any decay that was in progress
          if (decayTimer) {
            clearTimeout(decayTimer);
            decayTimer = null;
          }
          if (decayAnimation) {
            decayAnimation.kill();
            decayAnimation = null;
          }
        },
        { passive: true }
      );

      window.addEventListener(
        'touchmove',
        (event) => {
          const touchY = event.touches[0].clientY;
          const deltaY = lastTouchY - touchY;
          lastTouchY = touchY;

          // Only interested in downward swipes
          if (deltaY <= 0) {
            // More aggressively decrease when swiping up
            cumulativeScrollDistance = Math.max(
              0,
              cumulativeScrollDistance - Math.abs(deltaY) * 1.5
            );
            updateVisualFeedback();
            return;
          }

          // Check if we're at the bottom of the page
          isAtBottom = checkIfAtBottom();

          if (isAtBottom) {
            // Add the swipe distance to our cumulative total
            cumulativeScrollDistance += deltaY;

            // Update visual feedback
            updateVisualFeedback();

            // Navigate to next page after threshold
            if (cumulativeScrollDistance >= scrollDistanceThreshold) {
              // Optional: Add a small delay for visual feedback to complete
              window.gsap.delayedCall(0.2, () => {
                window.location.href = targetHref;
              });
            }

            // Prevent default scroll behavior when at bottom
            event.preventDefault();
          }
        },
        { passive: false }
      );

      // Reset touch position and start decay
      window.addEventListener(
        'touchend',
        () => {
          touchStartY = 0;
          lastTouchY = 0;

          // Only start decay if we haven't reached the threshold
          if (cumulativeScrollDistance < scrollDistanceThreshold) {
            startDecay();
          }
        },
        { passive: true }
      );

      // Check initial state
      isAtBottom = checkIfAtBottom();
      if (isAtBottom) {
        nextPageWrapper.classList.add('is-active');
      }
    }
  }
}
