import Matter from 'matter-js';
import { SCRIPTS_LOADED_EVENT } from 'src/constants';
import Swiper from 'swiper';

import { showerConfetti } from '$components/home/confetti';
window.addEventListener(SCRIPTS_LOADED_EVENT, () => {
  setHorizontalScrollWrapperHeight();
  featuredWorkSlider();
  showerConfetti();
  rainEmojis();
  initDraggableElements();
  introScrubText();
});

function introScrubText() {
  // Select all paragraph wrappers and the scroll container
  const paragraphWrappers = document.querySelectorAll('.scrub-intro_paragraph-wrapper');
  const scrollContainer = document.querySelector('.scrub-intro_scroll-container');
  const imageWrapper = document.querySelector('.scrub-intro_image-wrapper');

  if (!scrollContainer) {
    console.warn('Scroll container not found for intro scrub text');
    return;
  }

  // Handle image animation
  if (imageWrapper) {
    gsap.to(imageWrapper, {
      scrollTrigger: {
        trigger: scrollContainer,
        start: 'top 20%',
        end: 'top top',
        scrub: true,
      },
      scale: 0.8,
      opacity: 0.5,
    });
  }

  // Initialize SplitType for all paragraphs
  const splitTexts: any[] = [];
  let totalChars = 0;
  let minCharsPerParagraph = 40; // Minimum character count for very short paragraphs

  // First pass: split text and count characters
  paragraphWrappers.forEach((wrapper, idx) => {
    const paragraph = wrapper.querySelector('.scrub-intro_paragraph');
    if (!paragraph) return;

    // Split the paragraph text into characters
    const split = new window.SplitType(paragraph, { types: ['words', 'chars'] });

    // Count characters for this paragraph
    const chars = paragraph.querySelectorAll('.char');
    // Apply minimum character count for very short paragraphs
    const effectiveCharCount = Math.max(chars.length, minCharsPerParagraph);

    splitTexts.push({
      split,
      paragraph,
      wrapper,
      charCount: chars.length,
      effectiveCharCount, // Store the effective count for timeline calculations
    });

    totalChars += effectiveCharCount;

    // Set initial state
    gsap.set(chars, { opacity: 0.3 });

    // Set initial opacity - first paragraph visible, others hidden
    gsap.set(wrapper, { opacity: idx === 0 ? 1 : 0 });
  });

  // Set scroll container height based on total character count
  // This is the main control for animation speed - adjust this multiplier to change overall speed
  if (totalChars > 0) {
    // Base height on character count - this makes longer paragraphs take more scroll distance
    const SCROLL_MULTIPLIER = 30; // Lower = faster animation
    const containerHeight = totalChars * SCROLL_MULTIPLIER;
    (scrollContainer as HTMLElement).style.height = `${containerHeight}px`;
  }

  // Create main timeline for sequencing the paragraphs
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

  // Create animations for each paragraph
  splitTexts.forEach(({ split, paragraph, wrapper, charCount, effectiveCharCount }, index) => {
    const chars = paragraph.querySelectorAll('.char');
    const isLastParagraph = index === splitTexts.length - 1;
    const isFirstParagraph = index === 0;

    // Calculate how much of the timeline this paragraph should occupy
    // based on its effective character count relative to total
    const progressPortion = effectiveCharCount / totalChars;

    // Create a timeline for this paragraph
    const paragraphTimeline = gsap.timeline();

    // Fixed proportions for each animation phase
    const FADE_IN_PROPORTION = 0.05; // 5% of paragraph time
    const CHAR_ANIMATION_PROPORTION = 0.1; // 10% of paragraph time
    const HOLD_PROPORTION = 0.7; // 70% of paragraph time
    const FADE_OUT_PROPORTION = 0.15; // 15% of paragraph time

    // Fixed stagger value - small enough to be quick but visible
    const CHAR_STAGGER = 0.003;

    // For the first paragraph, skip the fade-in since it's already visible
    if (!isFirstParagraph) {
      paragraphTimeline.to(
        wrapper,
        {
          opacity: 1,
          duration: progressPortion * FADE_IN_PROPORTION,
          ease: 'power1.in',
        },
        0
      );
    }

    // Animate characters
    paragraphTimeline.to(
      chars,
      {
        opacity: 1,
        duration: progressPortion * CHAR_ANIMATION_PROPORTION,
        stagger: {
          each: CHAR_STAGGER,
          from: 'start',
        },
        ease: 'none', // Linear ease for consistent character reveal
      },
      isFirstParagraph ? 0 : progressPortion * FADE_IN_PROPORTION // For first paragraph, start right away
    );

    // Hold at full visibility
    paragraphTimeline.to(
      {},
      {
        duration: progressPortion * HOLD_PROPORTION,
      },
      progressPortion *
        (isFirstParagraph
          ? CHAR_ANIMATION_PROPORTION
          : FADE_IN_PROPORTION + CHAR_ANIMATION_PROPORTION) // Adjust start time for first paragraph
    );

    // Only add fade-out for paragraphs that aren't the last one
    if (!isLastParagraph) {
      paragraphTimeline.to(
        wrapper,
        {
          opacity: 0,
          duration: progressPortion * FADE_OUT_PROPORTION,
          ease: 'power1.out',
        },
        progressPortion *
          (isFirstParagraph
            ? CHAR_ANIMATION_PROPORTION + HOLD_PROPORTION
            : FADE_IN_PROPORTION + CHAR_ANIMATION_PROPORTION + HOLD_PROPORTION) // Adjust start time for first paragraph
      );
    }

    // Add this paragraph's timeline to the main timeline
    mainTimeline.add(paragraphTimeline, progress);

    // Update progress for next paragraph
    progress += progressPortion;
  });
}

