/**
 * Entry point for the build system.
 * Fetches scripts from localhost or production site depending on the setup
 * Polls `localhost` on page load, else falls back to deriving code from production URL
 */
import '$utils/load-external-script';

import { SCRIPTS_LOADED_EVENT } from './constants';
import './dev/debug';
import './dev/env';

const LOCALHOST_BASE = 'http://localhost:3000/';

function getProductionBase(branch = '') {
  const branchPrefix = '' === branch ? '' : `@${branch}`;
  return `https://cdn.jsdelivr.net/gh/igniteagency/igniteagency-webflow-site${branchPrefix}/dist/prod/`;
}

const PRODUCTION_BASE = !window.location.hostname.includes('webflow.io')
  ? getProductionBase()
  : getProductionBase('dev');

function getScriptBase() {
  return window.SCRIPTS_ENV === 'dev' ? LOCALHOST_BASE : PRODUCTION_BASE;
}

window.SCRIPT_BASE = getScriptBase();

window.JS_SCRIPTS = window.JS_SCRIPTS || new Set();

const SCRIPT_LOAD_PROMISES: Array<Promise<unknown>> = [];

// init adding scripts to the page
window.addEventListener('DOMContentLoaded', addJS);

/**
 * Sets an object `window.isLocal` and adds all the set scripts using the `window.JS_SCRIPTS` Set
 */
function addJS() {
  if (window.SCRIPTS_ENV === 'dev') {
    fetchLocalScripts();
  } else {
    appendScripts();
  }
}

function appendScripts() {
  window.SCRIPT_BASE = getScriptBase();
  console.log(`[Ignite scripts] Loading ${window.SCRIPTS_ENV.toUpperCase()} scripts from ${window.SCRIPT_BASE}`);

  window.JS_SCRIPTS?.forEach((url) => {
    const script = document.createElement('script');
    script.src = window.SCRIPT_BASE + url;
    script.defer = true;

    const promise = new Promise((resolve, reject) => {
      script.onload = resolve;
      script.onerror = () => {
        console.error(`Failed to load script: ${url}`);
        reject;
      };
    });

    SCRIPT_LOAD_PROMISES.push(promise);

    document.body.appendChild(script);
  });

  Promise.allSettled(SCRIPT_LOAD_PROMISES).then(() => {
    window.DEBUG('All scripts loaded');
    window.dispatchEvent(new CustomEvent(SCRIPTS_LOADED_EVENT));
  });
}

function fetchLocalScripts() {
  const LOCALHOST_CONNECTION_TIMEOUT_IN_MS = 300;
  const localhostFetchController = new AbortController();

  const localhostFetchTimeout = setTimeout(() => {
    localhostFetchController.abort();
  }, LOCALHOST_CONNECTION_TIMEOUT_IN_MS);

  fetch(LOCALHOST_BASE, { signal: localhostFetchController.signal })
    .then((response) => {
      if (!response.ok) {
        console.error({ response });
        throw new Error('localhost response not ok');
      }

      console.log(`[Ignite scripts] DEV server connected at ${LOCALHOST_BASE}`);
    })
    .catch(() => {
      console.warn('[Ignite scripts] DEV server unavailable. Loading production scripts instead.');
      window.setScriptsENV('prod');
    })
    .finally(() => {
      clearTimeout(localhostFetchTimeout);
      appendScripts();
    });
}
