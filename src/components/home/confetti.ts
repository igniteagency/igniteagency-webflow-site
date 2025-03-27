import JSConfetti from 'js-confetti';

export function showerConfetti() {
  const canvasEl = document.querySelector<HTMLCanvasElement>('#canvas-target');
  if (!canvasEl) return;

  let isInitialized = false;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting && !isInitialized) {
        // Initialize JSConfetti only once when element comes into view
        let jsConfetti: JSConfetti | null = null;
        try {
          jsConfetti = new JSConfetti({ canvas: canvasEl });
        } catch (error) {
          console.error('Error initializing JSConfetti', { error }, { canvasEl });
          return;
        }

        isInitialized = true;

        // Set up click handler
        const showConfetti = (event: MouseEvent) => {
          jsConfetti.addConfetti({
            emojis: ['😎', '⚡️', '🎉', '🌈', '👀', '🦄'],
            emojiSize: 100,
            confettiNumber: 50,
          });
        };

        canvasEl.addEventListener('click', showConfetti);

        // Disconnect observer after initialization
        observer.disconnect();
      }
    });
  });

  observer.observe(canvasEl);
}
