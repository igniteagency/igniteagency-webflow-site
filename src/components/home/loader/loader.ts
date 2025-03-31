// TODO: add loader session detection and hide code in the head area
import { SCRIPTS_LOADED_EVENT } from '$src/constants';

import { LOADER_SESSION_STORAGE_KEY } from './constants';

window.addEventListener(SCRIPTS_LOADED_EVENT, () => {
  loaderAnimation();
});

// Loader class constants
const LOADER_CLASS = 'home-loader';
const LOADER_NUMBER_CLASS = 'home-loader_number-sub-wrap';
const LOADER_NUMBER_TEXT_CLASS = 'home-loader_number';
const LOADER_NUMBER_WRAPPER_CLASS = 'home-loader_number-wrapper';
const LOADER_CENTER_BOLT_CLASS = 'home-loader_center-bolt';
const LOADER_CENTER_BOLT_WRAP_CLASS = 'home-loader_center-bolt-wrap';
const LOADER_CENTER_BOLT_PATH_CLASS = 'home-loader_center-bolt-path';
const BOLT_CLONE_GROUP_CLASS = 'bolt-clone-group';

function loaderAnimation() {
  // Check if loader has already been shown in this session
  const isLoaderShown = sessionStorage.getItem(LOADER_SESSION_STORAGE_KEY);

  // Get the loader element
  const loaderElement = document.querySelector(`.${LOADER_CLASS}`);

  // If loader has been shown before in this session, hide it immediately and return
  // if (isLoaderShown === 'true' && loaderElement) {
  //   loaderElement.style.display = 'none';
  //   return;
  // }

  // Mark that the loader has been shown for this session
  sessionStorage.setItem(LOADER_SESSION_STORAGE_KEY, 'true');

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
  const originalSvg = document.querySelector(
    `.${LOADER_CENTER_BOLT_CLASS}`
  ) as SVGSVGElement | null;
  const boltContainer = document.querySelector(`.${LOADER_CENTER_BOLT_WRAP_CLASS}`);

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
    originalPath = originalSvg.querySelector(`.${LOADER_CENTER_BOLT_PATH_CLASS}`);

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
      groupClone.classList.add(BOLT_CLONE_GROUP_CLASS);
      groupClone.id = `${BOLT_CLONE_GROUP_CLASS}-${i}`;

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
  const numberEl = document.querySelector(`.${LOADER_NUMBER_TEXT_CLASS}`);

  if (numberEl) {
    const numberValue = { val: 0 };

    // 1. Number Animation (0% to 100% with movement and scaling)
    numberTimeline
      .to(numberValue, {
        val: 100,
        duration: 2.0,
        onUpdate: () => {
          numberEl.textContent = Math.round(numberValue.val).toString();
        },
      })
      .to(
        `.${LOADER_NUMBER_CLASS}`,
        {
          scale: 2,
          duration: 2.0,
        },
        '<'
      )
      .to(
        `.${LOADER_NUMBER_WRAPPER_CLASS}`,
        {
          right: '3rem',
          duration: 2.0,
        },
        '<'
      ) // Run simultaneously with the percentage count
      // Add the number disappear animation immediately after the number reaches 100
      .to(
        `.${LOADER_NUMBER_CLASS} > *`,
        {
          yPercent: 200, // Move up 100% of its own height
          duration: 0.8,
          ease: 'power2.inOut',
        },
        '+=0.1' // Small delay after reaching 100
      );

    // Add the number timeline to the main timeline
    loaderTimeline.add(numberTimeline);
  }

  // 2. Bolt Animation - Create a separate timeline for bolt animation
  if (originalGroup && duplicates.length > 0) {
    const allBoltGroups = [originalGroup, ...duplicates];
    const boltTimeline = gsap.timeline();

    // Main bolt animation - converge to center with staggered timing
    boltTimeline.to(allBoltGroups, {
      scale: 1, // Scale back to normal
      rotation: 0, // Return to upright position
      duration: 1.2,
      ease: 'power4.inOut',
      transformOrigin: 'center center', // Ensure consistent transform origin during animation
      svgOrigin: 'center center', // SVG-specific origin setting
      stagger: {
        amount: 0.3, // Total amount of stagger time
        from: 'start', // Start from the first element
        ease: 'power2.in',
      },
    });

    // Flash effect at culmination
    boltTimeline.to(`.${BOLT_CLONE_GROUP_CLASS}`, {
      opacity: 1,
      duration: 0.15,
    });

    // Instead of fading out clones, fill all bolts (original and clones) with black
    // Create a selector that targets both the original bolt path and all clone paths
    const allBoltPaths = [originalPath];

    // Add all clone paths to the collection
    duplicates.forEach((clone) => {
      const clonePath = clone.querySelector(`.${LOADER_CENTER_BOLT_PATH_CLASS}`);
      if (clonePath) allBoltPaths.push(clonePath);
    });

    // Get the computed value of the brand color from an existing element
    const cursorBackground = document.querySelector('.cursor_background');
    const brandRedColor = cursorBackground
      ? getComputedStyle(cursorBackground).backgroundColor
      : '#ff0000';

    // Scale up all bolts and transition to red
    boltTimeline.to(
      allBoltGroups,
      {
        scale: 1.2, // Scale up slightly
        duration: 0.4,
      },
      '-=0.2' // Small delay after turning black
    );

    boltTimeline.to(
      allBoltPaths,
      {
        fill: brandRedColor, // Use the computed color value for smooth transition
        stroke: brandRedColor,
        duration: 0.4,
      },
      '<' // Start at the same time as the scale up
    );

    // Reposition clones to stack vertically
    // Use exactly 4 clones for top and 4 for bottom, but keep all clones visible until now
    const clonesForTop = duplicates.slice(0, 4); // First 4 clones for top
    const clonesForBottom = duplicates.slice(4, 8); // Next 4 clones for bottom

    // Hide all other clones that won't be used in the stacking, but only after the red transition
    if (duplicates.length > 8) {
      boltTimeline.to(
        duplicates.slice(8),
        {
          opacity: 0,
          duration: 0.2,
        },
        '>' // Small delay after turning red
      );
    }

    // Stack the first 4 clones above the original
    boltTimeline.to(
      clonesForTop,
      {
        yPercent: (index) => -63 * (index + 1), // -63, -126, -189, -252
        xPercent: (index) => -79 * (index + 1), // -79, -158, -237, -316
        duration: 0.8,
        ease: 'power4.out',
        stagger: {
          amount: 0.1,
          from: 'end', // Start from the furthest one
        },
      },
      '>' // Small delay after turning red
    );

    // Stack the next 4 clones below the original
    boltTimeline.to(
      clonesForBottom,
      {
        yPercent: (index) => 63 * (index + 1), // 63, 126, 189, 252
        xPercent: (index) => 79 * (index + 1), // 79, 158, 237, 316
        duration: 0.8,
        ease: 'power4.out',
        stagger: {
          amount: 0.1,
          from: 'start', // Start from the closest one
        },
      },
      '<' // Start at the same time as the upper stack
    );

    // Path animation for all visible bolts (original + 8 clones)
    // Function to create path animation for each SVG path
    function createPathExpandAnimation(pathElement: Element, maxOffset = 10, duration = 1.2) {
      // Get the original path data
      const originalPathData = pathElement.getAttribute('d');
      if (!originalPathData) return null;

      // Parse the path data to extract points
      // This is a simplified approach - in a real implementation, you'd need a more robust path parser
      const pathCommands = originalPathData.match(/[a-zA-Z][^a-zA-Z]*/g) || [];
      const originalPoints: { command: string; x: number; y: number; isAbsolute: boolean }[] = [];

      // Parse each command in the path
      pathCommands.forEach((cmd) => {
        const command = cmd.charAt(0);
        const isAbsolute = command === command.toUpperCase();
        const values = cmd
          .substring(1)
          .trim()
          .split(/[\s,]+/)
          .map(parseFloat);

        // Handle different command types (M, L, H, V, Z, etc.)
        switch (command.toUpperCase()) {
          case 'M': // Move to
          case 'L': // Line to
            for (let i = 0; i < values.length; i += 2) {
              originalPoints.push({
                command: command,
                x: values[i],
                y: values[i + 1],
                isAbsolute,
              });
            }
            break;
          case 'H': // Horizontal line
            values.forEach((x) => {
              originalPoints.push({
                command: command,
                x,
                y: 0, // Y doesn't change for H command
                isAbsolute,
              });
            });
            break;
          case 'V': // Vertical line
            values.forEach((y) => {
              originalPoints.push({
                command: command,
                x: 0, // X doesn't change for V command
                y,
                isAbsolute,
              });
            });
            break;
          case 'Z': // Close path
            originalPoints.push({
              command: command,
              x: 0,
              y: 0,
              isAbsolute: true,
            });
            break;
          // Add more cases for other SVG path commands as needed
        }
      });

      // Create animation state object
      const state = { offset: 0 };

      // Create update function for this specific path
      const update = () => {
        const offset = state.offset;

        // Apply offsets to create the animation effect
        // For the first half of points, move left/up
        // For the second half, move right/down
        const midpoint = Math.floor(originalPoints.length / 2);

        let newPathData = '';

        originalPoints.forEach((point, index) => {
          // Determine direction of offset based on point position
          const direction = index < midpoint ? -1 : 1;
          const xOffset = direction * offset;

          // Apply offset based on command type
          let newX = point.x;
          let newY = point.y;

          if (point.command.toUpperCase() !== 'Z') {
            if (point.command.toUpperCase() !== 'V') {
              newX = point.x + xOffset;
            }
          }

          // Build the new path data
          if (point.command.toUpperCase() === 'M') {
            newPathData += `M${newX} ${newY}`;
          } else if (point.command.toUpperCase() === 'L') {
            newPathData += `L${newX} ${newY}`;
          } else if (point.command.toUpperCase() === 'H') {
            newPathData += `H${newX}`;
          } else if (point.command.toUpperCase() === 'V') {
            newPathData += `V${newY}`;
          } else if (point.command.toUpperCase() === 'Z') {
            newPathData += 'Z';
          }
        });

        // Update the path element with new data
        pathElement.setAttribute('d', newPathData);
      };

      // Create a timeline for this path animation
      const pathTl = gsap.timeline();

      // Add animation to the timeline
      pathTl.to(state, {
        offset: maxOffset,
        duration: duration,
        ease: 'power4.inOut',
        onUpdate: update,
      });

      return pathTl;
    }

    // Get all visible bolt paths (original + 8 clones)
    const visibleBoltPaths = [originalPath];
    [...clonesForTop, ...clonesForBottom].forEach((clone) => {
      const clonePath = clone.querySelector(`.${LOADER_CENTER_BOLT_PATH_CLASS}`);
      if (clonePath) visibleBoltPaths.push(clonePath);
    });

    // Create a master timeline for all path animations
    const pathAnimationTimeline = gsap.timeline();

    // Calculate expansion amount based on half the screen width
    const screenWidth = window.innerWidth;
    const expansionAmount = screenWidth / 2;

    // Add path animations with no stagger
    visibleBoltPaths.forEach((path, index) => {
      if (path) {
        const pathTl = createPathExpandAnimation(path, expansionAmount, 1);
        if (pathTl) {
          pathAnimationTimeline.add(pathTl, 0);
        }
      }
    });

    // Add the path animation timeline to the bolt timeline
    boltTimeline.add(pathAnimationTimeline, '>'); // Small delay after stacking

    // Add the bolt timeline to the main timeline
    loaderTimeline.add(boltTimeline, '-=1'); // Start 0.5s earlier than before
  }

  // 3. Final transition to content
  loaderTimeline.to(
    `.${LOADER_CLASS}`,
    {
      duration: 0.5,
      ease: 'power2.inOut',
      yPercent: -100,
      onComplete: () => {
        const loader = document.querySelector(`.${LOADER_CLASS}`);
        if (loader) {
          loader.style.display = 'none';
        }
      },
    },
    '-=0.2'
  );

  // Start the animation
  loaderTimeline.play();

  console.debug('Loader animation initialized and started');

  return loaderTimeline; // Return the timeline in case it needs to be controlled externally
}
