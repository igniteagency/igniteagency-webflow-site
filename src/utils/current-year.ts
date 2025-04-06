export function replaceCurrentYear() {
  const currentYear = new Date().getFullYear().toString();
  const currentYearElements = document.querySelectorAll('[data-current-year]');

  currentYearElements.forEach((element) => {
    element.textContent = currentYear;
  });
}
