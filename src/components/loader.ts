export function loaderAnimation() {
  // GSAP Loader Animation Sequence
  // Main timeline
  const loaderTimeline = gsap.timeline({
    defaults: {
      duration: 2.5, // Default duration for animations
      ease: 'power4.inOut', // Default easing for animations
      /* Common timing controls:
  ">>"     = start after all previous animations
  "<"      = start at same time as previous
  "-=0.5"  = start 0.5s before previous ends
  "+=0.5"  = start 0.5s after previous ends
  "2"      = start at absolute time 2s
*/
    },
  });

  // Reference to the original bolt SVG and its containers
  const originalSvg = document.querySelector('.loader_center-bolt') as SVGSVGElement | null;
  const boltContainer = document.querySelector('.loader_center-bolt-wrap');

  // Setup bolt clones immediately
  const totalDuplicates = 25;
  const duplicates: Element[] = [];
  let originalGroup: Element | null = null;
  let originalPath: Element | null = null;

  if (originalSvg && boltContainer) {
    // Get the original group
    originalGroup = originalSvg.querySelector('g');

    if (!originalGroup) return; // Safety check

    // Get the original path for later fill animation
    originalPath = originalSvg.querySelector('.loader_center-bolt-path');

    // Calculate scale needed to ensure elements are off-screen
    // Get viewport dimensions
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;

    // Get the bolt container dimensions
    const boltRect = originalSvg.getBoundingClientRect();
    const boltWidth = boltRect.width;
    const boltHeight = boltRect.height;

    // Calculate the diagonal length of the viewport
    const viewportDiagonal = Math.sqrt(
      viewportWidth * viewportWidth + viewportHeight * viewportHeight
    );

    // Calculate scale needed to make the bolt larger than the viewport diagonal
    // Adding a safety factor to ensure it's completely off-screen
    const baseScale = (viewportDiagonal / Math.max(boltWidth, boltHeight)) * 33;

    // Create clones of the group and add them to the original SVG
    for (let i = 1; i <= totalDuplicates; i++) {
      // Clone the group with all its nested structure
      const groupClone = originalGroup.cloneNode(true) as SVGGElement;

      // Add classes for styling and identification
      groupClone.classList.add('bolt-clone-group');
      groupClone.id = `bolt-clone-group-${i}`;

      // Add the cloned group to the original SVG
      originalSvg.appendChild(groupClone);

      // Store the group for animation
      duplicates.push(groupClone);
    }

    // Create a collection with original first, then all duplicates
    const allBoltGroups = [originalGroup, ...duplicates];

    // Set a consistent transform origin for the SVG
    gsap.set(originalSvg, {
      transformOrigin: 'center center',
    });

    // Initial setup for all bolt groups (large scale, rotated 90 degrees) - HAPPENS IMMEDIATELY
    gsap.set(allBoltGroups, {
      scale: (index) => baseScale + index * 0.4, // Dynamic scale based on viewport size
      rotation: 90,
      transformOrigin: 'center center', // Consistent transform origin
      svgOrigin: 'center center', // SVG-specific origin setting
    });

    // Ensure the original path has no fill initially
    if (originalPath) {
      gsap.set(originalPath, {
        fill: 'none',
        stroke: 'black',
      });
    }
  }

  // Create a number animation timeline
  const numberTimeline = gsap.timeline();

  // 1. Number Animation (0% to 100% with movement and scaling)
  numberTimeline
    .to('.loader_number-text > span', {
      innerText: 100,
      snap: {
        innerText: 1,
      },
      duration: 2.0,
    })
    .to(
      '.loader_number',
      {
        scale: 2,
        duration: 2.0,
      },
      '<'
    )
    .to(
      '.loader_number-wrapper',
      {
        right: '2rem',
        duration: 2.0,
      },
      '<'
    ) // Run simultaneously with the percentage count
    // Add the number disappear animation immediately after the number reaches 100
    .to(
      '.loader_number *',
      {
        yPercent: 200, // Move up 100% of its own height
        duration: 0.8,
        ease: 'power2.inOut',
      },
      '+=0.3' // Small delay after reaching 100
    );

  // Add the number timeline to the main timeline
  loaderTimeline.add(numberTimeline);

  // 2. Bolt Animation - Create a separate timeline for bolt animation
  if (originalGroup && duplicates.length > 0) {
    const allBoltGroups = [originalGroup, ...duplicates];
    const boltTimeline = gsap.timeline();

    // Main bolt animation - converge to center with staggered timing
    boltTimeline.to(allBoltGroups, {
      scale: 1, // Scale back to normal
      rotation: 0, // Return to upright position
      duration: 1,
      ease: 'power3.inOut',
      transformOrigin: 'center center', // Ensure consistent transform origin during animation
      svgOrigin: 'center center', // SVG-specific origin setting
      stagger: {
        amount: 0.5, // Total amount of stagger time
        from: 'start', // Start from the first element
        ease: 'power2.in',
      },
    });

    // Flash effect at culmination
    boltTimeline.to('.bolt-clone-group', {
      opacity: 1,
      duration: 0.15,
    });

    // Instead of fading out clones, fill all bolts (original and clones) with black
    // Create a selector that targets both the original bolt path and all clone paths
    const allBoltPaths = [originalPath];

    // Add all clone paths to the collection
    duplicates.forEach((clone) => {
      const clonePath = clone.querySelector('.loader_center-bolt-path');
      if (clonePath) allBoltPaths.push(clonePath);
    });

    // Fill all bolts with black simultaneously
    boltTimeline.to(
      allBoltPaths,
      {
        fill: 'black',
        stroke: 'black',
        duration: 0.4,
        ease: 'power2.inOut',
      },
      '+=0.1' // Small delay after the flash effect
    );

    // Add the bolt timeline to the main timeline
    loaderTimeline.add(boltTimeline, '-=1'); // Start 0.5s earlier than before
  }

  // 3. Final transition to content
  loaderTimeline.to(
    '.loader',
    {
      duration: 0.8,
      ease: 'power2.inOut',
      onComplete: () => {
        //document.querySelector('.loader').style.display = 'none';
      },
    },
    '+=0.3'
  ); // Small pause after number disappears

  // Start the animation
  loaderTimeline.play();

  console.log('Loader animation initialized and started');

  return loaderTimeline; // Return the timeline in case it needs to be controlled externally
}
