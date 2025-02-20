const NAVBAR = document.querySelector('.nav_component') as HTMLElement;
const ANIMATION_DURATION: number = 0.5; // Duration in seconds
const ANIMATION_EASE: string = 'power4.inOut'; // Easing function

export function navHideShow() {
  let lastScrollTop: number = 0;
  let isAnimating: boolean = false;

  const handleScroll = (): void => {
    if (isAnimating) return;

    const scrollTop: number = window.scrollY || document.documentElement.scrollTop;
    const scrollDelta: number = scrollTop - lastScrollTop;

    // Animate navbar based on scroll direction
    if (scrollDelta > 0) {
      isAnimating = true;
      window.gsap.to(NAVBAR, {
        yPercent: -100,
        duration: ANIMATION_DURATION,
        ease: ANIMATION_EASE,
        onComplete: () => {
          isAnimating = false;
        },
      });
    } else if (scrollDelta < 0) {
      isAnimating = true;
      window.gsap.to(NAVBAR, {
        yPercent: 0,
        duration: ANIMATION_DURATION,
        ease: ANIMATION_EASE,
        onComplete: () => {
          isAnimating = false;
        },
      });
    }

    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
  };

  window.addEventListener('scroll', handleScroll);
}