function setHorizontalScrollWrapperHeight() {
  const WRAPPER_SECTION_SELECTOR = '.section_reveal-wrapper';
  const wrapperSectionEl = document.querySelector(WRAPPER_SECTION_SELECTOR);
  if (!wrapperSectionEl) {
    console.warn(`Horizontal scroll section reveal wrapper not found: ${WRAPPER_SECTION_SELECTOR}`);
    return;
  }

  const childrenElList = wrapperSectionEl.children;

  function setHeight() {
    window.gsap.set(wrapperSectionEl, {
      height: () => {
        return Array.from(childrenElList).reduce((acc, child) => {
          return acc + (child as HTMLElement).offsetHeight;
        }, 0);
      },
    });
  }

  // Set initial height
  setHeight();

  // Create a resize observer to update height when window resizes
  window.ScrollTrigger.addEventListener('refresh', () => {
    window.gsap.delayedCall(0.05, () => {
      setHeight();
    });
  });
}

function featuredWorkSlider() {
  new Swiper('.featured-work_slider', {
    slideClass: 'featured-work_card',
    wrapperClass: 'featured-work_list',
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    speed: 800,
    //resistanceRatio: 0.5,
    //freeMode: true,
    //freeModeMomentum: true,
    //freeModeMomentumRatio: 0.5,
    //freeModeSticky: true,
    loop: true,
    coverflowEffect: {
      rotate: 5,
      stretch: 0,
      modifier: 4,
      slideShadows: true,
    },
  });
}

