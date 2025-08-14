import { LOADER_SESSION_STORAGE_KEY } from './constants';

// Loader class constants
const LOADER_CLASS = 'home-loader_component';
const LOADER_NUMBER_CLASS = 'home-loader_number-sub-wrap';
const LOADER_NUMBER_TEXT_CLASS = 'home-loader_number';
const LOADER_NUMBER_WRAPPER_CLASS = 'home-loader_number-wrapper';
const LOADER_CENTER_BOLT_CLASS = 'home-loader_center-bolt';
const LOADER_CENTER_BOLT_WRAP_CLASS = 'home-loader_center-bolt-wrap';
const LOADER_CENTER_BOLT_PATH_CLASS = 'home-loader_center-bolt-path';
const BOLT_CLONE_GROUP_CLASS = 'bolt-clone-group';

/**
 * Loader class that handles the animation and display of the loader
 */
class Loader {
  private loaderElement: HTMLElement | null;
  private originalSvg: SVGSVGElement | null;
  private boltContainer: Element | null;
  private originalGroup: Element | null;
  private originalPath: Element | null;
  private duplicates: Element[] = [];
  private loaderTimeline: gsap.core.Timeline | null = null;
  private cachedElements: Map<string, Element | null> = new Map();
  private viewportMetrics: {
    width: number;
    height: number;
    diagonal: number;
    baseScale: number;
  } | null = null;

  constructor() {
    // Cache all DOM elements upfront
    this.loaderElement = document.querySelector(`.${LOADER_CLASS}`);
    this.originalSvg = document.querySelector(
      `.${LOADER_CENTER_BOLT_CLASS}`
    ) as SVGSVGElement | null;
    this.boltContainer = document.querySelector(`.${LOADER_CENTER_BOLT_WRAP_CLASS}`);
    this.originalGroup = this.originalSvg?.querySelector('g') || null;
    this.originalPath =
      this.originalSvg?.querySelector(`.${LOADER_CENTER_BOLT_PATH_CLASS}`) || null;

    // Cache frequently accessed elements
    this.cachedElements.set('numberEl', document.querySelector(`.${LOADER_NUMBER_TEXT_CLASS}`));
    this.cachedElements.set('cursorBackground', document.querySelector('.cursor_background'));

    // Pre-calculate viewport metrics
    this.calculateViewportMetrics();
  }

  /**
   * Initialize the loader and start the animation
   */
  public init(): void {
    // Check if loader has already been shown in this session
    const isLoaderShown = sessionStorage.getItem(LOADER_SESSION_STORAGE_KEY);

    // If loader has been shown before in this session, hide it immediately and return
    if (isLoaderShown === 'true' && this.loaderElement) {
      return;
    }

    // Setup the loader animation
    this.setupLoaderAnimation();
  }

  /**
   * Setup the loader animation with optimized sequencing
   */
  private setupLoaderAnimation(): void {
    // Create optimized main timeline
    this.loaderTimeline = gsap.timeline({
      defaults: {
        duration: 2.5,
        ease: 'power4.inOut',
      },
      // Enable performance optimization
      autoRemoveChildren: true,
    });

    // Setup operations in sequence for optimal performance
    this.setupBoltClones();
    this.setupNumberAnimation();
    this.setupBoltAnimation();
    this.setupFinalTransition();

    // Start the animation
    this.loaderTimeline.play();
    sessionStorage.setItem(LOADER_SESSION_STORAGE_KEY, 'true');

    window.IS_DEBUG_MODE && console.debug('Loader animation initialized and started');
  }

  /**
   * Pre-calculate viewport metrics for performance
   */
  private calculateViewportMetrics(): void {
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;
    const viewportDiagonal = Math.sqrt(
      viewportWidth * viewportWidth + viewportHeight * viewportHeight
    );

    if (this.originalSvg) {
      const boltRect = this.originalSvg.getBoundingClientRect();
      const baseScale = (viewportDiagonal / Math.max(boltRect.width, boltRect.height)) * 33;

      this.viewportMetrics = {
        width: viewportWidth,
        height: viewportHeight,
        diagonal: viewportDiagonal,
        baseScale,
      };
    }
  }

