import gsap from 'gsap';
import { CustomEase } from 'gsap/CustomEase';
import { Draggable } from 'gsap/Draggable';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { TextPlugin } from 'gsap/TextPlugin';
import SplitType from 'split-type';

import { animatedDetailsAccordions } from './components/accordions';
import { animateBook } from './components/book';
import { cursorMove } from './components/cursor';
import { footerSpacer } from './components/footer';
import { horizontalScroll } from './components/horizontal-scroll';
import { menuAnimation } from './components/menu';
import { mouseTrackImage } from './components/mouse-track-img';
import { navHideShow } from './components/nav';
import { testimonialCards } from './components/testimonials';
import { textAnimation } from './components/text';
import { SCRIPTS_LOADED_EVENT } from './constants';

window.gsap = gsap;
window.ScrollTrigger = ScrollTrigger;
window.CustomEase = CustomEase;
window.Draggable = Draggable;
window.gsap.registerPlugin(ScrollTrigger, TextPlugin, CustomEase, Draggable);
window.SplitType = SplitType;

window.addEventListener(SCRIPTS_LOADED_EVENT, () => {
  footerSpacer();
  horizontalScroll();
  textAnimation();
  testimonialCards();
  mouseTrackImage();
  cursorMove();
  menuAnimation();
  animatedDetailsAccordions();
  navHideShow();
  animateBook();
});

const CURRENT_YEAR = document.getElementById('current-year');

if (CURRENT_YEAR) {
  CURRENT_YEAR.textContent = new Date().getFullYear().toString();
}
