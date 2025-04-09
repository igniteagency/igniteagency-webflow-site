import { initFilterCategoryCount } from '$components/filter-category-count';
import { SCRIPTS_LOADED_EVENT } from '$src/constants';

// Initialize when all scripts are loaded
window.addEventListener(SCRIPTS_LOADED_EVENT, () => {
  initFilterCategoryCount();
});
