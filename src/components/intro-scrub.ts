export function initIntroScrubText() {
  // Select all paragraph wrappers and the scroll container
  const paragraphWrappers = document.querySelectorAll('.scrub-intro_paragraph-wrapper');
  const scrollContainer = document.querySelector('.scrub-intro_scroll-container');
  const imageWrapper = document.querySelector('.scrub-intro_image-wrapper');

  if (!scrollContainer || paragraphWrappers.length === 0) {
    return;
  }

  // Handle image animation
  if (imageWrapper) {
    gsap.to(imageWrapper, {
      scrollTrigger: { trigger: scrollContainer, start: 'top 20%', end: 'top top', scrub: true },
      scale: 0.8,
      opacity: 0.5,
    });
  }

  // Setup CSS custom property based text reveal (no SplitText needed)
  const paragraphData: Array<{
    paragraph: HTMLElement;
    wrapper: HTMLElement;
    textLength: number;
    effectiveLength: number;
  }> = [];

  let totalTextLength = 0;
  const minTextLength = 40; // Minimum for very short paragraphs

  // First pass: setup paragraphs and calculate text lengths
  paragraphWrappers.forEach((wrapper, idx) => {
    const paragraph = wrapper.querySelector('.scrub-intro_paragraph') as HTMLElement;
    if (!paragraph) return;

    const textLength = paragraph.textContent?.length || 0;
    const effectiveLength = Math.max(textLength, minTextLength);

    // Set initial background-size for line-by-line gradient reveal - all start at 0%
    paragraph.style.backgroundSize = '0% 100%';

    paragraphData.push({
      paragraph,
      wrapper: wrapper as HTMLElement,
      textLength,
      effectiveLength,
    });

    totalTextLength += effectiveLength;

    // Set initial wrapper opacity
    gsap.set(wrapper, { opacity: idx === 0 ? 1 : 0 });
  });

  // Set scroll container height
  if (totalTextLength > 0) {
    (scrollContainer.children[0] as HTMLElement).style.height =
      `${paragraphWrappers.length * 100}vh`;
  }

  // Create main timeline for sequencing the paragraphs (much more performant)
  const mainTimeline = gsap.timeline({
    scrollTrigger: {
      trigger: scrollContainer,
      start: 'top top',
      end: 'bottom bottom',
      scrub: 0.5, // Small amount of smoothing
    },
  });

  // Distribute the timeline across the full scroll
  let progress = 0;

  // Create animations for each paragraph using CSS custom properties
  paragraphData.forEach(({ paragraph, wrapper, effectiveLength }, index) => {
    const isLastParagraph = index === paragraphData.length - 1;
    const isFirstParagraph = index === 0;

    // Calculate how much of the timeline this paragraph should occupy
    const progressPortion = effectiveLength / totalTextLength;

    // Create a timeline for this paragraph
    const paragraphTimeline = gsap.timeline();

    // Fixed proportions for each animation phase
    const FADE_IN_PROPORTION = 0.05; // 5% of paragraph time
    const TEXT_REVEAL_PROPORTION = 0.15; // 15% of paragraph time
    const HOLD_PROPORTION = 0.65; // 65% of paragraph time
    const FADE_OUT_PROPORTION = 0.15; // 15% of paragraph time

    // For the first paragraph, skip the fade-in since it's already visible
    if (!isFirstParagraph) {
      paragraphTimeline.to(
        wrapper,
        { opacity: 1, duration: progressPortion * FADE_IN_PROPORTION, ease: 'power1.in' },
        0
      );
    }

    // Animate text reveal using background-size (line-by-line gradient fill)
    paragraphTimeline.to(
      paragraph,
      {
        backgroundSize: '110% 100%',
        duration: progressPortion * (TEXT_REVEAL_PROPORTION + HOLD_PROPORTION),
        ease: 'none', // Linear ease for consistent reveal
      },
      isFirstParagraph ? 0 : progressPortion * FADE_IN_PROPORTION
    );

    // Only add fade-out for paragraphs that aren't the last one
    if (!isLastParagraph) {
      paragraphTimeline.to(
        wrapper,
        { opacity: 0, duration: progressPortion * FADE_OUT_PROPORTION, ease: 'power1.out' },
        progressPortion *
          (isFirstParagraph
            ? TEXT_REVEAL_PROPORTION + HOLD_PROPORTION
            : FADE_IN_PROPORTION + TEXT_REVEAL_PROPORTION + HOLD_PROPORTION)
      );
    }

    // Add this paragraph's timeline to the main timeline
    mainTimeline.add(paragraphTimeline, progress);

    // Update progress for next paragraph
    progress += progressPortion;
  });
}
