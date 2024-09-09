const bookMoveTarget = document.querySelector<HTMLElement>('.section_home-tabs');
const handleMouseMove = (event: MouseEvent): void => {
  const width = window.innerWidth;
  const height = window.innerHeight;

  const mouseX = event.clientX / width;
  const mouseY = event.clientY / height;

  const rotationY = -30 + mouseX * 60; // Range mapped from -30deg to +30deg
  const rotationX = 10 - mouseY * 20; // Range mapped from +10deg to -10deg

  document.documentElement.style.setProperty('--book-rotationY', `${rotationY}deg`);
  document.documentElement.style.setProperty('--book-rotationX', `${rotationX}deg`);
};

// Intersection Observer callback function
const observerCallback: IntersectionObserverCallback = (
  entries: IntersectionObserverEntry[]
): void => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      document.addEventListener('mousemove', handleMouseMove);
    } else {
      document.removeEventListener('mousemove', handleMouseMove);
    }
  });
};

const observer = new IntersectionObserver(observerCallback, {
  threshold: 0.1,
});

if (bookMoveTarget) {
  observer.observe(bookMoveTarget);
}