  /**
   * Setup bolt clones for animation
   */
  private setupBoltClones(): void {
    if (!this.originalSvg || !this.boltContainer || !this.originalGroup || !this.viewportMetrics)
      return;

    // Create clones using DocumentFragment for better performance
    const totalDuplicates = 25;
    const fragment = document.createDocumentFragment();

    for (let i = 1; i <= totalDuplicates; i++) {
      const groupClone = this.originalGroup.cloneNode(true) as SVGGElement;
      groupClone.classList.add(BOLT_CLONE_GROUP_CLASS);
      groupClone.id = `${BOLT_CLONE_GROUP_CLASS}-${i}`;

      fragment.appendChild(groupClone);
      this.duplicates.push(groupClone);
    }

    // Single DOM append operation
    this.originalSvg.appendChild(fragment);

    // Create a collection with original first, then all duplicates
    const allBoltGroups = [this.originalGroup, ...this.duplicates];

    // Set a consistent transform origin for the SVG
    gsap.set(this.originalSvg, {
      transformOrigin: 'center center',
    });

    // Initial setup for all bolt groups (large scale, rotated 90 degrees) - HAPPENS IMMEDIATELY
    gsap.set(allBoltGroups, {
      scale: (index) => this.viewportMetrics!.baseScale + index * 0.4,
      rotation: 90,
      transformOrigin: 'center center',
      svgOrigin: 'center center',
    });

    // Ensure the original path has no fill initially
    if (this.originalPath) {
      gsap.set(this.originalPath, {
        fill: 'none',
        stroke: 'black',
      });
    }
  }

  /**
   * Setup number animation
   */
  private setupNumberAnimation(): void {
    if (!this.loaderTimeline) return;

    const numberEl = this.cachedElements.get('numberEl');
    if (!numberEl) return;

    // Create a number animation timeline
    const numberTimeline = gsap.timeline();
    {
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
            right: 0,
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
      this.loaderTimeline.add(numberTimeline);
    }
  }

