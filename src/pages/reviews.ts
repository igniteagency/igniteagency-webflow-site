import { SCRIPTS_LOADED_EVENT } from 'src/constants';

// Wait for all scripts to be loaded before initializing
window.addEventListener(SCRIPTS_LOADED_EVENT, () => {
  initHeartsAnimation();
});

// Function to initialize custom floating hearts animation
function initHeartsAnimation() {
  const backgroundSpawnMultiplier = 7; // Target BG hearts per second (also for initial burst)
  const foregroundSpawnMultiplier = 3; // Target FG hearts per second (also for initial burst)
  const heartSpawnIntervalMs = 50; // Interval for spawning hearts during scroll

  // Create or use existing canvases - one behind content, one in front
  const createHeartCanvases = () => {
    // Background canvas (behind testimonial cards) - lower z-index
    const bgCanvas = document.createElement('canvas');
    bgCanvas.id = 'reviews-hearts-bg-canvas';
    bgCanvas.style.position = 'fixed';
    bgCanvas.style.top = '0';
    bgCanvas.style.left = '0';
    bgCanvas.style.width = '100%';
    bgCanvas.style.height = '100%';
    bgCanvas.style.pointerEvents = 'none';
    bgCanvas.style.zIndex = '1'; // Lower z-index, behind cards

    // Foreground canvas (in front of testimonial cards) - higher z-index
    const fgCanvas = document.createElement('canvas');
    fgCanvas.id = 'reviews-hearts-fg-canvas';
    fgCanvas.style.position = 'fixed';
    fgCanvas.style.top = '0';
    fgCanvas.style.left = '0';
    fgCanvas.style.width = '100%';
    fgCanvas.style.height = '100%';
    fgCanvas.style.pointerEvents = 'none';
    fgCanvas.style.zIndex = '1000'; // Higher z-index, in front of cards

    document.body.appendChild(bgCanvas);
    document.body.appendChild(fgCanvas);

    return { bgCanvas, fgCanvas };
  };

  // Get existing canvases or create new ones
  const bgCanvas = document.querySelector<HTMLCanvasElement>('#reviews-hearts-bg-canvas');
  const fgCanvas = document.querySelector<HTMLCanvasElement>('#reviews-hearts-fg-canvas');

  const { bgCanvas: backgroundCanvas, fgCanvas: foregroundCanvas } =
    bgCanvas && fgCanvas ? { bgCanvas, fgCanvas } : createHeartCanvases();

  // Set dimensions for both canvases
  backgroundCanvas.width = window.innerWidth;
  backgroundCanvas.height = window.innerHeight;
  foregroundCanvas.width = window.innerWidth;
  foregroundCanvas.height = window.innerHeight;

  // Get contexts for both canvases
  const bgCtx = backgroundCanvas.getContext('2d')!;
  const fgCtx = foregroundCanvas.getContext('2d')!;

  // Client-requested heart emojis
  const heartEmojis = ['💗', '💖', '❤️', '🩷'];

  // Heart layer types
  enum Layer {
    BACKGROUND, // Behind testimonials
    FOREGROUND, // In front of testimonials
  }

  // Class for individual floating heart
  class FloatingHeart {
    x: number;
    y: number;
    size: number;
    speedY: number;
    emoji: string;
    opacity: number;
    initialOpacity: number;
    initialX: number;
    layer: Layer; // Whether this heart is in background or foreground

    constructor(forcedLayer?: Layer) {
      // Start from a random position well below the screen
      this.initialX = Math.random() * window.innerWidth;
      this.x = this.initialX;
      this.y = window.innerHeight + Math.random() * 100 + 50; // 50-150px below the visible canvas

      // Determine size category and layer
      const sizeCategory = Math.random();

      // Assign layer and size based on forcedLayer parameter or randomly
      if (forcedLayer !== undefined) {
        this.layer = forcedLayer;

        if (this.layer === Layer.BACKGROUND) {
          // Background hearts are smaller
          if (Math.random() < 0.7) {
            this.size = 30; // Small
          } else {
            this.size = 45; // Medium-small
          }
        } else {
          // Foreground hearts are larger
          if (Math.random() < 0.7) {
            this.size = 60; // Medium-large
          } else {
            this.size = 80; // Large
          }
        }
      } else {
        // Auto-assign layer based on size
        if (sizeCategory < 0.5) {
          // Small heart (50% chance) - BACKGROUND
          this.size = 30;
          this.layer = Layer.BACKGROUND;
        } else if (sizeCategory < 0.8) {
          // Medium heart (30% chance) - BACKGROUND
          this.size = 45;
          this.layer = Layer.BACKGROUND;
        } else if (sizeCategory < 0.95) {
          // Large-medium heart (15% chance) - FOREGROUND
          this.size = 60;
          this.layer = Layer.FOREGROUND;
        } else {
          // Large heart (5% chance) - FOREGROUND
          this.size = 80;
          this.layer = Layer.FOREGROUND;
        }
      }

      // Set speed based on size (increased by ~30% for faster animation)
      if (this.size === 30) {
        this.speedY = 1.4; // Slowest rise (was 0.9)
        this.initialOpacity = 0.5; // Most transparent
      } else if (this.size === 45) {
        this.speedY = 2.3; // Slow-medium rise (was 1.5)
        this.initialOpacity = 0.7; // Medium transparent
      } else if (this.size === 60) {
        this.speedY = 3.8; // Medium-fast rise (was 2.5)
        this.initialOpacity = 0.85; // Less transparent
      } else {
        this.speedY = 5.2; // Fast rise (was 3.5)
        this.initialOpacity = 1.0; // Fully opaque
      }

      // Choose a random emoji
      this.emoji = heartEmojis[Math.floor(Math.random() * heartEmojis.length)];

      // Set initial opacity
      this.opacity = this.initialOpacity;
    }

    update() {
      // Move upward
      this.y -= this.speedY;

      // Fade out much earlier - starting at just 10% from the bottom of the screen
      // Calculate relative position from bottom: 0.9 = 90% of screen height from the top, or 10% from bottom
      if (this.y < window.innerHeight * 0.9) {
        // Calculate how far into the fade zone we are (from 0.9 to 0 relative height)
        const fadePosition = 1 - (window.innerHeight * 0.9 - this.y) / (window.innerHeight * 0.9);

        // Use a much more aggressive fade curve (fifth power) for extremely fast fadeout
        // This makes opacity drop much more rapidly at the beginning of the fade
        const fasterFade = Math.pow(fadePosition, 5);

        this.opacity = this.initialOpacity * Math.max(0, fasterFade);
      }

      // Keep hearts alive until they're nearly invisible
      return this.y > -this.size && this.opacity > 0.01;
    }

    draw() {
      // Don't draw nearly invisible hearts (matching the threshold in update)
      if (this.opacity <= 0.01) return;

      // Get the appropriate context based on layer
      const ctx = this.layer === Layer.BACKGROUND ? bgCtx : fgCtx;

      ctx.save();
      ctx.globalAlpha = this.opacity;
      ctx.font = `${this.size}px Arial`;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(this.emoji, this.x, this.y);
      ctx.restore();
    }
  }

  // Arrays to store hearts for each layer
  const backgroundHearts: FloatingHeart[] = [];
  const foregroundHearts: FloatingHeart[] = [];

  // Helper function to add a heart of a specific layer
  function addHeartToLayer(layer: Layer) {
    if (layer === Layer.BACKGROUND) {
      backgroundHearts.push(new FloatingHeart(Layer.BACKGROUND));
    } else {
      foregroundHearts.push(new FloatingHeart(Layer.FOREGROUND));
    }
  }

  // Function called at intervals to generate hearts
  function generateHeartsAtInterval() {
    // Ticks per second = 1000 / heartSpawnIntervalMs
    const ticksPerSecond = 1000 / heartSpawnIntervalMs;

    if (Math.random() < backgroundSpawnMultiplier / ticksPerSecond) {
      addHeartToLayer(Layer.BACKGROUND);
    }

    if (Math.random() < foregroundSpawnMultiplier / ticksPerSecond) {
      addHeartToLayer(Layer.FOREGROUND);
    }
  }

  // Animation function with timestamp for stable frame rate
  let lastTime = 0;
  let animationFrameId: number;

  function animate(timestamp: number) {
    const elapsed = timestamp - lastTime;
    if (elapsed > 16) {
      // Target ~60fps
      lastTime = timestamp;

      // Clear both canvases
      bgCtx.clearRect(0, 0, backgroundCanvas.width, backgroundCanvas.height);
      fgCtx.clearRect(0, 0, foregroundCanvas.width, foregroundCanvas.height);

      // Update and draw background hearts
      for (let i = backgroundHearts.length - 1; i >= 0; i--) {
        const heart = backgroundHearts[i];
        if (heart.update()) {
          heart.draw();
        } else {
          backgroundHearts.splice(i, 1);
        }
      }

      // Update and draw foreground hearts
      for (let i = foregroundHearts.length - 1; i >= 0; i--) {
        const heart = foregroundHearts[i];
        if (heart.update()) {
          heart.draw();
        } else {
          foregroundHearts.splice(i, 1);
        }
      }
    }

    // Continue animation loop
    animationFrameId = requestAnimationFrame(animate);
  }

  // Scroll detection variables
  let isScrolling = false;
  let scrollTimeout: number;
  let heartCreationInterval: number;

  // Function to start producing hearts
  function startHeartCreation() {
    if (!heartCreationInterval) {
      // Create an initial burst of hearts when scrolling starts
      for (let i = 0; i < backgroundSpawnMultiplier; i++) {
        addHeartToLayer(Layer.BACKGROUND);
      }
      for (let i = 0; i < foregroundSpawnMultiplier; i++) {
        addHeartToLayer(Layer.FOREGROUND);
      }

      // Create hearts based on multipliers and interval
      heartCreationInterval = window.setInterval(generateHeartsAtInterval, heartSpawnIntervalMs);

      // Start animation if not already running
      if (!animationFrameId) {
        animationFrameId = requestAnimationFrame(animate);
      }
    }
  }

  // Function to stop producing hearts
  function stopHeartCreation() {
    if (heartCreationInterval) {
      window.clearInterval(heartCreationInterval);
      heartCreationInterval = 0;
    }

    // We don't stop the animation frame immediately to let existing hearts
    // continue floating up and out of view naturally
  }

  // Handle scroll events
  window.addEventListener(
    'scroll',
    () => {
      // Start producing hearts when scrolling begins
      if (!isScrolling) {
        isScrolling = true;
        startHeartCreation();
      }

      // Clear previous timeout
      clearTimeout(scrollTimeout);

      // Set a new timeout to detect when scrolling stops
      scrollTimeout = window.setTimeout(() => {
        isScrolling = false;
        stopHeartCreation();
      }, 500); // Stop creating hearts 500ms after scrolling stops
    },
    { passive: true }
  );

  // Start animation loop (without creating hearts initially)
  animationFrameId = requestAnimationFrame(animate);

  // Handle window resize - update both canvases
  window.addEventListener('resize', () => {
    backgroundCanvas.width = window.innerWidth;
    backgroundCanvas.height = window.innerHeight;
    foregroundCanvas.width = window.innerWidth;
    foregroundCanvas.height = window.innerHeight;
  });

  // Pause/resume for performance when tab not visible
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
      if (heartCreationInterval) {
        clearInterval(heartCreationInterval);
        heartCreationInterval = 0;
      }

      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
        animationFrameId = 0;
      }
    } else if (isScrolling) {
      // Only restart if we were scrolling when the tab became hidden
      startHeartCreation();
      if (!animationFrameId) {
        animationFrameId = requestAnimationFrame(animate);
      }
    }
  });

  // Control functions
  (window as any).stopHeartsAnimation = () => {
    stopHeartCreation();
    if (animationFrameId) {
      cancelAnimationFrame(animationFrameId);
      animationFrameId = 0;
    }
    return true;
  };

  (window as any).startHeartsAnimation = () => {
    // Force hearts to appear regardless of scrolling state
    startHeartCreation();
    return true;
  };
}

// Export for potential use in other files
export { initHeartsAnimation };
