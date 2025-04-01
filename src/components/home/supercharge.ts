export function setHeroSuperchargeMode() {
  const superchargeButton = document.getElementById('supercharge');
  const heroSection = document.querySelector('.section-home-hero');

  if (!superchargeButton || !heroSection) {
    console.debug('Supercharge button or hero section not found');
    return;
  }

  superchargeButton.addEventListener('click', () => {
    const currentValue = heroSection.getAttribute('data-supercharge');

    if (!currentValue || currentValue === '') {
      heroSection.setAttribute('data-supercharge', 'true');
    } else {
      heroSection.removeAttribute('data-supercharge');
    }
  });
}
