import { SCRIPTS_LOADED_EVENT } from '$src/constants';

import { initBlogProgressLine } from './toc-progress';

// Initialize when all scripts are loaded
window.addEventListener(SCRIPTS_LOADED_EVENT, () => {
  initBlogProgressLine();
});
