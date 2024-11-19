const bookMoveTarget = document.querySelector<HTMLElement>('.section_home-tabs');

const handleMouseMove = (event: MouseEvent): void => {
  const width = window.innerWidth;
  const height = window.innerHeight;

  const mouseX = event.clientX / width;
  const mouseY = event.clientY / height;

  const rotationY = -30 + mouseX * 60; // Range mapped from -30deg to +30deg
  const rotationX = 10 - mouseY * 20; // Range mapped from +10deg to -10deg

  // Select only the .book-container inside .w--tab-active
  const activeBookContainers = document.querySelectorAll<HTMLElement>(
    '.w--tab-active .book-container'
  );

  // Iterate over active book containers and apply the styles
  activeBookContainers.forEach((bookContainer) => {
    bookContainer.style.setProperty('--book-rotationY', `${rotationY}deg`);
    bookContainer.style.setProperty('--book-rotationX', `${rotationX}deg`);
  });
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

const scrollContainer = document.querySelector('.scrub-intro_scroll-container');
const paragraphWrappers = document.querySelectorAll('.scrub-intro_paragraph-wrapper');
const numParagraphs = paragraphWrappers.length;

// Set initial opacity and scale for all paragraph wrappers
window.gsap.set(paragraphWrappers, {
  opacity: 0,
  scale: 1,
});

// ScrollTrigger setup
ScrollTrigger.create({
  trigger: scrollContainer,
  start: 'top top',
  end: 'bottom bottom',
  scrub: true,
  onUpdate: (self) => {
    const progress = self.progress * numParagraphs; // Map scroll progress to paragraph index
    const activeIndex = Math.floor(progress); // Determine which paragraph is active
    const localProgress = progress - activeIndex; // Progress within the current section (0 to 1)

    paragraphWrappers.forEach((wrapper, index) => {
      if (index === activeIndex) {
        // Animate current paragraph based on localProgress
        window.gsap.to(wrapper, {
          opacity: window.gsap.utils.clamp(0, 1, localProgress * 2), // Fade in (0 to 1)
          scale: window.gsap.utils.interpolate(0.5, 1, localProgress * 2), // Scale from 0.5 to 1
          overwrite: true,
        });

        // Animate text within the paragraph
        const text = wrapper.querySelector('p');
        if (!text.split) {
          text.split = new SplitType(text, { types: ['chars', 'words'] });
        }

        const chars = text.split.chars;
        window.gsap.fromTo(
          chars,
          {
            opacity: 0.2,
          },
          {
            opacity: 1,
            stagger: 0.05,
            duration: 0.3,
            ease: 'power2.out',
          }
        );
      } else if (index < activeIndex) {
        // Previous paragraphs: Fully fade out and scale down
        window.gsap.to(wrapper, {
          opacity: 0,
          scale: 0.5,
          overwrite: true,
        });
      } else {
        // Upcoming paragraphs: Set to initial state
        window.gsap.set(wrapper, {
          opacity: 0,
          scale: 1,
          overwrite: true,
        });
      }
    });
  },
});
