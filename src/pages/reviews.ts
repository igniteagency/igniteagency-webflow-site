import JSConfetti from 'js-confetti';

// Define our global functions immediately so they're available even if DOMContentLoaded doesn't fire
// These will be properly initialized later
(window as any).triggerReviewsConfetti = () => {
  console.log('Global confetti function called, but not yet initialized');
};

(window as any).stopReviewsConfetti = () => {
  console.log('Stop function called, but not yet initialized');
};

// Function to initialize confetti that can be called directly
function initReviewsConfetti() {
  console.log('Reviews confetti initialization function called');

  // Create confetti instance with dedicated canvas
  const createConfettiCanvas = () => {
    console.log('Creating new confetti canvas');
    const confettiCanvas = document.createElement('canvas');
    confettiCanvas.id = 'reviews-confetti-canvas';
    confettiCanvas.style.position = 'fixed';
    confettiCanvas.style.top = '0';
    confettiCanvas.style.left = '0';
    confettiCanvas.style.width = '100%';
    confettiCanvas.style.height = '100%';
    confettiCanvas.style.pointerEvents = 'none';
    confettiCanvas.style.zIndex = '1000';
    document.body.appendChild(confettiCanvas);
    return confettiCanvas;
  };

  // Try to find the existing canvas first
  const existingCanvas = document.querySelector<HTMLCanvasElement>('#reviews-confetti-canvas');
  console.log('Existing canvas found:', !!existingCanvas);

  // Use existing or create new
  const canvas = existingCanvas || createConfettiCanvas();

  // Ensure canvas dimensions are set correctly
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  try {
    // Create the confetti instance
    const jsConfetti = new JSConfetti({ canvas });
    console.log('JSConfetti instance created successfully');

    // Create an immediate burst to test if the canvas works
    jsConfetti.addConfetti({
      confettiColors: ['#ff0000', '#00ff00', '#0000ff'],
      confettiNumber: 100,
    });

    console.log('Initial test confetti triggered');

    // Configure the continuous confetti effect with increased amounts
    const startContinuousConfetti = () => {
      console.log('Starting continuous confetti');

      // Different sizes for the parallax effect
      const smallConfetti = () => {
        // Small confetti (slow)
        jsConfetti.addConfetti({
          emojis: ['✨', '⭐', '💫'],
          emojiSize: 30,
          confettiNumber: 8,
          confettiRadius: 4,
        });
      };

      const mediumConfetti = () => {
        // Medium confetti (medium speed)
        jsConfetti.addConfetti({
          emojis: ['🎊', '✨'],
          emojiSize: 50,
          confettiNumber: 5,
          confettiRadius: 5,
          confettiColors: [
            '#FFC700', // yellow
            '#C04CFD', // purple
            '#FF69B4', // pink
          ],
        });
      };

      const largeConfetti = () => {
        // Large confetti (fast)
        jsConfetti.addConfetti({
          emojis: ['🎉', '🔥'],
          emojiSize: 80,
          confettiNumber: 3,
        });
      };

      // More frequent intervals for better visibility
      const intervals = [
        setInterval(smallConfetti, 500),
        setInterval(mediumConfetti, 800),
        setInterval(largeConfetti, 1500),
      ];

      return intervals;
    };

    // Add window resize handler to ensure canvas is always right size
    window.addEventListener('resize', () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    });

    // Start the confetti effect with a slight delay to ensure DOM is ready
    let confettiIntervals: number[] = [];

    // Then start continuous mode immediately (no delay)
    confettiIntervals = startContinuousConfetti();

    // Handle visibility changes to be more performant
    document.addEventListener('visibilitychange', () => {
      if (document.hidden) {
        // Stop the animation when the page is not visible
        confettiIntervals.forEach((interval) => clearInterval(interval));
        console.log('Page hidden, confetti paused');
      } else {
        // Restart when the page becomes visible again
        const newIntervals = startContinuousConfetti();
        confettiIntervals.length = 0; // Clear array
        confettiIntervals.push(...newIntervals); // Add new intervals
        console.log('Page visible, confetti resumed');
      }
    });

    // Override the global functions with the real implementations
    (window as any).triggerReviewsConfetti = () => {
      console.log('Manual confetti trigger');
      jsConfetti.addConfetti({
        confettiNumber: 300,
        confettiColors: ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff'],
      });
      return 'Confetti triggered!'; // Return a value to confirm it worked
    };

    (window as any).stopReviewsConfetti = () => {
      confettiIntervals.forEach((interval) => clearInterval(interval));
      console.log('Confetti stopped');
      return 'Confetti stopped!'; // Return a value to confirm it worked
    };

    console.log('Confetti global functions initialized');
    return true; // Return success
  } catch (error) {
    console.error('Error initializing confetti:', error);
    return false; // Return failure
  }
}

// Try to initialize immediately for script tag inclusion
const initResult = initReviewsConfetti();
console.log('Immediate init result:', initResult);

// Also try on DOM content loaded (standard approach)
document.addEventListener('DOMContentLoaded', () => {
  console.log('DOM content loaded, initializing confetti');
  if (!initResult) {
    // Try again if the immediate init failed
    initReviewsConfetti();
  }
});

// Also try on window load (fallback approach)
window.addEventListener('load', () => {
  console.log('Window loaded, ensuring confetti is initialized');
  if (!initResult) {
    // Try again if the immediate init failed
    initReviewsConfetti();
  }
});

// Export everything
export { JSConfetti, initReviewsConfetti };
