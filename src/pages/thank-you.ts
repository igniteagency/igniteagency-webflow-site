import { createConfettiController } from '$components/home/confetti';
import { SCRIPTS_LOADED_EVENT } from '$src/constants';

const THANK_YOU_CONFETTI_CANVAS_SELECTOR = '#thankyou-confetti';
const CONFETTI_DELAY_IN_MS = 500;

window.addEventListener(SCRIPTS_LOADED_EVENT, () => {
  window.setTimeout(() => {
    const confettiController = createConfettiController(THANK_YOU_CONFETTI_CANVAS_SELECTOR);
    confettiController?.trigger();
  }, CONFETTI_DELAY_IN_MS);
});
