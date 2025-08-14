import debounce from 'debounce';

import { animatedDetailsAccordions } from '$components/accordions';
import { animateBook } from '$components/book';
import { cursorMove } from '$components/cursor';
import { dialogInit } from '$components/dialog';
import { footerSpacer, footerNextPageAnimation } from '$components/footer';
import { horizontalScroll } from '$components/horizontal-scroll';
import { initLenisSmoothScroll } from '$components/lenis';
import { initMarqueeScrollDirection } from '$components/marquee';
import { mouseTrackImage } from '$components/mouse-track-img';
import { initNavigation } from '$components/nav';
import { testimonialCards } from '$components/testimonials';
import { textAnimation } from '$components/text-animation';
import { initializeVimeoPlayers } from '$components/vimeo-player';
import { initBugHerd } from '$utils/bugherd-script';
import { replaceCurrentYear } from '$utils/current-year';

import { SCRIPTS_LOADED_EVENT } from './constants';

window.debounce = debounce;

initLenisSmoothScroll();

window.addEventListener(SCRIPTS_LOADED_EVENT, () => {
  window.Webflow?.push(() => {
    textAnimation();

    cursorMove();

    initNavigation();

    horizontalScroll();

    testimonialCards();

    mouseTrackImage();

    animatedDetailsAccordions();

    animateBook();

    initializeVimeoPlayers();

    initMarqueeScrollDirection();

    footerSpacer();
    footerNextPageAnimation();

    replaceCurrentYear();

    addScrollTimelinePolyfillScript();

    initBugHerd();

    dialogInit();
  });
});

function addScrollTimelinePolyfillScript() {
  window.loadExternalScript('https://flackr.github.io/scroll-timeline/dist/scroll-timeline.js');
}