  /**
   * Setup bolt animation
   */
  private setupBoltAnimation(): void {
    if (!this.loaderTimeline || !this.originalGroup || this.duplicates.length === 0) return;

    const allBoltGroups = [this.originalGroup, ...this.duplicates];
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
    const allBoltPaths = [this.originalPath];

    // Add all clone paths to the collection
    this.duplicates.forEach((clone) => {
      const clonePath = clone.querySelector(`.${LOADER_CENTER_BOLT_PATH_CLASS}`);
      if (clonePath) allBoltPaths.push(clonePath);
    });

    // Get the computed value of the brand color from cached element
    const cursorBackground = this.cachedElements.get('cursorBackground');
    const brandRedColor = cursorBackground
      ? getComputedStyle(cursorBackground as Element).backgroundColor
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
    const clonesForTop = this.duplicates.slice(0, 4); // First 4 clones for top
    const clonesForBottom = this.duplicates.slice(4, 8); // Next 4 clones for bottom

    // Hide all other clones that won't be used in the stacking, but only after the red transition
    if (this.duplicates.length > 8) {
      boltTimeline.to(
        this.duplicates.slice(8),
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
    // Get all visible bolt paths (original + 8 clones)
    const visibleBoltPaths = [this.originalPath];
    [...clonesForTop, ...clonesForBottom].forEach((clone) => {
      const clonePath = clone.querySelector(`.${LOADER_CENTER_BOLT_PATH_CLASS}`);
      if (clonePath) visibleBoltPaths.push(clonePath);
    });

    // Create a master timeline for all path animations
    const pathAnimationTimeline = gsap.timeline();

    // Use pre-calculated viewport metrics for expansion
    const { width: screenWidth, height: screenHeight } = this.viewportMetrics!;
    const isPortrait = screenHeight > screenWidth;
    const expansionAmount = isPortrait ? screenWidth * 1.5 : screenWidth / 2;

    // Batch path animations for better performance
    const pathAnimations = visibleBoltPaths
      .filter((path) => path)
      .map((path) => this.createPathExpandAnimation(path!, expansionAmount, 1))
      .filter((tl): tl is gsap.core.Timeline => tl !== null);

    pathAnimations.forEach((tl) => pathAnimationTimeline.add(tl, 0));

    // Add the path animation timeline to the bolt timeline
    boltTimeline.add(pathAnimationTimeline, '>'); // Small delay after stacking

    // Add the bolt timeline to the main timeline
    this.loaderTimeline.add(boltTimeline, '-=1'); // Start 0.5s earlier than before
  }

  /**
   * Create optimized path expand animation using cached data
   */
  private createPathExpandAnimation(
    pathElement: Element,
    maxOffset = 10,
    duration = 1.2
  ): gsap.core.Timeline | null {
    const originalPathData = pathElement.getAttribute('d');
    if (!originalPathData) return null;

    // Cache parsed path data to avoid repeated parsing
    const cacheKey = `path-${pathElement.id || 'default'}`;
    let originalPoints = this.cachedElements.get(cacheKey) as any[] | null;

    if (!originalPoints) {
      originalPoints = this.parsePathData(originalPathData);
      this.cachedElements.set(cacheKey, originalPoints as any);
    }

    // Use optimized animation state with fewer calculations
    const state = { offset: 0 };
    const midpoint = Math.floor(originalPoints.length / 2);

    return gsap.timeline().to(state, {
      offset: maxOffset,
      duration,
      ease: 'power4.inOut',
      onUpdate: () =>
        this.updatePathElement(
          pathElement,
          originalPoints,
          state.offset,
          midpoint,
          originalPathData
        ),
    });
  }

  /**
   * Parse SVG path data into reusable point array
   */
  private parsePathData(pathData: string): any[] {
    const pathCommands = pathData.match(/[a-zA-Z][^a-zA-Z]*/g) || [];
    const points: any[] = [];

    pathCommands.forEach((cmd) => {
      const command = cmd.charAt(0);
      const isAbsolute = command === command.toUpperCase();
      const values = cmd
        .substring(1)
        .trim()
        .split(/[\s,]+/)
        .map(parseFloat);

      switch (command.toUpperCase()) {
        case 'M':
        case 'L':
          for (let i = 0; i < values.length; i += 2) {
            points.push({ command, x: values[i], y: values[i + 1], isAbsolute });
          }
          break;
        case 'H':
          values.forEach((x) => points.push({ command, x, y: 0, isAbsolute }));
          break;
        case 'V':
          values.forEach((y) => points.push({ command, x: 0, y, isAbsolute }));
          break;
        case 'Z':
          points.push({ command, x: 0, y: 0, isAbsolute: true });
          break;
      }
    });

    return points;
  }

  /**
   * Optimized path element update with minimal string operations
   */
  private updatePathElement(
    element: Element,
    points: any[],
    offset: number,
    midpoint: number,
    originalData: string
  ): void {
    if (offset === 0) {
      element.setAttribute('d', originalData);
      return;
    }

    let newPathData = '';
    points.forEach((point, index) => {
      const direction = index < midpoint ? -1 : 1;
      const xOffset = direction * offset;
      let newX = point.x;

      if (point.command.toUpperCase() !== 'Z' && point.command.toUpperCase() !== 'V') {
        newX = point.x + xOffset;
      }

      const cmd = point.command.toUpperCase();
      if (cmd === 'M') newPathData += `M${newX} ${point.y}`;
      else if (cmd === 'L') newPathData += `L${newX} ${point.y}`;
      else if (cmd === 'H') newPathData += `H${newX}`;
      else if (cmd === 'V') newPathData += `V${point.y}`;
      else if (cmd === 'Z') newPathData += 'Z';
    });

    element.setAttribute('d', newPathData);
  }

  /**
   * Setup final transition
   */
  private setupFinalTransition(): void {
    if (!this.loaderTimeline) return;

    // 3. Final transition to content
    this.loaderTimeline.to(
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
  }

  /**
   * Get the loader timeline
   */
  public getTimeline(): gsap.core.Timeline | null {
    return this.loaderTimeline;
  }
}

// Initialize the loader instantly
const loader = new Loader();
loader.init();