function rainEmojis() {
  const matterCanvas = document.querySelector<HTMLCanvasElement>('#matter-canvas-target');

  if (!matterCanvas) {
    console.warn('Matter canvas not found for emoji rain');
    return;
  }

  // Configuration
  const config = {
    // Base size as percentage of viewport height or width
    objectSizeHeightBased: window.innerHeight * 0.1, // 10% of viewport height
    objectSizeWidthBased: window.innerWidth * 0.06, // 6% of viewport width
    // Use either objectSizeHeightBased or objectSizeWidthBased below
    get objectSize() {
      return this.objectSizeHeightBased; // Change to objectSizeWidthBased to test width-based scaling
    },
    colliderScale: 0.8,
    rainDuration: 10000,
    rainIntervalMin: 50,
    rainIntervalMax: 300,
    wallMargin: 100,
    mouseColliderSize: 40,
  };

  // Array of image URLs for textures
  const textures = [
    'https://uploads-ssl.webflow.com/66260e4321c76d6302aa74e5/66cc22ca6be309b888b1c855_cash.png',
    'https://uploads-ssl.webflow.com/66260e4321c76d6302aa74e5/66cc2e70406bb29f57b2e82d_sales.png',
    'https://uploads-ssl.webflow.com/66260e4321c76d6302aa74e5/66cc2e5b406bb29f57b2daea_moneybag.png',
  ];

  // module aliases
  let Engine = Matter.Engine,
    Render = Matter.Render,
    Runner = Matter.Runner,
    Bodies = Matter.Bodies,
    Composite = Matter.Composite,
    Body = Matter.Body;

  // create an engine
  let engine = Engine.create();

  // create a renderer
  let render = Render.create({
    canvas: matterCanvas,
    engine: engine,
    options: {
      background: 'transparent',
      wireframes: false,
      width: window.innerWidth,
      height: window.innerHeight,
    },
  });

  const createObject = () => {
    const xPos = config.wallMargin + Math.random() * (window.innerWidth - 2 * config.wallMargin);
    const randomTexture = textures[Math.floor(Math.random() * textures.length)];

    const box = Bodies.circle(xPos, -100, (config.objectSize / 2) * config.colliderScale, {
      restitution: 0.6,
      friction: 0.1,
      render: {
        sprite: {
          texture: randomTexture,
          xScale: config.objectSize / 100,
          yScale: config.objectSize / 100,
        },
      },
    });

    Composite.add(engine.world, box);
  };

  // create ground and walls with invisibility
  let ground = Bodies.rectangle(window.innerWidth / 2, window.innerHeight, window.innerWidth, 60, {
    isStatic: true,
    render: {
      fillStyle: 'transparent',
      visible: false,
    },
  });

  let leftWall = Bodies.rectangle(
    config.wallMargin / 2,
    window.innerHeight / 2,
    60,
    window.innerHeight,
    {
      isStatic: true,
      render: {
        fillStyle: 'transparent',
        visible: false,
      },
    }
  );

  let rightWall = Bodies.rectangle(
    window.innerWidth - config.wallMargin / 2,
    window.innerHeight / 2,
    60,
    window.innerHeight,
    {
      isStatic: true,
      render: {
        fillStyle: 'transparent',
        visible: false,
      },
    }
  );

  // Create mouse collider body
  let mouseCollider = Bodies.circle(0, 0, config.mouseColliderSize, {
    isStatic: true,
    friction: 0.1,
    restitution: 0.6,
    render: {
      fillStyle: 'rgba(255, 0, 0, 0)',
      visible: true,
    },
  });

  function updateMousePosition(e: MouseEvent) {
    if (!matterCanvas) return;

    const rect = matterCanvas.getBoundingClientRect();
    const scaleX = matterCanvas.width / rect.width;
    const scaleY = matterCanvas.height / rect.height;

    const mouseX = (e.clientX - rect.left) * scaleX;
    const mouseY = (e.clientY - rect.top) * scaleY;

    Body.setPosition(mouseCollider, {
      x: mouseX,
      y: mouseY,
    });
  }

  document.addEventListener('mousemove', updateMousePosition);

  document.addEventListener('mouseleave', () => {
    Body.setPosition(mouseCollider, {
      x: -100,
      y: -100,
    });
  });

  // Add window resize handler for responsive sizing
  window.addEventListener('resize', () => {
    // Update canvas size
    render.canvas.width = window.innerWidth;
    render.canvas.height = window.innerHeight;

    // Update object sizes
    config.objectSizeHeightBased = window.innerHeight * 0.12;
    config.objectSizeWidthBased = window.innerWidth * 0.06;

    // Update ground and walls
    Body.setPosition(ground, {
      x: window.innerWidth / 2,
      y: window.innerHeight,
    });
    Body.setPosition(rightWall, {
      x: window.innerWidth - config.wallMargin / 2,
      y: window.innerHeight / 2,
    });
  });

  // Add all bodies to the world
  Composite.add(engine.world, [ground, leftWall, rightWall, mouseCollider]);

  // run the renderer
  Render.run(render);

  // create runner
  let runner = Runner.create();

  // run the engine
  Runner.run(runner, engine);

  // Function to start the rain effect
  const startRain = () => {
    const endTime = Date.now() + config.rainDuration;

    const rainLoop = () => {
      if (Date.now() > endTime) return;

      createObject();

      // Schedule the next object creation at a random interval
      const nextInterval =
        Math.random() * (config.rainIntervalMax - config.rainIntervalMin) + config.rainIntervalMin;
      setTimeout(rainLoop, nextInterval);
    };

    rainLoop(); // Start the loop
  };

  // Use Intersection Observer to trigger the rain effect
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          startRain();
          observer.disconnect();
        }
      });
    },
    {
      threshold: 0.1,
    }
  );

  observer.observe(matterCanvas);
}

function initDraggableElements() {
  const container = document.querySelector('#drag-container');
  const draggableElements = document.querySelectorAll('[data-cursor="drag me"]');
  const cursor = document.querySelectorAll('.cursor');
  const xTo = window.gsap.quickTo(cursor, 'x', { duration: 0.2, ease: 'power3' });
  const yTo = window.gsap.quickTo(cursor, 'y', { duration: 0.2, ease: 'power3' });

  if (!container || !draggableElements.length) {
    console.warn('Draggable elements or container not found');
    return;
  }

  draggableElements.forEach((element) => {
    window.Draggable.create(element, {
      type: 'x,y',
      bounds: container,
      inertia: true,
      dragResistance: 0.2,
      edgeResistance: 0.65,
      zIndexBoost: false,
      onDragStart: function (e) {
        window.gsap.to(this.target, { scale: 1.05, duration: 0.2 });
        xTo(e.clientX);
        yTo(e.clientY);
      },
      onDrag: function (e) {
        xTo(e.clientX);
        yTo(e.clientY);
      },
      onDragEnd: function (e) {
        window.gsap.to(this.target, { scale: 1, duration: 0.3 });
        // Set final position after a small delay to ensure smooth transition
        setTimeout(() => {
          xTo(e.clientX);
          yTo(e.clientY);
        }, 50);
      },
    });
  });
}
