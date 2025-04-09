/**
 * Initialize the category count functionality
 */
export function initFilterCategoryCount(): void {
  const CATEGORY_COUNT_SELECTOR = `[data-el="filter-category-count"]`;

  window.fsAttributes = window.fsAttributes || [];
  window.fsAttributes.push([
    'cmsfilter',
    (filterInstances) => {
      const [filterInstance] = filterInstances;

      filterInstance.filtersData.forEach((filterData) => {
        // Check if this filter has a category key (case insensitive)
        const hasCategoryKey = filterData.filterKeys.find(
          (key) => key.toLowerCase() === 'category'
        );

        console.debug('hasCategoryKey', hasCategoryKey);

        if (!hasCategoryKey) return;

        // Loop through all elements in the category filter
        filterData.elements.forEach((elementData) => {
          // Find the sibling category count element
          const filterElement = elementData.element as HTMLElement;
          const countElement = filterElement.parentElement?.querySelector(CATEGORY_COUNT_SELECTOR);

          if (countElement) {
            // Update the count element with the results count
            countElement.textContent = elementData.resultsCount.toString();
          }
        });
      });
    },
  ]);
}
