// Select the elements
const progressLine = document.querySelector('.post-content_progress');
const tocLinks = document.querySelectorAll('.post-content_link');
const container = document.querySelector('.post-content_link-content');

// Function to update progress line
function updateProgressLine() {
  // Find all links with the `.w--current` class
  const currentLinks = Array.from(tocLinks).filter((link) => link.classList.contains('w--current'));

  if (currentLinks.length === 0) return; // No current link found

  // Calculate the total height based on all current links
  const containerTop = container.getBoundingClientRect().top;

  // Find the bottom-most link with `.w--current`
  const lastCurrentLink = currentLinks[currentLinks.length - 1];
  const currentLinkTop = lastCurrentLink.getBoundingClientRect().top;

  const height = currentLinkTop - containerTop;

  // Animate the progress line height
  gsap.to(progressLine, {
    height: height,
    duration: 0.5,
    ease: 'power2.out',
    //scrub: true,
  });
}

// Initial update
updateProgressLine();

// Update the progress line on scroll
window.addEventListener('scroll', updateProgressLine);
