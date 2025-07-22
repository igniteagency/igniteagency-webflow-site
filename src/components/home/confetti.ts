import JSConfetti from 'js-confetti';

interface ConfettiController {
  activate: () => void;
  deactivate: () => void;
  destroy: () => void;
  exitEffect: () => void;
  reenterEffect: () => void;
}

/**
 * Creates a controller for managing a JSConfetti instance and its click listener.
 * @param canvasTarget Selector string or HTMLCanvasElement for the confetti canvas.
 * @returns A controller object or null if canvas not found.
 */
export function createConfettiController(
  canvasTarget: string | HTMLCanvasElement
): ConfettiController | null {
  const canvasEl =
    typeof canvasTarget === 'string'
      ? document.querySelector<HTMLCanvasElement>(canvasTarget)
      : canvasTarget;

  if (!canvasEl) {
    console.error('Confetti canvas not found:', canvasTarget);
    return null;
  }

  let jsConfetti: JSConfetti | null = null;
  let isListenerActive = false;

  // Define the handler function once
  const showConfetti = () => {
    if (!jsConfetti) {
      // Initialize on first click if not already done by activate
      try {
        console.log('Initializing JSConfetti on demand for canvas:', canvasEl);
        jsConfetti = new JSConfetti({ canvas: canvasEl });
      } catch (error) {
        console.error('Error initializing JSConfetti', { error }, { canvasEl });
        return;
      }
    }
    jsConfetti.addConfetti({
      emojis: ['😎', '⚡️', '🎉', '🌈', '👀', '🦄'],
      emojiSize: 100,
      confettiNumber: 30,
    });
  };

  const activate = () => {
    // Initialize confetti instance proactively if not already done
    if (!jsConfetti) {
      try {
        console.log('Initializing JSConfetti proactively for canvas:', canvasEl);
        jsConfetti = new JSConfetti({ canvas: canvasEl });
      } catch (error) {
        console.error('Error initializing JSConfetti', { error }, { canvasEl });
        return; // Don't add listener if init failed
      }
    }

    if (!isListenerActive) {
      console.log('Activating confetti click listener.');
      canvasEl.addEventListener('click', showConfetti);
      isListenerActive = true;
    } else {
      console.log('Confetti listener already active.');
    }
  };

  const deactivate = () => {
    if (isListenerActive) {
      console.log('Deactivating confetti click listener.');
      canvasEl.removeEventListener('click', showConfetti);
      isListenerActive = false;
    } else {
      console.log('Confetti listener already inactive.');
    }
  };

  const destroy = () => {
    console.log('Destroying confetti controller.');
    deactivate(); // Ensure listener is removed
    // js-confetti doesn't have an explicit destroy, cleanup is mainly listener removal
    jsConfetti = null;
  };

  const exitEffect = () => {
    deactivate();
  };

  const reenterEffect = () => {
    activate();
  };

  // Return the controller object
  return { activate, deactivate, destroy, exitEffect, reenterEffect };
}
