import type { Webflow } from '@finsweet/ts-utils';
import type { gsap } from 'gsap';
import type { CustomEase } from 'gsap/CustomEase';
import type { ScrollSmoother } from 'gsap/ScrollSmoother';
import type { ScrollTrigger } from 'gsap/ScrollTrigger';
import type { SplitText } from 'gsap/SplitText';
import type { TextPlugin } from 'gsap/TextPlugin';

import type { loadExternalScript } from '$utils/load-external-script';

export type SCRIPTS_ENV = 'dev' | 'prod';

declare global {
  /* GSAP CDN scripts loaded by Webflow */
  gsap: typeof gsap;
  ScrollTrigger: typeof ScrollTrigger;
  TextPlugin: typeof TextPlugin;
  CustomEase: typeof CustomEase;
  SplitText: typeof SplitText;
  ScrollSmoother: typeof ScrollSmoother;

  interface Window {
    JS_SCRIPTS: Set<string> | undefined;
    Webflow: Webflow;

    SCRIPTS_ENV: ENV;
    setScriptsENV(env: ENV): void;

    SCRIPT_BASE: string;

    IS_DEBUG_MODE: boolean;
    setDebugMode(mode: boolean): void;
    /**
     * A wrapper function to directly console log when debug mode is active
     */
    DEBUG: (...args: any[]) => void;

    loadExternalScript: typeof loadExternalScript;

    lenis: typeof Lenis;

    debounce: typeof debounce;

    // Three.js bolt component properties
    hasRendered?: boolean;
    ScrollTrigger: typeof ScrollTrigger;
  }

  // Extend `querySelector` and `querySelectorAll` function to stop the nagging of converting `Element` to `HTMLElement` all the time
  interface ParentNode {
    querySelector<E extends HTMLElement = HTMLElement>(selectors: string): E | null;
    querySelectorAll<E extends HTMLElement = HTMLElement>(selectors: string): NodeListOf<E>;
  }
}

export {};
