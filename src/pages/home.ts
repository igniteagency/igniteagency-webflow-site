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

///Intro scrub section

// Create a named timeline for the scroll-based animation
let scrubIntroTimeline = gsap.timeline({
  scrollTrigger: {
    trigger: '.scrub-intro_content', // The element to pin
    start: 'top top', // Pinning starts when the top of the element reaches the top of the viewport
    end: '+=3000', // Adjust this value to control when pinning ends
    pin: true, // Enable pinning of the element
    scrub: 1, // Smooth scrubbing, synchronized with the scrollbar
    onEnter: () => console.log('ScrollTrigger has been entered.'), // Log when ScrollTrigger is entered
    onLeave: () => console.log('ScrollTrigger has been left.'), // Log when ScrollTrigger is left
    onUpdate: (self) => console.log(`Progress: ${self.progress}`), // Log the progress of the ScrollTrigger
  },
});

console.log('Scrub Intro Timeline has been created.');

// Animate the opacity of each paragraph on scroll
document.querySelectorAll('.scrub-intro_paragraph-wrapper').forEach((paragraph, i) => {
  console.log(`Setting up animation for paragraph ${i + 1}`);

  scrubIntroTimeline
    .fromTo(
      paragraph,
      { opacity: 0 }, // Start with opacity 0
      { opacity: 1, duration: 1 }, // Animate to opacity 1
      '+=0.5' // Delay between each paragraph fade-in
    )
    .to(
      paragraph,
      { opacity: 0, duration: 1 }, // Fade out to opacity 0
      '+=0.5' // Delay before the next fade-out starts
    );

  console.log(`Animation for paragraph ${i + 1} has been set.`);
});
