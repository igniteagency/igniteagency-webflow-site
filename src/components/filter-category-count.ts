/**
 * Updates the count for each category based on filtered items
 */
function updateCategoryCounts(categoryElements: NodeListOf<Element>, cmsFilter: FsFilter): void {
  categoryElements.forEach((categoryElement) => {
    const categoryName = categoryElement.textContent?.trim();
    if (!categoryName) return;

    // Find the sibling count span element
    const countElement = categoryElement.nextElementSibling as HTMLElement;
    if (!countElement) return;

    // Get filtered items
    const filteredItems = cmsFilter.getFilteredItems();

    // Count items matching this category
    const count = filteredItems.filter((item) => {
      const itemCategories = item.props?.category;
      return Array.isArray(itemCategories)
        ? itemCategories.includes(categoryName)
        : itemCategories === categoryName;
    }).length;

    // Update the count text
    countElement.textContent = `(${count})`;
  });
}

/**
 * Initialize the category count functionality
 */
export function initCategoryCount(): void {
  // Select all category filter elements
  const categoryElements = document.querySelectorAll('[fs-cmsfilter-field="Category"]');
  if (!categoryElements.length) return;

  // Wait for Finsweet CMS Filter to be available
  const checkCmsFilter = () => {
    if (window.FsAttributes?.cmsfilter?.filter) {
      const cmsFilter = window.FsAttributes.cmsfilter.filter;

      // Update counts initially
      updateCategoryCounts(categoryElements, cmsFilter);

      // Listen for filter changes
      cmsFilter.on('afterFilter', () => {
        updateCategoryCounts(categoryElements, cmsFilter);
      });
    } else {
      // Check again in 100ms if not available
      setTimeout(checkCmsFilter, 100);
    }
  };

  checkCmsFilter();
}
